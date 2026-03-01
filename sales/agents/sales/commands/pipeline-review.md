---
description: Analyze pipeline health, prioritize deals, and generate weekly action plan
argument-hint: "<segment or rep>"
---

# /sales pipeline-review

Analyze pipeline health and produce an execution-focused action plan.

## Inputs
- CSV or manual pipeline detail
- Optional: owner/segment focus

## Review Dimensions
1. Stage progression
2. Activity recency
3. Close date accuracy
4. Contact coverage (multi-threading)

## Output

```markdown
# Pipeline Review: [Date]

## Pipeline Health Score: [X/100]

## Priority Actions
1. [Top action]
2. [Top action]
3. [Top action]

## Deal Prioritization
- Close this week
- Close this month
- Nurture

## Risk Flags
- Stale deals (no activity)
- Stuck deals (same stage too long)
- Past close dates
- Single-threaded deals

## Hygiene Issues
- Missing fields, unrealistic dates, undefined next steps

## Weekly Plan
1. [Action]
2. [Action]
3. [Action]
```

## If Connectors Available
- Pull pipeline and activity directly from CRM.
- Offer updates to stage/date/next-step hygiene fields.
