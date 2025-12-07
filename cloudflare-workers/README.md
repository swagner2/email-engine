# Email Marketing Automation - Cloudflare Workers Implementation

This is a production-ready Cloudflare Workers implementation of the MCP automation system for managing multiple Klaviyo client accounts.

---

## Architecture Overview

This implementation uses **Cloudflare Workers** as the MCP server, providing:

- **Serverless execution** - No servers to manage
- **Global edge deployment** - Low latency worldwide
- **Multi-client support** - Secure API key management for each client
- **Automatic scaling** - Handles any load automatically
- **Built-in security** - HTTPS, DDoS protection, secure secrets

### Multi-Client API Key Management

The system supports two methods for managing client API keys:

1. **Environment Variables** (Recommended for production)
   - Stored as encrypted secrets in Cloudflare
   - Format: `CLIENT_APIKEY_CLIENTNAME`
   - Example: `CLIENT_APIKEY_ACME_CORP`

2. **Hardcoded CLIENTS Object** (For development/testing)
   - Defined in `worker.js`
   - Quick setup for testing
   - Not recommended for production

---

## Setup Instructions

### Prerequisites

- Cloudflare account (free tier works)
- Node.js 16+ installed
- Klaviyo account(s) with API access

### Step 1: Install Wrangler CLI

```bash
npm install -g wrangler
```

### Step 2: Authenticate with Cloudflare

```bash
wrangler login
```

This will open a browser window to authenticate.

### Step 3: Install Dependencies

```bash
cd cloudflare-workers
npm install
```

### Step 4: Create KV Namespace (Optional but Recommended)

KV storage is used for logging automation activity.

```bash
wrangler kv:namespace create "AUTOMATION_LOGS"
```

Copy the namespace ID and update `wrangler.toml`:

```toml
[[kv_namespaces]]
binding = "AUTOMATION_LOGS"
id = "YOUR_KV_NAMESPACE_ID_HERE"
```

### Step 5: Configure Client API Keys

#### Method A: Using Secrets (Recommended)

For each client, add their Klaviyo API key as a secret:

```bash
wrangler secret put CLIENT_APIKEY_ACME_CORP
# Paste the Klaviyo Private API Key when prompted
```

The client ID format:
- Use lowercase with hyphens
- Example: `acme-corp`, `brand-xyz`, `client-name`

#### Method B: Hardcode for Testing

Edit `worker.js` and add to the `CLIENTS` object:

```javascript
const CLIENTS = {
  'acme-corp': 'pk_abc123...',
  'brand-xyz': 'pk_def456...'
};
```

### Step 6: Deploy the Worker

```bash
wrangler deploy
```

You'll receive a URL like: `https://email-marketing-automation.YOUR_SUBDOMAIN.workers.dev`

---

## API Endpoints

### Health Check

**GET** `/health`

Returns worker status.

```bash
curl https://your-worker.workers.dev/health
```

### Create Segment

**POST** `/automations/create-segment`

Creates a new segment in Klaviyo.

**Request Body:**
```json
{
  "clientId": "acme-corp",
  "segmentData": {
    "name": "VIP Customers",
    "definition": {
      "and": [
        {
          "greater-than": [
            {
              "property": "properties.total_spent"
            },
            500
          ]
        }
      ]
    }
  }
}
```

**Response:**
```json
{
  "success": true,
  "segment": {
    "id": "ABC123",
    "name": "VIP Customers",
    "url": "https://www.klaviyo.com/segment/ABC123"
  }
}
```

### Create Flow

**POST** `/automations/create-flow`

Creates a new flow in Klaviyo.

**Request Body:**
```json
{
  "clientId": "acme-corp",
  "flowData": {
    "name": "Welcome Series",
    "trigger": {
      "type": "list-subscribe"
    },
    "actions": [
      {
        "type": "email",
        "delay": 0,
        "subject": "Welcome to {{organization.name}}!",
        "content": "..."
      }
    ]
  }
}
```

### Create Campaign

**POST** `/automations/create-campaign`

Creates a new campaign in Klaviyo.

**Request Body:**
```json
{
  "clientId": "acme-corp",
  "campaignData": {
    "name": "Black Friday Sale",
    "template": "TEMPLATE_ID",
    "segment": "SEGMENT_ID"
  }
}
```

### Analyze Performance

**POST** `/automations/analyze-performance`

Retrieves performance data for campaigns or flows.

**Request Body:**
```json
{
  "clientId": "acme-corp",
  "analysisType": "campaign",
  "resourceId": "CAMPAIGN_ID"
}
```

---

## Using with AI (Claude)

### Example Workflow: Creating a Segment

**Step 1:** Ask Claude to generate segment JSON

```
Prompt: "Create a segment definition for customers who have purchased 
more than 3 times and spent over $500"
```

**Step 2:** Claude returns:

```json
{
  "name": "High-Value Repeat Customers",
  "definition": {
    "and": [
      {
        "greater-than": [
          {"property": "properties.order_count"},
          3
        ]
      },
      {
        "greater-than": [
          {"property": "properties.total_spent"},
          500
        ]
      }
    ]
  }
}
```

**Step 3:** Send to your Worker

```bash
curl -X POST https://your-worker.workers.dev/automations/create-segment \
  -H "Content-Type: application/json" \
  -d '{
    "clientId": "acme-corp",
    "segmentData": {
      "name": "High-Value Repeat Customers",
      "definition": {...}
    }
  }'
```

**Step 4:** Segment is created in Klaviyo automatically!

---

## Security Best Practices

### API Key Management

1. **Never commit API keys to Git**
2. **Use Wrangler secrets for production**
3. **Rotate keys regularly**
4. **Use different keys for development/production**

### Access Control

Add authentication to your Worker:

```javascript
// Add to worker.js
const MASTER_API_KEY = env.MASTER_API_KEY;

function authenticate(request) {
  const apiKey = request.headers.get('X-API-Key');
  return apiKey === MASTER_API_KEY;
}
```

Then set the master key:

```bash
wrangler secret put MASTER_API_KEY
```

### Rate Limiting

Implement rate limiting to prevent abuse:

```javascript
// Use Cloudflare's built-in rate limiting
// Or implement custom logic with KV storage
```

---

## Monitoring & Debugging

### View Logs

```bash
wrangler tail
```

This streams real-time logs from your Worker.

### View Automation Logs

Automation activity is logged to KV storage. Retrieve logs:

```bash
wrangler kv:key list --namespace-id=YOUR_NAMESPACE_ID
wrangler kv:key get "log:acme-corp:1234567890" --namespace-id=YOUR_NAMESPACE_ID
```

### Cloudflare Dashboard

Monitor requests, errors, and performance:
- https://dash.cloudflare.com/
- Navigate to Workers & Pages > Your Worker

---

## Cost Estimation

### Free Tier
- 100,000 requests/day
- 10ms CPU time per request
- **Perfect for most agencies**

### Paid Plan ($5/month)
- 10 million requests/month included
- Additional requests: $0.50 per million
- **Scales effortlessly**

### Example Usage
- 10 clients
- 50 automations per client per day
- 500 requests/day = **100% free**

---

## Deployment Workflow

### Development

```bash
wrangler dev
```

Test locally at `http://localhost:8787`

### Staging

```bash
wrangler deploy --env staging
```

### Production

```bash
wrangler deploy --env production
```

---

## Adding New Clients

### Quick Add

```bash
# Add API key as secret
wrangler secret put CLIENT_APIKEY_NEWCLIENT

# Test immediately
curl -X POST https://your-worker.workers.dev/automations/create-segment \
  -H "Content-Type: application/json" \
  -d '{"clientId": "newclient", "segmentData": {...}}'
```

### Client Naming Convention

Use consistent, URL-safe client IDs:
- `acme-corp` ✅
- `brand-xyz` ✅
- `client-123` ✅
- `Acme Corp` ❌ (spaces)
- `acme_corp` ❌ (underscores in ID, though they work in env var names)

---

## Troubleshooting

### Error: "Invalid client ID"

**Cause:** Client API key not found

**Solution:**
1. Check client ID spelling
2. Verify secret was set: `wrangler secret list`
3. Ensure environment variable format: `CLIENT_APIKEY_CLIENTID`

### Error: "Klaviyo API error: 401"

**Cause:** Invalid or expired API key

**Solution:**
1. Verify API key in Klaviyo dashboard
2. Ensure key has correct permissions
3. Update secret: `wrangler secret put CLIENT_APIKEY_CLIENTID`

### Error: "Klaviyo API error: 429"

**Cause:** Rate limit exceeded

**Solution:**
1. Implement request queuing
2. Add delays between requests
3. Contact Klaviyo to increase limits

---

## Next Steps

1. **Deploy the Worker** - Get it live in minutes
2. **Test with one client** - Verify segment creation works
3. **Integrate with AI** - Connect Claude to generate JSON
4. **Add more automations** - Build flow and campaign creation
5. **Monitor and optimize** - Track usage and performance

---

## Support

For issues or questions:
- Check Cloudflare Workers docs: https://developers.cloudflare.com/workers/
- Check Klaviyo API docs: https://developers.klaviyo.com/
- Review the implementation plan in the framework

---

**Built with the Email Marketing Framework**
Version 1.0 | Cloudflare Workers Implementation
