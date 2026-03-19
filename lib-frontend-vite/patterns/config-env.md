---
title: Environment Variables Guide
description: การใช้งาน environment variables ใน Vite ทั้ง dev และ production
---

# Environment Variables

## Loading Environment Variables

### Default .env Files

Vite โหลด `.env` files ตามลำดับ:

```text
.env                # โหลดทุก situation
.env.local          # โหลดทุก situation, ignore by git
.env.[mode]         # โหลดเฉพาะ mode ที่ระบุ
.env.[mode].local   # โหลดเฉพาะ mode, ignore by git
```

ตัวอย่าง:

```text
.env
.env.local
.env.development
.env.development.local
.env.production
.env.production.local
```

### คำสั่งที่ใช้บ่อย

```bash
# Development mode (โหลด .env.development)
bunx vite

# Production mode (โหลด .env.production)
bunx vite build

# Custom mode (โหลด .env.staging)
bunx vite build --mode staging
```

---

## Variable Naming

### Expose ไป Client-side

ตัวแปรที่ขึ้นต้นด้วย `VITE_` จะถูก expose ไปยัง client-side:

```text
# .env
VITE_API_URL=https://api.example.com
VITE_APP_TITLE=My App
VITE_DEBUG=true

# ไม่ expose ไป client
DB_PASSWORD=secret123
API_SECRET_KEY=xyz789
```

### Access ใน Code

```typescript
// Client-side (browser)
const apiUrl = import.meta.env.VITE_API_URL
const appTitle = import.meta.env.VITE_APP_TITLE
const isDebug = import.meta.env.VITE_DEBUG === 'true'

// Check mode
const isDev = import.meta.env.DEV
const isProd = import.meta.env.PROD

// Base URL
const baseUrl = import.meta.env.BASE_URL
```

---

## TypeScript Support

### env.d.ts

```typescript
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_APP_TITLE: string
  readonly VITE_DEBUG: string
  readonly VITE_VERSION: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
```

### ใช้ใน Code

```typescript
// มี autocomplete และ type checking
const apiUrl: string = import.meta.env.VITE_API_URL
```

---

## Config Integration

### Load in vite.config.ts

```typescript
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  // Load env based on mode
  const env = loadEnv(mode, process.cwd(), '')
  
  return {
    define: {
      __API_URL__: JSON.stringify(env.VITE_API_URL),
      __VERSION__: JSON.stringify(env.VITE_VERSION)
    },
    
    server: {
      proxy: {
        '/api': {
          target: env.VITE_API_URL,
          changeOrigin: true
        }
      }
    }
  }
})
```

---

## Common Patterns

### Feature Flags

```text
# .env.development
VITE_FEATURE_DASHBOARD=true
VITE_FEATURE_ANALYTICS=false
VITE_FEATURE_BETA=true
```

```typescript
// feature-flags.ts
export const features = {
  dashboard: import.meta.env.VITE_FEATURE_DASHBOARD === 'true',
  analytics: import.meta.env.VITE_FEATURE_ANALYTICS === 'true',
  beta: import.meta.env.VITE_FEATURE_BETA === 'true'
}
```

### API Configuration

```text
# .env.development
VITE_API_BASE_URL=http://localhost:3000
VITE_API_TIMEOUT=5000
VITE_API_VERSION=v1
```

```typescript
// api/config.ts
export const apiConfig = {
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: parseInt(import.meta.env.VITE_API_TIMEOUT, 10),
  version: import.meta.env.VITE_API_VERSION
}
```

---

## Commands by Environment

### Development

```bash
# .env.development
VITE_API_URL=http://localhost:3000
VITE_DEBUG=true
VITE_MOCK_API=true
```

```bash
# Start dev server
bunx vite
# หรือ
bun run dev
```

### Production

```bash
# .env.production
VITE_API_URL=https://api.example.com
VITE_DEBUG=false
VITE_MOCK_API=false
VITE_ANALYTICS_ID=UA-XXXXX
```

```bash
# Build for production
bunx vite build
# หรือ
bun run build
```

### Staging

```bash
# .env.staging
VITE_API_URL=https://staging-api.example.com
VITE_DEBUG=true
```

```bash
# Build for staging
bunx vite build --mode staging
```

---

## Best Practices

1. **Never commit sensitive data** - ใช้ `.env.local` สำหรับ secrets
2. **Prefix with VITE_** - เฉพาะตัวแปรที่ต้องใช้ใน client
3. **Type all variables** - สร้าง `env.d.ts` เพื่อ type safety
4. **Validate values** - ตรวจสอบค่าที่ runtime ถ้าจำเป็น

```typescript
// Validate required env vars
const required = ['VITE_API_URL', 'VITE_APP_TITLE']
for (const key of required) {
  if (!import.meta.env[key]) {
    throw new Error(`Missing required env variable: ${key}`)
  }
}
```
