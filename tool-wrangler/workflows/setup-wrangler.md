---
description: ติดตั้งและตั้งค่า Wrangler สำหรับพัฒนา Cloudflare Workers
---

## Goal

ติดตั้งและตั้งค่า Wrangler CLI สำหรับพัฒนา Cloudflare Workers

## Execute

### 1. ติดตั้ง Wrangler

```bash
# ติดตั้งด้วย Bun (recommended)
bun add -D wrangler

# หรือติดตั้ง globally
bun add -g wrangler
```

### 2. Authentication

```bash
# Login ไปยัง Cloudflare
wrangler login

# ตรวจสอบ authentication
wrangler whoami
```

### 3. สร้าง Project

```bash
# สร้าง Worker project ใหม่
wrangler init my-worker

# เลือก template:
# - Hello World
# - Fetch Handler
# - Scheduled Handler
# - Worker with D1
# - Worker with KV
# - Worker with R2
```

### 4. ตั้งค่า Configuration

แก้ไข `wrangler.jsonc`:

```jsonc
{
  "$schema": "./node_modules/wrangler/config-schema.json",
  "name": "my-worker",
  "main": "src/index.ts",
  "compatibility_date": "2024-06-03"
}
```

### 5. Generate Types

```bash
# Generate TypeScript types สำหรับ bindings
wrangler types
```

### 6. ทดสอบ Development

```bash
# เริ่ม development server
wrangler dev

# เปิด browser ไปที่ http://localhost:8787
```

## Expected Outcome

- Wrangler ติดตั้งและ authenticate แล้ว
- Worker project สร้างเรียบร้อย
- Configuration ตั้งค่าถูกต้อง
- TypeScript types สร้างแล้ว
- Development server ทำงานได้
