---
trigger: always_on
description: สร้างและพัฒนา Nuxt Module ตาม best practices
condition: |
  ใช้เมื่อต้องการสร้าง Nuxt Module ใหม่
  ใช้เมื่อต้องการพัฒนาหรือ refactor Nuxt Module ที่มีอยู่
---

## 1. Project Structure (โครงสร้างโปรเจกต์)

- **Standard Layout**: จัดโครงสร้างโปรเจกต์ตามมาตรฐาน เพื่อแยกส่วนของ module logic และ runtime code อย่างชัดเจน
````tree
.
├── docs/
├── examples/
├── src/
│   ├── module.ts     # Module definition
│   └── runtime/      # Code available in user's project
│       ├── components/
│       ├── composables/
│       └── plugins/
├── package.json
├── tsconfig.json
└── build.config.ts # Build configuration
````

---

## 2. Core Implementation (`src/module.ts`)

- **`defineNuxtModule`**: ใช้ `defineNuxtModule` จาก `@nuxt/kit` เป็นจุดเริ่มต้นในการสร้าง module
- **`meta`**: กำหนด `name` และ `configKey` สำหรับ module ของคุณ
- **`defaults`**: กำหนดค่า default สำหรับ module options
- **`setup` Function**: เป็นส่วนหลักในการ implement logic ของ module
  - **`createResolver`**: ใช้ `createResolver(import.meta.url)` เพื่อช่วยในการ resolve path ไปยัง runtime files
  - **`addPlugin`**: เพิ่ม Nuxt plugin จาก runtime directory
  - **`addImportsDir`**: Auto-import composables จาก runtime directory
  - **`addComponentsDir`**: Auto-import components จาก runtime directory

````typescript
import { defineNuxtModule, createResolver, addPlugin, addImportsDir, addComponentsDir } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'my-module',
    configKey: 'myModule'
  },
  defaults: {
    // Default options for your module
  },
  setup (options, nuxt) {
    const resolver = createResolver(import.meta.url)

    // Add runtime plugin
    addPlugin(resolver.resolve('./runtime/plugin'))

    // Add composables
    addImportsDir(resolver.resolve('./runtime/composables'))

    // Add components
    addComponentsDir({
      path: resolver.resolve('./runtime/components'),
      prefix: 'MyModule' // Optional prefix
    })
  }
})
````

---

## 3. Build & Dependencies (การ Build และ Dependencies)

- **Dependency**: ติดตั้ง `@nuxt/module-builder` เป็น dev dependency
  ````bash
  bun add -D @nuxt/module-builder
  ````
- **Build Script**: เพิ่ม build script ใน `package.json`
  ````json
  {
    "scripts": {
      "build": "nuxt-module-build"
    }
  }
  ````
- **`build.config.ts`**: สร้างไฟล์ `build.config.ts` เพื่อกำหนดค่าการ build
  ````typescript
  import { defineBuildConfig } from 'unbuild'

  export default defineBuildConfig({
    entries: ['src/module'],
    declaration: true,
    clean: true,
    rollup: {
      emitCJS: true,
    },
  })
  ````
