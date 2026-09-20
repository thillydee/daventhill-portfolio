---
faqs:
  - question: "Wie automatisiert man die Website-Pflege mit KI-Agenten?"
    answer: "Die Website-Pflege automatisiert man, indem man einzelnen KI-Agenten klar abgegrenzte, fachspezifische Rollen gibt — je einen für Content, für UX und Barrierefreiheit sowie für SEO/AEO — und jeden die Website unabhängig prüfen und gezielte Änderungen vorschlagen lässt. Ein Mensch als Orchestrator führt die Vorschläge dann zusammen, priorisiert und gibt frei, bevor etwas live geht. Genau nach dieser Schleife wird diese Website gepflegt."
  - question: "Was ist ein Multi-Agenten-Workflow für Content mit KI?"
    answer: "Ein Multi-Agenten-Workflow weist jeden Teil der Website-Pflege einem spezialisierten KI-Agenten zu, statt alles über einen generalistischen Prompt zu lösen. Spezialisierte Agenten — Content, UX, SEO — liefern jeweils fokussierte, überprüfbare Vorschläge, und ein Mensch führt sie zusammen und gibt frei. Die Aufteilung nach Fachbereich skaliert die Qualitätsprüfung weit über das hinaus, was ein einzelner manueller Durchgang leisten kann."
  - question: "Kann eine Website vollständig automatisiert werden, ohne die Qualitätskontrolle zu verlieren?"
    answer: "Ja — die Absicherung ist ein Human-in-the-Loop-Freigabeschritt. Die Automatisierung übernimmt die Fleissarbeit (Review-Durchgänge, Entwürfe, Checks und Builds), aber vor der Produktion ist eine ausdrückliche menschliche Entscheidung nötig. Die manuelle Endfreigabe verhindert, dass eine automatisierte Pipeline minderwertige, fehlerhafte oder markenfremde Änderungen veröffentlicht."
  - question: "Wie macht man eine Website für KI-Antwortmaschinen zitierbar (AEO)?"
    answer: "Für Answer Engine Optimization strukturiert man die Website so, dass Maschinen sie zitieren können: schema.org-JSON-LD (Person, CreativeWork, FAQPage), ein llms.txt-Endpunkt, der Inhalte für KI-Crawler abbildet, und frageorientierte FAQ-Inhalte, die direkt antworten und aus dem Kontext gelöst zitierbar bleiben. AEO heisst, die saubere, strukturierte Quelle zu sein, die ChatGPT, Perplexity und Google AI Overviews zitieren können."
  - question: "Welche Website-Architektur ist am leichtesten aktuell zu halten?"
    answer: "Eine Single Source of Truth. Strukturierte Fakten in einer typisierten Datendatei, Langtexte in einer Markdown-Sammlung — und daraus jede Seite, Sprache und Metadaten-Ebene generieren. Ein Fakt wird einmal aktualisiert und ist überall korrekt, ohne Templates zu durchsuchen. Genau das macht häufige, risikoarme Aktualisierungen — ob manuell oder KI-gestützt — praktikabel."
---

## Warum ich mein eigenes Portfolio wie ein Produkt behandelt habe

Ein Lebenslauf ist eine Behauptung. Ein laufendes Produkt ist ein Beweis. Ich bewerbe mich auf Product-Owner-Rollen, also habe ich diese Website so gebaut und betrieben, wie ich jedes Produkt führen würde, das ich verantworte: eine schriftliche Vision samt Zielgruppe, eine definierte Liste von Non-Goals, ein Review-Rhythmus und ein laufendes Protokoll, was ausgeliefert wurde und warum. Das Decision Log hinter dieser Website liest sich wie eine schlanke Produkt-Roadmap, weil es genau das ist.

Dieser Rahmen prägt alles Folgende — es geht hier nicht um "Schaut her, ich kann eine Website programmieren." Es geht um: "So gehe ich vor, um ein Produkt End-to-End zu scopen, zu priorisieren, auszuliefern und weiterzuentwickeln — und Sie können mir dabei zusehen, denn das Produkt ist genau die Website, die Sie gerade lesen."

## Architektur: eine Datenquelle, zwei Sprachen, viele Flächen

Der Content dieser Website liegt pro Sprache an genau einer Stelle: eine typisierte Profildatei (`profile.ts` / `profile.de.ts`) für strukturierte Fakten — Erfahrung, Case Studies, Skills — plus eine Markdown-Wissensdatenbank für längere Erklärungen. Alles andere wird aus dieser einen Quelle generiert: der Case-Study-Index, die Homepage-Abschnitte, die Skills-Seite, seitenspezifische OpenGraph-Bilder, die `llms.txt`-Datei für KI-Crawler und die schema.org-Strukturdaten auf jeder Seite.

<figure role="group" aria-label="Diagramm: Content-Architektur" style="margin: 2rem 0;">
<svg viewBox="0 0 880 260" role="img" aria-label="Diagramm: Profildaten und die Wissensdatenbank fliessen in eine i18n-Schicht, die EN- und DE-Seiten erzeugt, aus denen wiederum llms.txt, schema.org JSON-LD und OG-Bilder entstehen" style="width:100%; height:auto; display:block; margin:0 auto;">
  <title>Content-Architektur</title>
  <desc>profile.ts und profile.de.ts sowie die Markdown-Wissensdatenbank fliessen in eine einzige i18n-Schicht. Diese erzeugt statische EN- und DE-Seiten, aus denen automatisch llms.txt, schema.org JSON-LD und seitenspezifische OG-Bilder entstehen.</desc>
  <defs>
    <marker id="arch-arrow-de" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 z" fill="var(--color-muted)" />
    </marker>
  </defs>

  <line x1="180" y1="60" x2="248" y2="112" stroke="var(--color-muted)" stroke-width="2" marker-end="url(#arch-arrow-de)" />
  <line x1="180" y1="180" x2="248" y2="128" stroke="var(--color-muted)" stroke-width="2" marker-end="url(#arch-arrow-de)" />
  <line x1="400" y1="110" x2="468" y2="55" stroke="var(--color-muted)" stroke-width="2" marker-end="url(#arch-arrow-de)" />
  <line x1="400" y1="130" x2="468" y2="185" stroke="var(--color-muted)" stroke-width="2" marker-end="url(#arch-arrow-de)" />
  <line x1="620" y1="47" x2="648" y2="100" stroke="var(--color-muted)" stroke-width="2" marker-end="url(#arch-arrow-de)" />
  <line x1="620" y1="193" x2="648" y2="150" stroke="var(--color-muted)" stroke-width="2" marker-end="url(#arch-arrow-de)" />

  <rect x="10" y="30" width="170" height="60" rx="8" fill="var(--color-surface-alt)" stroke="var(--color-border)" stroke-width="1.5" />
  <text x="95" y="55" text-anchor="middle" font-size="13" font-weight="600" fill="var(--color-ink)">
    <tspan x="95" dy="0">profile.ts /</tspan>
    <tspan x="95" dy="16">profile.de.ts</tspan>
  </text>
  <text x="95" y="82" text-anchor="middle" font-size="10.5" fill="var(--color-muted)">einzige Datenquelle</text>

  <rect x="10" y="150" width="170" height="60" rx="8" fill="var(--color-surface-alt)" stroke="var(--color-border)" stroke-width="1.5" />
  <text x="95" y="175" text-anchor="middle" font-size="13" font-weight="600" fill="var(--color-ink)">
    <tspan x="95" dy="0">Wissens-</tspan>
    <tspan x="95" dy="16">datenbank</tspan>
  </text>
  <text x="95" y="202" text-anchor="middle" font-size="10.5" fill="var(--color-muted)">Markdown</text>

  <rect x="250" y="90" width="150" height="60" rx="8" fill="var(--color-surface-alt)" stroke="var(--color-border)" stroke-width="1.5" />
  <text x="325" y="115" text-anchor="middle" font-size="13" font-weight="600" fill="var(--color-ink)">i18n-Schicht</text>
  <text x="325" y="140" text-anchor="middle" font-size="10.5" fill="var(--color-muted)">strings.ts</text>

  <rect x="470" y="20" width="150" height="55" rx="8" fill="var(--color-surface-alt)" stroke="var(--color-border)" stroke-width="1.5" />
  <text x="545" y="53" text-anchor="middle" font-size="13" font-weight="600" fill="var(--color-ink)">Statische EN-Seiten</text>

  <rect x="470" y="165" width="150" height="55" rx="8" fill="var(--color-surface-alt)" stroke="var(--color-border)" stroke-width="1.5" />
  <text x="545" y="198" text-anchor="middle" font-size="13" font-weight="600" fill="var(--color-ink)">Statische DE-Seiten</text>

  <rect x="650" y="75" width="220" height="100" rx="8" fill="var(--color-brand-soft)" stroke="var(--color-brand)" stroke-width="1.5" />
  <text x="760" y="100" text-anchor="middle" font-size="12.5" font-weight="600" fill="var(--color-brand-dark)">llms.txt</text>
  <text x="760" y="122" text-anchor="middle" font-size="12.5" font-weight="600" fill="var(--color-brand-dark)">schema.org JSON-LD</text>
  <text x="760" y="144" text-anchor="middle" font-size="12.5" font-weight="600" fill="var(--color-brand-dark)">Seitenspezifische OG-Bilder</text>
  <text x="760" y="163" text-anchor="middle" font-size="10.5" fill="var(--color-brand-dark)">automatisch generiert</text>
</svg>
<figcaption style="text-align:center; font-size:0.875rem; color: var(--color-muted); margin-top:0.75rem;">
Single-Source-Content — profile.ts/profile.de.ts und die Markdown-Wissensdatenbank — fliesst durch eine i18n-Schicht in statische EN- und DE-Seiten, die automatisch llms.txt, schema.org JSON-LD und seitenspezifische OG-Bilder erzeugen.
</figcaption>
</figure>

Strukturierte Fakten und Fliesstext getrennt zu halten, aber beide durch dieselbe i18n-Schicht laufen zu lassen, bedeutet: Ich pflege einen Fakt einmal, und er stimmt überall dort, wo er verwendet wird — in beiden Sprachen, auf jeder Fläche —, statt nach einer Änderung fünf Stellen manuell nachzuziehen.

## Prozess: Wie diese Website tatsächlich weiterentwickelt wird

Ich liefere Änderungen nicht einfach ad hoc aus. Ich pflege ein lebendiges Vision-Dokument (Mission, Zielgruppe, Tonalität, Leitplanken), und jeder Verbesserungszyklus folgt derselben Schleife: Vision erneut prüfen, strukturierten Review über Content, UX/Barrierefreiheit und SEO/AEO durchführen, priorisieren, ausliefern und die Entscheidung samt Begründung protokollieren.

<figure role="group" aria-label="Diagramm: Pflege- und Verbesserungs-Loop" style="margin: 2rem 0;">
<svg viewBox="0 0 900 260" role="img" aria-label="Diagramm: der Pflege-Loop — Vision fliesst in einen strukturierten Review, Entscheidungen werden priorisiert, Änderungen werden ausgeliefert, alles wird protokolliert, und der Loop beginnt von vorn" style="width:100%; height:auto; display:block; margin:0 auto;">
  <title>Pflege- und Verbesserungs-Loop</title>
  <desc>Die Vision setzt Prioritäten für einen strukturierten Review über Content, UX und SEO/AEO. Entscheidungen werden priorisiert und freigegeben, genehmigte Änderungen werden ausgeliefert, und jeder Zyklus wird im Decision Log festgehalten, bevor der Loop von vorn beginnt — unterstützt durch einen KI-gestützten Multi-Agent-Workflow.</desc>
  <defs>
    <marker id="loop-arrow-de" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 z" fill="var(--color-muted)" />
    </marker>
  </defs>

  <line x1="160" y1="102" x2="198" y2="102" stroke="var(--color-muted)" stroke-width="2" marker-end="url(#loop-arrow-de)" />
  <line x1="340" y1="102" x2="378" y2="102" stroke="var(--color-muted)" stroke-width="2" marker-end="url(#loop-arrow-de)" />
  <line x1="520" y1="102" x2="558" y2="102" stroke="var(--color-muted)" stroke-width="2" marker-end="url(#loop-arrow-de)" />
  <line x1="700" y1="102" x2="738" y2="102" stroke="var(--color-muted)" stroke-width="2" marker-end="url(#loop-arrow-de)" />
  <path d="M810,134 C 810,225 90,225 90,134" fill="none" stroke="var(--color-muted)" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#loop-arrow-de)" />

  <rect x="20" y="70" width="140" height="64" rx="8" fill="var(--color-surface-alt)" stroke="var(--color-border)" stroke-width="1.5" />
  <text x="90" y="97" text-anchor="middle" font-size="13" font-weight="600" fill="var(--color-ink)">Vision</text>
  <text x="90" y="115" text-anchor="middle" font-size="10" fill="var(--color-muted)">vision.md</text>

  <rect x="200" y="70" width="140" height="64" rx="8" fill="var(--color-brand-soft)" stroke="var(--color-brand)" stroke-width="1.5" />
  <text x="270" y="93" text-anchor="middle" font-size="12" font-weight="600" fill="var(--color-brand-dark)">
    <tspan x="270" dy="0">Strukturierter</tspan>
    <tspan x="270" dy="14">Review</tspan>
  </text>
  <text x="270" y="123" text-anchor="middle" font-size="9.5" fill="var(--color-brand-dark)">Content · UX · SEO/AEO</text>

  <rect x="380" y="70" width="140" height="64" rx="8" fill="var(--color-surface-alt)" stroke="var(--color-border)" stroke-width="1.5" />
  <text x="450" y="93" text-anchor="middle" font-size="12" font-weight="600" fill="var(--color-ink)">
    <tspan x="450" dy="0">Entscheiden &amp;</tspan>
    <tspan x="450" dy="14">priorisieren</tspan>
  </text>
  <text x="450" y="123" text-anchor="middle" font-size="10" fill="var(--color-muted)">meine Freigabe</text>

  <rect x="560" y="70" width="140" height="64" rx="8" fill="var(--color-surface-alt)" stroke="var(--color-border)" stroke-width="1.5" />
  <text x="630" y="97" text-anchor="middle" font-size="13" font-weight="600" fill="var(--color-ink)">Ausliefern</text>
  <text x="630" y="115" text-anchor="middle" font-size="10" fill="var(--color-muted)">Build + Deploy</text>

  <rect x="740" y="70" width="140" height="64" rx="8" fill="var(--color-surface-alt)" stroke="var(--color-border)" stroke-width="1.5" />
  <text x="810" y="93" text-anchor="middle" font-size="12" font-weight="600" fill="var(--color-ink)">
    <tspan x="810" dy="0">Decision</tspan>
    <tspan x="810" dy="14">Log</tspan>
  </text>
  <text x="810" y="123" text-anchor="middle" font-size="10" fill="var(--color-muted)">was &amp; warum</text>

  <text x="450" y="248" text-anchor="middle" font-size="11" fill="var(--color-muted)">wiederholt sich jeden Zyklus — KI-gestützt, mit menschlicher Freigabe vor jedem Go-live</text>
</svg>
<figcaption style="text-align:center; font-size:0.875rem; color: var(--color-muted); margin-top:0.75rem;">
Der Pflege-Loop: Eine schriftliche Vision fliesst in einen strukturierten Review über Content, UX und SEO/AEO ein; ich entscheide über die Priorisierung; freigegebene Änderungen werden ausgeliefert; und jeder Zyklus wird mit seiner Begründung im Decision Log festgehalten, bevor der Loop von vorn beginnt — unterstützt durch einen KI-gestützten Multi-Agent-Workflow, den ich selbst steuere und freigebe.
</figcaption>
</figure>

Was diesen Loop praktikabel macht, obwohl ich ihn grösstenteils allein betreibe, ist, dass ich ihn um einen KI-gestützten Multi-Agent-Workflow herum aufgebaut habe: Spezialisierte Review-Durchgänge schlagen isoliert voneinander Änderungen vor, ich gleiche ab und priorisiere, was dabei zutage kommt, und nichts wird ausgeliefert — geschweige denn live geschaltet — ohne meine explizite Freigabe. Ich verantworte den Prozess; das KI-Tooling beschleunigt ihn. Genau diese Beziehung würde ich mir zwischen jedem Product Owner und den Tools seines Teams wünschen.

## Vom Commit bis zu daventhill.ch

Jede Änderung durchläuft dieselbe Pipeline: ein Commit auf einem Feature-Branch, ein Astro-Build, der jede EN/DE-Seite plus die SEO/AEO-Schicht statisch rendert, ein Vercel-Preview-Deployment, das ich prüfe, und — erst nachdem ich explizit zugestimmt habe — ein Produktions-Deployment auf daventhill.ch.

<figure role="group" aria-label="Diagramm: Build- und Delivery-Pipeline" style="margin: 2rem 0;">
<svg viewBox="0 0 900 200" role="img" aria-label="Diagramm: Delivery-Pipeline von Commit über Astro-Build zu einem Vercel-Preview mit erforderlicher menschlicher Freigabe bis zur Produktion auf daventhill.ch" style="width:100%; height:auto; display:block; margin:0 auto;">
  <title>Build- und Delivery-Pipeline</title>
  <desc>Ein Commit auf einem Feature-Branch löst einen Astro-Build aus, der jede Seite plus die SEO/AEO- und Performance-Schicht rendert. Daraus entsteht ein Vercel-Preview-Deployment, das meine explizite Freigabe braucht, bevor es auf daventhill.ch in Produktion geht.</desc>
  <defs>
    <marker id="pipe-arrow-de" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 z" fill="var(--color-muted)" />
    </marker>
  </defs>

  <line x1="200" y1="55" x2="238" y2="55" stroke="var(--color-muted)" stroke-width="2" marker-end="url(#pipe-arrow-de)" />
  <line x1="430" y1="55" x2="468" y2="55" stroke="var(--color-muted)" stroke-width="2" marker-end="url(#pipe-arrow-de)" />
  <line x1="660" y1="55" x2="698" y2="55" stroke="var(--color-muted)" stroke-width="2" marker-end="url(#pipe-arrow-de)" />

  <rect x="10" y="20" width="190" height="70" rx="8" fill="var(--color-surface-alt)" stroke="var(--color-border)" stroke-width="1.5" />
  <text x="105" y="50" text-anchor="middle" font-size="13" font-weight="600" fill="var(--color-ink)">Commit</text>
  <text x="105" y="70" text-anchor="middle" font-size="10.5" fill="var(--color-muted)">Feature-Branch</text>

  <rect x="240" y="20" width="190" height="70" rx="8" fill="var(--color-surface-alt)" stroke="var(--color-border)" stroke-width="1.5" />
  <text x="335" y="50" text-anchor="middle" font-size="13" font-weight="600" fill="var(--color-ink)">Astro-Build</text>
  <text x="335" y="70" text-anchor="middle" font-size="10" fill="var(--color-muted)">SSG + SEO/AEO-Schicht</text>

  <rect x="470" y="20" width="190" height="70" rx="8" fill="var(--color-brand-soft)" stroke="var(--color-brand)" stroke-width="1.5" />
  <text x="565" y="50" text-anchor="middle" font-size="13" font-weight="600" fill="var(--color-brand-dark)">Vercel-Preview</text>
  <text x="565" y="70" text-anchor="middle" font-size="10" fill="var(--color-brand-dark)">menschliche Freigabe nötig</text>

  <rect x="700" y="20" width="190" height="70" rx="8" fill="var(--color-surface-alt)" stroke="var(--color-border)" stroke-width="1.5" />
  <text x="795" y="50" text-anchor="middle" font-size="13" font-weight="600" fill="var(--color-ink)">daventhill.ch</text>
  <text x="795" y="70" text-anchor="middle" font-size="10.5" fill="var(--color-muted)">Produktion</text>
</svg>
<figcaption style="text-align:center; font-size:0.875rem; color: var(--color-muted); margin-top:0.75rem;">
Delivery-Pipeline: Ein Commit auf einem Feature-Branch löst einen Astro-Build aus (statisches Rendering plus SEO/AEO- und Performance-Schicht), gefolgt von einem Vercel-Preview-Deployment, das ich prüfe, und — erst nach expliziter Freigabe — einem Produktions-Deployment auf daventhill.ch.
</figcaption>
</figure>

Nichts erreicht die Produktion ohne ein menschliches Entscheidungsgate. Für eine Website, die direkt an meine Stellensuche geknüpft ist, ist das eine bewusste Leitplanke, kein Versehen.

## Was das beweist

Diese Case Study beschreibt kein vergangenes Projekt — sie ist ein laufendes. Die Architektur, der Prozess und der oben beschriebene KI-gestützte Workflow sind genau die, die die Seite erzeugt haben, die Sie gerade lesen. Wer Product Ownership in Aktion sehen will, statt mir nur zu glauben, findet sie hier.

## Das Ganze für jemand anderen bauen

Diese Seite ist meine eigene, aber denselben Produktansatz, dieselbe Architektur und denselben KI-gestützten Workflow bringe ich in Websites ein, die ich nebenbei für lokale Betriebe in Basel baue. Wenn Sie einen Betrieb führen, ist das ein Angebot von mir — [so funktioniert es](/de/webdesign).
