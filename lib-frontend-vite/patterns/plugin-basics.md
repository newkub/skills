---
title: Plugin - Basics
description: การใช้งาน plugins พื้นฐานใน Vite รวมถึง plugin order และ conditional loading
---

# Plugin Basics

## Plugin Naming Conventions

### Vite-only Plugins

```text
vite-plugin-[name]
```

ตัวอย่าง:

- `vite-plugin-vue`
- `vite-plugin-react`
- `vite-plugin-pwa`

### Framework-specific Prefixes

```text
vite-plugin-vue-[name]    # Vue plugins
vite-plugin-react-[name]   # React plugins  
vite-plugin-svelte-[name]  # Svelte plugins
```

### Rolldown-compatible Plugins

```text
rolldown-plugin-[name]
```

ควร include keywords ใน `package.json`:

```json
{
  "keywords": ["rolldown-plugin", "vite-plugin"]
}
```

---

## Plugin Order ที่แนะนำ

Plugins ควรเรียงตามลำดับนี้:

1. **Pre-processing plugins** (ก่อน Vite ประมวลผล)
2. **Framework plugins** (Vue, React, Svelte)
3. **Transformation plugins** (compile/transpile)
4. **Optimization plugins** (bundle, minify)
5. **Post-processing plugins** (หลัง build)

```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  plugins: [
    // 1. Pre-processing

    // 2. Framework
    vue(),

    // 3. Transformation

    // 4. Optimization

    // 5. Post-processing (เฉพาะ build)
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ]
})
```

---

## Conditional Plugin Loading

```typescript
import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => ({
  plugins: [
    // โหลดเฉพาะ dev mode
    mode === 'development' && someDevPlugin(),

    // โหลดเฉพาะ production
    mode === 'production' && someProdPlugin(),
  ].filter(Boolean) // ลบ falsy values
}))
```

---

## Plugin with Options

```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // compiler options
        }
      },
      script: {
        propsDestructure: true
      }
    })
  ]
})
```
