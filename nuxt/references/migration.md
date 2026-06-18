# Migration Guide (Nuxt 2 to 3)

## Overview

Guide for migrating Nuxt 2 applications to Nuxt 3.

## Key Differences

### Vue Version

- **Nuxt 2**: Vue 2
- **Nuxt 3**: Vue 3 (Composition API, better performance)

### Configuration

- **Nuxt 2**: CommonJS, `module.exports`
- **Nuxt 3**: ESM, `defineNuxtConfig`

### Directory Structure

| Nuxt 2 | Nuxt 3 |
|--------|--------|
| `static/` | `public/` |
| `_id.vue` | `[id].vue` |
| `store/index.js` | `store/index.ts` |

## Migration Steps

### 1. Update Dependencies

```bash
# Remove Nuxt 2
bun uninstall nuxt

# Install Nuxt 3
bun install nuxt@latest
```

### 2. Update Configuration

**Nuxt 2:**
```javascript
module.exports = {
  mode: 'spa',
  srcDir: 'src/'
}
```

**Nuxt 3:**
```typescript
export default defineNuxtConfig({
  ssr: false,
  srcDir: 'src/'
})
```

### 3. Update Directory Structure

```bash
# Rename static to public
mv static public

# Update dynamic routes
mv pages/_id.vue pages/[id].vue
```

### 4. Update Plugins

**Nuxt 2:**
```javascript
export default ({ app }, inject) => {
  inject('myUtil', () => 'Hello')
}
```

**Nuxt 3:**
```typescript
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('myUtil', () => 'Hello')
})
```

### 5. Update Middleware

**Nuxt 2:**
```javascript
export default ({ route, redirect }) => {
  if (!auth) redirect('/login')
}
```

**Nuxt 3:**
```typescript
export default defineNuxtRouteMiddleware((to, from) => {
  if (!auth) return navigateTo('/login')
})
```

### 6. Update Components

**Nuxt 2:**
```vue
<script>
export default {
  asyncData({ $axios }) {
    return { users: await $axios.$get('/users') }
  }
}
</script>
```

**Nuxt 3:**
```vue
<script setup lang="ts">
const { data: users } = await useFetch('/api/users')
</script>
```

### 7. Update Layouts

**Nuxt 2:**
```vue
<template>
  <div>
    <Nuxt />
  </div>
</template>
```

**Nuxt 3:**
```vue
<template>
  <div>
    <slot />
  </div>
</template>
```

### 8. Update Page Metadata

**Nuxt 2:**
```javascript
export default {
  layout: 'admin',
  middleware: 'auth'
}
```

**Nuxt 3:**
```vue
<script setup lang="ts">
definePageMeta({
  layout: 'admin',
  middleware: ['auth']
})
</script>
```

### 9. Update State Management

**Nuxt 2 (Vuex):**
```javascript
export const state = () => ({
  count: 0
})
```

**Nuxt 3 (Pinia):**
```typescript
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  return { count }
})
```

### 10. Update Composables

**Nuxt 2:**
```javascript
export default ({ app }) => {
  return {
    myMethod() {
      return 'Hello'
    }
  }
}
```

**Nuxt 3:**
```typescript
export const useMyComposable = () => {
  const myMethod = () => 'Hello'
  return { myMethod }
}
```

## Breaking Changes

### Removed Features

- `asyncData` - Use `useAsyncData` or `useFetch`
- `fetch` - Use `useFetch` or `useLazyFetch`
- `watchQuery` - Use Vue `watch`
- `layout` component option - Use `definePageMeta`
- `middleware` component option - Use `definePageMeta`
- `scrollToTop` - Use `scrollTo` from `vue-router`
- `transition` component option - Use `definePageMeta`
- `loading` - Use custom loading component

### Changed APIs

| Nuxt 2 | Nuxt 3 |
|--------|--------|
| `this.$nuxt` | `useNuxtApp()` |
| `this.$route` | `useRoute()` |
| `this.$router` | `useRouter()` |
| `context.app` | `nuxtApp` |
| `context.route` | `useRoute()` |

## Auto-Migration Tool

Use Nuxt Bridge for gradual migration:

```bash
bun install @nuxt/bridge@next
```

Update `nuxt.config.ts`:
```typescript
export default defineNuxtConfig({
  bridge: true
})
```

## Common Issues

### TypeScript Errors

Ensure `tsconfig.json` includes Nuxt types:
```json
{
  "extends": "./.nuxt/tsconfig.json"
}
```

### Module Compatibility

Check if modules have Nuxt 3 versions:
- `@nuxtjs/axios` → Use `$fetch` or native fetch
- `@nuxtjs/auth` → Use `@sidebase/nuxt-auth`
- `@nuxtjs/i18n` → Use `@nuxtjs/i18n` v8+

### Build Errors

Clear cache and rebuild:
```bash
rm -rf .nuxt node_modules
bun install
bun run dev
```

## Checklist

- [ ] Update dependencies to Nuxt 3
- [ ] Convert configuration to ESM
- [ ] Rename `static/` to `public/`
- [ ] Update dynamic routes syntax
- [ ] Convert plugins to new format
- [ ] Update middleware
- [ ] Replace `asyncData` with `useFetch`
- [ ] Update layouts to use `<slot />`
- [ ] Convert to Composition API
- [ ] Migrate Vuex to Pinia
- [ ] Update composables
- [ ] Test all pages and components
- [ ] Update deployment configuration

## Resources

- [Nuxt 3 Documentation](https://nuxt.com)
- [Migration Guide](https://nuxt.com/docs/migration/overview)
- [Nuxt Bridge](https://nuxt.com/docs/bridge/overview)
