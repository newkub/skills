---
title: CSS - Modules & Preprocessors
description: การตั้งค่า CSS Modules, PostCSS, และ preprocessor options
---

# CSS Configuration

## CSS Modules

```typescript
export default defineConfig({
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
      generateScopedName: '[name]__[local]__[hash:base64:5]',
      scopeBehaviour: 'local', // 'local' | 'global'
      hashPrefix: 'prefix',
      globalModulePaths: [/global\.css$/]
    }
  }
})
```

---

## PostCSS Integration

```typescript
import { defineConfig } from 'vite'

export default defineConfig({
  css: {
    postcss: {
      plugins: [
        require('autoprefixer'),
        require('postcss-nested'),
        require('postcss-custom-properties')
      ]
    },
    devSourcemap: true
  }
})
```

---

## Pre-processor Options

```typescript
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "./src/styles/vars.scss" as *;`,
        charset: false
      },
      less: {
        math: 'parens-division',
        modifyVars: {
          'primary-color': '#1890ff'
        }
      },
      styl: {
        imports: [
          './src/styles/vars.styl'
        ]
      }
    }
  }
})
```

---

## Lightning CSS (Experimental)

```typescript
import { defineConfig } from 'vite'

export default defineConfig({
  css: {
    transformer: 'lightningcss', // แทน PostCSS
    lightningcss: {
      targets: {
        chrome: 80,
        firefox: 78,
        safari: 14
      }
    }
  }
})
```

---

## CSS Code Splitting

```typescript
export default defineConfig({
  build: {
    cssCodeSplit: true, // แยก CSS เป็น chunks
    cssMinify: true     // Minify CSS (default: true)
  }
})
```
