---
title: SSR Preload Directives
description: การ preload assets สำหรับ SSR performance
---

# SSR Preload Directives

```typescript
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue', 'vue-router']
        }
      }
    }
  },

  // หรือใช้ plugin สำหรับ render preload links
  plugins: [
    {
      name: 'ssr-preload',
      transformIndexHtml(html, { bundle }) {
        const preloadLinks = Object.keys(bundle)
          .filter(f => f.endsWith('.js'))
          .map(f => `<link rel="modulepreload" href="/${f}">`)
          .join('')

        return html.replace('</head>', `${preloadLinks}</head>`)
      }
    }
  ]
})
```
