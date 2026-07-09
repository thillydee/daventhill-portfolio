# Agent reports

Each subagent overwrites its own `<name>-latest.md` file every cycle when run in "propose mode" — these are rolling snapshots, not a history (history lives in `docs/decision-log.md` and git/PR history).

- `content-latest.md` — content-strategist
- `ux-ui-latest.md` — ux-ui-architect
- `seo-aeo-latest.md` — seo-aeo-specialist

Files are created automatically the first time each agent runs. Nothing to do here manually.
