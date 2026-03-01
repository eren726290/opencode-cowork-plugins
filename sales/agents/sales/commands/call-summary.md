---
description: Process call notes or transcript and produce summary, action items, and follow-up email
argument-hint: "<call notes or transcript>"
---

# /sales call-summary

Process call notes or transcript to extract decisions, risks, action items, and follow-up communication.

## Inputs
- Notes, transcript, or call description
- Optional: deal stage and attendees

## Output

```markdown
## Call Summary: [Company] — [Date]

**Attendees:** [Names]
**Call Type:** [Type]

### Key Discussion Points
1. [Point]
2. [Point]

### Customer Priorities
- [Priority]

### Objections / Concerns
- [Concern]

### Action Items
| Owner | Action | Due |
|-------|--------|-----|
| [Name] | [Task] | [Date] |

### Next Steps
- [Next step]

### Deal Impact
- [Stage/risk impact]
```

## Follow-Up Email Rules
- Plain text only (no markdown symbols in email body)
- Concise and scannable
- Include explicit next step and timeline

## If Connectors Available
- Pull transcript automatically from call transcription tools.
- Offer to log call/activity in CRM.
- Offer to create email draft in connected email system.
