# AI Prompts for Automation JSON Generation

This document contains ready-to-use prompts for Claude (or other AI models) to generate the JSON payloads required by the Cloudflare Worker automation endpoints.

---

## Segment Creation Prompts

### Basic Segment Prompt

```
I need you to generate a Klaviyo segment definition in JSON format.

Requirements:
- Segment name: [DESCRIBE SEGMENT]
- Criteria: [DESCRIBE CRITERIA]

Output format:
{
  "name": "Segment Name",
  "definition": {
    "and": [
      // Klaviyo segment definition
    ]
  }
}

Use Klaviyo's segment definition syntax with properties like:
- properties.total_spent
- properties.order_count
- properties.created (for profile creation date)
- Custom properties as needed
```

### Example: VIP Segment

```
Generate a Klaviyo segment definition for VIP customers who have:
- Spent more than $500 total
- Placed at least 3 orders
- Made a purchase in the last 90 days

Output as JSON.
```

**Expected Output:**
```json
{
  "name": "VIP Customers - Active",
  "definition": {
    "and": [
      {
        "greater-than": [
          {"property": "properties.total_spent"},
          500
        ]
      },
      {
        "greater-than": [
          {"property": "properties.order_count"},
          3
        ]
      },
      {
        "greater-than": [
          {"property": "properties.last_order_date"},
          {"relative-date": "90 days ago"}
        ]
      }
    ]
  }
}
```

### Example: Lapsed Customers

```
Generate a Klaviyo segment definition for lapsed customers who:
- Have purchased before (order_count > 0)
- Haven't purchased in the last 180 days
- Are still subscribed to email

Output as JSON.
```

---

## Flow Creation Prompts

### Basic Flow Prompt

```
I need you to generate a Klaviyo flow structure in JSON format.

Flow details:
- Name: [FLOW NAME]
- Trigger: [TRIGGER TYPE - e.g., "list-subscribe", "placed-order", "abandoned-cart"]
- Emails: [DESCRIBE EMAIL SEQUENCE]

Output format:
{
  "name": "Flow Name",
  "trigger": {
    "type": "trigger-type"
  },
  "actions": [
    {
      "type": "email",
      "delay": 0,
      "subject": "Email subject",
      "previewText": "Preview text",
      "content": "Email HTML or reference to template"
    },
    {
      "type": "delay",
      "duration": 86400
    }
  ]
}
```

### Example: Welcome Series

```
Generate a Klaviyo flow structure for a 3-email Welcome Series:

Email 1 (Immediate):
- Subject: "Welcome to {{organization.name}}!"
- Content: Welcome message, introduce brand, offer 10% discount code

Email 2 (2 days later):
- Subject: "Here's what makes us different"
- Content: Brand story, customer testimonials, product highlights

Email 3 (5 days after Email 2):
- Subject: "Your exclusive offer expires soon"
- Content: Reminder about discount, bestsellers, urgency

Output as JSON.
```

**Expected Output:**
```json
{
  "name": "Welcome Series - 3 Emails",
  "trigger": {
    "type": "list-subscribe"
  },
  "actions": [
    {
      "type": "email",
      "delay": 0,
      "subject": "Welcome to {{organization.name}}!",
      "previewText": "Thanks for joining us! Here's 10% off your first order.",
      "content": "Welcome email content with discount code"
    },
    {
      "type": "delay",
      "duration": 172800
    },
    {
      "type": "email",
      "delay": 0,
      "subject": "Here's what makes us different",
      "previewText": "Discover why thousands of customers love us",
      "content": "Brand story and testimonials"
    },
    {
      "type": "delay",
      "duration": 432000
    },
    {
      "type": "email",
      "delay": 0,
      "subject": "Your exclusive offer expires soon",
      "previewText": "Don't miss out on 10% off - expires in 48 hours",
      "content": "Urgency-driven email with bestsellers"
    }
  ]
}
```

### Example: Abandoned Cart Flow

```
Generate a Klaviyo flow structure for an Abandoned Cart recovery sequence:

Email 1 (1 hour after abandonment):
- Subject: "You left something behind..."
- Content: Show cart items, easy checkout link

Email 2 (24 hours after Email 1):
- Subject: "Still thinking it over? Here's 10% off"
- Content: Cart reminder + discount incentive

Email 3 (48 hours after Email 2):
- Subject: "Last chance - your cart expires soon"
- Content: Urgency + social proof + discount

Output as JSON.
```

---

## Campaign Creation Prompts

### Basic Campaign Prompt

```
I need you to generate a Klaviyo campaign structure in JSON format.

Campaign details:
- Name: [CAMPAIGN NAME]
- Target segment: [SEGMENT ID or description]
- Template: [TEMPLATE ID or description]
- Subject line: [SUBJECT]
- Preview text: [PREVIEW]

Output format:
{
  "name": "Campaign Name",
  "segment": "SEGMENT_ID",
  "template": "TEMPLATE_ID",
  "subject": "Subject line",
  "previewText": "Preview text"
}
```

### Example: Product Launch Campaign

```
Generate a Klaviyo campaign structure for a new product launch:

Campaign: "Spring Collection Launch 2024"
Target: All active subscribers (segment ID: XYZ123)
Template: Use template ID: TPL456
Subject: "Introducing our Spring Collection 🌸"
Preview: "Be the first to shop 20 new arrivals"

Output as JSON.
```

**Expected Output:**
```json
{
  "name": "Spring Collection Launch 2024",
  "segment": "XYZ123",
  "template": "TPL456",
  "subject": "Introducing our Spring Collection 🌸",
  "previewText": "Be the first to shop 20 new arrivals"
}
```

---

## Performance Analysis Prompts

### Campaign Analysis Prompt

```
I need to analyze the performance of a Klaviyo campaign.

Campaign ID: [CAMPAIGN_ID]
Client: [CLIENT_ID]

Generate a JSON request to fetch campaign performance data.

Output format:
{
  "clientId": "client-id",
  "analysisType": "campaign",
  "resourceId": "CAMPAIGN_ID"
}
```

### Flow Analysis Prompt

```
I need to analyze the performance of a Klaviyo flow.

Flow ID: [FLOW_ID]
Client: [CLIENT_ID]

Generate a JSON request to fetch flow performance data.

Output format:
{
  "clientId": "client-id",
  "analysisType": "flow",
  "resourceId": "FLOW_ID"
}
```

---

## Advanced Prompts

### Multi-Condition Segment

```
Generate a Klaviyo segment definition for customers who match ANY of these criteria:

1. VIP tier: total_spent > $1000 AND order_count > 5
2. Engaged subscribers: opened at least 5 emails in last 30 days
3. Recent high-value purchase: single order > $200 in last 14 days

Use "or" logic at the top level, "and" logic within each condition group.

Output as JSON.
```

### Dynamic Flow with Conditional Split

```
Generate a Klaviyo flow structure for a post-purchase sequence with conditional logic:

Trigger: Placed Order

Email 1 (Immediate): Order confirmation
Delay: 3 days
Conditional Split: If order value > $100, send Email 2A, else send Email 2B
Email 2A (High-value): "Thanks for your premium purchase" + VIP program invite
Email 2B (Standard): "Thanks for your purchase" + product care tips
Delay: 7 days
Email 3 (All): Review request

Output as JSON with conditional logic.
```

---

## Using These Prompts

### Step 1: Copy the Prompt
Select the appropriate prompt template above.

### Step 2: Customize
Replace placeholders like [CAMPAIGN NAME] with actual values.

### Step 3: Send to Claude
Paste the customized prompt into Claude.

### Step 4: Get JSON
Claude will return properly formatted JSON.

### Step 5: Send to Worker
Use the JSON in your API request to the Cloudflare Worker.

### Example Complete Workflow

```bash
# 1. Ask Claude (using prompt above)
# Claude returns JSON

# 2. Send to Worker
curl -X POST https://your-worker.workers.dev/automations/create-segment \
  -H "Content-Type: application/json" \
  -d '{
    "clientId": "acme-corp",
    "segmentData": {
      "name": "VIP Customers - Active",
      "definition": {...}
    }
  }'

# 3. Segment created in Klaviyo!
```

---

## Tips for Better AI Outputs

1. **Be Specific:** The more details you provide, the better the output
2. **Use Examples:** Reference similar segments/flows you've created before
3. **Iterate:** If the first output isn't perfect, ask Claude to refine it
4. **Validate:** Always review the JSON before sending to production
5. **Save Successful Prompts:** Build a library of prompts that work well

---

**Next Steps:**
- Try these prompts with Claude
- Build your own prompt library
- Integrate with your automation workflow
