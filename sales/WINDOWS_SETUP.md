# Windows Setup Guide

This guide targets Windows 11 x64 with native OpenCode CLI.

## 1) Verify Node and npm

```powershell
node -v
npm -v
```

## 2) Install plugin package

```powershell
npm install -g opencode-sales-agent
```

## 3) Configure OpenCode

```powershell
New-Item -ItemType Directory -Path "$env:USERPROFILE\.config\opencode" -Force
notepad "$env:USERPROFILE\.config\opencode\opencode.jsonc"
```

Add:

```jsonc
{
  "plugin": ["opencode-sales-agent"]
}
```

## 4) Start OpenCode and run sales router

```powershell
opencode
```

In OpenCode:

```text
/sales
```

## 5) Optional connector setup

Copy connector entries from `mcp/config.json` into your OpenCode config and enable only what you use.

## Paths Used by This Plugin

- OpenCode config: `%USERPROFILE%\.config\opencode\opencode.jsonc`
- Installed commands: `%USERPROFILE%\.config\opencode\commands\`
- Installed skills: `%USERPROFILE%\.config\opencode\skills\sales\`
- Runtime state: `%USERPROFILE%\.local\share\opencode-sales-agent\state.json`
