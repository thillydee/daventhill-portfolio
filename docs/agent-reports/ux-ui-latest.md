# UX/UI & Site Architecture — Cycle Report (2026-07-23)

Mode: **propose only** (no source files edited). All findings verified by reading `src/` directly and a clean `npm run build`. No live browser/dev-server tooling was available in this session (no Playwright/Puppeteer installed), so anything requiring an actual rendered viewport is called out explicitly as **needs local/device verification** rather than asserted as confirmed.

## Summary

The site is in solid shape structurally and has clearly absorbed the last two UX cycles' fixes: the skip-to-content link, the `md:` nav breakpoint, and the keyboard-accessible mobile toggle (`sr-only` checkbox + `peer-focus-visible` ring) are all present and correct in the current code, and the "Team leadership" homepage section + headed `/skills#leadership` card from the 2026-07-09 cycle are shipped and well-integrated. Route structure is clean, EN/DE parity is exact (7/7 knowledge slugs, 4/4 case-study slugs, matching page trees under `src/pages/de/`), heading hierarchy is consistent everywhere I checked (no skipped levels), color contrast passes AA across every text/background pair I tested, and the JS footprint is genuinely minimal (~4KB across all pages, mostly Vercel Analytics) — the site delivers on its own "mostly static, fast" proof point. The two real gaps this cycle are both information-architecture omissions rather than defects: the footer nav is missing a Knowledge link, and the homepage never surfaces the Knowledge Base as a content type at all, which undersells a proof point (AI/AEO-citable original content) that the content-strategist has been actively building out.

---

## Findings

### Defects (real, worth fixing)

**F1 — Footer navigation omits the Knowledge Base link**
- **Where:** `src/components/Footer.astro:31-36` (single shared component, both locales — no DE mirror needed, one fix covers both)
- **What:** The footer's `<nav aria-label="Footer navigation">` lists Experience, Case Studies, Skills, Contact — but not Knowledge, even though Knowledge is a full top-level nav item in `Header.astro:13-18` and now has 7 published articles (per `src/content/knowledge/en/*.md`).
- **Why it matters:** Footer nav is a secondary but real findability path, especially for a user who scrolls to the bottom of a case study or the privacy page looking for "what else is here." Missing one of five primary sections there is an inconsistency between the two nav surfaces (header vs. footer) that should mirror each other's top-level items.
- **Effort:** S (one line: add `<a href={`${prefix}/knowledge`} class="hover:text-brand">{strings.nav.knowledge}</a>` — note `strings.nav.knowledge` already exists since `Header.astro` uses it).
- **Impact:** M — low-traffic surface, but cheap to fix and removes a real inconsistency.

**F2 — Mobile nav toggle exposes no `aria-expanded`/`aria-controls` state**
- **Where:** `src/components/Header.astro:36`, `:73-83`
- **What:** This is distinct from the keyboard-focus bug fixed in the 2026-07-09 cycle (which is resolved — the checkbox is `sr-only`, not `hidden`, so it's tabbable and toggles via Space). What remains: the checkbox/label pattern gives assistive tech an accessible name (via the label's `aria-label`) and an implicit checked/unchecked state, but never communicates "this is a disclosure menu for navigation" or its open/closed state the way `aria-expanded` on a real toggle button would. A screen-reader user hears "Toggle navigation menu, checkbox, not checked" rather than "Navigation menu, collapsed."
- **Why it matters:** Real but minor a11y gap — functional, not broken. Given vision.md frames the site's own execution as a credibility signal, a hiring manager or accessibility-conscious recruiter auditing the site with a screen reader would notice the non-idiomatic pattern.
- **Effort:** M if fixed properly (swap checkbox-hack for a real `<button aria-expanded aria-controls>` + ~10 lines of inline script — small JS addition, still no framework). S if left as-is with just an `aria-label` clarification on the checkbox itself (`aria-label="Navigation menu, closed"` doesn't dynamically update, so this half-fix isn't worth doing — go to the real fix or skip it this cycle).
- **Impact:** L — real a11y correctness item, but low practical impact since the menu is discoverable and operable today.

### Polish / IA (subjective, prioritize below defects)

**F3 — Knowledge Base has no homepage presence**
- **Where:** `src/views/HomeView.astro` (no DE-specific file — shared view, both locales affected equally via `getProfile(locale)`/`t(locale)`)
- **What:** The homepage has dedicated sections for current role, team leadership, case studies, and FAQ — but nothing teases the Knowledge Base at all. It's reachable only via the header nav item, the footer (once F1 is fixed), or breadcrumbs on a knowledge page itself. Contrast with case studies, which get a full "home → teaser cards → detail page" funnel (`HomeView.astro:118-135`).
- **Why it matters:** vision.md's AEO goal (getting cited accurately by AI answer engines) and the recent content investment (7 articles, FAQ JSON-LD, `DefinedTerm` schema — see decision-log 2026-07-13 and 2026-07-23 entries) depend partly on humans finding and linking to this content too, not just search engines crawling it directly. A recruiter skimming the homepage currently has no signal that a knowledge base exists unless they read the nav bar closely.
- **Effort:** M — add a homepage section between "Case studies" and "FAQ" (or merge into the FAQ section, which already exists and is thematically adjacent) surfacing 2-3 knowledge entries, same card pattern as case studies (`rounded-xl border border-border ... hover:border-brand`). Needs new `strings.home.*` keys in both `en`/`de` string tables (`src/i18n/strings.ts`) — flag for content-strategist to draft the eyebrow/heading copy in first person per the voice rule.
- **Impact:** M — supports the AEO/proof-point goal indirectly; not on the direct path to contact-form conversion, so rank below F1/F2.

**F4 — Font loading has no `<link rel="preload">` for the primary Inter subset**
- **Where:** `src/layouts/BaseLayout.astro:47-51` (`<head>`), font served via `@fontsource-variable/inter` imported in `src/styles/global.css:2`
- **What:** Inter Variable is self-hosted (good — no third-party Google Fonts round-trip) and uses `font-display: swap` (confirmed in `node_modules/@fontsource-variable/inter/index.css`), so there's no invisible-text flash risk. But the browser only discovers the font file via the CSS `@font-face` rule inside the bundled stylesheet, meaning it's requested a beat later than it could be. A `<link rel="preload" as="font" type="font/woff2" href="/_astro/inter-latin-wght-normal.[hash].woff2" crossorigin>` for the `latin`/`latin-ext` subsets (the ones EN/DE content actually uses) would shave a small amount off Largest Contentful Paint, since the H1 hero text is likely the LCP element on most pages.
- **Why it matters:** Minor Core Web Vitals polish. Not a defect — `font-display: swap` already prevents the worst-case (invisible text), so this only affects paint timing, not correctness.
- **Effort:** S technically, but the hashed filename changes per build, so it needs either a small build-time step or accepting an unhashed duplicate reference — worth scoping carefully before implementing.
- **Impact:** L — real but marginal LCP gain; not worth prioritizing over F1/F2/F3 this cycle.

**F5 — Homepage hero: visual order vs. DOM/reading order mismatch on mobile**
- **Where:** `src/views/HomeView.astro:34` — `class="flex flex-col-reverse items-start gap-10 sm:flex-row sm:items-center sm:justify-between"`
- **What:** On mobile, `flex-col-reverse` puts the photo (second child in markup) visually above the name/H1/bio (first child in markup). Screen-reader and keyboard users still encounter text-then-photo in DOM order; sighted mobile users see photo-then-text. This is a common, generally-accepted hero pattern (photo-first is often more engaging for a skimming visitor) and isn't a WCAG failure on its own, but it's worth being a deliberate choice rather than an accidental one.
- **Why it matters:** Very low severity — flagging for awareness, not urgency. If intentional (photo-first reads well for a recruiter skimming on a phone), no action needed.
- **Effort:** N/A (no action recommended unless Daven wants DOM order to match visual order, in which case swap the JSX order and drop `flex-col-reverse`).
- **Impact:** L.

**F6 — Desktop nav crowding right at the `md:` breakpoint threshold — needs device verification**
- **Where:** `src/components/Header.astro:43-71`
- **What:** The 2026-07-09 cycle moved the desktop-nav switch-on point from `sm:` (640px) to `md:` (768px) specifically to fix crowding, and reading the code confirms that fix is in place (`hidden ... md:flex` on the desktop `<nav>`, `md:hidden` on the mobile toggle `<label>`). What I can't confirm without a live browser is whether 768px+ now has comfortable spacing for all seven items (logo, 4 nav links, Download CV, DE/EN switch, "Let's talk" button) or whether it's merely "no longer broken" vs. "actually comfortable" right at 768-900px, a common tablet/small-laptop-window range.
- **Why it matters:** This is exactly the class of bug the last cycle fixed once already; worth a quick resize-the-window sanity check before calling it fully closed.
- **Effort:** N/A — verification task, not a code change (unless it reveals a real problem).
- **Impact:** Unknown until verified — flagging as **needs local build verification** per my instructions, since I have no browser tooling in this session.

### Explicitly not a problem (confirmed clean, stated so nothing gets relitigated)

- **Color contrast:** every text/background combination I tested against WCAG AA (`muted` on `surface`/`surface-alt`, `ink-soft` on `surface`, `brand` on `surface`/`brand-soft`, white on `brand`, form status colors `green-700`/`red-700` on white) passes 4.5:1+ for normal text. No contrast defects.
- **EN/DE route and content parity:** exact 1:1 — every `src/pages/*` has a `src/pages/de/*` mirror, every `knowledgeEn` slug has a matching `knowledgeDe` slug (7/7), every case-study slug matches between `profile.ts` and `profile.de.ts` (4/4). Language switch (`buildLocalizedPaths`) is a simple, correct `/path` ↔ `/de/path` mapping with no edge cases found.
- **Heading hierarchy:** checked every view (`HomeView`, `CaseStudyView`, `CaseStudiesIndexView`, `SkillsView`, `ExperienceView`, `ContactView`, `KnowledgeIndexView`, `KnowledgeEntryView`, `PrivacyView`, `NotFoundView`) plus the markdown body of a sample knowledge article — H1 → H2 → H3 throughout, no skipped levels.
- **Alt text:** only one `<img>`-equivalent element exists sitewide (the homepage `Image` component, `HomeView.astro:63-71`), and it has a descriptive `alt` (`"${person.name}, ${person.currentTitle}"`). No missing alt text anywhere because there's essentially no other imagery — a deliberate, working minimalism that also keeps the JS/asset footprint tiny.
- **JS/performance footprint:** `npm run build` output shows the entire client JS bundle across the whole site is ~4KB (mostly `@vercel/analytics`'s custom element + the click-tracking listener in `BaseLayout.astro:83-97` + the contact-form submit handler on `/contact` only). CSS is a single shared 38.5KB file (Tailwind, purged, likely ~8-10KB gzipped). The homepage photo is served as two responsive `.webp` variants (20KB/5KB) with explicit `width`/`height` (no CLS risk) and `loading="eager"` (correct, since it's above the fold). This is a genuinely strong "state-of-the-art execution" proof point as vision.md asks for — no findings needed here.
- **Contact form:** proper `<label for>` associations, `required` attributes, a honeypot field (`website`, visually hidden + `tabindex="-1"` + `aria-hidden`), `role="status" aria-live="polite"` for submit feedback, and visible focus rings (`focus:ring-1 focus:ring-brand`) on every input. No accessibility issues found.
- **Skip link, mobile-nav keyboard operability, `md:` breakpoint:** all three items flagged in the 2026-07-09 cycle report are confirmed fixed in the current codebase (see F6 for the one residual "verify it's actually comfortable, not just fixed" nuance).

---

## Proposed changes (concrete, ready to implement next time this agent runs in implement mode)

1. **F1 fix** — add a Knowledge link to `Footer.astro`'s footer nav, matching the existing pattern (`{strings.nav.knowledge}`, no new string needed).
2. **F3 fix** — new homepage section teasing 2-3 knowledge entries, reusing the case-study card component pattern; needs new copy from content-strategist for `strings.home.knowledgeEyebrow`/`knowledgeHeading` (EN+DE) before implementation.
3. **F2 fix (if prioritized)** — replace the checkbox/label mobile-nav pattern with a real `<button aria-expanded aria-controls="mobile-nav">` + minimal inline script, preserving the existing visual design and the `peer-checked`-equivalent show/hide behavior via a toggled class instead of CSS `:checked`.

None of these require a route change, so none trigger the seo-aeo-specialist sequencing rule — flagging that explicitly since it's the one thing that would otherwise need loud escalation.

---

## Build/verification status

`npm run build` completed successfully with no errors or warnings beyond an informational Vercel Node version notice (local Node 26 vs. Vercel's supported 24 — not a code issue, environment-only). All 25 EN/DE static routes, the sitemap, `llms.txt`, `robots.txt`, and all OG images generated cleanly. **No source files were edited this cycle** (propose mode). Visual/responsive claims beyond what static code inspection can confirm (specifically F6, and the general "does this look right" question for spacing/type scale at real viewport widths) are **not verified in a live browser** — no Playwright/Puppeteer/Chromium available in this session — and should be sanity-checked with `astro dev --background` + a real or emulated device pass before/alongside the next cycle.

---

## Cross-cutting flags for other agents

- **content-strategist:** F3 (homepage knowledge-base teaser) needs first-person EN/DE copy for a new homepage section before it can ship — small ask (an eyebrow + heading, 2-3 sentences max, similar to the existing "Team leadership" section framing).
- **seo-aeo-specialist:** none of this cycle's findings involve route/URL changes, so no sequencing needed. Note for awareness only: F3, if shipped, adds internal links from the homepage to knowledge articles, which is generally positive for internal linking signals but doesn't change any canonical/sitemap structure.
- **PM:** no route changes proposed this cycle — nothing needs the "loud flag" treatment.

---

## Open questions for Daven

1. On F5 (hero photo-above-text on mobile): intentional, or would you prefer text-first even on mobile? Low stakes either way, just confirming it's a choice rather than an accident.
2. On F2: worth spending the small-JS budget on proper `aria-expanded` semantics for the mobile nav, or is the current CSS-only checkbox pattern (functional, if not textbook-correct) good enough given the "stay mostly static" preference?
3. Would you like a live device/browser pass (e.g., via `astro dev --background` plus manual resize/screenshot checks) folded into a future cycle so items like F6 can move from "needs verification" to "confirmed," rather than relying on static code reading each time?
