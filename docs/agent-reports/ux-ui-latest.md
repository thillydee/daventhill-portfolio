# UX/UI & Site Architecture Report — ux-ui-architect

**Cycle:** New initiative — German-only webdesign side-offer page (`/webdesign`)
**Mode:** PROPOSE ONLY — no source files changed
**Date:** 2026-09-18

Running in parallel with content-strategist (copy, already drafted — see `docs/agent-reports/content-latest.md`) and seo-aeo-specialist (schema/hreflang, not yet filed this cycle as of this read). This report stays in structure/routing/component/nav lane and flags copy and schema calls back to them rather than deciding those myself.

---

## 1. Priorities addressed this cycle

1. Nav placement for a German-only offer that must read as its own nav item, not a 5th case study, and must not appear (or break) for English-locale visitors.
2. Route/page file architecture for the site's first page that breaks the dual-locale `Locale`/`getProfile(locale)` pattern.
3. Pricing/package component design (3 tiers + recurring Betreuung + quote-only large-project note), mobile-first.
4. Separate contact form/endpoint recommendation for webdesign leads vs. PO/recruiter leads.
5. OG-image pipeline check — does adding this route need new plumbing.
6. Mobile-first structural check against existing patterns.

---

## 2. Findings

### 2.A Every page currently assumes bilingual existence — this page breaks that assumption in three concrete places

Read `src/layouts/BaseLayout.astro`, `src/components/Header.astro`, `src/components/SEO.astro`, `src/components/PersonSchema.astro`, `src/i18n/index.ts`.

- `BaseLayout.astro` (`Props`, lines 16–29) requires `locale: Locale` (`'en' | 'de'`) and `localizedPaths: Record<Locale, string>` — both are hard-typed, not optional.
- `SEO.astro` (lines 14–22, 29–31) unconditionally emits `<link rel="alternate" hreflang="en">`, `hreflang="de"`, and `hreflang="x-default"` from `localizedPaths.en` / `localizedPaths.de`. If a single-locale page is forced through this component unchanged, it will emit an `hreflang="en"` tag pointing at a URL that actually serves German content — a real hreflang correctness bug, not a cosmetic one.
- `Header.astro` (lines 28–31, 56–62, 106–108) always renders a language-switch link built from `localizedPaths[otherLocale]`. On a single-locale page there is no "other locale" URL to switch to, so this link would be either dead or misleadingly point somewhere unrelated.
- `PersonSchema.astro` also takes `locale: Locale` and calls `getProfile(locale)` — this is **not** a problem, since it only uses `locale` to select which profile's person/org facts to emit (name, jobTitle, address, etc.), not to enforce bilingual routing. Passing `locale="de"` here is correct and desired (see 3.B).

This is the concrete "small BaseLayout adjustment" the brief anticipated. See §3.B for the proposed fix — two small optional props, not a rewrite.

### 2.B Existing `pages/` routing convention

`src/pages/index.astro` + `src/pages/de/index.astro` are both thin wrappers that just call `<HomeView locale="en" />` / `<HomeView locale="de" />`. Every other route (`experience.astro`, `skills.astro`, `contact.astro`, `case-studies/`, `knowledge/`) follows the same `pages/<route>.astro` + `pages/de/<route>.astro` pair → `views/<Name>View.astro` pattern, per `astro.config.mjs`'s `i18n.routing: { prefixDefaultLocale: false }` (EN at root, DE under `/de/`).

### 2.C Design system tokens/patterns already established (reusable, not to be reinvented)

From `src/styles/global.css`, `src/views/HomeView.astro`, `src/views/SkillsView.astro`, `src/components/Header.astro`:

- Card: `rounded-xl border border-border bg-surface p-6` (hover: `hover:border-brand`).
- Primary CTA button: `rounded-md bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-brand-dark`.
- Secondary/outline button: `rounded-md border border-border px-5 py-3 text-sm font-semibold text-ink hover:border-brand hover:text-brand`.
- Pill/badge: `rounded-full border border-brand/30 bg-brand-soft px-3 py-1 text-sm text-brand` (used for tagged skills in `SkillsView.astro:90`).
- Dot-bullet highlight list: `<span class="h-1.5 w-1.5 rounded-full bg-brand">` + text, used identically in `HomeView.astro` (twice) and `SkillsView.astro`.
- Section rhythm: alternating `bg-surface` / `border-t border-border bg-surface-alt` bands, `mx-auto max-w-5xl px-4 py-16 sm:px-6` container.
- Anchor targets already exist for deep-linking within a page: `id="leadership"` in `SkillsView.astro:67` with `scroll-mt-24`.
- `dl`/`dt`/`dd` stacked FAQ pattern in `HomeView.astro:169–176` — already mobile-solid (single column, no responsive breakpoint needed because it never goes multi-column).

### 2.D Contact form / API

`src/pages/api/contact.ts`: single `POST` handler, honeypot field named `website` (hidden input, `tabindex="-1"`, `autocomplete="off"` — see `ContactView.astro:84–87`), Zod-free manual validation, sends via Resend to `daventhill@gmail.com` with a fixed subject line `New portfolio contact from ${name}`. No `type`/`source` field exists today. `ContactView.astro`'s client script posts a flat `FormData` object as JSON to `/api/contact`.

### 2.E OG image pipeline

`src/pages/og/[...slug].ts`: `pages` is a plain `Record<string, {title, description}>` built by (a) a per-locale loop (`addLocalePages('en')`/`('de')`) that adds fixed routes plus case-study/knowledge slugs, and (b) nothing content-collection-specific beyond that — `experience`, `skills`, `contact`, `privacy` are plain dict entries with hand-written title/description, not derived from a collection. This confirms a single-locale page is not a special case for this pipeline: it just needs one more manually-added `pages['webdesign'] = {...}` entry outside the locale loop, and the page passes `ogImageSlug="webdesign"` to `BaseLayout`. **No new plumbing required.**

### 2.F Content-strategist's copy draft (`docs/agent-reports/content-latest.md`) — already dictates page structure

Their draft (read in full) locks in 7 sections: Hero → Problem/Nutzen → Leistungspakete (3 tiers + Betreuung + Grössere Projekte + Zusatzleistungen) → Referenzprojekt (ava-beauty.ch, **conditionally omitted pending Sandra's permission — blocking open question on their side**) → Ablauf (5 steps) → FAQ (4 Q&A) → Kontaktformular. They also flagged three items directly to me:
1. Ablauf/FAQ should be modular/independently relinkable blocks (a future lead-magnet "kostenloser Website-Check" page may reuse/cross-link them).
2. Referenzprojekt section needs a layout that gracefully supports being empty/omitted.
3. Contact form must be genuinely separate from the PO contact form (confirms my own read from the brief).

I've folded all three into the proposal below.

---

## 3. Proposed changes

### 3.A Route & file structure

```
src/pages/webdesign.astro          (NEW — root level, no /de/ counterpart)
src/views/WebDesignView.astro      (NEW)
src/pages/api/contact.ts           (EXTEND, not duplicate — see 3.D)
src/pages/og/[...slug].ts          (EXTEND — one dict entry, see 3.E)
src/components/Header.astro        (SMALL EXTEND — see 3.C)
src/layouts/BaseLayout.astro       (SMALL EXTEND — see 3.B)
src/components/SEO.astro           (SMALL EXTEND — see 3.B)
```

**Route: `/webdesign` at root, not `/de/webdesign`.** Recommendation, not `/web`: `/webdesign` is the clearer, more literal slug and matches likely search intent ("webdesign basel" style queries — final call on the exact string is seo-aeo-specialist's, but from an IA-clarity standpoint `/webdesign` beats the generic `/web`). It goes at **site root**, not under `/de/`, because `/de/` on this site is a *locale-parity signal* ("this is the German twin of an English page") — this page has no English twin, so nesting it under `/de/` would misrepresent it as part of that pairing. A root-level route whose content happens to be German (declared via `<html lang="de-CH">`, same mechanism `htmlLang('de')` already produces) is structurally honest: it's simply a new, standalone, single-locale route, the same way `/privacy` or `/knowledge/<slug>` are standalone routes without implying anything about pairing.

**Hard-rule flag (per my persona's standing rule to flag route/parity changes loudly):** this is a deliberate, one-time exception to "every EN route needs a matching DE route" — there is no EN route to pair it with by design, not an oversight. Recommend recording it explicitly in `decision-log.md` once shipped so a future cycle doesn't "fix" the missing English mirror or missing `/de/webdesign` file as if it were a parity bug.

`webdesign.astro` does **not** import `getProfile`/`t`/`buildLocalizedPaths` for its own copy — those are the bilingual-content system and this page isn't bilingual. It does still pass `locale="de"` down to `BaseLayout`/`Header`/`Footer`/`PersonSchema` (see 3.B) purely so those *shared* components render their existing German strings/paths (nav labels, footer links, CV link, `htmlLang`, person schema facts) correctly — that's reuse of the locale mechanism for rendering, not participation in the dual-route system.

**Content placement:** recommend inlining the German copy as constants directly in `WebDesignView.astro` (or a co-located `const content = {...}` block at the top of the file), rather than a new `src/data/webdesign.ts`. This content will never need an English variant and isn't reused elsewhere, so the `strings.ts`/`profile.de.ts` bilingual-table shape would be overhead with no payoff for a solo maintainer. Low-stakes call — flagging as an open question in case Daven prefers a separate data file for easier future editing.

### 3.B `BaseLayout`/`SEO` adjustment — the compatibility point for seo-aeo-specialist

Add one optional prop, threaded through both files:

```ts
// BaseLayout.astro Props
singleLocale?: boolean;   // default false

// SEO.astro Props
singleLocale?: boolean;   // default false
```

In `SEO.astro`, wrap the three `hreflang` lines:

```astro
{!singleLocale && (
  <>
    <link rel="alternate" hreflang="en" href={enURL} />
    <link rel="alternate" hreflang="de" href={deURL} />
    <link rel="alternate" hreflang="x-default" href={enURL} />
  </>
)}
```

`localizedPaths` stays required and typed as-is (no type loosening needed) — for a `singleLocale` page, the caller just passes a self-referential dummy, e.g. `{ en: '/webdesign', de: '/webdesign' }`, which becomes dead data once the hreflang block and the Header switch link (3.C) are both suppressed. This keeps the type contract identical everywhere else and avoids `undefined`-checks leaking into every consumer of `localizedPaths`.

**My default proposal is to omit the hreflang block entirely for this page** (no tags at all, not even a self-referencing single `hreflang="de"`) — that's the simplest, least-error-prone option and hreflang is opt-in by nature. **Flagging to seo-aeo-specialist to confirm or override** — a self-referencing `hreflang="de-CH"` is also a legitimate, more explicit alternative; that decision is theirs, this prop just makes either option cheap to implement without duplicating `SEO.astro`.

### 3.C `Header` adjustment

Add one optional prop:

```ts
showLangSwitch?: boolean;  // default true
```

Wrap both the desktop (`Header.astro:56–62`) and mobile (`:106–108`) switch-link blocks in `{showLangSwitch && (...)}`. `BaseLayout` forwards `showLangSwitch={!singleLocale}` to `Header` so page authors only ever set `singleLocale` once, at the `BaseLayout` call site, rather than having to know about `Header`'s internal prop too.

### 3.D Nav placement — concrete recommendation

**Add "Webdesign" as its own nav item, visually de-emphasized, visible only when `locale === 'de'`** (i.e., only on German-locale pages), positioned after the four PO nav items and before the CV-download/lang-switch/CTA cluster, with distinct (smaller, muted) styling so it doesn't read as a 5th case study:

```astro
{locale === 'de' && (
  <a
    href="/webdesign"
    class="text-xs text-muted hover:text-ink border-l border-border pl-4"
  >
    Webdesign-Angebot
  </a>
)}
```

- Uses `text-xs text-muted` (smaller, quieter than the `text-sm font-medium text-ink-soft` primary nav items) and a `border-l` divider, so it visually reads as a separate, secondary utility link — the same visual grammar the CV-download and lang-switch links already use, not the same grammar as Experience/Case Studies/Skills/Knowledge.
- Placed before the "Let's talk" brand-colored CTA button, which stays the visually dominant element (`bg-brand`, only filled button in the header) — this satisfies "must not compete with the primary CTA."
- Mirror the same link (plain text, not styled as a nav pill) into the DE-locale `Footer.astro` nav list (`Footer.astro:31–37`) for a secondary, always-reachable path, consistent with how every other nav item is duplicated in the footer today.

**What an English-locale visitor sees: nothing.** No "Webdesign" item, no broken/placeholder link, no visual gap — the conditional simply doesn't render. This directly answers "what happens when a recruiter switches language": switching EN→DE reveals the link (expected — the page is real, German, and reachable), switching DE→EN makes it disappear (also expected, and correct, since there's nothing to send an English reader to).

**Real trade-off to flag explicitly, not decide silently:** `Header`/`Footer` are global per-locale components, not per-page. There is no "site nav" vs. "page nav" distinction in this codebase today — so a `locale === 'de'` conditional makes the Webdesign link appear on **every** German page, including `/de/experience`, `/de/skills`, `/de/contact` — i.e., **German-speaking recruiters/hiring managers see it too, not only prospective SME leads landing on `/webdesign` itself.** This is the actual scope of "own nav item" as the codebase's component structure allows it to be built cheaply. The alternative — a page-scoped header/footer used only on `/webdesign`, with zero presence on the rest of the DE site — fully eliminates that exposure in both directions, but means building and maintaining a second header/footer variant for one page, which cuts against this being a solo-maintained site and the project's existing "reuse, don't reinvent" component discipline.

**My recommendation: ship the shared-header version (Option A above), not a page-scoped header.** The link is small, secondary-styled, and behind the CTA in visual priority — a plausible read for a DE-speaking recruiter is "he also does freelance work," which is a mild, not disqualifying, signal, and is reversible with a 5-line diff if Daven disagrees after seeing it live. But this is ultimately Daven's call on risk tolerance, not mine to finalize — see Open Questions §6.1.

### 3.E OG image — one addition, no new plumbing

In `src/pages/og/[...slug].ts`, after the two `await addLocalePages(...)` calls:

```ts
pages['webdesign'] = {
  title: '…', // content-strategist/Daven to finalize exact OG title
  description: '…',
};
```

`WebDesignView.astro` passes `ogImageSlug="webdesign"` to `BaseLayout`. Confirmed this pipeline is dict-driven, not collection-driven, for every non-knowledge page already (`experience`, `skills`, `contact`, `privacy` are all plain entries) — this page fits the existing pattern exactly.

### 3.F Package/pricing component — mobile-first card layout

Single-column stacked cards by default, 3-column grid only from `sm:` up — same responsive posture as every existing card grid on the site (`grid gap-6 sm:grid-cols-2` / `sm:grid-cols-3` in `HomeView.astro`, `SkillsView.astro`). Concretely:

```astro
<div class="grid gap-6 sm:grid-cols-3">
  <!-- Paket 1: standard card -->
  <div class="rounded-xl border border-border bg-surface p-6">…</div>

  <!-- Paket 2: emphasized card — order-first on mobile, stays in the middle at sm+ via source order -->
  <div class="rounded-xl border-2 border-brand bg-surface p-6 relative">
    <span class="absolute -top-3 left-6 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white">
      Empfehlung
    </span>
    …
  </div>

  <!-- Paket 3: standard card -->
  <div class="rounded-xl border border-border bg-surface p-6">…</div>
</div>
```

- **Cards, not a comparison `<table>`.** A 3-column feature-comparison table is the single most common mobile-breakage pattern (forces horizontal scroll or illegible shrinking at 375–390px viewports, which the brief says is most of this audience). Three cards with a short bullet list each sidesteps that entirely — this is the concrete "structural pattern needing rework" answer to priority 6: there is no existing pricing-table pattern on the site to reuse, and the reason is exactly why one shouldn't be introduced here.
- **Paket 2 ("Neuer Auftritt") visually emphasized**, per the brief's ask — `border-2 border-brand` instead of the default `border-border`, plus a small "Empfehlung" pill badge reusing the existing pill pattern (§2.C). On mobile (single column), this card is what a thumb-scrolling visitor hits regardless of DOM position since everything stacks linearly — keep it in natural source order (2nd) rather than reordering with CSS `order-*`, since reordering DOM-vs-visual-order hurts screen-reader/keyboard users for no real benefit once it's already visually marked with the border+badge.
  - **Tension to flag, not silently resolve:** content-strategist's own drafted copy for Paket 1 ("Sichtbar") explicitly says *"Für viele Betriebe ist das der grössere Hebel als eine neue Website"* (for many businesses this is the bigger lever than a full rebuild) — i.e., their copy frames Paket 1, not Paket 2, as often the right fit. My brief for this cycle assumed Paket 2 is "the realistic default for most leads." Those two are in mild tension. I've defaulted to emphasizing Paket 2 because it's the conventional "middle tier gets the visual anchor" pattern and matches the brief literally, but **Daven should confirm which package he actually expects/wants to sell most**, since the visual emphasis is a sales lever, not just a design choice (see Open Questions).
- **Betreuung (CHF 45/mo or 480/yr):** a separate, full-width panel below the 3-card grid, not a 4th card in the grid — keeps the one-time-vs-recurring distinction visually obvious rather than flattening into "4 packages." Reuse the `border-t border-border bg-surface-alt` section-band pattern already used between `HomeView` sections. The two price options (monthly/yearly) stack vertically on mobile, not side-by-side, to avoid cramping at narrow widths — e.g. two `rounded-lg border border-border p-4` mini-cards in a `grid gap-3 sm:grid-cols-2` (single column until `sm:`).
- **"Grössere Projekte" (CHF 6'500–9'000, quote-only):** a plain text callout below the Betreuung panel, not a card — it's explicitly not a fixed package, and giving it card treatment would visually read as a 4th/5th tier, undermining the "3 clear packages" framing. A centered or left-aligned muted-text paragraph with a link into the contact form is sufficient.
- **Zusatzleistungen (add-ons):** a small `<ul>` beneath, `text-sm text-muted`, not cards — these are line-item modifiers, not standalone offers.

### 3.G Referenzprojekt — conditional section (per content-strategist's flag)

Gate the whole section on a data value being present, not a layout toggle, so shipping without it later is a one-line change:

```astro
// top of WebDesignView.astro
const referenceProject = null; // set once Sandra confirms permission — see content-latest.md §5.1
```

```astro
{referenceProject && (
  <section id="referenz" class="border-t border-border bg-surface-alt">
    …
  </section>
)}
```

This directly satisfies content-strategist's ask ("needs a layout that gracefully supports being empty/omitted") without a separate "coming soon" placeholder component — the section simply doesn't render until there's real data, matching the `{breadcrumbs && <Breadcrumbs .../>}` conditional pattern `BaseLayout.astro:81` already uses.

### 3.H Ablauf & FAQ — modular, anchor-linkable blocks (per content-strategist's flag)

Give each major section its own `id` (`id="pakete"`, `id="ablauf"`, `id="faq"`, `id="kontakt"`), matching the `id="leadership"` + `scroll-mt-24` pattern already in `SkillsView.astro:67`. This makes every section independently deep-linkable (`/webdesign#pakete`) for reuse from a future lead-magnet page without any layout coupling — satisfies content-strategist's request directly.

**Ablauf (5-step process) — mobile pattern:** recommend a **vertical numbered list**, not a horizontal stepper/progress bar. Horizontal steppers are the second most common mobile-breakage pattern after comparison tables (they either overflow or compress labels into illegibility under ~400px). A vertical list — number badge + heading + one-line description, stacked — degrades to nothing worse than "a list," which is inherently mobile-safe and consistent with the dot-bullet list pattern already used twice in `HomeView.astro`.

**FAQ (4 Q&A):** reuse `HomeView.astro`'s existing `<dl>`/`<dt>`/`<dd>` pattern verbatim (`HomeView.astro:169–176`) — already single-column, already mobile-solid, no new component needed. (Whether this FAQ block should also emit `FAQPage` JSON-LD via `PersonSchema`'s existing `faq` prop, and whether to trim from 4 to 3 entries to match the site's knowledge-article FAQ-schema convention, is seo-aeo-specialist's call per content-strategist's flag — structurally the `faq` prop already exists and accepts any array length, so no component change is needed either way.)

### 3.I Separate contact form — recommendation

**Extend the existing `/api/contact` endpoint with a `source` field; do not build a second endpoint.**

Rationale: this is a solo-maintained static site with one already-working, already-spam-protected pipeline (Resend, honeypot, validation) in one file. A second endpoint means a second honeypot to keep in sync, a second Resend call site, a second thing to break silently. The distinguishing need Daven actually has — "tell these leads apart in my inbox" — doesn't require a second pipeline, just a second signal in the one email.

Concretely, extend `src/pages/api/contact.ts`:

```ts
const source = typeof body.source === 'string' ? body.source.trim() : 'portfolio';
// ...
subject: source === 'webdesign'
  ? `Neue Webdesign-Anfrage von ${name}`
  : `New portfolio contact from ${name}`,
```

`WebDesignView.astro`'s form includes a hidden `<input type="hidden" name="source" value="webdesign" />` alongside its own field set (content-strategist/Daven to finalize exact fields — likely name, email, "Art des Betriebs" instead of "Company", message; the brief already flags this as a different field set than the PO form's Company field). The **same honeypot field name/pattern (`website`, hidden, `tabindex="-1"`, `autocomplete="off"`)** carries over unchanged — no new spam-protection surface to build or maintain.

This is a genuinely separate `<form>`/route (`/webdesign` has its own form, not a shared component with `ContactView.astro` — the field sets differ per content-strategist's flag), just not a separate **endpoint**. That distinction (separate form, shared endpoint) is what keeps leads distinguishable in Daven's inbox while keeping the spam/validation surface at one file.

---

## 4. Build/verification status

No source files were edited this cycle (propose mode, per instructions). Ran `npm run build` against the current, unmodified tree as a baseline check before proposing anything: **clean build, no errors** (Astro build completed, sitemap generated, Vercel function bundled — only a benign Node-version warning from `@astrojs/vercel`, unrelated to this proposal). Nothing here has been implemented, so there is nothing new to build-verify yet — the plan in §3 is designed to be buildable (every prop addition is optional/backward-compatible, no existing call site needs to change), but that claim itself is **unverified until implemented** and should be re-checked with `npm run build` once someone (implement-mode agent or Daven) writes the actual files.

---

## 5. Cross-cutting flags

**To seo-aeo-specialist:**
- Confirm the hreflang treatment for `/webdesign` — my default proposal (§3.B) is to emit no `hreflang` tags at all for this page; a self-referencing single `hreflang="de-CH"` is a reasonable alternative. Either is cheap to implement with the `singleLocale` prop I'm proposing; the choice is yours.
- Confirm the route slug — I've assumed `/webdesign` over `/web` for IA clarity, but keyword targeting is your call.
- LocalBusiness/Service JSON-LD: `PersonSchema.astro` currently only knows about `Person`, `ProfilePage`, `BreadcrumbList`, `DefinedTerm`, `CreativeWork`, `FAQPage` node types (`PersonSchema.astro:41–126`) — there's no `LocalBusiness`/`Service` node today. If you want that schema on this page (content-strategist already flagged the opportunity, since Paket 1 literally sells LocalBusiness-schema setup), it needs a new prop/branch added to `PersonSchema.astro`, not something the page can bolt on alone — flagging the component gap so it's sequenced as a shared-component change if you decide to pursue it.
- Whether the 4-entry FAQ (vs. the knowledge-article standing rule of exactly 3) should be trimmed or is fine as a sales-page exception — content-strategist deferred this to you too.

**To content-strategist:**
- No new asks beyond what's already in your report — the Referenzprojekt conditional-render pattern (§3.G) and the anchor-`id` structure (§3.H) are both designed to match what you flagged.
- The exact OG title/description string for the new `pages['webdesign']` entry (§3.E) needs your/Daven's copy — I've left it as a placeholder.

**To Daven directly (routing/nav — see also §6):**
- This is the site's first single-locale route and first case of a nav item that only exists for one locale. Flagging per my persona's standing rule to loudly surface any route-parity change, even though this one is a deliberate exception rather than an accidental break — worth one line in `decision-log.md` once shipped so it reads as "intentional" to future cycles.

---

## 6. Open questions for Daven

1. **Nav exposure scope (§3.D):** the shared-Header approach means the "Webdesign" link and footer entry appear on every German-locale page — `/de/experience`, `/de/skills`, `/de/contact`, not just `/webdesign` itself — so German-speaking recruiters see it too, not only SME leads. I've recommended shipping this anyway (small, de-emphasized, reversible), but it's your risk call, not mine. If you'd rather it have zero presence outside `/webdesign` itself, that needs a page-scoped header/footer instead, which I can spec next cycle if you want that direction.
2. **Route slug:** `/webdesign` (my recommendation) vs. `/web` vs. something else — final call is yours/seo-aeo-specialist's on keyword grounds.
3. **Emphasized package tier (§3.F):** I've defaulted to visually emphasizing Paket 2 ("Neuer Auftritt") per this cycle's brief, but content-strategist's own copy for Paket 1 frames it as often the bigger lever for many businesses. Which package do you actually want the visual "Empfehlung" badge on — or would a badge be premature before you have real lead data on which tier people actually pick?
4. **Content data placement:** inline constants in `WebDesignView.astro` (my lean, simplest for a one-off single-locale page) vs. a dedicated `src/data/webdesign.ts` file for easier future editing — low-stakes, happy to do either.
5. **Referenzprojekt timing:** structurally ready either way (§3.G), but ships empty until Sandra's ava-beauty.ch permission lands per content-strategist's blocking flag — not my call to chase, just confirming the mechanism won't block the rest of the page from shipping.
