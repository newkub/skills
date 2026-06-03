# Installation

## Purpose

แนะนำการติดตั้ง tsdown และข้อกำหนดของระบบ

## Scope

- Package Installation
- create-tsdown CLI
- Node.js Requirements
- TypeScript Setup
- Project Scaffolding

## Package Installation

### npm

```bash
npm install -D tsdown
```

### pnpm

```bash
pnpm add -D tsdown
```

### yarn

```bash
yarn add -D tsdown
```

### bun

```bash
bun add -D tsdown
```

## create-tsdown CLI

สร้าง project ใหม่จาก starter templates:

### npm

```bash
npm create tsdown@latest
```

### pnpm

```bash
pnpm create tsdown@latest
```

### yarn

```bash
yarn create tsdown@latest
```

### bun

```bash
bun create tsdown@latest
```

### Available Templates

| Template | Description |
|----------|-------------|
| `basic` | Pure TypeScript library |
| `react` | React component library |
| `vue` | Vue component library |
| `node` | Node.js library |

## Node.js Requirements

### Minimum Version

tsdown ต้องการ **Node.js 22.18.0** ขึ้นไป:

```bash
# Check version
node --version
# v22.18.0+
```

### Build vs Runtime

| Environment | Version | Purpose |
|-------------|---------|---------|
| **Build** | Node.js 22.18.0+ | Run tsdown |
| **Runtime** | Node.js 18+ | Run library |

### CI/CD Setup

```yaml
# .github/workflows/build.yml
- name: Setup Node.js
  uses: actions/setup-node@v4
  with:
    node-version: '22'  # Build with 22
```

## TypeScript Setup

### Install TypeScript

หากไม่ได้ใช้ `isolatedDeclarations`:

```bash
npm install -D typescript
```

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "strict": true,
    "declaration": true,
    "declarationMap": true,
    "isolatedDeclarations": true
  },
  "include": ["src"]
}
```

### For Fast DTS (Recommended)

```json
{
  "compilerOptions": {
    "isolatedDeclarations": true
  }
}
```

## Project Scaffolding

### 1. Create Project

```bash
mkdir my-library
cd my-library
npm init -y
```

### 2. Install Dependencies

```bash
npm install -D tsdown typescript
```

### 3. Create Structure

```
my-library/
├── src/
│   └── index.ts
├── dist/
├── tsconfig.json
├── tsdown.config.ts
└── package.json
```

### 4. Configure tsdown

```typescript
// tsdown.config.ts
import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['./src/index.ts'],
  dts: true,
})
```

### 5. Add Scripts

```json
{
  "scripts": {
    "build": "tsdown",
    "dev": "tsdown --watch"
  }
}
```

## Verify Installation

### Check Version

```bash
npx tsdown --version
# tsdown v0.x.x
```

### Check Help

```bash
npx tsdown --help
```

### Run Build

```bash
npm run build
```

## Summary

| Step | Command |
|------|---------|
| **Install** | `npm install -D tsdown` |
| **Create** | `npm create tsdown@latest` |
| **Config** | สร้าง `tsdown.config.ts` |
| **Build** | `npm run build` |
| **Node.js** | 22.18.0+ (build), 18+ (runtime) |