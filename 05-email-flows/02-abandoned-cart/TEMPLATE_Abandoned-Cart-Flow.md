> This document outlines the structure and content for the Abandoned Cart email flow. This is one of the highest-revenue generating flows, designed to recover potentially lost sales by reminding customers of the items they left in their cart.

# Abandoned Cart Flow: [CLIENT NAME]

**Flow Goal:** To recover abandoned carts by reminding customers of their items and nudging them to complete their purchase.

**Trigger:** When a customer adds an item to their cart but does not complete the checkout process.

**Target Audience:** Anyone who starts a checkout and does not complete their purchase.

---

## Flow Structure & Timing

This flow typically consists of 2-4 emails sent over a short period to maximize the chances of recovery while the purchase intent is still high.

| Email # | Timing | Purpose |
| :--- | :--- | :--- |
| **1** | 1-4 hours after abandonment | Gentle Reminder & Easy Return to Cart |
| **2** | 24 hours after abandonment | Address Objections & Build Trust |
| **3** | 48-72 hours after abandonment | Introduce Incentive/Urgency |

---

## Email 1: Gentle Reminder

*   **Timing:** 1-4 hours after cart abandonment.
*   **Goal:** To remind the customer about the items in their cart and provide a seamless way to return and complete the purchase.

### Content:

*   **Subject Line:** "Did you forget something?"
*   **Headline:** "Your cart is waiting!"
*   **Body:**
    *   Use a friendly and helpful tone.
    *   Dynamically display the items left in the cart, including images, names, and prices.
    *   Reinforce key value propositions like free shipping or easy returns.
*   **CTA:** "Return to Your Cart"

---

## Email 2: Address Objections

*   **Timing:** 24 hours after cart abandonment.
*   **Goal:** To build confidence and address any potential hesitations the customer might have.

### Content:

*   **Subject Line:** "Still thinking it over?"
*   **Headline:** "Your items are saved for you."
*   **Body:**
    *   Remind them of the products again.
    *   Include social proof like customer reviews or star ratings for the items in their cart.
    *   Provide links to customer support or an FAQ page.
    *   Highlight the brand's satisfaction guarantee or return policy.
*   **CTA:** "Complete Your Purchase"

---

## Email 3: Introduce Incentive/Urgency

*   **Timing:** 48-72 hours after cart abandonment.
*   **Goal:** To provide a final nudge to purchase by introducing an incentive or creating a sense of urgency.

### Content:

*   **Subject Line:** "A special offer just for you" or "Your cart is about to expire..."
*   **Headline:** "Don't miss out!"
*   **Body:**
    *   Offer a small discount (e.g., 10% off) or free shipping to incentivize the purchase.
    *   Alternatively, use urgency by mentioning that the items are popular and might sell out.
    *   Keep the copy concise and action-oriented.
*   **CTA:** "Claim Your Discount Now"

---

## Klaviyo Implementation Notes

*   **Flow Filter:** Exclude anyone who has placed an order since starting this flow.
*   **Dynamic Content:** Use Klaviyo's dynamic content blocks to pull in the specific items from the customer's cart.
*   **Conditional Splits:** Consider using conditional splits based on cart value. For example, only offer a discount in Email 3 for carts over a certain value.
*   **A/B Testing:**
    *   Test the timing of the first email (1 hour vs. 4 hours).
    *   Test different offers in Email 3 (discount vs. free shipping).
    *   Test subject lines to see what drives the highest open rates.
*   **Smart Sending:** It's recommended to disable Smart Sending for this flow to ensure customers receive these timely reminders even if they've recently received another email.
