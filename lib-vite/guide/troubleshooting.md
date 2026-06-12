# Troubleshooting

## การแก้ปัญหาที่พบบ่อยใน Vite

ปัญหาที่พบบ่อยและวิธีแก้ไข

## Development Server Issues

### 1. Port Already in Use

**Problem:**
```
Error: Port 5173 is already in use
```

**Solution:**
```typescript
// vite.config.ts
export default defineConfig({
  server: {
    port: 3000,  // Change port
  },
})
```

หรือ kill process ที่ใช้ port 5173

```bash
# Windows
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# macOS/Linux
lsof -ti:5173 | xargs kill -9
```

### 2. HMR Not Working

**Problem:**
HMR ไม่ทำงานเมื่อแก้ไขไฟล์

**Solution:**
```typescript
// vite.config.ts
export default defineConfig({
  server: {
    hmr: {
      overlay: true,
    },
    watch: {
      usePolling: true,  // Enable polling for some file systems
    },
  },
})
```

### 3. CORS Errors

**Problem:**
CORS errors เมื่อเรียก API จาก dev server

**Solution:**
```typescript
// vite.config.ts
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://backend:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
```

## Build Issues

### 1. Build Fails

**Problem:**
Build process ล้มเหลว

**Solution:**
```bash
# Clear cache
rm -rf node_modules/.vite

# Reinstall dependencies
bun install

# Try building again
bun run build
```

### 2. Large Bundle Size

**Problem:**
Bundle size ใหญ่เกินไป

**Solution:**
```typescript
// vite.config.ts
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue', 'vue-router'],
          ui: ['element-plus'],
        },
      },
    },
  },
})
```

ใช้ `rollup-plugin-visualizer` เพื่อ analyze bundle

```bash
bun add -D rollup-plugin-visualizer
```

### 3. Sourcemap Issues

**Problem:**
Sourcemaps ไม่ทำงานใน production

**Solution:**
```typescript
// vite.config.ts
export default defineConfig({
  build: {
    sourcemap: true,
  },
})
```

## Module Resolution Issues

### 1. Module Not Found

**Problem:**
```
Error: Cannot find module '@/components/Button'
```

**Solution:**
```typescript
// vite.config.ts
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

```json
// tsconfig.json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### 2. CSS Import Issues

**Problem:**
CSS ไม่ถูกโหลด

**Solution:**
```typescript
// vite.config.ts
export default defineConfig({
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
})
```

### 3. Asset Import Issues

**Problem:**
Assets ไม่ถูก process อย่างถูกต้อง

**Solution:**
```typescript
// vite.config.ts
export default defineConfig({
  assetsInclude: ['**/*.gltf'],
})
```

## Performance Issues

### 1. Slow Dev Server

**Problem:**
Dev server ช้าเกินไป

**Solution:**
```typescript
// vite.config.ts
export default defineConfig({
  optimizeDeps: {
    include: ['vue', 'vue-router'],
  },
})
```

### 2. Slow Build

**Problem:**
Build ใช้เวลานาน

**Solution:**
```typescript
// vite.config.ts
export default defineConfig({
  build: {
    minify: 'esbuild',  // Use esbuild instead of terser
  },
})
```

### 3. Memory Issues

**Problem:**
Out of memory errors

**Solution:**
```bash
# Increase Node.js memory limit
NODE_OPTIONS="--max-old-space-size=4096" bun run build
```

## TypeScript Issues

### 1. Type Errors

**Problem:**
TypeScript errors ใน Vite

**Solution:**
```typescript
// tsconfig.json
{
  "compilerOptions": {
    "strict": false,  // Temporarily disable strict mode
    "skipLibCheck": true,
  }
}
```

### 2. Module Declaration Errors

**Problem:**
Cannot find module declarations

**Solution:**
```typescript
// vite-env.d.ts
/// <reference types="vite/client" />
```

## Vue-Specific Issues

### 1. Vue SFC Not Working

**Problem:**
Vue SFC files ไม่ทำงาน

**Solution:**
```typescript
// vite.config.ts
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
})
```

### 2. JSX Not Working in Vue

**Problem:**
JSX ไม่ทำงานใน Vue

**Solution:**
```bash
bun add -D @vitejs/plugin-vue-jsx
```

```typescript
// vite.config.ts
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  plugins: [vue(), vueJsx()],
})
```

## React-Specific Issues

### 1. Fast Refresh Not Working

**Problem:**
React Fast Refresh ไม่ทำงาน

**Solution:**
```typescript
// vite.config.ts
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

### 2. JSX Not Working

**Problem:**
JSX ไม่ทำงาน

**Solution:**
```typescript
// vite.config.ts
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',  // If using Emotion
    }),
  ],
})
```

## Environment Variables Issues

### 1. Env Variables Not Loading

**Problem:**
Environment variables ไม่ถูกโหลด

**Solution:**
```bash
# Ensure .env file exists
# Variables must start with VITE_
VITE_API_URL=https://api.example.com
```

```typescript
// Access correctly
const apiUrl = import.meta.env.VITE_API_URL
```

### 2. Type Safety for Env Variables

**Problem:**
ไม่มี type safety สำหรับ env variables

**Solution:**
```typescript
// src/env.d.ts
interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_APP_TITLE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
```

## Plugin Issues

### 1. Plugin Not Working

**Problem:**
Plugin ไม่ทำงาน

**Solution:**
```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import pluginName from 'vite-plugin-name'

export default defineConfig({
  plugins: [
    pluginName(),  // Ensure plugin is called as function
  ],
})
```

### 2. Plugin Conflicts

**Problem:**
Plugins ขัดแย้งกัน

**Solution:**
```typescript
// vite.config.ts
export default defineConfig({
  plugins: [
    plugin1(),
    plugin2(),  // Order matters
  ],
})
```

## Debugging Tips

### 1. Enable Debug Mode

```bash
DEBUG=vite:* bun run dev
```

### 2. Check Vite Version

```bash
bunx vite --version
```

### 3. Clear Cache

```bash
rm -rf node_modules/.vite
```

### 4. Check Network Tab

Inspect network requests ใน browser dev tools

### 5. Use Vite Inspector

```bash
bun add -D vite-plugin-inspect
```

```typescript
// vite.config.ts
import Inspect from 'vite-plugin-inspect'

export default defineConfig({
  plugins: [
    Inspect(),
  ],
})
```

## Getting Help

### 1. Official Documentation

https://vitejs.dev/guide/

### 2. GitHub Issues

https://github.com/vitejs/vite/issues

### 3. Discord Community

https://chat.vitejs.dev/

### 4. Stack Overflow

Tag questions with `vitejs`

## Common Error Messages

| Error | Cause | Solution |
|-------|-------|----------|
| `Cannot find module` | Module resolution issue | Check path aliases |
| `Port already in use` | Port conflict | Change port or kill process |
| `HMR not working` | File system issue | Enable polling |
| `Build failed` | Dependency issue | Clear cache, reinstall |
| `CORS error` | API call blocked | Configure proxy |
| `Type error` | TypeScript config issue | Check tsconfig.json |
