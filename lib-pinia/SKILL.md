# lib-pinia

## Overview

แนวทางการพัฒนา Pinia ตาม best practices สำหรับ Vue 3 state management ที่มี type-safe, devtools integration และรองรับทั้ง Options API และ Composition API

## File Structure

| Folder | Description |
|--------|-------------|
| guide/ | Guides และ tutorials สำหรับการใช้งาน |
| references/ | References สำหรับ API, Configuration, Website |

## Guide Files

| File | Description |
|------|-------------|
| key-concept.md | Core concepts — Store, State, Getters, Actions, Plugins |
| how-it-works.md | การทำงานภายใน — Reactivity, Lifecycle, Plugin Pipeline |
| features.md | Features ทั้งหมด — Options/Setup Store, Subscriptions, Plugins |
| installation.md | การติดตั้ง — npm/yarn/pnpm, Vue 3, Nuxt 3 |
| configuration.md | การตั้งค่า — createPinia, store options, plugins, persist |
| quick-start.md | คู่มือเริ่มต้นใช้งาน — สร้าง store แรกใน 5 นาที |
| best-practices.md | Best practices — Store design, State management, Performance |
| integration.md | การ integrate — Vue Router, Nuxt 3, Vite, Vitest, Persistence |
| architecture.md | Architecture — Singleton pattern, Reactivity flow, Plugin system |

## References Files

| File | Description |
|------|-------------|
| website.md | Official documentation links และ resources |
| api.md | API reference — createPinia, defineStore, storeToRefs, plugins |
| configuration.md | Configuration options — store options, plugins, TypeScript |

## Key Concepts Summary

| Concept | Description |
|---------|-------------|
| **Options Store** | สร้าง store ด้วย `{ state, getters, actions }` |
| **Setup Store** | สร้าง store ด้วย Composition API (`ref`, `computed`, `function`) |
| **State** | ข้อมูล reactive ของ store |
| **Getters** | Computed properties จาก state |
| **Actions** | Methods สำหรับแก้ไข state (sync/async) |
| **Plugins** | ขยายความสามารถของทุก store |

## Quick Reference

```typescript
// Setup Pinia
import { createPinia } from 'pinia'
app.use(createPinia())

// Define Store (Setup)
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() { count.value++ }
  return { count, doubleCount, increment }
})

// Use in Component
const store = useCounterStore()
const { count } = storeToRefs(store)  // keep reactivity
store.increment()  // call action
```