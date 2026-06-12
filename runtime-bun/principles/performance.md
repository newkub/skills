# Performance Principles - Bun

## Overview

Bun ถูกออกแบบมาเพื่อ performance สูง แต่ยังมี best practices ที่ควรปฏิบัติตาม

## Core Principles

### 1. Use Bun APIs

```typescript
// ✅ Good - Use Bun.file
const file = Bun.file("data.json")
const content = await file.text()

// ❌ Bad - Use fs.readFile
import { readFile } from "fs"
const content = await readFile("data.json", "utf-8")
```

### 2. Leverage Zero-Config TypeScript

```typescript
// ✅ Good - Direct TypeScript execution
bun run src/index.ts

// ❌ Bad - Unnecessary transpilation
tsc src/index.ts && node dist/index.js
```

### 3. Use Built-in Bundler

```typescript
// ✅ Good - Use Bun bundler
bun build src/index.ts --outdir dist

// ❌ Bad - External bundler
webpack --config webpack.config.js
```

### 4. Optimize Dependencies

```bash
# Use Bun package manager
bun add lodash

# Use dev dependencies for development only
bun add -d typescript @types/node
```

## Async Operations

### Use Async/Await

```typescript
// ✅ Good
async function fetchAll() {
  const [users, posts] = await Promise.all([
    fetchUsers(),
    fetchPosts()
  ])
  return { users, posts }
}

// ❌ Bad - Sequential
async function fetchAll() {
  const users = await fetchUsers()
  const posts = await fetchPosts()
  return { users, posts }
}
```

## Memory Management

### Avoid Memory Leaks

```typescript
// ✅ Good - Clean up references
let cache = new Map()

function setCache(key: string, value: any) {
  cache.set(key, value)
  if (cache.size > 1000) {
    cache.clear()
  }
}

// ❌ Bad - Unbounded cache
let cache = new Map()

function setCache(key: string, value: any) {
  cache.set(key, value)
}
```

## Caching

### Use Bun's Built-in Caching

```typescript
// Bun caches dependencies automatically
// No need for additional caching layer
```

## Best Practices

1. **Profile before optimizing** - ใช้ profiling tools ก่อน optimize
2. **Measure performance** - benchmark ก่อนและหลัง optimize
3. **Avoid premature optimization** - focus ที่ critical paths ก่อน
4. **Use Bun's native APIs** - เร็วกว่า external libraries
5. **Keep dependencies minimal** - ลด bundle size
