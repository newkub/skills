---
description: Testing strategies และ approaches
---

## Testing Pyramid

```
        E2E Tests
       /          \
      /            \
     /              \
    /  Integration   \
   /                  \
  /   Unit Tests       \
 /______________________\
```

## Unit Tests

Test individual functions และ components แยกจาก dependencies

```typescript
describe('Calculator', () => {
  it('should add numbers', () => {
    expect(add(1, 2)).toBe(3)
  })
})
```

## Integration Tests

Test การทำงานร่วมกันของหลาย modules

```typescript
describe('User API', () => {
  it('should create and fetch user', async () => {
    const created = await api.createUser({ name: 'John' })
    const fetched = await api.getUser(created.id)
    expect(fetched.name).toBe('John')
  })
})
```

## E2E Tests

Test flows ทั้งหมดจากมุมมอง user

```typescript
describe('User Flow', () => {
  it('should register and login', async () => {
    await page.goto('/register')
    await page.fill('#name', 'John')
    await page.fill('#email', 'john@example.com')
    await page.click('#submit')
    await expect(page).toHaveURL('/dashboard')
  })
})
```

## Test Strategy

### When to Test What

| Type | When | Speed | Cost |
|------|------|-------|------|
| Unit | Always | Fast | Low |
| Integration | Critical paths | Medium | Medium |
| E2E | Key flows | Slow | High |

### Coverage Targets

- Unit tests: 80%+
- Integration tests: Critical paths
- E2E tests: Happy path + edge cases

## Test-Driven Development (TDD)

1. Write failing test
2. Write minimal code to pass
3. Refactor

```typescript
// 1. Write test
it('should add numbers', () => {
  expect(add(1, 2)).toBe(3)
})

// 2. Write code
function add(a, b) {
  return a + b
}

// 3. Refactor
// (ถ้าจำเป็น)
```

## Best Practices

- เริ่มจาก unit tests
- เพิ่ม integration tests สำหรับ critical paths
- ใช้ E2E tests อย่างประหยัด (expensive)
- Mock external dependencies ใน unit/integration tests
- ใช้ real dependencies ใน E2E tests
