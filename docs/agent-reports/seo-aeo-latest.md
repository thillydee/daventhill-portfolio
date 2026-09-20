# SEO & AEO Report — seo-aeo-specialist

**Cycle:** New initiative — `/web` (or `/webdesign`) German-only side-business offer page
**Mode:** PROPOSE ONLY — no source files changed
**Date:** 2026-09-18

---

## 1. Priorities addressed this cycle

1. Determine exactly what breaks when a page exists with no EN/DE counterpart, given every current mechanism (`SEO.astro`, `Header.astro`, `@astrojs/sitemap` i18n, `src/i18n/`) assumes paired locale pages.
2. Propose the minimal, correct fix, with concrete prop/type changes.
3. Recommend schema.org type(s) for the offer page itself vs. what should be recommended for future client sites (not conflated).
4. Propose title/meta/OG-image handling.
5. Flag the sitemap-inclusion question as open, with a recommendation.
6. Assess `Offer`/`AggregateOffer` schema for the three pricing packages.

This is scoped as **propose-only / architecture review** — no `/web.astro` file, and no edits to `SEO.astro`, `Header.astro`, `BaseLayout.astro`, `PersonSchema.astro`, or `astro.config.mjs` were made. Priorities #1–2 got the majority of the effort per the PM's instruction, since getting the locale-pairing change wrong breaks correctness on every existing page, not just the new one.

---

## 2. Findings

### 2.A `SEO.astro` — hard requirement on `localizedPaths`, unconditional hreflang emission (breaks if naively reused)

`src/components/SEO.astro:10` declares `localizedPaths: Record<Locale, string>` as **required**, and unconditionally emits, from lines 21–22 and 29–31:

```astro
const enURL = new URL(localizedPaths.en, Astro.site);
const deURL = new URL(localizedPaths.de, Astro.site);
...
<link rel="alternate" hreflang="en" href={enURL} />
<link rel="alternate" hreflang="de" href={deURL} />
<link rel="alternate" hreflang="x-default" href={enURL} />
```

and `og:locale:alternate` at line 40, unconditionally.

Concretely, for a German-only `/web` page:
- If the new page is built like every other page (passing `localizedPaths: { en: '/web', de: '/web' }` or similar), the site would emit `hreflang="en"` pointing at a page whose `<html lang>` and content are German — a **factually false hreflang claim**. This is a real, documented Google Search Console issue class ("hreflang points to page with different lang"), and at minimum wastes crawl signal; at worst it can make Google distrust the whole hreflang cluster.
- If `localizedPaths.en` were left as an empty string or omitted, `new URL('', Astro.site)` resolves to the site root (`/`) — an hreflang="en" pointing at the homepage, equally wrong.
- `og:locale:alternate` would likewise falsely claim an English variant exists.

**This is the mechanism that must change**, not be worked around per-page.

### 2.B `Header.astro` — lang-switcher link has no valid target

`src/components/Header.astro:30`: `const switchHref = localizedPaths[otherLocale];`. For a German-only page, `otherLocale` resolves to `'en'`, and there is no English URL to switch to. Two render sites use `switchHref` unconditionally: the desktop nav link (lines 56–62) and the mobile nav link (lines 106–108). If `localizedPaths` is simply omitted (once made optional, see below), `switchHref` becomes `undefined` and both `<a href={undefined}>` render a language-switch link that goes nowhere — a visible broken/dead link in the header on every viewport, on the one page most likely to be shared directly with prospective clients.

### 2.C `astro.config.mjs` / `@astrojs/sitemap` i18n — verified safe, no change needed

Read `node_modules/@astrojs/sitemap/dist/utils/parse-i18n-url.js` and `generate-sitemap.js` directly rather than assuming. The mechanism: for every URL in the sitemap, it strips the locale prefix to get a "path key", groups all URLs sharing that key, and only emits `<xhtml:link>` hreflang annotations for groups with **more than one** member (`if (links.length <= 1) return undefined;`). A lone `/web` page with no `/de/web` counterpart simply forms a group of one — it's included in the sitemap as a plain URL with zero alternate-language annotations. **No error, no false alternates, no config change required here.** This one is a non-issue; flagging it as verified rather than assumed since the task asked to check, not guess.

### 2.D `src/i18n/index.ts` — `buildLocalizedPaths` has no way to express "no alternate"; doesn't need one

`buildLocalizedPaths(basePath)` (lines 29–34) always returns both `en` and `de` keys — it's a pure path-deriver for the *paired* case and every existing page calls it. It does **not** need to grow an "opt-out" mode itself; the correct fix is at the consumer side (`SEO.astro`/`Header.astro`/`BaseLayout.astro`): the new page simply never calls `buildLocalizedPaths` and never passes a `localizedPaths` prop at all. This keeps `buildLocalizedPaths` untouched and paired pages unaffected.

### 2.E `<html lang>` — already correct once `locale="de"` is passed, no special-case needed

`BaseLayout.astro:49` sets `<html lang={htmlLang(locale)}>`, and `htmlLang('de')` (`src/i18n/index.ts:16-18`) returns `'de-CH'` already. This is driven purely by the `locale` prop, independent of `localizedPaths`. So contrary to the brief's suggestion that `<html lang>` might need to bypass the normal prop flow — **it doesn't**. Passing `locale="de"` to `BaseLayout` on the new page is sufficient and consistent with every other DE page on the site. No hack required.

### 2.F `PersonSchema.astro` / structured data — no `Service`/`Offer` node type exists yet

`src/components/PersonSchema.astro` currently supports `Person`, `ProfilePage`, `BreadcrumbList`, `DefinedTerm`, `CreativeWork`, and `FAQPage` graph nodes (lines 41–126). There is no `Service`/`Offer`/`LocalBusiness` node type. Adding one is additive (new optional prop, same pattern as `creativeWork`), not a rework.

### 2.G OG image pipeline — additive, no special-casing needed

`src/pages/og/[...slug].ts` builds its `pages` record from two sources: the `addLocalePages()` loop (static site sections, run once per locale) and a loop over `profile.caseStudies` / the knowledge content collections. None of these three sources fit a one-off, non-collection, single-locale page. The clean fix is a fourth, unconditional entry — `pages['web'] = { title: ..., description: ... }` — added once, outside the locale loop, alongside the existing `pages[...]` assignments (lines 12–39). `astro-og-canvas`'s `OGImageRoute` just needs a key matching the slug requested at `/og/<slug>.png`; it has no requirement that every key be locale-paired.

---

## 3. Proposed changes (minimal, additive, backward-compatible)

All of these keep existing call sites — which always pass `localizedPaths` — working exactly as before. Nothing here changes behavior for any existing page.

**`src/components/SEO.astro`**
- Change `localizedPaths: Record<Locale, string>` → `localizedPaths?: Record<Locale, string>`.
- Guard `enURL`/`deURL` construction and the three `<link rel="alternate">` tags behind `{localizedPaths && (...)}`.
- Guard `og:locale:alternate` behind the same condition; keep `og:locale` (single-locale) unconditional — it's always correct since it's derived from `locale`, not `localizedPaths`.

**`src/components/Header.astro`**
- Change `localizedPaths: Record<Locale, string>` → `localizedPaths?: Record<Locale, string>`.
- `const switchHref = localizedPaths?.[otherLocale];`
- Wrap both the desktop (lines 56–62) and mobile (lines 106–108) lang-switch `<a>` blocks in `{switchHref && (...)}` so the link simply doesn't render rather than rendering broken.

**`src/layouts/BaseLayout.astro`**
- Change `localizedPaths: Record<Locale, string>` → `localizedPaths?: Record<Locale, string>` in `Props`. No other change needed — it already just passes the prop through to `SEO` and `Header`, both of which now handle `undefined`.

**New page (out of scope to author this cycle, but for whoever builds it):**
```astro
<BaseLayout
  title="…"
  description="…"
  path="/web"
  ogImageSlug="web"
  locale="de"
  {/* no localizedPaths prop at all */}
/>
```
This is the entire "opt out of the locale-pair mechanism" story — omit the prop, everything downstream degrades cleanly.

**`src/pages/og/[...slug].ts`**
- Add one line near the other `pages[...]` assignments: `pages['web'] = { title: '<DE title>', description: '<DE description>' };` (single entry, not locale-looped).

No change needed to `astro.config.mjs` (§2.C) or `src/i18n/index.ts` (§2.D).

---

## 4. Structured data recommendation

**(a) The offer page itself → `Service`, not `LocalBusiness`/`ProfessionalService`.** Daven has no fixed business address, storefront, or opening hours for this freelance side offering — it's not a registered walk-in business. Note that schema.org's `ProfessionalService` is a **subtype of `LocalBusiness`**, so it inherits the same implicit expectations (Google's structured-data guidance ties `LocalBusiness` rich-result eligibility to real `name`+`address`+`telephone`). Using either type here without a real address would mean either fabricating one (against the hard rule — don't fabricate structured-data claims) or shipping incomplete/invalid markup that won't be rich-result eligible anyway. Plain `Service` requires neither: recommend
```json
{
  "@type": "Service",
  "provider": { "@id": ".../#person" },
  "areaServed": "Basel-Landschaft" /* or "CH", matching PersonSchema's existing address.addressRegion */,
  "serviceType": "Webdesign für KMU",
  "name": "…",
  "description": "…"
}
```
threaded through `PersonSchema.astro` the same way `creativeWork` is (new optional `service?: ServiceInput` prop, one more `if (service) graph.push({...})` block) — additive, no rework of the existing graph.

**(b) Future client sites this service builds → separate concern, not this page.** Those *are* real local SME businesses with real addresses/hours, so `LocalBusiness` (or a more specific subtype matching each client's actual business, e.g. `Restaurant`, `Store`, `ProfessionalService` for a real consultancy) is the right recommendation **there** — with real data pulled from the client, never fabricated. Flagging this explicitly so it isn't conflated with (a): don't build this now, it's a deliverable-template decision for whenever the first client site ships.

---

## 5. Meta / title / OG image

- **Title:** something like *"Webdesign für KMU in Basel | Daven Thill"* — fits `SEO.astro`'s `fullTitle` logic (title already contains "Daven Thill" pattern works either way) and stays inside the ~55–65 char SERP render budget per the lesson from the 2026-07-23 GSC cycle (see decision-log — don't repeat the PIM-page truncation mistake on a brand-new page).
- **Meta description:** ~150–160 chars, lead with the concrete offer (KMU web design, Basel, fixed packages) rather than narrative build-up — matches the AEO principle of clear direct statements near the top.
- **OG image:** no new mechanism needed — add `pages['web']` to `src/pages/og/[...slug].ts` (§3) and pass `ogImageSlug="web"` to `BaseLayout`. Works exactly like every other non-collection page (`experience`, `skills`, `contact`).
- Final copy (title/description wording) should go to content-strategist — I'm scoping the mechanism and character budget, not writing the German marketing copy.

---

## 6. Sitemap inclusion — open question, my recommendation

**Recommendation: include it in the sitemap, don't `noindex` it.** Reasoning: the sitemap grouping mechanism (§2.C) is inert for a single unpaired page — being in the sitemap doesn't force ranking or push it into "webdesign Basel" competition, it just makes the page crawlable, which it should be as a live page. There's no per-page `noindex` mechanism in `SEO.astro`/`BaseLayout.astro` today, so getting *zero* organic discoverability would require a small additive change (a `noindex?: boolean` prop threaded into a `<meta name="robots">` tag) — doable, but it's a real trade-off worth Daven's explicit call, not mine to make.

**Open question for Daven:** do you want this fully excluded from search (add `noindex,follow` — visible/linkable but not indexed) while it's outreach-only, or is "in the sitemap but with zero backlinks/no nav entry so it's effectively undiscoverable without the direct URL" good enough? Related: is this page going to be linked from the site nav/footer at all, or purely a URL you hand out directly? If it's never linked from anywhere on the site, that alone limits organic discovery far more than the sitemap question does — worth deciding with ux-ui-architect before this ships, since nav placement is their territory, not mine.

If a `noindex` toggle is wanted, the sitemap's existing `filter: (page) => !page.includes('/404')` (`astro.config.mjs:30`) could also just add `&& !page.includes('/web')` as a second gate — cheap, no schema changes needed either way.

---

## 7. Package/pricing schema (`Offer`) — optional, but cheap enough to include now

Daven's brief says `AggregateOffer`; I'd steer away from that specifically — `AggregateOffer` is meant for one product with a price *range* (e.g. driven by variants or reviews), not three distinct named packages. The correct pattern for a tiered service menu is an `OfferCatalog` with three `Offer` children, nested under the `Service` node from §4:

```json
"hasOfferCatalog": {
  "@type": "OfferCatalog",
  "name": "Pakete",
  "itemListElement": [
    { "@type": "Offer", "name": "…", "price": "1200", "priceCurrency": "CHF" },
    { "@type": "Offer", "name": "…", "price": "2800", "priceCurrency": "CHF" },
    { "@type": "Offer", "name": "…", "price": "4200", "priceCurrency": "CHF" }
  ]
}
```

Unlike the GSC-cycle precedent for *not* over-investing (that was about spending copywriting effort on speculative FAQ content with no signal yet), this is markup-only over pricing text that's already going to be on the page verbatim — not fabricated, not speculative, near-zero incremental cost. **Recommendation: include it in v1**, but it's genuinely optional and safe to defer to a follow-up cycle if Daven wants to ship the page faster; either way it should stay inside the same `service` prop/graph addition from §4, not a separate mechanism.

---

## 8. Cross-cutting flags

- **ux-ui-architect:** nav/footer placement decision for `/web` (linked from main nav, footer-only, or unlinked/outreach-only) directly affects the sitemap/indexing recommendation in §6 — sequence that decision before this ships. Also: URL choice (`/web` vs `/webdesign`) is route-naming, which is ux-ui's call per my hard rules, not mine — I'm not recommending one over the other.
- **content-strategist:** page title/meta copy (§5) and the `Service`/`OfferCatalog` `name`/`description` strings (§4, §7) need real German copy — I've scoped structure and character budgets only, not final wording. Also owns writing the offer/package copy itself, which doesn't exist in `profile.ts`/`profile.de.ts` yet (confirmed — no pricing/package data currently in the codebase, this is entirely new content).
- **PM/Daven:** the `service` prop addition to `PersonSchema.astro`/`BaseLayout.astro` (§4) and the `localizedPaths` optionality change (§3) are the two actual code changes this cycle's findings imply — both additive/backward-compatible, but should land as one coordinated PR with whoever builds `/web.astro`, not shipped by seo-aeo-specialist alone ahead of the page existing.

---

## 9. Open questions for Daven

1. **Indexing (§6):** `noindex` for now (outreach-only) vs. sitemap-included-but-unlinked vs. fully open? And is the page going to be linked from site nav/footer at all?
2. **`/web` vs `/webdesign`** — no SEO-material difference either way (neither is currently in `targetSeoPhrases`); ux-ui's call on which reads better, flagging only that it exists.
3. **Ship the `OfferCatalog`/`Offer` pricing schema now (§7) or defer** — my recommendation is now, since it's low-cost, but it's genuinely optional for v1.
4. **`areaServed` value** for the `Service` schema (§4) — "Basel-Landschaft" (matching `PersonSchema`'s existing `address.addressRegion`) vs. broader "Basel" or "Nordwestschweiz" — depends on how wide a catchment Daven actually wants to signal for this side-business.
