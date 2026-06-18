# Best Practices

## Code Organization

| Practice | Description |
|----------|-------------|
| Use `app/` directory | Nuxt v4 ใช้ `app/` directory สำหรับ pages, components, composables |
| Use `composables/` | ใช้ composables สำหรับ reusable logic |
| Use `components/` | แบ่ง components ให้เล็กและ reusable |
| Use `layouts/` | สร้าง layouts สำหรับ shared UI |
| Keep pages clean | ใช้ components แทน logic ใน pages |

## Performance

### Lazy Load Components

```vue
<template>
  <LazyHeavyComponent v-if="show" />
</template>
```

### Use `useLazyFetch`

```typescript
const { data } = useLazyFetch('/api/users')
```

### Optimize Images

```vue
<template>
  <NuxtImg 
    src="/image.jpg" 
    width="400" 
    height="300"
    format="webp"
  />
</template>
```

## TypeScript

### Use TypeScript

```typescript
// composables/useUser.ts
export function useUser(id: string) {
  const { data } = useFetch<User>(`/api/users/${id}`)
  return { user: data }
}
```

### Define Types

```typescript
// types/index.ts
export interface User {
  id: string
  name: string
  email: string
}
```

## SEO

### Use `useHead`

```vue
<script setup lang="ts">
useHead({
  title: 'Page Title',
  meta: [
    { name: 'description', content: 'Page description' }
  ]
})
</script>
```

### Use `useSeoMeta`

```vue
<script setup lang="ts">
useSeoMeta({
  title: 'Page Title',
  ogTitle: 'Open Graph Title',
  description: 'Page description',
  ogDescription: 'OG Description'
})
</script>
```

## Error Handling

### Try-Catch with useFetch

```typescript
const { data, error } = await useFetch('/api/data')

if (error.value) {
  console.error('Fetch error:', error.value)
}
```

### Error Pages

```vue
<!-- error.vue -->
<script setup lang="ts">
const props = defineProps<{
  error: Error
}>()
</script>
```

## Security

### Use Runtime Config

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  runtimeConfig: {
    apiSecret: process.env.NUXT_API_SECRET
  }
})
```

### Sanitize Inputs

```typescript
// server/api/users.post.ts
export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  // Validate and sanitize body
  return { id: crypto.randomUUID() }
})
```

## State Management

### Use `useState` for SSR

```typescript
// composables/useCounter.ts
export const useCounter = () => useState<number>('counter', () => 0)
```

### Use Pinia for Complex State

```typescript
// stores/user.ts
export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>(null)
  return { user }
})
```

## File Structure

```text
your-app/
├── app/                # Nuxt v4 app directory
│   ├── pages/         # Routes (file-based)
│   ├── components/    # Auto-imported components
│   ├── composables/   # Auto-imported composables
│   └── layouts/       # Page layouts
├── server/            # Server routes
│   └── api/           # API routes
├── public/            # Static assets
└── nuxt.config.ts     # Configuration
```