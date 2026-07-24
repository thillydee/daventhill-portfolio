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

## 2026-07-24 — Case-study publish dates + CreativeWork schema; custom-domain question closed

- **Changed:** Added a required `publishDate` field to the `CaseStudy` type and set it to `2026-07-08` (the knowledge-base baseline date) on all 4 case studies in both `profile.ts` and `profile.de.ts` — approximate/refinable per Daven. Wired each date into a minimal `CreativeWork` JSON-LD node (`name`, `description`, `url`, `inLanguage`, `author`→`#person`, `datePublished`) emitted on case-study pages via a new `creativeWork` prop threaded `CaseStudyView` → `BaseLayout` → `PersonSchema`. No visible on-page date (avoids a case study reading as "work done in July 2026") and no `Article`/`dateModified` upgrade yet — both left as deliberate future refinements.
- **Why:** Unblocks the case-study structured-data item deferred since 2026-07-09 (was blocked on dates existing). Daven gave the go-ahead to add approximate dates now and refine later. Serves vision.md's SEO/AEO goals (case studies now carry `datePublished` + author attribution for AI answer engines).
- **Custom-domain question: RESOLVED.** The site is live on the custom domain `https://daventhill.ch` (verified: HTTP 200, canonical + `Astro.site` both point to `daventhill.ch`). This question had been carried as "deferred" since 2026-07-09 — it is now closed and should not be re-raised in future cycles.
- **Still open / future refinement:** real per-study case-study dates (all four share the baseline for now); optional visible on-page date; optional `Article` schema upgrade with `dateModified`.
- **Agents involved:** none (implemented directly in the main session)
- **PR:** https://github.com/thillydee/daventhill-portfolio/pull/9
- **Merged:** 2026-07-24

## 2026-07-23 — UX/IA/a11y cycle: footer KB link, homepage KB teaser, accessible mobile nav, text-first hero

- **Changed:** (F1) Added the missing Knowledge link to the footer nav — it was in the header but not the footer (`Footer.astro`, shared component). (F2) Replaced the CSS checkbox-hack mobile-nav toggle with a real `<button aria-expanded aria-controls>` + minimal inline vanilla JS, giving proper disclosure semantics for screen readers while keeping the identical visual design (`Header.astro`). (F3) Added a homepage Knowledge Base teaser section between Case Studies and FAQ, surfacing 3 articles (`pim-ai-ready-product-data`, `enhancing-elasticsearch-relevance`, `squad`) via the case-study card pattern, with new first-person EN/DE strings (`HomeView.astro`, `strings.ts`) — the 7-article KB previously had zero homepage presence. (F5) Hero now stacks text-first on mobile (dropped `flex-col-reverse`) so name/H1/positioning leads before the photo.
- **Why:** UX-scoped `/portfolio-review`. Audit found the site structurally strong (exact EN/DE parity, AA contrast, ~4KB JS, no CLS) with two real IA gaps — the KB was invisible on the homepage despite the recent content investment (serves vision.md's AEO goal + "site-as-proof" bar), and the footer nav was inconsistent with the header. F2 upgrades a11y correctness; F5 leads with the value proposition on mobile per hero best practice.
- **Verified:** live browser check both locales (F2 toggle flips aria-expanded, F3 renders correct per-locale articles, F1 footer shows Wissen/Knowledge); build clean. Note: true mobile viewport (<1492px) couldn't be rendered by the browser tooling — F5/mobile-nav feel left to Daven's on-device check.
- **Skipped/deferred:** F4 (font preload — marginal LCP gain). Still deferred: case-study dates → `CreativeWork`/`Article` schema (open since 2026-07-09), custom-domain decision.
- **Heads-up for future cycles:** F3 hard-references 3 KB slugs on the homepage; renaming/removing any silently drops its card (no build error). Keep those slugs stable or update `HomeView.astro`.
- **Agents involved:** ux-ui-architect (audit + F1/F2/F3/F5 code), content-strategist (F3 EN/DE copy + strings)
- **PR:** https://github.com/thillydee/daventhill-portfolio/pull/8
- **Merged:** 2026-07-23

## 2026-07-23 — First GSC-driven SEO/content cycle: PIM cluster, snippet fixes, Switzerland mentions

- **Changed:** Shortened the `metadata-pim-migration` (DE) case study's title/meta to fit within SERP truncation budgets, lead with the compound query phrase ("PIM-Datenmigration"), and surface "Censhare" (previously buried mid-paragraph). Worked "search relevance tuning" — the export's highest-impression query — into the `relevance-sorting` (EN) title/meta. Replaced the bare "Knowledge" EN index title with "Product Ownership Knowledge Base". Added a new EN/DE knowledge article, "What is a PIM? Why AI-ready product data starts with clean structure" (companion explainer to the PIM case study, same pattern as the existing relevance-tuning article). Added "in Switzerland"/"in der Schweiz" to `squad`, `guild`, `squad-offsites` (EN+DE, 6 files).
- **Why:** Daven's first real Google Search Console export (10 days, ~91 impressions, 6 clicks) showed the PIM-migration topic as the strongest signal on the site (largest query cluster, best-ranking page) but with a truncated snippet losing the AI/KI differentiator, and no companion explainer article unlike the relevance-tuning topic. Serves vision.md's SEO/AEO goals directly — turning real search-behavior data into targeted fixes rather than guessing.
- **Deferred to next cycle:** case-study `CreativeWork`/`Article` schema (still blocked on case-study dates, open since 2026-07-09); another GSC-driven review once more data accumulates (Daven didn't set a specific cadence — worth asking next cycle).
- **Agents involved:** content-strategist, seo-aeo-specialist (both run as general-purpose agents carrying the project's `.claude/agents/*.md` persona files directly, since the custom subagent types aren't registered as invokable types in this harness — worth revisiting how `/portfolio-review` invokes them going forward)
- **PR:** https://github.com/thillydee/daventhill-portfolio/pull/7
- **Merged:** 2026-07-23

## 2026-07-13 — Standing FAQ structured-data rule + backfill across all knowledge articles

- **Changed:** Added a standing rule to `content-strategist.md` and `seo-aeo-specialist.md`: every knowledge article carries exactly 3 FAQ Q&A pairs, in EN and DE, via a `faqs:` frontmatter field emitting real `FAQPage`/`Question`/`Answer` JSON-LD (not prose "## FAQ" sections). Backfilled this across all 5 pre-existing knowledge articles (`squad`, `guild`, `user-acceptance-testing`, `enhancing-elasticsearch-relevance`, `product-owner-vs-project-manager`); `squad-offsites` was already compliant. Extended `KnowledgeEntryView.astro` so `type: faq` articles merge their primary question with `faqs:` extras for JSON-LD while only rendering the extras visibly (avoiding duplicating the page title/description).
- **Why:** Prompted by Daven asking whether the squad-offsites FAQ block was actually structured for AI citability — it wasn't (plain prose, no schema). Fixed the mechanism there first, then codified it as a standing rule so it applies automatically in future `/portfolio-review` cycles, then backfilled existing articles so the whole knowledge base is consistent now rather than only new content going forward.
- **Agents involved:** none (drafted directly in the main session)
- **PR:** https://github.com/thillydee/daventhill-portfolio/pull/4, https://github.com/thillydee/daventhill-portfolio/pull/5
- **Merged:** 2026-07-13

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
