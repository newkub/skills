# Getting Started with Vue.js

## Overview

Vue.js เป็น progressive JavaScript framework สำหรับสร้าง user interfaces มี reactivity system ที่ทรงพลัง และ component-based architecture

## Key Concepts

### Reactivity System

Vue ใช้ reactivity system ที่ track dependencies อัตโนมัติ:
- `ref()` สำหรับ primitive values
- `reactive()` สำหรับ objects
- `computed()` สำหรับ derived state
- `watch()` สำหรับ side effects

### Component System

Components เป็น building blocks ของ Vue applications:
- Single File Components (.vue files)
- Props สำหรับ passing data down
- Emits สำหรับ passing events up
- Slots สำหรับ content distribution

### Composition API

Composition API ให้ flexibility ในการ organize logic:
- `setup()` function หรือ `<script setup>`
- Composables สำหรับ reusable logic
- Lifecycle hooks ใน setup

## Installation

### CDN

```html
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
```

### NPM

```bash
npm install vue
```

### Vite

```bash
npm create vue@latest my-app
cd my-app
npm install
npm run dev
```

## Basic Component

### Using Composition API

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

### Using Options API

```vue
<script lang="ts">
export default {
  data() {
    return {
      count: 0
    }
  },
  computed: {
    doubleCount() {
      return this.count * 2
    }
  },
  methods: {
    increment() {
      this.count++
    }
  }
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

## Template Syntax

### Interpolation

```vue
<template>
  <p>{{ message }}</p>
</template>
```

### Directives

```vue
<template>
  <!-- v-if -->
  <div v-if="show">Visible</div>
  
  <!-- v-for -->
  <li v-for="item in items" :key="item.id">
    {{ item.name }}
  </li>
  
  <!-- v-bind (shorthand :) -->
  <img :src="imageSrc" :alt="imageAlt" />
  
  <!-- v-on (shorthand @) -->
  <button @click="handleClick">Click</button>
  
  <!-- v-model -->
  <input v-model="text" />
  
  <!-- v-show -->
  <div v-show="visible">Shown</div>
</template>
```

## Best Practices

1. **Use Composition API**: ใช้ Composition API สำหรับ new projects
2. **TypeScript**: ใช้ TypeScript สำหรับ type safety
3. **Component Size**: รักษา components ให้ small และ focused
4. **Props Validation**: ใช้ props validation ด้วย TypeScript
5. **Naming Conventions**: ใช้ kebab-case สำหรับ component names

## References

- [Vue.js Documentation](https://vuejs.org/guide/introduction)
- [Composition API](https://vuejs.org/guide/extras/composition-api-faq)
- [Single File Components](https://vuejs.org/guide/scaling-up/sfc)
