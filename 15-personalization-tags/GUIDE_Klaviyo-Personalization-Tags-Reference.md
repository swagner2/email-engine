> This document is the ultimate reference guide to all available Klaviyo personalization tags. Use it to create highly personalized and dynamic email content that resonates with your customers.

# The Ultimate Klaviyo Personalization Tags Reference Guide

**Version:** 1.1
**Author:** Manus AI

---

## Introduction

Personalization is the key to creating a world-class email marketing program. Klaviyo's personalization tags (also known as template variables) allow you to dynamically insert customer data into your emails, creating a one-to-one experience at scale. This guide provides a comprehensive list of all available tags, from basic profile properties to advanced conditional logic.

**Important Note:** All personalization tags are **case sensitive** and must exactly match the property names they reference in Klaviyo.

---

## 1. Profile Personalization Tags

These tags pull data directly from a customer's profile in Klaviyo. They are the foundation of email personalization.

### Basic Profile Properties

| Tag | Profile Property | Notes |
| :--- | :--- | :--- |
| `{{ email }}` | Email | The customer's email address |
| `{{ first_name }}` | First Name | Special tag that doesn't require the `person` prefix |
| `{{ last_name }}` | Last Name | Special tag that doesn't require the `person` prefix |
| `{{ person.full_name }}` | Full Name | The customer's full name |
| `{{ person.title }}` | Title | The customer's title (e.g., Mr., Mrs., Dr.) |
| `{{ person.organization }}` | Organization | The customer's company or organization |
| `{{ person.phone_number }}` | Phone Number | The customer's phone number |

### Address and Location Properties

| Tag | Profile Property |
| :--- | :--- |
| `{{ person\|lookup:"$address1" }}` | Address 1 |
| `{{ person\|lookup:'$address2' }}` | Address 2 |
| `{{ person.City }}` | City |
| `{{ person.Region }}` | State / Region |
| `{{ person.Country }}` | Country |
| `{{ person.Zipcode }}` | Zip Code |
| `{{ person\|lookup:"$latitude" }}` | Latitude |
| `{{ person\|lookup:"$longitude" }}` | Longitude |

### System and Tracking Properties

| Tag | Profile Property |
| :--- | :--- |
| `{{ person.id }}` | Unique ID ($id/external ID) |
| `{{ person.KlaviyoID }}` | Klaviyo ID |
| `{{ person\|lookup:"$source" }}` | Source (where the profile was created) |
| `{{ person\|lookup:"$timezone" }}` | Recipient's timezone |
| `{{ person\|lookup:'$phone_number_region' }}` | Phone number region |

### Consent Properties

| Tag | Profile Property |
| :--- | :--- |
| `{{ person\|lookup:"$consent" }}` | Consent status |
| `{{ person\|lookup:'$consent_form_id' }}` | Consent form ID |
| `{{ person\|lookup:'$consent_form_version' }}` | Consent form version |
| `{{ person\|lookup:'$consent_method' }}` | Consent method |
| `{{ person\|lookup:'$consent_timestamp' }}` | Consent timestamp |

### Behavioral Properties

| Tag | Profile Property |
| :--- | :--- |
| `{{ person.ViewedItems }}` | Recently viewed items |
| `{{ person\|lookup:"Expected Date Of Next Order" }}` | Predicted date of next order |

---

## 2. Custom Profile Properties

Custom properties are any data you collect that is not a built-in Klaviyo property. This is where you store your zero-party data.

| Format | Use Case | Example |
| :--- | :--- | :--- |
| `{{ person.property_name }}` | Simple property (no spaces/special characters) | `{{ person.Birthday }}` |
| `{{ person\|lookup:'property name' }}` | Property with spaces or special characters | `{{ person\|lookup:'Favorite Color' }}` |

**Important:** Use dot notation (`.`) for properties without spaces or special characters. Use lookup notation (`|lookup:`) for properties with spaces or special characters.

---

## 3. Event Variable Tags

Event tags pull data from the specific event that triggered a flow. **They can only be used in flows triggered by that event.**

### Common Event Properties (Shopify Integration)

#### Placed Order

- `{{ event.OrderId }}`
- `{{ event\|lookup:'$value' }}`
- `{{ event.ItemCount }}`
- `{{ event.Items }}` (array of items)
- `{{ event.BillingAddress }}`
- `{{ event.ShippingAddress }}`

#### Started Checkout

- `{{ event\|lookup:'$value' }}`
- `{{ event.ItemNames }}`
- `{{ event.CheckoutURL }}`
- `{{ event.Items }}` (array of items)

#### Viewed Product

- `{{ event.ProductName }}`
- `{{ event.ProductID }}`
- `{{ event.ImageURL }}`
- `{{ event.URL }}`
- `{{ event.Price }}`

#### Added to Cart

- `{{ event.ProductName }}`
- `{{ event.ProductID }}`
- `{{ event.ImageURL }}`
- `{{ event.Price }}`
- `{{ event.Quantity }}`

### General Event Tag Formats

| Format | Use Case | Example |
| :--- | :--- | :--- |
| `{{ event.property_name }}` | Simple event property | `{{ event.URL }}` |
| `{{ event\|lookup:'property name' }}` | Property with spaces/special characters | `{{ event\|lookup:'$value' }}` |
| `{{ event.property.nested_variable }}` | Nested event property | `{{ event.extra.checkout_url }}` |
| `{{ event\|lookup:'property'\|lookup:'nested' }}` | Nested property with spaces | `{{ event\|lookup:'Coupon Codes'\|lookup:'0' }}` |

**Important:** With nested properties, if one property name uses lookup notation, all later properties must also use lookup notation.

---

## 4. Custom Object Tags

Custom object tags enable you to use object data in flow and campaign sends. You must create an object first before you can use custom object data in templates.

| Tag Format | Use Case |
| :--- | :--- |
| `{{ object.object_property }}` | Return the object that triggered a flow |
| `{{ object\|lookup:'object_property' }}` | Return object property with spaces |
| `{{ object_filter.object_filter_name.object_property }}` | Return a single object from an object filter |
| `{{ object_filter.object_filter_name }}` | Return a count from an object filter |

---

## 5. Organization Tags

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

## 6. Link and Preview Tags (Email Only)

### Unsubscribe Tags

| Tag | Output |
| :--- | :--- |
| `{% unsubscribe %}` | "Unsubscribe" |
| `{% unsubscribe 'click here' %}` | "click here" (linked) |
| `{% unsubscribe_link %}` | URL only (for custom styling) |

### Manage Preferences Tags

| Tag | Output |
| :--- | :--- |
| `{% manage_preferences %}` | "Manage Preferences" |
| `{% manage_preferences 'Click here' %}` | "Click here" (linked) |
| `{% manage_preferences_link %}` | URL only (for custom styling) |

### Web View Tags

| Tag | Output |
| :--- | :--- |
| `{% web_view %}` | "View in Your Browser" |
| `{% web_view 'Open in your browser' %}` | "Open in your browser" (linked) |
| `{% web_view_link %}` | URL only (for custom styling) |

### Preview Text Tag

| Tag | Output |
| :--- | :--- |
| `{% render_variable preview_text %}` | Displays preview text set on email preview screen |

---

## 7. Template Filters

Filters modify the appearance of your tags.

| Filter | Description | Example |
| :--- | :--- | :--- |
| `default` | Sets a fallback value if the property is empty | `{{ first_name\|default:'there' }}` |
| `title` | Applies title casing | `{{ first_name\|title }}` |
| `upper` | Converts to uppercase | `{{ first_name\|upper }}` |
| `lower` | Converts to lowercase | `{{ first_name\|lower }}` |
| `capitalize` | Capitalizes the first letter | `{{ first_name\|capitalize }}` |
| `truncate` | Limits character length | `{{ first_name\|truncate:10 }}` |
| `date` | Formats dates | `{{ person.Birthday\|date:"%B %d" }}` |
| `round` | Rounds numbers | `{{ event.Price\|round:2 }}` |

---

## 8. Currency Format Tag

Use the currency format tag to apply your country's currency formatting to financial values.

**Format:** `{% currency_format VARIABLE %}`

**Examples:**
- `{% currency_format event\|lookup:"$value" %}` → $45.00
- `{% currency_format event.item.price %}` → $29.99
- `{% currency_format event.item.price\|default:"0" %}` → $0.00 (if price is empty)

---

## 9. Date Tags

Date tags give you a quick way to insert date information into an email. The date reflects your account's timezone and the day/time a message was sent.

**Today Tag Format:**
```
{% today "%Y-%m-%d" as today %}{{ today }}
```

**Note:** The full line of code is necessary; using just `{{ today }}` will not render anything.

---

## 10. Conditional Logic

Conditional logic allows you to show different content to different people based on their data.

### If Statements

```django
{% if person\|lookup:'Loyalty Points' > 150 %}
  Hey VIP! You've always got free shipping & free returns.
{% elif person\|lookup:'Loyalty Points' > 0 %}
  You have {{ person\|lookup:'Loyalty Points' }} points, and you just need 150 to become a VIP!
{% else %}
  Have you heard about our VIP program? Join today to start earning rewards.
{% endif %}
```

**Required Elements:**
- Opening `{% if ... %}` tag
- Closing `{% endif %}` tag

**Optional Elements:**
- Unlimited `{% elif ... %}` tags
- One `{% else %}` tag

### For Loops

For loops allow you to iterate over a list of items, such as the items in a customer's cart.

```django
{% for item in event.Items %}
  <p>{{ item.ProductName }} - {{ item.Quantity }}</p>
{% endfor %}
```

**Required Elements:**
- Opening `{% for ... %}` tag with row alias and row collection
- Closing `{% endfor %}` tag

---

## 11. Best Practices

### Always Use Defaults

Use the `default` filter to provide a fallback for every personalization tag. This prevents blank spaces in your emails if a customer doesn't have a value for that property.

**Example:** `{{ first_name\|default:'there' }}`

### Case Sensitivity

All tags and property names are case sensitive. `{{ person.Birthday }}` is not the same as `{{ person.birthday }}`.

### Dot vs. Lookup Notation

- Use dot notation (`person.property`) for simple properties
- Use lookup notation (`person\|lookup:'property name'`) for properties with spaces or special characters

### Test Thoroughly

Use Klaviyo's preview tool to test your personalization with different profiles before sending. Preview with both profiles that have the data and profiles that don't to ensure your default values work correctly.

### Don't Be Creepy

Use personalization to be helpful and relevant, not to show customers that you know everything about them. Focus on creating value, not demonstrating data collection.

### Escape Characters

When using quotes inside lookup notation, alternate between single and double quotes:
- `{{ person\|lookup:'property name' }}` (single quotes inside)
- `{{ person\|lookup:"property name" }}` (double quotes inside)

---

## 12. Common Personalization Examples

### Personalized Greeting

```django
Hi {{ first_name\|default:'there' }},
```

### VIP Status Banner

```django
{% if person\|lookup:'VIP Status' == 'true' %}
  <div class="vip-banner">You're a VIP! Enjoy free shipping on all orders.</div>
{% endif %}
```

### Cart Items Loop

```django
{% for item in event.Items %}
  <div>
    <img src="{{ item.ImageURL }}" alt="{{ item.ProductName }}">
    <h3>{{ item.ProductName }}</h3>
    <p>Quantity: {{ item.Quantity }}</p>
    <p>Price: {% currency_format item.Price %}</p>
  </div>
{% endfor %}
```

### Birthday Message

```django
{% if person.Birthday %}
  Happy Birthday, {{ first_name\|title }}! 🎉
{% endif %}
```

---

## References

1. Klaviyo Help Center. (n.d.). *Message personalization reference*. Retrieved from https://help.klaviyo.com/hc/en-us/articles/4408802648731
2. Klaviyo Help Center. (n.d.). *Profile properties reference*. Retrieved from https://help.klaviyo.com/hc/en-us/articles/115005074627
