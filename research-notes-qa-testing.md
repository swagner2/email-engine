# Email QA Testing Research Notes

## Sources

1. **Litmus - The Ultimate Email Checklist: 29 Things to Check**
   - URL: https://www.litmus.com/blog/ultimate-email-checklist
   - Key focus: 6 phases to sending the perfect email

2. **Email on Acid - Email QA Checklist: How to Nail Quality Assurance in 7 Steps**
   - URL: https://www.emailonacid.com/blog/article/needs-improvement/solid-email-qa/
   - Key focus: 7-step QA process with automation

## Key Findings

### The 6 Phases (Litmus Framework)

1. **Planning and Strategy**
   - Determine campaign goal
   - Define success metrics/KPIs
   - Segment audience properly

2. **Craft Your Content**
   - Personalization strategy
   - Strong CTAs
   - Subject line, sender name, preview text working together

3. **Enhance Your Inbox View**
   - Recognizable "from" name
   - Active reply-to address (not donotreply)
   - Optimized preview text

4. **Optimize Your Email Design**
   - Render correctly across clients
   - Plain-text version
   - Retina images
   - Dynamic content with fallbacks
   - ALT text for images
   - Dark mode testing
   - Merge tags with fallbacks
   - Load time under 2-3 seconds
   - File size under 102KB (Gmail clipping)
   - Accessibility for screen readers

5. **Prepare Your Insights**
   - Check all links and tracking
   - UTM parameters
   - Analytics code activated

6. **Email Deliverability**
   - Explicit opt-in
   - Spam law compliance
   - Company contact info
   - Spelling/grammar
   - Working unsubscribe link
   - IP/domain reputation check
   - Spam filter test

### The 7-Step QA Process (Email on Acid Framework)

1. **Copy Check**
   - Spelling and typos
   - Grammar errors
   - Profanity filter
   - Alt text review
   - Preheader text check

2. **Optimize Inbox Display**
   - Subject line length (mobile vs desktop)
   - Preview text supplements subject line
   - Sender name recognition
   - How all three work together

3. **Evaluate Email Accessibility**
   - Legible fonts
   - Color contrast
   - Alt text for all images
   - CTA button size and clickability
   - Screen reader compatibility

4. **Validate Links/URLs**
   - Check for broken links
   - 404 errors
   - Incorrect landing pages
   - UTM parameter consistency
   - Tracking implementation

5. **Validate Email Images**
   - Image padding and spacing
   - File size optimization
   - GIF animation support
   - First frame fallback for GIFs
   - Load time impact

6. **Check for Deliverability Issues**
   - Email authentication (SPF, DKIM, DMARC)
   - Blocklist checking
   - Spam filter testing
   - One-click unsubscribe in headers
   - Domain/IP reputation

7. **Test and Preview**
   - Render testing across 100+ clients
   - Mobile vs desktop
   - Dark mode
   - Custom font support
   - Client-specific rendering issues

## Common Issues to Check

### Rendering Issues
- White lines in Outlook
- Extra spacing in Yahoo
- Custom fonts not supported in Gmail
- Dark mode color inversions
- Image blocking
- Gmail clipping (>102KB)

### Personalization Issues
- Merge tags not working
- Missing fallback values
- Dynamic content not displaying
- Conditional logic errors

### Link Issues
- Broken links
- 404 errors
- Missing UTM parameters
- Inconsistent tracking
- Wrong landing pages

### Accessibility Issues
- Missing alt text
- Poor color contrast
- Small CTA buttons
- Non-semantic HTML
- Missing language attributes

### Deliverability Issues
- On blocklists
- Missing authentication
- Spam trigger words
- No unsubscribe link
- Using donotreply@ addresses

## Best Practices

### Manual vs Automated QA
- Manual: Colleagues review and click through
- Automated: Software-driven comprehensive testing
- 57% of teams still use manual processes (2021 survey)
- Automated is more thorough and reduces human error

### Testing Frequency
- Email client updates happen every 1.2 days on average
- Need to test every campaign before send
- Cannot rely on "it worked last time"

### Team Collaboration
- Use markup tools for feedback
- Share previews with stakeholders
- Document issues and fixes
- Build custom workflows

### Key Metrics to Track
- Open rate (with MPP considerations)
- Click-through rate (CTR)
- Conversion rate (CVR)
- Unsubscribe rate
- Bounce rate
- Spam complaint rate
- Revenue per email (RPE)
- Email read time

## Klaviyo-Specific Considerations

- Use Klaviyo's preview tool to test with different profiles
- Test dynamic content with profiles that have and don't have data
- Verify flow triggers are working correctly
- Check conditional splits in flows
- Test time delays and wait steps
- Verify segment membership
- Check suppression lists are applied
