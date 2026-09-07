# Grace Chapel — Plans & Projects — Product, UX and Technical Specification

**Status:** Proposed  
**Version:** 1.0  
**Date:** 7 Sep 2026  
**Implementation:** In progress  
**Initial hosting:** GitHub Pages

## 1. Product vision

Create an interactive, project-first site that shows how Grace Chapel Kannuru campus is equipped and developed.

**Core idea:** See the building. Understand the project. Fund a piece of it.

## 2. Principles

1. Project first
2. Component-level transparency
3. No invented information
4. Preserve source intent
5. Financial truth
6. Frozen product research
7. Architectural interface
8. Git-backed
9. Low operational complexity
10. Future-compatible

## 3. Project lifecycle

`IDEA → PLANNED → FUNDING → APPROVED → PURCHASED → DELIVERED → INSTALLED → OPERATIONAL → COMPLETED`

Additional states: `ON HOLD`, `CANCELLED`.

## 4. Priority

`CRITICAL | HIGH | PRIORITY | NORMAL | LOW | VISION`

## 5. Funding model

The funding unit is the component. Partial donations are supported.

Public financial completion is calculated as confirmed funding divided by approved budget, capped at 100%. Financial completion and physical completion are independent measures.

Overall programme metrics may include total required, raised, remaining, financial completion, project completion, physical completion and component completion.

Default weighted completion uses approved budget as the weighting factor.

## 6. Homepage architecture

- Header
- Hero
- Programme dashboard
- Project slider
- Component slider
- Transparency / get involved entry points

## 7. Project detail page

Project header → why project → status → funding → components → building location → product information → documentation → milestones → expenditure → get involved.

## 8. Component detail page

Fields should include product, manufacturer, model, quantity, purpose, location, budget, funding, progress, specifications, image, datasheet, source, milestones and expenditure.

## 9. Building page

Represent the Kannuru campus and its project systems. The future floor-plan model should support building, floor, zone and component coordinates using `x/y` positions.

Clicking a project/component pin opens an accessible detail panel. Provide a list-based alternative to the visual map.

Phase 2 may add an interactive 2D floor plan. Phase 3 may add a 3D building model.

## 10. Get Involved

Supported actions:

- Fund a component
- Support a project
- Give equipment
- Volunteer
- Pray
- Contact

## 11. Ministry integration

Use the official Grace Chapel website as the ministry source. Include a concise “Why We Build” context section instead of duplicating the church website.

Suggested ministry data: `vision`, `introduction`, `why_we_build`, `kannuru`, `activities`, `links`, plus source URL and retrieval date.

## 12. Product research and provenance

Research workflow:

`source project → component → explicit product → manufacturer → official product page → datasheet → image → archive → provenance → freeze`

Product identification confidence:

`EXACT | HIGH CONFIDENCE | MEDIUM | LOW | UNIDENTIFIED`

Only exact/high-confidence identification should be treated as definitive. Alternatives remain alternatives until selected.

Assets should be stored locally in the repository with provenance metadata. Prefer manufacturer datasheets, manufacturer documentation/manuals, authorised distributors, then other technical documentation.

## 13. Financial architecture

Google Sheets is the intended financial source. The public static site receives sanitized aggregate JSON.

Donation transaction model should support transaction ID, date, project ID, component ID, amount, currency, payment method, payment reference, status and notes. Future fields may include donor preference, campaign, receipt and reconciliation date.

Do not expose individual donor transactions publicly.

Expenditure model should support budget, actual, variance and records for ID, component, date, description, amount, vendor, receipt and status.

## 14. Milestones

Support requirement, research, funding, purchase, delivery, installation and operational milestones.

## 15. Transparency

`/transparency` should provide financial overview, project status and expenditure filters.

`/progress` should provide programme progress.

## 16. Future project classification

`ACTIVE | NEXT | VISION | CONCEPT`

Future ideas must not be represented as active fundraising requirements without leadership approval.

## 17. Visual design — Architectural Mission Control

Base palette:

- Black `#000000`
- White `#FFFFFF`
- Muted `#9A9A9A`
- Divider `#2A2A2A`

Sparse status colors:

- White — normal
- Green — funded/completed
- Amber — in progress
- Red — issue/blocked

Use monospace typography for amounts, IDs, statuses, specifications and data. Use sans-serif for narrative.

Prefer flat planes, rules, grids, annotations, large typography, full-width drawings and technical metadata.

Avoid heavy shadows, excessive rounded cards, decorative gradients, generic SaaS styling and stock-photo hero imagery.

Use technical numbering such as `[01]`, `[02]` and `01/06`.

Motion must be purposeful. Respect reduced-motion preferences.

Optional boot sequence:

```text
001 INITIALIZE PROJECT
002 LOAD KANNURU CAMPUS
003 LOAD PROJECT DATA
004 LOAD COMPONENTS
005 LOAD FUNDING
006 LOAD DOCUMENTATION
007 VERIFY ASSETS
008 CALCULATE PROGRESS
009 BUILD PROJECT MAP
010 SYSTEM READY
```

## 18. Responsive and accessibility requirements

Desktop: full architectural experience.  
Tablet: two-column/reduced canvas.  
Mobile: prioritize project, status, funding, get involved and details; building map can scroll/zoom.

Accessibility requirements:

- Keyboard navigation
- Visible focus
- Semantic HTML
- Accessible sliders
- Reduced motion
- Alt text
- Text equivalents for diagrams
- Sufficient contrast
- Never use color alone to convey state
- Screen-reader percentages
- Alternative project list for maps

## 19. Technical stack

Preferred stack: Astro with static generation.

Alternatives: Eleventy or Next.js static export.

Use CSS tokens and YAML/JSON data. Use GitHub Actions for validation/build/deployment. Use GitHub Pages for initial hosting. Use Google Sheets as the financial input source.

Astro is preferred because the product is primarily static content with interaction added only where needed.

## 20. GitHub Actions

Pipeline:

`push → validate data → validate assets → build → tests → static site → deploy GitHub Pages`

A scheduled funding workflow may import sanitized aggregates from Google Sheets.

Branching model:

- `main`
- `feature/*`
- `content/*`
- `research/*`

## 21. Governance

Roles:

- Church leadership
- Technical maintainer
- Financial administrator

Approval workflow:

`DRAFT → RESEARCHED → LEADERSHIP REVIEW → APPROVED → PUBLISHED`

Financial workflow:

`ENTERED → RECONCILED → APPROVED → PUBLIC`

## 22. MVP

Required:

- Homepage
- Project slider/register
- Project pages
- Component pages
- Funding and physical progress
- Programme dashboard
- Product research, images and datasheets
- Ministry context
- Get Involved
- Transparency
- Git-backed data
- Google Sheets import
- GitHub Pages
- Responsive/accessibility support

## 23. Deferred work

- Interactive floor plan
- 3D building
- Donor accounts
- Custom admin dashboard
- Automated payment reconciliation
- Multi-campus support

## 24. Phase 2

Interactive 2D Kannuru floor plan with clickable/filterable project pins.

## 25. Phase 3

Multi-campus support, live fundraising, payment integration, reconciliation, receipts, project updates, before/after imagery, installation photos, construction milestones and annual reports.

## 26. Non-goals

This is not:

- A full church website
- Church management software
- A donor CRM
- An accounting platform
- A payment processor
- Project-management SaaS
- CAD software
- A 3D modelling system

## 27. Success criteria

A visitor can answer:

- What is this?
- Where is it?
- Why is it needed?
- How much does it cost?
- How far along is it?
- What exactly is being purchased/built?
- Can I verify it?
- Can I help?

## 28. Acceptance criteria

- Stable unique IDs
- Currency on financial values
- Sources for researched information
- Image provenance
- Archived datasheets
- Valid financial calculations
- No donor PII
- Shareable URLs
- Consistent progress mathematics
- Mobile support
- Keyboard support
- Reduced-motion support
- Reproducible GitHub Pages build
- Broken assets/references fail validation/build

## 29. Initial implementation sequence

1. Create GitHub repository
2. Define schema
3. Import existing project data
4. Research products
5. Archive images/datasheets
6. Define visual system
7. Build design system
8. Build homepage
9. Build project pages
10. Build component pages
11. Build funding system
12. Build transparency
13. Build ministry context
14. Build get involved
15. Build Google Sheets pipeline
16. Accessibility/SEO
17. Test
18. Deploy

## 30. Current caveats

The existing source is not a clean accounting/procurement database. There are alternatives, incomplete specifications, an unspecified CCTV model, missing Grass Mat budget, varied future-project maturity and formatting inconsistencies. The first import must preserve uncertainty.

## 31. Product definition

```text
GRACE CHAPEL
  → PLANS & PROJECTS
    → PROJECTS / BUILDING / MINISTRY
      → COMPONENTS / FLOOR PLAN / WHY BUILD
        → PRODUCTS
          → IMAGES / DATASHEETS
            → FUNDING
              → FINANCIAL / PHYSICAL PROGRESS
                → TRANSPARENCY / GET INVOLVED
```

**North star:** a digital model of the Kannuru project programme that connects building, equipment, finances and ministry purpose in one transparent experience.

## 32. Specification boundary

The specification defines the product and implementation direction. It does not itself establish procurement facts, selected products, financial commitments or donor records. Those require their own source evidence and governance workflow.
