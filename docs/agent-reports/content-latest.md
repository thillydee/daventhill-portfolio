# Content Strategist Report — Cycle: 2026-09-18

Mode: **propose only**. No source files were edited. `docs/vision.md` and `docs/decision-log.md` were read in full before this draft. This cycle is unusual: it's not a revision of existing PO content, it's ground-up German copy for a new, separate offer (freelance webdesign for local Basel SMEs) that will presumably live on its own page/route — routing, nav placement, and page architecture are explicitly out of scope for me this cycle (ux-ui-architect's territory) and structured-data/schema choices are seo-aeo-specialist's; I flag copy-relevant touchpoints for both at the end.

Running in parallel with ux-ui-architect and seo-aeo-specialist per the PM's brief.

---

## 1. Priorities addressed this cycle

1. Draft full, ready-to-ship German copy for every section of the new webdesign-offer page, in first person, matching the site's existing DE voice register.
2. Check whether the hero/intro concretely lands the "PO who also builds sites, not an agency" positioning without reading as a disclaimer — give 1–2 concrete hero-line options.
3. Flag the Sandra/ava-beauty.ch reference-project permission gap as a real blocker.
4. Run a voice/tone consistency check against the site's established DE register and fix anything in the brief's own wording that reads like agency marketing copy rather than Daven's direct, concrete voice.
5. Flag (not decide) anything copy-relevant that touches page architecture, routing, or schema.

---

## 2. Findings

**Voice baseline used for this draft.** Checked against `src/data/profile.de.ts` and all six `src/content/knowledge/de/*.md` files. Three consistent traits carry across all existing DE copy, and I've held this draft to the same bar:

- **Formal "Sie," not "Du."** Every existing DE CTA/contact string uses formal address (`src/i18n/strings.ts:215` "Lassen Sie uns über Ihr Produkt sprechen", `:261` "Nehmen Sie Kontakt mit Daven Thill auf"). I kept "Sie" throughout the new page rather than switching to "Du" for a "friendlier local business" register — consistency with the rest of the site wins, and Sie is the unmarked default in Swiss B2B contexts anyway, including with tradespeople/SMEs.
- **Swiss orthography — no ß, ever.** Confirmed zero occurrences of "ß" across every DE file on the site. Used `ss` throughout (`dass`, `heisst`, `grösser`, `Strasse`, `muss`).
- **Concrete over evocative.** Existing copy favours plain mechanism-description sentences ("Ich verantworte das Metadaten-Management...", "Ich initiierte und leitete...") over adjective-stacking. No "einzigartig," "massgeschneidert," "ganzheitlich," "State-of-the-art" anywhere in the DE corpus (the EN site uses "state-of-the-art" once, in `vision.md` itself, describing the site's own execution — not in on-site copy, and not a DE pattern to import).

**Where the brief's own wording drifted toward agency-speak** (fixed in the draft below, noted here so the reasoning is visible):

- "Leistungspakete" (section heading in the brief) is fine as a category label but reads bureaucratic as page copy. Draft uses it only as a section kicker, not in running sentences.
- "individuelles Design (keine Vorlage)" is a claim, not a description — agencies say this too. Draft keeps the fact (no template) but ties it to a concrete consequence ("für den Betrieb gebaut, nicht aus einem Baukasten mit hundert anderen Websites") rather than asserting "individuell" as a selling adjective on its own.
- "Bewertungs-Mechanik" (Paket 3) is internal jargon — draft translates it to what it actually is in the customer-facing copy (a QR card that prompts a Google review after the appointment) and keeps "Bewertungs-Mechanik" only as an optional internal parenthetical.
- The brief's problem section lists "Ladezeit, mobile Darstellung, fehlende lokale Sichtbarkeit" as bullet fragments — turned into causal, concrete sentences (a slow site or a broken mobile layout doesn't just look bad, it's why the phone doesn't ring) rather than a checklist, matching how `enhancing-elasticsearch-relevance.md` and `squad.md` build an argument in prose rather than listing symptoms.
- The brief's own honesty pitch ("Diese Offenheit unterscheidet das Angebot von Agenturen, die alles verkaufen wollen") is good and kept close to verbatim — it's exactly the kind of concrete, checkable claim vision.md's brand voice section wants ("no unverifiable superlatives"), and it's a genuine differentiator, not marketing filler.

---

## 3. Positioning check — hero framing

The brief's ask ("Product Owner aus Basel, der nebenberuflich Websites baut — nicht Widerspruch, sondern Verkaufsargument") is easy to botch by hedging it into an apology ("Auch wenn ich hauptberuflich..."). The draft below avoids any "auch wenn / trotzdem / nebenbei" framing — it states the PO fact and the SME-benefit fact back to back, in that order, letting the reader draw the "so this person actually understands what makes a site work" conclusion themselves rather than arguing for it defensively.

**Hero option A (leads with the product-not-picture argument):**

> **Eine Website ist ein Produkt. Kein Bild.**
> Ich bin Product Owner in Basel und baue hauptberuflich digitale Produkte, die Kunden tatsächlich nutzen. Nebenbei baue ich Websites für lokale Betriebe in Basel und Umgebung — nach den gleichen Prinzipien: schnell, mobil, auffindbar, und so gebaut, dass jemand darauf tatsächlich anruft oder bucht.

**Hero option B (leads with the audience/outcome, positioning as the second beat):**

> **Ihre Website soll Anfragen bringen. Nicht nur gut aussehen.**
> Ich baue Websites für Coiffeur-, Handwerks- und andere lokale Betriebe in Basel — mit dem Blick eines Product Owners, der hauptberuflich datengetriebene digitale Produkte verantwortet: Struktur, Ladezeit und lokale Sichtbarkeit zuerst, Design als Mittel dazu, nicht als Selbstzweck.

My recommendation: **Option A.** It puts the differentiated claim (product, not picture) in the headline itself rather than in supporting text, which is punchier and more memorable for a cold-outreach context (barbershop lead), and it still lands the PO-credibility point in the very next sentence — no daylight for it to read as a disclaimer. Option B is the safer, more literally "for you" framing if Daven or ux-ui-architect want the hero to open with audience-empathy instead; either works copy-wise, it's a register choice.

---

## 4. Full draft copy

All facts, prices, and timeframes below are copied exactly from Daven's briefing — nothing invented. Where I had to draft a number that wasn't in the briefing (the per-step Ablauf timings), I've marked it clearly as my estimate, not a given fact — see Open Questions.

### 4.1 Hero

*(see Section 3 above for the two options — draft below continues with Option A)*

> **Eine Website ist ein Produkt. Kein Bild.**
>
> Ich bin Product Owner in Basel und baue hauptberuflich digitale Produkte, die Kunden tatsächlich nutzen. Nebenbei baue ich Websites für lokale Betriebe in Basel und Umgebung — nach den gleichen Prinzipien: schnell, mobil, auffindbar, und so gebaut, dass jemand darauf tatsächlich anruft oder bucht.

### 4.2 Problem / Nutzen

> Die meisten Websites von lokalen Betrieben bringen keine Anfragen — nicht weil der Betrieb schlecht ist, sondern weil die Website die eigentliche Arbeit nicht macht. Wenn eine Seite auf dem Handy langsam lädt oder sich nicht sauber bedienen lässt, ist der Besuch in Sekunden wieder weg, bevor er überhaupt gelesen hat, was Sie anbieten. Und wenn Google Ihren Betrieb bei einer lokalen Suche gar nicht zuverlässig anzeigt, spielt die Website ihre Rolle nie — sie wird schlicht nicht gefunden.
>
> Ehrlich gesagt: Für viele lokale Betriebe ist nicht die Website der grösste Hebel, sondern das Google-Unternehmensprofil. Beide greifen aber ineinander — eine gute Website ohne korrektes Google-Profil wird nicht gefunden, ein gutes Google-Profil ohne brauchbare Website verliert die Anfrage, sobald jemand draufklickt. Ich sage Ihnen offen, wo bei Ihnen tatsächlich der grössere Hebel liegt, statt Ihnen alles zu verkaufen, was ich anbiete.

### 4.3 Leistungspakete

**Kicker:** Drei Stufen, klare Preise. Kein Angebot nach Bauchgefühl.

**Paket 1 — "Sichtbar" · CHF 1'200**

> Kein Neubau — Ihre bestehende Seite wird endlich sichtbar. Für viele Betriebe ist das der grössere Hebel als eine neue Website, und der schnellste Weg zu mehr Anfragen.
>
> - Google-Unternehmensprofil aufsetzen und optimieren
> - Adresse, Öffnungszeiten und Kontaktdaten überall konsistent (NAP)
> - Structured Data / LocalBusiness-Schema, damit Google Sie versteht
> - Heading-Struktur und URLs Ihrer bestehenden Seite korrigiert
> - Impressum und Datenschutzerklärung (revDSG-konform)
>
> Dauer: ca. 2 Wochen.

**Paket 2 — "Neuer Auftritt" · ab CHF 2'800**

> Ein kompletter Neubau, auf Astro — dem gleichen technischen Fundament, mit dem ich auch diese Seite gebaut habe: schnell, sauber strukturiert, für Google lesbar.
>
> - 5 bis 7 Seiten, für Ihren Betrieb gebaut — nicht aus einem Baukasten mit hundert anderen Websites
> - Alles aus Paket 1 inklusive
> - Buchungs- oder Kontakt-Möglichkeit an mehreren Stellen der Seite, nicht nur oben
> - Bildoptimierung, Ladezeit und mobile Darstellung
> - Basis-SEO und eine saubere Seitenstruktur
>
> Dauer: ca. 4 bis 6 Wochen.

**Paket 3 — "Komplett" · ab CHF 4'200**

> Alles aus Paket 2, plus was einen Betrieb mit Laufkundschaft oder Termingeschäft wirklich weiterbringt:
>
> - Zweisprachig Deutsch/Englisch
> - Texte von Grund auf für Ihren Betrieb geschrieben, nicht generisch
> - Bildkonzept: Ich koordiniere ein Shooting oder bereite Ihr bestehendes Bildmaterial auf
> - Eine einfache Möglichkeit, Google-Bewertungen zu sammeln — zum Beispiel eine QR-Karte am Empfang, die direkt zur Bewertung führt
> - 3 Monate Betreuung nach dem Livegang inklusive
>
> Dauer: wie Paket 2, plus Zeit für Texte und Bildkonzept.

**Betreuung · CHF 45/Monat oder CHF 480/Jahr**

> Hosting, Domain, Updates, Backups und kleine Inhaltsänderungen: Sie schicken mir den neuen Preis oder die neuen Öffnungszeiten, am nächsten Tag steht's auf der Seite. Sie müssen nichts selbst einrichten oder technisch verstehen — genau dafür gibt es die Betreuung.

**Grössere Projekte**

> Für einen Umfang wie ava-beauty.ch — zweisprachig, mehrere Leistungs-Unterseiten, Portfolio, eigene Bildvorschau pro Seite für Social Media — rechnen Sie mit CHF 6'500 bis 9'000. Kein Standardpaket, sondern eine Offerte nach einem Erstgespräch.

**Zusatzleistungen**

> - Zweite Sprache: +25–30 % des Grundpakets
> - Texte von Grund auf, pro Seite: CHF 250–400
> - Google-Unternehmensprofil separat, ohne Website-Paket: CHF 400

*(Note on "eigene OG-Images pro Seite" from the brief — translated to "eigene Bildvorschau pro Seite für Social Media" in the customer-facing "Grössere Projekte" line above, since "OG-Image" is developer jargon a barbershop owner won't parse. Keep "OG-Image" internally/in the case-study/technical copy if seo-aeo-specialist wants it named precisely there.)*

### 4.4 Referenzprojekt: ava-beauty.ch

> **ava-beauty.ch — Website für Sandra, Hair & Make-up Artist in Basel**
>
> Zweisprachig Deutsch/Englisch, gebaut auf Astro, mit fünf eigenen Leistungsseiten, Portfolio, Über-mich- und Kontaktseite. Jede Seite hat eine eigene Bildvorschau für Social Media, alle Bilder sind für schnelles Laden optimiert, und die Texte sind in beiden Sprachen auf Sandras Betrieb zugeschnitten — nicht übersetzt, sondern für jede Sprache neu formuliert.
>
> *[Screenshot der Seite]*

**This section cannot ship as drafted — see the flag below, this is the single biggest blocker in this cycle's copy.**

### 4.5 Ablauf

*(Step count, order, and framing per the brief's "4 bis 5 Schritte." Timings below are my draft estimate, not a number from the briefing — flagged in Open Questions, needs Daven's confirmation before shipping.)*

> **1. Erstgespräch** — 30 Minuten, unverbindlich, per Video-Call oder vor Ort in Basel. Wir klären, was Sie brauchen und welches Paket passt.
>
> **2. Angebot** — Sie erhalten innerhalb weniger Tage ein klares Angebot mit Fixpreis oder Preisrahmen, je nach Paket.
>
> **3. Umsetzung** — Konzept, Texte, Design und Aufbau. Je nach Paket 2 bis 6 Wochen; Sie sehen den Fortschritt laufend, nicht erst am Schluss.
>
> **4. Review** — Sie prüfen die fertige Seite, wir passen an, was noch nicht stimmt.
>
> **5. Livegang** — Die Seite geht online. Mit Betreuungsabo übernehme ich Hosting, Updates und kleine Änderungen direkt weiter.

### 4.6 FAQ

> **Kann ich selbst Inhalte ändern?**
> Nach dem Livegang können Sie mir kleine Änderungen jederzeit schicken — neuer Preis, neue Öffnungszeiten, neues Bild — und ich setze sie um, meist noch am nächsten Tag. Das ist Teil der Betreuung (CHF 45/Monat oder CHF 480/Jahr). Wenn Sie grössere Inhalte lieber selbst pflegen möchten, besprechen wir das im Erstgespräch.
>
> **Was kostet der Betrieb?**
> Die Betreuung kostet CHF 45 im Monat oder CHF 480 im Jahr und deckt Hosting, Domain, Updates, Backups und kleine Inhaltsänderungen ab. Ohne Betreuungsabo übernehmen Sie Hosting und Domain selbst — dazu berate ich Sie gerne, wenn Sie das bevorzugen.
>
> **Wie lange dauert es?**
> Bei Paket 1 ("Sichtbar") rund 2 Wochen. Bei einem Neubau (Paket 2 oder 3) rechnen Sie mit 4 bis 6 Wochen, je nach Umfang und wie schnell Inhalte und Feedback von Ihrer Seite kommen.
>
> **Was, wenn ich schon eine Wix-Seite habe?**
> Kein Problem — Paket 1 ("Sichtbar") baut nichts neu, sondern macht Ihre bestehende Seite, egal ob Wix, Squarespace oder etwas anderes, für Google sichtbar und behebt die häufigsten technischen Lücken. Ein Neubau lohnt sich erst, wenn die bestehende Seite selbst das Problem ist — das sage ich Ihnen ehrlich im Erstgespräch.

### 4.7 Kontaktformular — Intro-Zeile

> Erzählen Sie mir kurz von Ihrem Betrieb — ich melde mich innerhalb von 1–2 Werktagen mit einer ehrlichen Einschätzung, was bei Ihnen den grössten Unterschied machen würde.

*(Timeframe "1–2 Werktagen" is my draft placeholder, not a brief-given fact — flagged in Open Questions.)*

---

## 5. Open questions for Daven

1. **Sandra/ava-beauty.ch permission — blocking.** The briefing explicitly states Daven has *not* yet gotten Sandra's go-ahead to use ava-beauty.ch as a public reference on daventhill.ch. I drafted the reference-project copy (Section 4.4) so it's ready the moment permission lands, but **this section cannot ship as part of the page in its current form until Daven confirms he has Sandra's explicit go-ahead** — ideally with a short testimonial line from her, which would materially strengthen the section (a real quote from a real client is worth more here than my prose). Two shipping options if permission is still pending when the rest of the page is ready:
   - **Ship without it, add later:** launch the page with the "Referenzprojekt" section either omitted entirely or replaced with a generic capability statement (e.g. "Beispielprojekt in Vorbereitung — melden Sie sich für Referenzen"), then slot in ava-beauty.ch the moment Sandra confirms. Keeps the barbershop timeline unblocked.
   - **Hold the whole page:** wait for Sandra's answer before shipping anything, since a webdesign-offer page with zero visible proof-of-work is a materially weaker pitch to a skeptical first lead.
   - My recommendation: **ship without it** (first option). A barbershop lead is time-sensitive per the brief, the reference section is one of seven sections, and the rest of the page (packages, pricing, honest positioning) carries real persuasive weight on its own. But this is Daven's call, not mine — flagging both options rather than deciding.
2. **Ablauf timings (Section 4.5) and the contact-form response time (Section 4.7) are my drafted estimates, not facts from the briefing.** The brief only gives overall package durations (~2 weeks for Paket 1, ~4–6 weeks for Paket 2/3). I built a plausible 5-step breakdown around those, but Daven should confirm or correct the per-step numbers (especially "innerhalb weniger Tage" for the Angebot step and "1–2 Werktage" for first contact-form response) before this ships, since these read as commitments to a prospective client.
3. **Hero option A vs. B (Section 3)** — my recommendation is A, but this is a register/emphasis call Daven may feel differently about, especially once he's seen it against ux-ui-architect's actual hero layout.
4. **"Grössere Projekte" section** currently doesn't say who it's for as clearly as the three numbered packages do — worth a short line clarifying it's for businesses wanting an ava-beauty.ch-level build (once that reference is cleared) rather than leaving it as a vague upsell; low priority, can be tightened in review.

---

## 6. Flags for other agents

**For ux-ui-architect:**
- This page's Ablauf and FAQ sections were written to be modular/sectioned on purpose (per the brief's note that a future "kostenloser Website-Check" lead-magnet page may follow) — please keep the FAQ and contact-form sections as independent, easily-relinkable blocks rather than tightly coupling them to page layout, so a future audit-focused page can cross-link or reuse them without a rewrite.
- The "Referenzprojekt" section (4.4) needs a layout that gracefully supports being empty/omitted (see Open Question 1) — worth designing the section as optional/conditional now rather than assuming it's always populated.
- Contact form for this page must be **separate from the existing PO contact form** per the brief (`src/pages/contact.astro` / `src/pages/de/contact.astro` are the existing PO-audience form — don't reuse/merge, this is a different audience and likely different fields, e.g. "Art des Betriebs" instead of "Company").
- This is the site's first page that's deliberately German-only / not mirrored in English (per the PM's brief — target audience is German-speaking Basel SMEs). Flagging so the EN/DE parity mechanism (nav, hreflang, sitemap) doesn't silently try to force an English mirror or a language-switcher into a page that shouldn't have one — that's a routing/i18n architecture decision, not mine to make, but worth an explicit call this cycle rather than defaulting to the existing parity pattern.

**For seo-aeo-specialist:**
- LocalBusiness / Service structured data likely applies to this page (it's literally selling LocalBusiness-schema as part of Paket 1 — worth practicing what's pitched). Not my call on implementation, flagging the opportunity.
- The FAQ section (4.6) has 4 Q&As, matching the brief's list — this doesn't have to follow the knowledge-article "exactly 3 FAQs via `faqs:` frontmatter" rule verbatim since this is a sales page, not a knowledge-base article, but if this page should emit `FAQPage` JSON-LD for AEO purposes, worth deciding with seo-aeo-specialist whether to trim to 3 or keep 4 structured entries.
- "OG-Image" jargon note from Section 4.3 — if the "Grössere Projekte" copy should keep the precise technical term for SEO/schema reasons, coordinate with me on rewording rather than dropping my customer-facing simplification silently.

**General:** No source files were touched this cycle (propose mode). This draft is copy-only — page architecture, routing (e.g. `/webdesign` vs. `/de/webdesign` vs. a subdomain), and nav placement are explicitly left to ux-ui-architect and Daven.
