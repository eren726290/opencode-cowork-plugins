# Windows Setup

## 1) Verify prerequisites
```powershell
node -v
npm -v
python --version
```

## 2) Install plugin
```powershell
npm install -g opencode-data-agent
```

## 3) Configure OpenCode
```powershell
New-Item -ItemType Directory -Path "$env:USERPROFILE\.config\opencode" -Force
notepad "$env:USERPROFILE\.config\opencode\opencode.jsonc"
```

Add:
```jsonc
{
  "plugin": ["opencode-data-agent"]
}
```

## 4) Start OpenCode and run
```powershell
opencode
```
Then use:
```text
/ data
```
(Use `/data` without space.)
