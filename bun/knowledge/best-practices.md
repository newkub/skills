# Bun Best Practices

## Overview
Best practices สำหรับการพัฒนาด้วย Bun เพื่อให้ได้ประสิทธิภาพสูงสุดและ development experience ที่ดีที่สุด

## Key Concepts

### 1. Project Setup
**Initial Configuration**
```bash
# Create new project with template
bun create <template> <project-name>

# Initialize package.json
bun init -y

# Install dependencies
bun install
```

**Essential Files**
```
project/
├── package.json
├── bun.lockb          # Bun lockfile (add to .gitignore)
├── tsconfig.json      # TypeScript configuration
├── .gitignore
└── src/
    └── index.ts
```

### 2. Package Management
**Dependency Management**
```bash
# Install all dependencies
bun install

# Add production dependency
bun add express

# Add development dependency
bun add -d @types/node

# Remove dependency
bun remove express

# Update all dependencies
bun update

# Security audit
bun audit
```

**Best Practices**
- ใช้ `bun.lockb` สำหรับ deterministic installs
- ตรวจสอบ dependencies ด้วย `bun audit` บ่อยๆ
- ใช้ `bun add` แทนการแก้ไข package.json โดยตรง

### 3. Development Workflow
**Development Server**
```bash
# Start with hot reload
bun --hot src/index.ts

# Or use npm script
bun run dev
```

**Testing**
```bash
# Run all tests
bun test

# Run specific test file
bun test test/math.test.ts

# Run tests in watch mode
bun test --watch
```

**Building**
```bash
# Build for production
bun build src/index.ts --outdir dist

# Build with specific target
bun build src/index.ts --target browser --outfile bundle.js
```

### 4. TypeScript Configuration
**tsconfig.json**
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "noEmit": true,
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

**Benefits**
- Bun มี TypeScript support ในตัว
- ไม่ต้องติดตั้ง typescript package
- Fast type checking และ compilation

## Examples

### API Server Best Practice
```typescript
// src/server.ts
import { serve } from "bun";
import { router } from "./router";
import { errorHandler } from "./middleware/error-handler";

serve({
  port: process.env.PORT || 3000,
  async fetch(req) {
    try {
      return await router.handle(req);
    } catch (error) {
      return errorHandler(error);
    }
  },
});
```

### Testing Best Practice
```typescript
// test/api.test.ts
import { test, expect, beforeAll, afterAll } from "bun:test";
import { setupTestServer, cleanupTestServer } from "./test-utils";

beforeAll(setupTestServer);
afterAll(cleanupTestServer);

test("GET /api/users", async () => {
  const response = await fetch("http://localhost:3000/api/users");
  expect(response.status).toBe(200);
  
  const users = await response.json();
  expect(Array.isArray(users)).toBe(true);
});
```

### Package.json Best Practice
```json
{
  "name": "my-bun-app",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "bun --hot src/index.ts",
    "build": "bun build src/index.ts --outdir dist",
    "start": "bun dist/index.js",
    "test": "bun test",
    "test:watch": "bun test --watch",
    "lint": "bun eslint src/",
    "format": "bun prettier --write src/"
  },
  "dependencies": {
    "express": "^4.18.2"
  },
  "devDependencies": {
    "@types/express": "^4.17.17",
    "eslint": "^8.0.0",
    "prettier": "^3.0.0"
  }
}
```

## Best Practices

### 1. Performance Optimization
**Use Built-in Features**
- ใช้ built-in bundler แทน webpack/rollup
- ใช้ built-in test runner แทน jest
- ใช้ native TypeScript support

**Code Splitting**
```typescript
// Lazy load modules
const heavyModule = await import('./heavy-module');
```

**Bundle Optimization**
```bash
# Minify for production
bun build src/index.ts --minify --outdir dist

# Target specific environments
bun build src/index.ts --target node --outfile bundle.js
```

### 2. Development Experience
**Hot Reloading**
```typescript
// Enable hot reload in development
if (process.env.NODE_ENV === "development") {
  const watcher = new Watcher();
  watcher.watch("./src", (event) => {
    console.log("File changed:", event.path);
  });
}
```

**Environment Variables**
```bash
# .env file
NODE_ENV=development
PORT=3000
DATABASE_URL=postgres://...
```

```typescript
// Load environment variables
const port = process.env.PORT || 3000;
const isDev = process.env.NODE_ENV === "development";
```

### 3. Security Best Practices
**Dependency Security**
```bash
# Audit dependencies regularly
bun audit

# Fix security issues
bun audit fix
```

**Environment Variables**
- ใช้ `.env` สำหรับ local development
- ใช้ environment variables สำหรับ production
- ไม่ commit sensitive data ไปยัง repository

### 4. Code Organization
**Project Structure**
```
src/
├── api/              # API routes
├── middleware/       # Express middleware
├── models/          # Data models
├── services/        # Business logic
├── utils/           # Utility functions
├── types/           # TypeScript types
└── index.ts         # Entry point
```

**Module Organization**
```typescript
// Export from barrel files
// src/api/index.ts
export { userRouter } from "./users";
export { authRouter } from "./auth";

// Import cleanly
import { userRouter, authRouter } from "./api";
```

### 5. Testing Strategy
**Test Organization**
```
tests/
├── unit/            # Unit tests
├── integration/     # Integration tests
├── e2e/            # End-to-end tests
└── test-utils.ts   # Test utilities
```

**Test Utilities**
```typescript
// test/test-utils.ts
export const setupTestServer = async () => {
  // Setup test database
  // Start test server
};

export const cleanupTestServer = async () => {
  // Cleanup test database
  // Stop test server
};
```

## Performance Tips

### 1. Bundle Optimization
- ใช้ tree shaking อัตโนมัติ
- ตั้งค่า `target` ให้เหมาะสมกับ environment
- ใช้ `minify` สำหรับ production

### 2. Runtime Performance
- ใช้ async/await สำหรับ I/O operations
- ใช้ native modules เมื่อเป็นไปได้
- หลีกเลี่ยง synchronous operations

### 3. Memory Management
- ใช้ streaming สำหรับ large files
- cleanup resources อย่างถูกต้อง
- ใช้ connection pooling สำหรับ databases

## References
- [Bun Documentation](https://bun.sh/docs)
- [Bun Performance Guide](https://bun.sh/docs/benchmarks)
- [TypeScript Best Practices](https://typescript-eslint.io/rules/)
