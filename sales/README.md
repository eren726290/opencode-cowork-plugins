# opencode-sales-agent

Standalone OpenCode CLI sales sub-agent plugin for Windows 11.

- Primary command: `/sales`
- Package name: `opencode-sales-agent`
- Source inspiration: Anthropic knowledge-work-plugins sales plugin
- License: Apache-2.0

## Features

- `/sales` router command with subcommand flow:
  - `call-summary`
  - `forecast`
  - `pipeline-review`
  - `create-asset`
- Sales skills converted for OpenCode:
  - `account-research`
  - `call-prep`
  - `competitive-intelligence`
  - `create-an-asset`
  - `daily-briefing`
  - `draft-outreach`
- Optional MCP connector catalog for CRM, enrichment, chat, docs, and transcripts
- Windows-native state management:
  - `%USERPROFILE%\.local\share\opencode-sales-agent\state.json`

## Windows 11 Installation

## 1) Install package

```powershell
npm install -g opencode-sales-agent
```

## 2) Register plugin in OpenCode config

Open config file:

```powershell
New-Item -ItemType Directory -Path "$env:USERPROFILE\.config\opencode" -Force
notepad "$env:USERPROFILE\.config\opencode\opencode.jsonc"
```

Add package to plugin array:

```jsonc
{
  "$schema": "https://opencode.ai/config.json",
  "plugin": [
    "opencode-sales-agent"
  ]
}
```

## 3) Restart OpenCode

```powershell
opencode
```

## 4) Use the sales command

```text
/sales
```

Or direct subcommand routing:

```text
/sales call-summary
/sales forecast
/sales pipeline-review
/sales create-asset
```

## Optional MCP Setup

All connectors are optional. If not configured, commands still run with manual input and web research.

Connector definitions are provided in:
- `mcp/config.json`
- `mcp/CONNECTORS.md`

Copy relevant entries into `%USERPROFILE%\.config\opencode\opencode.jsonc` under `mcp`.

### Included connector catalog

- `slack`
- `hubspot`
- `close`
- `clay`
- `zoominfo`
- `notion`
- `atlassian`
- `fireflies`
- `ms365`

Example enabling HubSpot:

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

## Runtime State

Runtime state is stored outside the repository:

- `%USERPROFILE%\.local\share\opencode-sales-agent\state.json`

If missing or invalid, the plugin recreates defaults automatically.

## Development

```powershell
npm install
npm run build
```

## Attribution

This project is adapted from the Anthropic `knowledge-work-plugins/sales` plugin model and converted for standalone OpenCode CLI plugin usage.

## Credits & Attribution

This plugin is based on the Sales plugin from Anthropic's
knowledge-work-plugins repository, licensed under Apache 2.0.

- **Original source:** https://github.com/anthropics/knowledge-work-plugins/tree/main/sales
- **Architecture inspired by:** [oh-my-opencode](https://github.com/code-yeongyu/oh-my-opencode)
- **License:** Apache 2.0 -- see LICENSE file for details
