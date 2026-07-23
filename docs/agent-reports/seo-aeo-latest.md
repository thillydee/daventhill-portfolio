# SEO & AEO Report — seo-aeo-specialist

**Cycle:** first real Google Search Console data (Web search, last ~10 days: 2026-07-13 to 2026-07-23)
**Mode:** PROPOSE ONLY — no source files changed
**Date:** 2026-07-23

---

## 0. Data-quality caveat (read before acting on anything below)

Total dataset: **6 clicks, ~91 impressions, over ~10 days** on a brand-new site. Every query is single- or low-double-digit impressions; several "top" pages have 0 clicks on single-digit impressions, which is statistically meaningless on its own. I've flagged a confidence level on every finding below. Nothing here should trigger a large content rewrite — these are small, targeted, reversible tweaks to copy that's already thin on the exact phrases people are typing, not a strategy pivot.

---

## 1. Priorities addressed this cycle

1. PIM-migration query cluster near page 1 (`pim datenmigration`, `pim daten migration`, `pim migration`) — audited `/de/case-studies/metadata-pim-migration`'s title, meta description, H1, body copy.
2. Near-zero CTR despite real impressions on case-study/knowledge pages — split into "position problem" vs "snippet problem" per page.
3. Mobile vs. desktop CTR gap — quick flag, not a workstream.
4. `censhare pim` / `censhare schweiz` vendor-comparison queries — checked whether "Censhare" is surfaced anywhere prominent on the page that already discusses replacing it.

---

## 2. Findings

### 2.A The PIM-migration cluster — Finding: **the title and meta description are long enough that the AI/KI differentiator gets truncated in the SERP snippet** (high confidence on the mechanism, low confidence on ranking impact given thin data)

Source: `src/data/profile.de.ts:112-122` (case study data), rendered via `src/components/SEO.astro` (title/meta) and `src/views/CaseStudyView.astro:44` (H1 — same string as title, no separate field).

- **Title tag** (`caseStudy.title` + `SEO.astro`'s `" | Daven Thill"` suffix) = *"Migration der Produktdaten in ein modernes PIM – mit Blick auf die Nutzung durch KI | Daven Thill"* — **97 characters**. Google typically renders ~55-65 characters before truncating. The clause carrying the actual differentiator — *"mit Blick auf die Nutzung durch KI"* (AI-consumption framing) — sits at the very end and is almost certainly cut from the visible SERP title entirely.
- **Meta description** (`caseStudy.summary`) = *"Leitung einer vollständigen Datenmigration von einem veralteten DAM in ein PIM-System sowie Definition, wie Produktdaten sowohl für die Website als auch für KI-Tools strukturiert werden sollen."* — **193 characters**, versus Google's ~155-160 char typical desktop cutoff. Same pattern: *"...als auch für KI-Tools strukturiert werden sollen"* is the part most likely truncated.
- Net effect: for the queries that already include "KI" (`pim ki` pos 40.5, `ki und pim` pos 43, `pim künstliche intelligenz` pos 59, `zukunftsfähiges pim` pos 90), the page ranks noticeably worse than for the pure-migration cluster (`pim daten migration` pos 9.2, `pim migration` pos 9.67, `pim datenmigration` pos 12.17). That's consistent with the AI-related phrasing being buried at the tail of an over-length title/description rather than stated up front — both a likely on-page-relevance signal and, once ranking improves, a CTR problem (searchers can't see the differentiator to click on it).
- **Compound-word gap**: none of the target queries' exact compound forms — *"PIM-Datenmigration"*, *"Datenmigration"* (only appears in the meta description, not the title), *"Produktdatenmigration"* — appear in the **title**, H1, or body copy. The title uses *"Migration der Produktdaten"* (split across words) rather than the compound German searchers are actually typing. German search rewards/bolds exact compound matches in the SERP even when Google's stemming would still rank the page; right now none of that bolding is available in the title.

**Confidence:** High that the truncation mechanism is real (character-counted, not inferred). Low-to-moderate on how much ranking lift this buys — position 9-12 → top 10 is plausible from a relevance/CTR-signal improvement, but 3 queries at 3-6 impressions each is too thin to prove causally after the fact.

### 2.B CTR vs. position — page-by-page split (priority 2)

Cross-referencing page-level average position against page-level CTR, since GSC's export doesn't cross query×page:

| Page | Impr | Pos | CTR | Diagnosis |
|---|---|---|---|---|
| `/de/case-studies/metadata-pim-migration` | 36 | 19.86 | 0% | **Position problem**, page-level. But the *specific* target-cluster queries sit at 9-12 (see 2.A) — the page-level average is dragged down by weaker-ranking tail queries (KI variants, `zukunftsfähiges pim`). At position ~20 for the aggregate, 0% CTR is expected regardless of snippet quality — nobody scrolls that far. Fix ranking first (2.A), snippet quality matters once it's closer to page 1. |
| `/case-studies/relevance-sorting` | 29 | 47 | 0% | **Position problem, more severe.** The single highest-impression query in the whole dataset, `search relevance tuning` (8 impressions), sits at position **61.75** — page 6-7. Neither the case study (`src/data/profile.ts:194-204`) nor the related knowledge article `src/content/knowledge/en/enhancing-elasticsearch-relevance.md` use the exact phrase "search relevance tuning" or "search relevance optimization" anywhere — title, meta, or body. This looks like a genuine content-relevance gap, not a truncation issue (both title and meta are already under budget — 69 and 141 chars respectively). Worth a phrase-level tweak (see §3) but this is a bigger lift than the PIM cluster; don't expect a page-1 jump from one cycle. |
| `/knowledge/` (EN index) | 7 | 6.71 | 0% | **Likely a snippet problem**, the clearest one in this dataset. Position 6.71 is genuine page-1 real estate, yet the title renders as just *"Knowledge \| Daven Thill"* (`src/i18n/strings.ts:117`, 23 characters total) — generic, gives a searcher no reason to click over a more specific-looking result. The description (`strings.ts:118-119`) is fine but a bare one-word title is doing a lot of the damage. **Caveat: n=7, could easily be noise** — flagging as the best snippet-fix candidate in the dataset, not a certainty. |
| `/de/knowledge` | 7 | 15 | 0% | Position problem (page 2) — snippet quality is moot until it ranks better. |
| `/de/skills` | 7 | 20.29 | 0% | Position problem. |
| `/de/knowledge/squad` | 4 | 17.5 | 0% | Position problem, thin sample. |
| `/de/knowledge/user-acceptance-testing` | 3 | 57 | 0% | Position problem, thin sample. |
| `/knowledge/enhancing-elasticsearch-relevance` | 2 | 31 | 0% | Position problem, thin sample. |
| `/case-studies`, `/de/case-studies` | 4 each | 2.25 / 3.75 | 0% | Position is excellent; 0% CTR on 4 impressions is not a meaningful signal either way — too thin to act on. |
| `/de/` , `/` (homepage) | 12 / 5 | 1.58 / 2.6 | 25% / 60% | Working as intended — no action. |

**Answer to priority 2:** mostly a position problem across the board given how young/thin the index is — the one page where "improve the snippet, not just the ranking" clearly applies is the EN `/knowledge/` index, because it's the only non-homepage page with both a strong position (top 10) and zero clicks on a bland title. Everywhere else, ranking is the binding constraint right now.

### 2.C Mobile vs. desktop CTR (priority 3 — quick note only)

Mobile: 30% CTR on 10 impressions / desktop: 3.7% CTR on 81 impressions, avg. position 13.4 vs. 32.56. The gap is almost entirely explained by position, not device — mobile impressions happen to be concentrated on the well-ranking homepage queries, desktop impressions are spread across the long tail of poorly-ranking pages. **This isn't a mobile-UX or mobile-snippet signal yet** — it's a sampling artifact of which pages happened to serve on which device. Worth re-checking next cycle once there's more volume per device; not worth any action now.

### 2.D `censhare pim` / `censhare schweiz` (priority 4)

Source: grepped "Censhare" across `src/` — it appears in exactly two places, both mid-paragraph, never in a title/H1/meta: `src/data/profile.ts:187` / `profile.de.ts:117` (case study **problem** paragraph) and the matching `ExperienceView.astro` highlight bullet. It is **absent from the case study's title, meta description, and summary** — i.e., absent from everything Google actually shows in a search snippet.

- `censhare pim`: 2 impressions, position 23.5 — consistent with the case study page's overall ~pos-20 average (2.B). Plausible this is the metadata-pim-migration page, ranking on body-copy relevance alone since the term isn't in the title/meta.
- `censhare schweiz`: 1 impression, position **1**. Too thin to draw a real conclusion (n=1) — and I'd guess this is more likely an artifact of the homepage's already-strong "Schweiz" ranking (pos 1.58-2.6 sitewide) than the case study specifically ranking #1 for a vendor name it doesn't feature prominently. Flagging as **very low confidence**, not a proof point to build on yet.

**Easy win available:** "Censhare" is a distinctive, low-competition term (it's a specific enterprise DAM product) that the site already legitimately discusses replacing — this is exactly the kind of long-tail, low-volume/high-relevance query a young site can realistically win. Pulling it from mid-paragraph into the meta description (which has room, see draft in §3) is a one-line, non-spammy change that costs nothing and directly targets both `censhare pim` and any future "censhare alternative"/"censhare vs" style queries.

---

## 3. Proposed changes

All copy below is a **draft for content-strategist to voice-adapt and Daven to sign off on** — I'm proposing the mechanism and the target phrases, not final wording. Facts are unchanged from what's already on the page.

1. **`src/data/profile.de.ts:112-122` — shorten and re-order the `metadata-pim-migration` title, lead with the compound-word target phrase, keep "KI" inside the visible SERP budget.**
   Draft title (51 chars, 65 with the `| Daven Thill` suffix, vs. current 97):
   > `PIM-Datenmigration & KI-Struktur: Censhare abgelöst`
   This puts "PIM-Datenmigration" (compound, matches the query cluster exactly), "KI" (currently truncated), and "Censhare" (currently absent from any snippet-visible field, §2.D) all inside the visible title — three separate findings addressed in one edit.

2. **Same file, `summary` field — shorten to fit within ~150 chars and keep "KI-Tools" from being truncated.**
   Draft (141 chars, vs. current 193):
   > `Wie ich die Produktdatenmigration von Censhare in ein modernes PIM leitete – Datenstruktur für Website und KI-Tools von Anfang an mitgedacht.`
   Adds "Produktdatenmigration" (exact compound match for the `produktdatenmigration` query) and "Censhare" up front; keeps "KI-Tools" inside the truncation budget this time.

3. **`src/data/profile.ts:181-192` (EN `relevance-sorting`) — work the exact phrase "search relevance tuning" into the title or meta description.**
   This is the single highest-impression non-branded query in the whole dataset (8 impressions, worst position of any tracked query at 61.75) and the phrase doesn't appear verbatim anywhere on the page today. Draft title (55 chars, 69 with suffix — same length budget as current, just reordered to lead with the query phrase):
   > `Search Relevance Tuning: Elasticsearch + Business Logic`
   Draft meta (138 chars):
   > `How I tuned search relevance on endress.com: a business-logic boost layer on top of Elasticsearch, without replacing its relevance engine.`
   Flagging this as a bigger lift than item 1 — position 61 to page 1 isn't a one-cycle outcome — but the phrase gap is real and cheap to close.

4. **`src/i18n/strings.ts:117` (EN `knowledge.title`) — replace the bare `"Knowledge"` title with something that hints at content, since this page already has a good position (6.71) and needs a CTR fix, not a ranking fix.**
   Draft: `"Product & PIM Knowledge Base"` or `"Product Ownership Knowledge Base"` — content-strategist to pick the phrasing that best matches voice; the mechanism is just "don't ship a single generic word as the only signal in the SERP title" for a page that's already earning page-1 impressions.

5. **Optional/lower-priority mechanism proposal: add an optional `metaTitle?: string` to the `CaseStudy` interface (`src/data/profile.ts:34-41`).** Right now `caseStudy.title` powers both the `<title>` tag and the on-page `<h1>` (`CaseStudyView.astro:32,44`) — there's no way to keep a longer, fully descriptive H1 while shipping a shorter, snippet-safe `<title>`. If content-strategist would rather keep the current long, descriptive H1 style than shorten it, this field would let title-tag length be solved independently of on-page heading style. Not needed if content-strategist is fine shortening the H1 itself (draft 1 above shortens both at once, which is simpler).

---

## 4. Cross-cutting flags

**To content-strategist:**
- Items 1-4 above are copy drafts for your sign-off — I've kept facts unchanged (same problem/approach/outcome, same "AI-tool consumption" and "Censhare replacement" claims already live on the page) and only touched title/meta/description length and phrase selection.
- Worth a standing check going forward: when a case study or knowledge article's title/summary exceeds ~60/~155 characters, flag it during drafting rather than catching it in a GSC review months later — this cycle's clearest finding (2.A) was a truncation problem invisible without literally counting characters.

**To ux-ui-architect:**
- No route changes proposed this cycle. If item 5 (optional `metaTitle` field) moves forward, it's data-model only, no URL/routing impact.

**Carried over from prior cycles, not re-audited this cycle (out of scope for this GSC-driven review, noting only so it isn't lost):** case studies still carry no `CreativeWork`/`Article` JSON-LD (flagged 2026-07-09, still open — case-study dates were the blocker); still an open decision-log item.

---

## 5. Open questions for Daven

1. Comfortable with the shorter, more phrase-dense titles/descriptions in §3 (items 1-3), or do you want to keep the current fuller, more narrative style even at the cost of mid-sentence truncation in search results? This is a real tradeoff — the current copy reads better as prose, the shortened drafts are more SERP-effective.
2. Any objection to naming "Censhare" in the meta description (item 2)? It's already public information on the page itself (mid-paragraph), this just makes it visible in search snippets too — flagging in case there's a reason (e.g. vendor relationship sensitivity) it was kept out of the headline fields originally, since I don't have that context.
3. Given the dataset is only ~10 days old: do you want another GSC-driven review next cycle (2 weeks, more data) before making further snippet changes beyond what's proposed here, or is this cadence fine as a standing input to every cycle going forward?
