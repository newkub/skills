# Testing Structure

## โครงสร้างสำหรับ Testing Frameworks และ Test Organization

### File Structure

```
testing/
├── unit/                       # Unit tests
│   ├── components/
│   │   ├── button.test.ts
│   │   ├── form.test.ts
│   │   └── modal.test.ts
│   ├── utils/
│   │   ├── helpers.test.ts
│   │   ├── validators.test.ts
│   │   └── formatters.test.ts
│   ├── services/
│   │   ├── api.test.ts
│   │   ├── auth.test.ts
│   │   └── storage.test.ts
│   └── hooks/
│       ├── use-data.test.ts
│       └── use-auth.test.ts
├── integration/                # Integration tests
│   ├── api/
│   │   ├── users.test.ts
│   │   ├── auth.test.ts
│   │   └── data.test.ts
│   ├── database/
│   │   ├── migrations.test.ts
│   │   ├── models.test.ts
│   │   └── queries.test.ts
│   └── workflows/
│       ├── user-registration.test.ts
│       └── order-processing.test.ts
├── e2e/                        # End-to-end tests
│   ├── pages/
│   │   ├── home.spec.ts
│   │   ├── login.spec.ts
│   │   └── dashboard.spec.ts
│   ├── flows/
│   │   ├── user-journey.spec.ts
│   │   ├── checkout.spec.ts
│   │   └── admin.spec.ts
│   └── api/
│       ├── health.spec.ts
│       └── performance.spec.ts
├── performance/               # Performance tests
│   ├── load/
│   │   ├── api-load.test.ts
│   │   └── page-load.test.ts
│   ├── stress/
│   │   ├── concurrent-users.test.ts
│   │   └── memory-usage.test.ts
│   └── benchmarks/
│       ├── component-bench.test.ts
│       └── algorithm-bench.test.ts
├── fixtures/                   # Test data
│   ├── users.json
│   ├── products.json
│   └── mock-responses.json
├── mocks/                      # Mock implementations
│   ├── api/
│   │   ├── user-api.mock.ts
│   │   └── auth-api.mock.ts
│   ├── database/
│   │   └── mock-db.ts
│   └── services/
│       ├── email.mock.ts
│       └── storage.mock.ts
├── utils/                      # Test utilities
│   ├── helpers.ts
│   ├── factories.ts
│   └── assertions.ts
└── config/                     # Test configuration
    ├── vitest.config.ts
    ├── playwright.config.ts
    └── jest.config.js
```

### Testing Types Table

| Type | Framework | Scope | Speed | Purpose |
|------|-----------|-------|------|---------|
| **Unit** | Vitest/Jest | Single function | Fast | Logic testing |
| **Integration** | Vitest | Multiple modules | Medium | API/DB testing |
| **E2E** | Playwright | Full application | Slow | User flows |
| **Performance** | K6/Lighthouse | System metrics | Variable | Load testing |
| **Visual** | Chromatic/Percy | UI components | Medium | Visual regression |

### Test Configuration Examples

#### Vitest Configuration
```typescript
// config/vitest.config.ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    coverage: {
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'config/',
        'testing/'
      ]
    },
    setupFiles: ['./testing/utils/setup.ts']
  }
})
```

#### Playwright Configuration
```typescript
// config/playwright.config.ts
import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './testing/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
  },
})
```

### Test Patterns Table

| Pattern | Use Case | Example | Benefits |
|---------|----------|---------|----------|
| **AAA** | Test structure | Arrange-Act-Assert | Clear test flow |
| **Factory** | Test data | UserFactory.create() | Consistent data |
| **Mock** | External deps | vi.mock('api') | Isolation |
| **Snapshot** | UI testing | expect(component).toMatchSnapshot() | Regression detection |
| **Page Object** | E2E tests | LoginPage.login() | Maintainability |

### Unit Test Example

```typescript
// unit/components/button.test.ts
import { render, screen, fireEvent } from '@testing-library/vue'
import { Button } from '@/components/Button'

describe('Button', () => {
  it('renders with correct text', () => {
    render(Button, { props: { text: 'Click me' } })
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument()
  })
  
  it('emits click event', async () => {
    const { emitted } = render(Button, { props: { text: 'Click me' } })
    await fireEvent.click(screen.getByRole('button'))
    expect(emitted()).toHaveProperty('click')
  })
  
  it('is disabled when disabled prop is true', () => {
    render(Button, { props: { text: 'Click me', disabled: true } })
    expect(screen.getByRole('button')).toBeDisabled()
  })
})
```

### Integration Test Example

```typescript
// integration/api/users.test.ts
import { describe, it, expect, beforeEach } from 'vitest'
import { TestDatabase } from '../utils/test-db'
import { UserService } from '@/services/user'

describe('UserService Integration', () => {
  let db: TestDatabase
  let userService: UserService
  
  beforeEach(async () => {
    db = new TestDatabase()
    await db.setup()
    userService = new UserService(db.client)
  })
  
  it('creates and retrieves user', async () => {
    const userData = { name: 'John Doe', email: 'john@example.com' }
    const user = await userService.create(userData)
    
    expect(user.id).toBeDefined()
    expect(user.name).toBe(userData.name)
    
    const retrieved = await userService.getById(user.id)
    expect(retrieved).toEqual(user)
  })
})
```

### E2E Test Example

```typescript
// e2e/flows/user-journey.spec.ts
import { test, expect } from '@playwright/test'

test.describe('User Journey', () => {
  test('user can register and login', async ({ page }) => {
    // Register
    await page.goto('/register')
    await page.fill('[data-testid="name"]', 'John Doe')
    await page.fill('[data-testid="email"]', 'john@example.com')
    await page.fill('[data-testid="password"]', 'password123')
    await page.click('[data-testid="register-button"]')
    
    // Should redirect to dashboard
    await expect(page).toHaveURL('/dashboard')
    await expect(page.locator('[data-testid="welcome-message"]')).toContainText('John Doe')
    
    // Logout and login
    await page.click('[data-testid="logout-button"]')
    await page.goto('/login')
    await page.fill('[data-testid="email"]', 'john@example.com')
    await page.fill('[data-testid="password"]', 'password123')
    await page.click('[data-testid="login-button"]')
    
    // Should be back in dashboard
    await expect(page).toHaveURL('/dashboard')
  })
})
```

### Performance Test Example

```typescript
// performance/load/api-load.test.ts
import { check, sleep } from 'k6'
import http from 'k6/http'

export let options = {
  stages: [
    { duration: '2m', target: 100 },
    { duration: '5m', target: 100 },
    { duration: '2m', target: 0 },
  ],
}

export default function () {
  let response = http.get('https://api.example.com/users')
  check(response, {
    'status is 200': (r) => r.status === 200,
    'response time < 500ms': (r) => r.timings.duration < 500,
  })
  sleep(1)
}
```

### Best Practices

1. **Test Pyramid** - มี unit tests มากกว่า integration และ e2e
2. **Descriptive Names** - ใช้ชื่อที่บอกว่าทดสอบอะไร
3. **Isolation** - แต่ละ test ต้องไม่ depend กัน
4. **Fast Feedback** - unit tests ควรเร็ว
5. **CI Integration** - รัน tests ใน CI/CD pipeline
6. **Coverage Goals** - มีเป้าหมาย coverage ที่ชัดเจน
