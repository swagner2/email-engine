> This checklist is designed for the comprehensive QA of an entire email flow. Use it before activating a new flow or after making significant changes to an existing one.

# Comprehensive Flow QA Checklist

**Flow Name:** ________________________
**QA Tester:** ________________________
**Date:** ________________________

---

## Part 1: Flow-Level QA

This section covers the overall structure and logic of the flow.

| Status | Checkpoint | Notes |
| :--- | :--- | :--- |
| ☐ | **Trigger:** The flow trigger is correctly configured. | |
| ☐ | **Trigger Filters:** All trigger filters are correct and logically sound. | |
| ☐ | **Flow Filters:** All flow filters are correct and logically sound. | |
| ☐ | **Time Delays:** All time delays are set to the intended duration. | |
| ☐ | **Conditional Splits:** All conditional splits are logically correct and have been tested. | |
| ☐ | **Email Sequence:** All emails are in the correct order. | |
| ☐ | **Smart Sending:** Smart Sending is enabled/disabled as intended for each email. | |
| ☐ | **UTM Tracking:** UTM tracking is enabled/disabled at the flow level as intended. | |
| ☐ | **Live Trigger Test:** A live test has been performed with a test profile. | |

---

## Part 2: Email-Level QA

For each email in the flow, complete the following checklist. Use a separate checklist for each email.

**Email Name:** ________________________

### Setup & Strategy

| Status | Checkpoint | Notes |
| :--- | :--- | :--- |
| ☐ | **Sender Name:** The "From" name is correct and recognizable. | |
| ☐ | **Sender Email:** The "From" email address is correct. | |
| ☐ | **Reply-To Email:** The "Reply-to" address is active and monitored. | |
| ☐ | **Subject Line:** The subject line is finalized and free of typos. | |
| ☐ | **Preview Text:** The preview text is finalized and complements the subject line. | |

### Content & Design

| Status | Checkpoint | Notes |
| :--- | :--- | :--- |
| ☐ | **Copy:** All copy is proofread for spelling, grammar, and typos. | |
| ☐ | **Tone of Voice:** The copy aligns with the brand's style guide. | |
| ☐ | **Images:** All images are high-quality, on-brand, and load correctly. | |
| ☐ | **ALT Text:** All images have descriptive ALT text. | |
| ☐ | **Layout:** The email has a clear visual hierarchy. | |
| ☐ | **Branding:** All fonts, colors, and logos are correct. | |

### Technical QA

| Status | Checkpoint | Notes |
| :--- | :--- | :--- |
| ☐ | **Links:** All links have been clicked and verified. | |
| ☐ | **UTM Tracking:** All links have correct and consistent UTM parameters. | |
| ☐ | **Personalization:** All personalization tags populate correctly. | |
| ☐ | **Default Values:** Fallback values are in place for all personalization. | |
| ☐ | **Dynamic Content:** All conditional logic works as expected. | |
| ☐ | **Rendering:** The email renders correctly in all major clients (Gmail, Outlook, Apple Mail). | |
| ☐ | **Mobile:** The email is optimized for mobile devices. | |
| ☐ | **Dark Mode:** The email is readable and on-brand in dark mode. | |
| ☐ | **Gmail Clipping:** The email is under 102KB to avoid clipping. | |
| ☐ | **Plain-Text:** The plain-text version is readable and has working links. | |
| ☐ | **Unsubscribe Link:** The unsubscribe link is present and functional. | |

---

## Sign-Off

I, ________________________, have completed this QA checklist and certify that this email flow is ready to be activated.

**Signature:** ________________________
