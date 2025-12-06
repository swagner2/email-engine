# A/B Testing Research for Email Flows & Automation

**Date:** December 6, 2025

---

## Core A/B Testing Best Practices

### 1. Develop a Hypothesis

Start with a clear, testable hypothesis. Examples:
- "The subject line of my abandoned cart email will drive higher open rates when it references the name of the product."
- "An email that looks like it's coming from a person rather than our company name will earn more opens."
- "A text message will drive more clicks when it's preceded by an email."
- "A sign-up form will drive higher list growth if it appears after the shopper has scrolled at least 75% of the page."

### 2. Decide How You'll Determine the Winner

Choose a performance metric based on what you're testing:
- **Open rate:** For "from" name, subject line, or preview text tests
- **Click rate:** For content like email layout, visuals, CTA appearance, or CTA copy
- **Placed order rate:** For social proof, send time, or CTA placement

### 3. Test Only ONE Variable at a Time

Testing multiple variables simultaneously makes it impossible to attribute results. If you change both color AND copy on a CTA and see a spike, you won't know which change drove it.

### 4. Test No More Than 4 Variations at a Time

More variations require larger audiences for reliable results. Klaviyo recommends 2-4 variations maximum.

### 5. Use a Large Sample & Achieve Statistical Significance

**Minimum Audience Sizes:**
- Campaign tests: 5,000+ recipients for statistical significance
- Minimum viable: 2,000+ recipients
- Under 2,000: Results may not be reliable

**Statistical Significance Categories (Klaviyo):**
- **Statistically significant:** Win probability 90%+ - results are reproducible
- **Promising:** Win probability 75%+ - consider running another test
- **Not statistically significant:** Slight difference only, may not replicate
- **Inconclusive:** Not enough data - expand recipient pool or run more tests

**Recommended Test Size:** 20% of list for Version A, 20% for Version B, 60% receives the winner.

### 6. Test Low-Effort Elements First

Start with high-impact, low-effort tests:
- Subject line or headline
- CTA button copy
- Use of emojis

Then move to high-effort tests:
- Format
- Layout
- Visuals

### 7. Prioritize Messages You Send Most

Focus on:
- Abandoned cart reminders
- Promotional campaigns
- Welcome emails
- Messages seen by the largest number of people

### 8. Don't Edit a Live Test

Once launched, let the test run without changes. Klaviyo doesn't allow modification of live campaign tests. For flows, you CAN modify but SHOULDN'T - end the test first if changes are needed.

### 9. Wait Enough Time Before Evaluating

**Email Tests:** 3-5 days minimum (people don't all open immediately)
**SMS Tests:** Faster results (people read texts immediately)
**Placed Order Tests:** Longer duration needed

Set test duration based on your success metric.

### 10. Ask for Feedback

Tag subscribers who interacted with your CTA, then follow up with personalized feedback requests. This provides qualitative insights that numbers alone cannot.

### 11. A/B Test for Individuals, Not Just Majorities

Use Klaviyo AI's personalized campaigns feature to send each recipient the variation they're most likely to engage with, based on their behavior patterns.

### 12. Lean on AI

Klaviyo AI can:
- Calculate statistical significance automatically
- Provide win percentage estimates
- Send winning version automatically
- Optimize send times and form display

---

## Where You Can A/B Test in Klaviyo

### Campaign Emails
Test subject lines, content, and design within the campaign builder.

### Flows
Use the **Random Sample** split block to test different branches or timing strategies.
- Default: 50/50 split
- Custom splits available (e.g., 70/30)

### Sign-Up Forms
A/B test copy, visuals, offers, and triggers.

### SMS Campaigns
Not natively supported - test by cloning messages and segmenting audiences, then track performance in analytics.

---

## Campaign Email A/B Test Ideas

### 1. Subject Line Tests
- **Curiosity vs. Clarity:** "You'll want to see this" vs. "Upgrade your order in 1 click"
- **Personalized vs. Generic:** "[First Name], here's something better for you" vs. "Our premium pick is back"
- **Emoji vs. No Emoji**
- **Length:** Longer vs. shorter subject lines
- **Urgency vs. Value:** "Ends tonight" vs. "Free delivery on all orders"

### 2. Preview Text Tests
- Urgency-focused ("Ends tonight") vs. value-based ("Free delivery on all orders")

### 3. CTA Tests
- **Placement:** Button at top vs. bottom
- **Style:** Text-only CTA vs. branded button
- **Copy:** Action-oriented vs. benefit-oriented
- **Color:** Test different button colors (max 4 variations)

### 4. Image Tests
- **Hierarchy:** Full-width lifestyle imagery vs. cropped product close-ups
- **Type:** Lifestyle photography vs. product-only shots
- **Presence:** Image vs. no image

### 5. Layout & Tone Tests
- **Format:** Long-form storytelling vs. short punchy layouts
- **Priority:** Image-first vs. copy-first design
- **Voice:** Formal vs. casual tone

### 6. Sender Name Tests
- Person name vs. company name
- CEO/Founder name vs. generic "Team" name

### 7. Send Time Tests
- Morning vs. afternoon vs. evening
- Weekday vs. weekend

---

## Flow A/B Test Ideas

### 1. Welcome Flow Tests

**Offer vs. No Offer:**
- 15% off first purchase vs. no discount
- Goal: Maximize first-time purchase rate
- Insight: Some brands see stronger conversion WITHOUT an offer when brand story is strong

**Email Length:**
- 3-email series vs. 5-email series

**Timing:**
- Immediate send vs. delayed by 4 hours

### 2. Abandoned Cart Flow Tests

**Email Format:**
- Plain text vs. HTML design
- Image-heavy vs. text-heavy

**Discount Strategy:**
- No discount → Small discount → Larger discount progression
- Immediate discount vs. delayed discount
- Discount vs. free shipping

**Send Timing:**
- 1hr, 12hr, 24hr, 48hr variations
- Test different intervals between emails

**SMS Integration:**
- SMS before email vs. SMS after email
- Plain text SMS vs. image-based SMS

**Content Focus:**
- Product reminder only vs. addressing objections (size guide, reviews, return policy)

### 3. Post-Purchase Flow Tests

**Product Recommendations:**
- Personalized (dynamic) product recommendations vs. generic product blocks
- Based on category vs. based on price tier

**Content Type:**
- Educational (how-to-use) vs. cross-sell focused
- Care instructions vs. styling tips

**Timing:**
- Immediate vs. delayed by days

### 4. Back-in-Stock Flow Tests

**Send Timing:**
- Immediate alert vs. delayed by 4 hours
- Goal: Balance urgency with timing sensitivity
- Insight: Delays can reduce unsubscribes for recent browsers

### 5. Win-Back Flow Tests

**Offer Strategy:**
- No offer → Soft offer → Strong offer progression
- Percentage discount vs. dollar amount vs. free shipping

**Messaging Tone:**
- "We miss you" (emotional) vs. "You're missing out" (FOMO)

**Flow Length:**
- 2 emails vs. 4 emails

### 6. Cross-Sell/Upsell Flow Tests

**Product Logic:**
- Category-based recommendations vs. price-tier based
- "Frequently bought together" vs. "You might also like"

**Timing:**
- 7 days post-purchase vs. 14 days post-purchase

### 7. VIP Flow Tests

**Benefit Communication:**
- List all benefits upfront vs. reveal benefits over time
- Exclusive access vs. discount-focused

---

## Sign-Up Form A/B Test Ideas

### 1. Headline Tests

**Benefit-Led vs. Curiosity-Led:**
- "Get 10% Off Your First Order" vs. "Unlock a Surprise Offer"
- Insight: Benefit-led often performs better on desktop, curiosity-led on mobile

### 2. Offer Type Tests

**Discount vs. Free Shipping:**
- 10% off vs. Free shipping on first order
- Insight: Free shipping often performs better for lower AOV products, % discounts for higher-ticket items

**Discount Amount:**
- 10% off vs. 15% off vs. 20% off

**Prize/Contest vs. Discount:**
- Entry to win $300 vs. 10% off for everyone

### 3. Trigger Timing Tests

**Scroll Trigger vs. Exit-Intent:**
- Show after 50% scroll vs. when user tries to exit
- Insight: Scroll triggers work better for returning visitors, exit-intent for first-timers

**Time Delay:**
- Immediate vs. 10 seconds vs. 30 seconds

### 4. Visual Tests

**Image vs. No Image**
**Product image vs. lifestyle image**

### 5. Form Fields Tests

**Email Only vs. Email + Name**
**Single-step vs. multi-step form**

---

## Advanced Testing Strategies

### Holdout Groups

**Purpose:** Measure the TRUE incremental impact of a flow by comparing against a control group that receives no messages.

**When to Use:**
- Welcome Series (measure impact on first-time purchases)
- Post-Purchase Flows (track impact on reorders)
- Loyalty/Referral Campaigns (test if emails boost participation)
- Win-Back Automations (compare re-engagement vs. passive return)

**Setup:**
1. Add Random Sample split at start of flow
2. Send 80-90% through full automation
3. Direct 10-20% to no-message path
4. Tag both groups for reporting

**Best Practices:**
- Holdout size: 10-20% of eligible users
- Run time: Minimum 30 days or until statistically valid
- Metrics: Placed order rate, revenue per recipient, LTV

**Reading Results:**
- If active group has 14% order rate vs. 9% in holdout = 5% lift
- Analyze LTV differences using cohort reporting
- No lift? Reassess content, cadence, or targeting

### Sequential Testing

Test one element, implement the winner, then test the next element. Build on learnings over time.

**Example Sequence:**
1. Test subject line → Implement winner
2. Test CTA copy → Implement winner
3. Test email layout → Implement winner
4. Test send timing → Implement winner

### Multivariate Testing

Test multiple variables simultaneously (advanced). Only recommended for very large lists (50,000+).

---

## Testing by Funnel Stage

### Top of Funnel (Awareness/Acquisition)
- **Sign-up forms:** Offer type, headline, trigger timing
- **Welcome series:** Offer vs. no offer, email length
- **First-time buyer campaigns:** Discount amount, urgency messaging

### Middle of Funnel (Consideration)
- **Browse abandonment:** Product recommendations, timing
- **Abandoned cart:** Discount strategy, send timing, objection handling
- **Educational content:** Format, length, tone

### Bottom of Funnel (Conversion/Retention)
- **Post-purchase:** Cross-sell timing, product logic
- **Replenishment:** Reminder timing, incentive type
- **Win-back:** Offer strategy, message tone, flow length
- **VIP/Loyalty:** Benefit communication, exclusive access

---

## Key Metrics to Track

### For Campaign Tests
- Open rate
- Click-through rate (CTR)
- Revenue per recipient (RPR)
- Conversion rate
- Unsubscribe rate

### For Flow Tests
- Placed order rate
- Click-through rate
- Revenue per recipient
- Conversion rate per branch
- Time to conversion

### For Form Tests
- Submission rate
- Bounce rate impact
- Revenue per subscriber (long-term)
- List growth rate

---

## Common A/B Testing Mistakes

### 1. Sample Size Too Small
**Problem:** Results aren't statistically valid
**Fix:** Wait for 2,000+ recipients minimum, ideally 5,000+

### 2. Stopping Test Too Early
**Problem:** Early results can be misleading
**Fix:** Set minimum test duration based on metric (3-5 days for email)

### 3. Testing Multiple Variables at Once
**Problem:** Can't attribute results to specific changes
**Fix:** Test one variable at a time

### 4. Not Defining Success Metric in Advance
**Problem:** Moving goalposts, cherry-picking results
**Fix:** Define winning metric before launching test

### 5. Relying Only on Open Rates
**Problem:** Open rates don't equal revenue
**Fix:** Focus on click rate, conversion rate, and revenue per recipient

### 6. Testing Dependent Variables Together
**Problem:** Subject line + preview text tested together
**Fix:** Test independently

### 7. Not Documenting Results
**Problem:** Losing institutional knowledge
**Fix:** Keep a shared testing log with results and learnings

### 8. Testing During Anomalous Periods
**Problem:** Black Friday, major sales, or site issues skew results
**Fix:** Test during "normal" periods

---

## Testing Calendar Framework

### Monthly Testing Plan

**Week 1:** Campaign subject line test
**Week 2:** Flow timing test
**Week 3:** Form offer test
**Week 4:** Analyze results, implement winners, plan next month

### Quarterly Testing Themes

**Q1:** Acquisition optimization (forms, welcome series)
**Q2:** Conversion optimization (abandoned cart, browse abandonment)
**Q3:** Retention optimization (post-purchase, win-back)
**Q4:** Revenue optimization (cross-sell, VIP, holiday campaigns)

---

## Test Prioritization Matrix

### High Impact + Low Effort (Do First)
- Subject lines
- CTA copy
- Send times
- Form headlines

### High Impact + High Effort (Do Second)
- Email layout redesigns
- Flow sequence restructuring
- Personalization logic
- Product recommendation algorithms

### Low Impact + Low Effort (Do When Time Permits)
- Button colors
- Font choices
- Minor copy tweaks

### Low Impact + High Effort (Avoid)
- Complex multivariate tests on small lists
- Over-designed templates for low-volume flows

---

## Sources

1. Klaviyo - "12 Email & SMS A/B Testing Best Practices" (https://www.klaviyo.com/blog/ab-testing-email)
2. Titan Marketing Agency - "Klaviyo Split Testing: 12 Proven A/B Tests to Boost Flow Conversions" (https://www.titanmarketingagency.com/articles/klaviyo-split-testing)
3. Klaviyo Help Center - "Understanding what to A/B test in your flows" (https://help.klaviyo.com/hc/en-us/articles/360054629031)
4. Klaviyo Help Center - "How to A/B test flow branches" (https://help.klaviyo.com/hc/en-us/articles/360049849432)
