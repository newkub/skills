---
title: Dev - Warmup & Pre-bundling
description: การใช้ warmup และ optimizeDeps สำหรับ faster dev server startup
---

# Warmup & Pre-bundling

## Warmup Configuration

```typescript
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    warmup: {
      // Files ที่จะ warm up ตอน dev server start
      clientFiles: [
        './src/components/App.vue',
        './src/router/index.ts',
        './src/utils/common.ts',
        './src/stores/*.ts'
      ]
    }
  }
})
```

---

## Dependency Pre-bundling

```typescript
import { defineConfig } from 'vite'

export default defineConfig({
  optimizeDeps: {
    // Dependencies ที่ต้อง pre-bundle
    include: ['lodash-es', 'date-fns', 'axios'],

    // ยกเว้น dependencies (ถ้ามี ES build แล้ว)
    exclude: ['some-esm-lib'],

    // Force optimize (สำหรับ development)
    force: false,

    // Entries สำหรับ scan dependencies
    entries: [
      './src/main.ts',
      './src/admin.ts'
    ]
  }
})
```

---

## esbuild Options

```typescript
import { defineConfig } from 'vite'

export default defineConfig({
  optimizeDeps: {
    esbuildOptions: {
      // ตั้งค่า esbuild สำหรับ pre-bundling
      target: 'es2020',
      supported: {
        'dynamic-import': true
      }
    }
  }
})
```

---

## Hold Until CJS Scan

```typescript
export default defineConfig({
  optimizeDeps: {
    // รอจนกว่าจะ scan CJS dependencies เสร็จ
    holdUntilCrawlEnd: true
  }
})
```

---

## Need Optimization Hints

```typescript
export default defineConfig({
  optimizeDeps: {
    needsInterop: [
      // Libraries ที่ต้อง interop แม้จะเป็น ESM
      'some-library',
      '@scope/problematic-lib'
    ]
  }
})
```
