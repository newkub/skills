# Vite Features

## Core Features

### Instant Server Start

Vite แยก dependencies กับ source code:

- **Dependencies**: Pre-bundle ด้วย esbuild (Go)
- **Source Code**: Serve ผ่าน native ESM (ไม่ต้อง bundle)

ผลลัพธ์: Dev server start ใน < 100ms แม้ project ใหญ่

---

### Lightning Fast HMR

- Hot Module Replacement แบบ ESM native
- เปลี่ยนแปลงทันที ไม่ต้อง reload หน้า
- Framework-agnostic API

First-party HMR support:

- Vue Single File Components
- React Fast Refresh
- Svelte HMR

---

### Optimized Build

Production build ใช้ Rollup พร้อม optimizations:

- **Code Splitting** - แยก chunks อัตโนมัติ
- **Tree Shaking** - ลบ unused code
- **Asset Handling** - จัดการ assets อัตโนมัติ
- **CSS Extraction** - แยก CSS ออกจาก JS

---

## Language Support

### TypeScript

- Built-in support ไม่ต้องตั้งค่า
- Fast transformation ด้วย esbuild
- Type checking แยกกับ build (ใช้ `tsc --noEmit`)

```typescript
// ใช้ได้เลย ไม่ต้องตั้งค่า
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.mount('#app')
```

### JSX / TSX

รองรับ JSX ผ่าน plugins:

- `@vitejs/plugin-react` - Babel-based
- `@vitejs/plugin-react-swc` - SWC-based (เร็วกว่า)
- `@vitejs/plugin-vue` - Vue JSX

### CSS

- CSS imports ทำงานได้เลย
- CSS Modules: `*.module.css`
- Pre-processors: Sass, Less, Stylus
- PostCSS: ตั้งค่าใน `postcss.config.js`

```typescript
// Import CSS
import './styles.css'

// CSS Modules
import classes from './styles.module.css'

// Pre-processor
import './styles.scss'
```

### Static Assets

Handle assets อัตโนมัติ:

```typescript
// Import เป็น URL
import logoUrl from './logo.png'

// Import เป็น string (inline)
import svgString from './icon.svg?raw'

// Import เป็น component (framework-specific)
import Icon from './icon.svg?component'
```

---

## Dev Server Features

### Proxy

```typescript
// vite.config.ts
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
```

### HTTPS

```typescript
export default defineConfig({
  server: {
    https: true
  }
})
```

หรือใช้ certificates ของตัวเอง:

```typescript
export default defineConfig({
  server: {
    https: {
      key: fs.readFileSync('./key.pem'),
      cert: fs.readFileSync('./cert.pem')
    }
  }
})
```

### Auto Open

```typescript
export default defineConfig({
  server: {
    open: true,           // Open default browser
    open: '/dashboard',   // Open specific path
  }
})
```

---

## Build Features

### Multi-Page Application

```typescript
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about/index.html')
      }
    }
  }
})
```

### Library Mode

```typescript
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'MyLib',
      fileName: 'my-lib'
    },
    rollupOptions: {
      external: ['vue']
    }
  }
})
```

### CSS Code Splitting

แยก CSS อัตโนมัติตาม async chunks:

```typescript
export default defineConfig({
  build: {
    cssCodeSplit: true
  }
})
```

---

## Advanced Features

### Glob Import

Import หลายไฟล์พร้อมกัน:

```typescript
const modules = import.meta.glob('./dir/*.js')

// หรือ eager load
const modules = import.meta.globEager('./dir/*.js')
```

### Dynamic Import

```typescript
const module = await import('./heavy-module.js')

// With variables
const page = await import(`./pages/${name}.vue`)
```

### Web Workers

```typescript
// Import เป็น Web Worker
import Worker from './worker.js?worker'

const worker = new Worker()

// หรือ inline
import Worker from './worker.js?worker&inline'
```

### SSR

รองรับ Server-Side Rendering:

```typescript
export default defineConfig({
  build: {
    ssr: true
  }
})
```
