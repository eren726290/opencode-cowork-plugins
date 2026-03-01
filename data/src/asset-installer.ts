import fs from "node:fs"
import path from "node:path"

import { getOpenCodeCommandsDir, getOpenCodeSkillsDir } from "./windows-paths.js"

function ensureDir(dir: string): void {
  fs.mkdirSync(dir, { recursive: true })
}

function copyDirRecursive(sourceDir: string, targetDir: string, installed: string[]): void {
  if (!fs.existsSync(sourceDir)) {
    return
  }

  ensureDir(targetDir)

  for (const entry of fs.readdirSync(sourceDir, { withFileTypes: true })) {
    const src = path.join(sourceDir, entry.name)
    const dst = path.join(targetDir, entry.name)

    if (entry.isDirectory()) {
      copyDirRecursive(src, dst, installed)
      continue
    }

    fs.copyFileSync(src, dst)
    installed.push(dst)
  }
}

export function installDataAssets(packageRoot: string): { commandsInstalled: string[]; skillsInstalled: string[] } {
  const commandSource = path.join(packageRoot, "agents", "data", "commands")
  const skillSource = path.join(packageRoot, "agents", "data", "skills")

  const commandTarget = getOpenCodeCommandsDir()
  const skillTarget = path.join(getOpenCodeSkillsDir(), "data")

  const commandsInstalled: string[] = []
  const skillsInstalled: string[] = []

  copyDirRecursive(commandSource, commandTarget, commandsInstalled)
  copyDirRecursive(skillSource, skillTarget, skillsInstalled)

  return { commandsInstalled, skillsInstalled }
}
