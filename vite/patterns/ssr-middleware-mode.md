---
title: SSR Middleware Mode
description: การใช้ Vite ใน middleware mode สำหรับ SSR ควบคุม server เอง
---

# SSR Middleware Mode

ใช้ Vite ใน middleware mode เพื่อควบคุม server เอง:

```typescript
// server.js
import express from 'express'
import { createServer as createViteServer } from 'vite'

async function createServer() {
  const app = express()

  // Create Vite server in middleware mode
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom'
  })

  // Use Vite's connect instance as middleware
  app.use(vite.middlewares)

  // SSR handler
  app.use('*', async (req, res, next) => {
    const url = req.originalUrl

    try {
      // 1. Read index.html
      let template = fs.readFileSync(
        path.resolve(import.meta.dirname, 'index.html'),
        'utf-8'
      )

      // 2. Apply Vite HTML transforms
      template = await vite.transformIndexHtml(url, template)

      // 3. Load server entry (ssrLoadModule แปลง ESM ให้ใช้ใน Node.js ได้)
      const { render } = await vite.ssrLoadModule('/src/entry-server.js')

      // 4. Render app HTML
      const appHtml = await render(url)

      // 5. Inject HTML
      const html = template.replace(`<!--ssr-outlet-->`, () => appHtml)

      // 6. Send response
      res.status(200)
        .set({ 'Content-Type': 'text/html' })
        .end(html)

    } catch (e) {
      // Fix stack trace ให้ชี้ไปที่ source code จริง
      vite.ssrFixStacktrace(e)
      next(e)
    }
  })

  app.listen(5173)
}

createServer()
```
