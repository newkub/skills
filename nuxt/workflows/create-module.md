# Create Module

## Goal

สร้าง Nuxt module ใหม่ด้วย @nuxt/kit ตาม best practices

## Scope

ใช้สำหรับสร้าง Nuxt modules ที่ extend Nuxt functionality

## Execute

### 1. Initialize Module

สร้าง module structure:

```bash
mkdir my-nuxt-module
cd my-nuxt-module
bun init -y
```

### 2. Install Dependencies

```bash
bun install @nuxt/kit @nuxt/schema
bun install -D typescript @types/node
```

### 3. Create Module File

สร้าง `src/module.ts`:

```typescript
import { defineNuxtModule, createResolver } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'my-module',
    configKey: 'myModule'
  },
  defaults: {
    enabled: true
  },
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)
    
    console.log('My module running with options:', options)
  }
})
```

### 4. Configure TypeScript

สร้าง `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  }
}
```

### 5. Configure Package

อัปเดต `package.json`:

```json
{
  "name": "my-nuxt-module",
  "version": "1.0.0",
  "type": "module",
  "exports": {
    ".": {
      "types": "./dist/module.d.ts",
      "import": "./dist/module.mjs"
    }
  },
  "keywords": ["nuxt", "module"],
  "peerDependencies": {
    "nuxt": "^3.0.0"
  }
}
```

### 6. Add Build Script

อัปเดต scripts ใน `package.json`:

```json
{
  "scripts": {
    "dev": "nuxi dev playground",
    "build": "nuxt-module-build",
    "prepack": "nuxt-module-build"
  }
}
```

### 7. Create Playground

สร้าง `playground/nuxt.config.ts`:

```typescript
export default defineNuxtConfig({
  modules: ['../src/module.ts']
})
```

### 8. Test Module

```bash
bun run dev
```

### 9. Add Module Features

#### Add Plugin

```typescript
export default defineNuxtModule({
  setup(options, nuxt) {
    nuxt.hook('app:rendered', () => {
      console.log('App rendered')
    })
  }
})
```

#### Add Components

```typescript
export default defineNuxtModule({
  setup(options, nuxt) {
    nuxt.hook('components:dirs', (dirs) => {
      dirs.push({
        path: resolver.resolve('./runtime/components')
      })
    })
  }
})
```

#### Add Composables

```typescript
export default defineNuxtModule({
  setup(options, nuxt) {
    nuxt.hook('imports:dirs', (dirs) => {
      dirs.push(resolver.resolve('./runtime/composables'))
    })
  }
})
```

### 10. Publish Module

```bash
bun run build
bun publish
```

## Rules

- ใช้ TypeScript สำหรับ type safety
- ใช้ @nuxt/kit utilities
- ให้ default options ที่ reasonable
- Document ทุก options และ hooks
- Test ใน playground
- Support SSR และ SPA
- Provide runtime TypeScript types

## Expected Outcome

- Nuxt module ที่ใช้งานได้
- TypeScript support
- Documentation ครบถ้วน
- Published ไปยัง bun
