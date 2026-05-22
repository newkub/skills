---
name: vue
description: Best practices for Vue.js development including security, performance, and developer experience
goal: พัฒนา Vue.js ตาม best practices
outcome: Vue.js applications มีคุณภาพและประสิทธิภาพ
---

# Vue.js Development

## When to Apply

ใช้ Skill นี้เมื่อพัฒนา Vue.js applications

- เมื่อสร้าง Vue applications ใหม่
- เมื่อ refactor existing components
- เมื่อ ensure application security และ accessibility
- เมื่อ optimize application performance

## Summary Table

| Category | File | Purpose | Condition |
|---|---|---|---|
| **Guide** | [getting-started](guide/getting-started.md) | เริ่มต้นใช้งาน Vue.js | เมื่อเริ่มโปรเจกต์ใหม่ |
| **Guide** | [reactivity](guide/reactivity.md) | การใช้ reactivity system | เมื่อใช้ state management |
| **Guide** | [components](guide/components.md) | การสร้าง components | เมื่อสร้าง components |
| **Guide** | [composition-api](guide/composition-api.md) | การใช้ Composition API | เมื่อใช้ Composition API |
| **Guide** | [script-setup](guide/script-setup.md) | การใช้ <script setup> | เมื่อใช้ SFC |
| **Guide** | [performance](guide/performance.md) | การ optimize performance | เมื่อ optimize performance |
| **Reference** | [official-docs](reference/official-docs.md) | Official documentation | เมื่อต้องการข้อมูลจาก source |
| **Reference** | [api](reference/api.md) | API references | เมื่อต้องการ API details |
| **Reference** | [reactivity-api](reference/reactivity-api.md) | Reactivity API | เมื่อใช้ reactivity |
| **Examples** | [basic-components](examples/basic-components.md) | ตัวอย่างการสร้าง components | เมื่อต้องการ examples |
| **Examples** | [composables](examples/composables.md) | ตัวอย่าง composables | เมื่อสร้าง composables |
| **Patterns** | [component-patterns](patterns/component-patterns.md) | Component design patterns | เมื่อ design components |

## Core Features

- **Reactivity System**: Reactive state management ด้วย ref() และ reactive()
- **Component System**: Component-based architecture พร้อม lifecycle hooks
- **Composition API**: Flexible composition logic ด้วย composables
- **Single File Components**: Template, script, และ style ในไฟล์เดียว
- **Template Syntax**: Intuitive template syntax พร้อม directives
- **TypeScript Support**: Full TypeScript support สำหรับ type safety

## Quick Reference

```vue
<script setup lang="ts">
import { ref, computed } from 'vue'

const count = ref(0)
const doubleCount = computed(() => count.value * 2)

function increment() {
  count.value++
}
</script>

<template>
  <div>
    <p>Count: {{ count }}</p>
    <p>Double: {{ doubleCount }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>
```

## Verification

1. ตรวจสอบ TypeScript types
2. ทดสอบ component reactivity
3. ตรวจสอบ performance ด้วย DevTools
4. ทดสอบ accessibility
5. ตรวจสอบ component lifecycle
