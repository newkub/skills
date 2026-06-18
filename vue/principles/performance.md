# Performance Optimization

## Overview

Vue 3 มี performance improvements หลายอย่างเช่น faster parser, improved reactivity system Vue 3.5+ มีการ refactor ของ reactivity system ที่ลด memory usage 56% และเร็วขึ้น 10x สำหรับ array tracking

## Vue 3.5+ Performance Improvements

### Reactivity System Optimizations

- **-56% memory usage**: Refactored reactivity system ด้วย version counting และ doubly-linked list tracking
- **10x faster array tracking**: Optimizations สำหรับ large, deeply reactive arrays
- **Resolved stale computed values**: แก้ปัญหา memory issues จาก hanging computeds ระหว่าง SSR

### deferredComputed

ใช้สำหรับ heavy computations ที่ไม่ต้องการ immediate updates

```typescript
import { ref, deferredComputed } from 'vue'

const count = ref(0)
const expensive = deferredComputed(() => {
  // Heavy computation จะถูก defer
  return heavyCalculation(count.value)
})
```

### Lazy Hydration (SSR)

Control when async components hydrate สำหรับ SSR performance

```typescript
import { defineAsyncComponent, hydrateOnVisible } from 'vue'

const AsyncComp = defineAsyncComponent({
  loader: () => import('./Comp.vue'),
  hydrate: hydrateOnVisible() // Hydrate only when visible
})
```

### data-allow-mismatch

Suppress hydration mismatch warnings สำหรับ values ที่ inevitable different

```vue
<template>
  <span data-allow-mismatch>{{ data.toLocaleString() }}</span>
  <!-- Limit to specific types -->
  <span data-allow-mismatch="text">{{ text }}</span>
</template>
```

## Reactivity Optimization

### shallowRef vs ref

ใช้ `shallowRef` สำหรับ large objects เพื่อ avoid deep reactivity

```typescript
import { shallowRef } from 'vue'

const largeData = shallowRef<LargeObject>({ /* ... */ })
// Only triggers reactivity when .value is replaced, not when nested properties change
```

### computed Caching

ใช้ `computed` สำหรับ derived state - Vue caches results automatically

```typescript
const expensiveValue = computed(() => {
  // Only re-computes when dependencies change
  return heavyCalculation(source.value)
})
```

## Component Optimization

### Lazy Loading

ใช้ `defineAsyncComponent` สำหรับ code splitting

```typescript
import { defineAsyncComponent } from 'vue'

const AsyncComponent = defineAsyncComponent(() => 
  import('./HeavyComponent.vue')
)
```

### v-once

ใช้ `v-once` สำหรับ static content

```vue
<template>
  <div v-once>
    <h1>{{ staticTitle }}</h1>
    <p>{{ staticDescription }}</p>
  </div>
</template>
```

### v-memo

ใช้ `v-memo` สำหรับ skip subtree updates (Vue 3.2+)

```vue
<template>
  <div v-memo="[value]">
    <!-- Only re-renders when value changes -->
  </div>
</template>
```

## List Rendering

### Key Strategy

ใช้ stable, unique keys สำหรับ `v-for`

```vue
<template>
  <div v-for="item in items" :key="item.id">
    {{ item.name }}
  </div>
</template>
```

### Virtual Scrolling

ใช้ virtual scrolling สำหรับ large lists (เช่น `vue-virtual-scroller`)

## Build Optimization

### Tree Shaking

Vue 3 supports tree shaking อัตโนมัติ - import เฉพาะที่ใช้

```typescript
import { ref, computed } from 'vue' // Only imports what's needed
```

### Production Build

ใช้ production build สำหรับ minification และ optimizations

```bash
bun run build
```

## Best Practices

- ใช้ `shallowRef` สำหรับ large objects
- ใช้ `computed` สำหรับ expensive calculations
- Lazy load components เมื่อจำเป็น
- ใช้ `v-once` สำหรับ static content
- ใช้ stable keys สำหรับ `v-for`
- ใช้ virtual scrolling สำหรับ large lists
- Enable production build สำหรับ deployment
