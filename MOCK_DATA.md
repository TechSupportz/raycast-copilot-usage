# Mock Data for Screenshots

This branch contains mock data configurations to easily test and take screenshots of the extension with realistic usage data at different levels.

## How to Use Mock Data

### Setting Up

1. Make sure you're on the `feature/mock-data-for-screenshots` branch
2. Build the extension: `npm run build`
3. Run in dev mode: `npm run dev`

### Using Mock Data

The extension will automatically use mock data when you set the GitHub token to start with "mock". This is useful for:
- Taking consistent screenshots
- Testing different usage scenarios
- Demonstrating the extension without needing a real GitHub token

### Token Values

Use these special token values in the Raycast preferences to trigger different mock data scenarios:

| Token Value | Scenario | Usage Level |
|---|---|---|
| `mock` | 270 total requests (90% of Pro quota) | Medium usage (Yellow) - **Default** |
| `mock-low` | 80 total requests (27% of Pro quota) | Low usage (Green) |
| `mock-medium` | 270 total requests (90% of Pro quota) | Medium usage (Yellow) |
| `mock-high` | 285 total requests (95% of Pro quota) | High usage (Red) |

**Tip:** Just use `mock` for quick testing - it defaults to the medium scenario which shows a good variety of models and the yellow usage indicator.

### Steps to Take Screenshots

1. Open Raycast and import the extension from this branch
2. Go to Raycast Preferences → Extensions → GitHub Copilot Usage
3. Enter one of the mock token values above (e.g., `mock-low`)
4. Run the "View Copilot Usage" command
5. Use Window Capture (set in Raycast Advanced Preferences) to take screenshots

### Mock Data Details

All mock data uses the latest AI models available in GitHub Copilot as of February 2026:

#### Low Usage (mock-low)
- GPT-4.1: 40 requests
- Claude Sonnet 4.5: 25 requests
- Gemini 2.5 Pro: 15 requests
- Total: 80 requests (27% of Pro quota)

#### Medium Usage (mock-medium)
- GPT-5.1: 110 requests
- Claude Sonnet 4.5: 80 requests
- Claude Opus 4.5: 20 requests
- Gemini 3 Pro: 35 requests
- GPT-5.1-Codex-Mini: 25 requests
- Total: 270 requests (90% of Pro quota)

#### High Usage (mock-high)
- GPT-5.2: 145 requests
- Claude Sonnet 4.5: 50 requests
- Claude Opus 4.5: 30 requests
- Gemini 3 Pro: 25 requests
- GPT-5.1-Codex: 35 requests
- Total: 285 requests (95% of Pro quota)

## Important Notes

- Mock data is used when the GitHub token starts with "mock" (e.g., "mock", "mock-low", "mock-medium", "mock-high")
- This works in both development and production builds for testing purposes
- Mock data will not be included when you submit to the Raycast Store
- Screenshots created with mock data will show realistic usage patterns

## Creating Screenshots

For best results when capturing screenshots:

1. Set a background with good contrast (use Raycast Wallpapers)
2. Capture each mock scenario (low, medium, high usage)
3. Use the same background for consistency
4. Ensure the extension window is clearly visible
5. Dimensions: 2000x1250px (16:10 ratio)

After taking screenshots, merge this branch back to main for submission.
