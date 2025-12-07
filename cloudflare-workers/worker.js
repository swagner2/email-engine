/**
 * Email Marketing Automation MCP Server
 * Cloudflare Workers Implementation
 * 
 * This worker handles automated Klaviyo operations for multiple client accounts
 */

// Multi-client API key management
const CLIENTS = {
  // Add your clients here with their Klaviyo API keys
  // Format: 'client-slug': 'Klaviyo-Private-Key'
  // Example: 'acme-corp': 'pk_abc123...'
};

// Klaviyo API configuration
const KLAVIYO_API_BASE = 'https://a.klaviyo.com/api';
const KLAVIYO_API_VERSION = '2024-10-15';

/**
 * Main request handler
 */
export default {
  async fetch(request, env, ctx) {
    // CORS headers for development
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, X-Client-ID, X-API-Key',
    };

    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    try {
      const url = new URL(request.url);
      const path = url.pathname;

      // Route requests
      if (path === '/health') {
        return jsonResponse({ status: 'healthy', timestamp: new Date().toISOString() }, corsHeaders);
      }

      if (path === '/automations/create-segment') {
        return await handleCreateSegment(request, env, corsHeaders);
      }

      if (path === '/automations/create-flow') {
        return await handleCreateFlow(request, env, corsHeaders);
      }

      if (path === '/automations/create-campaign') {
        return await handleCreateCampaign(request, env, corsHeaders);
      }

      if (path === '/automations/analyze-performance') {
        return await handleAnalyzePerformance(request, env, corsHeaders);
      }

      // 404 for unknown routes
      return jsonResponse({ error: 'Endpoint not found' }, corsHeaders, 404);

    } catch (error) {
      console.error('Worker error:', error);
      return jsonResponse({ 
        error: 'Internal server error', 
        message: error.message 
      }, corsHeaders, 500);
    }
  }
};

/**
 * Handle segment creation automation
 */
async function handleCreateSegment(request, env, corsHeaders) {
  if (request.method !== 'POST') {
    return jsonResponse({ error: 'Method not allowed' }, corsHeaders, 405);
  }

  try {
    const body = await request.json();
    const { clientId, segmentData } = body;

    // Validate client ID
    const apiKey = getClientApiKey(clientId, env);
    if (!apiKey) {
      return jsonResponse({ error: 'Invalid client ID' }, corsHeaders, 401);
    }

    // Validate segment data
    if (!segmentData || !segmentData.name || !segmentData.definition) {
      return jsonResponse({ 
        error: 'Invalid segment data', 
        required: ['name', 'definition'] 
      }, corsHeaders, 400);
    }

    // Create segment in Klaviyo
    const segment = await createKlaviyoSegment(apiKey, segmentData);

    // Log the automation
    await logAutomation(env, {
      clientId,
      action: 'create_segment',
      segmentId: segment.id,
      segmentName: segmentData.name,
      timestamp: new Date().toISOString()
    });

    return jsonResponse({
      success: true,
      segment: {
        id: segment.id,
        name: segment.attributes.name,
        url: `https://www.klaviyo.com/segment/${segment.id}`
      }
    }, corsHeaders);

  } catch (error) {
    console.error('Create segment error:', error);
    return jsonResponse({ 
      error: 'Failed to create segment', 
      message: error.message 
    }, corsHeaders, 500);
  }
}

/**
 * Handle flow creation automation
 */
async function handleCreateFlow(request, env, corsHeaders) {
  if (request.method !== 'POST') {
    return jsonResponse({ error: 'Method not allowed' }, corsHeaders, 405);
  }

  try {
    const body = await request.json();
    const { clientId, flowData } = body;

    // Validate client ID
    const apiKey = getClientApiKey(clientId, env);
    if (!apiKey) {
      return jsonResponse({ error: 'Invalid client ID' }, corsHeaders, 401);
    }

    // Validate flow data
    if (!flowData || !flowData.name || !flowData.trigger || !flowData.actions) {
      return jsonResponse({ 
        error: 'Invalid flow data', 
        required: ['name', 'trigger', 'actions'] 
      }, corsHeaders, 400);
    }

    // Create flow in Klaviyo
    const flow = await createKlaviyoFlow(apiKey, flowData);

    // Log the automation
    await logAutomation(env, {
      clientId,
      action: 'create_flow',
      flowId: flow.id,
      flowName: flowData.name,
      timestamp: new Date().toISOString()
    });

    return jsonResponse({
      success: true,
      flow: {
        id: flow.id,
        name: flow.attributes.name,
        status: flow.attributes.status,
        url: `https://www.klaviyo.com/flow/${flow.id}`
      }
    }, corsHeaders);

  } catch (error) {
    console.error('Create flow error:', error);
    return jsonResponse({ 
      error: 'Failed to create flow', 
      message: error.message 
    }, corsHeaders, 500);
  }
}

/**
 * Handle campaign creation automation
 */
async function handleCreateCampaign(request, env, corsHeaders) {
  if (request.method !== 'POST') {
    return jsonResponse({ error: 'Method not allowed' }, corsHeaders, 405);
  }

  try {
    const body = await request.json();
    const { clientId, campaignData } = body;

    // Validate client ID
    const apiKey = getClientApiKey(clientId, env);
    if (!apiKey) {
      return jsonResponse({ error: 'Invalid client ID' }, corsHeaders, 401);
    }

    // Validate campaign data
    if (!campaignData || !campaignData.name || !campaignData.template || !campaignData.segment) {
      return jsonResponse({ 
        error: 'Invalid campaign data', 
        required: ['name', 'template', 'segment'] 
      }, corsHeaders, 400);
    }

    // Create campaign in Klaviyo
    const campaign = await createKlaviyoCampaign(apiKey, campaignData);

    // Log the automation
    await logAutomation(env, {
      clientId,
      action: 'create_campaign',
      campaignId: campaign.id,
      campaignName: campaignData.name,
      timestamp: new Date().toISOString()
    });

    return jsonResponse({
      success: true,
      campaign: {
        id: campaign.id,
        name: campaign.attributes.name,
        status: campaign.attributes.status,
        url: `https://www.klaviyo.com/campaign/${campaign.id}`
      }
    }, corsHeaders);

  } catch (error) {
    console.error('Create campaign error:', error);
    return jsonResponse({ 
      error: 'Failed to create campaign', 
      message: error.message 
    }, corsHeaders, 500);
  }
}

/**
 * Handle performance analysis automation
 */
async function handleAnalyzePerformance(request, env, corsHeaders) {
  if (request.method !== 'POST') {
    return jsonResponse({ error: 'Method not allowed' }, corsHeaders, 405);
  }

  try {
    const body = await request.json();
    const { clientId, analysisType, resourceId } = body;

    // Validate client ID
    const apiKey = getClientApiKey(clientId, env);
    if (!apiKey) {
      return jsonResponse({ error: 'Invalid client ID' }, corsHeaders, 401);
    }

    let performanceData;

    if (analysisType === 'campaign') {
      performanceData = await getCampaignPerformance(apiKey, resourceId);
    } else if (analysisType === 'flow') {
      performanceData = await getFlowPerformance(apiKey, resourceId);
    } else {
      return jsonResponse({ 
        error: 'Invalid analysis type', 
        allowed: ['campaign', 'flow'] 
      }, corsHeaders, 400);
    }

    return jsonResponse({
      success: true,
      data: performanceData
    }, corsHeaders);

  } catch (error) {
    console.error('Analyze performance error:', error);
    return jsonResponse({ 
      error: 'Failed to analyze performance', 
      message: error.message 
    }, corsHeaders, 500);
  }
}

/**
 * Get client API key from environment or hardcoded CLIENTS object
 */
function getClientApiKey(clientId, env) {
  // First check environment variables (format: CLIENT_APIKEY_clientid)
  const envKey = `CLIENT_APIKEY_${clientId.toUpperCase().replace(/-/g, '_')}`;
  if (env[envKey]) {
    return env[envKey];
  }

  // Fallback to hardcoded CLIENTS object
  return CLIENTS[clientId];
}

/**
 * Create a segment in Klaviyo
 */
async function createKlaviyoSegment(apiKey, segmentData) {
  const response = await fetch(`${KLAVIYO_API_BASE}/segments/`, {
    method: 'POST',
    headers: {
      'Authorization': `Klaviyo-API-Key ${apiKey}`,
      'revision': KLAVIYO_API_VERSION,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      data: {
        type: 'segment',
        attributes: {
          name: segmentData.name,
          definition: segmentData.definition
        }
      }
    })
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Klaviyo API error: ${response.status} - ${error}`);
  }

  const result = await response.json();
  return result.data;
}

/**
 * Create a flow in Klaviyo
 */
async function createKlaviyoFlow(apiKey, flowData) {
  // Step 1: Create the flow
  const flowResponse = await fetch(`${KLAVIYO_API_BASE}/flows/`, {
    method: 'POST',
    headers: {
      'Authorization': `Klaviyo-API-Key ${apiKey}`,
      'revision': KLAVIYO_API_VERSION,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      data: {
        type: 'flow',
        attributes: {
          name: flowData.name,
          status: 'draft',
          trigger_type: flowData.trigger.type
        }
      }
    })
  });

  if (!flowResponse.ok) {
    const error = await flowResponse.text();
    throw new Error(`Klaviyo API error: ${flowResponse.status} - ${error}`);
  }

  const flow = await flowResponse.json();
  
  // Step 2: Add actions to the flow (simplified - actual implementation would iterate through actions)
  // This would require additional API calls to create flow actions
  
  return flow.data;
}

/**
 * Create a campaign in Klaviyo
 */
async function createKlaviyoCampaign(apiKey, campaignData) {
  const response = await fetch(`${KLAVIYO_API_BASE}/campaigns/`, {
    method: 'POST',
    headers: {
      'Authorization': `Klaviyo-API-Key ${apiKey}`,
      'revision': KLAVIYO_API_VERSION,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      data: {
        type: 'campaign',
        attributes: {
          name: campaignData.name,
          audiences: {
            included: [campaignData.segment]
          }
        },
        relationships: {
          'campaign-messages': {
            data: [{
              type: 'campaign-message',
              id: campaignData.template
            }]
          }
        }
      }
    })
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Klaviyo API error: ${response.status} - ${error}`);
  }

  const result = await response.json();
  return result.data;
}

/**
 * Get campaign performance data
 */
async function getCampaignPerformance(apiKey, campaignId) {
  const response = await fetch(`${KLAVIYO_API_BASE}/campaigns/${campaignId}/?fields[campaign]=name,status,send_time,audiences&include=campaign-messages`, {
    method: 'GET',
    headers: {
      'Authorization': `Klaviyo-API-Key ${apiKey}`,
      'revision': KLAVIYO_API_VERSION
    }
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Klaviyo API error: ${response.status} - ${error}`);
  }

  return await response.json();
}

/**
 * Get flow performance data
 */
async function getFlowPerformance(apiKey, flowId) {
  const response = await fetch(`${KLAVIYO_API_BASE}/flows/${flowId}/?fields[flow]=name,status,created,updated&include=flow-actions`, {
    method: 'GET',
    headers: {
      'Authorization': `Klaviyo-API-Key ${apiKey}`,
      'revision': KLAVIYO_API_VERSION
    }
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Klaviyo API error: ${response.status} - ${error}`);
  }

  return await response.json();
}

/**
 * Log automation activity to KV storage
 */
async function logAutomation(env, logData) {
  if (!env.AUTOMATION_LOGS) return;

  const logKey = `log:${logData.clientId}:${Date.now()}`;
  await env.AUTOMATION_LOGS.put(logKey, JSON.stringify(logData), {
    expirationTtl: 2592000 // 30 days
  });
}

/**
 * Helper function to create JSON responses
 */
function jsonResponse(data, corsHeaders = {}, status = 200) {
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers: {
      'Content-Type': 'application/json',
      ...corsHeaders
    }
  });
}
