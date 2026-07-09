# SEO & AEO Report — seo-aeo-specialist

**Cycle:** first-ever review cycle (baseline audit)
**Mode:** propose only — no source files changed
**Date:** 2026-07-09

---

## 1. Priorities addressed this cycle

1. Baseline SEO/AEO audit against `docs/vision.md`'s north star: name+"Product Owner" ranking (Basel/Switzerland/e-commerce variants), `targetSeoPhrases` coverage, structured data completeness, sitemap/robots/canonical correctness, `llms.txt` quality, OG image coverage.
2. Domain input (not implementation) on content-strategist's proposed first-person rewrite of `bioShort`/`bioLong`, specifically whether `PersonSchema.astro` and `llms.txt.ts` should follow suit.

Confirmed via `WebSearch` that the site does not currently surface at all for "Daven Thill Product Owner Basel" — consistent with this being the first cycle and a `.vercel.app` domain with no prior indexing. This is a from-zero baseline, not a ranking-decline situation.

---

## 2. Findings

### 2.A Traditional SEO

**Finding 1 — Site is on a `.vercel.app` subdomain, not a branded custom domain.** (`astro.config.mjs:10`, only reference to the domain in the whole repo)
This is the single biggest structural SEO gap. `site: 'https://daventhill-portfolio.vercel.app'` is used to generate every canonical URL, hreflang alternate, sitemap entry, OG image URL, and the `llms.txt`/`robots.txt` content. A shared PaaS subdomain:
- dilutes brand-name search equity (harder to rank for "Daven Thill" specifically — vercel.app is a shared, low-trust domain from Google's perspective),
- looks less credible to recruiters clicking through from LinkedIn/CV,
- would require a one-time canonical/sitemap migration later if a custom domain is added, causing temporary ranking churn.
This is a route/infra decision outside my remit to make, but it's the top item to raise with Daven this cycle (see Open Questions).

**Finding 2 — Homepage title and meta description under-target the core phrases.** (`src/views/HomeView.astro:20-21`, `src/data/profile.ts:72-73`)
- Title = `"Daven Thill — Product Owner"` (no location/specialization keyword at all in the actual `<title>`, even though `SEO.astro:17`'s unused-for-title `siteName` constant already has `"Daven Thill — Product Owner Basel"` baked in — the better phrase exists in the code but isn't the one rendered in `<title>`).
- Meta description = `person.positioningLine` = `"Product Owner in Basel focused on data-driven and AI-powered digital products"` — 78 characters, roughly half the usable ~155-160 char budget, and it omits "Switzerland" and "e-commerce" entirely, despite both being explicitly named in `vision.md` as things this page should surface for.
- This is the highest-traffic page on the site (the one a recruiter Googling Daven's name lands on) and it's the thinnest on target-phrase coverage of any page in the codebase.

**Finding 3 — `targetSeoPhrases` in `profile.ts`/`profile.de.ts` is dead data.** (`src/data/profile.ts:83-90`, `src/data/profile.de.ts:18-25`)
Grepped the whole repo: `targetSeoPhrases` is referenced only inside the two files that define it. It isn't consumed by `SEO.astro`, any view, or `PersonSchema.astro` — not even as a `meta name="keywords"` tag (which would be low-value anyway, but at minimum the phrases aren't verified against on-page copy). Concretely, of the six EN phrases, on-page verbatim/near-verbatim coverage is:
- "Product Owner Basel" — yes (H1, positioningLine, FAQ)
- "Product Owner Basel-Landschaft" — yes, only in `home.ctaText` ("Basel-Landschaft") and the employer address
- "Product Owner Schweiz"/"Switzerland" — yes, via `person.location` in headers/footers, and CTA copy
- "Data-driven Product Owner Basel" — **not found verbatim anywhere**
- "AI Product Owner Switzerland" — **not found verbatim anywhere**
- "Digital Product Owner B2B Basel" — **not found verbatim anywhere**
The array reads as an aspirational keyword list that was never checked against shipped copy. It should function as a living checklist that content-strategist and I both validate against each cycle — right now it silently drifted from what's on the pages.

**Finding 4 — "e-commerce" is essentially absent from the two pages recruiters see first.** (grep across `src/`)
Vision.md calls B2B e-commerce "Daven's strongest specialization" and a target-audience signal. Yet `person.positioningLine` (used as homepage H1/meta/OG description) and the case-studies index intro never say "e-commerce." It only appears in `experience.ts` highlight bullets and the Skills page skill-group items — pages a visitor reaches *after* the homepage, not on it. Given this is meant to be a primary differentiator, its near-total absence from the two top-of-funnel pages is a concrete, fixable gap, not a nitpick.

**Finding 5 — Duplicate copy block, verbatim, twice on the same page.** (`src/views/HomeView.astro:41` vs. `src/i18n/strings.ts:151-154` "Why work with Daven Thill?")
`person.bioShort` is rendered directly under the hero, and the homepage FAQ answer to "Why work with Daven Thill?" (`strings.en.faq[1].answer`) is the exact same paragraph, word for word (same in DE: `strings.de.faq[1].answer` vs. `profile.de.ts` `bioShort`). This isn't a cross-page duplication concern (Google handles that fine) — it's the same block appearing twice within one HTML document, which wastes the page's unique-content budget and reads oddly to an actual visitor scrolling from hero to FAQ. Concretely SEO-relevant because this same block is also what's emitted in the `FAQPage` JSON-LD (see AEO Finding 4 below).

**Finding 6 — Case studies carry no dates anywhere** (`src/data/profile.ts:29-36`, `CaseStudy` interface).
Unlike knowledge articles (which have `publishDate` in frontmatter and display it on-page via `KnowledgeEntryView.astro:63-66`), case studies have no date field at all — not in the data model, not on the rendered page, not in structured data. For content whose entire premise is "concrete, shipped outcomes" (vision.md), the absence of "when" is a missed trust signal and an inconsistency against the knowledge articles' treatment. I'm not proposing specific dates myself (no fabrication) — see Open Questions.

**Finding 7 — Internal linking from Experience and Skills pages under-uses existing case-study/knowledge content.**
- `ExperienceView.astro` highlight bullets describe the cross-selling engine, PIM migration, Elasticsearch boost layer, and stock MVP in prose but never link to `/case-studies/ai-cross-selling`, `/case-studies/metadata-pim-migration`, etc., even though those exact case studies exist. A recruiter reading Experience has no path to the deeper proof.
- `SkillsView.astro`'s `skillLinks` map (lines 16-31) only wires up 5 of ~20 skill items to knowledge/case-study pages (Squad, Guild, Squad Health Checks, UAT, Elasticsearch). Obvious missing links: "PIM (Product Information Management)" and "Metadata management" → `/case-studies/metadata-pim-migration`; "AI and ML informed product recommendations" and "SAP sales order data" → `/case-studies/ai-cross-selling`.
This is cheap, high-value internal linking that's already 80% built (the mapping pattern exists, it's just incomplete).

**Finding 8 — Minor: `og:locale` values are non-standard.** (`src/i18n/index.ts:20-22`, used in `SEO.astro:39-40`)
`ogLocale()` returns `en_CH` / `de_CH`. Facebook's OG spec expects locales from its own supported list (e.g. `de_DE`, `en_US`, `en_GB` — no Swiss variants exist on that list), so `en_CH`/`de_CH` may simply be ignored by Facebook/LinkedIn link-preview parsers, falling back to a default. Low priority (doesn't affect Google/AI engines), but easy to fix — no functional reason not to use `en_US`/`de_DE` here since this field only affects social-preview locale matching, not any visible or factual claim.

**Finding 9 — Sitemap/robots/canonical mechanics are otherwise solid.**
Verified `dist/client/sitemap-index.xml`/`sitemap-0.xml` after a fresh build: every EN/DE page (home, experience, case-studies index + 4 details, skills, contact, knowledge index + 5 entries, privacy) is present with correct reciprocal `hreflang` alternates, and `/404` is correctly excluded via the `filter` in `astro.config.mjs:30`. `robots.txt.ts` correctly allows all the named AI crawlers (GPTBot, ChatGPT-User, ClaudeBot, anthropic-ai, PerplexityBot, Google-Extended, CCBot) plus points to the sitemap. Canonical + hreflang wiring in `SEO.astro`/`i18n/index.ts` (`buildLocalizedPaths`) is correctly reciprocal both directions, with `x-default` pointing to EN. No changes needed here beyond the domain question in Finding 1.

### 2.B AEO (answer-engine optimization)

**Finding 1 — `llms.txt` is accurate and reasonably comprehensive.** (`src/pages/llms.txt.ts`)
Verified against `dist/client/llms.txt`: it lists every page and knowledge/case-study entry in both languages with a one-line description, plus the full `bioLong` and contact details. This is in good shape and matches current site content with no drift. One gap: it doesn't explicitly restate the "why this matters for AI tools" angle (PIM/AI-consumption framing) as a standalone top-level claim — it's implicit in `bioLong` and the case-study descriptions but a dedicated one-liner near the top (e.g., "Structures product data explicitly for AI-tool consumption, not just human browsing") would make that proof point easier for an answer engine to extract as a discrete fact.

**Finding 2 — Knowledge articles are genuinely well-structured for AI extraction.** (all `src/content/knowledge/**/*.md`)
Each article leads with a direct, self-contained definition/answer in the first paragraph before any narrative build-up (e.g., `squad.md`: "A 'squad' is a small, cross-functional, largely autonomous team built around..." as sentence one), then moves to "how I apply this" narrative. This is exactly the shape that favors both Google's featured-snippet extraction and LLM answer-engine citation. No changes needed to this pattern — it should be the template for any new knowledge articles going forward.

**Finding 3 — Structured data has no `Article`/`CreativeWork` typing for case studies or knowledge concepts, and doesn't propagate the `publishDate` that already exists in knowledge frontmatter.** (`src/components/PersonSchema.astro:68-89`, `src/content.config.ts:10`)
- Knowledge entries have a `publishDate` field in their content schema, rendered visibly on-page, but it never makes it into the JSON-LD — `DefinedTerm` (line 69-75) and `FAQPage`/`Question` (line 78-89) nodes carry no `datePublished`/`dateModified`. This is a straightforward, low-risk win: thread `entry.data.publishDate` through as `datePublished` on both node types.
- Case studies get *no* structured-data type of their own at all — only the page-level `Person` + `BreadcrumbList` nodes from `PersonSchema.astro`. Given these are the core proof-of-work content the whole site is built to showcase, adding a `CreativeWork` (or `Article`) node per case study with `headline`, `description`, `author: {"@id": ".../#person"}` would let answer engines attribute the work to Daven explicitly at the structured-data level, not just via page prose. No dates exist to attach yet (see Finding 6 in Traditional SEO / Open Questions) — schema-worthy once that's resolved.
- None of the `DefinedTerm`/`FAQPage` nodes currently reference the `Person` node via `@id`/`author`, despite all living in the same `@graph`. Adding that linkage reinforces to crawlers that this expert content and the person entity are the same authority — relevant to the vision's "site as proof" positioning.

**Finding 4 — The homepage FAQ block is inconsistently third-person despite being both visible copy and `FAQPage` schema.** (`src/i18n/strings.ts:144-160`, `298-314`)
Of the 3 home FAQ answers: #1 is neutral third-person ("A Product Owner in Basel typically..."), #2 ("Why work with Daven Thill?") is third-person and is the verbatim duplicate of `bioShort` flagged above, #3 ("Does Daven Thill work with AI-powered product features?") is also third-person ("he has initiated..."). None are first person, which already breaks vision.md's "first person, always" rule for visible copy today — independent of whatever content-strategist decides for `bioShort`/`bioLong`. This is worth surfacing to content-strategist directly since it's visible, schema-carrying copy, not just profile data.

**Finding 5 — Claims are consistent across all surfaces I checked.** ("five years," PSPO cert, MediaMarkt/Manor history, endress.com Products ownership, squad tenure "~four years," AI cross-selling/PIM/Elasticsearch/stock-MVP proof points) — cross-checked `profile.ts`/`profile.de.ts`, `strings.ts`, all knowledge articles, and `llms.txt` output. No contradictions found. This matters more than it sounds: an AI engine that finds the same facts stated identically across a Person schema, an FAQ, five knowledge articles, and llms.txt has no reason to hedge or qualify when citing them. Keep this as a standing check every future cycle — it's the thing most likely to quietly break as content gets edited piecemeal.

---

## 3. Proposed changes

File-by-file, for the PM to reconcile against ux-ui-architect/content-strategist:

1. **`src/views/HomeView.astro` (title prop, line 20)** — change homepage `<title>` input from `` `${person.name} — ${person.currentTitle}` `` to something that includes location, e.g. `` `${person.name} — ${person.currentTitle} in Basel, Switzerland` ``. Content-strategist to own final phrasing/voice; flagging the mechanism only.

2. **`src/data/profile.ts` / `profile.de.ts` (`positioningLine`, lines 72-73 / 7-8)** — lengthen to use more of the meta-description budget and add "Switzerland" + "e-commerce," e.g. draft (facts only, for content-strategist to voice-adapt):
   *"Data-driven, AI-focused Product Owner based in Basel, Switzerland, specializing in B2B e-commerce — currently leading the Products section of endress.com."*
   This single field feeds `<title>` suffixing logic isn't used here since `positioningLine` also drives meta description/OG/Twitter description across the homepage, so one change covers all of those.

3. **`src/data/profile.ts` / `profile.de.ts` (`targetSeoPhrases`)** — add at least one explicit e-commerce-flavored phrase (e.g. "B2B E-commerce Product Owner Switzerland" / "B2B-E-Commerce Product Owner Schweiz"), and treat the existing array as a checklist to verify against copy every cycle rather than a write-once list. I can re-audit coverage each cycle if this becomes a standing agenda item.

4. **`src/i18n/strings.ts` (home FAQ answers, `faq` arrays in both locales)** — flag for content-strategist: rewrite all three answers to first person to match vision.md's voice rule, and de-duplicate answer #2 from `bioShort` (either a genuinely distinct answer, or accept the repetition is intentional reinforcement — but if so, shorten one instance).

5. **`src/content.config.ts` + `src/components/PersonSchema.astro`** — thread `publishDate` into the `DefinedTerm` and `Question`/`FAQPage` JSON-LD nodes as `datePublished`. Small, mechanical, no new facts invented (the date already exists in frontmatter).

6. **`src/components/PersonSchema.astro`** — add `author: { '@id': ${Astro.site}#person }` (or equivalent) to the `DefinedTerm` and `FAQPage` nodes to link them to the `Person` entity within the same `@graph`.

7. **`src/data/profile.ts` (`CaseStudy` interface) + all four case-study entries, both locales** — add an optional `datePublished`/`shipped` field once Daven confirms rough timing (see Open Questions), then surface it visibly on `CaseStudyView.astro` (matching how `KnowledgeEntryView.astro` already does it) and in a new `CreativeWork`/`Article` JSON-LD node per case study in `PersonSchema.astro`.

8. **`src/views/ExperienceView.astro`** — link each relevant highlight bullet (cross-selling, PIM migration, Elasticsearch boost, stock MVP) to its corresponding `/case-studies/{slug}` page. Straightforward addition using the same pattern already used elsewhere (`<a href={...}>`).

9. **`src/views/SkillsView.astro` (`skillLinks` map, lines 16-31)** — extend the map: "PIM (Product Information Management)" / "Metadata management" → `metadata-pim-migration`; "AI and ML informed product recommendations" / "SAP sales order data" → `ai-cross-selling` (mirror in DE map).

10. **`src/i18n/index.ts` (`ogLocale`, lines 20-22)** — change `en_CH`/`de_CH` to `en_US`/`de_DE` (or drop `og:locale:alternate` entirely) so Facebook/LinkedIn preview parsers recognize the locale. Purely a social-preview mechanic, no visible-copy or factual change.

11. **`src/pages/llms.txt.ts`** — add one explicit top-line claim about AI-consumption-oriented data structuring (see AEO Finding 1), sourced from existing `metadata-pim-migration` case study content, not new material.

None of the above require route/URL changes.

---

## 4. Input on content-strategist's first-person proposal (per PM's specific ask)

My domain-specific view, scoped to AI-citability and structured-data convention — content-strategist owns the actual voice/copy decision:

- **`PersonSchema.astro`'s `description` field (currently `person.bioShort`): recommend keeping this specific field third-person**, even if `bioShort` itself becomes first-person for on-page display. Rationale: when an answer engine synthesizes a response to "Who is Daven Thill?" it naturally produces third-person prose ("Daven Thill is a Product Owner in Basel who..."). A third-person canonical description in the entity's own structured data is the version most likely to be lifted near-verbatim by an AI Overview or chat answer, because it already matches the grammatical shape the engine would generate. A first-person schema description ("I am a Product Owner...") still gets parsed correctly as a fact, but is less directly quotable in a third-party answer context.
  - **Practical implication:** if `bioShort` moves to first person, don't have `PersonSchema.astro` inherit it directly — add a small dedicated field (e.g. `bioShortSchema` in `Person` interface) that's a plain third-person restatement of the same facts, authored by content-strategist alongside the first-person version. Not a new fact, just a second grammatical rendering of the same one.

- **`llms.txt.ts`'s use of `bioLong`: no strong objection to letting it go first-person along with the visible copy.** llms.txt is consumed as a manifest/README by AI crawlers, not as a third-party "about this person" fact card the way schema.org `Person.description` is — LLMs handle first-person narrative in these files fine (it's the same convention plenty of `llms.txt`/`README` files already use when a person or project "speaks" about themselves). The one thing to preserve is that the surrounding scaffolding (page-list one-liners like "`[Home]: overview, positioning, and current role`") stays neutral/descriptive as it already is — that's not first- or third-person, it's just navigation, and shouldn't be forced into first person awkwardly.

- **The homepage FAQ answers (Finding 4 above) should go first-person along with `bioShort`/`bioLong`.** These read naturally in first person ("Why work with me?" → "Because I...") and, if anything, first-person Q&A answers read as more authentic/trustworthy in an actual rich-snippet or AI-answer context than the current impersonal third-person phrasing — this is the opposite case from the `Person.description` field, because a Q&A answer's whole premise is "hearing from Daven directly," whereas a `Person` schema description's premise is "a neutral fact card about this entity."

**Net recommendation:** first-person for all visible copy including the FAQ, but a deliberately-maintained third-person twin for the `Person.description` schema field only. This is a small amount of extra content-strategist authoring work (one extra short paragraph), not a structural change.

---

## 5. Cross-cutting flags

**To ux-ui-architect / PM (route implications):**
- None of my findings require a URL/route change this cycle. The domain question (Finding 1) is infra/hosting, not routing, but affects the same surface area (`astro.config.mjs`) ux-ui-architect may also touch — flagging so we don't collide.

**To content-strategist:**
- Homepage positioningLine/meta description needs "Switzerland" + "e-commerce" added (Finding 2/4) — coordinate wording with whatever first-person pass you're doing on `bioShort`/`bioLong`, since `positioningLine` is a separate field but should stay consistent in tone.
- Home FAQ answers are inconsistently third-person today, independent of the bioShort question — recommend fixing as part of the same first-person pass (§4 above).
- Case studies have no dates — need your input (with Daven) on whether/how to date them before I can add structured data or a visible date, see Open Questions.
- `targetSeoPhrases` array should get an e-commerce-flavored phrase added, and going forward we should jointly check new copy against this list rather than letting it silently drift out of sync with what's on the pages (Finding 3).

---

## 6. Open questions for Daven

1. **Is a custom domain (e.g. `daventhill.com`/`daventhill.ch`) in scope?** This is the highest-leverage traditional-SEO change available and currently blocked purely by domain ownership, not code. If yes, I'll plan the canonical/sitemap/OG migration for a future cycle once it's live; if no (e.g. deliberately staying on Vercel's subdomain for now), I'll drop this from future reports and optimize within that constraint.
2. **Do you want case studies to carry dates?** If so, roughly when did each ship — the AI cross-selling engine, PIM migration, Elasticsearch boost layer, and stock-visibility MVP — even approximate quarters would let me add both a visible "shipped" date and `datePublished`/`dateModified` structured data. I won't invent these myself per the no-fabrication rule.
3. Any objection to the `og:locale` value change (`en_CH`/`de_CH` → `en_US`/`de_DE`) purely for Facebook/LinkedIn preview-parser compatibility? It's a metadata-only change with no visible or factual impact, flagging since it touches `i18n/index.ts` shared code.
