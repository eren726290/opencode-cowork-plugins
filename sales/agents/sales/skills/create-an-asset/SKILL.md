---
name: create-an-asset
description: Generate tailored sales assets (landing pages, decks, one-pagers, workflow demos) from deal context. Trigger with "/sales create-asset", "create an asset", "build a demo", "make a landing page", or "mock up a workflow".
---

# Create an Asset

Generate customer-facing sales assets tailored to prospect context, audience, and goal.

## Supported Formats
- Interactive landing page
- Deck-style page
- Executive one-pager
- Workflow/architecture demo

## Inputs to Collect
1. Prospect context
   - Company
   - Key contacts
   - Deal stage
   - Known pain points
2. Audience context
   - Executive / technical / operations / mixed
   - Primary concerns
3. Purpose context
   - Desired business outcome
   - Desired next action
4. Format selection
   - Landing page / deck / one-pager / workflow demo

## State Handling
- When seller context is known, reuse it from runtime state.
- Runtime state location (Windows): `%USERPROFILE%\\.local\\share\\opencode-sales-agent\\state.json`.
- If state is missing, ask concise onboarding questions and continue.

## Required Clarification Round
Before building, summarize understanding and ask targeted questions:
- "Does this match your vision?"
- "What is the one thing this asset must nail?"
- "Tone preference?"
- "Concise or comprehensive?"

Limit to two rounds of questions, then proceed with best-fit assumptions.

## Research Rules
- Always perform web research on prospect and leadership.
- If connectors are available, enrich with CRM/docs/chat/transcripts.
- Use prospect language and priorities in copy.
- Prefer evidence-backed claims and clearly labeled assumptions.

## Build Rules
- Output must be self-contained HTML.
- Keep design polished and presentation-ready.
- Include clear CTA aligned to deal stage.
- Ensure content feels tailored, not template-like.
- Validate readability and responsive layout.

## Workflow Demo Rules
When format is workflow/architecture demo:
- Confirm components and flow explicitly.
- Add step-by-step annotated sequence.
- Include controls (play/pause/step/reset) when feasible.
- Show concrete sample scenario.

## Delivery Format

```markdown
## Asset Created

- Prospect: [Company]
- Format: [Selected format]
- Audience: [Audience]
- Goal: [Purpose]
- File: [Generated file path]

Suggested next moves:
1. Review with account owner
2. Trim/expand for the meeting duration
3. Share via secure hosted link or attach HTML
```

## Quality Checklist
- Company names, dates, and metrics are accurate.
- CTA is explicit and actionable.
- No placeholder text remains.
- Visual hierarchy and spacing are consistent.

## Related Skills
- **account-research**
- **competitive-intelligence**
- **call-prep**
