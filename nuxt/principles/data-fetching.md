# Data Fetching

## Overview

Follow these principles for efficient and reliable data fetching in Nuxt applications.

## Choose the Right Composable

| Composable | Use Case |
|------------|----------|
| `useFetch` | Fetch data with SSR support, automatic caching |
| `useAsyncData` | Wrap any async operation with caching |
| `useLazyFetch` | Fetch data without blocking navigation |
| `useLazyAsyncData` | Async operation without blocking |

## useFetch vs useAsyncData

```typescript
// ✅ useFetch - For HTTP requests
const { data, error } = await useFetch('/api/users')

// ✅ useAsyncData - For any async operation
const { data } = await useAsyncData('users', () => fetchUsers())
```

## Caching Strategy

Use unique keys for caching:

```typescript
// ✅ Good - Unique cache key
const { data } = await useFetch(`/api/users/${userId}`, {
  key: `user-${userId}`
})

// ❌ Bad - Non-unique cache key
const { data } = await useFetch(`/api/users/${userId}`)
```

## Error Handling

Handle errors gracefully:

```vue
<script setup lang="ts">
const { data, error, pending } = await useFetch('/api/data')

if (error.value) {
  throw createError({
    statusCode: error.value.statusCode,
    statusMessage: 'Failed to load data'
  })
}
</script>

<template>
  <div v-if="pending">Loading...</div>
  <div v-else-if="error">Error: {{ error.message }}</div>
  <div v-else>{{ data }}</div>
</template>
```

## Refresh Data

Implement refresh functionality:

```typescript
const { data, refresh } = await useFetch('/api/data')

const handleRefresh = () => {
  refresh()
}
```

## Pick Fields

Reduce payload by picking only needed fields:

```typescript
const { data } = await useFetch('/api/users', {
  pick: ['id', 'name', 'email'] // Only these fields
})
```

## Transform Data

Transform data before caching:

```typescript
const { data } = await useFetch('/api/users', {
  transform: (users) => users.map(u => ({
    id: u.id,
    fullName: `${u.firstName} ${u.lastName}`
  }))
})
```

## Lazy Loading

Don't block navigation:

```vue
<script setup lang="ts">
// ✅ Lazy - Doesn't block navigation
const { data, pending } = await useLazyFetch('/api/data')

// ❌ Eager - Blocks navigation
const { data, pending } = await useFetch('/api/data')
</script>

<template>
  <div>
    <h1>Page Title</h1>
    <div v-if="pending">Loading data...</div>
    <div v-else>{{ data }}</div>
  </div>
</template>
```

## Server vs Client

Fetch data on server when possible:

```typescript
// ✅ Server-side fetch (default)
const { data } = await useFetch('/api/data')

// Client-only fetch
const { data } = await useFetch('/api/data', {
  server: false
})
```

## Watch for Changes

React to parameter changes:

```typescript
const route = useRoute()
const { data, refresh } = await useFetch(`/api/users/${route.params.id}`)

watch(() => route.params.id, () => {
  refresh()
})
```

## Deduplication

Nuxt automatically dedupes requests with same key:

```typescript
// These won't create duplicate requests
const { data: users1 } = await useFetch('/api/users', { key: 'users' })
const { data: users2 } = await useFetch('/api/users', { key: 'users' })
```

## Nuxt 4 Data Sharing (New)

Multiple components using the same key now share data automatically:

```vue
<!-- Component A -->
<script setup>
const { data } = await useFetch('/api/users', { key: 'users' })
</script>

<!-- Component B -->
<script setup>
// Uses same data from Component A (no duplicate request)
const { data } = await useFetch('/api/users', { key: 'users' })
</script>
```

## Automatic Cleanup (Nuxt 4)

Data is automatically cleaned up when components unmount:

```vue
<script setup>
// Data automatically cleaned up when component unmounts
const { data } = await useFetch('/api/data', { key: 'data' })
</script>
```

## Reactive Keys (Nuxt 4)

Use reactive keys to refetch data when dependencies change:

```typescript
const userId = ref(1)

// Refetches when userId changes
const { data } = await useFetch(`/api/users/${userId.value}`, {
  key: computed(() => `user-${userId.value}`)
})
```

## Best Practices

- Use `useFetch` for HTTP requests
- Use `useAsyncData` for non-HTTP async operations
- Always provide unique cache keys
- Handle errors gracefully
- Use lazy loading for non-critical data
- Pick only needed fields to reduce payload
- Transform data on server when possible
- Refresh data when parameters change
