# Module Outline: Post-Send Analysis and Reporting

**Purpose:** Create a comprehensive framework for analyzing email performance after send, tracking key metrics, identifying improvement opportunities, and establishing a continuous improvement cycle.

---

## Module Components

### 1. **FRAMEWORK_Post-Send-Analysis-Workflow.md**

**Purpose:** Establish a structured process for analyzing email performance after campaigns are sent and flows are activated.

**Key Sections:**

#### The Three-Phase Analysis Process

**Phase 1: Immediate Post-Send Review (First 24-48 Hours)**
- Monitor for critical issues (high bounce rates, spam complaints, technical errors)
- Track early performance indicators (open rates, click rates)
- Identify and address any urgent problems
- Document any subscriber feedback or complaints

**Phase 2: Performance Analysis (7-14 Days Post-Send)**
- Comprehensive metric review across all KPIs
- Comparison to benchmarks and historical performance
- Segment-level analysis to identify patterns
- A/B test winner determination and analysis
- Revenue and conversion tracking

**Phase 3: Strategic Insights & Continuous Improvement (Monthly/Quarterly)**
- Trend analysis across multiple campaigns/flows
- Identify systematic issues and opportunities
- Update templates, flows, and processes based on learnings
- Set new benchmarks and goals
- Feed insights back into strategy and QA processes

#### Analysis Cadence by Email Type

- **Campaigns:** Immediate review + 7-day analysis + monthly rollup
- **Flows:** Weekly monitoring + monthly deep dive + quarterly optimization
- **A/B Tests:** Immediate winner determination + learnings documentation

---

### 2. **TEMPLATE_Campaign-Performance-Report.md**

**Purpose:** Provide a standardized template for reporting on individual campaign performance.

**Key Sections:**

#### Executive Summary
- Campaign name, send date, audience size
- Primary goal and success criteria
- Overall performance verdict (exceeded/met/missed expectations)
- Key takeaways (3-5 bullet points)

#### Core Metrics Table

| Metric | Result | Benchmark | Variance | Industry Average |
| :--- | :--- | :--- | :--- | :--- |
| Delivered | X | X | +/- X% | X% |
| Open Rate | X% | X% | +/- X% | X% |
| Click Rate | X% | X% | +/- X% | X% |
| Click-to-Open Rate | X% | X% | +/- X% | X% |
| Conversion Rate | X% | X% | +/- X% | X% |
| Unsubscribe Rate | X% | X% | +/- X% | X% |
| Bounce Rate | X% | X% | +/- X% | X% |
| Revenue | $X | $X | +/- X% | N/A |
| Revenue Per Email | $X | $X | +/- X% | N/A |

#### Segment Performance Analysis
- Breakdown by key segments (VIP vs. regular, geographic, engagement level)
- Identify top-performing and underperforming segments
- Insights for future segmentation

#### Content Performance Analysis
- Subject line performance
- Preview text effectiveness
- Top-performing links/CTAs
- Image engagement (if trackable)
- Product performance (for product-focused emails)

#### Deliverability Analysis
- Inbox placement rate (if available)
- Spam complaint rate
- Bounce analysis (hard vs. soft)
- Domain/client-specific issues

#### Learnings & Recommendations
- What worked well
- What didn't work
- Specific recommendations for future campaigns
- Action items for implementation

---

### 3. **TEMPLATE_Flow-Performance-Report.md**

**Purpose:** Provide a standardized template for reporting on flow performance.

**Key Sections:**

#### Flow Overview
- Flow name, type, and purpose
- Date range for analysis
- Total profiles in flow during period
- Overall flow health assessment

#### Flow-Level Metrics

| Metric | Result | Benchmark | Variance |
| :--- | :--- | :--- | :--- |
| Total Sent | X | X | +/- X% |
| Flow Open Rate | X% | X% | +/- X% |
| Flow Click Rate | X% | X% | +/- X% |
| Flow Conversion Rate | X% | X% | +/- X% |
| Flow Revenue | $X | $X | +/- X% |
| Revenue Per Recipient | $X | $X | +/- X% |

#### Email-by-Email Performance

For each email in the flow:

| Email | Sent | Open Rate | Click Rate | Conv. Rate | Revenue |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Email 1 | X | X% | X% | X% | $X |
| Email 2 | X | X% | X% | X% | $X |
| Email 3 | X | X% | X% | X% | $X |

#### Drop-Off Analysis
- Where are people exiting the flow?
- Are time delays appropriate?
- Are filters too restrictive?

#### Trigger & Filter Analysis
- Is the flow triggering as expected?
- Are filters working correctly?
- Any unexpected behavior?

#### Optimization Opportunities
- Specific recommendations for each email
- Flow structure improvements
- Trigger/filter adjustments
- A/B test ideas

---

### 4. **GUIDE_Key-Metrics-and-Benchmarks.md**

**Purpose:** Define all key email marketing metrics, how to calculate them, and what constitutes good performance.

**Key Sections:**

#### Core Email Metrics

**Deliverability Metrics:**
- Delivery Rate: (Delivered / Sent) × 100
- Bounce Rate: (Bounces / Sent) × 100
- Hard Bounce Rate vs. Soft Bounce Rate
- Spam Complaint Rate: (Complaints / Delivered) × 100

**Engagement Metrics:**
- Open Rate: (Opens / Delivered) × 100
- Unique Open Rate vs. Total Opens
- Click Rate (CTR): (Clicks / Delivered) × 100
- Click-to-Open Rate (CTOR): (Clicks / Opens) × 100
- Engagement Rate: (Opens + Clicks) / Delivered × 100

**Conversion Metrics:**
- Conversion Rate: (Conversions / Delivered) × 100
- Revenue Per Email (RPE): Total Revenue / Emails Delivered
- Revenue Per Subscriber (RPS): Total Revenue / Total Subscribers
- Average Order Value (AOV) from Email
- Attributed Revenue (direct + influenced)

**List Health Metrics:**
- Unsubscribe Rate: (Unsubscribes / Delivered) × 100
- List Growth Rate
- Active Subscriber Rate
- Inactive Subscriber Rate

**Flow-Specific Metrics:**
- Flow Conversion Rate
- Time to Conversion
- Revenue Per Recipient
- Flow Completion Rate

#### Industry Benchmarks by Vertical

Tables showing average performance by industry:
- E-commerce (general)
- Food & Beverage
- Supplements
- Health & Beauty
- Apparel

#### Klaviyo-Specific Metrics
- Placed Order Rate
- Predicted Next Order Date accuracy
- Customer Lifetime Value (CLV)
- Repeat Purchase Rate

#### What Good Looks Like

Guidance on interpreting metrics:
- Green zone (excellent performance)
- Yellow zone (acceptable performance)
- Red zone (needs immediate attention)

---

### 5. **TEMPLATE_Monthly-Performance-Dashboard.md**

**Purpose:** Provide a high-level view of all email marketing performance for monthly reporting to stakeholders.

**Key Sections:**

#### Executive Summary
- Overall email marketing health
- Month-over-month trends
- Key wins and challenges
- Strategic recommendations

#### Campaign Performance Summary

| Campaign | Send Date | Audience | Open Rate | Click Rate | Revenue | ROI |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Campaign 1 | X | X | X% | X% | $X | X% |
| Campaign 2 | X | X | X% | X% | $X | X% |

#### Flow Performance Summary

| Flow | Recipients | Open Rate | Click Rate | Conv. Rate | Revenue |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Welcome | X | X% | X% | X% | $X |
| Abandoned Cart | X | X% | X% | X% | $X |
| Post-Purchase | X | X% | X% | X% | $X |

#### List Health Metrics
- List size (start vs. end of month)
- New subscribers
- Unsubscribes
- Net growth
- Active subscriber percentage

#### Revenue Attribution
- Total email revenue
- Percentage of total company revenue
- Revenue by flow vs. campaign
- Top revenue-generating emails

#### A/B Test Results
- Tests conducted
- Winners implemented
- Cumulative impact of optimizations

#### Action Items for Next Month
- Specific initiatives to improve performance
- Tests to run
- Flows to optimize

---

### 6. **FRAMEWORK_Continuous-Improvement-Cycle.md**

**Purpose:** Establish a systematic process for using post-send analysis to drive ongoing improvements.

**Key Sections:**

#### The Continuous Improvement Loop

**Step 1: Analyze**
- Review performance data
- Identify patterns and trends
- Compare to benchmarks and goals

**Step 2: Hypothesize**
- Develop theories about what's working and what's not
- Prioritize issues and opportunities
- Create testable hypotheses

**Step 3: Test**
- Design A/B tests to validate hypotheses
- Implement changes in controlled environments
- Document test parameters

**Step 4: Learn**
- Analyze test results
- Document learnings
- Update best practices

**Step 5: Implement**
- Roll out winning variations
- Update templates and flows
- Train team on new best practices

**Step 6: Monitor**
- Track impact of changes
- Ensure sustained improvement
- Return to Step 1

#### Feedback Loops

**QA → Analysis → QA:**
- Use post-send analysis to identify QA gaps
- Update QA checklists based on recurring issues
- Track reduction in errors over time

**Performance → Strategy → Performance:**
- Use performance data to inform strategic decisions
- Adjust segmentation, timing, and content based on results
- Measure impact of strategic changes

**Testing → Templates → Testing:**
- Use A/B test winners to update master templates
- Ensure best practices are baked into all future emails
- Continue testing to find incremental improvements

#### Documentation & Knowledge Management
- Maintain a central repository of learnings
- Create a "what works" playbook
- Share insights across the team
- Build institutional knowledge

---

### 7. **TEMPLATE_Post-Send-Issue-Log.md**

**Purpose:** Track all issues discovered after send to identify patterns and prevent recurrence.

**Structure:**

| Date | Campaign/Flow | Issue Type | Description | Root Cause | Resolution | Preventive Action |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| X | X | Link Error | Broken CTA link | Wrong URL in template | Fixed link | Added link validation to QA |
| X | X | Personalization | Blank first name | Missing default value | Added default | Updated all templates |

**Issue Categories:**
- Link/URL errors
- Personalization failures
- Rendering issues
- Deliverability problems
- Content errors
- Timing/scheduling issues
- Segmentation errors

---

## Integration with Existing Modules

This module creates a complete feedback loop with:

- **QA Testing Module:** Issues found post-send inform QA checklist updates
- **A/B Testing Module:** Performance analysis determines test winners and identifies new test opportunities
- **Email Flows Module:** Flow performance reports drive flow optimization
- **Segmentation Strategy Module:** Segment-level analysis informs segmentation refinements
- **Personalization Tags Module:** Personalization performance guides future personalization strategies

---

## Key Benefits

- **Data-Driven Decision Making:** Replace guesswork with concrete performance data
- **Continuous Improvement:** Systematic process for getting better over time
- **Accountability:** Clear metrics and reporting create accountability
- **Strategic Insights:** Move beyond tactical execution to strategic optimization
- **ROI Demonstration:** Clearly show the value of email marketing to stakeholders

---

## Next Steps to Build This Module

1. Research email analytics best practices and Klaviyo reporting capabilities
2. Create the framework documents (workflow, continuous improvement cycle)
3. Build the report templates (campaign, flow, monthly dashboard)
4. Create the metrics guide with benchmarks
5. Develop the issue log template
6. Update main README and commit to repository
