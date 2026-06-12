# Testing

## การทดสอบและ Validation สำหรับ Workflow-Ship

### Overview

Workflow-Ship ใช้การทดสอบอย่างครบถ้วนใน phase run-verify และ run-dev

### Testing Strategy

#### 1. Typecheck

**Purpose:** ตรวจสอบ type safety

**Tools:**
- TypeScript
- tsgo

**Implementation:**
```bash
# TypeScript
bun run typecheck

# tsgo
bun run tsgo
```

**Best Practices:**
- Enable strict mode
- ใช้ proper types
- Avoid `any`
- ใช้ type inference

#### 2. Lint

**Purpose:** ตรวจสอบ code quality

**Tools:**
- Biome
- ESLint

**Implementation:**
```bash
# Biome
bun run lint

# ESLint
bun run lint
```

**Best Practices:**
- ใช้ consistent rules
- Fix lint errors
- ไม่ใช้ ignore comments
- Auto-fix เมื่อเป็นไปได้

#### 3. Unit Tests

**Purpose:** ทดสอบ functions และ components แต่ละตัว

**Tools:**
- Vitest

**Implementation:**
```typescript
// sum.test.ts
import { describe, it, expect } from 'vitest'
import { sum } from './sum'

describe('sum', () => {
  it('should add two numbers', () => {
    expect(sum(1, 2)).toBe(3)
  })

  it('should handle negative numbers', () => {
    expect(sum(-1, -2)).toBe(-3)
  })
})
```

**Best Practices:**
- Test ทุก functions
- ใช้ descriptive names
- Test edge cases
- Mock dependencies

#### 4. Integration Tests

**Purpose:** ทดสอบ integration ระหว่าง components

**Tools:**
- Vitest

**Implementation:**
```typescript
// integration.test.ts
import { describe, it, expect } from 'vitest'
import { UserService } from './user-service'
import { Database } from './database'

describe('UserService Integration', () => {
  it('should create and retrieve user', async () => {
    const db = new Database()
    const service = new UserService(db)
    
    const user = await service.create({ name: 'John' })
    const retrieved = await service.get(user.id)
    
    expect(retrieved.name).toBe('John')
  })
})
```

**Best Practices:**
- Test integration points
- ใช้ test databases
- Clean up after tests
- Test error scenarios

#### 5. E2E Tests

**Purpose:** ทดสอบ user flows ทั้งหมด

**Tools:**
- Playwright

**Implementation:**
```typescript
// e2e.test.ts
import { test, expect } from '@playwright/test'

test('user can login', async ({ page }) => {
  await page.goto('/login')
  await page.fill('input[name="email"]', 'test@example.com')
  await page.fill('input[name="password"]', 'password')
  await page.click('button[type="submit"]')
  
  await expect(page).toHaveURL('/dashboard')
})
```

**Best Practices:**
- Test critical flows
- ใช้ realistic data
- Test across browsers
- Maintain tests

### Test Organization

#### Directory Structure

```text
tests/
├── unit/
│   ├── sum.test.ts
│   └── user.test.ts
├── integration/
│   ├── user-service.test.ts
│   └── auth.test.ts
├── e2e/
│   ├── login.test.ts
│   └── checkout.test.ts
└── fixtures/
    ├── user.ts
    └── data.ts
```

#### Test Configuration

```typescript
// vitest.config.ts
export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: ['node_modules/', 'tests/']
    }
  }
})
```

### Test Coverage

#### Coverage Goals

- **Unit Tests:** 80%+
- **Integration Tests:** 60%+
- **E2E Tests:** Critical flows

#### Coverage Tools

```bash
# Run with coverage
bun run test --coverage

# View coverage report
open coverage/index.html
```

#### Coverage Best Practices

- Set coverage thresholds
- Review uncovered code
- Test edge cases
- Avoid over-testing

### Test Data Management

#### Fixtures

```typescript
// fixtures/user.ts
export const createUserFixture = () => ({
  name: 'Test User',
  email: 'test@example.com',
  password: 'password'
})
```

#### Factories

```typescript
// factories/user.ts
export const userFactory = (overrides = {}) => ({
  name: 'Test User',
  email: 'test@example.com',
  ...overrides
})
```

#### Mock Data

```typescript
// mocks/database.ts
export const mockDatabase = {
  users: [],
  async create(user) {
    this.users.push(user)
    return user
  },
  async get(id) {
    return this.users.find(u => u.id === id)
  }
}
```

### Test Automation

#### Run Tests in CI

```yaml
# .github/workflows/test.yml
name: Test

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: oven-sh/setup-bun@v1
      - run: bun install
      - run: bun run typecheck
      - run: bun run lint
      - run: bun run test
      - run: bun run test:e2e
```

#### Watch Mode

```bash
# Watch mode สำหรับ development
bun run test --watch
```

### Test Best Practices

#### 1. Write Testable Code

- ใช้ dependency injection
- Avoid side effects
- Keep functions small
- Use pure functions

#### 2. Write Clear Tests

- ใช้ descriptive names
- Test one thing per test
- Arrange-Act-Assert pattern
- Comment complex tests

#### 3. Maintain Tests

- Update tests with code
- Remove obsolete tests
- Refactor tests
- Document test purpose

#### 4. Test Performance

- Mock slow operations
- Use test databases
- Parallelize tests
- Cache test results

### Testing in Workflow-Ship

#### Phase 2: Run-Verify

```bash
/run-verify
```

**Includes:**
- Typecheck
- Lint
- Unit tests
- Integration tests

#### Phase 3: Run-Dev

```bash
/run-dev
```

**Includes:**
- Development server
- Runtime testing
- Health checks

### Test Troubleshooting

#### Common Issues

**1. Flaky Tests**

**Solution:**
- Add retries
- Fix timing issues
- Use proper waits
- Isolate tests

**2. Slow Tests**

**Solution:**
- Mock external calls
- Use test databases
- Parallelize tests
- Optimize setup

**3. Coverage Gaps**

**Solution:**
- Identify uncovered code
- Add missing tests
- Refactor for testability
- Remove dead code

### Test Checklist

Before shipping:
- [ ] All unit tests pass
- [ ] All integration tests pass
- [ ] All E2E tests pass
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Coverage meets thresholds
- [ ] No flaky tests
- [ ] Tests are documented
- [ ] Tests are maintained

### Next Steps

- อ่าน [Patterns](patterns.md) สำหรับ patterns
- อ่าน [Troubleshooting](troubleshooting.md) สำหรับการแก้ปัญหา
- อ่าน [Best Practices](best-practices.md) สำหรับแนวทางปฏิบัติที่ดีที่สุด
