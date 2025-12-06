> This document outlines the structure and content for the Instructional email flow. This flow is designed for products that require some setup or have a learning curve, ensuring customers have a positive experience and get the most value from their purchase.

# Instructional Flow: [CLIENT NAME]

**Flow Goal:** To educate customers on how to use their new product, reduce frustration, and increase customer satisfaction.

**Trigger:** When a customer purchases a product that has been tagged as requiring instructions.

**Target Audience:** Customers who have purchased a specific, complex product.

---

## Flow Structure & Timing

This flow is timed to coincide with the customer receiving their product.

| Email # | Timing | Purpose |
| :--- | :--- | :--- |
| **1** | 1 day after fulfillment | Getting Started Guide |
| **2** | 3-5 days after fulfillment | Advanced Tips & Tricks |

---

## Email 1: Getting Started Guide

*   **Timing:** 1 day after the product has been shipped, so it arrives around the same time as the product.
*   **Goal:** To provide initial setup instructions and basic usage tips.

### Content:

*   **Subject Line:** "How to get started with your new [Product Name]"
*   **Headline:** "Your guide to unboxing and setup"
*   **Body:**
    *   A clear, step-by-step guide to setting up the product.
    *   Use images, GIFs, or a link to a setup video.
    *   Provide links to customer support for any immediate questions.
*   **CTA:** "Watch the Setup Video"

---

## Email 2: Advanced Tips & Tricks

*   **Timing:** 3-5 days after fulfillment, once the customer has had a chance to get familiar with the basics.
*   **Goal:** To help the customer master their new product and discover its full potential.

### Content:

*   **Subject Line:** "Ready to become a [Product Name] pro?"
*   **Headline:** "Unlock the full power of your new device"
*   **Body:**
    *   Share advanced features or creative ways to use the product.
    *   Link to blog posts or user guides with more in-depth information.
    *   Encourage them to share their own tips or creations with the community.
*   **CTA:** "Discover Advanced Features"

---

## Klaviyo Implementation Notes

*   **Trigger:** Based on the "Fulfilled Order" metric, with a conditional split for products tagged with "requires-instructions" in Shopify.
*   **Flow Filters:**
    *   Is subscribed to the list.
*   **Content:** This flow is highly dependent on having good educational content (videos, blog posts, guides) available.
*   **Smart Sending:** Enable Smart Sending for this flow.
