---
trigger: always_on
description: สร้างและจัดการ State Management ด้วย Pinia ใน Nuxt
condition: |
  ใช้เมื่อต้องการจัดการ global state ที่แชร์ระหว่าง components หรือ pages
  ใช้เมื่อต้องการ state ที่ persist ตลอด session หรือ browser
---

## 1. Naming & Structure (การตั้งชื่อและโครงสร้าง)

- **File Location**: สร้างไฟล์ store ทั้งหมดภายใน `~/stores` directory.
- **File Naming**: ตั้งชื่อไฟล์ตาม feature ที่ store จัดการ (เช่น `auth.ts`, `cart.ts`).
- **Store ID**: ID ของ store (พารามิเตอร์ตัวแรกของ `defineStore`) ควรเป็นชื่อเดียวกับไฟล์ (เช่น `defineStore('auth', ...)`).
- **Auto-Import**: Nuxt จะ auto-import composable ที่ return จาก `defineStore` ให้เอง โดยใช้ `use` prefix และ `Store` suffix (เช่น `useAuthStore`).

---

## 2. Store Definition (การสร้าง Store)

- **`defineStore`**: ใช้ `defineStore` เพื่อสร้าง store ใหม่
- **Setup Store**: แนะนำให้ใช้ Setup Store syntax เพื่อให้ได้ type inference ที่ดีที่สุดและมีความสอดคล้องกับ Composition API
  - **`state`**: ใช้ `ref()` หรือ `reactive()` เพื่อสร้าง reactive state.
  - **`getters`**: ใช้ `computed()` เพื่อสร้าง derived state.
  - **`actions`**: สร้างเป็นฟังก์ชัน (สามารถเป็น `async` ได้) ที่ทำการเปลี่ยนแปลง state.

````typescript
// stores/counter.ts
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  // State
  const count = ref(0)

  // Getters
  const doubleCount = computed(() => count.value * 2)

  // Actions
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
````

---

## 3. Usage in Components (การใช้งานใน Components)

- **Accessing Store**: เรียกใช้ auto-imported composable (เช่น `useCounterStore()`) ภายใน `<script setup>` เพื่อเข้าถึง store.

````vue
<script setup lang="ts">
const counterStore = useCounterStore()
</script>

<template>
  <div>
    <p>Count: {{ counterStore.count }}</p>
    <p>Double Count: {{ counterStore.doubleCount }}</p>
    <button @click="counterStore.increment">Increment</button>
  </div>
</template>
````

---

## 4. Async Actions & State Management (การจัดการ Async Actions)

- **Async Actions**: สร้าง actions ให้เป็น `async` function เพื่อจัดการ asynchronous operations (เช่น API calls).
- **Loading & Error State**: เพิ่ม state สำหรับ loading และ error ภายใน store เพื่อจัดการสถานะของ async actions.

---

## 5. SSR & Persistence (การทำงานร่วมกับ SSR และ Persistence)

- **SSR**: Pinia ทำงานร่วมกับ Nuxt SSR โดยอัตโนมัติ ไม่ต้องตั้งค่าเพิ่มเติม
- **Persistence**: หากต้องการให้ state คงอยู่หลังจากการ refresh หน้า, ให้ใช้ module เช่น `pinia-plugin-persistedstate`.
