# ระบบ Module

## ภาพรวม

Nuxt modules เป็นฟังก์ชันที่ขยายฟังก์ชันหลักของ Nuxt สามารถเพิ่ม configuration, plugins, middleware, routes และอื่นๆ

## การใช้งาน Modules

### ติดตั้ง Module

```bash
bun install <module-name>
```

### ตั้งค่า Module

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxt/image'
  ]
})
```

### ตัวเลือกของ Module

```typescript
export default defineNuxtConfig({
  modules: [
    ['@pinia/nuxt', {
      storesDirs: ['./stores/**']
    }],
    ['@nuxtjs/tailwindcss', {
      cssPath: '~/assets/css/tailwind.css'
    }]
  ]
})
```

## Modules ยอดนิยม

### @pinia/nuxt

จัดการ state ด้วย Pinia:

```typescript
export default defineNuxtConfig({
  modules: ['@pinia/nuxt']
})
```

### @nuxtjs/tailwindcss

การเชื่อมต่อ Tailwind CSS:

```typescript
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss']
})
```

### @nuxt/image

การปรับแต่งรูปภาพ:

```typescript
export default defineNuxtConfig({
  modules: ['@nuxt/image'],
  image: {
    domains: ['example.com']
  }
})
```

### @nuxt/content

CMS แบบ file-based:

```typescript
export default defineNuxtConfig({
  modules: ['@nuxt/content']
})
```

### @nuxtjs/i18n

การรองรับหลายภาษา:

```typescript
export default defineNuxtConfig({
  modules: ['@nuxtjs/i18n'],
  i18n: {
    locales: ['en', 'th'],
    defaultLocale: 'en'
  }
})
```

### @nuxtjs/color-mode

รองรับ dark mode:

```typescript
export default defineNuxtConfig({
  modules: ['@nuxtjs/color-mode'],
  colorMode: {
    preference: 'system'
  }
})
```

## การสร้าง Module

### Module พื้นฐาน

```typescript
// modules/my-module.ts
import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'my-module',
    configKey: 'myModule'
  },
  setup(options, nuxt) {
    console.log('My module is running!')
  }
})
```

### Module แบบ Local

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    './modules/my-module.ts'
  ]
})
```

### Module ที่มีการตั้งค่า

```typescript
import { defineNuxtModule, createResolver } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'my-module',
    configKey: 'myModule'
  },
  defaults: {
    enabled: true,
    apiKey: ''
  },
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)
    
    if (options.enabled) {
      console.log('Module enabled with API key:', options.apiKey)
    }
  }
})
```

## Hooks ของ Module

### Hooks ในช่วง Build

```typescript
export default defineNuxtModule({
  setup(options, nuxt) {
    nuxt.hook('build:before', () => {
      console.log('Build starting')
    })
    
    nuxt.hook('build:done', () => {
      console.log('Build complete')
    })
  }
})
```

### Hooks ในช่วง Runtime

```typescript
export default defineNuxtModule({
  setup(options, nuxt) {
    nuxt.hook('app:rendered', (context) => {
      console.log('App rendered')
    })
  }
})
```

## ความสามารถของ Module

### เพิ่ม Plugins

```typescript
export default defineNuxtModule({
  setup(options, nuxt) {
    nuxt.hook('pages:extend', (pages) => {
      pages.push({
        name: 'custom-page',
        path: '/custom',
        file: resolver.resolve('./runtime/page.vue')
      })
    })
  }
})
```

### เพิ่ม Components

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

### เพิ่ม Composables

```typescript
export default defineNuxtModule({
  setup(options, nuxt) {
    nuxt.hook('imports:dirs', (dirs) => {
      dirs.push(resolver.resolve('./runtime/composables'))
    })
  }
})
```

### เพิ่ม Middleware

```typescript
export default defineNuxtModule({
  setup(options, nuxt) {
    nuxt.hook('app:rendered', (context) => {
      nuxt.options.app.middleware.push('auth')
    })
  }
})
```

### ขยาย Configuration

```typescript
export default defineNuxtModule({
  setup(options, nuxt) {
    nuxt.hook('config:resolved', (config) => {
      config.app.head.title = 'Custom Title'
    })
  }
})
```

## Templates ของ Module

### การใช้ Templates

```typescript
import { addTemplate } from '@nuxt/kit'

export default defineNuxtModule({
  setup(options, nuxt) {
    addTemplate({
      filename: 'my-module-config.mjs',
      getContents: () => `export const config = ${JSON.stringify(options)}`
    })
  }
})
```

## การทดสอบ Module

### ทดสอบ Module

```typescript
import { describe, it, expect } from 'vitest'
import { setup, $fetch, createPage } from '@nuxt/test-utils'

await setup({
  modules: ['./modules/my-module.ts']
})

describe('My Module', () => {
  it('renders correctly', async () => {
    const html = await $fetch('/')
    expect(html).toContain('Hello')
  })
})
```

## การเผยแพร่ Module

### โครงสร้าง Package

```
my-nuxt-module/
├── src/
│   ├── module.ts
│   └── runtime/
├── playground/
├── test/
├── package.json
├── README.md
└── LICENSE
```

### package.json

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

## แนวทางปฏิบัติที่ดี

- ใช้ TypeScript เพื่อ type safety
- ให้ตัวเลือกการตั้งค่าที่ชัดเจนพร้อมค่าเริ่มต้น
- บันทึกตัวเลือกและ hooks ทั้งหมด
- ใส่ตัวอย่างใน README
- ทดสอบกับ Nuxt versions ต่างๆ
- ใช้ utilities จาก `@nuxt/kit`
- จัดการ errors อย่างเหมาะสม
- รองรับทั้ง SSR และ SPA
- ให้ TypeScript types สำหรับ runtime
