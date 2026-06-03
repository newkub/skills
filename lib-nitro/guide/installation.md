# Installation

## เงื่อนไขเบื้องต้น

- Node.js 18+ หรือ Bun หรือ Deno
- npm, yarn, pnpm, หรือ bun

## สร้างโปรเจกต์ใหม่

ใช้ `create-nitro-app` เพื่อสร้างโปรเจกต์ Nitro ใหม่

```bash
npx create-nitro-app@latest my-app
cd my-app
npm install
```

## เพิ่มใน Vite โปรเจกต์ที่มีอยู่แล้ว

### 1. ติดตั้ง packages

```bash
npm install nitro vite
```

### 2. เพิ่ม Nitro plugin ใน Vite config

```typescript
// vite.config.ts
import { defineConfig } from "vite";
import { nitro } from "nitro/vite";

export default defineConfig({
  plugins: [nitro()],
});
```

### 3. สร้าง Nitro config

```typescript
// nitro.config.ts
import { defineConfig } from "nitro";

export default defineConfig({
  serverDir: "./server",
});
```

## package.json Scripts

```json
{
  "scripts": {
    "dev": "vite dev",
    "build": "vite build",
    "preview": "node .output/server/index.mjs"
  }
}
```

## ตรวจสอบการติดตั้ง

```bash
npm run dev
```

Server จะทำงานที่ `http://localhost:3000`

## Next Steps

- [Quick Start](quick-start.md)
- [Key Concept](key-concept.md)
- [Configuration](configuration.md)
