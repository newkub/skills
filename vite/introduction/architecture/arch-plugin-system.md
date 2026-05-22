---
title: Architecture - Plugin System
description: สถาปัตยกรรมระบบ plugin ของ Vite และการทำงานภายใน
---

# Plugin System Architecture

## Plugin Pipeline

### การทำงานของ Plugin Pipeline

```
Request → Plugin Transform 1 → Plugin Transform 2 → ... → Browser
```

Vite ใช้ plugin pipeline แบบ cascading โดยที่แต่ละ plugin สามารถ:
- Transform เนื้อหาของไฟล์
- Modify module graph
- Hook into dev server events
- Intercept build process

### Plugin Hooks Execution Order

```
Dev Mode:
1. resolveId → หา module path
2. load → โหลด content
3. transform → แปลง code
4. configureServer → setup dev server
5. handleHotUpdate → handle HMR

Build Mode:
1. buildStart → เริ่ม build
2. resolveId → resolve modules
3. load → load content
4. transform → transform code
5. buildEnd → จบ build
6. closeBundle → close bundle
```

---

## Plugin Hook Types

### Universal Hooks (Dev + Build)

```typescript
interface Plugin {
  name: string
  
  // Module resolution
  resolveId?(source: string, importer?: string): string | null
  
  // Load module content
  load?(id: string): string | null
  
  // Transform content
  transform?(code: string, id: string): TransformResult
  
  // Transform index.html
  transformIndexHtml?(html: string): string
}
```

### Dev-Specific Hooks

```typescript
interface Plugin {
  // Configure dev server
  configureServer?(server: ViteDevServer): void
  
  // Configure preview server
  configurePreviewServer?(server: PreviewServer): void
  
  // Handle HMR
  handleHotUpdate?(ctx: HmrContext): void
}
```

### Build-Specific Hooks

```typescript
interface Plugin {
  // Build lifecycle
  buildStart?(): void
  buildEnd?(): void
  closeBundle?(): void
  
  // Output generation
  generateBundle?(options: OutputOptions, bundle: Bundle): void
  writeBundle?(options: OutputOptions, bundle: Bundle): void
}
```

---

## Plugin Context

### Dev Server Context

```typescript
interface ViteDevServer {
  config: ResolvedConfig
  middlewares: Connect.Server
  ws: WebSocketServer
  moduleGraph: ModuleGraph
  
  // Methods
  transformRequest(url: string): Promise<TransformResult>
  ssrLoadModule(url: string): Promise<Record<string, any>>
}
```

### HMR Context

```typescript
interface HmrContext {
  file: string
  timestamp: number
  modules: ModuleNode[]
  read(): string | Promise<string>
  server: ViteDevServer
}
```

---

## Plugin Resolution Flow

```
1. Browser Request /src/App.vue
2. Vite ส่งต่อให้ Plugin Pipeline
3. Plugin 1: resolveId → หาไฟล์
4. Plugin 2: load → โหลด content
5. Plugin 3: transform → compile Vue → JS
6. ส่ง JavaScript กลับไป Browser
```

---

## Virtual Modules

### คืออะไร

Virtual modules คือ modules ที่ถูก generate โดย plugin ใน runtime ไม่มีอยู่จริงใน filesystem

### การสร้าง Virtual Module

```typescript
const virtualModulePlugin = (): Plugin => ({
  name: 'virtual-module',
  
  resolveId(id) {
    if (id.startsWith('virtual:')) {
      return '\0' + id
    }
  },
  
  load(id) {
    if (id === '\0virtual:config') {
      return `
        export const API_URL = '${process.env.API_URL}'
        export const VERSION = '1.0.0'
      `
    }
  }
})
```

### การใช้งาน Virtual Module

```typescript
import { API_URL, VERSION } from 'virtual:config'

console.log(API_URL) // http://localhost:3000
console.log(VERSION) // 1.0.0
```

---

## Plugin Ordering & Enforcing

### Plugin Ordering

```typescript
export default defineConfig({
  plugins: [
    // Pre plugins
    {
      name: 'pre-plugin',
      enforce: 'pre', // ทำงานก่อน plugins ปกติ
      transform(code, id) {
        // Transform ก่อน
      }
    },
    
    // Normal plugins
    vue(),
    react(),
    
    // Post plugins
    {
      name: 'post-plugin',
      enforce: 'post', // ทำงานหลัง plugins ปกติ
      transform(code, id) {
        // Transform หลัง
      }
    }
  ]
})
```

### Enforce Values

- `pre` - ทำงานก่อน plugins ปกติ
- `normal` (default) - ทำงานตามลำดับ
- `post` - ทำงานหลัง plugins ปกติ

---

## Plugin Communication

### Shared State

```typescript
// Plugin A
const pluginA = (): Plugin => {
  const shared = { count: 0 }
  
  return {
    name: 'plugin-a',
    api: {
      // สร้าง API สำหรับ plugin อื่นเรียกใช้
      increment() {
        shared.count++
      }
    }
  }
}

// Plugin B
const pluginB = (): Plugin => ({
  name: 'plugin-b',
  configResolved(config) {
    // เรียกใช้ API จาก Plugin A
    const pluginA = config.plugins.find(p => p.name === 'plugin-a')
    pluginA?.api?.increment()
  }
})
```

---

## Performance Considerations

### ลด Plugin Overhead

```typescript
const optimizedPlugin = (): Plugin => ({
  name: 'optimized',
  
  // Filter files ที่จะ transform
  transform(code, id) {
    // ข้ามถ้าไม่ใช่ target files
    if (!id.endsWith('.vue')) return
    
    // Heavy transform
    return transformVue(code)
  },
  
  // หรือใช้ transformIndexHtml แทน transform ทั้งไฟล์
  transformIndexHtml(html) {
    return html.replace(/search/g, 'replace')
  }
})
```

### Async Operations

```typescript
const asyncPlugin = (): Plugin => ({
  name: 'async',
  
  async load(id) {
    if (id.endsWith('.async')) {
      const content = await fetchContent(id)
      return content
    }
  }
})
```

---

## Plugin Ecosystem

### Official Plugins

- `@vitejs/plugin-vue` - Vue support
- `@vitejs/plugin-react` - React support
- `@vitejs/plugin-legacy` - Legacy browser support
- `@vitejs/plugin-basic-ssl` - SSL for dev server

### Popular Community

- `vite-plugin-pages` - File-based routing
- `vite-plugin-layouts` - Layout system
- `vite-plugin-components` - Auto component imports
- `vite-plugin-svg-icons` - SVG icons
- `vite-plugin-windicss` - WindiCSS integration
