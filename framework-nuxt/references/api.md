# api

## Composables

### Data Fetching

| API | Description |
|-----|-------------|
| `useFetch<T>(url, options)` | Fetch data with SSR support |
| `useAsyncData<T>(key, handler)` | Async data with caching |
| `useLazyFetch<T>(url, options)` | Lazy fetching |
| `useLazyAsyncData<T>(key, handler)` | Lazy async data |

### State Management

| API | Description |
|-----|-------------|
| `useState<T>(key, init)` | SSR-friendly shared state |
| `useCookie<T>(name, options)` | Reactive cookie |
| `useLocalStorage(key, defaultValue)` | Local storage |
| `useSessionStorage(key, defaultValue)` | Session storage |

### Routing

| API | Description |
|-----|-------------|
| `useRoute()` | Current route |
| `useRouter()` | Router instance |
| `useRouter().push(path)` | Navigate to path |
| `useRouter().back()` | Go back |
| `navigateTo(path)` | Navigate with auto-prefix |

### SEO

| API | Description |
|-----|-------------|
| `useHead(options)` | Set head tags |
| `useSeoMeta(options)` | SEO meta tags |
| `useServerSeoMeta()` | Server-side SEO |

### Lifecycle

| API | Description |
|-----|-------------|
| `useNuxtApp()` | Nuxt app instance |
| `useRuntimeConfig()` | Runtime config |
| `useNuxtData<T>(key)` | Get cached data |

## Components

| Component | Description |
|-----------|-------------|
| `<NuxtPage />` | Page component |
| `<NuxtLayout>` | Layout wrapper |
| `<NuxtLink>` | Navigation link |
| `<NuxtImg>` | Optimized image |
| `<NuxtScript>` | Script management |
| `<NuxtRouteAnnouncer>` | Route announcements |

## Auto-imported APIs

### Vue APIs

| API | Description |
|-----|-------------|
| `ref` | Reactive reference |
| `computed` | Computed property |
| `watch` | Watcher |
| `reactive` | Reactive object |
| `readonly` | Readonly wrapper |

### Nuxt APIs

| API | Description |
|-----|-------------|
| `definePageMeta` | Page metadata |
| `defineRouteRules` | Route rules |
| `callOnce` | Call once |

## Server APIs

### defineEventHandler

```typescript
export default defineEventHandler((event) => {
  return { message: 'Hello' }
})
```

### readBody

```typescript
export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  return { received: body }
})
```

### getQuery

```typescript
export default defineEventHandler((event) => {
  const query = getQuery(event)
  return { query }
})
```

### setResponseStatus

```typescript
export default defineEventHandler((event) => {
  setResponseStatus(event, 201)
  return { created: true }
})
```

## File Conventions

| Convention | Description |
|------------|-------------|
| `pages/[page].vue` | File-based routes |
| `components/[Component].vue` | Auto-imported components |
| `composables/[name].ts` | Auto-imported composables |
| `middleware/[name].ts` | Route middleware |
| `plugins/[name].ts` | Plugins |
| `server/api/[name].ts` | API routes |