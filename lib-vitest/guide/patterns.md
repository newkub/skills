---
description: Testing patterns ที่ใช้บ่อย
---

## Common Patterns

### 1. Arrange-Act-Assert

```typescript
it('should add numbers', () => {
  // Arrange
  const calculator = new Calculator()
  const a = 5
  const b = 3

  // Act
  const result = calculator.add(a, b)

  // Assert
  expect(result).toBe(8)
})
```

### 2. Given-When-Then

```typescript
it('should allow login with valid credentials', () => {
  // Given
  const user = { email: 'test@example.com', password: 'secret' }

  // When
  const result = authService.login(user)

  // Then
  expect(result.success).toBe(true)
})
```

### 3. Builder Pattern

```typescript
class UserBuilder {
  private user: Partial<User> = {}

  withName(name: string) {
    this.user.name = name
    return this
  }

  withEmail(email: string) {
    this.user.email = email
    return this
  }

  build() {
    return new User(this.user as User)
  }
}

it('should create user', () => {
  const user = new UserBuilder()
    .withName('John')
    .withEmail('john@example.com')
    .build()

  expect(user.name).toBe('John')
})
```

### 4. Factory Pattern

```typescript
function createUser(overrides: Partial<User> = {}) {
  return {
    id: '1',
    name: 'John',
    email: 'john@example.com',
    ...overrides
  }
}

it('should update user', () => {
  const user = createUser({ name: 'Jane' })
  expect(user.name).toBe('Jane')
})
```

### 5. Parameterized Tests

```typescript
describe.each([
  [1, 2, 3],
  [2, 3, 5],
  [10, 20, 30]
])('add(%i, %i)', (a, b, expected) => {
  it(`should return ${expected}`, () => {
    expect(add(a, b)).toBe(expected)
  })
})
```

### 6. Test Doubles

```typescript
// Stub
const stub = vi.fn(() => 'fixed value')

// Mock
const mock = vi.fn()
mock.mockReturnValue('value')

// Spy
const spy = vi.spyOn(obj, 'method')

// Fake
class FakeDatabase implements Database {
  save(data: any) {
    this.data.push(data)
  }
}
```

### 7. Snapshot Testing

```typescript
it('should match snapshot', () => {
  const component = render(<Button>Click</Button>)
  expect(component).toMatchSnapshot()
})
```

## Anti-Patterns

### ❌ Testing Implementation Details

```typescript
// Bad
it('should call fetch', () => {
  expect(fetch).toHaveBeenCalled()
})

// Good
it('should return user data', async () => {
  const user = await api.getUser('1')
  expect(user.name).toBe('John')
})
```

### ❌ Over-mocking

```typescript
// Bad
vi.mock('./utils')
vi.mock('./helpers')
vi.mock('./constants')

// Good
vi.mock('./api') // Mock เฉพาะ external dependencies
```

### ❌ Fragile Tests

```typescript
// Bad - พึ่งพา order
it('should work', () => {
  expect(arr[0]).toBe('first')
  expect(arr[1]).toBe('second')
})

// Good
it('should contain items', () => {
  expect(arr).toContain('first')
  expect(arr).toContain('second')
})
```
