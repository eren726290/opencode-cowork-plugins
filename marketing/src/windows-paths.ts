import os from "node:os"
import path from "node:path"

export function getUserHomeDir(): string {
  return process.env.USERPROFILE || process.env.HOME || os.homedir()
}

export function getOpenCodeConfigDir(): string {
  if (process.env.OPENCODE_CONFIG_DIR && process.env.OPENCODE_CONFIG_DIR.trim().length > 0) {
    return path.resolve(process.env.OPENCODE_CONFIG_DIR)
  }

  return path.join(getUserHomeDir(), ".config", "opencode")
}

export function getOpenCodeCommandsDir(): string {
  return path.join(getOpenCodeConfigDir(), "commands")
}

export function getOpenCodeSkillsDir(): string {
  return path.join(getOpenCodeConfigDir(), "skills")
}

export function getStateDir(): string {
  return path.join(getUserHomeDir(), ".local", "share", "opencode-marketing-agent")
}

export function getStateFilePath(): string {
  return path.join(getStateDir(), "state.json")
}
