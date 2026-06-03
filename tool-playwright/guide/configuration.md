# Configuration

## Purpose

แนะนำการตั้งค่า configuration สำหรับ Playwright เพื่อให้เหมาะกับโปรเจกต์ของคุณ

## Scope

- Config File
- Projects
- Reporters
- Timeouts

## Config File

### playwright.config.ts

```typescript
import { defineConfig } from '@playwright/test'

export default defineConfig({
  // Configuration
})
```

### Fields

| Field | Type | Description |
|-------|------|-------------|
| `testDir` | string | Test directory |
| `testMatch` | string | Test file pattern |
| `testIgnore` | string | Ignore patterns |
| `timeout` | number | Test timeout |
| ` retries` | number | Retry count |
| `workers` | number | Parallel workers |
| `reporter` | string[] | Reporter options |
| `projects` | Project[] | Test projects |
| `use` | UseOptions | Default options |

## Test Options

### Basic Options

```typescript
export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 2,
  workers: 4,
})
```

### Timeout Options

```typescript
export default defineConfig({
  timeout: {
    expect: 5000,
    page: 30000,
    navigation: 30000,
    action: 10000,
  },
})
```

### Reporter Options

```typescript
export default defineConfig({
  reporter: [
    ['list'],
    ['html', { open: 'never' }],
    ['json', { outputFile: 'results.json' }],
  ],
})
```

| Reporter | Description |
|----------|-------------|
| `list` | Default list |
| `line` | Single line |
| `dot` | Dot notation |
| `html` | HTML report |
| `json` | JSON output |
| `junit` | JUnit XML |
| `blob` | Blob for merge |

### Global Setup

```typescript
export default defineConfig({
  globalSetup: './global-setup.ts',
  globalTeardown: './global-teardown.ts',
})
```

## Projects

### Single Browser

```typescript
export default defineConfig({
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
  ],
})
```

### Multiple Browsers

```typescript
export default defineConfig({
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'webkit',
      use: { browserName: 'webkit' },
    },
  ],
})
```

### Mobile Projects

```typescript
export default defineConfig({
  projects: [
    {
      name: 'Mobile Chrome',
      use: {
        browserName: 'chromium',
        viewport: { width: 375, height: 812 },
        hasTouch: true,
        isMobile: true,
      },
    },
    {
      name: 'Mobile Safari',
      use: {
        browserName: 'webkit',
        device: 'iPhone 12',
      },
    },
  ],
})
```

### Custom Devices

```typescript
export default defineConfig({
  projects: [
    {
      name: 'iPhone 12',
      use: {
        browserName: 'webkit',
        ...devices['iPhone 12'],
      },
    },
  ],
})
```

## Use Options

### Browser Options

```typescript
export default defineConfig({
  use: {
    baseURL: 'http://localhost:3000',
    headless: true,
    viewport: { width: 1280, height: 720 },
    deviceScaleFactor: 1,
    isMobile: false,
    hasTouch: false,
    locale: 'en-US',
  },
})
```

### Context Options

```typescript
export default defineConfig({
  use: {
    contextOptions: {
      permissions: ['geolocation'],
      ignoreHTTPSErrors: true,
    },
  },
})
```

### Trace Options

```typescript
export default defineConfig({
  use: {
    trace: 'on-first-retry',
  },
})
```

| Mode | Description |
|------|-------------|
| `off` | Disable tracing |
| `on` | Record all traces |
| `on-first-retry` | First retry only |
| `on-all-retries` | All retries |
| `retain-on-failure` | Keep on failure |

## CI Configuration

### GitHub Actions

```typescript
export default defineConfig({
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  forbidOnly: !!process.env.CI,
})
```

### Docker

```typescript
export default defineConfig({
  use: {
    launchOptions: {
      args: ['--no-sandbox', '--disable-dev-shm-usage'],
    },
  },
})
```

## Summary

| Category | Options |
|----------|---------|
| **Test** | testDir, testMatch, timeout |
| **Parallel** | workers, retries |
| **Reporter** | list, html, json |
| **Browser** | chromium, firefox, webkit |
| **Mobile** | viewport, device |
| **Trace** | on-first-retry |