---
title: "How to enhance Elasticsearch's relevance algorithm with business logic"
description: "A practical explainer on layering business-driven boosting on top of Elasticsearch's native relevance scoring, without replacing it."
type: concept
relatedCaseStudies: ["relevance-sorting"]
publishDate: 2026-07-08
---

Elasticsearch's default relevance scoring (built on BM25, a refinement of TF-IDF) is genuinely good at one thing: ranking results by how well they match a search query's text. What it has no concept of is business context — whether a matched product is actually the one worth buying right now.

## The pattern: boost, don't replace

The reliable way to add business logic to Elasticsearch relevance is to leave its native scoring alone and layer a boost function on top of it, most commonly via a `function_score` query. Elasticsearch computes its normal text-relevance score as usual, and a set of business-defined functions adjust that score up or down before results are returned. This keeps search quality (matching intent) and business priority (what's worth surfacing) as two separate, independently tunable concerns.

## Common signals worth boosting on

In practice, the signals worth factoring into a boost layer tend to be things a generic search engine can't know on its own:

- **Lifecycle stage** — new or actively promoted products can be boosted; phase-out products deprioritized.
- **Segmentation** — boosting listings that match the audience or use case a customer is likely in.
- **Stock and market availability** — surfacing what a customer can actually buy in their market ahead of what they can't.
- **Business priority or margin** — some organizations also boost by strategic importance, though this needs a light touch to avoid feeling manipulative to the buyer.

## What makes a boost layer maintainable

A boost layer that's hardcoded once and never revisited goes stale as fast as a manual sort order would. What's held up well in my experience: keep the weighting logic in one clearly owned calculation model rather than scattered across queries, make it easy to add a new signal without touching existing ones, and treat any change to it like a product change — hypothesis, before/after comparison, sign-off before it ships. I lean on the same [structured, role-tailored UAT approach](/knowledge/user-acceptance-testing) my squad uses for everything else we ship.

This is the model behind [the relevance boost layer I built on endress.com's onsite search](/case-studies/relevance-sorting).
