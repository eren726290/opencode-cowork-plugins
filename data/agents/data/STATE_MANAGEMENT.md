# Data Agent State Management

## Runtime state path (Windows)
- `%USERPROFILE%\.local\share\opencode-data-agent\state.json`

## Behavior rules
- Create state defaults if missing.
- If state is invalid JSON, backup and repair with defaults.
- Do not store credentials/secrets in state.
- Output files (SQL/PNG/HTML/CSV) are generated at runtime in user workspace unless user specifies path.
