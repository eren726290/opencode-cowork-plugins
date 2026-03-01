# create-an-asset

Build customer-facing sales assets tailored to a specific account and deal stage.

## Use Cases
- Executive alignment page before a stakeholder review
- Technical architecture walkthrough for a POC
- One-pager leave-behind after discovery
- Deck-style narrative for proposal presentation

## Trigger Examples
- `/sales create-asset Acme Corp`
- `create an asset for tomorrow's exec review`
- `build a workflow demo for the data team`

## Minimum Input
1. Prospect company
2. Audience type
3. Goal and desired CTA
4. Preferred format

## Output
- Single self-contained HTML file
- Ready to share as attachment or host on static hosting

## Best Practice
- Run `account-research` first if context is limited.
- Use `competitive-intelligence` when the deal is competitive.
