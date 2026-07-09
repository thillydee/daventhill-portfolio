---
title: "What is User Acceptance Testing (UAT)? How I run it with my squad"
description: "How I own UAT on the business side, from use cases and acceptance criteria to a structured, role-tailored testing approach across the squad."
type: concept
relatedCaseStudies: ["ai-cross-selling", "metadata-pim-migration", "relevance-sorting", "in-stock-mvp"]
publishDate: 2026-07-08
---

User Acceptance Testing (UAT) is the final check before a feature goes live: validating, from the perspective of the actual business, that what was built genuinely does what it was meant to do — not just that the code works, but that it solves the real use case. It's a business-side responsibility, distinct from technical QA, and it's easy to do badly: run too late, too vaguely, or by the wrong people testing the wrong things.

## How I own UAT on the [squad](/knowledge/squad)

I set up and coordinate UAT on the business side for everything my squad ships. That starts upstream, not at the end: I document business requirements, user stories, and acceptance criteria as a firm foundation before development even begins, so "acceptance" is defined in advance rather than improvised once a feature is built. I then plan and run the acceptance testing myself, through to final sign-off, before anything goes live.

## A structured, role-tailored approach

Testing everything the same way, with everyone testing everything, doesn't scale and doesn't catch the right issues. With my squad, we've defined a clear, structured approach that gives each member their own testing boundaries, tailored to their role and expertise — rather than duplicating effort, each person validates the parts of a release closest to what they actually own. That structure is what makes it realistic to run thorough UAT consistently, release after release, rather than it becoming a bottleneck squeezed in at the end.

This discipline is what stands behind every feature this squad has shipped, from the [AI-powered cross-selling engine](/case-studies/ai-cross-selling) to the [PIM data migration](/case-studies/metadata-pim-migration) — nothing goes live without going through it first.
