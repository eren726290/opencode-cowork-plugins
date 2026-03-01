import fs from "node:fs"
import path from "node:path"

import type { McpServerDefinition, RecordUnknown } from "./types.js"

function asRecord(value: unknown): RecordUnknown {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return {}
  }

  return value as RecordUnknown
}

export function readPluginMcpConfig(packageRoot: string): Record<string, McpServerDefinition> {
  const configPath = path.join(packageRoot, "mcp", "config.json")
  if (!fs.existsSync(configPath)) {
    return {}
  }

  const parsed = JSON.parse(fs.readFileSync(configPath, "utf8")) as RecordUnknown
  return asRecord(parsed.mcp) as Record<string, McpServerDefinition>
}

export function mergeMcpConfig(config: RecordUnknown, pluginMcp: Record<string, McpServerDefinition>): void {
  const existing = asRecord(config.mcp)
  config.mcp = {
    ...pluginMcp,
    ...existing,
  }
}
