---
description: Generate weighted sales forecast with scenario analysis, commit/upside split, and gap actions
argument-hint: "<period>"
---

# /sales forecast

Build a weighted forecast from pipeline data (CSV or manual input), then identify risk and quota gap actions.

## Required Inputs
- Pipeline deals (name, amount, stage, close date)
- Quota and timeline
- Already-closed amount for period

## Default Stage Probabilities
- Closed Won: 100%
- Negotiation / Contract: 80%
- Proposal / Quote: 60%
- Evaluation / Demo: 40%
- Discovery / Qualification: 20%
- Prospecting / Lead: 10%

## Output

```markdown
# Sales Forecast: [Period]

## Summary
| Metric | Value |
|--------|-------|
| Quota | $[X] |
| Closed to Date | $[X] |
| Open Pipeline | $[X] |
| Weighted Forecast | $[X] |
| Gap to Quota | $[X] |

## Forecast Scenarios
| Scenario | Amount | Notes |
|----------|--------|-------|
| Best | $[X] | [Assumptions] |
| Likely | $[X] | [Assumptions] |
| Worst | $[X] | [Assumptions] |

## Commit vs Upside
- Commit total: $[X]
- Upside total: $[X]

## Gap Actions
1. [Action]
2. [Action]
3. [Action]
```

## If Connectors Available
- Pull CRM pipeline automatically.
- Use historical win-rate signals when available.
