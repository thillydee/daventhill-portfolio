---
title: "Was ist User Acceptance Testing (UAT)? Wie ich es mit meinem Squad umsetze"
description: "Wie ich UAT auf Business-Seite verantworte – von Use Cases und Abnahmekriterien bis zu einem strukturierten, rollenspezifischen Testansatz im Squad."
type: concept
relatedCaseStudies: ["ai-cross-selling", "metadata-pim-migration", "relevance-sorting", "in-stock-mvp"]
publishDate: 2026-07-08
faqs:
  - question: "Was ist User Acceptance Testing (UAT)?"
    answer: "Die letzte Prüfung vor dem Go-live: die Validierung aus Sicht des tatsächlichen Business, dass das Gebaute wirklich den realen Use Case löst – nicht nur, dass der Code funktioniert."
  - question: "Wer sollte UAT durchführen – das Business oder QA?"
    answer: "QA prüft, ob der Code wie spezifiziert funktioniert; UAT prüft, ob das Gebaute tatsächlich den realen Business-Use-Case löst. UAT sollte vom Business verantwortet und durchgeführt werden, nicht als zusätzlicher QA-Durchgang behandelt werden."
  - question: "Wann sollte UAT geplant werden – vor oder nach der Entwicklung?"
    answer: "Vorher. Abnahmekriterien sollten zusammen mit Business-Anforderungen und User Stories dokumentiert werden, bevor die Entwicklung beginnt, sodass definiert ist, was als \"abgenommen\" gilt, statt es am fertigen Feature zu improvisieren."
---

User Acceptance Testing (UAT) ist die letzte Prüfung vor dem Go-live: die Validierung aus Sicht des tatsächlichen Business, dass das Gebaute wirklich das tut, wofür es gedacht war – nicht nur, dass der Code funktioniert, sondern dass der reale Use Case gelöst wird. Es ist eine Verantwortung auf Business-Seite, getrennt von der technischen QA, und lässt sich leicht schlecht umsetzen: zu spät, zu vage, oder mit den falschen Personen, die die falschen Dinge testen.

## Wie ich UAT im [Squad](/de/knowledge/squad) verantworte

Ich richte UAT auf Business-Seite ein und koordiniere es für alles, was mein Squad ausliefert. Das beginnt vorgelagert, nicht am Ende: Ich dokumentiere Business-Anforderungen, User Stories und Abnahmekriterien als solide Grundlage, bevor die Entwicklung überhaupt beginnt, sodass "Abnahme" im Voraus definiert ist statt am fertigen Feature improvisiert zu werden. Anschliessend plane und führe ich die Abnahmetests selbst durch, bis zur finalen Freigabe, bevor etwas live geht.

## Ein strukturierter, rollenspezifischer Ansatz

Alles auf die gleiche Weise zu testen, mit allen, die alles testen, skaliert nicht und findet nicht die richtigen Probleme. Mit meinem Squad haben wir einen klaren, strukturierten Ansatz definiert, der jedem Mitglied eigene, auf Rolle und Expertise zugeschnittene Testgrenzen gibt – statt doppelter Arbeit validiert jede Person die Teile eines Releases, die ihrem eigenen Verantwortungsbereich am nächsten liegen. Diese Struktur macht es realistisch, gründliches UAT konsequent bei jedem Release durchzuführen, statt dass es zum Engpass wird, der am Ende hineingequetscht wird.

Diese Disziplin steht hinter jedem Feature, das dieses Squad ausgeliefert hat, von der [KI-gestützten Cross-Selling-Engine](/de/case-studies/ai-cross-selling) bis zur [PIM-Datenmigration](/de/case-studies/metadata-pim-migration) – nichts geht live, ohne das durchlaufen zu haben.
