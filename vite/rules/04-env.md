# Environment Variables Rules

## Naming Convention

### Client-Side Variables

ตัวแปรที่จะใช้ใน browser **ต้อง**ขึ้นต้นด้วย `VITE_`:

```env
# ✅ ถูกต้อง - ใช้ได้ใน browser
VITE_API_URL=https://api.example.com
VITE_APP_NAME=My App
VITE_ENABLE_FEATURE=true

# ❌ ผิด - ไม่ expose ไป browser
API_URL=https://api.example.com
SECRET_KEY=abc123
```

### Server-Side Variables

ตัวแปรที่ใช้เฉพาะฝั่ง server (ไม่ expose ไป browser):

```env
# Server-side only
DATABASE_URL=postgres://localhost:5432/mydb
API_SECRET_KEY=secret_value
PRIVATE_TOKEN=token_here
```

---

## Built-in Constants

Vite มี constants ที่ใช้ได้ทุกที่:

| Constant | Type | Description |
|----------|------|-------------|
| `import.meta.env.MODE` | `string` | mode ที่ app กำลังรัน |
| `import.meta.env.BASE_URL` | `string` | base url จาก config |
| `import.meta.env.PROD` | `boolean` | true ถ้าเป็น production |
| `import.meta.env.DEV` | `boolean` | true ถ้าเป็น development |
| `import.meta.env.SSR` | `boolean` | true ถ้ารันใน server |

---

## การใช้งาน Environment Variables

### ใน Code

```typescript
// ✅ ถูกต้อง
const apiUrl = import.meta.env.VITE_API_URL

// ❌ ผิด - ไม่มี VITE_ prefix
const secret = import.meta.env.SECRET_KEY // undefined
```

### Type Safety

เพิ่ม types สำหรับ `import.meta.env`:

```typescript
// vite-env.d.ts
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_APP_NAME: string
  readonly VITE_ENABLE_FEATURE: string
  readonly DEV: boolean
  readonly PROD: boolean
  readonly MODE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
```

---

## Loading Environment Files

Vite โหลด `.env` files ตามลำดับ:

```text
.env.[mode].local   # โหลดก่อน (gitignore)
.env.[mode]         # โหลดสำหรับ mode นั้นๆ
.env.local          # โหลดทุก mode (gitignore)
.env                # โหลดทุก mode
```

### ตัวอย่างไฟล์

```text
.env                    # Default
.env.local              # Local overrides
.env.development        # Development mode
.env.development.local  # Development local
.env.production         # Production mode
.env.production.local   # Production local
```

---

## Mode-Specific Configuration

```typescript
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  // โหลด env ตาม mode
  const env = loadEnv(mode, process.cwd(), '')

  return {
    define: {
      __API_URL__: JSON.stringify(env.VITE_API_URL),
      __VERSION__: JSON.stringify(env.npm_package_version)
    }
  }
})
```

---

## Security Best Practices

### ❌ ห้าม

```env
# ห้าม commit secrets
VITE_SECRET_KEY=abc123
VITE_PASSWORD=password123
VITE_PRIVATE_TOKEN=token
```

### ✅ แนะนำ

```env
# .env.local (ใน .gitignore)
VITE_API_URL=http://localhost:3000

# .env.production (commit ได้)
VITE_API_URL=https://api.example.com

# Secrets ใช้เฉพาะ server
# DATABASE_URL, API_KEY ไม่ต้องมี VITE_ prefix
```

---

## Variable Types

Environment variables เป็น string เสมอ:

```typescript
// ❌ ผิด
const enabled = import.meta.env.VITE_ENABLE_FEATURE // "true" ไม่ใช่ true

// ✅ ถูกต้อง
const enabled = import.meta.env.VITE_ENABLE_FEATURE === 'true'

// หรือใช้ helper
const toBoolean = (val: string | undefined) => val === 'true'
const enabled = toBoolean(import.meta.env.VITE_ENABLE_FEATURE)
```

---

## Default Values

```typescript
const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000'
const appName = import.meta.env.VITE_APP_NAME || 'My App'

// ด้วย helper
const env = (key: string, defaultValue: string) => 
  import.meta.env[key] || defaultValue

const apiUrl = env('VITE_API_URL', 'http://localhost:3000')
```
