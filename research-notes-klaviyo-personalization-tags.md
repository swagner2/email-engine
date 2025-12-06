# Klaviyo Personalization Tags Research

**Date:** December 6, 2025

---

## Overview

This document contains comprehensive research on all available Klaviyo personalization tags, variables, and dynamic content capabilities. Personalization tags (previously called template tags and variable syntax) allow you to customize the experience for each customer by dynamically inserting profile data, event data, and other variables into emails, SMS, push notifications, and Customer Hub messages.

---

## Core Concepts

### How Personalization Tags Work

When you input tags into a text field, they are replaced by information from the recipient's profile or event details when the message is displayed.

**Example:**
- **Input:** `Hi {{ first_name }} {{ last_name }}, your favorite color is {{ person|lookup:'Favorite Color' }}`
- **Output:** "Hi George Washington, your favorite color is Green"

### Tag Structure

- **Profile personalization:** Generally begins with `person`, with exceptions for special tags like `first_name` and `last_name`
- **Event variables:** Begin with `event` (only available in metric-triggered flows)
- **Organization tags:** Begin with `organization`
- **All tags are case sensitive** and must exactly match property names

---

## Complete List of Built-In Profile Personalization Tags

### Basic Profile Properties

| Tag | Profile Property | Notes |
|-----|-----------------|-------|
| `{{ email }}` | Email | |
| `{{ first_name }}` | First name | Special tag, doesn't require `person` prefix |
| `{{ last_name }}` | Last name | Special tag, doesn't require `person` prefix |
| `{{ person.full_name }}` | Full name | |
| `{{ person.title }}` | Title | |
| `{{ person.organization }}` | Recipient organization | |
| `{{ person.phone_number }}` | Phone Number | |

### Address and Location Properties

| Tag | Profile Property |
|-----|-----------------|
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
|-----|-----------------|
| `{{ person.id }}` | Unique ID ($id/external ID) |
| `{{ person.KlaviyoID }}` | Klaviyo ID |
| `{{ person|lookup:"$source" }}` | Source |
| `{{ person|lookup:"$timezone" }}` | Recipient timezone |

### Consent Properties

| Tag | Profile Property |
|-----|-----------------|
| `{{ person|lookup:"$consent" }}` | Consent |
| `{{ person|lookup:'$consent_form_id' }}` | Consent form ID |
| `{{ person|lookup:'$consent_form_version' }}` | Consent form version |
| `{{ person|lookup:'$consent_method' }}` | Consent method |
| `{{ person|lookup:'$consent_timestamp' }}` | Consent timestamp |
| `{{ person|lookup:'$phone_number_region' }}` | Phone number region |

### Behavioral Properties

| Tag | Profile Property |
|-----|-----------------|
| `{{ person.ViewedItems }}` | Recently viewed items |
| `{{ person|lookup:"Expected Date Of Next Order" }}` | Expected date of next order |

---

## Additional Klaviyo Properties (Not in Tag List)

These properties exist on profiles but may need to be accessed differently:

- **Klaviyo ID**
- **First active**
- **Last active**
- **Profile created on**
- **Date added**
- **Last open**
- **Last click**
- **$locale**
- **$locale_language**
- **$locale_country**
- **Accepts Marketing** (from Shopify integration)

---

## Organization Tags

Organization tags allow you to include information about your company in messages. Manage this in **Settings > Organization > Contact Information**.

| Tag | Description |
|-----|-------------|
| `{{ organization.name }}` | Your organization's name |
| `{{ organization.url }}` | Your organization's website |
| `{{ organization.full_address }}` | Full address (city, state/region, zip code) |
| `{{ organization.street_address }}` | Street address |
| `{{ organization.street_address2 }}` | Second part of address (apartment/unit number) |
| `{{ organization.city }}` | City |
| `{{ organization.region }}` | State, province, or region |
| `{{ organization.zip_code }}` | Zip code |

---

## Link and Preview Tags (Email Only)

### Unsubscribe Tags

| Tag | Output |
|-----|--------|
| `{% unsubscribe %}` | "Unsubscribe" |
| `{% unsubscribe 'click here' %}` | "click here" (linked) |
| `{% unsubscribe_link %}` | URL only (for custom styling) |

### Manage Preferences Tags

| Tag | Output |
|-----|--------|
| `{% manage_preferences %}` | "Manage Preferences" |
| `{% manage_preferences 'Click here' %}` | "Click here" (linked) |
| `{% manage_preferences_link %}` | URL only (for custom styling) |

### Web View Tags

| Tag | Output |
|-----|--------|
| `{% web_view %}` | "View in Your Browser" |
| `{% web_view 'Open in your browser' %}` | "Open in your browser" (linked) |
| `{% web_view_link %}` | URL only (for custom styling) |

### Preview Text Tag

| Tag | Description |
|-----|-------------|
| `{% render_variable preview_text %}` | Displays preview text set on email preview screen |

---

## Custom Personalization Tags

Custom tags reference custom profile properties (any data you collect beyond built-in Klaviyo properties).

### Tag Formats

| Format | Use Case | Example |
|--------|----------|---------|
| `{{ person.property_name }}` | Simple property (no spaces/special characters) | `{{ person.Birthday }}` |
| `{{ person|lookup:'property name' }}` | Property with spaces or special characters | `{{ person|lookup:'Favorite Color' }}` |

---

## Event Variable Tags

Event tags reference specific event data and can **only be used in flows triggered by that event**.

### Tag Formats

| Format | Use Case | Example |
|--------|----------|---------|
| `{{ event.property_name }}` | Simple event property | `{{ event.URL }}` |
| `{{ event|lookup:'property name' }}` | Property with spaces/special characters | `{{ event|lookup:'$value' }}` |
| `{{ event.property.nested_variable }}` | Nested event property | `{{ event.extra.checkout_url }}` |
| `{{ event|lookup:'property'|lookup:'nested' }}` | Nested property with spaces | `{{ event|lookup:'Coupon Codes'|lookup:'0' }}` |

**Important:** With nested properties, if one property uses lookup notation, all subsequent properties must also use lookup notation.

---

## Custom Object Tags

Custom object tags enable you to use object data in flow and campaign sends.

| Tag | Outcome |
|-----|---------|
| `{{ object.object_property }}` | Return the object that triggered a flow |
| `{{ object|lookup:'object_property' }}` | Alternative syntax |
| `{{ object_filter.object_filter_name.object_property }}` | Return single object from object filter |
| `{{ object_filter.object_filter_name }}` | Return count from object filter |
| `{% customobject id={{ event.object_id }} as alias %}` | Retrieve object by ID |
| `{% customobjects object_type_title="Title" as alias %} {% for object_instance in alias %} {{ object_instance.record }} {% endfor %} {% endcustomobjects %}` | Retrieve all records for an object from one profile |

---

## Date Tags

Date tags insert date information based on your account's timezone.

### The Today Tag

```
{% today "%Y-%m-%d" as today %} {{ today }}
```

**Note:** The full line of code is necessary; using just `{{ today }}` will not render anything.

### Date Formatting Options

- `%Y-%m-%d` - Year-Month-Day (e.g., 2025-12-06)
- `%m/%d/%Y` - Month/Day/Year (e.g., 12/06/2025)
- `%B %d, %Y` - Full month name (e.g., December 06, 2025)
- Add time with `HH:MM:SS` format

---

## Currency Tags

Use currency formatting for financial values in event data.

### Basic Usage

```
{% currency_format event|lookup:"$value" %}
```

### With Filters

```
{% currency_format event.item.price|default:"0" %}
```

### Setting Currency Format

1. **Account-wide:** Settings > Organization > Organization language and regional format
2. **Per message:** Template's Styles tab > Currency section

**Important:** Only works with number variables (10, 24.56), not strings with currency symbols ($40).

---

## Template Filters

Filters customize how tags appear in messages.

### Most Common Filters

#### Default Filter

Sets a fallback value if the property doesn't exist.

```
{{ first_name|default:'friend' }}
{{ person|lookup:'Favorite Food'|default:'tasty treats' }}
```

#### Title Filter

Applies title casing to ensure consistent capitalization.

```
{{ first_name|title }}
```
Output: "Elise" (even if stored as "ELISE" or "elise")

### Additional Available Filters

- **upper** - Converts to uppercase
- **lower** - Converts to lowercase
- **capitalize** - Capitalizes first letter only
- **truncate** - Limits character length
- **slice** - Extracts portion of string
- **join** - Joins list items with separator
- **length** - Returns length of string or list
- **round** - Rounds numbers
- **abs** - Absolute value
- **date** - Formats dates
- **escape** - Escapes HTML characters

---

## Conditional Statements

### If Statements

Control content based on profile or event data.

```
{% if person|lookup:'Loyalty Points' > 150 %}
  Hey VIP! You've always got free shipping & free returns
{% elif person|lookup:'Loyalty Points' > 0 %}
  You have {{ person|lookup:'Loyalty Points' }} points, and you just need 150 to become a VIP!
{% else %}
  Have you heard about our VIP program? Join today on our website to start earning rewards.
{% endif %}
```

**Structure:**
- Required: `{% if ... %}` and `{% endif %}`
- Optional: Unlimited `{% elif %}` tags, one `{% else %}` tag
- Recipients see only the first message they qualify for

### For Statements

Iterate over items in a list.

```
{% for item in event.shopping_cart_items %}
  {{ item.name }} × {{ item.quantity }}
{% endfor %}
```

**Output Example:**
- Oversized Beach Blanket × 1
- Beach Chairs × 4
- SPF Sunscreen × 2
- Plastic Cooler × 1

**Structure:**
- Required: `{% for ... %}` and `{% endfor %}`
- Use row alias to reference nested properties
- `{{ event.shopping_cart_items.0.name }}` becomes `{{ item.name }}`

---

## Best Practices

### Naming Conventions

1. **Case sensitivity matters:** `{{ person.Birthday }}` ≠ `{{ person.birthday }}`
2. **Exact matches required:** Tags must exactly match property names
3. **Consistency is critical:** Use same spelling and casing across all properties

### Using Dot vs. Lookup Notation

- **Dot notation:** For properties without spaces or special characters
  - `{{ person.Birthday }}`
- **Lookup notation:** For properties with spaces or special characters
  - `{{ person|lookup:'Favorite Color' }}`
  - `{{ event|lookup:'$value' }}`

### Default Values

Always provide default values for better user experience:

```
Hi {{ first_name|default:'there' }},
```

### Testing

Use Klaviyo's preview tool to test personalization with different profiles before sending.

---

## Common Event Properties (Shopify Integration)

### Placed Order Event

- `{{ event.OrderId }}`
- `{{ event|lookup:'$value' }}`
- `{{ event.ItemCount }}`
- `{{ event.Items }}` (array)
- `{{ event.BillingAddress }}`
- `{{ event.ShippingAddress }}`

### Started Checkout Event

- `{{ event|lookup:'$value' }}`
- `{{ event.ItemNames }}`
- `{{ event.CheckoutURL }}`
- `{{ event.Items }}` (array)

### Viewed Product Event

- `{{ event.ProductName }}`
- `{{ event.ProductID }}`
- `{{ event.ImageURL }}`
- `{{ event.URL }}`
- `{{ event.Price }}`

### Added to Cart Event

- `{{ event.ProductName }}`
- `{{ event.ProductID }}`
- `{{ event.ImageURL }}`
- `{{ event.Price }}`
- `{{ event.Quantity }}`

---

## Visibility in Text Editor

Some conditional tags are only visible in the Source code field, not the inline text editor:

- `{% for ... %}`
- `{% endfor %}`
- `{% if ... %}`
- `{% elif ... %}`
- `{% else %}`
- `{% endif %}`
- `{% with ... %}`
- `{% endwith %}`

To view/edit these, open the text block's Source code field.

---

## Sources

1. Klaviyo Help Center - "Message personalization reference" (https://help.klaviyo.com/hc/en-us/articles/4408802648731)
2. Klaviyo Help Center - "Profile properties reference" (https://help.klaviyo.com/hc/en-us/articles/115005074627)
