# Integration - WXT

## Framework Integration

### React

```bash
npm install react react-dom
```

```typescript
// entrypoints/popup/main.tsx
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

const root = createRoot(document.getElementById('root')!)
root.render(<App />)
```

### Vue

```bash
npm install vue @vitejs/plugin-vue
```

```typescript
// wxt.config.ts
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  vite: () => ({
    plugins: [vue()]
  })
})
```

### Svelte

```bash
npm install svelte @sveltejs/vite-plugin-svelte
```

### Solid

```bash
npm install solid-js
```

## UI Libraries

### Tailwind CSS

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

```typescript
// entrypoints/popup/main.tsx
import './popup.css'
// Add @tailwind directives to popup.css
```

### UnoCSS

```bash
npm install -D unocss
```

```typescript
// wxt.config.ts
import UnoCSS from 'unocss/vite'

export default defineConfig({
  vite: () => ({
    plugins: [UnoCSS()]
  })
})
```

## State Management

### Nano Stores

```typescript
// stores/counter.ts
import { atom } from 'nanostores'

export const count = atom(0)
```

```typescript
// entrypoints/background.ts
import { count } from '../stores/counter'

count.subscribe(value => {
  console.log('Count changed:', value)
})
```

## Build Tools

### Bundler Options

WXT ใช้ Vite เป็น bundler สามารถ customize ได้:

```typescript
export default defineConfig({
  vite: (config) => ({
    ...config,
    build: {
      minify: 'esbuild',
      sourcemap: true
    }
  })
})
```

## Testing

### Vitest

```bash
npm install -D vitest
```

```typescript
// entrypoints/__tests__/background.test.ts
import { describe, it, expect } from 'vitest'

describe('Background', () => {
  it('should initialize', () => {
    expect(true).toBe(true)
  })
})
```

## CI/CD

### GitHub Actions

```yaml
# .github/workflows/build.yml
name: Build

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v2
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: pnpm
      - run: pnpm install
      - run: pnpm build
      - run: pnpm zip
      - uses: actions/upload-artifact@v4
        with:
          name: extensions
          path: .output/*.zip
```