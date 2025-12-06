> This document provides a comprehensive guide to using dynamic content in Klaviyo to create personalized and relevant email experiences. It covers the use of personalization tags, conditional logic, and dynamic product blocks.

# A Practical Guide to Using Dynamic Content

**Version:** 1.0
**Author:** Manus AI

---

## 1. What is Dynamic Content?

Dynamic content is any part of an email that changes based on the recipient's data, behavior, or preferences. It allows you to create a single email template that can be personalized for each individual recipient, resulting in a more relevant and engaging experience.

---

## 2. Types of Dynamic Content

### Personalization Tags

Personalization tags are placeholders that are replaced with the recipient's data when the email is sent. You can use them to personalize the subject line, greeting, and body of your emails.

**Examples:**

*   `{{ first_name }}`: The recipient's first name.
*   `{{ email }}`: The recipient's email address.
*   `{{ person|lookup:'Favorite Color' }}`: A custom property that you have collected about the recipient.

### Conditional Logic

Conditional logic allows you to show or hide content based on the recipient's data. You can use it to create different versions of an email for different segments of your audience.

**Example:**

```django
{% if person.VIP == 'true' %}
  <p>As a VIP, you get free shipping on all orders!</p>
{% else %}
  <p>Spend $50 more to get free shipping.</p>
{% endif %}
```

### Dynamic Product Blocks

Dynamic product blocks allow you to display personalized product recommendations based on the recipient's browsing history, purchase history, or other data.

**Examples:**

*   **Best Sellers:** A feed of your store's best-selling products.
*   **New Arrivals:** A feed of your store's newest products.
*   **Personalized Recommendations:** A feed of products that are recommended for the recipient based on their past behavior.

---

## 3. How to Use Dynamic Content

### Using Personalization Tags

1.  **Open an Email Template:** Open the email template where you want to add the personalization tag.
2.  **Insert the Tag:** Type the personalization tag directly into the text block where you want it to appear.
3.  **Test:** Use Klaviyo's preview tool to test the personalization tag with different profiles.

### Using Conditional Logic

1.  **Open an Email Template:** Open the email template where you want to add the conditional logic.
2.  **Go to Display Options:** Click on the block that you want to show or hide, and go to the **Display Options** tab.
3.  **Add a Condition:** Click **Add a condition** and select the property and value that you want to use for your condition.
4.  **Test:** Use Klaviyo's preview tool to test the conditional logic with different profiles.

### Using Dynamic Product Blocks

1.  **Open an Email Template:** Open the email template where you want to add the dynamic product block.
2.  **Add a Product Block:** Drag and drop a product block into your template.
3.  **Select a Feed:** In the product block settings, select the product feed that you want to use.
4.  **Test:** Use Klaviyo's preview tool to test the dynamic product block with different profiles.

---

## 4. Best Practices for Using Dynamic Content

*   **Start Small:** Start by adding simple personalization, like the recipient's first name, and then gradually add more advanced dynamic content.
*   **Use Default Values:** Always use a default value for your personalization tags to avoid sending blank emails to recipients who don't have that data.
*   **Test Thoroughly:** Test your dynamic content with a variety of different profiles to make sure it's working as expected.
*   **Don't Overdo It:** Too much personalization can be overwhelming and creepy. Use dynamic content to create a more relevant and helpful experience, not to show off how much data you have.

---

## References

1.  Klaviyo Help Center. (n.d.). *Guide to Template Tags and Variable Syntax*. Retrieved from https://help.klaviyo.com/hc/en-us/articles/4408802648731
2.  Klaviyo Help Center. (n.d.). *How to show or hide template blocks based on dynamic variables*. Retrieved from https://help.klaviyo.com/hc/en-us/articles/4408802299547
3.  Klaviyo Help Center. (n.d.). *How to use product feeds and recommendations*. Retrieved from https://help.klaviyo.com/hc/en-us/articles/115005082787
