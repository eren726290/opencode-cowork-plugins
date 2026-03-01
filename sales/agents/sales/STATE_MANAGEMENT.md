# Sales Agent State Management

## Runtime State Path (Windows)
- `%USERPROFILE%\.local\share\opencode-sales-agent\state.json`

## Purpose
- Persist seller profile preferences between sessions.
- Preserve default command preferences for `/sales` routing.
- Keep runtime state independent from repository files.

## Skill Guidance
- Skills may read seller context from runtime state if available.
- Skills must not fail if state file is missing.
- If state is unavailable, ask the user for missing context and continue.

## Data Safety Rules
- Do not store secrets in state.
- Keep PII minimal and user-provided.
- On parse corruption, recover using defaults and preserve bad file backup.
