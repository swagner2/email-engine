> This document outlines the structure and content for the Cross-Sell and Upsell email flow. This flow is designed to increase Customer Lifetime Value (CLV) by encouraging customers to purchase complementary or higher-value items based on their purchase history.

# Cross-Sell & Upsell Flow: [CLIENT NAME]

**Flow Goal:** To increase Average Order Value (AOV) and CLV by suggesting relevant additional purchases.

**Trigger:** A customer makes a purchase.

**Target Audience:** Customers who have purchased a specific product that has clear cross-sell or upsell opportunities.

---

## Flow Structure & Timing

This flow is highly dependent on the product purchased. The timing should allow the customer to receive and appreciate their initial purchase before suggesting another.

| Email # | Timing | Purpose |
| :--- | :--- | :--- |
| **1** | 7-21 days after purchase | Suggest Complementary Products (Cross-Sell) |
| **2** | 30-60 days after purchase | Introduce an Upgrade (Upsell) |

---

## Email 1: Suggest Complementary Products (Cross-Sell)

*   **Timing:** 7-21 days after the initial purchase.
*   **Goal:** To enhance the customer's experience with their original purchase by suggesting related products.

### Content:

*   **Subject Line:** "The perfect match for your [Original Product Name]"
*   **Headline:** "Enhance your experience"
*   **Body:**
    *   Start by referencing their recent purchase and expressing hope that they are enjoying it.
    *   Introduce 1-3 complementary products that work well with their original purchase.
    *   Explain the benefits of using the products together.
    *   Use high-quality images of the products being used together.
*   **CTA:** "Shop the Collection"

---

## Email 2: Introduce an Upgrade (Upsell)

*   **Timing:** 30-60 days after the initial purchase.
*   **Goal:** To encourage a repeat purchase of a higher-value item.

### Content:

*   **Subject Line:** "Ready for an upgrade?"
*   **Headline:** "Take your [Product Category] experience to the next level."
*   **Body:**
    *   Acknowledge their loyalty to the brand.
    *   Introduce a premium or upgraded version of the product they originally purchased.
    *   Clearly highlight the additional benefits and features of the upgraded product.
    *   Consider offering a small, exclusive discount for their loyalty.
*   **CTA:** "Explore the Premium Version"

---

## Klaviyo Implementation Notes

*   **Trigger:** This flow is triggered by the "Placed Order" metric.
*   **Conditional Splits:** This flow relies heavily on conditional splits based on the specific products or categories purchased. You will need to create a separate branch of the flow for each product with a defined cross-sell/upsell path.
*   **Flow Filters:**
    *   Has placed order zero times since starting this flow.
    *   Is subscribed to the list.
*   **A/B Testing:**
    *   Test different product recommendations.
    *   Test the timing of the emails.
*   **Smart Sending:** Enable Smart Sending for this flow.
