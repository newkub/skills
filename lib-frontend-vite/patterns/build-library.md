---
title: Build - Library Mode
description: การตั้งค่า Vite สำหรับ building libraries ที่ publish ไปยัง npm
---

# Library Build Configuration

## Library Mode Basics

```typescript
import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      name: 'MyLib',
      fileName: 'my-lib',
      formats: ['es', 'cjs', 'umd', 'iife']
    },
    rollupOptions: {
      // ไม่ bundle dependencies
      external: ['vue', 'react'],
      output: {
        globals: {
          vue: 'Vue',
          react: 'React'
        }
      }
    }
  }
})
```

---

## Dual Package (ESM + CJS)

```typescript
import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'mjs' : 'cjs'}`
    },
    rollupOptions: {
      external: [/^node:.*/, /^@scope\/utils$/]
    }
  }
})
```

package.json:

```json
{
  "type": "module",
  "main": "./dist/index.cjs",
  "module": "./dist/index.mjs",
  "exports": {
    ".": {
      "import": "./dist/index.mjs",
      "require": "./dist/index.cjs"
    }
  }
}
```

---

## CSS Injection for Libraries

```typescript
import { defineConfig } from 'vite'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

export default defineConfig({
  plugins: [cssInjectedByJsPlugin()],
  build: {
    lib: {
      entry: './src/index.ts',
      formats: ['es', 'cjs']
    }
  }
})
```

---

## Type Declarations (d.ts)

```typescript
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
      rollupTypes: true
    })
  ],
  build: {
    lib: {
      entry: './src/index.ts',
      formats: ['es', 'cjs']
    }
  }
})
```
