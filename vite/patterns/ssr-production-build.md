---
title: SSR Production Build
description: Build scripts และ configuration สำหรับ SSR production
---

# SSR Production Build

## Build Scripts

```json
{
  "scripts": {
    "dev": "node server",
    "build:client": "vite build --outDir dist/client",
    "build:server": "vite build --outDir dist/server --ssr src/entry-server.js",
    "build": "npm run build:client && npm run build:server"
  }
}
```

## Production Server Setup

```javascript
// server.js (production)
import express from 'express'
import fs from 'fs'
import path from 'path'

const app = express()

// Serve static files from client build
app.use('/assets', express.static('./dist/client/assets'))

// Load SSR entry (result of SSR build)
const { render } = await import('./dist/server/entry-server.js')

app.get('*', async (req, res) => {
  try {
    // Use dist/client/index.html as template
    let template = fs.readFileSync(
      path.resolve('./dist/client/index.html'),
      'utf-8'
    )

    // Render app (no ssrLoadModule needed in production)
    const { html, state } = await render(req.url)

    // Inject HTML
    const finalHtml = template
      .replace('<!--ssr-outlet-->', () => html)
      .replace(
        '</head>',
        `<script>window.__INITIAL_STATE__ = ${JSON.stringify(state)}</script></head>`
      )

    res.status(200).set({ 'Content-Type': 'text/html' }).end(finalHtml)
  } catch (e) {
    res.status(500).end(e.stack)
  }
})

app.listen(3000)
```

## Conditional SSR Logic

```typescript
// ใช้ import.meta.env.SSR สำหรับ conditional logic
if (import.meta.env.SSR) {
  // Server-only logic (จะถูก tree-shake ใน client build)
  const data = await fetchDataFromDatabase()
}
```
