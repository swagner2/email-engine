> This template provides a guide to using dynamic content in Klaviyo to personalize your emails with zero-party data. Dynamic content is the key to creating truly one-to-one experiences at scale.

# Personalization Template: Dynamic Content

---

## 1. What is Dynamic Content?

Dynamic content is content within an email that changes based on the recipient. It allows you to show different images, headlines, product recommendations, and calls to action to different customers within the same email, based on their data.

By using dynamic content, you can create a single email that feels like a one-to-one conversation with each recipient.

---

## 2. How Dynamic Content Works in Klaviyo

In Klaviyo, you can create dynamic content using conditional logic in your email templates. The logic is based on the properties of the recipient, including their custom properties (zero-party data) and their behavioral data.

The basic structure of a dynamic content block is:

```
{% if person.property == 'value' %}

  [Content for people who meet the condition]

{% else %}

  [Default content for everyone else]

{% endif %}
```

---

## 3. Common Use Cases for Dynamic Content

### Personalized Banners and Headlines

*   **Use Case:** Show a different hero image or headline based on the customer's primary interest.
*   **Example:** A pet store could show a banner with dogs to customers who have indicated they are dog owners, and a banner with cats to customers who are cat owners.
*   **Klaviyo Logic:**
    ```
    {% if person.pet_type == 'dog' %}

      <img src="dog_banner.jpg">

    {% elif person.pet_type == 'cat' %}

      <img src="cat_banner.jpg">

    {% else %}

      <img src="default_banner.jpg">

    {% endif %}
    ```

### Personalized Product Recommendations

*   **Use Case:** Recommend products based on the customer's stated preferences or past purchases.
*   **Example:** A skincare brand could recommend products for "acne-prone skin" to customers who have identified that as their primary concern.
*   **Klaviyo Logic:**
    ```
    {% if person.skin_concern == 'acne' %}

      [Product block with acne products]

    {% elif person.skin_concern == 'dryness' %}

      [Product block with products for dry skin]

    {% else %}

      [Default product block with best-sellers]

    {% endif %}
    ```

### Targeted Offers and Promotions

*   **Use Case:** Show a different offer to different segments of your audience.
*   **Example:** A clothing brand could show a "20% off dresses" offer to customers who have expressed an interest in dresses, and a "15% off jeans" offer to customers who are interested in jeans.
*   **Klaviyo Logic:**
    ```
    {% if person.interest == 'dresses' %}

      <h2>20% Off All Dresses</h2>

    {% elif person.interest == 'jeans' %}

      <h2>15% Off All Jeans</h2>

    {% else %}

      <h2>10% Off Sitewide</h2>

    {% endif %}
    ```

### Personalized Content and Education

*   **Use Case:** Provide different educational content based on the customer's needs or goals.
*   **Example:** A fitness brand could send workout tips for "beginners" to customers who have identified themselves as new to fitness, and advanced tips to customers who are experienced athletes.
*   **Klaviyo Logic:**
    ```
    {% if person.fitness_level == 'beginner' %}

      [Content block with beginner tips]

    {% elif person.fitness_level == 'advanced' %}

      [Content block with advanced tips]

    {% endif %}
    ```

---

## 4. Best Practices for Using Dynamic Content

*   **Start Small:** You don't need to personalize every element of your email. Start with one or two dynamic blocks, such as the hero image or a product recommendation block.
*   **Have a Default:** Always include a default content block for users who don't meet any of your conditions. This ensures that everyone has a good experience.
*   **Test Thoroughly:** Before you send a campaign with dynamic content, test it thoroughly to ensure that the correct content is showing for each segment. Klaviyo's preview tool allows you to preview the email as different users.
*   **Keep It Clean:** Your code can get complicated quickly with multiple dynamic blocks. Keep your template organized and use comments to explain your logic.
*   **Don't Over-Personalize:** While personalization is powerful, it can also be creepy if you overdo it. Use dynamic content to be helpful and relevant, not to show the customer that you know everything about them.

---

## 5. The Impact of Dynamic Content

By using dynamic content to personalize your emails with zero-party data, you can:

*   **Increase Engagement:** More relevant content leads to higher open rates and click-through rates.
*   **Boost Conversions:** Personalized product recommendations and offers can significantly increase your conversion rates.
*   **Improve Customer Experience:** A personalized experience shows that you understand and care about your customers, which builds loyalty and trust.
*   **Save Time:** Instead of creating multiple versions of the same email, you can create one email with dynamic content that adapts to each recipient.
