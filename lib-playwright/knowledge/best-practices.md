# Playwright Best Practices

## Overview
Best practices สำหรับการใช้ Playwright เพื่อสร้าง E2E tests ที่มีคุณภาพสูงและ maintainable

## 1. Test Organization

### Use Page Object Model
```typescript
// pages/LoginPage.ts
export class LoginPage {
  constructor(private page: Page) {}
  
  async login(email: string, password: string) {
    await this.page.locator('[data-testid="email-input"]').fill(email);
    await this.page.locator('[data-testid="password-input"]').fill(password);
    await this.page.locator('[data-testid="login-button"]').click();
  }
}

// tests/login.spec.ts
test('user can login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login('user@example.com', 'password');
  await expect(page.locator('[data-testid="dashboard"]')).toBeVisible();
});
```

### Structure Tests Logically
```
tests/
├── e2e/
│   ├── auth/
│   │   ├── login.spec.ts
│   │   └── logout.spec.ts
│   ├── dashboard/
│   │   ├── overview.spec.ts
│   │   └── settings.spec.ts
│   └── api/
│       └── integration.spec.ts
```

## 2. Selector Strategies

### Prefer data-testid Selectors
```typescript
// ✅ Good - Stable and semantic
await page.locator('[data-testid="submit-button"]').click();

// ❌ Bad - Brittle CSS selectors
await page.locator('.btn.btn-primary[type="submit"]').click();

// ❌ Bad - Implementation-specific
await page.locator('#main-content > div > button').click();
```

### Use Role-Based Selectors When Appropriate
```typescript
// ✅ Good for accessibility
await page.getByRole('button', { name: 'Submit' }).click();

// ✅ Good for form elements
await page.getByLabel('Email address').fill('user@example.com');
```

## 3. Test Design Patterns

### AAA Pattern (Arrange, Act, Assert)
```typescript
test('user can add item to cart', async ({ page }) => {
  // Arrange
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);
  
  // Act
  await productPage.goto('/product/123');
  await productPage.addToCart();
  
  // Assert
  await expect(page.locator('[data-testid="cart-count"]')).toHaveText('1');
});
```

### Data-Driven Tests
```typescript
const testCases = [
  { email: 'valid@example.com', expected: 'success' },
  { email: 'invalid@example.com', expected: 'error' },
];

test.describe('login validation', () => {
  for (const testCase of testCases) {
    test(`validates ${testCase.email}`, async ({ page }) => {
      const loginPage = new LoginPage(page);
      await loginPage.goto();
      await loginPage.login(testCase.email, 'password');
      
      if (testCase.expected === 'success') {
        await expect(page.locator('[data-testid="dashboard"]')).toBeVisible();
      } else {
        await expect(page.locator('[data-testid="error"]')).toBeVisible();
      }
    });
  }
});
```

## 4. Error Handling and Debugging

### Configure Proper Timeouts
```typescript
// playwright.config.ts
export default defineConfig({
  timeout: 30000, // Global timeout
  expect: {
    timeout: 5000, // Assertion timeout
  },
  use: {
    actionTimeout: 10000, // Action timeout
  },
});
```

### Enable Trace on Failure
```typescript
// playwright.config.ts
export default defineConfig({
  use: {
    trace: 'on-first-retry', // or 'retain-on-failure'
  },
});
```

### Use Descriptive Test Names
```typescript
// ✅ Good - Clear and specific
test('user with valid credentials can access dashboard', async ({ page }) => {
  // Test implementation
});

// ❌ Bad - Vague
test('login test', async ({ page }) => {
  // Test implementation
});
```

## 5. Test Data Management

### Use Fixtures for Test Data
```typescript
// fixtures/users.ts
export const testUsers = {
  valid: {
    email: 'test@example.com',
    password: 'password123',
    name: 'Test User',
  },
  admin: {
    email: 'admin@example.com',
    password: 'admin123',
    name: 'Admin User',
    role: 'admin',
  },
};

// tests/auth.spec.ts
test('admin can access admin panel', async ({ page }) => {
  const admin = testUsers.admin;
  const loginPage = new LoginPage(page);
  await loginPage.login(admin.email, admin.password);
  await expect(page.locator('[data-testid="admin-panel"]')).toBeVisible();
});
```

### Clean Up Test Data
```typescript
test.afterEach(async ({ page }) => {
  // Clean up cookies
  await page.context().clearCookies();
  
  // Clear local storage
  await page.evaluate(() => localStorage.clear());
  
  // Reset database state if needed
  await resetTestDatabase();
});
```

## 6. Performance Optimization

### Run Tests in Parallel
```typescript
// playwright.config.ts
export default defineConfig({
  fullyParallel: true,
  workers: process.env.CI ? 1 : undefined, // Use all workers locally
});
```

### Reuse Browser Contexts
```typescript
// Create authenticated context once
test.describe('authenticated user', () => {
  let authenticatedContext: BrowserContext;
  
  test.beforeAll(async ({ browser }) => {
    authenticatedContext = await browser.newContext();
    const page = await authenticatedContext.newPage();
    const loginPage = new LoginPage(page);
    await loginPage.login('test@example.com', 'password');
    await page.close();
  });
  
  test.afterAll(async () => {
    await authenticatedContext.close();
  });
  
  test('can access dashboard', async () => {
    const page = await authenticatedContext.newPage();
    await page.goto('/dashboard');
    await expect(page.locator('[data-testid="welcome"]')).toBeVisible();
  });
});
```

## 7. Network and API Testing

### Mock API Responses
```typescript
test('shows loading state while fetching data', async ({ page }) => {
  // Mock slow API response
  await page.route('**/api/users', async route => {
    await new Promise(resolve => setTimeout(resolve, 2000)); // 2 second delay
    await route.fulfill({
      status: 200,
      body: JSON.stringify([{ id: 1, name: 'John' }]),
    });
  });
  
  await page.goto('/users');
  await expect(page.locator('[data-testid="loading"]')).toBeVisible();
  await expect(page.locator('[data-testid="user-list"]')).toBeVisible();
});
```

### Wait for Network Responses
```typescript
test('updates UI after API call', async ({ page }) => {
  await page.goto('/profile');
  
  // Wait for specific API response
  const responsePromise = page.waitForResponse('**/api/profile');
  await page.locator('[data-testid="save-button"]').click();
  const response = await responsePromise;
  
  expect(response.status()).toBe(200);
  await expect(page.locator('[data-testid="success-message"]')).toBeVisible();
});
```

## 8. Accessibility Testing

### Include Accessibility Checks
```typescript
import { injectAxe, checkA11y } from 'axe-playwright';

test('login page is accessible', async ({ page }) => {
  await page.goto('/login');
  await injectAxe(page);
  await checkA11y(page);
});

test('dashboard is accessible for authenticated user', async ({ page }) => {
  await page.goto('/login');
  await login(page, 'test@example.com', 'password');
  await injectAxe(page);
  await checkA11y(page, null, {
    detailedReport: true,
    detailedReportOptions: { html: true },
  });
});
```

## 9. CI/CD Integration

### Configure for CI Environment
```typescript
// playwright.config.ts
export default defineConfig({
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI ? 'github' : 'html',
  use: {
    trace: process.env.CI ? 'retain-on-failure' : 'on-first-retry',
  },
});
```

### Use Docker for Consistency
```dockerfile
# Dockerfile
FROM mcr.microsoft.com/playwright:v1.40.0-focal

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .

RUN npx playwright install --with-deps
CMD ["npx", "playwright", "test"]
```

## 10. Security Testing

### Test Security Headers
```typescript
test('has proper security headers', async ({ page }) => {
  const response = await page.goto('/');
  const headers = response?.headers();
  
  expect(headers?.['x-frame-options']).toBe('DENY');
  expect(headers?.['x-content-type-options']).toBe('nosniff');
  expect(headers?.['strict-transport-security']).toBeDefined();
});
```

### Test XSS Protection
```typescript
test('prevents XSS attacks', async ({ page }) => {
  await page.goto('/search');
  await page.locator('[data-testid="search-input"]').fill('<script>alert("xss")</script>');
  await page.locator('[data-testid="search-button"]').click();
  
  // Verify script doesn't execute
  await expect(page.locator('text=xss')).not.toBeVisible();
});
```

## Common Anti-Patterns to Avoid

1. **❌ Using sleep() instead of waits**
   ```typescript
   // Bad
   await page.waitForTimeout(3000);
   
   // Good
   await expect(page.locator('[data-testid="element"]')).toBeVisible();
   ```

2. **❌ Hardcoded waits**
   ```typescript
   // Bad
   await page.waitForTimeout(5000);
   
   // Good - Let Playwright handle waiting
   await page.locator('button').click();
   ```

3. **❌ Tests that depend on each other**
   ```typescript
   // Bad - Test depends on previous test state
   test('creates user', async ({ page }) => { /* ... */ });
   test('edits user', async ({ page }) => { /* assumes user exists */ });
   
   // Good - Each test is independent
   test('creates and edits user', async ({ page }) => {
     // Create user
     // Edit user
     // Verify result
   });
   ```

## References
- [Playwright Best Practices](https://playwright.dev/docs/best-practices)
- [Playwright Testing Guide](https://playwright.dev/docs/testing-library)
- [Playwright Debugging](https://playwright.dev/docs/debug)
