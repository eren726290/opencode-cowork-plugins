# Marketing MCP Connectors

All connectors are optional. The plugin remains usable with manual inputs and web research.

## OpenCode config path (Windows)
- `%USERPROFILE%\.config\opencode\opencode.jsonc`

## Included connector catalog

| Connector | Category | URL |
|---|---|---|
| slack | Chat | `https://mcp.slack.com/mcp` |
| canva | Design | `https://mcp.canva.com/mcp` |
| figma | Design | `https://mcp.figma.com/mcp` |
| hubspot | Marketing automation | `https://mcp.hubspot.com/anthropic` |
| amplitude | Product analytics | `https://mcp.amplitude.com/mcp` |
| notion | Knowledge base | `https://mcp.notion.com/mcp` |
| ahrefs | SEO | `https://api.ahrefs.com/mcp/mcp` |
| similarweb | SEO | `https://mcp.similarweb.com` |
| klaviyo | Email marketing | `https://mcp.klaviyo.com/mcp` |
| google-calendar | Calendar | `https://gcal.mcp.claude.com/mcp` |
| gmail | Email | `https://gmail.mcp.claude.com/mcp` |

## Setup guidance
- Plugin auto-registers these MCP definitions at runtime via `config` hook.
- Enable only connectors you use by overriding in your own `opencode.jsonc`.
- Provide credentials/auth in your OpenCode environment; plugin does not embed secrets.

## Example override in user config

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
