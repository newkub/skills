# Playwright Page Objects

## Description

ใช้ Page Object Model (POM) สำหรับ maintainability และ reusability ของ test code

## Base Page Pattern

### BasePage.ts

```typescript
import { Page, Locator } from '@playwright/test';

export class BasePage {
  constructor(protected page: Page) {}

  async goto(path = ''): Promise<void> {
    await this.page.goto(path);
  }

  async waitForPageLoad(): Promise<void> {
    await this.page.waitForLoadState('networkidle');
  }

  async takeScreenshot(name: string): Promise<void> {
    await this.page.screenshot({ path: `screenshots/${name}.png` });
  }

  protected getLocator(selector: string): Locator {
    return this.page.locator(`[data-testid="${selector}"]`);
  }
}
```

## Page Object Examples

### LoginPage.ts

```typescript
import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  private emailInput = this.getLocator('email-input');
  private passwordInput = this.getLocator('password-input');
  private loginButton = this.getLocator('login-button');
  private errorMessage = this.getLocator('error-message');

  async goto(): Promise<void> {
    await super.goto('/login');
  }

  async login(email: string, password: string): Promise<void> {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async getErrorMessage(): Promise<string> {
    return this.errorMessage.textContent() || '';
  }

  async isLoggedIn(): Promise<boolean> {
    return !await this.emailInput.isVisible();
  }
}
```

## Rules

### 1. แยก page logic จาก test logic

Page Objects ควรมีเฉพาะการจัดการ page interactions

### 2. ใช้ data-testid selectors

กำหนด selectors ที่เสถียรและไม่ขึ้นกับ CSS structure

### 3. สร้าง methods ที่มีความหมาย

Methods ควรบอกว่าทำอะไร (เช่น `login()` ไม่ใช่ `fillFormAndClick()`)

### 4. ใช้ inheritance สำหรับ common functionality

สร้าง BasePage สำหรับ functionality ที่ใช้ร่วมกัน

### 5. Return Page Objects สำหรับ navigation

Methods ที่ navigate ควร return Page Object ถัดไป

## Examples

### ✅ Good Page Object

```typescript
async login(email: string, password: string): Promise<DashboardPage> {
  await this.emailInput.fill(email);
  await this.passwordInput.fill(password);
  await this.loginButton.click();
  return new DashboardPage(this.page);
}
```

### ❌ Bad Page Object

```typescript
async loginAndVerifyDashboard(): Promise<void> {
  await this.page.fill('#email', email);
  await this.page.fill('#password', password);
  await this.page.click('button[type="submit"]');
  await expect(this.page.locator('.dashboard')).toBeVisible();
}
```

## Anti-patterns

- ❌ ผสม assertions ใน Page Objects
- ❌ ใช้ CSS selectors ที่ไม่เสถียร
- ❌ ไม่มี semantic method names
- ❌ Page Objects ทำงานหลายอย่างใน method เดียว
- ❌ ไม่ return Page Objects สำหรับ navigation

## Verification

1. ตรวจสอบว่า Page Objects ไม่มี assertions
2. ทดสอบว่า methods มีความหมายและทำงานเดียว
3. ตรวจสอบว่าใช้ data-testid selectors
4. ทดสอบว่า navigation methods return Page Objects ถูกต้อง
