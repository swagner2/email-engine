> This guide provides a comprehensive overview of how to use zero-party data to create powerful segments in Klaviyo. Segmentation is the key to unlocking the power of your zero-party data.

# Segmentation Guide

---

## 1. The Power of Zero-Party Data Segmentation

Segmentation is the process of dividing your audience into smaller groups based on shared characteristics. By segmenting your audience with zero-party data, you can move beyond basic demographic and behavioral segmentation and create highly targeted groups based on customer preferences, interests, and needs.

This allows you to send more relevant, personalized messages that resonate with each individual, leading to higher engagement, conversions, and customer lifetime value.

---

## 2. Foundational Zero-Party Data Segments

Here are some of the most common and effective segments you can build with zero-party data:

### Product Category Preference

*   **Description:** Customers who have expressed an interest in a specific product category.
*   **How to Build:** `Properties about someone` > `[custom_property]` > `equals` > `[category_name]`
*   **Example:** A segment of customers who are interested in "women's running shoes."

### Style Preference

*   **Description:** Customers who have a specific style preference (e.g., modern, bohemian, minimalist).
*   **How to Build:** `Properties about someone` > `[custom_property]` > `equals` > `[style_name]`
*   **Example:** A segment of customers who prefer a "modern" home decor style.

### Skin/Hair/Body Concern

*   **Description:** Customers who have a specific concern they are trying to address (e.g., acne, dry skin, frizzy hair).
*   **How to Build:** `Properties about someone` > `[custom_property]` > `equals` > `[concern_name]`
*   **Example:** A segment of customers whose primary skin concern is "acne."

### Dietary Need

*   **Description:** Customers who have a specific dietary need (e.g., gluten-free, vegan, keto).
*   **How to Build:** `Properties about someone` > `[custom_property]` > `equals` > `[dietary_need]`
*   **Example:** A segment of customers who follow a "vegan" diet.

### Birthday Month

*   **Description:** Customers whose birthday is in the current month.
*   **How to Build:** `Properties about someone` > `Birthday` > `is in the next` > `30 days`
*   **Example:** A segment of customers who have a birthday this month, to whom you can send a special birthday offer.

---

## 3. Advanced Segmentation: Combining Zero-Party and Behavioral Data

The real power of segmentation comes from combining zero-party data with behavioral data. This allows you to create highly specific and actionable segments.

### High-Intent, Preference-Based Segments

*   **Description:** Customers who have expressed an interest in a specific category AND have recently engaged with your brand.
*   **How to Build:**
    *   `Properties about someone` > `[custom_property]` > `equals` > `[category_name]`
    *   AND
    *   `What someone has done (or not done)` > `Viewed Product` > `at least once in the last` > `30 days`
*   **Example:** A segment of customers who are interested in "women's running shoes" AND have viewed a running shoe product in the last 30 days.

### Cross-Sell and Upsell Segments

*   **Description:** Customers who have purchased a specific product and have expressed an interest in a complementary category.
*   **How to Build:**
    *   `What someone has done (or not done)` > `Ordered Product` > `where` > `ProductName` > `equals` > `[product_name]`
    *   AND
    *   `Properties about someone` > `[custom_property]` > `equals` > `[complementary_category]`
*   **Example:** A segment of customers who have purchased a "shampoo for dry hair" AND have expressed an interest in "conditioners."

### Persona-Based Segments

*   **Description:** Customers who fit a specific persona based on a combination of zero-party and behavioral data.
*   **How to Build:**
    *   `Properties about someone` > `[persona_property]` > `equals` > `[persona_name]`
    *   AND
    *   `What someone has done (or not done)` > `Placed Order` > `is at least` > `3`
*   **Example:** A segment of "Loyal Modernists" who prefer a "modern" style AND have made at least 3 purchases.

---

## 4. Using Segments in Your Marketing

Once you have built your segments, you can use them to:

*   **Send Targeted Campaigns:** Send campaigns with offers and messaging that are highly relevant to each segment.
*   **Create Personalized Flows:** Use conditional splits in your flows to send customers down different paths based on their segment.
*   **Show Dynamic Content:** Use your segments to show different content to different customers within the same email.
*   **Inform Your Content Strategy:** Analyze your segments to understand what your customers are interested in and create content that meets their needs.
