import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

import type { Plugin } from "@opencode-ai/plugin"

import { installMarketingAssets } from "./asset-installer.js"
import { mergeMcpConfig, readPluginMcpConfig } from "./mcp-merge.js"
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
      throw new Error("Unable to resolve package root for opencode-marketing-agent")
    }

    cursor = parent
  }
}

const OpenCodeMarketingAgentPlugin: Plugin = async () => {
  let packageRoot: string | null = null

  try {
    const currentFilePath = fileURLToPath(import.meta.url)
    packageRoot = resolvePackageRoot(currentFilePath)

    const installResult = installMarketingAssets(packageRoot)
    const state = initializeState()

    console.log(
      `[opencode-marketing-agent] Installed ${installResult.commandsInstalled.length} commands and ${installResult.skillsInstalled.length} skill files.`,
    )
    console.log(`[opencode-marketing-agent] State ready at ${state.updatedAt}.`)
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    console.warn(`[opencode-marketing-agent] Startup warning: ${message}`)
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
        console.log(`[opencode-marketing-agent] Registered ${connectorCount} MCP connectors from mcp/config.json.`)
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error)
        console.warn(`[opencode-marketing-agent] MCP registration warning: ${message}`)
      }
    },
  }
}

export default OpenCodeMarketingAgentPlugin
