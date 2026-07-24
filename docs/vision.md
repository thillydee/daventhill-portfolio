# Vision & Mission — daventhill-portfolio

## Mission

Convince hiring managers, recruiters, and anyone evaluating Product Owner candidates that Daven has the skillset and seniority they're looking for, and get them to reach out. The site itself is also part of the proof: beyond the case studies and knowledge base, the site's own execution (design, performance, structure) demonstrates that Daven can deliver a state-of-the-art digital product experience — because he built this one.

## Vision

In 12 months: ranks well for Daven's name plus "Product Owner" (Basel / Switzerland / e-commerce variants already targeted via `targetSeoPhrases` in profile.ts), gets cited accurately by AI answer engines when people ask about data/AI-driven product ownership or B2B e-commerce PO work, and generates a steady stream of inbound recruiter/hiring-manager contact.

## Target audience

- **Primary:** Recruiters and hiring managers evaluating Product Owner candidates, B2B-leaning but B2C included.
- **Secondary:** Anyone at a company with an e-commerce component — this is Daven's strongest specialization, so any e-commerce-adjacent role is a strong-fit signal.
- **What they know before landing:** Usually little beyond a LinkedIn profile or a job board listing — the site needs to independently establish credibility and seniority without assuming prior context.

## Positioning — what makes Daven different

Not just "a Product Owner" — someone who covers the full range of what modern product ownership requires: data-driven decision-making (built an AI cross-selling engine on real SAP sales data), technical fluency (led a PIM migration, tuned Elasticsearch relevance with custom business logic), end-to-end delivery (owns UAT through sign-off, not just backlog grooming), and real team leadership, not just backlog ownership. That means: running retrospectives and continuously assessing/adjusting ways of working rather than treating Scrum ceremonies as box-ticking, bridging gaps in a multi-national, multi-background team so everyone is pulling in the same direction, and actively developing people — helping team members grow, not just assigning tickets. The pitch is breadth + depth: most PO portfolios show one of these; this one shows all of them with concrete, shipped outcomes.

## Brand voice & tone

Direct, data-driven where applicable, no fluff. **First person, always** — Daven is presenting himself and maintains this content himself, so nothing should read as written about him in the third person (note: some current content, e.g. bioShort/bioLong in profile.ts, is third-person and should be flagged by content-strategist as a candidate for a first-person pass, unless there's a deliberate reason — e.g. schema/structured-data contexts — to keep specific instances in third person).

- Right: "I replaced our internal cross-selling logic with a model built on real SAP sales order data."
- Wrong: "Daven spearheaded a synergistic overhaul of the cross-selling paradigm."

## Key proof points

Pulled from `profile.ts` — treat these as the core narrative every agent should reinforce, not invent alternatives to:

1. **Currently:** Product Owner at Endress+Hauser (since Nov 2023), owns the Products section of endress.com, leads a cross-functional squad (business, UX, IT) — squad relationship goes back ~4 years including the preceding Digital Project Manager role.
2. **Team leadership, not just backlog ownership:** built and led a cross-functional squad for ~4 years — embeds Scrum/Kanban as living practice (not ceremony for its own sake), runs retrospectives and continuously reassesses ways of working, bridges a multi-national team, and actively supports individual growth. Reinforced org-wide through the cross-squad Agile Guild, where Daven co-organizes offsites/All-Hands/learning sessions and leads Squad Health Checks specifically to raise agile practice quality across every squad, not just his own.
3. **AI-powered cross-selling engine** — replaced manually-curated cross-sell logic with a model built on real SAP sales order data.
4. **PIM migration** — led migration of product data off a legacy DAM (Censhare) to a modern PIM, explicitly designing the data structure for both the website and AI-tool consumption.
5. **Search relevance tuning** — built a business-logic boost layer on top of Elasticsearch (lifecycle phase, segmentation, stock/market availability) without discarding its native relevance engine.
6. **Market-level stock visibility MVP** — designed and shipped a feature showing per-market, per-configuration stock availability.
7. **Credentials & prior roles:** PSPO certified, Design Thinking trained, BSc Business Administration (FHNW); prior PO/PM roles at MediaMarkt Switzerland (site search + recommendation engines) and Manor AG (CX/web projects).
8. **Process ownership:** owns UAT design and coordination through sign-off, not just requirements definition.

## Success metrics / North star

Primary: recruiter/hiring-manager contact-form submissions and direct outreach mentioning the site. Secondary: Vercel Analytics traffic trends and time-on-page for case studies/knowledge articles; search ranking for target phrases in `targetSeoPhrases`. When priorities compete, optimize for the metric most likely to move contact-form submissions, not vanity traffic.

## Non-goals / guardrails

- Never touch `public/cv/*.pdf` directly or anything under `~/Documents/cv-builder` (separate private repo with PII — see `AGENTS.md`).
- Never break EN/DE content parity.
- Don't drift into third person in new copy — first person is the standing rule (see Brand voice above).
- Don't add third-party trackers beyond Vercel Analytics without asking first.
- Don't change core visual identity/colors without showing a mockup/description first.

## Review cadence

Every 2 weeks.

## Current state / recent context

Team leadership visibility was addressed in the 2026-07-09 cycle (see `decision-log.md`): homepage now has a dedicated "Team leadership" section and `/skills` has a headed leadership card, both sourced from `leadershipApproach`. Case-study dates were added in the 2026-07-24 cycle (approximate baseline dates + `CreativeWork` schema; real per-study dates still refinable). The custom-domain question is **closed**: the site is live on `https://daventhill.ch` — don't re-raise it.

*(Update this section yourself as things change — e.g. active interviews, a new shipped project at Endress+Hauser worth a case study, a role change.)*
