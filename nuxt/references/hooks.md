# ระบบ Hooks

## ภาพรวม

Nuxt hooks ช่วยให้คุณสามารถขยายและปรับแต่งเฟรมเวิร์กได้ในจุดเวลาเฉพาะระหว่างการ build และ runtime lifecycle

## Hooks ในช่วง Build

### app:resolve

ถูกเรียกเมื่อทำการ resolve configuration ของ Nuxt app:

```typescript
export default defineNuxtPlugin((nuxt) => {
  nuxt.hook('app:resolve', (app) => {
    console.log('App resolved:', app)
  })
})
```

### modules:before

ถูกเรียกก่อนที่จะติดตั้ง modules:

```typescript
export default defineNuxtModule({
  setup(options, nuxt) {
    nuxt.hook('modules:before', () => {
      console.log('Before modules install')
    })
  }
})
```

### modules:done

ถูกเรียกหลังจากติดตั้ง modules ทั้งหมดแล้ว:

```typescript
export default defineNuxtModule({
  setup(options, nuxt) {
    nuxt.hook('modules:done', () => {
      console.log('All modules installed')
    })
  }
})
```

### config:resolved

ถูกเรียกหลังจาก resolve configuration แล้ว:

```typescript
export default defineNuxtModule({
  setup(options, nuxt) {
    nuxt.hook('config:resolved', (config) => {
      console.log('Config resolved:', config)
    })
  }
})
```

### build:before

ถูกเรียกก่อนเริ่ม build:

```typescript
export default defineNuxtModule({
  setup(options, nuxt) {
    nuxt.hook('build:before', () => {
      console.log('Build starting')
    })
  }
})
```

### build:done

ถูกเรียกหลังจาก build เสร็จสิ้น:

```typescript
export default defineNuxtModule({
  setup(options, nuxt) {
    nuxt.hook('build:done', () => {
      console.log('Build complete')
    })
  }
})
```

### generate:before

ถูกเรียกก่อน static generation:

```typescript
export default defineNuxtModule({
  setup(options, nuxt) {
    nuxt.hook('generate:before', () => {
      console.log('Generation starting')
    })
  }
})
```

### generate:done

ถูกเรียกหลังจาก static generation:

```typescript
export default defineNuxtModule({
  setup(options, nuxt) {
    nuxt.hook('generate:done', () => {
      console.log('Generation complete')
    })
  }
})
```

### pages:extend

ถูกเรียกเพื่อขยาย pages:

```typescript
export default defineNuxtModule({
  setup(options, nuxt) {
    nuxt.hook('pages:extend', (pages) => {
      pages.push({
        name: 'custom',
        path: '/custom',
        file: '~/pages/custom.vue'
      })
    })
  }
})
```

### components:extend

ถูกเรียกเพื่อขยาย components:

```typescript
export default defineNuxtModule({
  setup(options, nuxt) {
    nuxt.hook('components:extend', (components) => {
      components.add({
        name: 'MyComponent',
        filePath: '~/components/MyComponent.vue'
      })
    })
  }
})
```

### imports:extend

ถูกเรียกเพื่อขยาย auto-imports:

```typescript
export default defineNuxtModule({
  setup(options, nuxt) {
    nuxt.hook('imports:extend', (imports) => {
      imports.push({
        name: 'myUtil',
        from: '~/utils/myUtil'
      })
    })
  }
})
```

## Hooks ในช่วง Runtime

### app:rendered

ถูกเรียกหลังจาก SSR rendering:

```typescript
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:rendered', (context) => {
    console.log('App rendered on server')
  })
})
```

### app:mounted

ถูกเรียกหลังจาก mount ที่ฝั่ง client:

```typescript
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:mounted', () => {
    console.log('App mounted on client')
  })
})
```

### page:start

ถูกเรียกก่อน page navigation:

```typescript
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('page:start', () => {
    console.log('Page navigation starting')
  })
})
```

### page:finish

ถูกเรียกหลังจาก page navigation:

```typescript
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('page:finish', () => {
    console.log('Page navigation finished')
  })
})
```

### vue:setup

ถูกเรียกก่อน Vue component setup:

```typescript
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('vue:setup', (context) => {
    console.log('Component setup:', context.component)
  })
})
```

### vue:error

ถูกเรียกเมื่อเกิด Vue error:

```typescript
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('vue:error', (error, instance, info) => {
    console.error('Vue error:', error)
  })
})
```

## Hooks สำหรับ Plugin

### plugin:registered

ถูกเรียกเมื่อมีการ register plugin:

```typescript
export default defineNuxtModule({
  setup(options, nuxt) {
    nuxt.hook('plugin:registered', (plugin) => {
      console.log('Plugin registered:', plugin.name)
    })
  }
})
```

## Hooks สำหรับ Vite

### vite:extendConfig

ถูกเรียกเพื่อขยาย Vite configuration:

```typescript
export default defineNuxtModule({
  setup(options, nuxt) {
    nuxt.hook('vite:extendConfig', (config) => {
      config.resolve.alias['@'] = nuxt.options.srcDir
    })
  }
})
```

### vite:extend

ถูกเรียกเพื่อขยาย Vite instance:

```typescript
export default defineNuxtModule({
  setup(options, nuxt) {
    nuxt.hook('vite:extend', (vite) => {
      vite.config.plugins.push(myPlugin)
    })
  }
})
```

## Hooks สำหรับ Nitro

### nitro:config

ถูกเรียกเพื่อขยาย Nitro configuration:

```typescript
export default defineNuxtModule({
  setup(options, nuxt) {
    nuxt.hook('nitro:config', (config) => {
      config.routeRules = {
        '/api/**': { cors: true }
      }
    })
  }
})
```

### nitro:init

ถูกเรียกเมื่อ Nitro ถูก initialize:

```typescript
export default defineNuxtModule({
  setup(options, nuxt) {
    nuxt.hook('nitro:init', (nitro) => {
      console.log('Nitro initialized')
    })
  }
})
```

## Hooks สำหรับ Schema

### schema:extend

ถูกเรียกเพื่อขยาย configuration schema:

```typescript
export default defineNuxtModule({
  setup(options, nuxt) {
    nuxt.hook('schema:extend', (schema) => {
      schema.myModule = {
        $schema: 'https://json-schema.org/draft/2020-12/schema',
        type: 'object',
        properties: {
          enabled: { type: 'boolean' }
        }
      }
    })
  }
})
```

## Hooks สำหรับ Kit

### kit:compatibility

ถูกเรียกเพื่อตรวจสอบความเข้ากันได้ของ module:

```typescript
export default defineNuxtModule({
  setup(options, nuxt) {
    nuxt.hook('kit:compatibility', (compatibility) => {
      compatibility.add({
        name: 'my-module',
        version: '>=3.0.0'
      })
    })
  }
})
```

## ลำดับการทำงานของ Hooks

```
1. app:resolve
2. modules:before
3. config:resolved
4. modules:done
5. app:generated
6. build:before
7. build:done
8. generate:before (if SSG)
9. generate:done (if SSG)
```

## แนวทางปฏิบัติที่ดี

- ใช้ hooks สำหรับ cross-cutting concerns
- ล้าง hooks เมื่อไม่ต้องการใช้แล้ว
- ใช้ TypeScript เพื่อ type safety
- บันทึกการใช้ hooks
- ทดสอบการทำงานของ hooks
- หลีกเลี่ยงการทำงานหนักๆ ใน hooks
- ใช้ hook ที่เหมาะสมกับงานนั้นๆ
