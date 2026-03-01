# Marketing Agent State Management

## Runtime path (Windows)
- `%USERPROFILE%\.local\share\opencode-marketing-agent\state.json`

## Behavior rules
- If state is missing, create defaults and continue.
- If state is invalid JSON, backup the bad file and recover defaults.
- Do not store secrets in state.
- Keep workflows operational without state by asking user for missing context.
