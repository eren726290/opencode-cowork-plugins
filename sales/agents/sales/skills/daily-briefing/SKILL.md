---
name: daily-briefing
description: Start your day with a prioritized sales briefing. Works standalone when you provide meetings and priorities, supercharged when you connect calendar, CRM, and email. Trigger with "morning briefing", "daily brief", "what's on my plate today", "prep my day", or "start my day".
---

# Daily Sales Briefing

Get a clear view of what matters most today.

## How It Works

```
┌─────────────────────────────────────────────────────────────────┐
│                      DAILY BRIEFING                              │
├─────────────────────────────────────────────────────────────────┤
│  ALWAYS (works standalone)                                       │
│  ✓ You provide today's meetings, key deals, priorities          │
│  ✓ I organize a prioritized action plan                          │
│  ✓ Output is a scannable 2-minute brief                          │
├─────────────────────────────────────────────────────────────────┤
│  SUPERCHARGED (when you connect your tools)                      │
│  + Calendar: pull today's meetings and attendees                │
│  + CRM: pipeline alerts, tasks, and deal health                 │
│  + Email: unread from key accounts and pending replies          │
│  + Enrichment: overnight account signals                        │
└─────────────────────────────────────────────────────────────────┘
```

## Prioritization Rules
1. Deals closing today/tomorrow with blockers
2. High-value meetings today requiring prep
3. Buyer emails waiting for response
4. Stale opportunities with high potential

## Output Template

```markdown
# Daily Briefing | [Date]

## #1 Priority
[Most important action and why]

## Today's Meetings
- [Time] [Company] - [prep action]

## Pipeline Alerts
- [Deal] - [risk] - [next action]

## Email Priorities
- [Contact] - [topic] - [needed response]

## Suggested Actions
1. [Action]
2. [Action]
3. [Action]

Run `/sales call-summary` after each major customer call.
```

## Quick Mode
If user asks for "quick brief" or "tldr", output only:
- Top priority
- Meeting count + top 2 meeting preps
- Top 2 pipeline alerts
- Single "Do now" action

## Related Skills
- **call-prep**
- **account-research**
