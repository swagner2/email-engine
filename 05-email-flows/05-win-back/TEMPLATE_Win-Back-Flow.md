> This document outlines the structure and content for the Win-back email flow. This flow is designed to re-engage customers who have not purchased in a while, with the goal of winning them back before they are lost for good.

# Win-back Flow: [CLIENT NAME]

**Flow Goal:** To re-engage lapsed customers and encourage them to make a repeat purchase.

**Trigger:** When a customer has not purchased in a specific amount of time (e.g., 90, 120, or 180 days, depending on the business model).

**Target Audience:** Customers who have purchased in the past but have been inactive for a defined period.

---

## Flow Structure & Timing

This flow is a series of emails that gradually increases the incentive to win the customer back.

| Email # | Timing | Purpose |
| :--- | :--- | :--- |
| **1** | 90 days after last purchase | Gentle "We Miss You" & What's New |
| **2** | 7-10 days after Email 1 | Stronger Incentive & Social Proof |
| **3** | 7-10 days after Email 2 | Final Offer & Sunset Warning |

---

## Email 1: Gentle "We Miss You"

*   **Timing:** 90 days after the customer's last purchase.
*   **Goal:** To gently remind the customer of the brand and showcase what's new.

### Content:

*   **Subject Line:** "We miss you, [Customer Name]!"
*   **Headline:** "It's been a while..."
*   **Body:**
    *   A friendly, personal message expressing that they are missed.
    *   Highlight new products, best-sellers, or popular content they may have missed.
    *   No discount is offered in this email.
*   **CTA:** "See What's New"

---

## Email 2: Stronger Incentive

*   **Timing:** 7-10 days after Email 1 if no purchase is made.
*   **Goal:** To provide a compelling reason for the customer to return and shop.

### Content:

*   **Subject Line:** "A special offer to welcome you back"
*   **Headline:** "Come back and enjoy 15% off!"
*   **Body:**
    *   Offer a significant discount (e.g., 15-20% off) as an incentive to return.
    *   Showcase best-selling products to make the decision easier.
    *   Include a customer testimonial to build trust.
*   **CTA:** "Shop Now & Save"

---

## Email 3: Final Offer & Sunset Warning

*   **Timing:** 7-10 days after Email 2 if no purchase is made.
*   **Goal:** To make one last attempt to win the customer back and to clean the email list of unengaged subscribers.

### Content:

*   **Subject Line:** "Final chance: 20% off before you go"
*   **Headline:** "We don't want to say goodbye..."
*   **Body:**
    *   Present the best offer yet (e.g., 20% off or a free gift).
    *   Let them know that if they don't engage, they will be removed from the mailing list to respect their inbox.
    *   Provide an option to stay subscribed.
*   **CTA:** "Claim Your Offer" or "Keep Me on the List"

---

## Klaviyo Implementation Notes

*   **Trigger:** Based on the "Placed Order" metric, with a time delay.
*   **Flow Filters:**
    *   Has placed order zero times since starting this flow.
    *   Is subscribed to the list.
*   **Sunset Policy:** At the end of the flow, if the customer has not engaged, they should be added to a "Sunset" segment to be removed from regular campaign sends.
*   **A/B Testing:**
    *   Test the timing of the first email (90 vs. 120 days).
    *   Test different offers in Emails 2 and 3.
*   **Smart Sending:** Enable Smart Sending for this flow.
