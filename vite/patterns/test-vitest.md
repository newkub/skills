---
title: Test - Vitest Integration
description: การตั้งค่า Vitest สำหรับ testing ใน Vite projects
---

# Vitest Integration

## Basic Vitest Config

```typescript
import { defineConfig } from 'vite'
import { defineConfig as defineVitestConfig } from 'vitest/config'

export default defineVitestConfig({
  plugins: [], // your vite plugins
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,ts}']
  }
})
```

หรือ merge กับ Vite config:

```typescript
import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom'
    }
  })
)
```

---

## Test Configuration

```typescript
export default defineConfig({
  test: {
    // Global test setup
    globals: true,
    
    // Test environment
    environment: 'jsdom', // 'node' | 'happy-dom' | 'edge-runtime'
    
    // Setup files
    setupFiles: ['./test/setup.ts'],
    
    // Coverage
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'test/setup.ts'
      ]
    },
    
    // Mocking
    mockReset: true,
    restoreMocks: true
  }
})
```

---

## Component Testing

```typescript
// test/setup.ts
import { config } from '@vue/test-utils'
import { vi } from 'vitest'

// Global stubs
config.global.stubs = {
  RouterLink: true
}

// Mock global objects
globalThis.IntersectionObserver = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn()
}))
```

---

## In-Source Testing

```typescript
// src/utils/math.ts
export function add(a: number, b: number): number {
  return a + b
}

// Test ในไฟล์เดียวกัน
if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest
  
  describe('add', () => {
    it('adds two numbers', () => {
      expect(add(1, 2)).toBe(3)
    })
  })
}
```

Enable ใน config:

```typescript
export default defineConfig({
  test: {
    includeSource: ['src/**/*.{js,ts}']
  },
  define: {
    'import.meta.vitest': 'undefined'
  }
})
```
