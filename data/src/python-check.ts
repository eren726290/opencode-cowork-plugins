import { spawnSync } from "node:child_process"

export function checkPythonAvailable(): boolean {
  const result = spawnSync("python", ["--version"], { encoding: "utf8" })
  return result.status === 0
}
