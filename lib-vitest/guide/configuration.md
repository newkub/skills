# Configuration

## Purpose

แนะนำการตั้งค่า Vitest ผ่าน vitest.config.ts

## Scope

- Basic Configuration
- Test Environments
- File Patterns
- Coverage Settings
- Hooks Configuration

## Basic Configuration

```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    // ตั้งค่าพื้นฐาน
  },
})
```

## Test Environments

```typescript
export default defineConfig({
  test: {
    // Test environment (node, jsdom, happy-dom)
    environment: 'node',
    
    // Global variables
    globals: false,
    
    // Global test timeout (ms)
    testTimeout: 5000,
    
    // Hook timeout (ms)
    hookTimeout: 10000,
  },
})
```

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `environment` | string | `'node'` | Test environment |
| `globals` | boolean | `false` | Enable globals (describe, it, etc.) |
| `testTimeout` | number | `5000` | Test timeout in ms |
| `hookTimeout` | number | `10000` | Hook timeout in ms |

## File Patterns

```typescript
export default defineConfig({
  test: {
    // Include patterns
    include: ['**/*.test.ts', '**/*.spec.ts'],
    
    // Exclude patterns
    exclude: [
      'node_modules',
      'dist',
      '**/*.d.ts',
    ],
    
    // Watch exclude
    watchExclude: [
      '**/node_modules/**',
      '**/dist/**',
    ],
  },
})
```

## Coverage Configuration

```typescript
export default defineConfig({
  test: {
    coverage: {
      // Coverage provider: 'v8' | 'istanbul'
      provider: 'v8',
      
      // Report formats
      reporter: ['text', 'json', 'html', 'lcov'],
      
      // Files to exclude
      exclude: [
        'node_modules',
        '**/*.d.ts',
        '**/*.test.ts',
        '**/index.ts',
      ],
      
      // Coverage thresholds
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 80,
        statements: 80,
      },
      
      // Report directory
      reportOnChange: false,
    },
  },
})
```

## Globals Mode

```typescript
export default defineConfig({
  test: {
    globals: true,
  },
})
```

```typescript
// ไม่ต้อง import เมื่อ globals: true
describe('Calculator', () => {
  it('adds numbers', () => {
    expect(1 + 1).toBe(2)
  })
})
```

```typescript
// เมื่อ globals: false (default)
import { describe, it, expect } from 'vitest'

describe('Calculator', () => {
  it('adds numbers', () => {
    expect(1 + 1).toBe(2)
  })
})
```

## Watch Mode

```typescript
export default defineConfig({
  test: {
    // Enable watch mode by default
    watch: true,
    
    // UI mode
    ui: false,
    
    // Open UI in browser
    open: false,
  },
})
```

## Pool Configuration

```typescript
export default defineConfig({
  test: {
    // Pool type: 'threads' | 'forks' | 'vmThreads'
    pool: 'threads',
    
    poolOptions: {
      threads: {
        singleThread: false,
        maxThreads: 4,
        minThreads: 2,
      },
      forks: {
        singleFork: false,
        maxForks: 4,
        minForks: 2,
      },
    },
  },
})
```

| Pool | Description | Use Case |
|------|-------------|----------|
| `threads` | Workers in threads | Cross-platform |
| `forks` | Multiple processes | Best compatibility |
| `vmThreads` | Isolated VMs | Fast, memory-intensive |

## Type Checking

```typescript
export default defineConfig({
  test: {
    typecheck: {
      // Enable type checking
      enabled: true,
      
      // tsconfig path
      tsconfigPath: './tsconfig.json',
      
      // Include patterns
      include: ['**/*.test.ts'],
      
      // Exclude patterns
      exclude: ['**/node_modules/**'],
    },
  },
})
```

## Environment Variables

```typescript
export default defineConfig({
  test: {
    env: {
      NODE_ENV: 'test',
      // Custom env
      API_URL: 'http://localhost:3000',
    },
    
    // Environment files
    envFiles: ['.env.test', '.env.local'],
  },
})
```

## Snapshot Directory

```typescript
export default defineConfig({
  test: {
    // Custom snapshot directory
    snapshotFormat: {
      printBasicPrototype: false,
    },
  },
})
```

## Alias Configuration

```typescript
import { resolve } from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  test: {
    // Vitest uses vite's resolve.alias
  },
})
```

## Summary

| Category | Key Options |
|----------|-------------|
| **Environment** | `environment`, `globals` |
| **Files** | `include`, `exclude`, `watchExclude` |
| **Coverage** | `provider`, `reporter`, `thresholds` |
| **Performance** | `pool`, `poolOptions` |
| **Type Check** | `typecheck.enabled`, `tsconfigPath` |