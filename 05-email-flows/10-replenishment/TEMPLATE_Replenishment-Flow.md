> This document outlines the structure and content for the Replenishment email flow. This flow is designed for brands with consumable products, reminding customers to reorder before they run out.

# Replenishment Flow: [CLIENT NAME]

**Flow Goal:** To drive repeat purchases by reminding customers to reorder consumable products.

**Trigger:** A certain number of days after a customer purchases a consumable product, based on the average time it takes to finish the product.

**Target Audience:** Customers who have purchased a specific consumable product.

---

## Flow Structure & Timing

This flow is timed based on the product's lifecycle.

| Email # | Timing | Purpose |
| :--- | :--- | :--- |
| **1** | ~80% through the product lifecycle | Gentle Reminder to Reorder |
| **2** | ~100% through the product lifecycle | "Running Low?" Reminder |

---

## Email 1: Gentle Reminder to Reorder

*   **Timing:** When the customer is likely starting to run low on the product.
*   **Goal:** To proactively remind the customer to reorder.

### Content:

*   **Subject Line:** "Time to restock your [Product Name]?"
*   **Headline:** "Never run out of your favorites."
*   **Body:**
    *   A helpful reminder that it might be time to reorder.
    *   Highlight the benefits of the product and why they loved it.
    *   Provide a direct link to the product page for easy reordering.
*   **CTA:** "Reorder Now"

---

## Email 2: "Running Low?" Reminder

*   **Timing:** Around the time the customer is expected to have finished the product.
*   **Goal:** To create a sense of urgency to reorder.

### Content:

*   **Subject Line:** "Running low on [Product Name]?"
*   **Headline:** "Don't let the good things run out."
*   **Body:**
    *   A more direct message about reordering.
    *   Consider offering a small incentive for reordering, such as a discount or free shipping.
    *   Suggest subscribing for automatic refills if that's an option.
*   **CTA:** "Restock & Save"

---

## Klaviyo Implementation Notes

*   **Trigger:** Based on the "Placed Order" metric, with a conditional split for the specific consumable product and a time delay based on its lifecycle.
*   **Flow Filters:**
    *   Has placed order zero times since starting this flow.
    *   Is subscribed to the list.
*   **A/B Testing:**
    *   Test the timing of the first email.
    *   Test the offer in the second email.
*   **Smart Sending:** Enable Smart Sending for this flow.
