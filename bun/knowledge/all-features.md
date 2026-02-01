# Bun All Features

## Overview
Bun มี features ครบถ้วนสำหรับ JavaScript/TypeScript development ทำให้เป็น all-in-one solution ที่ทันสมัยและมีประสิทธิภาพสูง

## Key Features

### 1. JavaScript Runtime
**High Performance Runtime**
- ใช้ JavaScriptCore engine (เดียวกับ Safari)
- เขียนด้วยภาษา Zig สำหรับ performance สูง
- ใช้หน่วยความจำน้อยกว่า Node.js

**Node.js Compatibility**
- รองรับ Node.js APIs ส่วนใหญ่
- สามารถใช้ npm packages ได้
- Migration จาก Node.js ง่าย

### 2. Package Manager
**Lightning Fast**
- เร็วกว่า npm 20x
- เร็วกว่า yarn 10x
- ใช้ lockfile แบบ binary (`bun.lockb`)

**Features**
- `bun install` - Install dependencies
- `bun add <package>` - Add new package
- `bun remove <package>` - Remove package
- `bun update` - Update packages
- `bun audit` - Security audit

### 3. Built-in Bundler
**Zero Configuration**
- Bundles JavaScript, TypeScript, CSS
- Tree shaking อัตโนมัติ
- Code splitting อัตโนมัติ

**Usage**
```bash
bun build ./src/index.ts --outdir ./dist
bun build ./src/index.ts --target browser --outfile ./bundle.js
```

### 4. Test Runner
**Built-in Testing**
- Fast test execution
- Built-in mocking
- TypeScript support ในตัว

**Example**
```typescript
import { test, expect } from "bun:test";

test("basic test", () => {
  expect(1 + 1).toBe(2);
});
```

### 5. TypeScript Support
**Native TypeScript**
- ไม่ต้องติดตั้ง typescript package
- รองรับ .ts, .tsx, .js, .jsx files
- Type checking อัตโนมัติ

### 6. Hot Reloading
**Development Experience**
- `bun --hot` สำหรับ hot reloading
- Fast refresh สำหรับ React applications
- Automatic restart เมื่อ files change

### 7. Web APIs
**Browser Compatibility**
- Fetch API
- WebSockets
- Request/Response objects
- URL, URLSearchParams

### 8. Database Drivers
**Built-in Drivers**
- SQLite3
- PostgreSQL
- MySQL
- MongoDB (community)

## Examples

### Complete Project Setup
```bash
# Create new project
bun create next-app my-app
cd my-app

# Install dependencies
bun install

# Development with hot reload
bun run dev

# Run tests
bun test

# Build for production
bun run build

# Start production server
bun start
```

### API Server
```typescript
// server.ts
import { serve } from "bun";

serve({
  port: 3000,
  async fetch(req) {
    const url = new URL(req.url);
    
    if (url.pathname === "/api/users") {
      const users = await getUsers();
      return Response.json(users);
    }
    
    return new Response("Not Found", { status: 404 });
  },
});

async function getUsers() {
  // Database logic here
  return [{ id: 1, name: "John" }];
}
```

### React Application
```typescript
// App.tsx
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(c => c + 1)}>
        Increment
      </button>
    </div>
  );
}
```

### Testing
```typescript
// api.test.ts
import { test, expect, mock } from "bun:test";

const mockFetch = mock(() => 
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ users: [] })
  })
);

test("fetch users", async () => {
  global.fetch = mockFetch;
  
  const response = await fetch("/api/users");
  const data = await response.json();
  
  expect(data.users).toEqual([]);
});
```

## Performance Comparison

| Operation | Bun | Node.js | Improvement |
|-----------|-----|---------|-------------|
| Install dependencies | 1.2s | 12s | 10x faster |
| Run tests | 0.8s | 4s | 5x faster |
| Build bundle | 2.1s | 8s | 4x faster |
| Start server | 0.1s | 0.5s | 5x faster |

## Best Practices

### 1. Project Structure
```
my-bun-project/
├── src/
│   ├── index.ts
│   ├── api/
│   └── utils/
├── tests/
├── package.json
├── bun.lockb
└── tsconfig.json
```

### 2. Configuration
```json
// package.json
{
  "scripts": {
    "dev": "bun --hot src/index.ts",
    "build": "bun build src/index.ts --outdir dist",
    "test": "bun test",
    "start": "bun dist/index.js"
  }
}
```

### 3. Development Workflow
- ใช้ `bun --hot` สำหรับ development
- ใช้ `bun test` สำหรับ testing
- ใช้ `bun build` สำหรับ production builds

### 4. Performance Tips
- ใช้ built-in bundler แทน external tools
- เปิดใช้งาน TypeScript ในตัว
- ใช้ native modules เมื่อเป็นไปได้

## References
- [Bun Documentation](https://bun.sh/docs)
- [Bun Benchmarks](https://bun.sh/docs/benchmarks)
- [Bun API Reference](https://bun.sh/docs/api)
