# Test Setup

## Description

ตั้งค่า environment สำหรับการทดสอบอย่างถูกต้อง

## Examples

### Vitest Setup

```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    coverage: {
      provider: 'v8'
    }
  }
})
```

### Playwright Setup

```typescript
// playwright.config.ts
import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: 'http://localhost:3000'
  }
})
```

## Anti-patterns

❌ ไม่มี configuration file
❌ ใช้ environment ที่ไม่เหมาะสม (เช่น node สำหรับ browser tests)
❌ ไม่ตั้งค่า coverage

## Verification

1. ตรวจสอบว่ามี configuration file สำหรับ test framework
2. รันคำสั่ง `npm test` และตรวจสอบว่าทำงานได้
3. ตรวจสอบว่า environment ถูกต้อง (jsdom, node, happy-dom)
