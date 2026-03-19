---
title: Config - Path Aliases
description: การตั้งค่า path aliases สำหรับ imports ใน Vite
---

# Path Aliases Configuration

## ตั้งค่า Path Aliases พื้นฐาน

```typescript
import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@utils': path.resolve(__dirname, './src/utils'),
    }
  }
})
```

อย่าลืมเพิ่มใน `tsconfig.json` ด้วย:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"],
      "@components/*": ["./src/components/*"],
      "@utils/*": ["./src/utils/*"]
    }
  }
}
```

---

## ใช้ vite-tsconfig-paths Plugin

```typescript
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths()]
})
```

Plugin นี้จะอ่าน paths จาก `tsconfig.json` โดยอัตโนมัติ

---

## Subpath Imports (package.json)

```json
{
  "imports": {
    "#*": "./src/*.ts",
    "#components/*": "./src/components/*.vue",
    "#utils/*": "./src/utils/*.ts"
  }
}
```

ใช้ในโค้ด:

```typescript
import Component from '#components/MyComponent'
import { helper } from '#utils/helpers'
```

---

## Multiple Alias Categories

```typescript
import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@assets', replacement: path.resolve(__dirname, 'src/assets') },
      { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
      { find: '@composables', replacement: path.resolve(__dirname, 'src/composables') },
      { find: '@stores', replacement: path.resolve(__dirname, 'src/stores') },
      { find: '@views', replacement: path.resolve(__dirname, 'src/views') },
      { find: /^@ui\/(.+)$/, replacement: path.resolve(__dirname, 'src/ui/$1') }
    ]
  }
})
```
