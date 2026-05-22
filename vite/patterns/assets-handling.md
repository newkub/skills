---
title: Assets - Static File Handling
description: การจัดการ static assets, images, fonts, และ public directory
---

# Static Asset Handling

## Public Directory

```text
public/
├── favicon.ico
├── robots.txt
├── sitemap.xml
└── images/
    └── logo.png
```

Files ใน `public/` จะถูก copy ไปยัง output directory โดยไม่ผ่าน build process

```html
<!-- ใช้ direct path -->
<img src="/images/logo.png" alt="Logo">
<link rel="icon" href="/favicon.ico">
```

---

## Asset URL Handling

### Import Assets

```typescript
import logoUrl from './assets/logo.png'
import workerUrl from './assets/worker.js?worker'
import rawContent from './assets/data.txt?raw'

// Use in component
<img :src="logoUrl" alt="Logo">
```

### URL Patterns

```typescript
// Inline assets < 4KB (default)
import smallImg from './small.png' // inline as base64

// Force as URL
import largeImg from './large.png?url'

// Force inline
import inlineImg from './image.png?inline'

// Raw content
import content from './file.txt?raw'
```

---

## Asset Configuration

```typescript
export default defineConfig({
  build: {
    assetsDir: 'assets',
    assetsInlineLimit: 4096, // 4KB
    
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.')
          const ext = info[info.length - 1]

          if (/\.(png|jpe?g|gif|svg|webp)$/i.test(assetInfo.name)) {
            return 'images/[name]-[hash][extname]'
          }

          if (/\.css$/i.test(assetInfo.name)) {
            return 'css/[name]-[hash][extname]'
          }

          return 'assets/[name]-[hash][extname]'
        }
      }
    }
  }
})
```

---

## Import with Glob

```typescript
// Import multiple assets
const modules = import.meta.glob('./assets/icons/*.svg')

// Lazy loaded
for (const path in modules) {
  modules[path]().then((mod) => {
    console.log(path, mod)
  })
}

// Eager import
const modules = import.meta.glob('./assets/icons/*.svg', { eager: true })
```

---

## Web Workers

```typescript
// Import as worker
import MyWorker from './worker.js?worker'

const worker = new MyWorker()

// Or inline worker
import MyWorker from './worker.js?worker&inline'

// Shared worker
import MySharedWorker from './shared-worker.js?sharedworker'
```
