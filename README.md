# OpenCode Plugins

Standalone OpenCode CLI plugins for Windows 11. Ported from [Anthropic's knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins).

## Available Plugins

| Plugin | Command | Description |
|--------|---------|-------------|
| [sales](./sales) | `/sales` | Research prospects, prep for calls, pipeline review, draft outreach |
| [marketing](./marketing) | `/marketing` | Draft content, plan campaigns, brand review, performance reports |
| [data](./data) | `/data` | Query, visualize, analyze datasets, build dashboards |

## Installation

```powershell
# Install plugins globally
npm install -g opencode-sales-agent
npm install -g opencode-marketing-agent
npm install -g opencode-data-agent
```

Then add to your OpenCode config (`%USERPROFILE%\.config\opencode\opencode.jsonc`):

```jsonc
{
  "$schema": "https://opencode.ai/config.json",
  "plugin": [
    "opencode-sales-agent",
    "opencode-marketing-agent",
    "opencode-data-agent"
  ]
}
```

Restart OpenCode and use the commands:

```text
/sales
/marketing
/data
```

## Plugin Structure

Each plugin follows this structure:

```
plugin-name/
├── src/              # TypeScript source code
├── agents/           # Skills and commands
├── mcp/              # MCP connector configs
├── state/            # Runtime state (not committed)
├── dist/             # Built JavaScript (generated on publish)
├── package.json
├── README.md
├── CHANGELOG.md
├── LICENSE
└── tsconfig.json
```

## Development

```powershell
# Clone the repo
git clone https://github.com/eren726290/opencode-plugins.git
cd opencode-plugins

# Work on a plugin
cd sales  # or marketing or data

# Install dependencies
npm install

# Build
npm run build

# Type check
npm run typecheck
```

## Credits & Attribution

- **Original plugins:** [Anthropic knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins)
- **Architecture inspired by:** [oh-my-opencode](https://github.com/code-yeongyu/oh-my-opencode)
- **License:** Apache 2.0
