# opencode-marketing-agent

Standalone OpenCode marketing sub-agent plugin for Windows 11.

## Commands
- `/marketing` (hub command)
- `/draft-content`
- `/campaign-plan`
- `/brand-review`
- `/competitive-brief`
- `/performance-report`
- `/seo-audit`
- `/email-sequence`

## Skills
- `content-creation`
- `campaign-planning`
- `brand-voice`
- `competitive-analysis`
- `performance-analytics`

## Installation (Windows)

```powershell
npm install -g opencode-marketing-agent
```

Edit `%USERPROFILE%\.config\opencode\opencode.jsonc`:

```jsonc
{
  "$schema": "https://opencode.ai/config.json",
  "plugin": [
    "opencode-marketing-agent"
  ]
}
```

Restart OpenCode and run `/marketing`.

## MCP behavior
- MCP defaults are auto-registered by plugin `config` hook from `mcp/config.json`.
- User `opencode.jsonc` values override plugin defaults.
- Connectors are optional and workflows remain fail-soft.

## Runtime state
- `%USERPROFILE%\.local\share\opencode-marketing-agent\state.json`

## Development

```powershell
npm install
npm run build
npm run typecheck
```

## Attribution
- Based on Anthropic `knowledge-work-plugins/marketing` structure and converted for standalone OpenCode plugin usage.

## Credits & Attribution

This plugin is based on the Marketing plugin from Anthropic's
knowledge-work-plugins repository, licensed under Apache 2.0.

- **Original source:** https://github.com/anthropics/knowledge-work-plugins/tree/main/marketing
- **Architecture inspired by:** [oh-my-opencode](https://github.com/code-yeongyu/oh-my-opencode)
- **License:** Apache 2.0 -- see LICENSE file for details
