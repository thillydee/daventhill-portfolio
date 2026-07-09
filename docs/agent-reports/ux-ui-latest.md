# UX/UI & Site Architecture — Cycle Report

Mode: **propose only** (no source files edited). All findings verified by reading `src/` directly and a clean `npm run build`.

## 1. Priorities addressed this cycle

1. Structural/placement question for `leadershipApproach` (team leadership content).
2. Baseline UX/IA/accessibility/responsiveness/performance audit (first-ever cycle).

---

## 2. Findings

### 2.1 Leadership content — placement problem is real, and worse than "just buried on /skills"

Confirmed by reading `src/data/profile.ts`, `src/views/SkillsView.astro`, `src/views/HomeView.astro`, `src/views/ExperienceView.astro`, and the knowledge collection:

- **`leadershipApproach`** (`src/data/profile.ts:204`) renders as a single undifferentiated paragraph in `SkillsView.astro:58`, directly under the page `<h1>`, with no heading of its own, no visual distinction (no card/border treatment like the skill-group boxes two lines below it), and no page-level presence beyond that. Visually it reads like an intro sentence, not like proof point #2 from `vision.md`.
- **It does not appear on the homepage at all**, and the *reason* is a concrete bug-like content-ordering issue, not just an oversight: `HomeView.astro:80` does `currentRole.highlights.slice(0, 4)`. Looking at the `highlights` array for the current Endress+Hauser role in `profile.ts:106-113`, the first four items are cross-selling, PIM migration, Elasticsearch, and stock MVP — i.e., every technical/data highlight. The squad-leadership bullet is item **index 4** (5th), and Agile Guild is index 6 — both silently cut from the homepage "current role" card by the hardcoded slice. This is the most direct, fixable cause of leadership being underexposed.
- **Good news: strong deep-dive content already exists and predates this cycle.** `src/content/knowledge/en/squad.md` and `guild.md` (and DE equivalents) already cover the leadership narrative in more depth and more first-person voice than `leadershipApproach` itself — squad-building, ways of working, Agile Guild, Squad Health Checks — and are already interlinked from `/skills` via the `skillLinks` map in `SkillsView.astro:16-31` ("Squad and team leadership" → `/knowledge/squad`, "Agile Guild facilitation" / "Squad Health Checks" → `/knowledge/guild`). Full experience-page detail also already exists (`ExperienceView.astro` renders *all* highlights, unlike the homepage). So the content and IA plumbing for a "deep dive" already exist — the gap is entirely about **discovery and prominence**, not missing pages.
- Case studies, by contrast, get a full first-class pattern: own content shape (`CaseStudy` interface), own index + detail route (`src/pages/case-studies/index.astro`, `[slug].astro` + DE mirrors), own homepage section with 4 cards (`HomeView.astro:93-110`), and a nav item (`Header.astro:15`). Leadership has none of that scaffolding, which is the actual asymmetry vision.md is flagging.

**Recommendation (primary): expand + reposition within existing pages, no new route.**

This avoids a URL change (which would require sequencing with seo-aeo-specialist per the hard rule) and reuses content that already exists:

1. **Fix the homepage highlight slice** so leadership isn't accidentally excluded. Either:
   - Curate an explicit, hand-picked set of highlight indices for the homepage card instead of `slice(0, 4)` (e.g., cross-selling, squad leadership, PIM migration, Agile Guild) so it reflects breadth, not just recency-in-array-order, or
   - Add a second, distinct homepage section between "Current role" and "Case studies" — a "How I lead" callout, same visual pattern as the existing sections (eyebrow + h2 + body, `bg-surface-alt` or plain to alternate per existing rhythm), pulling from `leadershipApproach` and linking to `/skills#leadership` and/or directly to `/knowledge/squad`. This is closer to true parity with how case studies get a homepage section, without adding a nav item.
   - I'd lean toward **both**: fix the slice (cheap, removes an accidental omission) *and* add the homepage section (gives leadership the same "home → teaser → deep dive" funnel case studies get).
2. **On `/skills`**, give `leadershipApproach` its own heading and visual container instead of being a bare paragraph under the `<h1>` — e.g., a bordered/highlighted block styled consistently with the skill-group cards (`rounded-xl border border-border bg-surface p-6`) with an `<h2>` like "How I lead" before the skill groups grid. Add an `id="leadership"` on that section so the homepage (and anything else) can deep-link to it without a new route.
3. **Do not add a 5th top-level nav item** ("Leadership" or similar) this cycle — see 2.2 below for why the header is already tight at the point the mobile menu collapses into the desktop nav. If the PM/content-strategist still wants a dedicated `/leadership` page later for SEO-landing-page reasons, flag that explicitly as a **cross-cutting route change** for seo-aeo-specialist to sequence (new route → new sitemap entry, canonical, hreflang, DE mirror) rather than doing it opportunistically.

This keeps EN/DE parity trivial (no new route to mirror — same view templates, both locales already receive `leadershipApproach` via `getProfile(locale)`).

### 2.2 Header/nav: real responsiveness risk, not just a style nit

`src/components/Header.astro:43`: `class="hidden items-center gap-6 sm:flex"`. The desktop nav (all 7 clickable items: Experience, Case Studies, Skills, Knowledge, Download CV, DE language switch, "Let's talk" button) switches on at Tailwind's `sm` breakpoint — **640px** — with no `flex-wrap` and no narrower fallback between the collapsed mobile menu and this. Rough width math (text-sm items + `gap-6`/24px + the "Let's talk" button padding + logo) puts this comfortably over 640px, meaning viewports in the ~640–860px range (small tablets in portrait, some foldables, browser windows resized on a laptop) are likely to show a cramped or overflowing nav row rather than either the clean mobile menu or a comfortably-spaced desktop nav. This is exactly the kind of thing a recruiter skimming on a mid-size device would notice.

**Recommendation:** move the breakpoint for the desktop nav from `sm:` to `md:` (768px), and keep the hamburger/mobile menu active through `md`. This is a one-line class change (`sm:flex` → `md:flex`, and the mirrored `sm:hidden` on the toggle label → `md:hidden`), needs no route change, and reduces the itch to add a "Leadership" nav item on top of an already-tight bar.

### 2.3 Mobile nav toggle is not keyboard-operable (accessibility)

`Header.astro:36-37, 73-83`: the mobile menu uses the checkbox+`peer` CSS pattern — `<input type="checkbox" id="nav-toggle" class="peer hidden" />` and `<label for="nav-toggle" ... aria-label="Toggle navigation menu">`. Because the checkbox has Tailwind's `hidden` (`display:none`), it is removed from the tab order entirely, and the `<label>` has no `tabindex`, so it is not natively focusable either (labels aren't in the default tab order unless they wrap a focusable control, and here it only wraps an inert `<svg>`). Net effect: **a keyboard-only user cannot open the mobile nav menu at all** — Tab skips straight from the logo link to whatever's next in the DOM after the toggle. There's also no `aria-expanded`/`aria-controls` relationship exposed, so even if it were reachable, assistive tech wouldn't know it's a disclosure toggle or what state it's in.

**Recommendation (low-effort, stays CSS-only, no new JS):** change the checkbox's class from `hidden` to a visually-hidden-but-focusable utility (e.g. `sr-only`, or `absolute opacity-0` sized to 1px) so it re-enters the tab order and remains keyboard-operable via native checkbox Space-toggle behavior, which already drives the existing `peer-checked:flex` CSS. Pair with a visible focus style on the label via `peer-focus-visible:ring-2 peer-focus-visible:ring-brand` (Tailwind can target sibling label from peer-focus). This preserves the "mostly static, no client JS" approach.

**Cleaner alternative (small JS, more correct semantics):** replace the checkbox/label pair with a real `<button aria-expanded="false" aria-controls="mobile-nav">` and a ~10-line inline script to toggle a class and the `aria-expanded` value. Slightly more code than the CSS-only fix but gives proper disclosure-widget semantics to screen readers. Either is acceptable; I'd default to the CSS-only fix given the "Astro should stay mostly static" guardrail, unless accessibility correctness is prioritized over that.

### 2.4 No skip-to-content link

`src/layouts/BaseLayout.astro` renders `Header` (with up to 7 links/buttons), then optional `Breadcrumbs`, then `<main>`. There's no "Skip to main content" link, so keyboard and screen-reader users must tab through the entire header (and breadcrumb trail, on inner pages) on every single page load before reaching page content. This is a standard, cheap accessibility win, especially relevant since case-study/knowledge detail pages are meant to be read deeply by hiring managers, some of whom may use assistive tech.

**Recommendation:** add a visually-hidden-until-focused skip link as the first element inside `<body>` in `BaseLayout.astro`, pointing to a `id="main"` on the `<main>` element.

### 2.5 Homepage hero image: no responsive/retina sourcing, otherwise well handled

`HomeView.astro:58-65` uses Astro's `<Image>` component (good — build confirms it's compiled to a single optimized `.webp` at ~5KB, `dist/client/_astro/daven-thill.*.webp`, down from a 205KB source JPEG — this part is excellent and already correctly implemented, no action needed there). One gap: `width={224} height={224}` produces one fixed-resolution asset reused at both the mobile (`h-36 w-36` = 144px) and desktop (`sm:h-56 w-56` = 224px) render sizes, with no `srcset`/density variants, so on high-DPI ("retina") displays the desktop rendering (224 CSS px × 2 or 3 device pixels) is upscaling a 224px-wide source — slightly soft on retina screens. Very minor given the file is tiny either way.

**Recommendation (optional, low priority):** if this is worth polishing, use Astro's `densities={[1, 2]}` on the `<Image>` component to emit a 2x variant for retina — trivial addition, no layout change.

### 2.6 Color contrast — checked, no action needed

Computed contrast ratios (WCAG formula) for the design tokens in `src/styles/global.css`:
- `--color-muted` (#64748b) on white: **4.76:1** — passes AA for normal text (≥4.5:1).
- `--color-muted` on `--color-surface-alt` (#f8fafc): **4.55:1** — passes, barely.
- `--color-ink-soft` on white: **10.35:1** — comfortably passes.
- `--color-brand` (#2563eb) as link/button text on white or `--color-brand-soft`: **5.17:1 / 4.75:1** — both pass.

No contrast fixes needed. Flagging here mainly so this doesn't get re-litigated as a guess in a future cycle — it's been measured.

### 2.7 EN/DE route parity — verified, no gaps

Diffed `src/pages/experience.astro` vs `src/pages/de/experience.astro` (only the import path and `locale` prop differ, as expected) and listed all files under `src/pages/` vs `src/pages/de/`: every content route (`index`, `experience`, `skills`, `contact`, `privacy`, `case-studies` + `[slug]`, `knowledge` + `[slug]`, `404`) has a DE mirror. Non-page-content routes (`api/contact.ts`, `llms.txt.ts`, `og/[...slug].ts`, `robots.txt.ts`) are correctly locale-agnostic/shared. No parity gaps found this cycle.

### 2.8 Heading hierarchy, semantics, alt text — spot-checked, no major issues

Spot-checked `HomeView`, `ExperienceView`, `SkillsView`, `CaseStudyView`, `KnowledgeEntryView`, `ContactView`, `NotFoundView`: each has exactly one `<h1>`, sensible `<h2>`/`<h3>` nesting, semantic `<nav>`/`<ol>`/`<dl>` usage where appropriate (e.g. FAQ as `<dl>` in `HomeView.astro:116-123`, experience timeline as `<ol>` in `ExperienceView.astro:41`). Hero photo alt text (`HomeView.astro:60`, `${person.name}, ${person.currentTitle}`) is specific, not decorative-filler. Contact form (`ContactView.astro`) has proper `<label for>` associations, a honeypot field correctly hidden with `aria-hidden="true"` (not just visually hidden) at `ContactView.astro:85-88`, and an `aria-live="polite"` status region for submit feedback — this is solid, above-baseline accessibility work already in place.

### 2.9 Build/bundle sanity

`npm run build` output (see §4) shows a clean static/mostly-static build: `dist/client/_astro/BaseLayout.C5MTw2hC.css` is 36KB (single global stylesheet, reasonable for the whole site), only two small client scripts (analytics event delegation in `BaseLayout.astro`, contact-form fetch handler), and font files split into per-script subsets (cyrillic/greek/vietnamese/latin) — browsers will only fetch the subsets matching rendered text via `unicode-range`, so actual per-visitor download is smaller than the total listed. No red flags on bundle size.

---

## 3. Proposed changes (concrete, file-by-file)

All of the below are description-level proposals for the PM to route into "implement" mode — no files were edited this cycle.

1. **`src/views/HomeView.astro`**
   - Replace `currentRole.highlights.slice(0, 4)` (line 80) with either a curated fixed subset of indices that includes the squad-leadership bullet, or add a new section (same visual rhythm as the "Case studies" section) titled something like "How I lead" sourcing `leadershipApproach`, placed between the "Current role" section and the "Case studies" section, linking to `/skills#leadership` (and/or `/knowledge/squad`).
   - Needs a DE mirror automatically via `src/pages/de/index.astro` → `HomeView locale="de"` (no separate edit required, same component).

2. **`src/views/SkillsView.astro`**
   - Give the `leadershipApproach` paragraph (line 58) its own `<h2>` (e.g. "How I lead") and a bordered/card visual treatment consistent with the skill-group boxes below it (`rounded-xl border border-border bg-surface p-6`), plus `id="leadership"` for deep-linking.

3. **`src/components/Header.astro`**
   - Line 43: `sm:flex` → `md:flex` (desktop nav breakpoint).
   - Line 75 (mobile toggle label): `sm:hidden` → `md:hidden` to match.
   - Line 36: `class="peer hidden"` → visually-hidden-but-focusable class (e.g. `class="peer sr-only"`), to restore keyboard operability of the mobile menu toggle; pair with a `peer-focus-visible:` ring style on the label at line 75 for a visible focus indicator.

4. **`src/layouts/BaseLayout.astro`**
   - Add a skip-to-content link as the first child of `<body>`, targeting a new `id="main"` on the `<main>` element (line 59).

5. **`src/views/HomeView.astro`** (optional/low priority)
   - Add `densities={[1, 2]}` to the `<Image>` call (line 58) for retina sharpness.

None of these change any URL/route. All are same-file changes to shared view/layout components, so EN and DE automatically inherit them — no separate DE-side edits needed beyond what already exists.

---

## 4. Build/verification status

Ran `npm run build` in this session (read-only from the site's perspective — no source files were modified). **Build passed cleanly**: static pages generated for all EN/DE routes, sitemap generated, OG images generated, Vercel function bundled, no errors. Only a benign warning about local Node 26 vs. Vercel's supported Node 24 runtime (environment note, not a code issue).

Because no proposed changes above were actually applied (propose mode), they are **not yet build-verified against the final diffs** — once implemented, re-run `npm run build` to confirm, particularly the Header breakpoint/keyboard-toggle change and the skip-link addition, since those touch shared layout on every page.

---

## 5. Cross-cutting flags

- **No route/URL changes proposed this cycle.** The leadership-placement recommendation deliberately avoids a new page/route to stay out of seo-aeo-specialist's sitemap/canonical territory. If the PM or content-strategist later wants a dedicated `/leadership` (or similar) page for SEO-landing-page purposes, that is a **route change** and must be flagged and sequenced with seo-aeo-specialist per the hard rule (new sitemap entry, canonical URL, hreflang alternates, DE mirror, and likely a new nav item with its own responsiveness trade-off per §2.2).
- **Content dependency:** the "How I lead" homepage/skills copy in proposal §3.1–3.2 should be coordinated with content-strategist, since they're drafting the actual `leadershipApproach` copy this cycle in parallel — the structural containers proposed here (new homepage section, headed block on `/skills`) should be sized/reviewed against whatever length/tone the final copy lands on.
- **No visual/color identity changes proposed.** All recommendations reuse existing design tokens and component patterns (`bg-surface`, `border-border`, `text-brand`, existing card/section rhythm) — nothing here needs a mockup per vision.md's guardrail on color/identity changes.

---

## 6. Open questions for Daven

1. Do you want leadership content to eventually get its own full page/route (parity with case studies), for its own SEO landing-page value (e.g. "Product Owner team leadership Basel")? Or is the "teaser + existing squad/guild knowledge deep-dive" funnel proposed here sufficient? This affects whether seo-aeo-specialist needs to plan for a new indexed URL down the line.
2. Any objection to nudging the header's desktop-nav breakpoint from `sm` (640px) to `md` (768px)? This slightly widens the range of viewport widths that show the hamburger menu instead of the inline nav — purely a robustness fix, not a visual identity change, but flagging since it changes behavior at a specific set of screen sizes.
