# Best Practices

## Purpose

แนวทางการเขียน tests ที่ดีและดูแลรักษาได้ง่าย

## Scope

- Test Structure
- Naming Conventions
- Organization
- Performance
- Common Pitfalls

## Test Structure

### Arrange-Act-Assert (AAA)

```typescript
describe('Calculator', () => {
  it('adds two numbers', () => {
    // Arrange - Setup
    const calculator = new Calculator()
    const a = 1
    const b = 2

    // Act - Execute
    const result = calculator.add(a, b)

    // Assert - Verify
    expect(result).toBe(3)
  })
})
```

### Keep Tests Focused

```typescript
// GOOD - ทดสอบสิ่งเดียว
it('validates email format', () => {
  expect(validateEmail('test@example.com')).toBe(true)
  expect(validateEmail('invalid')).toBe(false)
})

// AVOID - ทดสอบหลายอย่าง
it('validates user input', () => {
  // ไม่ควร test email, password, username ใน test เดียว
})
```

## Naming Conventions

### Test File Names

| Pattern | Description | Example |
|---------|-------------|---------|
| `.test.ts` | Unit test | `sum.test.ts` |
| `.spec.ts` | Specification | `sum.spec.ts` |

### Test Descriptions

```typescript
// ใช้ structure: "should [expected behavior]"
it('should return positive sum when adding positive numbers', () => {})
it('should throw error when dividing by zero', () => {})
```

### Describe Structure

```typescript
// Group by feature
describe('UserService', () => {
  describe('createUser', () => {
    it('should create user with valid data', () => {})
    it('should throw error with invalid email', () => {})
  })
})
```

## Test Organization

### Group Related Tests

```typescript
describe('Array', () => {
  describe('map', () => {
    it('transforms each element', () => {})
    it('does not modify original array', () => {})
  })
})
```

### Use beforeEach for Setup

```typescript
describe('Database', () => {
  let db: Database

  beforeEach(() => {
    db = new Database()
    db.connect()
  })

  afterEach(() => {
    db.disconnect()
  })

  it('inserts record', () => {
    db.insert({ name: 'test' })
    expect(db.count()).toBe(1)
  })
})
```

## Mocking Best Practices

### Mock External Dependencies

```typescript
// GOOD - Mock API calls
vi.mock('./api', () => ({
  fetchUser: vi.fn().mockResolvedValue({ id: 1, name: 'John' }),
}))

// AVOID - เรียก API จริงใน tests
const user = await fetchUserFromRealAPI()
```

### Reset Mocks Between Tests

```typescript
beforeEach(() => {
  vi.clearAllMocks()
})

afterEach(() => {
  vi.restoreAllMocks()
})
```

## Performance Tips

### Avoid Unnecessary Async

```typescript
// GOOD - sync test
it('adds numbers', () => {
  expect(sum(1, 2)).toBe(3)
})

// AVOID - unnecessary async
it('adds numbers', async () => {
  await new Promise(r => setTimeout(r, 0))
  expect(sum(1, 2)).toBe(3)
})
```

### Use Skipping Wisely

```typescript
// Skip slow tests during development
it.skip('full integration test', () => {
  // ...
})

// Run only this test
it.only('specific test', () => {
  // ...
})
```

## Common Pitfalls

### Test Order Dependencies

```typescript
// BAD - Tests depend on each other
it('creates user', () => {
  createUser()
  expect(users.length).toBe(1)
})

// GOOD - Independent tests
describe('User Operations', () => {
  let user: User

  beforeEach(() => {
    user = createFreshUser()
  })

  it('creates user', () => {
    const newUser = createUser()
    expect(newUser).toBeDefined()
  })
})
```

### Testing Implementation Details

```typescript
// BAD - Testing how, not what
it('uses array.push', () => {
  const arr = []
  addItem(arr, 'test')
  expect(arr.length).toBe(1)
})

// GOOD - Testing behavior
it('adds item to collection', () => {
  const collection = new Collection()
  collection.add('test')
  expect(collection.has('test')).toBe(true)
})
```

### Forgetting to Test Edge Cases

```typescript
// MUST have - Empty, null, zero cases
describe('divide', () => {
  it('handles positive numbers', () => {
    expect(divide(6, 2)).toBe(3)
  })

  it('handles zero', () => {
    expect(divide(0, 5)).toBe(0)
  })

  it('throws on division by zero', () => {
    expect(() => divide(1, 0)).toThrow()
  })
})
```

## Summary

| Practice | Recommendation |
|----------|-----------------|
| **Structure** | Use AAA pattern |
| **Naming** | Descriptive test names |
| **Organization** | Group related tests |
| **Mocking** | Mock external deps |
| **Performance** | Use parallel execution |
| **Pitfalls** | Avoid test order deps |