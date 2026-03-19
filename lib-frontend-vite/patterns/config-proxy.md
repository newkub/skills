---
title: Config - Proxy & Dev Server
description: การตั้งค่า dev server, proxy, และ CORS ใน Vite
---

# Dev Server & Proxy Configuration

## Proxy Setup

```typescript
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        configure: (proxy, options) => {
          proxy.on('error', (err, req, res) => {
            console.log('proxy error', err)
          })
        }
      },
      '/ws': {
        target: 'ws://localhost:8080',
        ws: true
      }
    }
  }
})
```

---

## HTTPS Configuration

```typescript
import fs from 'fs'

export default defineConfig({
  server: {
    https: {
      key: fs.readFileSync('./key.pem'),
      cert: fs.readFileSync('./cert.pem')
    },
    port: 443,
    strictPort: true
  }
})
```

---

## CORS Setup

```typescript
export default defineConfig({
  server: {
    cors: {
      origin: ['https://example.com', 'https://app.example.com'],
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      credentials: true
    }
  }
})
```

---

## Dev Server Options

```typescript
export default defineConfig({
  server: {
    port: 3000,
    strictPort: true,
    host: '0.0.0.0',
    open: true,
    hmr: {
      overlay: true
    },
    warmup: {
      clientFiles: [
        './src/components/*.vue',
        './src/utils/*.ts'
      ]
    }
  }
})
```

---

## Preview Server (Production Preview)

```typescript
export default defineConfig({
  preview: {
    port: 4173,
    strictPort: true,
    host: true,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true
      }
    }
  }
})
```
