> This document outlines the structure and content for the Back-in-Stock email flow. This flow is a powerful tool for capturing sales that would otherwise be lost due to out-of-stock products.

# Back-in-Stock Flow: [CLIENT NAME]

**Flow Goal:** To notify customers as soon as a product they are interested in is available again, and to drive immediate sales.

**Trigger:** When a customer subscribes to a back-in-stock notification for a specific product.

**Target Audience:** Customers who have explicitly requested to be notified when a product is back in stock.

---

## Flow Structure & Timing

This is a time-sensitive, single-email flow.

| Email # | Timing | Purpose |
| :--- | :--- | :--- |
| **1** | Immediately when product is restocked | Back-in-Stock Notification |

---

## Email 1: Back-in-Stock Notification

*   **Timing:** Immediately after the product is restocked in Shopify.
*   **Goal:** To drive the customer directly to the product page to make a purchase before it sells out again.

### Content:

*   **Subject Line:** "It's back! [Product Name] is back in stock."
*   **Headline:** "Good news! The item you wanted is back."
*   **Body:**
    *   An exciting message announcing the product's return.
    *   Dynamically display the product that is back in stock.
    *   Create a sense of urgency by mentioning that stock is limited.
*   **CTA:** "Buy It Before It's Gone"

---

## Klaviyo Implementation Notes

*   **Trigger:** This flow is triggered by the "Back in Stock" metric in Klaviyo, which requires setup on the Shopify theme.
*   **Flow Filters:**
    *   Has placed order zero times since starting this flow.
*   **Urgency:** This flow is all about speed. Ensure it sends immediately.
*   **Smart Sending:** It is recommended to disable Smart Sending for this flow to ensure the notification is delivered as quickly as possible.
