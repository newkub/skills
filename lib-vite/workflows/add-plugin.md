# Add Plugin

## Goal

เพิ่ม Vite plugin ให้กับโปรเจกต์

## Scope

ติดตั้งและ configure Vite plugins

## Steps

### 1. Install Plugin

```bash
bun add -D vite-plugin-name
```

### 2. Configure Plugin

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import pluginName from 'vite-plugin-name'

export default defineConfig({
  plugins: [
    pluginName(),
  ],
})
```

### 3. Configure Plugin Options

```typescript
// vite.config.ts
export default defineConfig({
  plugins: [
    pluginName({
      // Plugin options here
    }),
  ],
})
```

## Common Plugins

### Vue Plugin

```bash
bun add -D @vitejs/plugin-vue
```

```typescript
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
})
```

### React Plugin

```bash
bun add -D @vitejs/plugin-react
```

```typescript
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

### Compression Plugin

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

## Verification

```bash
bun run dev
```
