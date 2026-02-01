# Playwright Test Patterns

## Description
เขียน tests ตาม best practices เพื่อความน่าเชื่อถือและ maintainability

## Test Structure Pattern

### 1. AAA Pattern (Arrange, Act, Assert)
```typescript
test('user can login with valid credentials', async ({ page }) => {
  // Arrange
  const loginPage = new LoginPage(page);
  const validUser = getTestUser('valid');
  
  // Act
  await loginPage.goto();
  await loginPage.login(validUser.email, validUser.password);
  
  // Assert
  await expect(page.locator('[data-testid="dashboard"]')).toBeVisible();
});
```

### 2. Data-Driven Tests
```typescript
const users = [
  { email: 'user1@test.com', expected: 'success' },
  { email: 'invalid@test.com', expected: 'error' },
];

test.describe('login scenarios', () => {
  for (const user of users) {
    test(`login with ${user.email}`, async ({ page }) => {
      const loginPage = new LoginPage(page);
      await loginPage.goto();
      
      if (user.expected === 'success') {
        await loginPage.login(user.email, 'valid-password');
        await expect(page.locator('[data-testid="dashboard"]')).toBeVisible();
      } else {
        await loginPage.login(user.email, 'invalid-password');
        await expect(page.locator('[data-testid="error"]')).toBeVisible();
      }
    });
  }
});
```

## Rules

### 1. ใช้ descriptive test names
กำหนดชื่อ tests ที่บอกว่าทำอะไรและคาดหวังผลลัพธ์อะไร

### 2. แยก concerns ด้วย Page Objects
ใช้ Page Objects สำหรับการจัดการ page interactions

### 3. ใช้ data-testid สำหรับ test selectors
ใช้ `data-testid` แทน CSS selectors ที่เปลี่ยนแปลงได้ง่าย

### 4. รอให้ elements พร้อมก่อน interact
ใช้ `await expect(element).toBeVisible()` ก่อนการกระทำ

### 5. ทำ cleanup หลัง test เสมอ
ใช้ `test.afterEach` สำหรับการ cleanup ข้อมูล

## Examples

### ✅ Good Test Pattern
```typescript
test('user can add item to cart', async ({ page }) => {
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);
  
  await productPage.goto('/product/123');
  await productPage.addToCart();
  
  await expect(page.locator('[data-testid="cart-badge"]')).toHaveText('1');
  
  await cartPage.goto();
  await expect(cartPage.getItemLocator('product-123')).toBeVisible();
});
```

### ❌ Bad Test Pattern
```typescript
test('cart test', async ({ page }) => {
  await page.goto('/product/123');
  await page.click('.add-to-cart-btn'); // Bad selector
  // No waiting for element
  // No proper assertions
});
```

## Anti-patterns

- ❌ ใช้ CSS selectors ที่ไม่เสถียร (เช่น `.btn-primary`)
- ❌ ไม่รอให้ elements โหลดก่อน interact
- ❌ เขียน tests ที่มีหลาย concerns ใน test เดียว
- ❌ ไม่ทำ cleanup หลัง tests
- ❌ ใช้ hardcoded waits แทนการรออย่างชาญฉลาด

## Verification

1. ตรวจสอบว่า tests ใช้ AAA pattern ได้ถูกต้อง
2. ทดสอบว่า tests ทำงานได้น่าเชื่อถือ
3. ตรวจสอบว่าใช้ data-testid selectors
4. ทดสอบว่ามีการ cleanup ข้อมูลหลัง test
