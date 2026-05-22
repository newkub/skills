---
title: Config - Basics
description: การตั้งค่า Vite configuration พื้นฐานด้วย TypeScript
---

# Vite Configuration Basics

## ใช้ defineConfig สำหรับ TypeScript Support

```typescript
import { defineConfig } from 'vite'

export default defineConfig({
  // config options
})
```

หรือใช้ `satisfies` operator (TypeScript 5.0+):

```typescript
import type { UserConfig } from 'vite'

export default {
  // config options
} satisfies UserConfig
```

ข้อดี:

- Type autocomplete
- Type checking
- Documentation ใน IDE

---

## Config File Loading

Vite ค้นหา config file ตามลำดับ:

```text
vite.config.js
vite.config.mjs
vite.config.ts
vite.config.cjs
vite.config.mts
```

### Config Loading Modes

```bash
# ใช้ config ที่ระบุ
vite --config my-config.js

# ใช้ module runner (แก้ปัญหา monorepo)
vite --configLoader runner

# ใช้ native runtime (เร็วกว่า แต่ไม่ detect changes)
vite --configLoader native
```

---

## แยก Config ตาม Environment

```typescript
import { defineConfig } from 'vite'

export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
  if (command === 'serve') {
    return {
      // dev specific config
    }
  } else {
    return {
      // build specific config
    }
  }
})
```

---

## ใช้ Conditional Config

```typescript
import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => ({
  build: {
    sourcemap: mode === 'development',
    minify: mode === 'production' ? 'terser' : false,
  }
}))
```

---

## Config แบบ Async

```typescript
import { defineConfig } from 'vite'

export default defineConfig(async () => {
  const data = await fetchData()

  return {
    // use async data in config
    define: {
      __DATA__: JSON.stringify(data)
    }
  }
})
```

---

## Load Environment Variables

```typescript
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    define: {
      __API_URL__: JSON.stringify(env.VITE_API_URL)
    }
  }
})
```

หมายเหตุ: ตัวแปรที่ขึ้นต้นด้วย `VITE_` เท่านั้นที่จะถูก expose ไปยัง client-side code
