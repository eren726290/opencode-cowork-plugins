export interface SellerProfile {
  name?: string
  title?: string
  company?: string
  product?: string
}

export interface SalesState {
  sellerProfile: SellerProfile
  preferences: {
    defaultCommand?: "call-summary" | "forecast" | "pipeline-review"
  }
  updatedAt: string
}

export interface InstallResult {
  commandsInstalled: string[]
  skillsInstalled: string[]
}
