import fs from "node:fs"
import path from "node:path"

import type { DataState } from "./types.js"
import { getStateDir, getStateFilePath } from "./windows-paths.js"

function defaults(): DataState {
  return {
    updatedAt: new Date().toISOString(),
  }
}

export function initializeState(): DataState {
  const stateDir = getStateDir()
  const stateFile = getStateFilePath()

  fs.mkdirSync(stateDir, { recursive: true })

  if (!fs.existsSync(stateFile)) {
    const initial = defaults()
    fs.writeFileSync(stateFile, JSON.stringify(initial, null, 2) + "\n", "utf8")
    return initial
  }

  try {
    const parsed = JSON.parse(fs.readFileSync(stateFile, "utf8")) as DataState
    return parsed
  } catch {
    const backup = path.join(stateDir, `state.bad-${Date.now()}.json`)
    fs.copyFileSync(stateFile, backup)
    const repaired = defaults()
    fs.writeFileSync(stateFile, JSON.stringify(repaired, null, 2) + "\n", "utf8")
    return repaired
  }
}
