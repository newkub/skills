# How It Works

## Purpose

อธิบายการทำงานภายในของ Playwright เพื่อให้เข้าใจกลไกและ flow การทำงาน

## Scope

- Test Execution
- Browser Automation
- Locator Resolution
- Auto-waiting

## Test Execution Flow

```
+------------------+     +------------------+     +------------------+
|  playwright      | --> |  Browser         | --> |  Page            |
|  test runner     |     |  (Chromium/FF)   |     |  (tab)           |
+------------------+     +------------------+     +------------------+
                                  |
                         +------------------+
                         |  Context         |
                         |  (isolation)     |
                         +------------------+
```

### Execution Steps

| Step | Description | API |
|------|-------------|-----|
| **1. Config** | Load config | `playwright.config.ts` |
| **2. Workers** | Start workers | `--workers` |
| **3. Context** | Create browser context | `browser.newContext()` |
| **4. Page** | Create page | `context.newPage()` |
| **5. Navigate** | Navigate to URL | `page.goto()` |
| **6. Act** | Perform actions | `page.click()` |
| **7. Assert** | Verify assertions | `expect()` |
| **8. Cleanup** | Close page/context | `page.close()` |

## Browser Automation

### Browser Launch

```typescript
const browser = await chromium.launch({
  headless: true,
  args: ['--disable-dev-shm-usage'],
})
```

### Context Creation

```typescript
const context = await browser.newContext({
  viewport: { width: 1920, height: 1080 },
  deviceScaleFactor: 2,
  locale: 'en-US',
  permissions: ['geolocation'],
})
```

### Page Navigation

```typescript
const page = await context.newPage()

// Navigate
await page.goto('https://example.com')

// With wait
await page.goto('https://example.com', {
  waitUntil: 'networkidle',
})
```

## Locator Resolution

### Locator Types

| Type | Example | Use Case |
|------|---------|----------|
| **getByRole** | `getByRole('button')` | Accessible buttons |
| **getByLabel** | `getByLabel('Email')` | Form labels |
| **getByText** | `getByText('Submit')` | Visible text |
| **getByTestId** | `getByTestId('btn')` | Test IDs |
| **locator** | `locator('.class')` | CSS selectors |

### Resolution Process

```typescript
// 1. Create locator
const button = page.getByRole('button', { name: 'Submit' })

// 2. Wait for element
await button.waitFor({ state: 'visible' })

// 3. Perform action
await button.click()
```

## Auto-waiting

### Wait Actions

```typescript
// Click waits for element to be actionable
await page.getByRole('button').click()

// Fill waits for input
await page.getByLabel('Email').fill('test@example.com')

// Select waits for options
await page.getByLabel('Country').selectOption('Thailand')
```

### Wait For

```typescript
// Wait for navigation
await page.goto('https://example.com')

// Wait for selector
await page.waitForSelector('.loading', { state: 'hidden' })

// Wait for function
await page.waitForFunction(() => document.readyState === 'complete')
```

## Network Interception

### Route

```typescript
await page.route('**/api/**', route => {
  // Mock API
  route.fulfill({
    status: 200,
    body: JSON.stringify({ success: true }),
  })
})
```

### Handle

```typescript
await page.route('**/login', route => {
  if (route.request().postDataJSON().email === 'test@example.com') {
    route.fulfill({ status: 200 })
  } else {
    route.abort()
  }
})
```

## Summary

| Mechanism | Description |
|-----------|-------------|
| **Workers** | Parallel test execution |
| **Context** | Browser isolation |
| **Locators** | Find elements |
| **Auto-waiting** | Automatic waits |
| **Assertions** | Verify expectations |