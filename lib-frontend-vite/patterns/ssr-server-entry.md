---
title: SSR Server Entry
description: Server entry point สำหรับ SSR application
---

# SSR Server Entry

```javascript
// src/entry-server.js
import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'
import App from './App.vue'

export async function render(url, context) {
  const app = createSSRApp(App)

  // Add router, store, etc.
  const router = createRouter('memory')
  app.use(router)

  // Set initial route
  router.push(url)
  await router.isReady()

  // Render to string
  const html = await renderToString(app, context)

  return {
    html,
    // State to hydrate on client
    state: {
      route: router.currentRoute.value
    }
  }
}
```
