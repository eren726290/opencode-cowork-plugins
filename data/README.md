# opencode-data-agent

Standalone OpenCode data sub-agent plugin for Windows 11.

## Commands
- `/data` (master hub)
- `/analyze`
- `/explore-data`
- `/write-query`
- `/create-viz`
- `/build-dashboard`
- `/validate`

## Skills
- `sql-queries`
- `data-exploration`
- `data-visualization`
- `statistical-analysis`
- `data-validation`
- `interactive-dashboard-builder`
- `data-context-extractor`

## Installation (Windows)

```powershell
npm install -g opencode-data-agent
```

Add plugin to `%USERPROFILE%\.config\opencode\opencode.jsonc`:

```jsonc
{
  "$schema": "https://opencode.ai/config.json",
  "plugin": [
    "opencode-data-agent"
  ]
}
```

Restart OpenCode and run `/data`.

## MCP behavior
- MCP defaults are auto-registered from `mcp/config.json` via plugin `config` hook.
- User `opencode.jsonc` values override plugin defaults.
- Connectors are optional in practice; if unavailable, commands can run in manual input mode.

## Python requirement
- Required for full runtime output in `/create-viz` and `/build-dashboard`.
- Windows install: https://www.python.org/downloads/
- If Python is unavailable, plugin falls back to instructions/code output.

## SQL behavior
- `/write-query` generates SQL code only.
- User runs SQL against their own database/warehouse environment.

## Runtime state
- `%USERPROFILE%\.local\share\opencode-data-agent\state.json`

## Development

```powershell
npm install
npm run build
npm run typecheck
```

## Credits & Attribution

This plugin is based on the Data plugin from Anthropic's
knowledge-work-plugins repository, licensed under Apache 2.0.

- **Original source:** https://github.com/anthropics/knowledge-work-plugins/tree/main/data
- **Architecture inspired by:** [oh-my-opencode](https://github.com/code-yeongyu/oh-my-opencode)
- **License:** Apache 2.0 -- see LICENSE file for details
