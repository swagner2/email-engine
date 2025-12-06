> This document outlines the structure and content for the Post-Purchase email flow. This flow is crucial for building customer relationships, encouraging repeat purchases, and gathering valuable feedback.

# Post-Purchase Flow: [CLIENT NAME]

**Flow Goal:** To thank customers for their purchase, provide important order information, build brand loyalty, and encourage future engagement.

**Trigger:** When a customer places an order.

**Target Audience:** All customers who have completed a purchase.

---

## Flow Structure & Timing

This flow can vary in length depending on the product and shipping times. It's a mix of transactional and marketing emails.

| Email # | Timing | Purpose |
| :--- | :--- | :--- |
| **1** | Immediately after purchase | Order Confirmation (Transactional) |
| **2** | When order is shipped | Shipping Confirmation (Transactional) |
| **3** | 1-2 days after delivery | Product Education & Excitement |
| **4** | 7-14 days after delivery | Product Review Request |
| **5** | 21-30 days after delivery | Cross-Sell/Upsell Opportunity |

---

## Email 1: Order Confirmation

*   **Timing:** Immediately after purchase.
*   **Goal:** To confirm the order and provide peace of mind.

### Content:

*   **Subject Line:** "Your [Brand Name] order is confirmed!"
*   **Headline:** "Thanks for your order!"
*   **Body:**
    *   A genuine thank you message.
    *   A summary of the order, including product images, prices, and total cost.
    *   The customer's shipping address.
    *   An estimated delivery window.
*   **CTA:** "View Your Order"

---

## Email 2: Shipping Confirmation

*   **Timing:** When the order is fulfilled and shipped.
*   **Goal:** To notify the customer that their order is on its way.

### Content:

*   **Subject Line:** "Your [Brand Name] order has shipped!"
*   **Headline:** "Get excited! It's on its way."
*   **Body:**
    *   An enthusiastic message about the shipment.
    *   The tracking number and a link to the carrier's tracking page.
*   **CTA:** "Track Your Order"

---

## Email 3: Product Education & Excitement

*   **Timing:** 1-2 days after the order is delivered.
*   **Goal:** To help the customer get the most out of their new product and build excitement.

### Content:

*   **Subject Line:** "A little something to get you started..."
*   **Headline:** "Welcome to the [Brand Name] family!"
*   **Body:**
    *   Tips on how to use or care for the product.
    *   Links to helpful blog posts or video tutorials.
    *   Reinforce the benefits of the product.
*   **CTA:** "Learn More"

---

## Email 4: Product Review Request

*   **Timing:** 7-14 days after delivery, giving the customer time to use the product.
*   **Goal:** To collect valuable social proof and customer feedback.

### Content:

*   **Subject Line:** "How are you enjoying your new [Product Name]?'
*   **Headline:** "Share your thoughts!"
*   **Body:**
    *   Ask for their honest feedback on the product.
    *   Make it easy to leave a review with a direct link.
    *   Consider offering a small incentive for leaving a review (e.g., a future discount).
*   **CTA:** "Leave a Review"

---

## Email 5: Cross-Sell/Upsell Opportunity

*   **Timing:** 21-30 days after delivery.
*   **Goal:** To encourage a second purchase by recommending related products.

### Content:

*   **Subject Line:** "The perfect match for your [Product Name]"
*   **Headline:** "You might also love..."
*   **Body:**
    *   Based on their recent purchase, recommend complementary products.
    *   Explain why these products are a great addition.
    *   Offer a special discount to encourage the next purchase.
*   **CTA:** "Shop Recommended Products"

---

## Klaviyo Implementation Notes

*   **Transactional vs. Marketing:** Emails 1 and 2 are transactional and should be sent even to unsubscribed customers. Ensure they are marked as such in Klaviyo. Emails 3-5 are marketing emails and should only be sent to subscribed customers.
*   **Flow Filters:**
    *   For marketing emails, filter for "Subscribed to List".
    *   Use conditional splits based on the products purchased to tailor cross-sell recommendations.
*   **A/B Testing:**
    *   Test the timing of the review request (7 vs. 14 days).
    *   Test different cross-sell offers in Email 5.
*   **Smart Sending:** Enable Smart Sending for the marketing emails in this flow.
