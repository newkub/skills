# Key Concepts

แนวคิดหลักที่ต้องเข้าใจก่อนใช้งาน Bunup

## Entry Points

Entry points คือไฟล์ต้นทางที่ Bunup จะใช้เป็นจุดเริ่มต้นสำหรับ bundling

### Default Entry Points

Bunup ตรวจจับ entry points ทั่วไปอัตโนมัติ:

```
index.ts, index.tsx, src/index.ts, src/index.tsx,
cli.ts, src/cli.ts, src/cli/index.ts
```

### การกำหนด Entry Points

```typescript
// ไฟล์เดียว
entry: "src/index.ts"

// หลายไฟล์
entry: ["src/index.ts", "src/cli.ts"]

// Glob patterns
entry: ["src/**/*.ts", "!src/**/*.test.ts"]
```

## Output Formats

Bunup รองรับ 3 output formats:

| Format | คำอธิบาย | Use Case |
|--------|----------|----------|
| `esm` | ECMAScript modules | Modern bundlers, browsers |
| `cjs` | CommonJS modules | Node.js, legacy bundlers |
| `iife` | Immediately Invoked Function Expression | Browser, script tags |

## Output Extensions

Extensions เปลี่ยนตาม `package.json` `type` field:

**เมื่อ `package.json` มี `"type": "module"`:**

| Format | JS Extension | TS Declaration |
|--------|--------------|----------------|
| esm | `.js` | `.d.ts` |
| cjs | `.cjs` | `.d.cts` |
| iife | `.global.js` | `.global.d.ts` |

**เมื่อ `package.json` ไม่มี `type` หรือมี `"commonjs"`:**

| Format | JS Extension | TS Declaration |
|--------|--------------|----------------|
| esm | `.mjs` | `.d.mts` |
| cjs | `.js` | `.d.ts` |
| iife | `.global.js` | `.global.d.ts` |

## Target Environments

| Target | คำอธิบาย |
|--------|----------|
| `node` | สำหรับ Node.js (default) |
| `browser` | สำหรับเบราว์เซอร์ |
| `bun` | สำหรับ Bun runtime |

## Package Management

### Dependency Types

| Type | Default Behavior | Result |
|------|-----------------|--------|
| `dependencies` | External | ติดตั้งเมื่อผู้ใช้ติดตั้ง library |
| `peerDependencies` | External | ผู้ใช้ต้องติดตั้งเอง |
| `devDependencies` | Bundled if imported | Bundled เมื่อโค้ดใช้งาน |

### Options

```typescript
// Bundle ทุก dependency
packages: "bundle"

// Externalize ทุก dependency  
packages: "external"

// Externalize เฉพาะบาง package
external: ["lodash", "react"]
```

## Configuration File

ใช้ `bunup.config.ts` เพื่อ centralize build settings:

```typescript
import { defineConfig } from "bunup";

export default defineConfig({
  entry: "src/index.ts",
  format: ["esm", "cjs"],
  outDir: "dist",
  dts: true,
});
```

### Multiple Configurations

```typescript
export default defineConfig([
  {
    entry: "src/index.ts",
    name: "node",
    format: "esm",
    target: "node",
  },
  {
    entry: "src/browser.ts",
    name: "browser",
    format: ["esm", "iife"],
    target: "browser",
  },
]);
```

## TypeScript Declarations

Bunup สร้าง TypeScript declaration files (.d.ts) อัตโนมัติ:

### Isolated Declarations

TypeScript 5.5+ รองรับ isolated declarations ที่ทำให้ build เร็วขึ้นมาก:

```json
{
  "compilerOptions": {
    "declaration": true,
    "isolatedDeclarations": true
  }
}
```

ต้องการ explicit return types บน public exports:

```typescript
// Required: explicit return type
export function getData(): Promise<User> {
  return fetchUser();
}
```

### Declaration Splitting

ป้องกันการซ้ำซ้อนของ types:

```typescript
dts: {
  splitting: true,
}
```

## Plugins

Bunup มี built-in plugins และรองรับ custom plugins:

```typescript
import { copy } from "bunup/plugins";

export default defineConfig({
  plugins: [copy(["README.md", "assets/**/*"])],
});
```