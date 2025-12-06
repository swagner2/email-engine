> This document provides best practices and real-world examples for using Klaviyo personalization tags. Use it to move beyond basic personalization and create truly dynamic and engaging email experiences.

# Personalization Best Practices and Examples

---

## 1. The Philosophy of Personalization

Effective personalization is about more than just using a customer's first name. It's about using data to create a more relevant, helpful, and human experience. The goal is to make each customer feel like you understand their individual needs and preferences.

**Good personalization is:**
- **Relevant:** The content is tailored to the customer's interests and needs.
- **Helpful:** The content helps the customer achieve their goals.
- **Timely:** The content is delivered at the right moment in the customer journey.
- **Human:** The content feels like it's coming from a person, not a machine.

**Bad personalization is:**
- **Creepy:** Using too much data in a way that feels invasive.
- **Generic:** Using personalization tags without a clear purpose.
- **Inaccurate:** Using outdated or incorrect data.

---

## 2. The Personalization Maturity Model

### Level 1: Basic Personalization

This is the starting point for most brands. It involves using basic profile properties to add a personal touch to your emails.

*   **What to use:** `{{ first_name }}`, `{{ last_name }}`, `{{ email }}`
*   **Example:** `Hi {{ first_name|default:\'there\' }},`

### Level 2: Behavioral Personalization

This level involves using behavioral data to personalize emails based on a customer's actions.

*   **What to use:** Event variables from `Viewed Product`, `Added to Cart`, `Started Checkout`, and `Placed Order` events.
*   **Example:** An abandoned cart email that dynamically displays the items left in the cart.

### Level 3: Zero-Party Data Personalization

This is where you start to use data that customers have willingly shared with you to create highly personalized experiences.

*   **What to use:** Custom properties from quizzes, surveys, and preference centers.
*   **Example:** A welcome series that shows different content based on the customer's stated goals or interests.

### Level 4: Predictive Personalization

This is the most advanced level of personalization. It involves using Klaviyo's predictive analytics to personalize emails based on a customer's predicted behavior.

*   **What to use:** `{{ person|lookup:\'Predicted Gender\' }}`, `{{ person|lookup:\'Predicted CLV\' }}`, `{{ person|lookup:\'Expected Date of Next Order\' }}`
*   **Example:** A win-back campaign that is triggered when a customer's predicted churn risk is high.

---

## 3. Real-World Examples

### Example 1: The Personalized Welcome Series

**Goal:** To create a welcome series that is tailored to each new subscriber's interests.

**How to do it:**
1.  In your sign-up form, ask new subscribers what they are most interested in (e.g., "What are you shopping for today?" with options like "Men's Apparel," "Women's Apparel," "Kids' Apparel").
2.  Store the answer as a custom property called `primary_interest`.
3.  In your welcome series, use conditional logic to show a different hero image and product recommendations based on their `primary_interest`.

**Klaviyo Logic:**
```
{% if person.primary_interest == \'womens\' %}

  [Show hero image with women's apparel and product block with women's best-sellers]

{% elif person.primary_interest == \'mens\' %}

  [Show hero image with men's apparel and product block with men's best-sellers]

{% else %}

  [Show default hero image and product block with sitewide best-sellers]

{% endif %}
```

### Example 2: The Dynamic Abandoned Cart

**Goal:** To create an abandoned cart email that is as helpful and relevant as possible.

**How to do it:**
1.  Use a `for` loop to dynamically display the items left in the cart.
2.  Include the product image, name, quantity, and price for each item.
3.  Use a dynamic CTA that takes the customer directly back to their cart.

**Klaviyo Logic:**
```
<h2>You left something behind...</h2>

{% for item in event.Items %}
  <img src="{{ item.ImageURL }}">
  <p>{{ item.ProductName }}</p>
  <p>Quantity: {{ item.Quantity }}</p>
  <p>Price: {% currency_format item.Price %}</p>
{% endfor %}

<a href="{{ event.CheckoutURL }}">Complete Your Order</a>
```

### Example 3: The Post-Purchase Cross-Sell

**Goal:** To cross-sell relevant products to customers after they make a purchase.

**How to do it:**
1.  In your post-purchase survey, ask customers what they are using the product for (e.g., "What is your primary goal for using our supplements?" with options like "Build Muscle," "Lose Weight," "Improve Sleep").
2.  Store the answer as a custom property called `primary_goal`.
3.  In your post-purchase flow, use conditional logic to recommend complementary products based on their `primary_goal`.

**Klaviyo Logic:**
```
{% if person.primary_goal == \'build_muscle\' %}

  [Show product block with creatine and pre-workout]

{% elif person.primary_goal == \'lose_weight\' %}

  [Show product block with fat burners and meal replacements]

{% else %}

  [Show product block with best-sellers]

{% endif %}
```

---

## 4. Best Practices for Using Personalization

*   **Always Have a Fallback:** Use the `default` filter to ensure that your emails still make sense even if a customer is missing a property.
*   **Don't Sacrifice Clarity for Cleverness:** Your personalization should make your emails easier to understand, not more confusing.
*   **Test, Test, Test:** Use Klaviyo's preview tool to test your personalization with different profiles before you send.
*   **Start Simple:** You don't need to personalize every element of every email. Start with one or two key personalization points and build from there.
*   **Focus on the Customer:** The goal of personalization is to create a better experience for the customer. Always ask yourself, "How does this help the customer?"
