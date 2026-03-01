import fs from "node:fs"
import path from "node:path"

import { getOpenCodeCommandsDir, getOpenCodeSkillsDir } from "./windows-paths.js"
import type { InstallResult } from "./types.js"

function ensureDirectory(dirPath: string): void {
  fs.mkdirSync(dirPath, { recursive: true })
}

function copyDirectoryRecursive(sourceDir: string, targetDir: string, installed: string[]): void {
  if (!fs.existsSync(sourceDir)) {
    return
  }

  ensureDirectory(targetDir)

  for (const entry of fs.readdirSync(sourceDir, { withFileTypes: true })) {
    const sourcePath = path.join(sourceDir, entry.name)
    const targetPath = path.join(targetDir, entry.name)

    if (entry.isDirectory()) {
      copyDirectoryRecursive(sourcePath, targetPath, installed)
      continue
    }

    fs.copyFileSync(sourcePath, targetPath)
    installed.push(targetPath)
  }
}

export function installSalesAssets(packageRoot: string): InstallResult {
  const commandSourceDir = path.join(packageRoot, "agents", "sales", "commands")
  const skillsSourceDir = path.join(packageRoot, "agents", "sales", "skills")

  const commandTargetDir = getOpenCodeCommandsDir()
  const skillsTargetDir = path.join(getOpenCodeSkillsDir(), "sales")

  const commandsInstalled: string[] = []
  const skillsInstalled: string[] = []

  copyDirectoryRecursive(commandSourceDir, commandTargetDir, commandsInstalled)
  copyDirectoryRecursive(skillsSourceDir, skillsTargetDir, skillsInstalled)

  return {
    commandsInstalled,
    skillsInstalled,
  }
}
