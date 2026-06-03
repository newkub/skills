# Installation

## Purpose

แนะนำการติดตั้ง Rolldown และเริ่มต้นใช้งานในโปรเจกต์

## Scope

- Package Installation
- Project Setup
- Configuration
- Verification

## Package Installation

### npm

```bash
npm install -D rolldown
```

### pnpm

```bash
pnpm add -D rolldown
```

### yarn

```bash
yarn add -D rolldown
```

### bun

```bash
bun add -D rolldown
```

## Project Setup

### 1. Initialize Project

```bash
mkdir my-project
cd my-project
npm init -y
```

### 2. Install Dependencies

```bash
npm install -D rolldown
```

### 3. Create Entry Point

สร้างไฟล์ `src/index.ts`:

```typescript
import { hello } from './hello'

console.log(hello('World'))
```

สร้างไฟล์ `src/hello.ts`:

```typescript
export function hello(name: string): string {
  return `Hello, ${name}!`
}
```

## Configuration

### Create rolldown.config.js

```javascript
import { defineConfig } from 'rolldown'

export default defineConfig({
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'esm',
  },
})
```

### TypeScript Configuration

```javascript
import { defineConfig } from 'rolldown'

export default defineConfig({
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'esm',
  },
  tsconfig: './tsconfig.json',
})
```

## Update package.json

```json
{
  "scripts": {
    "build": "rolldown",
    "build:watch": "rolldown --watch"
  }
}
```

## Verify Installation

### 1. Run Build

```bash
npm run build
```

### 2. Check Output

```
dist/
└── index.js
```

### 3. Test Bundle

```bash
node dist/index.js
# Output: Hello, World!
```

## With Plugins

### CommonJS Support

```bash
npm install -D @rolldown/plugin-commonjs
```

```javascript
import { defineConfig } from 'rolldown'
import commonjs from '@rolldown/plugin-commonjs'

export default defineConfig({
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'esm',
  },
  plugins: [commonjs()],
})
```

### Node Resolution

```bash
npm install -D @rolldown/plugin-node-resolve
```

```javascript
import { defineConfig } from 'rolldown'
import nodeResolve from '@rolldown/plugin-node-resolve'

export default defineConfig({
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'esm',
  },
  plugins: [nodeResolve()],
})
```

## Summary

| Step | Command |
|------|---------|
| **Install** | `npm install -D rolldown` |
| **Config** | สร้าง `rolldown.config.js` |
| **Build** | `npm run build` |
| **Watch** | `rolldown --watch` |
| **Verify** | `node dist/index.js` |