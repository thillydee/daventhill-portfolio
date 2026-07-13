# Decision log

Append-only. One entry per shipped cycle, newest at the top. Keep entries short — this is a record for future cycles to check against, not a full report (those live, per-cycle, in the PR description and git history).

Template:

```
## YYYY-MM-DD — <short title>

- **Changed:** what actually shipped
- **Why:** which vision.md priority/goal this served
- **Agents involved:** content-strategist / ux-ui-architect / seo-aeo-specialist
- **PR:** <link>
- **Merged:** YYYY-MM-DD
```

---

## 2026-07-13 — Squad offsites knowledge article (EN/DE)

- **Changed:** Added a new knowledge base article, `squad-offsites` (EN+DE), explaining why my squad runs quarterly offsites — personal growth, strategy, hackathon-style ideation, and team spirit, run in Kanban rather than fixed sprints. Includes an FAQ block with self-contained Q&A pairs aimed at AI-answer-engine citability, in addition to the standard `DefinedTerm` JSON-LD the site generates for `type: concept` entries. Internally links to the existing `squad` and `guild` articles.
- **Why:** Direct request from Daven to publish original content deepening the squad-leadership proof point with a topic (offsites) not yet covered on the site, structured to be citable by AI search tools.
- **Agents involved:** none (drafted directly in the main session, iterated with Daven on accuracy — his squad uses Kanban, not sprints — and on AEO structure before implementation)
- **PR:** https://github.com/thillydee/daventhill-portfolio/pull/2
- **Merged:** 2026-07-13

## 2026-07-09 — Team leadership visibility, first-person voice, baseline SEO/AEO and a11y

- **Changed:** Added a homepage "Team leadership" section and a headed/carded leadership block on `/skills` (EN+DE) sourced from `leadershipApproach`. Rewrote `bioShort`/`bioLong` and the homepage FAQ answers to first person, added a `bioShortSchema` field so `PersonSchema.astro`'s JSON-LD stays third-person by design. Fixed first-person violations in 4 knowledge-article descriptions. Extended `positioningLine`/`targetSeoPhrases` to cover Switzerland + e-commerce. Fixed a real keyboard-accessibility bug in the mobile nav toggle, moved the desktop-nav breakpoint from `sm:` to `md:`, added a skip-to-content link. Threaded `publishDate`/`author` into `DefinedTerm`/`FAQPage` JSON-LD, fixed non-standard `og:locale` values, added internal links from Experience/Skills to case studies, added an AI-consumption claim to `llms.txt`.
- **Why:** vision.md flags team leadership (proof point #2) as under-surfaced relative to its importance, and flags third-person copy as a standing voice violation. This cycle's baseline SEO/AEO and UX audits (first-ever cycle) surfaced the rest.
- **Deferred to next cycle:** case-study dates (and the `CreativeWork`/`Article` schema that depends on them — no dates exist yet, agents were told not to fabricate them) and the custom-domain question (site remains on `daventhill-portfolio.vercel.app`; in scope long-term per Daven, revisit next cycle).
- **Agents involved:** content-strategist, ux-ui-architect, seo-aeo-specialist
- **PR:** https://github.com/thillydee/daventhill-portfolio/pull/1
- **Merged:** 2026-07-09
