# Quick Start

## Purpose

คู่มือเริ่มต้นใช้งาน tsdown — สร้าง bundle แรกใน 5 นาที

## Scope

- Project Setup
- First Bundle
- Build Commands
- Next Steps

## Project Setup

### 1. Create Project

```bash
mkdir my-library
cd my-library
npm init -y
```

### 2. Install tsdown

```bash
npm install -D tsdown typescript
```

### 3. Create Source

```typescript
// src/hello.ts
export function hello() {
  console.log('Hello tsdown!')
}
```

```typescript
// src/index.ts
import { hello } from './hello'

hello()
```

## First Bundle

### 1. Create Config

```typescript
// tsdown.config.ts
import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['./src/index.ts'],
})
```

### 2. Add Scripts

```json
{
  "scripts": {
    "build": "tsdown"
  }
}
```

### 3. Run Build

```bash
npm run build
```

### 4. Check Output

```
dist/
├── index.mjs       // ES Module
├── index.cjs       // CommonJS
└── index.d.ts      // TypeScript declarations
```

### 5. Test Output

```bash
node dist/index.mjs
# Hello tsdown!
```

## Build Commands

### Development Build

```bash
tsdown
```

### Watch Mode

```bash
tsdown --watch
# หรือ
tsdown -w
```

### With DTS

```bash
tsdown --dts
```

### Custom Config

```bash
tsdown --config tsdown.config.ts
```

### All Options

```bash
# Watch + DTS
tsdown --watch --dts

# Custom entry
tsdown ./src/my-entry.ts

# Output dir
tsdown --outDir ./lib
```

## package.json Setup

```json
{
  "name": "my-library",
  "type": "module",
  "scripts": {
    "build": "tsdown",
    "dev": "tsdown --watch",
    "build:watch": "tsdown --watch --dts"
  },
  "devDependencies": {
    "tsdown": "^0.9.0"
  }
}
```

## Multi-entry Example

### Structure

```
src/
├── index.ts
├── utils.ts
└── helpers.ts
```

### Config

```typescript
// tsdown.config.ts
export default defineConfig({
  entry: [
    './src/index.ts',
    './src/utils.ts',
    './src/helpers.ts',
  ],
})
```

### Output

```
dist/
├── index.mjs, index.cjs, index.d.ts
├── utils.mjs, utils.cjs, utils.d.ts
├── helpers.mjs, helpers.cjs, helpers.d.ts
```

## With Plugins

### React Example

```bash
npm install -D @vitejs/plugin-react
```

```typescript
// tsdown.config.ts
import { defineConfig } from 'tsdown'
import react from '@vitejs/plugin-react'

export default defineConfig({
  entry: ['./src/index.tsx'],
  plugins: [react() as any],
})
```

### Vue Example

```bash
npm install -D @vitejs/plugin-vue
```

```typescript
// tsdown.config.ts
import { defineConfig } from 'tsdown'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  entry: ['./src/index.ts'],
  plugins: [vue() as any],
})
```

## With TypeScript Declarations

### Enable DTS

```typescript
// tsdown.config.ts
export default defineConfig({
  entry: ['./src/index.ts'],
  dts: true,
})
```

### tsconfig.json

```json
{
  "compilerOptions": {
    "declaration": true,
    "declarationMap": true,
    "isolatedDeclarations": true
  }
}
```

## Next Steps

| Resource | Description |
|----------|-------------|
| [Features](features.md) | Features ทั้งหมดของ tsdown |
| [Configuration](configuration.md) | การตั้งค่าเพิ่มเติม |
| [Integration](integration.md) | การ integrate กับ tools อื่น |
| [References](../references/) | CLI commands และ API |