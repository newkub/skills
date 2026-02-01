# Playwright Fixtures

## Description
สร้างและใช้ fixtures อย่างมีประสิทธิภาพสำหรับการจัดการ test data และ setup

## Custom Fixtures

### test-fixtures.ts
```typescript
import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';

// Extend base test with custom fixtures
export const test = base.extend({
  // Authenticated page fixture
  authenticatedPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('test@example.com', 'password123');
    await use(page);
  },

  // Page objects fixtures
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  },

  // Test data fixtures
  testUser: async ({}, use) => {
    const user = {
      email: 'test@example.com',
      password: 'password123',
      name: 'Test User'
    };
    await use(user);
  }
});

export { expect };
```

## Data Fixtures

### users.fixture.ts
```typescript
export const users = {
  valid: {
    email: 'valid@example.com',
    password: 'validpassword',
    name: 'Valid User'
  },
  invalid: {
    email: 'invalid@example.com',
    password: 'wrongpassword',
    name: 'Invalid User'
  },
  admin: {
    email: 'admin@example.com',
    password: 'adminpassword',
    name: 'Admin User',
    role: 'admin'
  }
};

export const products = [
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 200 },
  { id: 3, name: 'Product 3', price: 300 }
];
```

## Rules

### 1. สร้าง fixtures สำหรับข้อมูลที่ใช้บ่อย
จัดเก็บ test data ที่ใช้ซ้ำๆ ใน fixtures

### 2. ใช้ fixtures สำหรับ setup และ teardown
กำหนด setup/teardown logic ใน fixtures แทน beforeEach/afterEach

### 3. แยก fixtures ตามความรับผิดชอบ
สร้าง fixtures สำหรับ data, pages, และ authentication แยกกัน

### 4. ใช้ type-safe fixtures
กำหนด TypeScript types สำหรับ fixtures

### 5. Reuse fixtures ข้าม tests
สร้าง fixtures ที่สามารถใช้ได้ในหลาย test files

## Examples

### ✅ Good Fixture Usage
```typescript
test('authenticated user can access dashboard', async ({ 
  authenticatedPage, 
  dashboardPage 
}) => {
  await dashboardPage.goto();
  await expect(dashboardPage.getWelcomeMessage()).toContainText('Welcome');
});
```

### ❌ Bad Fixture Usage
```typescript
test('dashboard test', async ({ page }) => {
  // Manual login in test
  await page.goto('/login');
  await page.fill('[data-testid="email"]', 'test@example.com');
  await page.fill('[data-testid="password"]', 'password123');
  await page.click('[data-testid="login-button"]');
  
  await page.goto('/dashboard');
  // Test logic...
});
```

## Anti-patterns

- ❌ ทำ setup ใน test แทนการใช้ fixtures
- ❌ ไม่ใช้ fixtures สำหรับ data ที่ใช้ซ้ำๆ
- ❌ สร้าง fixtures ที่ทำงานหลายอย่างใน fixture เดียว
- ❌ ไม่มี cleanup ใน fixtures
- ❌ ใช้ hardcoded data แทน fixtures

## Verification

1. ตรวจสอบว่า fixtures มีการ setup และ cleanup ถูกต้อง
2. ทดสอบว่า fixtures สามารถ reuse ได้ข้าม tests
3. ตรวจสอบว่ามี TypeScript types สำหรับ fixtures
4. ทดสอบว่า fixtures ทำงานได้ใน CI environment
