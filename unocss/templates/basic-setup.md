# Basic Setup Templates

## Vite + React/Preact/Vue

```typescript
// uno.config.ts
import { defineConfig, presetUno, presetAttributify, presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
  ],
})
```

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [UnoCSS()],
})
```

```typescript
// src/main.tsx
import 'virtual:uno.css'
```

## Nuxt 3

```typescript
// uno.config.ts
import { defineConfig, presetUno, presetAttributify } from 'unocss'

export default defineConfig({
  presets: [presetUno(), presetAttributify()],
})
```

```typescript
// nuxt.config.ts
export default defineConfig({
  modules: ['@unocss/nuxt'],
})
```

## Next.js

```javascript
// next.config.js
const withUnoCSS = require('@unocss/next').default

module.exports = withUnoCSS()
```

```typescript
// pages/_app.tsx
import '@unocss/reset/tailwind.css'
import 'uno.css'
```

## Astro

```typescript
// astro.config.mjs
import { defineConfig } from 'astro/config'
import UnoCSS from '@unocss/astro'

export default defineConfig({
  integrations: [UnoCSS()],
})
```

## Webpack

```javascript
// uno.config.js
const { defineConfig, presetUno } = require('unocss')

module.exports = defineConfig({
  presets: [presetUno()],
})
```

```javascript
// webpack.config.js
const UnoCSS = require('@unocss/webpack').default

module.exports = {
  plugins: [new UnoCSS()],
}
```

## CLI Standalone

```bash
# uno.config.ts
import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
  presets: [presetUno()],
})
```

```bash
# Generate CSS
npx unocss "src/**/*.html" -o dist/uno.css

# Watch mode
npx unocss "src/**/*.html" -o dist/uno.css -w

# Minified
npx unocss "src/**/*.html" -o dist/uno.css -m
```

## Minimal Config

```typescript
// uno.config.ts - Minimal setup
import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
  presets: [presetUno()],
})
```

## With Transformers

```typescript
// uno.config.ts
import {
  defineConfig,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  presets: [presetUno()],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
```

## With Custom Theme

```typescript
// uno.config.ts
import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
  presets: [presetUno()],
  theme: {
    colors: {
      brand: {
        DEFAULT: '#6366f1',
        light: '#818cf8',
        dark: '#4f46e5',
      },
    },
  },
})
```

## With Shortcuts

```typescript
// uno.config.ts
import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
  presets: [presetUno()],
  shortcuts: {
    'btn': 'px-4 py-2 rounded font-medium transition',
    'btn-primary': 'btn bg-blue-500 text-white hover:bg-blue-600',
    'card': 'bg-white rounded-lg shadow p-4',
  },
})
```

## With Icons

```typescript
// uno.config.ts
import { defineConfig, presetUno, presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],
})
```

```bash
# Install icon collection
npm i -D @iconify-json/carbon
```

```html
<!-- Usage -->
<div class="i-carbon-home text-2xl"></div>
<div class="i-carbon-settings"></div>
```