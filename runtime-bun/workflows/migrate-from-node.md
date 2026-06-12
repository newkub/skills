---
description: migrate โปรเจกต์จาก Node.js ไป Bun
---

## Goal

migrate โปรเจกต์ที่มีอยู่จาก Node.js ไปใช้ Bun

## Scope

สำหรับโปรเจกต์ Node.js ที่ต้องการ migrate ไป Bun

## Execute

### 1. Install Bun

```bash
# Windows (PowerShell)
irm bun.sh/install.ps1 | iex

# macOS/Linux
curl -fsSL https://bun.sh/install | bash
```

### 2. Replace package-lock.json

ลบ `package-lock.json` และสร้าง `bun.lockb`:

```bash
rm package-lock.json
bun install
```

### 3. Update Scripts

แก้ไข `package.json` scripts:

```json
{
  "scripts": {
    "dev": "bun run src/index.js",
    "build": "bun build src/index.js --outdir ./dist",
    "test": "bun test",
    "start": "bun run src/index.js"
  }
}
```

### 4. Update Environment Variables

Bun รองรับ `.env` โดย default ไม่ต้องใช้ `dotenv`:

```bash
# ลบ dotenv ถ้ามี
bun remove dotenv
```

### 5. Replace Node.js APIs

ตรวจสอบและแก้ไข Node.js APIs ที่ไม่รองรับ:

- `fs` → ใช้ `Bun.file()` หรือ `Bun.write()`
- `path` → ใช้ `path` จาก Bun (รองรับส่วนใหญ่)
- `crypto` → ใช้ `crypto` จาก Bun (รองรับส่วนใหญ่)
- `http`/`https` → ใช้ `Bun.serve()` หรือ `fetch`

### 6. Update TypeScript Config

เพิ่ม `bun-types` ใน `tsconfig.json`:

```json
{
  "compilerOptions": {
    "types": ["bun-types"]
  }
}
```

### 7. Test Migration

รัน tests:

```bash
bun test
```

รัน development server:

```bash
bun run dev
```

## Rules

- ตรวจสอบ dependencies ที่ใช้ native modules
- ตรวจสอบ APIs ที่ไม่รองรับใน Bun
- ใช้ `bun compat` เพื่อดู compatibility
- test อย่างละเอียดหลัง migration
