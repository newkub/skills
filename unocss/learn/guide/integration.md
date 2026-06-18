# Integration กับ Frameworks

## สรุป Integrations

| Framework | Package | Import | สถานะ |
|-----------|---------|--------|--------|
| **Vite** | `unocss` | `unocss/vite` | แนะนำ |
| **Nuxt** | `@unocss/nuxt` | module | Official |
| **Next.js** | `@unocss/next` | config | Official |
| **Webpack** | `@unocss/webpack` | plugin | Official |
| **PostCSS** | `@unocss/postcss` | plugin | Official |
| **Svelte** | `unocss/vite` | via Vite | Via Vite |
| **Astro** | `@unocss/astro` | integration | Official |
| **Vue** | `unocss/vite` | via Vite | Via Vite |
| **React** | `unocss/vite` | via Vite | Via Vite |

## Vite

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [UnoCSS()],
})
```

```typescript
// src/main.ts
import 'virtual:uno.css'
```

## Nuxt 3

```bash
bun i -D @unocss/nuxt unocss
```

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@unocss/nuxt'],
  css: ['@unocss/reset/tailwind.css'],
})
```

## Next.js

```bash
bun i -D @unocss/next unocss
```

```javascript
// next.config.js
const UnoCSS = require('@unocss/next').default

module.exports = {
  // ...
}
```

```javascript
// pages/_app.tsx
import '@unocss/reset/tailwind.css'
import 'uno.css'
```

## Webpack

```bash
bun i -D @unocss/webpack unocss
```

```javascript
// webpack.config.js
const UnoCSS = require('@unocss/webpack').default

module.exports = {
  plugins: [
    new UnoCSS({
      // UnoCSS options
    }),
  ],
}
```

## PostCSS

```bash
bun i -D @unocss/postcss unocss
```

```javascript
// postcss.config.js
module.exports = {
  plugins: {
    '@unocss/postcss': {
      content: ['src/**/*.{html,js,jsx,ts,tsx,vue,svelte}'],
    },
  },
}
```

```css
/* src/index.css */
@unocss;
```

## Astro

```bash
bun i -D @unocss/astro unocss
```

```typescript
// astro.config.mjs
import { defineConfig } from 'astro/config'
import UnoCSS from '@unocss/astro'

export default defineConfig({
  integrations: [UnoCSS()],
})
```

## Svelte (via Vite)

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import { sveltekit } from '@sveltejs/kit/vite'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [UnoCSS(), sveltekit()],
})
```

## CLI Standalone

```bash
# ใช้กับโปรเจกต์ที่ไม่มี build tool
npx unocss "src/**/*.html" -o dist/uno.css

# Watch mode
npx unocss "src/**/*.html" -o dist/uno.css -w

# Config file
npx unocss "src/**/*.html" -o dist/uno.css -c uno.config.ts
```

## Runtime (Dev Only)

```html
<!-- CDN runtime สำหรับ prototyping -->
<script src="https://cdn.jsdelivr.net/bun/@unocss/runtime"></script>
```

## CSS Reset

UnoCSS แนะนำให้ใช้ CSS reset:

```bash
bun i -D @unocss/reset
```

```typescript
// เลือก reset ที่เหมาะ
import '@unocss/reset/tailwind.css'  // Tailwind-style
import '@unocss/reset/normalize.css'  // Normalize
import '@unocss/reset/eric-meyer.css' // Eric Meyer
import '@unocss/reset/sanitize/sanitize.css' // Sanitize
```
