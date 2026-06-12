---
description: การ migrate จาก Node.js ไป Bun
---

## Goal

อธิบายขั้นตอนการ migrate โปรเจกต์จาก Node.js ไป Bun

## Scope

สำหรับโปรเจกต์ Node.js ที่ต้องการ migrate ไป Bun

## Prerequisites

1. ติดตั้ง Bun
2. Backup โปรเจกต์
3. Test อย่างละเอียดหลัง migration

## Migration Steps

### 1. Install Bun

```bash
# Windows (PowerShell)
irm bun.sh/install.ps1 | iex

# macOS/Linux
curl -fsSL https://bun.sh/install | bash
```

### 2. Replace package-lock.json

```bash
rm package-lock.json
bun install
```

### 3. Update Scripts

แก้ไข `package.json`:

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

Bun รองรับ `.env` โดย default:

```bash
# ลบ dotenv ถ้ามี
bun remove dotenv
```

### 5. Replace Node.js APIs

ตรวจสอบ APIs ที่ไม่รองรับ:

| Node.js | Bun | Notes |
|---------|-----|-------|
| `fs.readFile` | `Bun.file()` | Async by default |
| `http.createServer` | `Bun.serve()` | Faster |
| `crypto` | `crypto` | Mostly compatible |
| `path` | `path` | Compatible |

### 6. Update TypeScript Config

เพิ่ม `bun-types`:

```json
{
  "compilerOptions": {
    "types": ["bun-types"]
  }
}
```

### 7. Test Migration

```bash
bun test
bun run dev
```

## Common Issues

### Native Modules

ถ้าใช้ native modules ที่ไม่รองรับ:
- หา alternatives ที่เป็น pure JavaScript
- ใช้ Node.js compatibility layer

### Platform-specific Code

ตรวจสอบ code ที่ใช้ platform-specific APIs:

```typescript
// ❌ อาจไม่รองรับ
const os = require('os');

// ✅ ใช้ Bun APIs
const os = require('bun:os');
```
