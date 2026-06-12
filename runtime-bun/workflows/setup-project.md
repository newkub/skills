---
description: ตั้งค่าโปรเจกต์ด้วย Bun ตาม best practices
---

## Goal

ตั้งค่าโปรเจกต์ JavaScript/TypeScript ด้วย Bun ตาม best practices

## Scope

สำหรับโปรเจกต์ใหม่ที่ต้องการใช้ Bun เป็น runtime หลัก

## Execute

### 1. Initialize Project

```bash
bun init
```

หรือสร้างด้วย TypeScript:

```bash
bun init -y
```

### 2. Install Dependencies

ใช้ `bun add` สำหรับ production dependencies:

```bash
bun add package-name
```

ใช้ `bun add -D` สำหรับ dev dependencies:

```bash
bun add -D typescript @types/node
```

### 3. Configure TypeScript

สร้าง `tsconfig.json` หรือใช้ default config ของ Bun:

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "noEmit": true,
    "strict": true,
    "skipLibCheck": true,
    "types": ["bun-types"]
  }
}
```

### 4. Add Scripts

ใน `package.json`:

```json
{
  "scripts": {
    "dev": "bun run src/index.ts",
    "build": "bun build src/index.ts --outdir ./dist",
    "test": "bun test",
    "lint": "bunx eslint .",
    "format": "bunx prettier --write ."
  }
}
```

### 5. Create Entry Point

สร้าง `src/index.ts`:

```typescript
console.log("Hello from Bun!");
```

### 6. Run Development

```bash
bun run dev
```

หรือใช้ watch mode:

```bash
bun --watch run src/index.ts
```

## Rules

- ใช้ `bun add` แทน `npm install` เสมอ
- ใช้ `bunx` แทน `npx` เสมอ
- ใช้ TypeScript strict mode
- ใช้ `bun-types` สำหรับ type definitions
- ใช้ `bun --watch` สำหรับ development
