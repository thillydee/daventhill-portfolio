# How this system works

## The roster

- **PM/PO (orchestrator)** — not a subagent file; it's the main Claude Code session in this repo, running the `/portfolio-review` slash command. It reads `vision.md`, sets priorities, delegates, reconciles conflicts, gates on your sign-off, and handles the git/PR/merge steps.
- **content-strategist** (`.claude/agents/content-strategist.md`) — copy, positioning, case studies, knowledge articles.
- **ux-ui-architect** (`.claude/agents/ux-ui-architect.md`) — architecture, navigation, layout, accessibility, performance.
- **seo-aeo-specialist** (`.claude/agents/seo-aeo-specialist.md`) — search SEO + AI answer-engine optimization (llms.txt, structured data, meta).

## Why there's no direct agent-to-agent chat

Claude Code subagents don't message each other directly — each one is a fresh, isolated context that the orchestrator dispatches and collects a report from. That's a feature here, not a limitation: it keeps every agent's reasoning inspectable in a plain markdown file (`docs/agent-reports/*-latest.md`) instead of buried in an opaque conversation. The PM is the one place synthesis happens, same as a real product team's lead reads three functional reports and reconciles them.

## The loop, end to end

1. **Trigger.** Run `/portfolio-review` in Claude Code inside VS Code, in this repo. You can scope it ("just check SEO on the case studies page") or let it run the full sweep.
2. **Orient.** PM reads `vision.md` + `decision-log.md`, checks git is clean.
3. **Priorities.** PM proposes 2-4 priorities for the cycle and tells you before doing anything else.
4. **Propose.** The three subagents run in "propose mode" — reports only, no file edits — written to `docs/agent-reports/`.
5. **Reconcile.** PM merges the three reports into one proposal, resolving overlaps itself or flagging real decisions for you.
6. **Sign-off #1 (plan).** PM shows you the consolidated plan. Nothing proceeds without your explicit approval.
7. **Implement.** Approved subagents run again in "implement mode" and make the actual file edits, on a new branch (`iteration/YYYY-MM-DD-slug`). PM runs `npm run build` to confirm nothing broke.
8. **Ship.** PM commits, pushes the branch, opens a PR. Vercel auto-builds a preview deployment for the PR — check it before merging.
9. **Sign-off #2 (go live).** PM will NOT merge the PR without a separate, explicit "merge it" from you, even after sign-off #1. Merging `master`/`main` is what triggers the real production deploy via Vercel.
10. **Log.** PM appends a dated entry to `decision-log.md`: what shipped, why, PR link.

Two sign-off gates, deliberately: approving a plan and approving a live push to your job-search-critical site are different decisions, and it should never be possible for an agent cycle to go live on its own.

## Cadence

There's no unattended/scheduled execution of this loop by default — it needs a live Claude Code session with repo access and your sign-off, which is the right level of caution for a site tied to your job search. If you want a nudge rather than a full autonomous run, you can set up a Cowork scheduled task that just messages you a reminder ("time for your monthly portfolio review") — that's a lightweight ping, not an autonomous ship. Set your intended cadence in `vision.md` under "Review cadence."

## Guardrails carried through everywhere

- `public/cv/*.pdf` and `~/Documents/cv-builder` are off-limits to every agent (private repo with PII — see `AGENTS.md`'s existing CV-sync section).
- EN/DE parity is mandatory for every content and route change.
- No merge to `master`/`main` without your explicit go-ahead.

## First-time setup checklist

- [ ] Fill in `docs/vision.md` (at minimum: mission, audience, voice, guardrails).
- [ ] Confirm `gh` (GitHub CLI) is authenticated in your terminal, since the PM uses `gh pr create` in Phase 6.
- [ ] Do a first dry run scoped small (e.g. "just review the homepage copy") before turning it loose on a full sweep, to see the report quality and calibrate `vision.md`.
