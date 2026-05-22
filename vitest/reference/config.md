# Vitest Config Reference

## Full Configuration Options

```typescript
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    // Test Files
    include: ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    exclude: ['node_modules', 'dist', '.idea', '.git', '.cache'],
    
    // Environment
    environment: 'node',
    environmentOptions: {},
    
    // Pool
    pool: 'threads',
    poolOptions: {
      threads: {
        singleThread: false,
        minThreads: 1,
        maxThreads: Infinity,
        isolate: true,
      },
      forks: {
        singleFork: false,
        minForks: 1,
        maxForks: Infinity,
        isolate: true,
      },
      vmThreads: {
        singleThread: false,
        minThreads: 1,
        maxThreads: Infinity,
      },
    },
    
    // Globals
    globals: false,
    
    // Setup Files
    setupFiles: [],
    setupFilesAfterEnv: [],
    
    // Coverage
    coverage: {
      provider: 'v8',
      enabled: false,
      reportsDirectory: './coverage',
      exclude: [],
      extension: ['.js', '.cjs', '.mjs', '.ts', '.mts', '.cts', '.jsx', '.tsx'],
      clean: true,
      cleanOnRerun: true,
      include: [],
      all: true,
      reporter: ['text', 'json', 'html', 'lcov'],
      lines: 100,
      functions: 100,
      branches: 100,
      statements: 100,
      thresholdAuto: true,
    },
    
    // Reporter
    reporter: ['default'],
    outputFile: '',
    
    // UI
    ui: false,
    open: false,
    
    // Watch
    watch: true,
    
    // Timeout
    testTimeout: 5000,
    hookTimeout: 10000,
    
    // Threads
    threads: true,
    maxThreads: Infinity,
    minThreads: 1,
    
    // Single Thread
    singleThread: false,
    
    // Allow Only
    allowOnly: false,
    
    // Silent
    silent: false,
    
    // Cache
    cache: {},
    
    // Sequence
    sequence: {
      shuffle: false,
      concurrent: true,
      seed: 1000,
    },
    
    // Log Heap Usage
    logHeapUsage: false,
    
    // Inspect
    inspect: false,
    inspectBrk: false,
    
    // File Parallelism
    fileParallelism: true,
    
    // MaxWorkers
    maxWorkers: Infinity,
    
    // MinWorkers
    minWorkers: 1,
    
    // UseAtomics
    useAtomics: false,
    
    // Diff
    diff: true,
    
    // Clear Screen
    clearScreen: true,
    
    // Isolate
    isolate: true,
    
    // TransformMode
    transformMode: {
      ssr: [/\.[mc]?js$/],
      web: [/\.[mc]?js$/],
    },
    
    // Alias
    alias: {},
    
    // Resolve
    resolve: {},
    
    // Deps
    deps: {
      inline: [],
      external: [],
      interopDefault: false,
    },
    
    // Server
    server: {
      deps: {},
      transformMode: {},
      watch: {},
    },
  },
})
```

## Type-safe Configuration

```typescript
import type { UserConfig } from 'vitest/config'

const config: UserConfig = {
  test: {
    include: ['**/*.test.ts'],
  },
}

export default defineConfig(config)
```
