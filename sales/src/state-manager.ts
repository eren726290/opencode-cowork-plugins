import fs from "node:fs"
import path from "node:path"

import type { SalesState } from "./types.js"
import { getSalesStateDir, getSalesStateFilePath } from "./windows-paths.js"

function createDefaultState(): SalesState {
  return {
    sellerProfile: {},
    preferences: {},
    updatedAt: new Date().toISOString(),
  }
}

export function initializeState(): SalesState {
  const stateDir = getSalesStateDir()
  const stateFilePath = getSalesStateFilePath()

  fs.mkdirSync(stateDir, { recursive: true })

  if (!fs.existsSync(stateFilePath)) {
    const initialState = createDefaultState()
    fs.writeFileSync(stateFilePath, `${JSON.stringify(initialState, null, 2)}\n`, "utf8")
    return initialState
  }

  try {
    const raw = fs.readFileSync(stateFilePath, "utf8")
    const parsed = JSON.parse(raw) as SalesState
    return parsed
  } catch {
    const backupPath = path.join(stateDir, `state.bad-${Date.now()}.json`)
    fs.copyFileSync(stateFilePath, backupPath)
    const repaired = createDefaultState()
    fs.writeFileSync(stateFilePath, `${JSON.stringify(repaired, null, 2)}\n`, "utf8")
    return repaired
  }
}
