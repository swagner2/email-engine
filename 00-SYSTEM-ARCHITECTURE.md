# Email Marketing Framework - System Architecture

**Version:** 1.0  
**Last Updated:** December 6, 2025  
**Purpose:** Comprehensive email marketing system for D2C brands using Klaviyo + Shopify

---

## System Overview

This framework provides a complete structured system for agencies managing multiple D2C brand clients. It ensures thorough research, strategic planning, and efficient execution of email marketing campaigns through Klaviyo and Shopify integration.

---

## Core Components

### 1. Client Onboarding (`01-client-onboarding/`)
- New client intake forms
- Discovery questionnaires
- Access and credentials checklist
- Project kickoff templates
- Timeline and milestone planning

### 2. Brand Research (`02-brand-research/`)
- Products, features, and benefits database
- Brand voice documentation
- Writing examples and tone analysis
- Style guide templates
- Brand positioning framework
- Unique value propositions

### 3. Customer Avatars (`03-customer-avatars/`)
- Ideal customer profile templates
- Psychographic analysis
- Customer journey mapping
- Pain points and desires framework
- Behavioral characteristics

### 4. Segmentation Strategy (`04-segmentation-strategy/`)
- Target segment definitions
- RFM (Recency, Frequency, Monetary) analysis
- Behavioral segmentation
- Lifecycle stage mapping
- VIP and loyalty tiers
- Engagement-based segments

### 5. Email Flows (`05-email-flows/`)
- Trigger-based automation workflows
- Flow architecture for each trigger type
- Email sequence templates
- Timing and delay strategies
- A/B testing frameworks

**Core Triggers:**
- Welcome series (sign up for email/newsletter)
- Abandoned cart
- Browse abandonment
- Abandoned checkout
- Post-purchase sequence
- Review request flow
- Subscription management
- Re-engagement campaigns
- VIP nurture sequences
- Win-back campaigns

### 6. Copywriting Templates (`06-copywriting-templates/`)
- Email structure templates
- Subject line formulas
- Preview text strategies
- Body copy frameworks
- Call-to-action templates
- Personalization tokens
- Urgency and scarcity techniques

### 7. Product Strategy (`07-product-strategy/`)
- Best sellers tracking
- Frequently bought together analysis
- Upsell bundles
- Cross-sell recommendations
- Product launch frameworks
- Seasonal product planning
- Inventory-based campaigns

### 8. Competitor Analysis (`08-competitor-analysis/`)
- Competitor email tracking
- Subject line analysis
- Offer comparison
- Design and layout review
- Frequency and timing analysis
- Best practice identification

### 9. Performance Tracking (`09-performance-tracking/`)
- KPI dashboards
- Flow performance metrics
- Campaign analytics templates
- Revenue attribution
- Optimization checklists
- Monthly reporting templates

### 10. Master Templates (`10-master-templates/`)
- Quick-start guides
- Client-specific customization sheets
- Implementation checklists
- Standard operating procedures
- Quality assurance frameworks

---

## Klaviyo Integration Points

### Data Sync from Shopify
- Customer profiles
- Order history
- Product catalog
- Inventory levels
- Collection data
- Customer tags

### Key Klaviyo Features Utilized
- **Flows:** Automated trigger-based sequences
- **Segments:** Dynamic customer grouping
- **Campaigns:** One-time broadcasts
- **Forms:** Email capture and preferences
- **Metrics:** Behavioral tracking
- **Profiles:** Unified customer data

### Custom Events Tracked
- `Started Checkout`
- `Placed Order`
- `Fulfilled Order`
- `Cancelled Order`
- `Refunded Order`
- `Viewed Product`
- `Added to Cart`
- `Subscribed to Back in Stock`
- `Left Product Review`
- `Clicked Email`
- `Opened Email`

---

## Workflow Process

### Phase 1: Client Onboarding (Week 1)
1. Complete intake forms
2. Gather brand assets
3. Audit existing email program
4. Set up tracking and integrations
5. Define success metrics

### Phase 2: Research & Discovery (Week 1-2)
1. Brand voice analysis
2. Product research
3. Customer avatar development
4. Competitor analysis
5. Segment identification

### Phase 3: Strategy Development (Week 2-3)
1. Flow architecture design
2. Segmentation strategy
3. Product merchandising plan
4. Content calendar creation
5. Testing roadmap

### Phase 4: Implementation (Week 3-6)
1. Build email flows in Klaviyo
2. Create segments
3. Design email templates
4. Write copy for all sequences
5. Set up tracking and analytics

### Phase 5: Optimization (Ongoing)
1. Monitor performance metrics
2. A/B test variations
3. Refine segments
4. Update product recommendations
5. Quarterly strategy reviews

---

## File Naming Conventions

### Client-Specific Files
Format: `[CLIENT-NAME]_[COMPONENT]_[DATE].extension`

Example: `ACME-BEAUTY_Brand-Voice_2025-12-06.md`

### Template Files
Format: `TEMPLATE_[COMPONENT].extension`

Example: `TEMPLATE_Customer-Avatar.md`

### Workflow Files
Format: `FLOW_[TRIGGER-TYPE]_[VERSION].md`

Example: `FLOW_Abandoned-Cart_v1.md`

---

## Version Control

- All templates are versioned (v1.0, v1.1, etc.)
- Client-specific files include date stamps
- Major updates documented in changelog
- Archive old versions in `/archive/` subdirectories

---

## Usage Guidelines

### For New Clients
1. Start with `01-client-onboarding/`
2. Copy all relevant templates
3. Rename with client name
4. Complete each section sequentially
5. Reference master templates as needed

### For Existing Clients
1. Use for optimization and expansion
2. Update segments quarterly
3. Refresh flows based on performance
4. Add new triggers as needed
5. Maintain brand voice consistency

### For Team Collaboration
1. Assign ownership of each component
2. Use consistent naming conventions
3. Document all customizations
4. Share learnings across clients
5. Update master templates with best practices

---

## Success Metrics

### Email Program Health
- List growth rate
- Engagement rate (opens + clicks)
- Conversion rate
- Revenue per recipient
- Unsubscribe rate
- Deliverability rate

### Flow Performance
- Flow revenue
- Conversion rate by flow
- Average order value
- Time to conversion
- Drop-off analysis

### Segment Performance
- Revenue by segment
- Engagement by segment
- Lifetime value by segment
- Migration between segments

---

## Maintenance Schedule

### Weekly
- Monitor flow performance
- Review campaign results
- Check for errors or issues

### Monthly
- Analyze segment performance
- Update product recommendations
- Review competitor emails
- Generate client reports

### Quarterly
- Refresh customer avatars
- Update brand voice guidelines
- Audit all active flows
- Strategic planning session

### Annually
- Complete system overhaul review
- Update all master templates
- Benchmark against industry standards
- Set new performance goals

---

## Next Steps

1. Review this architecture document
2. Proceed to research phase for best practices
3. Customize templates for first client
4. Implement and test with pilot brand
5. Iterate and optimize based on results

---

**Notes:**
- This is a living framework that should evolve with industry best practices
- Customize components based on client needs and brand maturity
- Prioritize flows based on revenue impact and implementation complexity
- Always maintain brand voice consistency across all touchpoints
