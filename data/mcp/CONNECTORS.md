# Data MCP Connectors

All connectors are optional at practical runtime. This plugin auto-registers MCP definitions via config hook, and user config values override plugin defaults.

## OpenCode config path (Windows)
- `%USERPROFILE%\.config\opencode\opencode.jsonc`

## Included connectors

| Connector | Category | URL | Notes |
|---|---|---|---|
| snowflake | Data warehouse | (placeholder) | Source plugin ships empty URL placeholder |
| databricks | Data warehouse | (placeholder) | Source plugin ships empty URL placeholder |
| bigquery | Data warehouse | `https://bigquery.googleapis.com/mcp` | |
| hex | Notebook | `https://app.hex.tech/mcp` | |
| amplitude | Product analytics | `https://mcp.amplitude.com/mcp` | |
| atlassian | Project tracker | `https://mcp.atlassian.com/v1/mcp` | |

## Setup guidance
- Plugin auto-registers these MCP entries at startup via `config` hook.
- Add or override connector settings in your own `opencode.jsonc`.
- Provide auth/credentials in your OpenCode environment.

## Example override (BigQuery)

```jsonc
{
  "mcp": {
    "bigquery": {
      "type": "remote",
      "url": "https://bigquery.googleapis.com/mcp",
      "enabled": true
    }
  }
}
```
