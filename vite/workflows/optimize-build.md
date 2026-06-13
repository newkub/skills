# Optimize Build

## Goal

ปรับปรุง performance ของ production build

## Scope

Configure build optimization สำหรับ Vite

## Steps

### 1. Enable Code Splitting

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

### 2. Configure Minification

```typescript
// vite.config.ts
export default defineConfig({
  build: {
    minify: 'esbuild',  // or 'terser'
  },
})
```

### 3. Enable Compression

```bash
bun add -D vite-plugin-compression
```

```typescript
import viteCompression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    viteCompression(),
  ],
})
```

### 4. Configure Asset Optimization

```typescript
// vite.config.ts
export default defineConfig({
  build: {
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },
  },
})
```

### 5. Analyze Bundle Size

```bash
bun add -D rollup-plugin-visualizer
```

```typescript
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  plugins: [
    visualizer({ open: true }),
  ],
})
```

## Verification

```bash
bun run build
```

ตรวจสอบ bundle size และ build time
