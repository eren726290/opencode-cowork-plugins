export interface DataState {
  defaultDialect?: string
  defaultWarehouse?: string
  lastCommand?: string
  updatedAt: string
}

export type RecordUnknown = Record<string, unknown>

export type McpServerDefinition = {
  type: "remote" | "local"
  enabled?: boolean
  url?: string
  command?: string[]
  environment?: Record<string, string>
  headers?: Record<string, string>
  oauth?: boolean
}
