---
title: SSR Data Prefetching
description: การ prefetch data ก่อน render บน server
---

# SSR Data Prefetching

```javascript
// src/entry-server.js
export async function render(url) {
  const app = createSSRApp(App)
  const router = createRouter()
  app.use(router)

  router.push(url)
  await router.isReady()

  // Get matched components
  const matchedComponents = router.currentRoute.value.matched.flatMap(
    record => Object.values(record.components)
  )

  // Call asyncData on components
  const asyncData = await Promise.all(
    matchedComponents
      .filter(c => c.asyncData)
      .map(c => c.asyncData({ route: router.currentRoute.value }))
  )

  // Store data for hydration
  const state = { asyncData }

  const html = await renderToString(app)

  return { html, state }
}
```
