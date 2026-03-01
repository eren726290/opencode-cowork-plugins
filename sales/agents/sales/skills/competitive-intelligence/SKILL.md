---
name: competitive-intelligence
description: Research your competitors and build an interactive battlecard. Outputs an HTML artifact with clickable competitor cards and a comparison matrix. Trigger with "competitive intel", "research competitors", "how do we compare to [competitor]", "battlecard for [competitor]", or "what's new with [competitor]".
---

# Competitive Intelligence

Research your competitors extensively and generate an interactive HTML battlecard you can use in deals.

## How It Works

```
┌─────────────────────────────────────────────────────────────────┐
│                  COMPETITIVE INTELLIGENCE                        │
├─────────────────────────────────────────────────────────────────┤
│  ALWAYS (works standalone via web search)                        │
│  ✓ Competitor product deep-dive: features, pricing, positioning │
│  ✓ Recent releases: what they've shipped in last 90 days        │
│  ✓ Your company releases: what you've shipped to counter        │
│  ✓ Differentiation matrix: where you win vs. where they win     │
│  ✓ Sales talk tracks: how to position against each competitor   │
│  ✓ Landmine questions: expose their weaknesses naturally        │
├─────────────────────────────────────────────────────────────────┤
│  OUTPUT: Interactive HTML Battlecard                             │
│  ✓ Comparison matrix overview                                    │
│  ✓ Clickable tabs for each competitor                           │
│  ✓ Dark theme, professional styling                             │
│  ✓ Self-contained HTML file — share or host anywhere            │
├─────────────────────────────────────────────────────────────────┤
│  SUPERCHARGED (when you connect your tools)                      │
│  + CRM: Win/loss data, competitor mentions in closed deals      │
│  + Docs: Existing battlecards, competitive playbooks            │
│  + Chat: Internal intel, field reports from colleagues          │
│  + Transcripts: Competitor mentions in customer calls           │
└─────────────────────────────────────────────────────────────────┘
```

## Required Inputs
- Your company and what you sell
- Competitors to analyze (1-5)

## Optional Inputs
- Deal context where competitor appears
- Known objections
- Existing battlecards to merge

## Output Requirements
- Generate a single self-contained HTML file.
- Include a top-level matrix tab and one tab per competitor.
- Include sections per competitor:
  - Profile and positioning
  - Recent releases
  - Where they win / where you win
  - Talk tracks and objection responses
  - Landmine questions

## Data Gathering Order
1. Web search for each competitor (features, pricing, news, reviews, changelog).
2. Web search for your current release signals and positioning.
3. If available, augment with CRM/doc/chat/transcript signals.
4. Synthesize into actionable sales guidance, not generic summaries.

## Talk Track Rules
- Never trash-talk competitors.
- Focus on customer outcomes and trade-offs.
- Use evidence-backed claims when possible.
- Provide concise scripts sellers can use live on calls.

## Delivery Template

```markdown
## Battlecard Created

- Company: [Your Company]
- Competitors: [List]
- Sources: [Web + optional internal systems]

Use this artifact:
- Pre-call prep: review competitor tab and talk tracks.
- Live call: use landmine questions and objection responses.
- Post-call: update with new win/loss field intel.
```

## Refresh Guidance
- Refresh monthly, before strategic deals, and after major competitor releases.

## Related Skills
- **account-research**
- **call-prep**
- **create-an-asset**
