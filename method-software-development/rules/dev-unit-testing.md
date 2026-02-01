# Unit Testing

## Rationale

Unit tests ช่วย verify behavior ของ individual functions และ classes ทำให้ refactoring ปลอดภัย

## Bad Practice

```typescript
// ❌ Testing implementation details
test('UserService', () => {
  const service = new UserService();
  expect(service._cache).toBeInstanceOf(Map); // ❌ private implementation
});

// ❌ Testing multiple behaviors
test('UserService', () => {
  const service = new UserService();
  const user = service.getUser('1');
  expect(user).toBeDefined();
  expect(user.name).toBe('John');
  expect(user.email).toBe('john@example.com');
  // ... 10 more assertions
});

// ❌ No setup/teardown
test('UserService', () => {
  const service = new UserService();
  const user1 = service.getUser('1');
  const user2 = service.getUser('2'); // ❌ ผลลัพธ์อาจผิดเพราะ state ค้าง
});
```

## Good Practice

```typescript
// ✅ Test behavior, not implementation
test('getUser returns user with correct ID', () => {
  const mockDb = {
    findUser: jest.fn().mockReturnValue({ id: '1', name: 'John' })
  };

  const service = new UserService(mockDb);
  const user = service.getUser('1');

  expect(user.id).toBe('1');
  expect(mockDb.findUser).toHaveBeenCalledWith('1');
});

// ✅ One behavior per test
test('getUser returns user with correct ID', () => {
  const service = new UserService(mockDb);
  const user = service.getUser('1');
  expect(user.id).toBe('1');
});

test('getUser returns user with correct name', () => {
  const service = new UserService(mockDb);
  const user = service.getUser('1');
  expect(user.name).toBe('John');
});

// ✅ Setup/teardown
describe('UserService', () => {
  let service: UserService;
  let mockDb: any;

  beforeEach(() => {
    mockDb = {
      findUser: jest.fn(),
      insertUser: jest.fn()
    };
    service = new UserService(mockDb);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('getUser returns user', () => {
    mockDb.findUser.mockReturnValue({ id: '1', name: 'John' });
    const user = service.getUser('1');
    expect(user).toEqual({ id: '1', name: 'John' });
  });
});
```

## Best Practices

### 1. Test Structure
- **Arrange, Act, Assert (AAA)**
- **One behavior per test**
- **Descriptive test names**

### 2. Mocking
- Mock **external dependencies**
- Mock **network calls**
- Mock **database operations**

```typescript
test('createUser saves to database', () => {
  const mockDb = {
    insertUser: jest.fn().mockReturnValue({ id: '1', name: 'John' })
  };

  const service = new UserService(mockDb);
  const user = service.createUser({ name: 'John', email: 'john@example.com' });

  expect(mockDb.insertUser).toHaveBeenCalledWith({
    name: 'John',
    email: 'john@example.com'
  });
});
```

### 3. Edge Cases
- **Null/undefined values**
- **Empty arrays/strings**
- **Boundary values**

```typescript
test('calculatePrice handles zero price', () => {
  const result = calculatePrice(0, 0.07);
  expect(result).toBe(0);
});

test('calculatePrice throws for negative price', () => {
  expect(() => calculatePrice(-100, 0.07)).toThrow();
});
```

## References

- [Vitest Documentation](https://vitest.dev/)
- [Jest Best Practices](https://jestjs.io/docs/tutorial-react)
