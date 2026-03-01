---
description: Sales command router for summary, forecast, pipeline review, and asset creation
argument-hint: "<subcommand> [details]"
---

# /sales

Primary entrypoint for the OpenCode Sales Agent.

## Subcommands

- `call-summary` — process call notes/transcript and draft follow-up
- `forecast` — create weighted forecast with risk analysis
- `pipeline-review` — analyze pipeline health and priorities
- `create-asset` — generate customer-facing HTML asset

## Router Logic

1. Read the first token from `$ARGUMENTS` as subcommand.
2. Route to matching workflow below.
3. If no subcommand is provided, ask user to choose one and gather required inputs.

### `call-summary`
Run the call summary workflow:
- collect notes/transcript
- extract decisions and action items
- produce internal summary
- produce customer follow-up email draft (plain text)

### `forecast`
Run the forecast workflow:
- collect CSV/manual pipeline details
- apply stage-based probability weighting
- produce likely/best/worst scenarios
- produce commit vs upside and gap actions

### `pipeline-review`
Run the pipeline review workflow:
- score pipeline health
- identify stale/stuck/at-risk deals
- prioritize weekly actions
- output hygiene fixes

### `create-asset`
Run create-an-asset skill flow:
- gather prospect/audience/goal/format
- ask clarifying questions
- generate self-contained HTML asset

## If Subcommand Missing

Prompt with:

```text
Which sales workflow do you want?
1) call-summary
2) forecast
3) pipeline-review
4) create-asset
```

Then continue with the selected workflow.
