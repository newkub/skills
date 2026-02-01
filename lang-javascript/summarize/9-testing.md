---
name: javascript-testing-summary
description: สรุป best practices สำหรับ testing ใน JavaScript
goal: ให้นักพัฒนาเขียน tests ที่ครอบคลุมและมีประสิทธิภาพ
outcome: สามารถเขียน unit tests, integration tests และ E2E tests ได้อย่างถูกต้อง
---

# Testing Best Practices

## Overview
Best practices สำหรับการเขียน tests ใน JavaScript รวมถึง unit tests, integration tests, E2E tests และ testing strategies

## Best Practices Summary

| Practice | Description | Priority | Example |
|----------|-------------|----------|---------|
| Write unit tests | Ensure code reliability | High | `test('should add numbers', () => { ... })` |
| Use descriptive test names | Better test documentation | Medium | `test('should return user data when ID is valid')` |
| Test edge cases | Robust error handling | Medium | `test('should handle empty array')` |
| Use test doubles for external dependencies | Isolated testing | Medium | `jest.mock('api')` |
| Implement test coverage | Ensure comprehensive testing | High | Aim for 80%+ coverage |
| Use AAA pattern | Arrange, Act, Assert | High | Clear test structure |
| Test async operations properly | Handle promises and async/await | High | `await expect(asyncFunction()).resolves` |
| Use snapshot testing wisely | Prevent unnecessary test failures | Medium | `toMatchSnapshot()` |
| Implement CI/CD testing | Automated testing pipeline | High | GitHub Actions, Jenkins |
| Use appropriate test tools | Right tool for the job | Medium | Jest, Vitest, Playwright |

## Implementation Guidelines

### High Priority Practices
1. **Write comprehensive unit tests** - Ensure code reliability
2. **Test async operations properly** - Handle promises and async/await
3. **Implement test coverage** - Aim for 80%+ coverage
4. **Use AAA pattern** - Arrange, Act, Assert structure
5. **Implement CI/CD testing** - Automated testing pipeline

### Medium Priority Practices
1. **Use descriptive test names** - Better documentation
2. **Test edge cases** - Robust error handling
3. **Use test doubles** - Isolated testing
4. **Use snapshot testing wisely** - Prevent unnecessary failures
5. **Use appropriate test tools** - Right tool for the job

### Testing Checklist

#### Test Structure
- [ ] Use descriptive test names
- [ ] Follow AAA pattern
- [ ] Group related tests
- [ ] Use setup and teardown
- [ ] Keep tests focused

#### Test Coverage
- [ ] Test happy path
- [ ] Test error cases
- [ ] Test edge cases
- [ ] Test boundary conditions
- [ ] Measure coverage

#### Test Quality
- [ ] Tests are independent
- [ ] Tests are deterministic
- [ ] Tests run quickly
- [ ] Tests are maintainable
- [ ] Tests provide good feedback

## Common Testing Patterns

| Pattern | Use Case | Example |
|---------|----------|---------|
| Unit Testing | Individual functions/classes | `test('should calculate sum')` |
| Integration Testing | Multiple components | `test('should save user to database')` |
| E2E Testing | Full user flows | `test('should complete checkout')` |
| Mock Testing | External dependencies | `jest.mock('api')` |
| Snapshot Testing | UI components | `toMatchSnapshot()` |

## Testing Examples

### Unit Testing with Jest
```javascript
// Good: Comprehensive unit tests
const { calculateTotal, applyDiscount, validateUser } = require('./utils');

describe('Utils', () => {
  describe('calculateTotal', () => {
    test('should calculate total of positive numbers', () => {
      // Arrange
      const items = [10, 20, 30];
      
      // Act
      const result = calculateTotal(items);
      
      // Assert
      expect(result).toBe(60);
    });
    
    test('should return 0 for empty array', () => {
      // Arrange
      const items = [];
      
      // Act
      const result = calculateTotal(items);
      
      // Assert
      expect(result).toBe(0);
    });
    
    test('should handle negative numbers', () => {
      // Arrange
      const items = [10, -5, 20];
      
      // Act
      const result = calculateTotal(items);
      
      // Assert
      expect(result).toBe(25);
    });
    
    test('should throw error for non-array input', () => {
      // Arrange
      const items = 'not an array';
      
      // Act & Assert
      expect(() => calculateTotal(items)).toThrow('Input must be an array');
    });
  });
  
  describe('applyDiscount', () => {
    test('should apply percentage discount correctly', () => {
      // Arrange
      const price = 100;
      const discount = 0.2; // 20%
      
      // Act
      const result = applyDiscount(price, discount);
      
      // Assert
      expect(result).toBe(80);
    });
    
    test('should handle zero discount', () => {
      // Arrange
      const price = 100;
      const discount = 0;
      
      // Act
      const result = applyDiscount(price, discount);
      
      // Assert
      expect(result).toBe(100);
    });
    
    test('should handle maximum discount', () => {
      // Arrange
      const price = 100;
      const discount = 1; // 100%
      
      // Act
      const result = applyDiscount(price, discount);
      
      // Assert
      expect(result).toBe(0);
    });
  });
  
  describe('validateUser', () => {
    test('should validate valid user object', () => {
      // Arrange
      const user = {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com'
      };
      
      // Act
      const result = validateUser(user);
      
      // Assert
      expect(result).toBe(true);
    });
    
    test('should reject user without required fields', () => {
      // Arrange
      const user = {
        id: 1,
        name: 'John Doe'
        // Missing email
      };
      
      // Act
      const result = validateUser(user);
      
      // Assert
      expect(result).toBe(false);
    });
    
    test('should reject invalid email format', () => {
      // Arrange
      const user = {
        id: 1,
        name: 'John Doe',
        email: 'invalid-email'
      };
      
      // Act
      const result = validateUser(user);
      
      // Assert
      expect(result).toBe(false);
    });
  });
});
```

### Async Function Testing
```javascript
// Good: Testing async operations
const { fetchUserData, saveUser } = require('./api');

// Mock the fetch function
jest.mock('node-fetch');

describe('API Functions', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  
  describe('fetchUserData', () => {
    test('should fetch user data successfully', async () => {
      // Arrange
      const mockUser = { id: 1, name: 'John Doe' };
      fetch.mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue(mockUser)
      });
      
      // Act
      const result = await fetchUserData(1);
      
      // Assert
      expect(result).toEqual(mockUser);
      expect(fetch).toHaveBeenCalledWith('https://api.example.com/users/1');
    });
    
    test('should handle network error', async () => {
      // Arrange
      fetch.mockRejectedValueOnce(new Error('Network error'));
      
      // Act & Assert
      await expect(fetchUserData(1)).rejects.toThrow('Network error');
    });
    
    test('should handle HTTP error response', async () => {
      // Arrange
      fetch.mockResolvedValueOnce({
        ok: false,
        status: 404,
        statusText: 'Not Found'
      });
      
      // Act & Assert
      await expect(fetchUserData(1)).rejects.toThrow('HTTP error! status: 404');
    });
    
    test('should handle invalid JSON response', async () => {
      // Arrange
      fetch.mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockRejectedValue(new Error('Invalid JSON'))
      });
      
      // Act & Assert
      await expect(fetchUserData(1)).rejects.toThrow('Invalid JSON');
    });
  });
  
  describe('saveUser', () => {
    test('should save user successfully', async () => {
      // Arrange
      const user = { name: 'John Doe', email: 'john@example.com' };
      const mockResponse = { id: 1, ...user };
      
      fetch.mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue(mockResponse)
      });
      
      // Act
      const result = await saveUser(user);
      
      // Assert
      expect(result).toEqual(mockResponse);
      expect(fetch).toHaveBeenCalledWith('https://api.example.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });
    });
  });
});
```

### Mock Testing
```javascript
// Good: Using mocks for external dependencies
const { UserService } = require('./userService');

// Mock the database module
jest.mock('./database', () => ({
  findUserById: jest.fn(),
  saveUser: jest.fn(),
  deleteUser: jest.fn()
}));

const database = require('./database');

describe('UserService', () => {
  let userService;
  
  beforeEach(() => {
    userService = new UserService();
    jest.clearAllMocks();
  });
  
  describe('getUserById', () => {
    test('should return user when found', async () => {
      // Arrange
      const mockUser = { id: 1, name: 'John Doe' };
      database.findUserById.mockResolvedValue(mockUser);
      
      // Act
      const result = await userService.getUserById(1);
      
      // Assert
      expect(result).toEqual(mockUser);
      expect(database.findUserById).toHaveBeenCalledWith(1);
    });
    
    test('should return null when user not found', async () => {
      // Arrange
      database.findUserById.mockResolvedValue(null);
      
      // Act
      const result = await userService.getUserById(999);
      
      // Assert
      expect(result).toBeNull();
      expect(database.findUserById).toHaveBeenCalledWith(999);
    });
    
    test('should handle database error', async () => {
      // Arrange
      database.findUserById.mockRejectedValue(new Error('Database connection failed'));
      
      // Act & Assert
      await expect(userService.getUserById(1)).rejects.toThrow('Database connection failed');
    });
  });
  
  describe('createUser', () => {
    test('should create user successfully', async () => {
      // Arrange
      const userData = { name: 'John Doe', email: 'john@example.com' };
      const mockCreatedUser = { id: 1, ...userData, createdAt: new Date() };
      database.saveUser.mockResolvedValue(mockCreatedUser);
      
      // Act
      const result = await userService.createUser(userData);
      
      // Assert
      expect(result).toEqual(mockCreatedUser);
      expect(database.saveUser).toHaveBeenCalledWith(userData);
    });
    
    test('should validate user data before saving', async () => {
      // Arrange
      const invalidUserData = { name: '', email: 'invalid-email' };
      
      // Act & Assert
      await expect(userService.createUser(invalidUserData))
        .rejects.toThrow('Invalid user data');
      expect(database.saveUser).not.toHaveBeenCalled();
    });
  });
});
```

### Integration Testing
```javascript
// Good: Integration tests for multiple components
const request = require('supertest');
const app = require('../app');
const { setupDatabase, cleanupDatabase } = require('./testUtils');

describe('User API Integration Tests', () => {
  beforeAll(async () => {
    await setupDatabase();
  });
  
  afterAll(async () => {
    await cleanupDatabase();
  });
  
  describe('POST /api/users', () => {
    test('should create user successfully', async () => {
      // Arrange
      const userData = {
        name: 'John Doe',
        email: 'john@example.com',
        password: 'password123'
      };
      
      // Act
      const response = await request(app)
        .post('/api/users')
        .send(userData)
        .expect(201);
      
      // Assert
      expect(response.body).toMatchObject({
        id: expect.any(Number),
        name: userData.name,
        email: userData.email
      });
      expect(response.body).not.toHaveProperty('password');
    });
    
    test('should return validation error for invalid data', async () => {
      // Arrange
      const invalidUserData = {
        name: '',
        email: 'invalid-email'
      };
      
      // Act
      const response = await request(app)
        .post('/api/users')
        .send(invalidUserData)
        .expect(400);
      
      // Assert
      expect(response.body).toHaveProperty('error');
      expect(response.body.error).toContain('validation');
    });
  });
  
  describe('GET /api/users/:id', () => {
    test('should return user when found', async () => {
      // Arrange
      const createdUser = await request(app)
        .post('/api/users')
        .send({
          name: 'Jane Doe',
          email: 'jane@example.com',
          password: 'password123'
        });
      
      // Act
      const response = await request(app)
        .get(`/api/users/${createdUser.body.id}`)
        .expect(200);
      
      // Assert
      expect(response.body).toMatchObject({
        id: createdUser.body.id,
        name: 'Jane Doe',
        email: 'jane@example.com'
      });
    });
    
    test('should return 404 when user not found', async () => {
      // Act
      const response = await request(app)
        .get('/api/users/99999')
        .expect(404);
      
      // Assert
      expect(response.body).toHaveProperty('error', 'User not found');
    });
  });
});
```

### E2E Testing with Playwright
```javascript
// Good: E2E tests with Playwright
const { test, expect } = require('@playwright/test');

test.describe('User Registration Flow', () => {
  test('should register new user successfully', async ({ page }) => {
    // Arrange
    await page.goto('/register');
    
    // Act
    await page.fill('[data-testid=name-input]', 'John Doe');
    await page.fill('[data-testid=email-input]', 'john@example.com');
    await page.fill('[data-testid=password-input]', 'password123');
    await page.fill('[data-testid=confirm-password-input]', 'password123');
    await page.click('[data-testid=register-button]');
    
    // Assert
    await expect(page.locator('[data-testid=success-message]')).toBeVisible();
    await expect(page.locator('[data-testid=success-message]')).toContainText(
      'Registration successful'
    );
    
    // Verify user is logged in
    await expect(page.locator('[data-testid=user-menu]')).toContainText('John Doe');
  });
  
  test('should show validation errors for invalid input', async ({ page }) => {
    // Arrange
    await page.goto('/register');
    
    // Act
    await page.fill('[data-testid=name-input]', '');
    await page.fill('[data-testid=email-input]', 'invalid-email');
    await page.fill('[data-testid=password-input]', '123');
    await page.fill('[data-testid=confirm-password-input]', '456');
    await page.click('[data-testid=register-button]');
    
    // Assert
    await expect(page.locator('[data-testid=name-error]')).toBeVisible();
    await expect(page.locator('[data-testid=email-error]')).toBeVisible();
    await expect(page.locator('[data-testid=password-error]')).toBeVisible();
    await expect(page.locator('[data-testid=confirm-password-error]')).toBeVisible();
  });
  
  test('should handle duplicate email registration', async ({ page }) => {
    // Arrange - First register a user
    await page.goto('/register');
    await page.fill('[data-testid=name-input]', 'Jane Doe');
    await page.fill('[data-testid=email-input]', 'jane@example.com');
    await page.fill('[data-testid=password-input]', 'password123');
    await page.fill('[data-testid=confirm-password-input]', 'password123');
    await page.click('[data-testid=register-button]');
    
    // Wait for registration to complete
    await page.locator('[data-testid=success-message]').waitFor({ state: 'hidden' });
    
    // Act - Try to register with same email
    await page.goto('/register');
    await page.fill('[data-testid=name-input]', 'Jane Smith');
    await page.fill('[data-testid=email-input]', 'jane@example.com');
    await page.fill('[data-testid=password-input]', 'password456');
    await page.fill('[data-testid=confirm-password-input]', 'password456');
    await page.click('[data-testid=register-button]');
    
    // Assert
    await expect(page.locator('[data-testid=email-error]')).toBeVisible();
    await expect(page.locator('[data-testid=email-error]')).toContainText(
      'Email already exists'
    );
  });
});
```

### Test Utilities and Helpers
```javascript
// Good: Test utilities for common operations
class TestUtils {
  static async createTestUser(userData = {}) {
    const defaultUser = {
      name: 'Test User',
      email: 'test@example.com',
      password: 'password123'
    };
    
    const user = { ...defaultUser, ...userData };
    
    const response = await request(app)
      .post('/api/users')
      .send(user);
    
    return response.body;
  }
  
  static async createTestPost(userId, postData = {}) {
    const defaultPost = {
      title: 'Test Post',
      content: 'This is a test post',
      userId
    };
    
    const post = { ...defaultPost, ...postData };
    
    const response = await request(app)
      .post('/api/posts')
      .send(post);
    
    return response.body;
  }
  
  static async authenticateUser(user) {
    const response = await request(app)
      .post('/api/auth/login')
      .send({
        email: user.email,
        password: user.password
      });
    
    return response.body.token;
  }
  
  static generateRandomEmail() {
    return `test-${Date.now()}@example.com`;
  }
  
  static generateRandomString(length = 10) {
    return Math.random().toString(36).substring(2, 2 + length);
  }
  
  static async delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  static expectValidUser(user) {
    expect(user).toHaveProperty('id');
    expect(user).toHaveProperty('name');
    expect(user).toHaveProperty('email');
    expect(user).not.toHaveProperty('password');
  }
  
  static expectValidError(error, expectedMessage) {
    expect(error).toHaveProperty('error');
    if (expectedMessage) {
      expect(error.error).toContain(expectedMessage);
    }
  }
}

// Usage in tests
describe('User Service with TestUtils', () => {
  test('should create and retrieve user', async () => {
    // Arrange
    const user = await TestUtils.createTestUser();
    
    // Act
    const retrievedUser = await userService.getUserById(user.id);
    
    // Assert
    TestUtils.expectValidUser(retrievedUser);
    expect(retrievedUser.id).toBe(user.id);
  });
});
```

## Testing Configuration

### Jest Configuration
```javascript
// jest.config.js
module.exports = {
  testEnvironment: 'node',
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/**/*.test.js',
    '!src/config/**'
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],
  testMatch: [
    '**/__tests__/**/*.js',
    '**/?(*.)+(spec|test).js'
  ],
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/src/$1'
  }
};
```

## Verification
1. ตรวจสอบว่ามี unit tests ที่ครอบคลุม
2. ทดสอบว่า async operations ถูก test อย่างถูกต้อง
3. ยืนยันว่ามี test coverage ที่เหมาะสม
4. ตรวจสอบว่ามี descriptive test names
5. ทดสอบว่ามี edge cases testing
6. ยืนยันว่ามี proper mocking
7. ตรวจสอบว่า tests เป็น independent
8. ทดสอบว่ามี CI/CD integration
