---
title: SSR Project Template
description: Template สำหรับสร้าง Server-Side Rendering Application ด้วย Vite
---

# SSR Project Template

## โครงสร้างโปรเจกต์

```text
my-ssr-app/
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── server.ts                 # Express/Fastify server
├── .env
├── public/
│   └── favicon.ico
└── src/
    ├── assets/
    ├── components/
    ├── composables/
    ├── entry-client.ts       # Client entry
    ├── entry-server.ts       # Server entry
    ├── router/
    │   └── index.ts
    ├── stores/
    │   └── index.ts
    ├── styles/
    ├── utils/
    │   └── helpers.ts
    ├── views/
    ├── App.vue
    └── main.ts
```

---

## vite.config.ts

```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  
  build: {
    ssr: true,
    rollupOptions: {
      input: {
        client: resolve(__dirname, 'src/entry-client.ts'),
        server: resolve(__dirname, 'src/entry-server.ts')
      }
    }
  },
  
  ssr: {
    noExternal: ['@vueuse/head']
  }
})
```

---

## package.json

```json
{
  "name": "my-ssr-app",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "bun run server.ts",
    "build": "bun run build:client && bun run build:server",
    "build:client": "vite build --outDir dist/client",
    "build:server": "vite build --ssr src/entry-server.ts --outDir dist/server",
    "preview": "bun run build && NODE_ENV=production bun run server.ts",
    "serve": "NODE_ENV=production bun run server.ts",
    "typecheck": "vue-tsc --noEmit",
    "test": "vitest",
    "test:e2e": "playwright test"
  },
  "dependencies": {
    "vue": "^3.4.0",
    "vue-router": "^4.2.0",
    "pinia": "^2.1.0",
    "express": "^4.18.0",
    "@vueuse/head": "^2.0.0"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^5.0.0",
    "@types/express": "^4.17.0",
    "@types/node": "^20.0.0",
    "typescript": "^5.3.0",
    "vite": "^5.0.0",
    "vue-tsc": "^1.8.0"
  }
}
```

---

## src/entry-client.ts

```typescript
import { createApp } from './main'

const { app, router } = createApp()

// Wait for router to be ready before mounting
router.isReady().then(() => {
  app.mount('#app')
})
```

---

## src/entry-server.ts

```typescript
import { renderToString } from 'vue/server-renderer'
import { createApp } from './main'
import type { RenderContext } from './types'

export async function render(url: string, context: RenderContext) {
  const { app, router, pinia } = createApp()
  
  // Set router to requested URL
  await router.push(url)
  await router.isReady()
  
  // Get matched components for data prefetching
  const matchedComponents = router.currentRoute.value.matched.flatMap(
    record => Object.values(record.components || {})
  )
  
  // Prefetch data if components have asyncData
  for (const component of matchedComponents) {
    if ('asyncData' in component) {
      await component.asyncData({ store: pinia, route: router.currentRoute.value })
    }
  }
  
  const html = await renderToString(app, context)
  
  return {
    html,
    state: pinia.state.value
  }
}
```

---

## server.ts (Express)

```typescript
import express from 'express'
import { createServer as createViteServer } from 'vite'
import { render } from './src/entry-server'
import fs from 'fs'
import path from 'path'

const isProd = process.env.NODE_ENV === 'production'
const PORT = process.env.PORT || 5173

async function createServer() {
  const app = express()
  
  let vite: any
  
  if (!isProd) {
    // Development: create Vite dev server
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom'
    })
    app.use(vite.middlewares)
  } else {
    // Production: serve static files
    app.use(express.static('dist/client', { index: false }))
  }
  
  app.use('*', async (req, res, next) => {
    const url = req.originalUrl
    
    try {
      let template: string
      let render: (url: string, context: any) => Promise<any>
      
      if (!isProd) {
        // Development: get template and render from Vite
        template = fs.readFileSync(path.resolve('index.html'), 'utf-8')
        template = await vite.transformIndexHtml(url, template)
        render = (await vite.ssrLoadModule('/src/entry-server.ts')).render
      } else {
        // Production: use built files
        template = fs.readFileSync(path.resolve('dist/client/index.html'), 'utf-8')
        render = (await import('./dist/server/entry-server.js')).render
      }
      
      const context = {}
      const { html, state } = await render(url, context)
      
      // Inject rendered HTML and state
      const finalHtml = template
        .replace('<!--app-html-->', html)
        .replace(
          '<!--app-state-->',
          `<script>window.__PINIA_STATE__ = ${JSON.stringify(state)}</script>`
        )
      
      res.status(200).set({ 'Content-Type': 'text/html' }).end(finalHtml)
    } catch (e) {
      if (!isProd && vite) {
        vite.ssrFixStacktrace(e as Error)
      }
      next(e)
    }
  })
  
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
  })
}

createServer()
```

---

## คำสั่งที่ใช้บ่อย

```bash
# Development (with SSR)
bun run dev

# Build for production
bun run build

# Build client only
bun run build:client

# Build server only
bun run build:server

# Preview production build
bun run preview

# Serve production
bun run serve

# Type checking
bun run typecheck

# Testing
bun run test
bun run test:e2e
```
