# Key Concept

## Purpose

แนวคิดหลักและหลักการทำงานของ Playwright ที่ทำให้เป็น powerful end-to-end testing tool

## What is Playwright?

Playwright เป็น end-to-end testing framework รองรับ Chromium, Firefox, และ WebKit:
- Cross-browser testing
- Auto-waiting
- Network interception
- Mobile device emulation
- Trace viewer

## Core Concepts

### 1. Locators

```typescript
// By role
await page.getByRole('button', { name: 'Submit' }).click()

// By label
await page.getByLabel('Email').fill('test@example.com')

// By text
await page.getByText('Hello').click()

// By test ID
await page.getByTestId('submit-button').click()

// By CSS
await page.locator('.submit').click()
```

### 2. Assertions

```typescript
// Expect library
await expect(page.locator('.title')).toHaveText('Welcome')

// Soft assertions
await expect(page.locator('.count')).toHaveText('10', { timeout: 5000 })
```

### 3. Browser Context

```typescript
// Create context
const context = await browser.newContext({
  viewport: { width: 1280, height: 720 },
  locale: 'en-US',
})

// Create page
const page = await context.newPage()
```

### 4. API Testing

```typescript
// Request
const response = await page.request.post('https://api.example.com/login', {
  data: { email: 'test@example.com' },
})

expect(response.status()).toBe(200)
```

### 5. Mobile Emulation

```typescript
const context = await browser.newContext({
  deviceScaleFactor: 3,
  hasTouch: true,
  viewport: { width: 375, height: 812 },
  isMobile: true,
})
```

## When to Use

### Use Playwright When:

| Scenario | Reason |
|----------|--------|
| **E2E Testing** | Full browser testing |
| **Cross-browser** | Test multiple browsers |
| **API Testing** | HTTP requests |
| **Mobile** | Emulate mobile devices |
| **Visual Testing** | Screenshots, snapshots |
| **Web Scraping** | Extract data |

## Summary

| Concept | Description |
|---------|-------------|
| **Locators** | Find elements by role, label, text |
| **Assertions** | Expect library for assertions |
| **Browser Context** | Isolated browser session |
| **API** | HTTP requests for testing |
| **Mobile** | Device emulation |