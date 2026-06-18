---
description: Optimize Vue 3 application performance
---

## Goal

ปรับปรุง performance ของ Vue 3 application

## Execute

### 1. Use v-once for Static Content

```vue
<template>
  <div v-once>
    <h1>{{ staticTitle }}</h1>
    <p>{{ staticDescription }}</p>
  </div>
</template>
```

### 2. Lazy Load Components

```typescript
const LazyComponent = defineAsyncComponent(() =>
  import('./components/HeavyComponent.vue')
)
```

### 3. Use v-memo for List Rendering

```vue
<template>
  <div v-for="item in items" :key="item.id" v-memo="[item.id, item.selected]">
    {{ item.name }}
  </div>
</template>
```

### 4. Optimize Computed Properties

```typescript
// Good - cached
const expensive = computed(() => heavyCalculation(data.value))

// Avoid - computed in template
<div>{{ heavyCalculation(data) }}</div>
```

### 5. Use shallowRef for Large Objects

```typescript
import { shallowRef } from 'vue'

const largeData = shallowRef({ /* large object */ })
```

### 6. Debounce Watchers

```typescript
import { watch, debounce } from 'lodash-es'

watch(
  searchQuery,
  debounce((newValue) => {
    performSearch(newValue)
  }, 300)
)
```

### 7. Use Virtual Scrolling for Large Lists

```bash
bun add vue-virtual-scroller
```

```vue
<template>
  <RecycleScroller
    :items="largeList"
    :item-size="50"
    key-field="id"
  >
    <template #default="{ item }">
      <div>{{ item.name }}</div>
    </template>
  </RecycleScroller>
</template>
```

### 8. Optimize Images

```vue
<template>
  <!-- Lazy loading -->
  <img v-lazy="imageUrl" alt="Description" />

  <!-- Responsive -->
  <picture>
    <source :srcset="imageUrlWebp" type="image/webp" />
    <img :src="imageUrl" alt="Description" />
  </picture>
</template>
```

### 9. Use deferredComputed for Heavy Computations

```typescript
import { deferredComputed } from 'vue'

const expensive = deferredComputed(() => {
  return heavyCalculation(data.value)
})
```

### 10. Enable Tree Shaking

ตรวจสอบ `vite.config.ts`:

```typescript
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vue-vendor': ['vue', 'vue-router', 'pinia']
        }
      }
    }
  }
})
```

### 11. Use Vapor Mode (Vue 3.6+)

```vue
<script setup lang="ts" vapor>
const count = ref(0)
</script>
```

## Best Practices

- ใช้ `v-once` สำหรับ static content
- Lazy load components ที่ heavy
- ใช้ `v-memo` สำหรับ list rendering
- ใช้ computed แทน methods ใน template
- ใช้ shallowRef สำหรับ large objects
- Debounce watchers และ events
- ใช้ virtual scrolling สำหรับ large lists
- Optimize images ด้วย lazy loading
- Enable tree shaking ใน build config
- ใช้ Vapor Mode สำหรับ production optimization

## Expected Outcome

- Faster initial load
- Smaller bundle size
- Better runtime performance
- Optimized re-renders
