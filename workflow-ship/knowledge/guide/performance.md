# Performance

## การปรับปรุงประสิทธิภาพสำหรับ Workflow-Ship

### Build Performance

#### 1. Optimize Build Time

**Strategies:**
- ใช้ incremental builds
- Cache dependencies
- Parallelize tasks
- Minimize bundle size

**Implementation:**
```json
// package.json
{
  "scripts": {
    "build": "vite build --mode production"
  }
}
```

#### 2. Cache Management

**Strategies:**
- ใช้ build cache
- Cache node_modules
- Cache build artifacts

**Implementation:**
```bash
# ใช้ bun cache
bun install --cache-dir ~/.bun/cache
```

### Test Performance

#### 1. Optimize Test Time

**Strategies:**
- ใช้ parallel testing
- Mock external dependencies
- Skip slow tests in CI
- Use test coverage selectively

**Implementation:**
```typescript
// vitest.config.ts
export default defineConfig({
  test: {
    parallel: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html']
    }
  }
})
```

#### 2. Test Isolation

**Strategies:**
- Isolate tests แต่ละตัว
- ใช้ test fixtures
- Clean up after tests

**Implementation:**
```typescript
import { beforeEach, afterEach } from 'vitest'

beforeEach(() => {
  // Setup
})

afterEach(() => {
  // Cleanup
})
```

### Dev Server Performance

#### 1. Optimize Dev Server Startup

**Strategies:**
- ใช้ fast refresh
- Minimize initial load
- Lazy load routes

**Implementation:**
```typescript
// vite.config.ts
export default defineConfig({
  server: {
    hmr: true,
    watch: {
      usePolling: false
    }
  }
})
```

#### 2. Hot Module Replacement

**Strategies:**
- Enable HMR
- Optimize HMR updates
- Minimize full reloads

**Implementation:**
```typescript
// vite.config.ts
export default defineConfig({
  server: {
    hmr: {
      overlay: true
    }
  }
})
```

### Loop Performance

#### 1. Optimize Loop Until Complete

**Strategies:**
- Set reasonable timeout
- Limit retry attempts
- Use exponential backoff

**Implementation:**
```typescript
class LoopController {
  async loopUntilComplete(task: Task, options = {}) {
    const {
      maxRetries = 10,
      timeout = 30000,
      backoff = 1000
    } = options

    let retries = 0
    while (!task.isComplete() && retries < maxRetries) {
      try {
        await task.execute()
        if (task.isComplete()) break
      } catch (error) {
        retries++
        await this.sleep(backoff * Math.pow(2, retries))
      }
    }
  }
}
```

#### 2. Error Resolution Performance

**Strategies:**
- Cache error patterns
- Use pre-defined fixes
- Minimize analysis time

**Implementation:**
```typescript
class ErrorResolver {
  private errorCache = new Map()

  async resolve(error: Error) {
    if (this.errorCache.has(error.message)) {
      return this.errorCache.get(error.message)
    }

    const fix = await this.analyzeAndFix(error)
    this.errorCache.set(error.message, fix)
    return fix
  }
}
```

### Monitoring Performance

#### 1. Performance Metrics

**Metrics to track:**
- Build time
- Test time
- Dev server startup time
- Loop iteration count
- Error resolution time

**Implementation:**
```typescript
class PerformanceMonitor {
  private metrics = new Map()

  startTimer(name: string) {
    this.metrics.set(name, Date.now())
  }

  endTimer(name: string) {
    const start = this.metrics.get(name)
    const duration = Date.now() - start
    console.log(`${name}: ${duration}ms`)
    return duration
  }
}
```

#### 2. Performance Budgets

**Budgets to set:**
- Build time < 30s
- Test time < 60s
- Dev server startup < 5s
- Loop iterations < 10

**Implementation:**
```typescript
const PERFORMANCE_BUDGETS = {
  build: 30000,
  test: 60000,
  dev: 5000,
  loop: 10
}
```

### Optimization Strategies

#### 1. Parallel Execution

**When to use:**
- Independent tasks
- CPU-bound operations
- I/O-bound operations

**Implementation:**
```typescript
await Promise.all([
  task1.execute(),
  task2.execute(),
  task3.execute()
])
```

#### 2. Lazy Loading

**When to use:**
- Large dependencies
- Optional features
- Rarely used code

**Implementation:**
```typescript
const heavyModule = await import('./heavy-module')
```

#### 3. Tree Shaking

**When to use:**
- Unused code
- Dead code
- Duplicate code

**Implementation:**
```typescript
// vite.config.ts
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom']
        }
      }
    }
  }
})
```

### Performance Best Practices

1. **Measure First:** วัด performance ก่อน optimize
2. **Optimize Bottlenecks:** เน้นที่ bottlenecks หลัก
3. **Cache Aggressively:** ใช้ cache ทุกที่ที่เป็นไปได้
4. **Parallelize:** ใช้ parallel execution เมื่อเป็นไปได้
5. **Monitor Continuously:** ตรวจสอบ performance อย่างต่อเนื่อง

### Next Steps

- อ่าน [Security](security.md) สำหรับความปลอดภัย
- อ่าน [Testing](testing.md) สำหรับการทดสอบ
- อ่าน [Troubleshooting](troubleshooting.md) สำหรับการแก้ปัญหา
