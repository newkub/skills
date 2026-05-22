# API Reference

## Overview

API references สำหรับ Nuxt core APIs

## Composables

### useAsyncData()

Fetch data ใน SSR/SSG:

```ts
const { data, error, refresh } = await useAsyncData('/api/users')
```

### useFetch()

Fetch data ด้วย caching:

```ts
const { data, error, refresh } = await useFetch('/api/users')
```

### useRoute()

Access current route:

```ts
const route = useRoute()
const id = route.params.id
```

### useRouter()

Router instance:

```ts
const router = useRouter()
router.push('/about')
```

### useHead()

Set page metadata:

```ts
useHead({
  title: 'My Page',
  meta: [
    { name: 'description', content: 'My description' }
  ]
})
```

### useRuntimeConfig()

Access runtime config:

```ts
const config = useRuntimeConfig()
const apiBase = config.public.apiBase
```

### useNuxtApp()

Access Nuxt app instance:

```ts
const nuxtApp = useNuxtApp()
```

## Configuration

### defineNuxtConfig()

Define Nuxt configuration:

```ts
export default defineNuxtConfig({
  modules: [],
  app: {},
  runtimeConfig: {}
})
```

### definePageMeta()

Define page metadata:

```ts
definePageMeta({
  layout: 'custom',
  middleware: ['auth']
})
```

### defineNuxtRouteMiddleware()

Define route middleware:

```ts
export default defineNuxtRouteMiddleware((to, from) => {
  // middleware logic
})
```

## Server API

### Server Routes

Create server routes in `server/api/`:

```ts
// server/api/hello.ts
export default defineEventHandler((event) => {
  return { message: 'Hello' }
})
```

### Server Middleware

Create server middleware in `server/middleware/`:

```ts
// server/middleware/auth.ts
export default defineEventHandler((event) => {
  // middleware logic
})
```

## References

- [Composables API](https://nuxt.com/docs/api/composables)
- [Nuxt Config API](https://nuxt.com/docs/api/nuxt-config)
