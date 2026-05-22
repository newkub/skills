# Routing

## Overview

Nuxt ใช้ file-based routing ที่ generate routes อัตโนมัติจาก file structure ใน `pages/`

## File-Based Routing

### Basic Pages

```
pages/
├── index.vue          → /
├── about.vue          → /about
└── contact.vue        → /contact
```

### Dynamic Routes

```
pages/
├── users/
│   └── [id].vue      → /users/:id
└── blog/
    └── [slug].vue    → /blog/:slug
```

### Nested Routes

```
pages/
├── parent/
│   ├── child.vue    → /parent/child
│   └── index.vue    → /parent
└── parent.vue       → /parent
```

## Route Parameters

### Access Parameters

```vue
<script setup lang="ts">
const route = useRoute()
const id = route.params.id
</script>

<template>
  <div>User ID: {{ id }}</div>
</template>
```

### Navigate Programmatically

```vue
<script setup lang="ts">
const router = useRouter()

function navigate() {
  router.push('/about')
}
</script>

<template>
  <button @click="navigate">Go to About</button>
</template>
```

## Layouts

### Default Layout

```vue
<!-- layouts/default.vue -->
<template>
  <div>
    <nav>Navigation</nav>
    <slot />
  </div>
</template>
```

### Custom Layout

```vue
<script setup lang="ts">
definePageMeta({
  layout: 'custom'
})
</script>

<template>
  <div>Page with custom layout</div>
</template>
```

## Middleware

### Route Middleware

```ts
// middleware/auth.ts
export default defineNuxtRouteMiddleware((to, from) => {
  const isAuthenticated = useAuth()
  if (!isAuthenticated.value) {
    return navigateTo('/login')
  }
})
```

### Apply Middleware

```vue
<script setup lang="ts">
definePageMeta({
  middleware: ['auth']
})
</script>
```

## Best Practices

1. **Use File Structure**: ใช้ file structure เพื่อ define routes
2. **Layouts**: ใช้ layouts สำหรับ shared UI
3. **Middleware**: ใช้ middleware สำหรับ route guards
4. **Navigation**: ใช้ router.push() สำหรับ programmatic navigation
5. **SEO**: ใช้ useHead() สำหรับ SEO metadata

## References

- [Routing Documentation](https://nuxt.com/docs/guide/directory-structure/pages)
- [Route Middleware](https://nuxt.com/docs/guide/directory-structure/middleware)
