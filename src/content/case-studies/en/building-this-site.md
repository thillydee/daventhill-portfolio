---
faqs:
  - question: "How do you automate website maintenance with AI agents?"
    answer: "Automate website maintenance by giving separate AI agents narrow, single-discipline roles — one for content, one for UX and accessibility, one for SEO/AEO — and having each review the site and propose focused changes independently. A human orchestrator then reconciles the proposals, prioritizes, and approves before anything ships. This site is maintained with exactly that loop."
  - question: "What is a multi-agent AI content workflow?"
    answer: "A multi-agent AI content workflow assigns each part of a website's upkeep to a specialized agent instead of one generalist prompt. Specialist agents — content, UX, SEO — each produce focused, reviewable proposals, and a human merges them and signs off. Splitting the work by discipline scales quality review far beyond what a single manual pass can cover."
  - question: "Can a website be fully automated without losing quality control?"
    answer: "Yes — the safeguard is a human-in-the-loop approval gate. Let automation handle the heavy lifting (review passes, drafting, checks, and builds), but require an explicit human decision before production. Keeping the final sign-off manual is what stops an automated pipeline from publishing low-quality, inaccurate, or off-brand changes."
  - question: "How do you make a website citable by AI answer engines (AEO)?"
    answer: "For answer engine optimization, structure the site so machines can quote it: schema.org JSON-LD (Person, CreativeWork, FAQPage), an llms.txt endpoint that maps content for AI crawlers, and question-based FAQ content that answers directly and stays quotable out of context. AEO is about being the clean, structured source ChatGPT, Perplexity, and Google AI Overviews can cite."
  - question: "What website architecture is easiest to keep up to date?"
    answer: "A single source of truth. Keep structured facts in one typed data file and long-form content in a markdown collection, then generate every page, language, and metadata surface from it. Update a fact once and it is correct everywhere — no hunting through templates — which is what makes frequent, low-risk updates, whether manual or AI-assisted, practical."
---

## Why I treated my own portfolio as a product

A resume is a claim. A live product is proof. I'm applying for Product Owner roles, so I built and run this site the way I'd run any product I owned: a written vision and target audience, a defined set of non-goals, a review cadence, and a running record of what shipped and why. The decision log behind this site reads like a lightweight product roadmap, because that's exactly what it is.

That framing shapes everything below — this isn't "look, I can code a website." It's "here is how I scope, prioritize, ship, and iterate on a product end to end, and you can watch me do it, because the product is the site you're reading right now."

## Architecture: one source of truth, two languages, many surfaces

The site's content lives in exactly one place per language: a typed profile file (`profile.ts` / `profile.de.ts`) for structured facts — experience, case studies, skills — plus a markdown knowledge base for longer-form explainers. Everything else is generated from that single source: the case-study index, the homepage sections, the skills page, per-page OpenGraph images, the `llms.txt` file for AI crawlers, and the schema.org structured data on every page.

<figure role="group" aria-label="Diagram: content architecture" style="margin: 2rem 0;">
<svg viewBox="0 0 880 260" role="img" aria-label="Diagram: profile data and the knowledge collection feed an i18n layer, which generates EN and DE static pages, which generate llms.txt, schema.org JSON-LD and OG images" style="width:100%; height:auto; display:block; margin:0 auto;">
  <title>Content architecture</title>
  <desc>profile.ts and profile.de.ts, plus the knowledge markdown collection, feed a single i18n layer. That layer generates EN and DE static pages, which in turn automatically generate llms.txt, schema.org JSON-LD, and per-page OG images.</desc>
  <defs>
    <marker id="arch-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 z" fill="var(--color-muted)" />
    </marker>
  </defs>

  <line x1="180" y1="60" x2="248" y2="112" stroke="var(--color-muted)" stroke-width="2" marker-end="url(#arch-arrow)" />
  <line x1="180" y1="180" x2="248" y2="128" stroke="var(--color-muted)" stroke-width="2" marker-end="url(#arch-arrow)" />
  <line x1="400" y1="110" x2="468" y2="55" stroke="var(--color-muted)" stroke-width="2" marker-end="url(#arch-arrow)" />
  <line x1="400" y1="130" x2="468" y2="185" stroke="var(--color-muted)" stroke-width="2" marker-end="url(#arch-arrow)" />
  <line x1="620" y1="47" x2="648" y2="100" stroke="var(--color-muted)" stroke-width="2" marker-end="url(#arch-arrow)" />
  <line x1="620" y1="193" x2="648" y2="150" stroke="var(--color-muted)" stroke-width="2" marker-end="url(#arch-arrow)" />

  <rect x="10" y="30" width="170" height="60" rx="8" fill="var(--color-surface-alt)" stroke="var(--color-border)" stroke-width="1.5" />
  <text x="95" y="55" text-anchor="middle" font-size="13" font-weight="600" fill="var(--color-ink)">
    <tspan x="95" dy="0">profile.ts /</tspan>
    <tspan x="95" dy="16">profile.de.ts</tspan>
  </text>
  <text x="95" y="82" text-anchor="middle" font-size="10.5" fill="var(--color-muted)">single source of truth</text>

  <rect x="10" y="150" width="170" height="60" rx="8" fill="var(--color-surface-alt)" stroke="var(--color-border)" stroke-width="1.5" />
  <text x="95" y="175" text-anchor="middle" font-size="13" font-weight="600" fill="var(--color-ink)">
    <tspan x="95" dy="0">Knowledge</tspan>
    <tspan x="95" dy="16">collection</tspan>
  </text>
  <text x="95" y="202" text-anchor="middle" font-size="10.5" fill="var(--color-muted)">markdown</text>

  <rect x="250" y="90" width="150" height="60" rx="8" fill="var(--color-surface-alt)" stroke="var(--color-border)" stroke-width="1.5" />
  <text x="325" y="115" text-anchor="middle" font-size="13" font-weight="600" fill="var(--color-ink)">i18n layer</text>
  <text x="325" y="140" text-anchor="middle" font-size="10.5" fill="var(--color-muted)">strings.ts</text>

  <rect x="470" y="20" width="150" height="55" rx="8" fill="var(--color-surface-alt)" stroke="var(--color-border)" stroke-width="1.5" />
  <text x="545" y="53" text-anchor="middle" font-size="13" font-weight="600" fill="var(--color-ink)">EN static pages</text>

  <rect x="470" y="165" width="150" height="55" rx="8" fill="var(--color-surface-alt)" stroke="var(--color-border)" stroke-width="1.5" />
  <text x="545" y="198" text-anchor="middle" font-size="13" font-weight="600" fill="var(--color-ink)">DE static pages</text>

  <rect x="650" y="75" width="220" height="100" rx="8" fill="var(--color-brand-soft)" stroke="var(--color-brand)" stroke-width="1.5" />
  <text x="760" y="100" text-anchor="middle" font-size="12.5" font-weight="600" fill="var(--color-brand-dark)">llms.txt</text>
  <text x="760" y="122" text-anchor="middle" font-size="12.5" font-weight="600" fill="var(--color-brand-dark)">schema.org JSON-LD</text>
  <text x="760" y="144" text-anchor="middle" font-size="12.5" font-weight="600" fill="var(--color-brand-dark)">Per-page OG images</text>
  <text x="760" y="163" text-anchor="middle" font-size="10.5" fill="var(--color-brand-dark)">generated automatically</text>
</svg>
<figcaption style="text-align:center; font-size:0.875rem; color: var(--color-muted); margin-top:0.75rem;">
Single-source content — profile.ts/profile.de.ts and the knowledge markdown collection — flows through one i18n layer into EN and DE static pages, which automatically generate llms.txt, schema.org JSON-LD, and per-page OG images.
</figcaption>
</figure>

Keeping structured facts and prose separate, but both flowing through the same i18n layer, means I add a fact once and it's correct everywhere it's used — in both languages, on every surface — instead of hunting down five places to update after a change.

## Process: how this site actually gets improved

I don't just ship changes ad hoc. I maintain a living vision document (mission, audience, voice, guardrails), and every improvement cycle follows the same loop: revisit the vision, run a structured review across content, UX/accessibility, and SEO/AEO, decide what to prioritize, ship it, and log the decision with its reasoning.

<figure role="group" aria-label="Diagram: maintenance and improvement loop" style="margin: 2rem 0;">
<svg viewBox="0 0 900 260" role="img" aria-label="Diagram: the maintenance loop — vision informs a structured review, decisions get prioritized, changes ship, everything is logged, and the loop repeats" style="width:100%; height:auto; display:block; margin:0 auto;">
  <title>Maintenance and improvement loop</title>
  <desc>Vision sets priorities for a structured review across content, UX, and SEO/AEO. Decisions are prioritized and signed off, approved changes ship, and every cycle is recorded in a decision log before the loop repeats — run through an AI-assisted, multi-agent workflow.</desc>
  <defs>
    <marker id="loop-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 z" fill="var(--color-muted)" />
    </marker>
  </defs>

  <line x1="160" y1="102" x2="198" y2="102" stroke="var(--color-muted)" stroke-width="2" marker-end="url(#loop-arrow)" />
  <line x1="340" y1="102" x2="378" y2="102" stroke="var(--color-muted)" stroke-width="2" marker-end="url(#loop-arrow)" />
  <line x1="520" y1="102" x2="558" y2="102" stroke="var(--color-muted)" stroke-width="2" marker-end="url(#loop-arrow)" />
  <line x1="700" y1="102" x2="738" y2="102" stroke="var(--color-muted)" stroke-width="2" marker-end="url(#loop-arrow)" />
  <path d="M810,134 C 810,225 90,225 90,134" fill="none" stroke="var(--color-muted)" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#loop-arrow)" />

  <rect x="20" y="70" width="140" height="64" rx="8" fill="var(--color-surface-alt)" stroke="var(--color-border)" stroke-width="1.5" />
  <text x="90" y="97" text-anchor="middle" font-size="13" font-weight="600" fill="var(--color-ink)">Vision</text>
  <text x="90" y="115" text-anchor="middle" font-size="10" fill="var(--color-muted)">vision.md</text>

  <rect x="200" y="70" width="140" height="64" rx="8" fill="var(--color-brand-soft)" stroke="var(--color-brand)" stroke-width="1.5" />
  <text x="270" y="93" text-anchor="middle" font-size="12" font-weight="600" fill="var(--color-brand-dark)">
    <tspan x="270" dy="0">Structured</tspan>
    <tspan x="270" dy="14">review</tspan>
  </text>
  <text x="270" y="123" text-anchor="middle" font-size="9.5" fill="var(--color-brand-dark)">content · UX · SEO/AEO</text>

  <rect x="380" y="70" width="140" height="64" rx="8" fill="var(--color-surface-alt)" stroke="var(--color-border)" stroke-width="1.5" />
  <text x="450" y="93" text-anchor="middle" font-size="12" font-weight="600" fill="var(--color-ink)">
    <tspan x="450" dy="0">Decide &amp;</tspan>
    <tspan x="450" dy="14">prioritize</tspan>
  </text>
  <text x="450" y="123" text-anchor="middle" font-size="10" fill="var(--color-muted)">my sign-off</text>

  <rect x="560" y="70" width="140" height="64" rx="8" fill="var(--color-surface-alt)" stroke="var(--color-border)" stroke-width="1.5" />
  <text x="630" y="97" text-anchor="middle" font-size="13" font-weight="600" fill="var(--color-ink)">Ship</text>
  <text x="630" y="115" text-anchor="middle" font-size="10" fill="var(--color-muted)">build + deploy</text>

  <rect x="740" y="70" width="140" height="64" rx="8" fill="var(--color-surface-alt)" stroke="var(--color-border)" stroke-width="1.5" />
  <text x="810" y="93" text-anchor="middle" font-size="12" font-weight="600" fill="var(--color-ink)">
    <tspan x="810" dy="0">Decision</tspan>
    <tspan x="810" dy="14">log</tspan>
  </text>
  <text x="810" y="123" text-anchor="middle" font-size="10" fill="var(--color-muted)">what &amp; why</text>

  <text x="450" y="248" text-anchor="middle" font-size="11" fill="var(--color-muted)">repeats each cycle — AI-assisted, human sign-off before anything ships</text>
</svg>
<figcaption style="text-align:center; font-size:0.875rem; color: var(--color-muted); margin-top:0.75rem;">
The maintenance loop: a written vision informs a structured review across content, UX, and SEO/AEO; I decide what to prioritize; approved changes ship; and every cycle is logged with its reasoning before the loop repeats — run with an AI-assisted, multi-agent workflow I direct and sign off on.
</figcaption>
</figure>

What makes this loop practical to run largely on my own is that I've built it around an AI-assisted, multi-agent workflow: specialist review passes propose changes in isolation, I reconcile and prioritize what they surface, and nothing ships — let alone goes live — without my explicit sign-off. I own the process; the AI tooling accelerates it. That's the same relationship I'd want between any Product Owner and the tools their team uses.

## From commit to daventhill.ch

Every change goes through the same pipeline: a commit on a feature branch, an Astro build that statically renders every EN/DE page plus the SEO/AEO layer, a Vercel preview deploy I review, and — only after I explicitly approve it — a production deploy to daventhill.ch.

<figure role="group" aria-label="Diagram: build and delivery pipeline" style="margin: 2rem 0;">
<svg viewBox="0 0 900 200" role="img" aria-label="Diagram: delivery pipeline from commit to Astro build to a Vercel preview requiring human sign-off to production on daventhill.ch" style="width:100%; height:auto; display:block; margin:0 auto;">
  <title>Build and delivery pipeline</title>
  <desc>A commit on a feature branch triggers an Astro build that renders every page plus the SEO/AEO and performance layer. That produces a Vercel preview deployment which requires my explicit sign-off before it goes to production on daventhill.ch.</desc>
  <defs>
    <marker id="pipe-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 z" fill="var(--color-muted)" />
    </marker>
  </defs>

  <line x1="200" y1="55" x2="238" y2="55" stroke="var(--color-muted)" stroke-width="2" marker-end="url(#pipe-arrow)" />
  <line x1="430" y1="55" x2="468" y2="55" stroke="var(--color-muted)" stroke-width="2" marker-end="url(#pipe-arrow)" />
  <line x1="660" y1="55" x2="698" y2="55" stroke="var(--color-muted)" stroke-width="2" marker-end="url(#pipe-arrow)" />

  <rect x="10" y="20" width="190" height="70" rx="8" fill="var(--color-surface-alt)" stroke="var(--color-border)" stroke-width="1.5" />
  <text x="105" y="50" text-anchor="middle" font-size="13" font-weight="600" fill="var(--color-ink)">Commit</text>
  <text x="105" y="70" text-anchor="middle" font-size="10.5" fill="var(--color-muted)">feature branch</text>

  <rect x="240" y="20" width="190" height="70" rx="8" fill="var(--color-surface-alt)" stroke="var(--color-border)" stroke-width="1.5" />
  <text x="335" y="50" text-anchor="middle" font-size="13" font-weight="600" fill="var(--color-ink)">Astro build</text>
  <text x="335" y="70" text-anchor="middle" font-size="10" fill="var(--color-muted)">SSG + SEO/AEO layer</text>

  <rect x="470" y="20" width="190" height="70" rx="8" fill="var(--color-brand-soft)" stroke="var(--color-brand)" stroke-width="1.5" />
  <text x="565" y="50" text-anchor="middle" font-size="13" font-weight="600" fill="var(--color-brand-dark)">Vercel preview</text>
  <text x="565" y="70" text-anchor="middle" font-size="10" fill="var(--color-brand-dark)">human sign-off required</text>

  <rect x="700" y="20" width="190" height="70" rx="8" fill="var(--color-surface-alt)" stroke="var(--color-border)" stroke-width="1.5" />
  <text x="795" y="50" text-anchor="middle" font-size="13" font-weight="600" fill="var(--color-ink)">daventhill.ch</text>
  <text x="795" y="70" text-anchor="middle" font-size="10.5" fill="var(--color-muted)">production</text>
</svg>
<figcaption style="text-align:center; font-size:0.875rem; color: var(--color-muted); margin-top:0.75rem;">
Delivery pipeline: a commit on a feature branch triggers an Astro build (static rendering plus the SEO/AEO and performance layer), a Vercel preview deploy I review, and — only after explicit sign-off — a production deploy to daventhill.ch.
</figcaption>
</figure>

Nothing reaches production without a human decision gate. For a site tied directly to my job search, that's a deliberate guardrail, not an oversight.

## What this proves

This case study isn't a description of a past project — it's a live one. The architecture, the process, and the AI-assisted workflow described above are the ones that produced the page you're reading. If you want to see product ownership in action rather than take my word for it, this is it.
