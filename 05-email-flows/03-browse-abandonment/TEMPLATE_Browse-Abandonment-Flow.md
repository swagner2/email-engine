> This document outlines the structure and content for the Browse Abandonment email flow. This flow targets subscribers who have viewed products on the website but have not added anything to their cart. It's a proactive way to re-engage interested prospects.

# Browse Abandonment Flow: [CLIENT NAME]

**Flow Goal:** To re-engage subscribers who have shown interest in specific products and guide them back to the website to continue shopping.

**Trigger:** When a known subscriber views a product on the website but does not start a checkout or place an order shortly after.

**Target Audience:** Engaged subscribers who have viewed a product at least once in the last 7 days and have not purchased.

---

## Flow Structure & Timing

This is typically a shorter flow of 1-2 emails, designed to be a gentle nudge rather than an aggressive push.

| Email # | Timing | Purpose |
| :--- | :--- | :--- |
| **1** | 2-4 hours after browsing | Product Reminder & Related Items |
| **2** | 1-2 days after Email 1 | Social Proof & Brand Story |

---

## Email 1: Product Reminder & Related Items

*   **Timing:** 2-4 hours after the browsing session.
*   **Goal:** To remind the subscriber of the product they were interested in and suggest other items they might like.

### Content:

*   **Subject Line:** "Still on your mind?"
*   **Headline:** "We saw you checking this out..."
*   **Body:**
    *   Dynamically display the product the subscriber viewed.
    *   Include a "You might also like" section with dynamically populated related products.
    *   Keep the tone light and helpful.
*   **CTA:** "Take Another Look"

---

## Email 2: Social Proof & Brand Story

*   **Timing:** 1-2 days after Email 1.
*   **Goal:** To build confidence and reinforce the value of the brand and its products.

### Content:

*   **Subject Line:** "Here’s what others are saying..."
*   **Headline:** "A Community Favorite"
*   **Body:**
    *   Showcase customer reviews or testimonials related to the product category the subscriber was browsing.
    *   Briefly reiterate the brand's mission or a key value proposition.
    *   This email is less about the specific product and more about the overall brand experience.
*   **CTA:** "Explore Our Collection"

---

## Klaviyo Implementation Notes

*   **Trigger Setup:** This flow is triggered by the "Viewed Product" metric in Klaviyo. It's important to set the trigger filters correctly to avoid sending too many emails.
*   **Flow Filters:**
    *   Has not been in this flow in the last 14 days.
    *   Has not placed an order since starting this flow.
    *   Has not started checkout since starting this flow.
*   **Dynamic Content:** Heavily relies on Klaviyo's dynamic product feeds for both the viewed product and recommended products.
*   **A/B Testing:**
    *   Test the timing of the first email (2 hours vs. 4 hours).
    *   Test the number of related products to show in Email 1.
*   **Smart Sending:** Enable Smart Sending for this flow to ensure it doesn't interfere with more critical flows like Abandoned Cart.
