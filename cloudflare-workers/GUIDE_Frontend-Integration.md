> This guide provides a detailed, step-by-step plan for building a custom front-end interface that integrates with your Cloudflare Worker. This allows you to offer a client-facing portal for requesting and managing email marketing automations.

# Guide: Building a Custom Front-End for Your Automation Worker

**Version:** 1.0
**Author:** Manus AI

---

## Objective

To create a secure, user-friendly web interface where your clients can submit natural language requests for email marketing automations (e.g., "Create a segment of VIPs"). This interface will communicate with your Cloudflare Worker, which in turn uses an AI (Claude) and the Klaviyo API to execute the request.

## Architecture Overview

![Frontend Architecture Diagram](https://i.imgur.com/8a6b2cE.png)

1.  **Client User:** Interacts with the React front-end.
2.  **React Front-End:** A web application that provides forms for submitting automation requests. It sends these requests to the Cloudflare Worker.
3.  **Cloudflare Worker:** Acts as the secure backend. It receives requests from the front-end, uses Claude to translate the natural language request into a JSON payload, and then calls the appropriate Klaviyo API.
4.  **Claude (AI):** The "translation layer" that converts human language into machine-readable JSON.
5.  **Klaviyo API:** The execution layer that performs the action in the client's account.

## Recommended Tech Stack

-   **Framework:** **React** (with Vite for fast setup and development)
-   **Styling:** **Tailwind CSS** (for rapid, utility-first UI development)
-   **Language:** **TypeScript** (for type safety and better code quality)

This stack is modern, highly performant, and has a strong developer community.

---

## Step-by-Step Implementation Plan

Here's how to build the front-end, using Claude to write the code at each step.

### Step 1: Project Setup with Vite

**Objective:** Create a new React + TypeScript + Tailwind CSS project.

**Your Action:** Give Claude the following prompt.

**Claude Prompt:**
```
"Generate the shell commands to create a new web project using Vite with React, TypeScript, and Tailwind CSS. Include all necessary installation and configuration steps."
```

**Expected Output from Claude:**

```bash
# 1. Create Vite project
npm create vite@latest client-automation-portal -- --template react-ts

# 2. Navigate into the project directory
cd client-automation-portal

# 3. Install Tailwind CSS and its peer dependencies
npm install -D tailwindcss postcss autoprefixer

# 4. Initialize Tailwind CSS
npx tailwindcss init -p

# 5. Configure template paths in tailwind.config.js
# (Claude will provide the exact code to paste)

# 6. Add Tailwind directives to your main CSS file
# (Claude will provide the exact CSS to add)

# 7. Install project dependencies
npm install

# 8. Run the development server
npm run dev
```

### Step 2: Build the "Create Segment" UI Component

**Objective:** Create a React component with a form that allows clients to request a new segment.

**Your Action:** Give Claude the following prompt.

**Claude Prompt:**
```
"Using React, TypeScript, and Tailwind CSS, create a component named `CreateSegmentForm`. It should include:

1.  A dropdown to select the `clientId` (pre-fill with 'acme-corp' and 'brand-xyz').
2.  A textarea for the user to describe the segment in natural language (e.g., 'Customers who spent over $500').
3.  A submit button.
4.  State management using `useState` to handle form inputs, loading status, and success/error messages."
```

**Expected Output:** Claude will generate a complete `.tsx` file for the `CreateSegmentForm` component with all the requested features.

### Step 3: Create the API Service

**Objective:** Write the client-side code to communicate with the Cloudflare Worker.

**Your Action:** Give Claude the following prompt.

**Claude Prompt:**
```
"Create a TypeScript function named `requestAutomation` that sends a POST request to a Cloudflare Worker. The function should:

1.  Accept the endpoint path (e.g., '/automations/create-segment'), the `clientId`, and the request payload.
2.  Include a `X-API-Key` header for authentication.
3.  Include a `X-Client-ID` header to specify the client account.
4.  Handle JSON stringification of the body.
5.  Return the JSON response from the worker.
6.  Include robust error handling for network issues and non-200 status codes."
```

**Expected Output:** Claude will generate a reusable TypeScript function that you can use to call any of your worker's endpoints.

### Step 4: Integrate UI with API Service

**Objective:** Connect the form submission to the API service and handle the response.

**Your Action:** Give Claude the following prompt.

**Claude Prompt:**
```
"Now, update the `CreateSegmentForm` component. When the form is submitted, it should:

1.  Call the `requestAutomation` function with the correct endpoint and payload.
2.  The payload will be a natural language string from the textarea.
3.  While the request is in flight, disable the button and show a loading spinner.
4.  If the request is successful, show a success message with the new segment URL.
5.  If the request fails, show a user-friendly error message."
```

**Expected Output:** Claude will provide the updated `CreateSegmentForm.tsx` file with the complete, integrated logic.

### Step 5: Implement the AI Translation Layer in the Worker

**Objective:** Modify the Cloudflare Worker to accept a natural language prompt, call Claude to translate it to JSON, and then proceed with the Klaviyo API call.

**Your Action:** Give Claude the following prompt.

**Claude Prompt:**
```
"Update the `handleCreateSegment` function in my Cloudflare Worker script. It currently expects a `segmentData` JSON object. I want to change it to accept a `naturalLanguagePrompt` string instead.

The new workflow should be:

1.  Receive the `naturalLanguagePrompt` from the front-end.
2.  Make a POST request to the Claude API, sending the prompt and instructing it to return a Klaviyo segment definition in JSON format.
3.  Parse the JSON response from Claude.
4.  Use the parsed JSON as the `segmentData` to call the `createKlaviyoSegment` function.
5.  Include error handling for the Claude API call."
```

**Expected Output:** Claude will provide the updated JavaScript code for your `worker.js` file, effectively inserting itself into the automation workflow.

### Step 6: Secure the Front-End and Worker

**Objective:** Ensure that only authorized users can make requests to your worker.

**Your Action:** Give Claude the following prompt.

**Claude Prompt:**
```
"I need to secure my Cloudflare Worker and React front-end. Propose a simple but effective authentication strategy. I'm thinking of a master API key.

Provide the code for:
1.  The Cloudflare Worker to check for a `X-API-Key` header and reject requests without a valid key.
2.  The React front-end to store this key in an environment variable and include it in all API requests."
```

**Expected Output:** Claude will provide:
-   A middleware function for your `worker.js` to protect your endpoints.
-   Instructions on how to use `.env` files in your React project to securely manage the master API key.
-   The updated `requestAutomation` function that reads the key from the environment and adds it to the headers.

---

## Final Result

By following these six steps with Claude, you will have built a complete, secure, and user-friendly front-end application. Your clients can now log in, describe their needs in plain English, and have complex email marketing automations created for them in minutes, all powered by your AI-driven framework.

This not only provides immense value to your clients but also dramatically reduces your team's manual workload, allowing you to scale your agency more advanced, automated services.
