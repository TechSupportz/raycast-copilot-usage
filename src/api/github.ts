import { UsageResponse } from "../types/usage"
import { mockUsageData } from "./mockData"

const GITHUB_API_BASE = "https://api.github.com"
const API_VERSION = "2022-11-28"

export class GitHubAPIError extends Error {
    constructor(
        message: string,
        public statusCode?: number,
    ) {
        super(message)
        this.name = "GitHubAPIError"
    }
}

export async function fetchCopilotUsage(
    username: string,
    token: string,
    year?: number,
    month?: number,
): Promise<UsageResponse> {
    // Mock mode - return mock data when token starts with "mock"
    if (token.startsWith("mock")) {
        // token values: "mock", "mock-low", "mock-medium", "mock-high"
        // "mock" defaults to "medium" scenario
        let mockLevel: keyof typeof mockUsageData = "medium"
        
        if (token === "mock-low") {
            mockLevel = "low"
        } else if (token === "mock-high") {
            mockLevel = "high"
        } else if (token === "mock" || token === "mock-medium") {
            mockLevel = "medium"
        }
        
        await new Promise(resolve => setTimeout(resolve, 500)) // Simulate network delay
        return mockUsageData[mockLevel]
    }

    const currentDate = new Date()
    const queryYear = year || currentDate.getFullYear()
    const queryMonth = month || currentDate.getMonth() + 1

    const url = new URL(
        `${GITHUB_API_BASE}/users/${username}/settings/billing/premium_request/usage`,
    )
    url.searchParams.append("year", queryYear.toString())
    url.searchParams.append("month", queryMonth.toString())

    try {
        const response = await fetch(url.toString(), {
            headers: {
                Accept: "application/vnd.github+json",
                Authorization: `Bearer ${token}`,
                "X-GitHub-Api-Version": API_VERSION,
            },
        })

        if (!response.ok) {
            if (response.status === 401) {
                throw new GitHubAPIError(
                    "Invalid GitHub token. Please check your token in preferences.",
                    401,
                )
            } else if (response.status === 403) {
                throw new GitHubAPIError(
                    "Access forbidden. Make sure your token has 'Plan' read permissions.",
                    403,
                )
            } else if (response.status === 404) {
                throw new GitHubAPIError("User not found or no usage data available.", 404)
            } else {
                throw new GitHubAPIError(
                    `GitHub API error: ${response.statusText}`,
                    response.status,
                )
            }
        }

        const data = await response.json()
        return data as UsageResponse
    } catch (error) {
        if (error instanceof GitHubAPIError) {
            throw error
        }
        if (error instanceof Error) {
            throw new GitHubAPIError(`Network error: ${error.message}`)
        }
        throw new GitHubAPIError("Unknown error occurred while fetching usage data")
    }
}

export async function getCurrentUser(token: string): Promise<string> {
    // Mock mode - return mock username when token starts with "mock"
    if (token.startsWith("mock")) {
        await new Promise(resolve => setTimeout(resolve, 300)) // Simulate network delay
        return "octocat"
    }

    const url = `${GITHUB_API_BASE}/user`

    try {
        const response = await fetch(url, {
            headers: {
                Accept: "application/vnd.github+json",
                Authorization: `Bearer ${token}`,
                "X-GitHub-Api-Version": API_VERSION,
            },
        })

        if (!response.ok) {
            throw new GitHubAPIError("Failed to fetch user information", response.status)
        }

        const data = (await response.json()) as { login: string }
        return data.login
    } catch (error) {
        if (error instanceof GitHubAPIError) {
            throw error
        }
        throw new GitHubAPIError("Failed to fetch current user")
    }
}
