# Personalization Tags Module

This module provides a comprehensive reference to all available Klaviyo personalization tags and variables, along with best practices and real-world examples for maximizing email personalization.

---

## Overview

Personalization is the foundation of effective email marketing. This module gives you everything you need to move beyond basic personalization (like using a customer's first name) and create truly dynamic, one-to-one experiences at scale.

---

## What's Included

### 1. Klaviyo Personalization Tags Reference Guide

**File:** `GUIDE_Klaviyo-Personalization-Tags-Reference.md`

This is your comprehensive reference document for all available Klaviyo personalization tags. It includes:

*   **Profile Personalization Tags:** All built-in Klaviyo profile properties (first name, email, address, etc.)
*   **Custom Profile Properties:** How to reference zero-party data and custom properties
*   **Event Variable Tags:** How to use event data in metric-triggered flows
*   **Organization Tags:** How to insert your company information
*   **Link and Preview Tags:** Unsubscribe, manage preferences, and web view tags
*   **Template Filters:** How to modify the appearance of your tags (default, title, upper, lower, etc.)
*   **Conditional Logic:** How to use if statements and for loops to create dynamic content

### 2. Personalization Best Practices and Examples

**File:** `GUIDE_Personalization-Best-Practices-and-Examples.md`

This document provides strategic guidance and real-world examples for using personalization effectively. It includes:

*   **The Philosophy of Personalization:** What makes personalization good vs. bad
*   **The Personalization Maturity Model:** A four-level framework for advancing your personalization strategy
*   **Real-World Examples:** Detailed examples of personalized welcome series, abandoned cart emails, and post-purchase cross-sells
*   **Best Practices:** Practical tips for implementing personalization without sacrificing clarity or user experience

---

## How to Use This Module

### For New Clients

When onboarding a new client, use this module to:

1.  **Audit their current personalization:** Review their existing emails and identify opportunities to add personalization.
2.  **Create a personalization roadmap:** Use the Personalization Maturity Model to plan how you will advance their personalization strategy over time.
3.  **Implement personalization:** Use the reference guide to add personalization tags to their emails and flows.

### For Ongoing Management

Use this module to:

*   **Train team members:** Ensure everyone on your team knows how to use Klaviyo personalization tags correctly.
*   **Troubleshoot issues:** Reference the guide when you encounter errors or unexpected behavior with personalization tags.
*   **Inspire new ideas:** Review the examples to spark ideas for new ways to personalize your clients' emails.

---

## Key Benefits

*   **Comprehensive Reference:** Every available Klaviyo personalization tag in one place
*   **Practical Examples:** Real-world use cases you can adapt for your clients
*   **Strategic Framework:** A clear path for advancing from basic to advanced personalization
*   **Error Prevention:** Best practices to avoid common personalization mistakes

---

## Integration with Other Modules

This module works seamlessly with other parts of the framework:

*   **Zero-Party Data Module:** Use the data collection methods to gather custom properties that you can then use for personalization
*   **Email Flows Module:** Apply personalization to all of your flow templates
*   **A/B Testing Module:** Test different personalization strategies to see what resonates with your audience
*   **Copywriting Templates:** Combine personalization with strong copywriting for maximum impact

---

## Quick Reference: Most Common Tags

| Tag | Use Case |
| :--- | :--- |
| `{{ first_name\|default:'there' }}` | Personalized greeting |
| `{{ person\|lookup:'Favorite Color' }}` | Custom zero-party data |
| `{{ event.ProductName }}` | Product viewed or added to cart |
| `{{ event.CheckoutURL }}` | Link back to abandoned cart |
| `{% currency_format event\|lookup:"$value" %}` | Display cart value with currency symbol |
| `{% if person.VIP == 'true' %} ... {% endif %}` | Show content only to VIP customers |
| `{% for item in event.Items %} ... {% endfor %}` | Loop through cart items |

---

## Next Steps

1.  Review both guides in this module
2.  Identify 3-5 opportunities to add personalization to your client's emails
3.  Implement the personalization using the reference guide
4.  Test thoroughly using Klaviyo's preview tool
5.  Monitor performance and iterate based on results
