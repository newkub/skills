# Installation - SolidStart

## วิธีการติดตั้ง

### 1. สร้าง Project ใหม่

ใช้คำสั่ง `bun create solid` สำหรับสร้าง project ใหม่:

```bash
bun create solid
```

หรือใช้ package managers อื่นๆ:

```bash
npm init solid
pnpm create solid
yarn create solid
deno init --npm solid
```

### 2. เลือก Template

หลังจากรันคำสั่ง จะมี prompt ให้เลือก template:

```
◆ Which template would you like to use?
│ ● basic
│ ○ bare
│ ○ with-solidbase
│ ○ with-auth
│ ○ with-authjs
│ ○ with-drizzle
│ ○ with-mdx
│ ○ with-prisma
│ ○ with-solid-styled
│ ○ with-tailwindcss
└
```

**Templates หลัก:**

| Template | คำอธิบาย | เหมาะสำหรับ |
|----------|-----------|-------------|
| **basic** | Template พื้นฐาน | เริ่มต้นใหม่ |
| **bare** | Minimal setup | Custom projects |
| **with-tailwindcss** | รวม Tailwind CSS | UI development |
| **with-auth** | Authentication setup | Apps ที่ต้องการ auth |
| **with-mdx** | MDX support | Documentation/Blogs |
| **with-drizzle** | Drizzle ORM | Database apps |
| **with-prisma** | Prisma ORM | Database apps |

### 3. เลือก Configuration

ตาม template จะมีคำถามเพิ่มเติม เช่น:

```
◆ Do you want to use Server Side Rendering? (Y/n)
◆ Do you want to use TypeScript? (Y/n)
```

### 4. ติดตั้ง Dependencies

นำทางไปยัง project directory และติดตั้ง dependencies:

```bash
cd my-app
bun install
```

### 5. รัน Development Server

```bash
bun run dev
```

Application จะรันที่ `http://localhost:3000`

## ติดตั้งใน Project ที่มีอยู่แล้ว

### 1. Install Dependencies

```bash
bun add solid-js
bun add -D @solidjs/start vite
```

### 2. สร้าง Project Structure

```
my-app/
├── src/
│   ├── routes/
│   │   └── index.tsx
│   ├── app.tsx
│   └── entry-server.tsx
├── public/
├── package.json
└── vite.config.ts
```

### 3. ตั้งค่า Vite Config

```typescript
// vite.config.ts
import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

export default defineConfig({
  plugins: [solid()],
});
```

### 4. สร้าง Entry Points

```typescript
// src/entry-server.tsx
import { renderToString } from "solid-js/web";
import { Routes } from "./app";

export function render(url: string) {
  return renderToString(() => <Routes />);
}
```

```typescript
// src/entry-client.tsx
import { hydrate } from "solid-js/web";
import { Routes } from "./app";

hydrate(() => <Routes />, document.getElementById("app"));
```

## ติดตั้งเพิ่มเติม

### TypeScript

SolidStart รองรับ TypeScript ออกจากกล่อง:

```bash
# TypeScript จะถูกติดตั้งอัตโนมัติเมื่อเลือก template
```

### Tailwind CSS

```bash
bun add -D tailwindcss postcss autoprefixer
bunx tailwindcss init -p
```

ตั้งค่า `tailwind.config.js`:

```javascript
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Router

```bash
bun add @solidjs/router
```

### UI Libraries

```bash
# Solid UI
bun add @kobalte/core

# Shadcn Solid
bun add @shadcn-solid/ui
```

## ตรวจสอบการติดตั้ง

ตรวจสอบว่าติดตั้งสำเร็จ:

```bash
# Check versions
bunx solid-start --version

# Run dev server
bun run dev
```

## ปัญหาที่พบบ่อย

### Error: Module not found

แก้ไขโดยติดตั้ง dependencies ใหม่:

```bash
rm -rf node_modules bun.lockb
bun install
```

### Port 3000 ถูกใช้งานอยู่

เปลี่ยน port ใน environment variable:

```bash
PORT=3001 bun run dev
```

### TypeScript Errors

ตรวจสอบ `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "jsx": "preserve",
    "jsxImportSource": "solid-js",
    "types": ["vite/client"]
  }
}
```
