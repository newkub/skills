---
title: Library Project Template
description: Template สำหรับสร้าง JavaScript/TypeScript Library ด้วย Vite
---

# Library Project Template

## โครงสร้างโปรเจกต์

```text
my-library/
├── package.json
├── tsconfig.json
├── vite.config.ts
├── README.md
├── LICENSE
├── CHANGELOG.md
├── .gitignore
├── .npmignore
├── src/
│   ├── index.ts              # Main entry
│   ├── components/
│   │   ├── Button.ts
│   │   └── Input.ts
│   ├── composables/
│   │   └── useLibrary.ts
│   ├── styles/
│   │   └── index.css
│   └── types/
│       └── index.ts
├── dist/                     # Build output
├── __tests__/
│   ├── unit/
│   │   └── Button.spec.ts
│   └── integration/
│       └── index.spec.ts
└── examples/
    ├── basic/
    │   ├── index.html
    │   └── main.ts
    └── advanced/
        ├── index.html
        └── main.ts
```

---

## vite.config.ts

```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
      rollupTypes: true
    })
  ],
  
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'MyLibrary',
      fileName: (format) => `my-library.${format}.js`,
      formats: ['es', 'cjs', 'umd']
    },
    
    rollupOptions: {
      external: ['vue', 'vue-router'],
      output: {
        globals: {
          vue: 'Vue',
          'vue-router': 'VueRouter'
        }
      }
    },
    
    sourcemap: true,
    minify: 'terser'
  },
  
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})
```

---

## package.json

```json
{
  "name": "my-library",
  "version": "1.0.0",
  "description": "My awesome Vue library",
  "type": "module",
  "main": "./dist/my-library.cjs.js",
  "module": "./dist/my-library.es.js",
  "unpkg": "./dist/my-library.umd.js",
  "jsdelivr": "./dist/my-library.umd.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/my-library.es.js",
      "require": "./dist/my-library.cjs.js"
    },
    "./dist/style.css": "./dist/style.css"
  },
  "files": [
    "dist",
    "README.md",
    "LICENSE"
  ],
  "scripts": {
    "dev": "vite",
    "build": "vite build && bun run build:types",
    "build:types": "vue-tsc --emitDeclarationOnly",
    "build:watch": "vite build --watch",
    "preview": "vite preview",
    "test": "vitest",
    "test:coverage": "vitest --coverage",
    "lint": "eslint . --ext .vue,.ts,.tsx --fix",
    "typecheck": "vue-tsc --noEmit",
    "prepublishOnly": "bun run build"
  },
  "peerDependencies": {
    "vue": "^3.3.0"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^5.0.0",
    "vite": "^5.0.0",
    "vite-plugin-dts": "^3.0.0",
    "typescript": "^5.3.0",
    "vue": "^3.4.0",
    "vitest": "^1.0.0"
  }
}
```

---

## src/index.ts

```typescript
import type { App } from 'vue'
import Button from './components/Button.ts'
import Input from './components/Input.ts'
import { useLibrary } from './composables/useLibrary.ts'

import './styles/index.css'

export { Button, Input, useLibrary }

export interface LibraryOptions {
  componentPrefix?: string
}

export default {
  install(app: App, options: LibraryOptions = {}) {
    const prefix = options.componentPrefix || 'My'
    
    app.component(`${prefix}Button`, Button)
    app.component(`${prefix}Input`, Input)
  }
}
```

---

## คำสั่งที่ใช้บ่อย

```bash
# Development with examples
bun run dev

# Build library
bun run build

# Watch mode (rebuild on change)
bun run build:watch

# Preview build
bun run preview

# Testing
bun run test
bun run test:coverage

# Type checking
bun run typecheck

# Lint
bun run lint

# Pre-publish (runs build)
bun run prepublishOnly
```

---

## Publishing

```bash
# Version bump
npm version patch   # 1.0.0 -> 1.0.1
npm version minor   # 1.0.0 -> 1.1.0
npm version major   # 1.0.0 -> 2.0.0

# Publish to npm
npm publish

# Publish beta
npm publish --tag beta
```
