# Playwright Core Concepts

## Overview

Playwright เป็น E2E testing framework ที่พัฒนาโดย Microsoft ออกแบบมาสำหรับการทดสอบ web applications อย่างครอบคลุม

## Key Concepts

### 1. Browser Automation

Playwright สามารถควบคุม browsers หลายตัว:

- **Chromium** (Chrome, Edge)
- **Firefox**
- **WebKit** (Safari)

### 2. Page and Context

- **Browser**: Instance ของ browser
- **Context**: Isolated browser session (เหมือน incognito mode)
- **Page**: Single tab หรือ window ใน context

### 3. Locators

วิธีการค้นหา elements บน page:

```typescript
// By data-testid (recommended)
page.locator('[data-testid="submit-button"]')

// By role
page.getByRole('button', { name: 'Submit' })

// By text
page.getByText('Submit')

// By CSS selector
page.locator('.submit-btn')
```

### 4. Actions

การกระทำกับ elements:

```typescript
// Click
await page.locator('button').click();

// Fill input
await page.locator('input').fill('text');

// Select dropdown
await page.locator('select').selectOption('option1');

// Hover
await page.locator('div').hover();
```

### 5. Assertions

การตรวจสอบผลลัพธ์:

```typescript
// Element visible
await expect(page.locator('div')).toBeVisible();

// Text contains
await expect(page.locator('h1')).toContainText('Welcome');

// Element count
await expect(page.locator('li')).toHaveCount(3);
```

### 6. Auto-Waiting

Playwright รอให้ elements พร้อมโดยอัตโนมัติก่อนการกระทำ:

- Element ปรากฏบน DOM
- Element visible
- Element enabled
- Element stable

### 7. Network Control

จัดการ network requests:

```typescript
// Mock API response
await page.route('**/api/users', route => {
  route.fulfill({
    status: 200,
    body: JSON.stringify([{ id: 1, name: 'John' }])
  });
});

// Wait for response
const response = await page.waitForResponse('**/api/users');
```

## Best Practices

1. **ใช้ data-testid selectors** สำหรับความเสถียร
2. **เขียน tests แบบ isolated** ไม่พึ่งพา tests อื่น
3. **ใช้ Page Object Model** สำหรับ maintainability
4. **ตั้งค่า timeouts** อย่างเหมาะสม
5. **ใช้ fixtures** สำหรับการจัดการ test data

## Examples

### Basic Test Example

```typescript
import { test, expect } from '@playwright/test';

test('basic navigation test', async ({ page }) => {
  await page.goto('https://example.com');

  await expect(page.locator('h1')).toContainText('Example Domain');

  await page.locator('a').click();
  await expect(page).toHaveURL('https://www.iana.org/domains/example');
});
```

### Form Interaction Example

```typescript
test('form submission', async ({ page }) => {
  await page.goto('/contact');

  await page.locator('[data-testid="name-input"]').fill('John Doe');
  await page.locator('[data-testid="email-input"]').fill('john@example.com');
  await page.locator('[data-testid="message-input"]').fill('Hello World');

  await page.locator('[data-testid="submit-button"]').click();

  await expect(page.locator('[data-testid="success-message"]')).toBeVisible();
});
```

## References

- [Playwright Documentation](https://playwright.dev/)
- [Playwright API Reference](https://playwright.dev/docs/api/class-playwright)
- [Best Practices Guide](https://playwright.dev/docs/best-practices)
