# Nuxt App Instance

## Overview

The Nuxt App instance (`NuxtApp`) is the runtime context available on both client and server. It provides access to runtime hooks, plugins, shared state, and Nuxt-specific utilities.

## Accessing NuxtApp

```typescript
const nuxtApp = useNuxtApp()
```

## NuxtApp Properties

| Property | Type | Description |
|----------|------|-------------|
| `vueApp` | `App` | Vue application instance |
| `ssrContext` | `object` | Server-side rendering context (server only) |
| `payload` | `NuxtPayload` | Serialized data from server |
| `provide` | `(key, value) => void` | Provide values to the app |
| `hook` | `(name, fn) => void` | Register runtime hooks |
| `callHook` | `(name, ...args) => Promise` | Call runtime hooks |
| `runWithContext` | `(fn) => any` | Run function with Nuxt context |

## Providing Values

Share values across your application using `provide`:

```typescript
// In a plugin
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('api', $fetch.create({
    baseURL: 'https://api.example.com'
  }))
})

// In components
const { $api } = useNuxtApp()
const data = await $api('/users')
```

## Runtime Hooks

Nuxt provides runtime hooks for extending behavior:

```typescript
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('page:start', () => {
    console.log('Page navigation started')
  })
  
  nuxtApp.hook('page:finish', () => {
    console.log('Page navigation finished')
  })
})
```

### Available Runtime Hooks

| Hook | Description |
|------|-------------|
| `app:rendered` | After SSR rendering |
| `app:mounted` | After client-side mount |
| `page:start` | Before page navigation |
| `page:finish` | After page navigation |
| `vue:setup` | Before Vue component setup |
| `vue:error` | When Vue error occurs |

## Running with Context

Execute functions with Nuxt context for proper SSR behavior:

```typescript
export default defineNuxtPlugin((nuxtApp) => {
  const doSomething = () => {
    return nuxtApp.runWithContext(() => {
      // Code runs with Nuxt context
      return useRuntimeConfig()
    })
  }
})
```

## Payload System

The payload transfers data from server to client during SSR:

```typescript
// Server-side
const nuxtApp = useNuxtApp()
nuxtApp.payload.data = { user: { name: 'John' } }

// Client-side (auto-hydrated)
const nuxtApp = useNuxtApp()
console.log(nuxtApp.payload.data.user) // { name: 'John' }
```

## SSR Context

Access server-specific context:

```typescript
export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.server) {
    const { event } = nuxtApp.ssrContext
    // Access request, response, etc.
  }
})
```

## Best Practices

- Use `provide` for shared utilities and services
- Use hooks for cross-cutting concerns (analytics, error tracking)
- Always check `import.meta.server` or `import.meta.client` for platform-specific code
- Use `runWithContext` when calling composables outside Vue setup
