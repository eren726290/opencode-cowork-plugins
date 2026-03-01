import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

import type { Plugin } from "@opencode-ai/plugin"

import { installDataAssets } from "./asset-installer.js"
import { mergeMcpConfig, readPluginMcpConfig } from "./mcp-merge.js"
import { checkPythonAvailable } from "./python-check.js"
import { initializeState } from "./state-manager.js"
import type { RecordUnknown } from "./types.js"

function resolvePackageRoot(currentFile: string): string {
  let cursor = path.dirname(currentFile)

  while (true) {
    const packageJsonPath = path.join(cursor, "package.json")
    if (fs.existsSync(packageJsonPath)) {
      return cursor
    }

    const parent = path.dirname(cursor)
    if (parent === cursor) {
      throw new Error("Unable to resolve package root for opencode-data-agent")
    }

    cursor = parent
  }
}

const OpenCodeDataAgentPlugin: Plugin = async () => {
  let packageRoot: string | null = null

  try {
    const currentFilePath = fileURLToPath(import.meta.url)
    packageRoot = resolvePackageRoot(currentFilePath)

    const installResult = installDataAssets(packageRoot)
    const state = initializeState()
    const pythonAvailable = checkPythonAvailable()

    console.log(
      `[opencode-data-agent] Installed ${installResult.commandsInstalled.length} commands and ${installResult.skillsInstalled.length} skill files.`,
    )
    console.log(`[opencode-data-agent] State ready at ${state.updatedAt}.`)

    if (!pythonAvailable) {
      console.warn(
        "[opencode-data-agent] Python not found. /create-viz and /build-dashboard will provide instructions/code only until python is installed.",
      )
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    console.warn(`[opencode-data-agent] Startup warning: ${message}`)
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
        console.log(`[opencode-data-agent] Registered ${connectorCount} MCP connectors from mcp/config.json.`)
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error)
        console.warn(`[opencode-data-agent] MCP registration warning: ${message}`)
      }
    },
  }
}

export default OpenCodeDataAgentPlugin
