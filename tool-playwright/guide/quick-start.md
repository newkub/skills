# Quick Start

## Purpose

คู่มือเริ่มต้นใช้งาน Playwright อย่างรวดเร็วใน 5 นาที

## 5-Minute Tutorial

### Step 1: Initialize

```bash
npm init playwright@latest
```

### Step 2: Install Browsers

```bash
npx playwright install --with-deps
```

### Step 3: Write Test

สร้างไฟล์ `tests/example.spec.ts`:

```typescript
import { test, expect } from '@playwright/test'

test('homepage works', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(/Home/)
  await page.getByRole('button', { name: 'Get Started' }).click()
  await expect(page).toHaveURL(/.*getting-started/)
})
```

### Step 4: Run Test

```bash
npx playwright test
```

### Step 5: UI Mode

```bash
npx playwright test --ui
```

## Common Use Cases

### Form Testing

```typescript
test('form submission', async ({ page }) => {
  await page.goto('/contact')
  
  await page.getByLabel('Name').fill('John Doe')
  await page.getByLabel('Email').fill('john@example.com')
  await page.getByLabel('Message').fill('Hello!')
  
  await page.getByRole('button', { name: 'Submit' }).click()
  
  await expect(page.getByText('Thank you')).toBeVisible()
})
```

### API Mocking

```typescript
test('api mock', async ({ page }) => {
  await page.route('**/api/users', route => {
    route.fulfill({
      status: 200,
      body: JSON.stringify([{ name: 'John' }]),
    })
  })
  
  await page.goto('/users')
  await expect(page.getByText('John')).toBeVisible()
})
```

### Mobile Testing

```typescript
test('mobile layout', async ({ browser }) => {
  const context = await browser.newContext({
    viewport: { width: 375, height: 812 },
    isMobile: true,
  })
  
  const page = await context.newPage()
  await page.goto('/')
  // ... test mobile
})
```

### Screenshot

```typescript
test('screenshot', async ({ page }) => {
  await page.goto('/')
  await page.screenshot({ path: 'screenshot.png' })
})
```

## CLI Commands

### Run Tests

```bash
# All tests
npx playwright test

# Specific file
npx playwright test tests/example.spec.ts

# By name
npx playwright test -g "homepage"

# Line number
npx playwright test tests/example.spec.ts:42
```

### Debug

```bash
# Debug mode
npx playwright test --debug

# UI mode
npx playwright test --ui

# Headed
npx playwright test --headed
```

### Options

| Option | Description |
|--------|-------------|
| `--ui` | Interactive UI mode |
| `--headed` | Show browser |
| `--debug` | Debug mode |
| `-g <grep>` | Filter by name |
| `--project` | Specific project |
| `--workers` | Parallel workers |

## Next Steps

### Learn More

- [Key Concept](key-concept.md) - แนวคิดหลัก
- [How It Works](how-it-works.md) - การทำงานภายใน
- [Features](features.md) - ฟีเจอร์ทั้งหมด

### Configuration

- [Configuration](configuration.md) - การตั้งค่า
- [Best Practices](best-practices.md) - แนวทางปฏิบัติ

### References

- [CLI Reference](../references/cli.md) - CLI commands
- [API Reference](../references/api.md) - API reference
- [Config Reference](../references/configuration.md) - Configuration options

## Summary

| Step | Command |
|------|---------|
| **Init** | `npm init playwright@latest` |
| **Install** | `npx playwright install --with-deps` |
| **Test** | สร้าง `tests/*.spec.ts` |
| **Run** | `npx playwright test` |
| **UI** | `npx playwright test --ui` |