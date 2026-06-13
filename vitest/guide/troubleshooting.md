---
description: การแก้ปัญหาที่พบบ่อยใน Vitest
---

## Common Issues

### 1. Tests Timeout

**Problem:** Tests หมดเวลา

**Solution:**

```typescript
// เพิ่ม timeout สำหรับ test ที่ช้า
it('should handle slow operation', async () => {
  // ...
}, 10000) // 10 seconds
```

หรือ config global:

```typescript
export default defineConfig({
  test: {
    testTimeout: 10000
  }
})
```

### 2. Mock Not Working

**Problem:** Mock ไม่ทำงาน

**Solution:**

```typescript
// Mock ก่อน import
vi.mock('./api', () => ({
  fetchData: vi.fn()
}))

// ใช้ vi.mocked() สำหรับ type safety
import { fetchData } from './api'
vi.mocked(fetchData).mockResolvedValue('data')
```

### 3. Environment Issues

**Problem:** Tests ล้มเหลวเพราะ environment

**Solution:**

```typescript
export default defineConfig({
  test: {
    environment: 'jsdom', // สำหรับ frontend
    // หรือ 'node' สำหรับ backend
  }
})
```

### 4. Module Resolution

**Problem:** Import paths ไม่พบ

**Solution:**

```typescript
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
```

### 5. Coverage Not Working

**Problem:** Coverage ไม่แสดง

**Solution:**

```typescript
export default defineConfig({
  test: {
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['src/**'],
      exclude: ['src/**/*.test.ts']
    }
  }
})
```

### 6. Watch Mode Not Updating

**Problem:** เปลี่ยน code แต่ tests ไม่รันใหม่

**Solution:**

```bash
# ลบ cache
rm -rf node_modules/.vitest

# รันใหม่
vitest
```

### 7. TypeScript Errors

**Problem:** TypeScript errors ใน test files

**Solution:**

สร้าง `vitest.d.ts`:

```typescript
/// <reference types="vitest/globals" />
```

เพิ่มใน `tsconfig.json`:

```json
{
  "include": ["vitest.d.ts", "src/**/*.ts", "src/**/*.test.ts"]
}
```

### 8. Async Test Failures

**Problem:** Async tests ล้มเหลวโดยไม่รอ

**Solution:**

```typescript
// ใช้ async/await
it('should fetch data', async () => {
  const data = await fetchData()
  expect(data).toBeDefined()
})

// หรือ return promise
it('should fetch data', () => {
  return fetchData().then(data => {
    expect(data).toBeDefined()
  })
})
```

## Debugging

### Run Single Test

```bash
vitest run path/to/test.test.ts
```

### Verbose Output

```bash
vitest run --reporter=verbose
```

### Debug Mode

```bash
vitest --inspect-brk
```

### UI Mode

```bash
vitest --ui
```

## Getting Help

- [Vitest Documentation](https://vitest.dev/)
- [GitHub Issues](https://github.com/vitest-dev/vitest/issues)
- [Discord](https://chat.vitest.dev/)
