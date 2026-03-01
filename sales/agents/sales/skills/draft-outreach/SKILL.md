---
name: draft-outreach
description: Research a prospect first, then draft personalized outreach. Uses web research by default and can be enhanced with enrichment/CRM/email connectors. Trigger with "draft outreach to [person/company]", "write cold email", or "reach out to [name]".
---

# Draft Outreach

Research first, then draft. This skill never produces generic outreach.

## Required Execution Sequence
1. Research the person/company first.
2. Identify one strong personalization hook.
3. Draft concise outreach with a clear CTA.
4. Offer follow-up sequence.

## Connectors (Optional)
| Connector | What It Adds |
|-----------|--------------|
| Enrichment | Verified email/phone and deeper background |
| CRM | Prior relationship history |
| Email | Create draft in mailbox directly |

## Research Rules
- Always include at least one concrete signal (news, hiring, post, initiative).
- If no strong signal exists, be explicit and use role-based relevance.
- Do not fabricate personalization.

## Email Rules
- Plain text only (no markdown markers in body).
- Keep under 120 words for cold outreach unless user requests longer.
- One CTA only.
- Subject line under 50 characters.

## Output Template

```markdown
# Outreach Draft: [Name] @ [Company]

## Research Summary
- Target: [Role and company]
- Hook: [Specific signal]
- Goal: [Desired next action]

## Email Draft
To: [Email or note if unknown]
Subject: [Subject]

[Body text]

## Subject Alternatives
1. [Option]
2. [Option]

## LinkedIn Alternative
[Connection request + follow-up]
```

## Follow-up Sequence
- Day 3: short nudge with new angle
- Day 7: value-based follow-up
- Day 14: respectful break-up note

## Related Skills
- **account-research**
- **call-prep**
