# MCP Connectors (Optional)

All connectors are optional. The sales agent remains usable with standalone input + web research.

## OpenCode Config Location (Windows)
- `%USERPROFILE%\.config\opencode\opencode.jsonc`

Add connector entries under `mcp` and set `enabled: true` for the ones you use.

## Connector Catalog

| Connector | Category | URL |
|---|---|---|
| slack | Chat | `https://mcp.slack.com/mcp` |
| hubspot | CRM | `https://mcp.hubspot.com/anthropic` |
| close | CRM | `https://mcp.close.com/mcp` |
| clay | Enrichment | `https://api.clay.com/v3/mcp` |
| zoominfo | Enrichment | `https://mcp.zoominfo.com/mcp` |
| notion | Knowledge Base | `https://mcp.notion.com/mcp` |
| atlassian | Project Tracker | `https://mcp.atlassian.com/v1/mcp` |
| fireflies | Meeting Transcripts | `https://api.fireflies.ai/mcp` |
| ms365 | Email + Calendar | `https://microsoft365.mcp.claude.com/mcp` |

## Category Placeholder Mapping

The converted skills/commands use category concepts to stay vendor-agnostic:

- `chat` -> Slack, Teams
- `crm` -> HubSpot, Close, Salesforce, Pipedrive, Copper
- `data-enrichment` -> Clay, ZoomInfo, Apollo, Clearbit
- `email` -> Microsoft 365, Gmail
- `calendar` -> Microsoft 365, Google Calendar
- `knowledge-base` -> Notion, Confluence, Guru
- `conversation-intelligence` -> Fireflies, Gong, Chorus, Otter
- `project-tracker` -> Atlassian, Linear, Asana

## Example Snippet (Enable One Connector)

```jsonc
{
  "mcp": {
    "hubspot": {
      "type": "remote",
      "url": "https://mcp.hubspot.com/anthropic",
      "enabled": true
    }
  }
}
```

## Fail-Soft Behavior

If a connector is not configured or authentication fails:
- commands continue with manual input
- skills continue with web research
- the agent provides a short setup hint but does not stop execution

## PowerShell Quick Check

```powershell
Get-Content "$env:USERPROFILE\.config\opencode\opencode.jsonc"
```
