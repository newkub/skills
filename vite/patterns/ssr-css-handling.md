---
title: SSR CSS Handling
description: การจัดการ CSS ใน SSR environment
---

# SSR CSS Handling

```typescript
import { renderToString } from 'vue/server-renderer'
import { collect } from 'collect-css'

export async function render(url) {
  const app = createSSRApp(App)

  // Collect CSS during render
  const { html, css } = await collect(() => renderToString(app))

  return {
    html,
    css // Inject to <head>
  }
}
```
