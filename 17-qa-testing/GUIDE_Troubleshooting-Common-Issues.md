> This guide is a reference for troubleshooting the most common issues that arise during email QA. Use it to quickly diagnose and resolve problems.

# Troubleshooting Common Email QA Issues

**Version:** 1.0
**Author:** Manus AI

---

## Introduction

Even with a thorough QA process, issues can still arise. This guide provides a quick reference for diagnosing and fixing the most common problems encountered during email testing.

---

## Rendering Issues

| Issue | Cause | Solution |
| :--- | :--- | :--- |
| **White lines in Outlook** | Outlook's rendering engine sometimes adds 1px lines between table cells. | Add `border-collapse: collapse;` to your table styles. For persistent issues, try setting the background color of the entire email to match the section color. |
| **Extra spacing in Yahoo** | Yahoo Mail can add extra padding to images. | Add `display: block;` to your image styles. |
| **Custom fonts not working** | The email client does not support the custom font. | Ensure you have a web-safe fallback font specified in your styles (e.g., `font-family: 'Custom Font', Arial, sans-serif;`). |
| **Dark mode issues** | Colors are being inverted, making the email unreadable. | Use transparent images where possible. For logos, consider adding a white stroke around the text. Use meta tags to give hints to the email client about your dark mode preferences. |
| **Gmail clipping** | The email's file size is over 102KB. | Reduce the file size by removing unnecessary code, comments, and styles. Use a tool to minify your HTML. |

---

## Personalization & Dynamic Content Issues

| Issue | Cause | Solution |
| :--- | :--- | :--- |
| **Personalization tag is blank** | The profile does not have a value for that property. | Always use the `default` filter to provide a fallback value (e.g., `{{ first_name\|default:'there' }}`). |
| **Personalization tag shows code** | The syntax is incorrect. | Check for typos, case sensitivity, and correct use of dot vs. lookup notation. |
| **Conditional block not showing** | The logic is incorrect or the profile data is not what you expect. | Double-check your conditional logic. Preview with a profile that should meet the criteria to verify their data. |

---

## Link & Tracking Issues

| Issue | Cause | Solution |
| :--- | :--- | :--- |
| **Broken link (404 error)** | The URL is incorrect or the page has been moved. | Copy and paste the URL directly from your browser to ensure it is correct. |
| **UTM parameters not tracking** | The syntax is incorrect or the analytics tool is not configured properly. | Use a URL builder to create your UTM parameters. Verify that your analytics tool is set up to read them. |

---

## Deliverability Issues

| Issue | Cause | Solution |
| :--- | :--- | :--- |
| **Emails going to spam** | Can be caused by many factors, including poor sender reputation, spammy content, or lack of authentication. | Use a spam testing tool to check your email against common spam filters. Ensure your SPF, DKIM, and DMARC records are set up correctly. |
| **High bounce rate** | The email list may be old or contain invalid addresses. | Use an email validation service to clean your list before sending. |

---

## Flow-Specific Issues

| Issue | Cause | Solution |
| :--- | :--- | :--- |
| **Flow not triggering** | The trigger event is not firing or the trigger filters are too restrictive. | Check your integration to ensure the event is being sent to Klaviyo. Review your trigger filters to make sure they are not unintentionally excluding everyone. |
| **Emails not sending** | The flow may be in draft mode, or the emails themselves may be in draft mode. | Ensure the flow and all emails within it are set to "Live". |
| **Emails sending at the wrong time** | The time delays are incorrect or the account's timezone is not set properly. | Double-check all time delays. Verify your account's timezone in the Klaviyo settings. |

---

## General Best Practices for Troubleshooting

- **Isolate the Problem:** Try to identify the specific element that is causing the issue.
- **Test in a Clean Environment:** Create a new, simple email to test the problematic element in isolation.
- **Check the Code:** Look for any obvious errors in the HTML and CSS.
- **Consult the Documentation:** Refer to Klaviyo's help documentation for specific guidance on their platform.
- **Ask for Help:** If you're stuck, don't be afraid to ask a colleague or consult an online community for help.
