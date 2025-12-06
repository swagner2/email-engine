> This guide provides a comprehensive overview of how to enrich Klaviyo profiles with zero-party data. Proper profile enrichment is the foundation of a successful personalization strategy.

# Profile Enrichment Guide

---

## 1. The Goal of Profile Enrichment

Profile enrichment is the process of adding data to your customer profiles to create a more complete and actionable view of each individual. The goal is to move beyond basic information like name and email address and build a rich, multi-dimensional profile that includes preferences, interests, behaviors, and needs.

By enriching your profiles with zero-party data, you can power highly personalized experiences that are more relevant, engaging, and effective.

---

## 2. Storing Zero-Party Data in Klaviyo

All zero-party data should be stored as **custom properties** on Klaviyo profiles. A custom property is a piece of information that you define and attach to a profile.

### How It Works

1.  **Data Collection:** You collect zero-party data through a form, quiz, survey, or other method.
2.  **Mapping:** You map the data from your collection method to a custom property in Klaviyo.
3.  **Storage:** The data is stored on the customer's profile and can be used for segmentation, personalization, and flow triggers.

### Example

A customer completes a quiz and indicates that their primary skin concern is "acne." This information is passed to Klaviyo and stored as a custom property on their profile:

*   **Property Name:** `skin_concern`
*   **Property Value:** `acne`

---

## 3. Best Practices for Custom Properties

### Use Consistent Naming Conventions

Use a consistent naming convention for your custom properties to make them easy to find and understand. A common convention is to use lowercase letters and underscores (e.g., `skin_concern`, `style_preference`, `dietary_need`).

### Document Your Properties

Keep a spreadsheet or document that lists all of your custom properties, what they mean, how they are collected, and what the possible values are. This will be an invaluable resource for your team.

### Use the Right Data Type

Klaviyo supports several data types for custom properties:

*   **Text:** For open-ended responses or text-based values.
*   **Number:** For numerical values.
*   **Boolean (True/False):** For binary choices.
*   **Date:** For dates, such as birthdays or anniversaries.
*   **List:** For properties that can have multiple values (e.g., a customer who is interested in multiple product categories).

Using the right data type will make it easier to create segments and use the data in your marketing.

---

## 4. Progressive Profiling

You don't need to collect all of your zero-party data at once. In fact, it's better if you don't. Progressive profiling is the process of gradually building a customer profile over time.

### How It Works

1.  **Start with the Basics:** At sign-up, only ask for the essential information (e.g., email address).
2.  **Ask for More in the Welcome Series:** In your welcome series, you can ask for more information, such as their product preferences or birthday.
3.  **Use Quizzes and Surveys:** As the customer engages with your brand, you can invite them to take a quiz or complete a survey to gather even more data.
4.  **Leverage the Preference Center:** Encourage customers to update their preferences in your preference center.

By using progressive profiling, you can build rich customer profiles without overwhelming your customers with long forms.

---

## 5. Integrating Your Tools with Klaviyo

To ensure that all of your zero-party data is stored in Klaviyo, you need to integrate your data collection tools with Klaviyo.

*   **Klaviyo Forms:** If you use Klaviyo's built-in forms, the data will automatically be stored as custom properties.
*   **Third-Party Tools:** If you use third-party tools for quizzes (e.g., Octane AI, Typeform) or surveys (e.g., Fairing, Enquire), you need to ensure they have a direct integration with Klaviyo. If they don't, you may need to use a tool like Zapier to connect them.

Proper integration is critical. If your data is siloed in different tools, you won't be able to use it effectively.
