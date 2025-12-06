> This document outlines the structure and content for the Product Review Request email flow. This flow is essential for gathering social proof, which can significantly increase conversion rates on your product pages.

# Product Review Request Flow: [CLIENT NAME]

**Flow Goal:** To encourage customers to leave a review for the products they have purchased.

**Trigger:** A certain number of days after an order has been fulfilled.

**Target Audience:** Customers who have recently received their order.

---

## Flow Structure & Timing

This is typically a single-email flow, but a second reminder can be added.

| Email # | Timing | Purpose |
| :--- | :--- | :--- |
| **1** | 7-21 days after fulfillment | Initial Review Request |
| **2** | 7 days after Email 1 | Reminder to Leave a Review |

---

## Email 1: Initial Review Request

*   **Timing:** 7-21 days after fulfillment, giving the customer enough time to have used the product.
*   **Goal:** To get an honest review of the product.

### Content:

*   **Subject Line:** "How are you enjoying your [Product Name]?"
*   **Headline:** "Share your thoughts with our community"
*   **Body:**
    *   Start by thanking them for their recent purchase.
    *   Ask for their feedback on the product(s) they bought.
    *   Dynamically display the products from their order and provide a direct link to leave a review for each.
    *   Explain how their review helps other customers make informed decisions.
*   **CTA:** "Leave a Review"

---

## Email 2: Reminder to Leave a Review (Optional)

*   **Timing:** 7 days after Email 1 if no review has been left.
*   **Goal:** To send a gentle reminder to leave a review.

### Content:

*   **Subject Line:** "Your feedback is important to us"
*   **Headline:** "Still thinking it over?"
*   **Body:**
    *   A brief and friendly reminder to share their experience.
    *   Reiterate the importance of their feedback.
    *   Provide the link to leave a review again.
*   **CTA:** "Share Your Feedback"

---

## Klaviyo Implementation Notes

*   **Trigger:** Based on the "Fulfilled Order" metric.
*   **Flow Filters:**
    *   Has not left a review since starting this flow.
    *   Is subscribed to the list.
*   **Incentives:** Consider offering a small discount on a future purchase for customers who leave a review. This can be set up with a conditional split to send a different thank you email to those who complete the review.
*   **A/B Testing:**
    *   Test the timing of the first email.
    *   Test offering an incentive vs. not offering one.
*   **Smart Sending:** Enable Smart Sending for this flow.
