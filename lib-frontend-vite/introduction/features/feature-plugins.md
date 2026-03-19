---
title: Feature - Plugin System
description: ระบบ plugin ที่ยืดหยุ่นสำหรับขยายความสามารถของ Vite
---

# Plugin System

## Plugin System คืออะไร

Vite Plugin System คือ API ที่อนุญาตให้นักพัฒนาสร้าง plugins เพื่อขยายความสามารถของ Vite ทั้งใน development และ production

### ความสามารถหลัก

- **Transform files** - แปลงไฟล์ตามเงื่อนไข
- **Virtual modules** - สร้าง modules ที่ไม่มีอยู่จริงใน filesystem
- **Dev server hooks** - ควบคุม dev server behavior
- **Build hooks** - แก้ไข build process
- **HMR handling** - ควบคุม Hot Module Replacement

---

## Plugin Hooks

### Build Hooks

```typescript
const myPlugin = () => ({
  name: 'my-plugin',
  
  // ก่อนเริ่ม build
  buildStart() {
    console.log('Build starting...')
  },
  
  // แปลงไฟล์
  transform(code, id) {
    if (id.endsWith('.special')) {
      return { code: code.toUpperCase() }
    }
  },
  
  // หลัง build เสร็จ
  buildEnd() {
    console.log('Build complete!')
  },
  
  // ตอน close bundle
  closeBundle() {
    console.log('Bundle closed')
  }
})
```

### Dev Server Hooks

```typescript
const devPlugin = () => ({
  name: 'dev-plugin',
  
  // Configure dev server
  configureServer(server) {
    // Custom middleware
    server.middlewares.use((req, res, next) => {
      if (req.url === '/api/health') {
        res.end('OK')
      } else {
        next()
      }
    })
  },
  
  // Transform index.html
  transformIndexHtml(html) {
    return html.replace(
      '<title>',
      '<title>[DEV] '
    )
  },
  
  // Handle HMR
  handleHotUpdate({ server, modules, timestamp }) {
    console.log(`${modules.length} modules updated`)
    return modules
  }
})
```

### Module Resolution Hooks

```typescript
const resolvePlugin = () => ({
  name: 'resolve-plugin',
  
  // Custom resolve ID
  resolveId(id, importer) {
    if (id.startsWith('virtual:')) {
      return '\0' + id
    }
  },
  
  // Load virtual module
  load(id) {
    if (id === '\0virtual:config') {
      return `export default ${JSON.stringify(config)}`
    }
  }
})
```

---

## Official Plugins

### Framework Plugins

```bash
# Vue
bun add -D @vitejs/plugin-vue

# React
bun add -D @vitejs/plugin-react

# React with SWC (เร็วกว่า)
bun add -D @vitejs/plugin-react-swc

# Svelte
bun add -D @sveltejs/vite-plugin-svelte

# Preact
bun add -D @preact/preset-vite
```

### Feature Plugins

```bash
# Legacy browser support
bun add -D @vitejs/plugin-legacy

# PWA
bun add -D vite-plugin-pwa

# SSR
bun add -D @vitejs/plugin-vue-jsx
```

### Configuration

```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'

export default defineConfig({
  plugins: [
    vue(),
    legacy({
      targets: ['defaults', 'not IE 11']
    })
  ]
})
```

---

## Popular Community Plugins

### Development

```bash
# Auto restart dev server on config change
bun add -D vite-plugin-restart

# Inspect plugin transform steps
bun add -D vite-plugin-inspect

# Restart on file changes
bun add -D vite-plugin-full-reload
```

### Build Optimization

```bash
# Image optimization
bun add -D vite-plugin-imagemin

# Compression
bun add -D vite-plugin-compression

# Bundle visualizer
bun add -D rollup-plugin-visualizer
```

### Utilities

```bash
# SVG to React component
bun add -D vite-plugin-svgr

# Markdown as Vue component
bun add -D vite-plugin-md

# Layouts
bun add -D vite-plugin-vue-layouts

# Pages auto-routing
bun add -D vite-plugin-pages
```

---

## Creating Custom Plugins

### Simple Plugin

```typescript
// plugins/console-clear.ts
import type { Plugin } from 'vite'

export function consoleClearPlugin(): Plugin {
  return {
    name: 'console-clear',
    apply: 'serve', // เฉพาะ dev mode
    
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        console.clear()
        next()
      })
    }
  }
}
```

### Plugin with Options

```typescript
// plugins/html-transform.ts
import type { Plugin } from 'vite'

interface Options {
  inject?: string
}

export function htmlTransformPlugin(options: Options = {}): Plugin {
  return {
    name: 'html-transform',
    
    transformIndexHtml(html) {
      if (options.inject) {
        return html.replace(
          '</head>',
          `${options.inject}</head>`
        )
      }
      return html
    }
  }
}

// ใช้งาน
import { htmlTransformPlugin } from './plugins/html-transform'

export default defineConfig({
  plugins: [
    htmlTransformPlugin({
      inject: '<meta name="custom" content="value">'
    })
  ]
})
```

---

## Plugin Best Practices

### Plugin Ordering

```typescript
export default defineConfig({
  plugins: [
    // 1. Pre-processing plugins
    
    // 2. Framework plugins
    vue(),
    
    // 3. Transform plugins
    
    // 4. Optimization plugins
    
    // 5. Post-processing plugins (production only)
    mode === 'production' && compression()
  ].filter(Boolean)
})
```

### Conditional Plugin Loading

```typescript
export default defineConfig(({ mode }) => ({
  plugins: [
    // ทุก mode
    vue(),
    
    // เฉพาะ development
    mode === 'development' && inspect(),
    
    // เฉพาะ production
    mode === 'production' && compression()
  ].filter(Boolean)
}))
```

---

## Plugin Debugging

### Inspect Plugin

```bash
bun add -D vite-plugin-inspect
```

```typescript
import Inspect from 'vite-plugin-inspect'

export default defineConfig({
  plugins: [
    Inspect({
      build: true,
      outputDir: '.vite-inspect'
    })
  ]
})
```

เข้า `/__inspect` เพื่อดู plugin transforms

### Debug Mode

```bash
DEBUG=vite:plugin bunx vite
```
