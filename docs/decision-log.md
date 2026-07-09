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

## 2026-07-09 — Team leadership visibility, first-person voice, baseline SEO/AEO and a11y

- **Changed:** Added a homepage "Team leadership" section and a headed/carded leadership block on `/skills` (EN+DE) sourced from `leadershipApproach`. Rewrote `bioShort`/`bioLong` and the homepage FAQ answers to first person, added a `bioShortSchema` field so `PersonSchema.astro`'s JSON-LD stays third-person by design. Fixed first-person violations in 4 knowledge-article descriptions. Extended `positioningLine`/`targetSeoPhrases` to cover Switzerland + e-commerce. Fixed a real keyboard-accessibility bug in the mobile nav toggle, moved the desktop-nav breakpoint from `sm:` to `md:`, added a skip-to-content link. Threaded `publishDate`/`author` into `DefinedTerm`/`FAQPage` JSON-LD, fixed non-standard `og:locale` values, added internal links from Experience/Skills to case studies, added an AI-consumption claim to `llms.txt`.
- **Why:** vision.md flags team leadership (proof point #2) as under-surfaced relative to its importance, and flags third-person copy as a standing voice violation. This cycle's baseline SEO/AEO and UX audits (first-ever cycle) surfaced the rest.
- **Deferred to next cycle:** case-study dates (and the `CreativeWork`/`Article` schema that depends on them — no dates exist yet, agents were told not to fabricate them) and the custom-domain question (site remains on `daventhill-portfolio.vercel.app`; in scope long-term per Daven, revisit next cycle).
- **Agents involved:** content-strategist, ux-ui-architect, seo-aeo-specialist
- **PR:** https://github.com/thillydee/daventhill-portfolio/pull/1
- **Merged:** 2026-07-09
