# Vitest Configuration

## Configuration File

Vitest รองรับ configuration files หลายรูปแบบ:

- `vitest.config.ts`
- `vitest.config.js`
- `vitest.config.mjs`
- `vite.config.ts` (ใช้ `test` option)

## ตัวเลือกหลัก

```typescript
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    // Test files location
    include: ['**/*.{test,spec}.{js,ts}'],
    exclude: ['node_modules', 'dist'],
    
    // Environment
    environment: 'node', // 'jsdom', 'happy-dom', 'edge-runtime'
    
    // Coverage
    coverage: {
      provider: 'v8', // or 'istanbul'
      reporter: ['text', 'json', 'html'],
      exclude: ['node_modules/', 'tests/'],
    },
    
    // Globals
    globals: true,
    
    // Setup files
    setupFiles: ['./tests/setup.ts'],
    
    // Timeout
    testTimeout: 10000,
    hookTimeout: 10000,
    
    // Parallel execution
    pool: 'threads', // 'forks', 'vmThreads'
    poolOptions: {
      threads: {
        singleThread: true,
      },
    },
    
    // Watch mode
    watch: true,
    
    // Reporter
    reporter: ['verbose', 'json'],
    
    // UI
    ui: true,
  },
})
```

## Environment Options

| Environment | Description | Use Case |
|------------|-------------|----------|
| `node` | Node.js environment | Backend tests |
| `jsdom` | JSDOM environment | Frontend tests |
| `happy-dom` | Happy DOM environment | Frontend tests (faster) |
| `edge-runtime` | Edge runtime | Edge functions tests |

## Coverage Configuration

```typescript
coverage: {
  provider: 'v8', // 'v8' (native) or 'istanbul'
  reporter: ['text', 'json', 'html', 'lcov'],
  exclude: [
    'node_modules/',
    'tests/',
    '**/*.d.ts',
    '**/*.config.*',
    '**/mockData',
  ],
  all: true,
  lines: 80,
  functions: 80,
  branches: 80,
  statements: 80,
}
```

## Workspace Configuration

สำหรับ monorepo หรือ multi-project:

```typescript
export default defineConfig({
  test: {
    workspace: [
      'packages/*',
      'apps/*',
    ],
  },
})
```

หรือใช้ configuration files แยกกัน:

```typescript
export default defineConfig({
  test: {
    include: ['packages/*/src/**/*.test.ts'],
  },
})
```
