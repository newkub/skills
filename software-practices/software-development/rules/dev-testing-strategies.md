# Testing Strategies

## Rationale

Testing strategies ที่ดีช่วย prevent bugs, improve code quality, และทำให้ refactoring ปลอดภัย

## Bad Practice

```typescript
// ❌ No tests
function calculatePrice(price: number, tax: number): number {
  return price * (1 + tax);
}

// ❌ Testing implementation details
test('calculatePrice', () => {
  const result = calculatePrice(100, 0.07);
  expect(result).toBe(107); // ❌ ผูกกับ implementation
});

// ❌ Testing too many things
test('user service', () => {
  // ... 100 lines testing everything
});
```

## Good Practice

```typescript
// ✅ Test behavior, not implementation
test('calculatePrice returns correct total with tax', () => {
  const result = calculatePrice(100, 0.07);
  expect(result).toBeCloseTo(107, 2);
});

// ✅ Small, focused tests
test('calculatePrice handles zero price', () => {
  const result = calculatePrice(0, 0.07);
  expect(result).toBe(0);
});

test('calculatePrice handles zero tax', () => {
  const result = calculatePrice(100, 0);
  expect(result).toBe(100);
});

// ✅ Test edge cases
test('calculatePrice handles negative price', () => {
  expect(() => calculatePrice(-100, 0.07)).toThrow();
});
```

## Testing Pyramid

```text
        E2E Tests (10%)
       /              \
      /                \
     /                  \
    /   Integration      \
   /   Tests (20%)       \
  /                      \
 /   Unit Tests (70%)    \
/________________________\
```

### 1. Unit Tests (70%)

- **Focus**: Functions, classes, modules
- **Fast**: Run in milliseconds
- **Isolated**: No external dependencies

### 2. Integration Tests (20%)

- **Focus**: API endpoints, database operations
- **Slower**: Run in seconds
- **Real dependencies**: Test with real services

### 3. E2E Tests (10%)

- **Focus**: User flows, critical paths
- **Slowest**: Run in minutes
- **Full system**: Test entire application

## Best Practices

### 1. Test Naming

- **Describe behavior**: "calculatePrice returns correct total"
- **Use "should"**: "should return 404 for non-existent user"
- **Be specific**: "should throw error for negative price"

### 2. AAA Pattern

- **Arrange**: Setup test data
- **Act**: Execute the code
- **Assert**: Verify results

```typescript
test('calculatePrice', () => {
  // Arrange
  const price = 100;
  const tax = 0.07;

  // Act
  const result = calculatePrice(price, tax);

  // Assert
  expect(result).toBeCloseTo(107, 2);
});
```

### 3. Test Coverage

- **Aim for 80%+ coverage**
- Focus on **critical paths**
- Test **edge cases** and **error cases**

### 4. Mock External Dependencies

```typescript
test('getUser returns cached user', () => {
  // Mock database
  const mockDb = {
    findUser: jest.fn().mockReturnValue({ id: '1', name: 'John' })
  };

  const userService = new UserService(mockDb);
  const user = userService.getUser('1');

  expect(user).toEqual({ id: '1', name: 'John' });
  expect(mockDb.findUser).toHaveBeenCalledWith('1');
});
```

## References

- [Testing Best Practices](https://martinfowler.com/bliki/UnitTest.html)
- [Vitest Documentation](https://vitest.dev/)
