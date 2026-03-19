# Playwright Configuration

## Description

ตั้งค่า Playwright configuration ให้เหมาะสมกับโปรเจกต์และสภาพแวดล้อมต่างๆ

## Basic Configuration

### playwright.config.ts

```typescript
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['html'],
    ['json', { outputFile: 'test-results/results.json' }],
  ],
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
  webServer: {
    command: 'npm run start',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
});
```

## Rules

### 1. ใช้ environment variables สำหรับค่าที่เปลี่ยนแปลง

กำหนดค่าที่ต้องการเปลี่ยนแปลงตามสภาพแวดล้อมใน environment variables

### 2. ตั้งค่า retries สำหรับ CI

ใช้ retries เฉพาะใน CI environment เพื่อความเสถียร

### 3. เปิด trace และ screenshots สำหรับ debugging

ตั้งค่าให้บันทึกข้อมูลเมื่อ test ล้มเหลว

### 4. กำหนด baseURL สำหรับ relative URLs

ใช้ baseURL เพื่อให้ tests ใช้ relative URLs ได้

## Examples

### ✅ Good Configuration

```typescript
export default defineConfig({
  use: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000',
    trace: process.env.CI ? 'retain-on-failure' : 'on-first-retry',
  },
  retries: process.env.CI ? 2 : 0,
});
```

### ❌ Bad Configuration

```typescript
export default defineConfig({
  use: {
    baseURL: 'http://localhost:3000', // Hardcoded
    trace: 'off', // No debugging info
  },
  retries: 0, // No retries in CI
});
```

## Anti-patterns

- ❌ Hardcoded URLs และค่าคงที่ใน config
- ❌ ไม่เปิด trace หรือ screenshots สำหรับ debugging
- ❌ ไม่มี retries สำหรับ CI environment
- ❌ ใช้ absolute URLs ทั้งหมดแทน relative URLs

## Verification

1. ตรวจสอบว่า config ใช้ environment variables ได้ถูกต้อง
2. ทดสอบการรัน tests ด้วยค่า config ต่างๆ
3. ตรวจสอบว่า trace และ screenshots บันทึกได้
4. ทดสอบใน CI environment ว่าทำงานได้
