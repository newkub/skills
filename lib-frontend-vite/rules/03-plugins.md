# Plugin Rules

## Plugin Selection Criteria

### Official Plugins

**แนะนำ**ให้ใช้ official plugins ก่อน:

| Plugin | ใช้เมื่อไหร่ |
|--------|-------------|
| `@vitejs/plugin-vue` | Vue 3 SFC |
| `@vitejs/plugin-react` | React ด้วย Babel |
| `@vitejs/plugin-react-swc` | React ด้วย SWC (เร็วกว่า) |
| `@vitejs/plugin-svelte` | Svelte |
| `@vitejs/plugin-legacy` | Support legacy browsers |

### Community Plugins

ตรวจสอบก่อนใช้ community plugins:

1. **GitHub Stars** - 200+ stars (indicate popularity)
2. **Maintenance** - อัปเดตภายใน 6 เดือน
3. **Issues** - ไม่มี critical issues ที่ไม่ได้แก้นาน
4. **Size** - ไม่ใช่ dependencies ที่ใหญ่เกินไป

---

## Plugin Order

เรียง plugins ตามลำดับนี้:

```typescript
plugins: [
  // 1. จัดการ environment/define (ก่อน framework)
  EnvironmentPlugin(),

  // 2. Framework plugins
  vue(),

  // 3. Pre-processors (ก่อน compile)
  VitePWA({
    registerType: 'autoUpdate'
  }),

  // 4. Transform plugins (compile/transpile)

  // 5. Post-processors (หลัง compile)

  // 6. Analysis/Debug (สุดท้าย)
  process.env.ANALYZE && visualizer()
].filter(Boolean)
```

---

## Conditional Plugin Loading

```typescript
export default defineConfig(({ mode }) => ({
  plugins: [
    // โหลดตลอด
    vue(),

    // Dev only
    mode === 'development' && vitePluginInspect(),

    // Production only
    mode === 'production' && compression(),

    // Build only (ไม่ใช่ dev)
    command === 'build' && someBuildPlugin()
  ].filter(Boolean)
}))
```

---

## Plugin Performance Check

ตรวจสอบ plugin performance ด้วย `vite --debug`:

```bash
# ดู transform time
bunx vite --debug plugin-transform

# ดูทุกอย่าง
bunx vite --debug

# Profiling
bunx vite --profile
```

สังเกต symptoms ของ slow plugins:

- Dev server start ช้า → ตรวจสอบ `buildStart`, `config`, `configResolved` hooks
- File load ช้า → ตรวจสอบ `resolveId`, `load`, `transform` hooks

---

## Avoid Plugin Anti-patterns

### ❌ Dynamic Import ใน Plugin Setup

```typescript
// Bad - โหลดทุกครั้งที่ server start
import heavyLib from 'heavy-lib'

// Good - dynamic import เมื่อจำเป็น
const heavyLib = await import('heavy-lib')
```

### ❌ Long-running Hooks

```typescript
// Bad - ทำงานนานใน config hook
export default function badPlugin() {
  return {
    name: 'bad-plugin',
    config() {
      // ❌ ทำงานนานที่นี่
      heavyComputation()
      return { /* ... */ }
    }
  }
}

// Good - move ไป hooks ที่เหมาะสม
export default function goodPlugin() {
  return {
    name: 'good-plugin',
    buildStart() {
      // ✅ ทำงานนานตอน build
      heavyComputation()
    }
  }
}
```

### ❌ Unconditional Transform

```typescript
// Bad - transform ทุกไฟล์
transform(code, id) {
  return code.replace(/foo/g, 'bar')
}

// Good - check ก่อน transform
transform(code, id) {
  if (!id.endsWith('.vue')) return
  if (!code.includes('foo')) return

  return code.replace(/foo/g, 'bar')
}
```

---

## Plugin Configuration

เก็บ plugin config แยกไฟล์ถ้าซับซ้อน:

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import { pwaConfig } from './config/pwa'
import { sitemapConfig } from './config/sitemap'

export default defineConfig({
  plugins: [
    VitePWA(pwaConfig),
    Sitemap(sitemapConfig)
  ]
})
```
