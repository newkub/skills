# Migration Guide

## จาก Create React App (CRA)

### 1. สร้าง Vite Project ใหม่

```bash
bun create vite my-app --template react-ts
cd my-app
bun install
```

### 2. ย้ายไฟล์

| CRA | Vite |
|-----|------|
| `public/index.html` | `index.html` |
| `src/index.js` | `src/main.tsx` |
| `src/App.js` | `src/App.tsx` |
| `REACT_APP_*` | `VITE_*` |

### 3. แก้ไข index.html

เพิ่ม script tag สำหรับ entry point:

```html
<script type="module" src="/src/main.tsx"></script>
```

### 4. แก้ไข Environment Variables

```typescript
// CRA
const apiUrl = process.env.REACT_APP_API_URL

// Vite
const apiUrl = import.meta.env.VITE_API_URL
```

### 5. แก้ไข tsconfig.json

```json
{
  "compilerOptions": {
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true
  }
}
```

---

## จาก Vue CLI

### 1. สร้าง Vite Project

```bash
bun create vite my-vue-app --template vue-ts
```

### 2. ย้าย Configuration

| Vue CLI | Vite |
|---------|------|
| `vue.config.js` | `vite.config.ts` |
| `chainWebpack` | `rollupOptions` |
| `configureWebpack` | ใช้ plugins |

### 3. แก้ไข Path Aliases

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
```

---

## จาก Webpack

### Key Differences

| Webpack | Vite |
|---------|------|
| `webpack.config.js` | `vite.config.ts` |
| `HtmlWebpackPlugin` | `index.html` (native) |
| `DefinePlugin` | `define` config |
| `devServer` | `server` config |
| Hot reload | Native HMR |

### แปลง Configuration

```typescript
// vite.config.ts
import { defineConfig } from 'vite'

export default defineConfig({
  // แทน webpack resolve.alias
  resolve: {
    alias: {
      '@': '/src'
    }
  },

  // แทน DefinePlugin
  define: {
    __VERSION__: JSON.stringify(process.env.npm_package_version)
  },

  // แทน devServer
  server: {
    port: 3000,
    proxy: {
      '/api': 'http://localhost:8080'
    }
  },

  // แทน output
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
```

---

## Common Issues

### Module not found

**ปัญหา**: ไม่ใช้ explicit extensions

**แก้ไข**: เพิ่ม extensions ใน imports

```typescript
// Before
import Component from './Component'

// After
import Component from './Component.vue'
```

### Environment Variables ไม่ทำงาน

**ปัญหา**: ไม่ขึ้นต้นด้วย `VITE_`

**แก้ไข**: เปลี่ยนชื่อ variables

```env
# Before
API_URL=https://api.example.com

# After
VITE_API_URL=https://api.example.com
```

### TypeScript Path Aliases ไม่ทำงาน

**ปัญหา**: ตั้งค่าใน Vite แต่ไม่ได้ตั้งค่าใน tsconfig.json

**แก้ไข**: เพิ่ม paths ใน `tsconfig.json`

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```
