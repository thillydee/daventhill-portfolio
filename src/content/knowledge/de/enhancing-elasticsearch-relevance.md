---
title: "Wie man den Elasticsearch-Relevanzalgorithmus mit Geschäftslogik erweitert"
description: "Eine praxisnahe Erklärung, wie man geschäftsgetriebenes Boosting über die native Relevanzbewertung von Elasticsearch legt, ohne sie zu ersetzen."
type: concept
relatedCaseStudies: ["relevance-sorting"]
publishDate: 2026-07-08
---

Die Standard-Relevanzbewertung von Elasticsearch (basierend auf BM25, einer Weiterentwicklung von TF-IDF) ist wirklich gut in einer Sache: Ergebnisse danach zu ranken, wie gut sie zum Text einer Suchanfrage passen. Was sie nicht kennt, ist Geschäftskontext – ob ein gefundenes Produkt gerade tatsächlich das ist, das es wert ist, gekauft zu werden.

## Das Muster: boosten statt ersetzen

Der zuverlässige Weg, Elasticsearch-Relevanz um Geschäftslogik zu erweitern, besteht darin, die native Bewertung unverändert zu lassen und eine Boost-Funktion darüberzulegen, meist über eine `function_score`-Query. Elasticsearch berechnet seinen normalen Text-Relevanz-Score wie gewohnt, und ein Satz geschäftsdefinierter Funktionen passt diesen Score danach nach oben oder unten an, bevor die Ergebnisse zurückgegeben werden. So bleiben Suchqualität (Übereinstimmung mit der Absicht) und Geschäftspriorität (was es wert ist, angezeigt zu werden) zwei getrennte, unabhängig voneinander einstellbare Anliegen.

## Signale, die sich fürs Boosting eignen

In der Praxis sind es meist Signale, die eine generische Suchmaschine von sich aus nicht kennen kann:

- **Lebenszyklus-Phase** – neue oder aktiv beworbene Produkte können geboostet werden; auslaufende Produkte abgewertet.
- **Segmentierung** – Listings boosten, die zur Zielgruppe oder zum Anwendungsfall passen, in dem sich ein Kunde wahrscheinlich befindet.
- **Lager- und Marktverfügbarkeit** – das, was ein Kunde in seinem Markt tatsächlich kaufen kann, vor das stellen, was er nicht kann.
- **Geschäftspriorität oder Marge** – manche Organisationen boosten auch nach strategischer Bedeutung, was jedoch behutsam gehandhabt werden muss, damit es für den Käufer nicht manipulativ wirkt.

## Was eine Boost-Schicht wartbar macht

Eine Boost-Schicht, die einmal hartcodiert und nie wieder angefasst wird, veraltet genauso schnell wie eine manuelle Sortierreihenfolge. Der Ansatz, der sich in meiner Erfahrung bewährt hat: die Gewichtungslogik in einem klar verantworteten Berechnungsmodell halten statt über Queries verstreut, es einfach machen, ein neues Signal hinzuzufügen, ohne bestehende zu beeinflussen, und jede Änderung daran wie eine Produktänderung behandeln – mit Hypothese, Vorher-Nachher-Vergleich und Freigabe vor dem Go-live. Dabei nutze ich denselben [strukturierten, rollenspezifischen UAT-Ansatz](/de/knowledge/user-acceptance-testing), den mein Squad für alles andere anwendet, was wir ausliefern.

Dies ist das Modell hinter [der Boost-Schicht, die ich für die Onsite-Suche von endress.com gebaut habe](/de/case-studies/relevance-sorting).
