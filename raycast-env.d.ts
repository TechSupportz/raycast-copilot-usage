/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** GitHub Personal Access Token - Personal Access Token with 'Plan' read permissions */
  "githubToken": string,
  /** GitHub Copilot Plan - Select your Copilot plan to track premium request quota */
  "copilotPlan": "free" | "pro" | "pro-plus" | "business" | "enterprise"
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `view-copilot-usage` command */
  export type ViewCopilotUsage = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `view-copilot-usage` command */
  export type ViewCopilotUsage = {}
}

