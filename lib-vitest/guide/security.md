---
description: Security considerations สำหรับ testing
---

## Security Considerations

### 1. ไม่ Hardcode Secrets

❌ Bad:

```typescript
it('should connect to database', () => {
  const db = new Database('mongodb://user:password@localhost')
  // ...
})
```

✅ Good:

```typescript
it('should connect to database', () => {
  const db = new Database(process.env.DB_URL)
  // ...
})
```

### 2. ใช้ Mock Data สำหรับ Sensitive Operations

```typescript
// Mock payment processing
vi.mock('./payment', () => ({
  processPayment: vi.fn(() => Promise.resolve({ success: true }))
}))
```

### 3. ไม่ Test กับ Production Data

```typescript
// ใช้ test database
const testDb = await createTestDatabase()
// ไม่ใช้ production database
```

### 4. Cleanup Test Data

```typescript
afterEach(async () => {
  await testDb.clear()
  await cleanupFiles()
})
```

### 5. Validate Input Sanitization

```typescript
it('should sanitize user input', () => {
  const malicious = '<script>alert("xss")</script>'
  const sanitized = sanitize(malicious)
  expect(sanitized).not.toContain('<script>')
})
```

### 6. Test Authentication/Authorization

```typescript
describe('Protected Route', () => {
  it('should deny access without token', async () => {
    const response = await fetch('/api/users')
    expect(response.status).toBe(401)
  })

  it('should allow access with valid token', async () => {
    const token = generateTestToken()
    const response = await fetch('/api/users', {
      headers: { Authorization: `Bearer ${token}` }
    })
    expect(response.status).toBe(200)
  })
})
```

### 7. Environment Variables

```typescript
// vitest.config.ts
export default defineConfig({
  test: {
    env: {
      NODE_ENV: 'test',
      API_KEY: 'test-key'  // Test key only
    }
  }
})
```

## Best Practices

- ใช้ environment variables สำหรับ secrets
- Mock external services ที่ sensitive
- ใช้ test databases แยกจาก production
- Cleanup test data หลังแต่ละ test
- ไม่ commit secrets ใน test files
