# State Management

## Overview

ใช้ Pinia สำหรับ global state management ใน Vue 3 (เป็น official recommendation)

## Pinia Setup

ติดตั้ง Pinia

```bash
bun add pinia
```

สร้าง pinia instance

```typescript
// src/stores/index.ts
import { createPinia } from 'pinia'

const pinia = createPinia()

export default pinia
```

## Define Store

ใช้ `defineStore` สำหรับสร้าง stores

```typescript
// src/stores/counter.ts
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  // State
  const count = ref(0)
  
  // Getters
  const doubled = computed(() => count.value * 2)
  
  // Actions
  function increment() {
    count.value++
  }
  
  function decrement() {
    count.value--
  }
  
  function reset() {
    count.value = 0
  }
  
  return {
    count,
    doubled,
    increment,
    decrement,
    reset
  }
})
```

## Using Store in Components

```vue
<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()

// Direct access
counter.count
counter.increment()

// Or use storeToRefs to keep reactivity
import { storeToRefs } from 'pinia'
const { count, doubled } = storeToRefs(counter)
</script>

<template>
  <div>
    <p>Count: {{ counter.count }}</p>
    <p>Doubled: {{ counter.doubled }}</p>
    <button @click="counter.increment">Increment</button>
  </div>
</template>
```

## Store with Actions

```typescript
export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>(null)
  const loading = ref(false)
  const error = ref<Error | null>(null)
  
  async function fetchUser(id: number) {
    loading.value = true
    error.value = null
    
    try {
      const response = await fetch(`/api/users/${id}`)
      user.value = await response.json()
    } catch (e) {
      error.value = e as Error
    } finally {
      loading.value = false
    }
  }
  
  return {
    user,
    loading,
    error,
    fetchUser
  }
})
```

## Best Practices

- ใช้ Pinia แทน Vuex สำหรับ Vue 3
- ใช้ Composition API style (setup stores)
- ใช้ `storeToRefs` เมื่อ destructuring เพื่อ keep reactivity
- จัดระเบียบ stores ตาม domain/feature
- ใช้ TypeScript สำหรับ type safety
- ทำ actions ให้ focused และ single-purpose
- ใช้ composables สำหรับ complex logic ที่ต้องการ state
