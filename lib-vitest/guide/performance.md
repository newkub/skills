---
description: Performance characteristics และ optimization ของ Vitest
---

## Performance Characteristics

### Fast Execution

Vitest ใช้ Vite's HMR และ esbuild ทำให้:
- Cold start เร็วกว่า Jest 10x
- Watch mode รัน tests ที่เปลี่ยนแปลงเท่านั้น
- Parallel execution ด้วย worker threads

### Memory Usage

- ใช้ memory น้อยกว่า Jest เนื่องจากไม่มี transformation overhead
- Worker pool จัดการ memory อัตโนมัติ

## Optimization Tips

### 1. ใช้ Worker Threads

```typescript
// vitest.config.ts
export default defineConfig({
  test: {
    pool: 'threads',        // Default
    poolOptions: {
      threads: {
        minThreads: 2,
        maxThreads: 4
      }
    }
  }
})
```

### 2. ใช้ File Isolation

```typescript
export default defineConfig({
  test: {
    isolate: false,        // ปิดถ้า tests ไม่พึ่งพากัน
    fileParallelism: true   // รัน files ขนานกัน
  }
})
```

### 3. ลบ Tests ที่ไม่จำเป็น

```typescript
export default defineConfig({
  test: {
    include: ['**/*.test.ts'],
    exclude: [
      'node_modules/**',
      'dist/**',
      '**/*.e2e.test.ts'    // แยก e2e tests
    ]
  }
})
```

### 4. ใช้ Coverage Smartly

```typescript
export default defineConfig({
  test: {
    coverage: {
      provider: 'v8',       // เร็วกว่า istanbul
      all: false,           // ไม่รันทุก file
      include: ['src/**'],
      exclude: [
        'src/**/*.test.ts',
        'src/**/*.mock.ts',
        'src/types/**'
      ]
    }
  }
})
```

### 5. Cache Dependencies

```typescript
export default defineConfig({
  test: {
    cache: {
      dir: 'node_modules/.vitest'
    }
  }
})
```

## Benchmarking

เปรียบเทียบ performance:

```bash
# Run with timing
vitest run --reporter=verbose

# Profile tests
vitest run --profile
```

## Tips

- ใช้ `pool: 'forks'` สำหรับ tests ที่ต้องการ isolation สูง
- ปิด `isolate` ถ้า tests ไม่พึ่งพา global state
- ใช้ `shard` สำหรับ CI parallel execution
