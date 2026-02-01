# Bun Core Concepts

## Overview
Bun เป็น JavaScript runtime ที่พัฒนาด้วย Zig ออกแบบมาเพื่อเป็น all-in-one toolkit สำหรับ JavaScript/TypeScript development มีความเร็วสูงและใช้งานง่าย

## Key Concepts

### 1. Bun Runtime
Bun เป็น JavaScript runtime ที่ทำงานได้เร็วกว่า Node.js เนื่องจาก:
- เขียนด้วยภาษา Zig (low-level language)
- ใช้ JavaScriptCore engine (เดียวกับ Safari)
- Integrated bundler, test runner, และ package manager

### 2. Package Manager
Bun มี built-in package manager ที่เร็วกว่า npm/yarn:
```bash
bun install          # Install dependencies
bun add <package>    # Add new package
bun remove <package> # Remove package
bun update           # Update packages
```

### 3. Built-in Tools
Bun มี tools ในตัว:
- **Bundler**: สำหรับ bundle applications
- **Test Runner**: สำหรับรัน tests
- **TypeScript Support**: ในตัวไม่ต้องติดตั้งเพิ่ม
- **Hot Reloading**: สำหรับ development

### 4. Performance
Bun มีประสิทธิภาพสูงเนื่องจาก:
- ใช้ JavaScriptCore engine
- Native TypeScript support
- Optimized I/O operations
- Minimal overhead

### 5. Compatibility
Bun มีความเข้ากันได้สูงกับ:
- Node.js APIs
- npm packages
- Web APIs
- TypeScript syntax

## Examples

### Basic Usage
```bash
# Create new project
bun create react-app my-app

# Install dependencies
bun install

# Run development server
bun dev

# Build for production
bun build

# Run tests
bun test
```

### Package.json
```json
{
  "name": "my-bun-app",
  "version": "1.0.0",
  "scripts": {
    "dev": "bun --hot src/index.ts",
    "build": "bun build src/index.ts --outdir dist",
    "test": "bun test",
    "start": "bun dist/index.js"
  },
  "dependencies": {
    "express": "^4.18.0"
  },
  "devDependencies": {
    "@types/express": "^4.17.0"
  }
}
```

### TypeScript Support
```typescript
// src/index.ts
import { serve } from "bun";

serve({
  port: 3000,
  fetch(req) {
    return new Response("Hello from Bun!");
  },
});
```

### Testing
```typescript
// test/math.test.ts
import { expect, test } from "bun:test";

test("addition", () => {
  expect(2 + 2).toBe(4);
});

test("async function", async () => {
  const result = await Promise.resolve(42);
  expect(result).toBe(42);
});
```

## Best Practices

### 1. Project Setup
- ใช้ `bun create` สำหรับสร้าง projects ใหม่
- ตั้งค่า `bun.lockb` ใน `.gitignore`
- ใช้ TypeScript สำหรับ type safety

### 2. Performance Optimization
- ใช้ built-in bundler สำหรับ production builds
- เปิดใช้งาน hot reloading ใน development
- ใช้ native modules เมื่อเป็นไปได้

### 3. Development Workflow
- ใช้ `bun --hot` สำหรับ development server
- ใช้ `bun test` สำหรับ running tests
- ใช้ `bun run` สำหรับ running scripts

### 4. Dependencies Management
- ใช้ `bun add` สำหรับ adding packages
- ใช้ `bun update` สำหรับ updating packages
- ตรวจสอบ security vulnerabilities ด้วย `bun audit`

## References
- [Bun Documentation](https://bun.sh/docs)
- [Bun API Reference](https://bun.sh/docs/api)
- [Bun vs Node.js](https://bun.sh/docs/runtime/bun-vs-node)
