# Nitro Installation

## Prerequisites

- Node.js 18+ หรือ Bun หรือ Deno
- Package manager (npm, yarn, pnpm, bun)
- Terminal/Command line

## Installation Methods

### 1. Create New Project

#### Using npx

```bash
npx nuxi init nitro-app
cd nitro-app
```

#### Using bun

```bash
bunx nuxi init nitro-app
cd nitro-app
```

### 2. Add to Existing Project

#### npm

```bash
npm install nitropack
```

#### yarn

```bash
yarn add nitropack
```

#### pnpm

```bash
pnpm add nitropack
```

#### bun

```bash
bun add nitropack
```

## Project Structure

```text
my-nitro-app/
├── routes/
│   ├── index.ts
│   ├── api/
│   │   └── users.ts
│   └── [...slug].ts
├── server.ts          # Optional custom server
├── nitro.config.ts    # Configuration file
├── package.json
└── tsconfig.json
```

## Basic Setup

### 1. สร้าง Basic Route

```typescript
// routes/index.ts
export default defineEventHandler(() => {
  return { message: 'Hello Nitro!' }
})
```

### 2. เพิ่ม Package Scripts

```json
{
  "scripts": {
    "dev": "nitro dev",
    "build": "nitro build",
    "preview": "nitro preview"
  }
}
```

### 3. รัน Development Server

```bash
npm run dev
# หรือ
bun run dev
```

## การตรวจสอบการติดตั้ง

ตรวจสอบว่าติดตั้งสำเร็จโดย:

1. สร้าง `routes/index.ts` ธรรมดา
2. รัน `npm run dev`
3. เปิด <http://localhost:3000>
4. ควรเห็น JSON response: `{"message": "Hello Nitro!"}`

## การแก้ไขปัญหา

### ปัญหาที่พบบ่อย

#### Port ถูกใช้งานอยู่แล้ว

```bash
# ใช้ port อื่น
npm run dev -- --port 3001
```

#### TypeScript Errors

```bash
# ติดตั้ง TypeScript types
npm install -D @types/node
```

#### Build ล้มเหลว

```bash
# Clean build
rm -rf .output
npm run build
```

## ขั้นตอนถัดไป

หลังติดตั้งสำเร็จ:

1. อ่าน [Configuration Guide](setup-configuration.md)
2. ดู [API Reference](api-reference.md)
3. ลอง [Usage Examples](guide-usage.md)
