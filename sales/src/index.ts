import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

import type { Plugin } from "@opencode-ai/plugin"

import { installSalesAssets } from "./command-installer.js"
import { initializeState } from "./state-manager.js"

type RecordUnknown = Record<string, unknown>

type McpServerDefinition = {
  type: "remote" | "local"
  enabled?: boolean
  url?: string
  command?: string[]
  environment?: Record<string, string>
  headers?: Record<string, string>
  oauth?: boolean
}

function resolvePackageRoot(currentFile: string): string {
  let cursor = path.dirname(currentFile)

  while (true) {
    const packageJsonPath = path.join(cursor, "package.json")
    if (fs.existsSync(packageJsonPath)) {
      return cursor
    }

    const parent = path.dirname(cursor)
    if (parent == cursor) {
      throw new Error("Unable to resolve package root for opencode-sales-agent")
    }

    cursor = parent
  }
}

function asRecord(value: unknown): RecordUnknown {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return {}
  }

  return value as RecordUnknown
}

function readPluginMcpConfig(packageRoot: string): Record<string, McpServerDefinition> {
  const configPath = path.join(packageRoot, "mcp", "config.json")
  if (!fs.existsSync(configPath)) {
    return {}
  }

  const parsed = JSON.parse(fs.readFileSync(configPath, "utf8")) as RecordUnknown
  const mcp = asRecord(parsed.mcp)
  return mcp as Record<string, McpServerDefinition>
}

function mergeMcpConfig(config: RecordUnknown, pluginMcp: Record<string, McpServerDefinition>): void {
  const existing = asRecord(config.mcp)
  config.mcp = {
    ...pluginMcp,
    ...existing,
  }
}

const OpenCodeSalesAgentPlugin: Plugin = async () => {
  let packageRoot: string | null = null

  try {
    const currentFilePath = fileURLToPath(import.meta.url)
    packageRoot = resolvePackageRoot(currentFilePath)

    const installResult = installSalesAssets(packageRoot)
    const state = initializeState()

    console.log(
      "[opencode-sales-agent] Installed " +
        installResult.commandsInstalled.length +
        " commands and " +
        installResult.skillsInstalled.length +
        " skill files.",
    )
    console.log("[opencode-sales-agent] State ready at update time " + state.updatedAt + ".")
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    console.warn("[opencode-sales-agent] Startup warning: " + message)
  }

  return {
    config: async (config: RecordUnknown) => {
      if (!packageRoot) {
        return
      }

      try {
        const pluginMcp = readPluginMcpConfig(packageRoot)
        const connectorCount = Object.keys(pluginMcp).length

        if (connectorCount === 0) {
          return
        }

        mergeMcpConfig(config, pluginMcp)
        console.log(
          "[opencode-sales-agent] Registered " +
            connectorCount +
            " MCP connectors from mcp/config.json.",
        )
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error)
        console.warn("[opencode-sales-agent] MCP registration warning: " + message)
      }
    },
  }
}

export default OpenCodeSalesAgentPlugin
