# Windows Setup

## Prerequisites
```powershell
node -v
npm -v
```

## Install plugin
```powershell
npm install -g opencode-marketing-agent
```

## Add to OpenCode plugin config
```powershell
New-Item -ItemType Directory -Path "$env:USERPROFILE\.config\opencode" -Force
notepad "$env:USERPROFILE\.config\opencode\opencode.jsonc"
```

Add:
```jsonc
{
  "plugin": ["opencode-marketing-agent"]
}
```

## Start
```powershell
opencode
```
Then run `/marketing`.
