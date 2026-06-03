# Installation

## Purpose

แนะนำการติดตั้ง Playwright และเริ่มต้นใช้งานในโปรเจกต์

## Scope

- Package Installation
- Browser Installation
- Project Setup
- Configuration

## Package Installation

### npm

```bash
npm init playwright@latest
```

### Existing Project

```bash
npm install -D @playwright/test
```

### Specific Version

```bash
npm install -D @playwright/test@latest
```

## Browser Installation

### Install All Browsers

```bash
npx playwright install
```

### Install Specific Browser

```bash
npx playwright install chromium
npx playwright install firefox
npx playwright install webkit
```

### With Dependencies

```bash
npx playwright install --with-deps
```

### macOS Dependencies

```bash
npx playwright install-deps
npx playwright install-deps chromium
```

### Linux Dependencies

```bash
npx playwright install-deps
npx playwright install-deps chromium
```

## Project Setup

### Interactive Setup

```bash
npm init playwright@latest
```

### Options

```
? Choose a test runner: ›
  ❯ @playwright/test
  ✓ @playwright/test

? Install browsers: ›
  ❯ Chromium
  ✓ Chromium
  ✓ Firefox
  ✓ WebKit

? Install dependencies: › No / Yes
```

### Manual Setup

#### 1. Install Package

```bash
npm init -y
npm install -D @playwright/test
```

#### 2. Install Browsers

```bash
npx playwright install --with-deps
```

#### 3. Create Config

สร้างไฟล์ `playwright.config.ts`:

```typescript
import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: 'http://localhost:3000',
  },
})
```

#### 4. Create Test

สร้างไฟล์ `tests/example.spec.ts`:

```typescript
import { test, expect } from '@playwright/test'

test('homepage has title', async ({ page }) => {
  await page.goto('https://example.com')
  await expect(page).toHaveTitle(/Example/)
})
```

#### 5. Run Tests

```bash
npx playwright test
```

## Configuration

### playwright.config.ts

```typescript
import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
  ],
})
```

## Verify Installation

### 1. Check Version

```bash
npx playwright --version
```

### 2. List Browsers

```bash
npx playwright install --dry-run
```

### 3. Run Test

```bash
npx playwright test --list
```

## Node.js Requirements

| Playwright | Node.js |
|------------|---------|
| v1.50+ | v18+ |
| v1.40+ | v18+ |
| v1.30+ | v16+ |

## Summary

| Step | Command |
|------|---------|
| **Install** | `npm install -D @playwright/test` |
| **Browsers** | `npx playwright install --with-deps` |
| **Config** | สร้าง `playwright.config.ts` |
| **Test** | สร้าง `tests/*.spec.ts` |
| **Run** | `npx playwright test` |