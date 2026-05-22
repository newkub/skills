---
title: Plugin - Custom Development
description: การสร้าง custom plugins สำหรับ Vite รวมถึง hooks และ HMR handling
---

# Custom Plugin Development

## Custom Local Plugin

สร้าง plugin สำหรับใช้ใน project เดียว:

```typescript
import { defineConfig, Plugin } from 'vite'

const myPlugin = (): Plugin => ({
  name: 'my-custom-plugin',

  // ทำงานตอน build start
  buildStart() {
    console.log('Build starting...')
  },

  // แปลงไฟล์
  transform(code, id) {
    if (id.endsWith('.custom')) {
      return { code: code.toUpperCase() }
    }
  },

  // ทำงานตอน build end
  buildEnd() {
    console.log('Build complete!')
  }
})

export default defineConfig({
  plugins: [myPlugin()]
})
```

---

## Vite Specific Hooks

### configureServer

เพิ่ม custom middlewares ใน dev server:

```typescript
const myPlugin = () => ({
  name: 'configure-server',
  configureServer(server) {
    // Pre-middleware (ก่อน Vite internal middlewares)
    server.middlewares.use((req, res, next) => {
      // custom handle request...
      next()
    })
    
    // Return post-middleware (หลัง Vite internal middlewares)
    return () => {
      server.middlewares.use((req, res, next) => {
        // custom handle request...
        next()
      })
    }
  }
})
```

---

### handleHotUpdate

Custom HMR handling:

```typescript
const myPlugin = () => ({
  name: 'handle-hmr',
  handleHotUpdate({ server, modules, timestamp }) {
    // 1. Filter modules ที่จะ update
    const filteredModules = modules.filter(mod => {
      return !mod.id?.includes('custom-file')
    })
    
    // 2. หรือทำ full reload
    if (shouldFullReload) {
      server.ws.send({ type: 'full-reload' })
      return []
    }
    
    // 3. หรือส่ง custom event
    server.ws.send({
      type: 'custom',
      event: 'special-update',
      data: {}
    })
    
    return filteredModules
  }
})
```

Client-side handler:

```typescript
if (import.meta.hot) {
  import.meta.hot.on('special-update', (data) => {
    // handle custom update
  })
}
```

---

## Plugin Performance Monitoring

ใช้ `vite-plugin-inspect` เพื่อตรวจสอบ plugin performance:

```typescript
import { defineConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'

export default defineConfig({
  plugins: [
    Inspect({
      build: true,
      outputDir: '.vite-inspect'
    })
  ]
})
```

รัน dev server แล้วไปที่ `/__inspect` เพื่อดูรายละเอียด
