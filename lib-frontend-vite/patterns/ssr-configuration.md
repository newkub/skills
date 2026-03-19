---
title: SSR Configuration
description: การตั้งค่า Vite สำหรับ Server-Side Rendering
---

# SSR Configuration

```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  build: {
    ssr: true,
    rollupOptions: {
      input: {
        server: resolve(__dirname, 'src/entry-server.js'),
        client: resolve(__dirname, 'src/entry-client.js')
      }
    }
  }
})
```
