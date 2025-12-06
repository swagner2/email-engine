> This document is the ultimate reference guide to all available Klaviyo personalization tags. Use it to create highly personalized and dynamic email content that resonates with your customers.

# The Ultimate Klaviyo Personalization Tags Reference Guide

**Version:** 1.0
**Author:** Manus AI

---

## Introduction

Personalization is the key to creating a world-class email marketing program. Klaviyo's personalization tags (also known as template variables) allow you to dynamically insert customer data into your emails, creating a one-to-one experience at scale. This guide provides a comprehensive list of all available tags, from basic profile properties to advanced conditional logic.

---

## 1. Profile Personalization Tags

These tags pull data directly from a customer's profile in Klaviyo. They are the foundation of email personalization.

### Basic Profile Properties

| Tag | Profile Property | Notes |
| :--- | :--- | :--- |
| `{{ email }}` | Email | The customer's email address. |
| `{{ first_name }}` | First Name | A special tag that doesn't require the `person` prefix. |
| `{{ last_name }}` | Last Name | A special tag that doesn't require the `person` prefix. |
| `{{ person.full_name }}` | Full Name | The customer's full name. |
| `{{ person.title }}` | Title | The customer's title (e.g., Mr., Mrs., Dr.). |
| `{{ person.organization }}` | Organization | The customer's company or organization. |
| `{{ person.phone_number }}` | Phone Number | The customer's phone number. |

### Address and Location Properties

| Tag | Profile Property |
| :--- | :--- |
| `{{ person|lookup:"$address1" }}` | Address 1 |
| `{{ person|lookup:'$address2' }}` | Address 2 |
| `{{ person.City }}` | City |
| `{{ person.Region }}` | State / Region |
| `{{ person.Country }}` | Country |
| `{{ person.Zipcode }}` | Zip Code |
| `{{ person|lookup:"$latitude" }}` | Latitude |
| `{{ person|lookup:"$longitude" }}` | Longitude |

### System and Tracking Properties

| Tag | Profile Property |
| :--- | :--- |
| `{{ person.id }}` | Unique ID ($id/external ID) |
| `{{ person.KlaviyoID }}` | Klaviyo ID |
| `{{ person|lookup:"$source" }}` | Source (where the profile was created) |
| `{{ person|lookup:"$timezone" }}` | Recipient's timezone |

### Consent Properties

| Tag | Profile Property |
| :--- | :--- |
| `{{ person|lookup:"$consent" }}` | Consent status |
| `{{ person|lookup:'$consent_form_id' }}` | Consent form ID |
| `{{ person|lookup:'$consent_form_version' }}` | Consent form version |
| `{{ person|lookup:'$consent_method' }}` | Consent method |
| `{{ person|lookup:'$consent_timestamp' }}` | Consent timestamp |

### Behavioral Properties

| Tag | Profile Property |
| :--- | :--- |
| `{{ person.ViewedItems }}` | Recently viewed items |
| `{{ person|lookup:"Expected Date Of Next Order" }}` | Predicted date of next order |

---

## 2. Custom Profile Properties

Custom properties are any data you collect that is not a built-in Klaviyo property. This is where you store your zero-party data.

| Format | Use Case | Example |
| :--- | :--- | :--- |
| `{{ person.property_name }}` | Simple property (no spaces/special characters) | `{{ person.Birthday }}` |
| `{{ person|lookup:'property name' }}` | Property with spaces or special characters | `{{ person|lookup:'Favorite Color' }}` |

---

## 3. Event Variable Tags

Event tags pull data from the specific event that triggered a flow. **They can only be used in flows triggered by that event.**

### Common Event Properties (Shopify Integration)

#### Placed Order

*   `{{ event.OrderId }}`
*   `{{ event|lookup:'$value' }}`
*   `{{ event.ItemCount }}`
*   `{{ event.Items }}` (array of items)
*   `{{ event.BillingAddress }}`
*   `{{ event.ShippingAddress }}`

#### Started Checkout

*   `{{ event|lookup:'$value' }}`
*   `{{ event.ItemNames }}`
*   `{{ event.CheckoutURL }}`
*   `{{ event.Items }}` (array of items)

#### Viewed Product

*   `{{ event.ProductName }}`
*   `{{ event.ProductID }}`
*   `{{ event.ImageURL }}`
*   `{{ event.URL }}`
*   `{{ event.Price }}`

#### Added to Cart

*   `{{ event.ProductName }}`
*   `{{ event.ProductID }}`
*   `{{ event.ImageURL }}`
*   `{{ event.Price }}`
*   `{{ event.Quantity }}`

### General Event Tag Formats

| Format | Use Case | Example |
| :--- | :--- | :--- |
| `{{ event.property_name }}` | Simple event property | `{{ event.URL }}` |
| `{{ event|lookup:'property name' }}` | Property with spaces/special characters | `{{ event|lookup:'$value' }}` |
| `{{ event.property.nested_variable }}` | Nested event property | `{{ event.extra.checkout_url }}` |
| `{{ event|lookup:'property'|lookup:'nested' }}` | Nested property with spaces | `{{ event|lookup:'Coupon Codes'|lookup:'0' }}` |

---

## 4. Organization Tags

These tags pull information about your company from your Klaviyo account settings.

| Tag | Description |
| :--- | :--- |
| `{{ organization.name }}` | Your organization's name |
| `{{ organization.url }}` | Your organization's website |
| `{{ organization.full_address }}` | Full address (city, state/region, zip code) |
| `{{ organization.street_address }}` | Street address |
| `{{ organization.street_address2 }}` | Second part of address (apartment/unit number) |
| `{{ organization.city }}` | City |
| `{{ organization.region }}` | State, province, or region |
| `{{ organization.zip_code }}` | Zip code |

---

## 5. Link and Preview Tags (Email Only)

| Tag | Output |
| :--- | :--- |
| `{% unsubscribe %}` | "Unsubscribe" |
| `{% unsubscribe 'click here' %}` | "click here" (linked) |
| `{% unsubscribe_link %}` | URL only (for custom styling) |
| `{% manage_preferences %}` | "Manage Preferences" |
| `{% manage_preferences 'Click here' %}` | "Click here" (linked) |
| `{% manage_preferences_link %}` | URL only (for custom styling) |
| `{% web_view %}` | "View in Your Browser" |
| `{% web_view 'Open in your browser' %}` | "Open in your browser" (linked) |
| `{% web_view_link %}` | URL only (for custom styling) |
| `{% render_variable preview_text %}` | Displays preview text set on email preview screen |

---

## 6. Template Filters

Filters modify the appearance of your tags.

| Filter | Description | Example |
| :--- | :--- | :--- |
| `default` | Sets a fallback value if the property is empty | `{{ first_name|default:'there' }}` |
| `title` | Applies title casing | `{{ first_name|title }}` |
| `upper` | Converts to uppercase | `{{ first_name|upper }}` |
| `lower` | Converts to lowercase | `{{ first_name|lower }}` |
| `capitalize` | Capitalizes the first letter | `{{ first_name|capitalize }}` |
| `truncate` | Limits character length | `{{ first_name|truncate:10 }}` |
| `date` | Formats dates | `{{ person.Birthday|date:"%B %d" }}` |
| `round` | Rounds numbers | `{{ event.Price|round:2 }}` |

---

## 7. Conditional Logic

Conditional logic allows you to show different content to different people based on their data.

### If Statements

```
{% if person|lookup:'Loyalty Points' > 150 %}
  Hey VIP! You've always got free shipping & free returns.
{% elif person|lookup:'Loyalty Points' > 0 %}
  You have {{ person|lookup:'Loyalty Points' }} points, and you just need 150 to become a VIP!
{% else %}
  Have you heard about our VIP program? Join today to start earning rewards.
{% endif %}
```

### For Loops

For loops allow you to iterate over a list of items, such as the items in a customer's cart.

```
{% for item in event.Items %}
  <p>{{ item.ProductName }} - {{ item.Quantity }}</p>
{% endfor %}
```

---

## 8. Best Practices

*   **Always Use Defaults:** Use the `default` filter to provide a fallback for every personalization tag. This prevents blank spaces in your emails if a customer doesn't have a value for that property.
*   **Case Sensitivity:** All tags and property names are case sensitive. `{{ person.Birthday }}` is not the same as `{{ person.birthday }}`.
*   **Dot vs. Lookup Notation:** Use dot notation (`person.property`) for simple properties and lookup notation (`person|lookup:'property name'`) for properties with spaces or special characters.
*   **Test Thoroughly:** Use Klaviyo's preview tool to test your personalization with different profiles before sending.
*   **Don't Be Creepy:** Use personalization to be helpful and relevant, not to show customers that you know everything about them.

---

## References

1.  Klaviyo Help Center. (n.d.). *Message personalization reference*. Retrieved from https://help.klaviyo.com/hc/en-us/articles/4408802648731
2.  Klaviyo Help Center. (n.d.). *Profile properties reference*. Retrieved from https://help.klaviyo.com/hc/en-us/articles/115005074627
