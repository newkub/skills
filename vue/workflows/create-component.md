---
description: Create Vue 3 component with TypeScript and best practices
---

## Goal

สร้าง Vue 3 component ด้วย TypeScript, Composition API, และ best practices

## Execute

### 1. Create Component File

สร้าง `src/components/MyComponent.vue`:

```vue
<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

// Props
interface Props {
  title: string
  count?: number
}

const props = withDefaults(defineProps<Props>(), {
  count: 0
})

// Emits
const emit = defineEmits<{
  update: [value: number]
  delete: [id: string]
}>()

// Reactive State
const localCount = ref(props.count)
const message = ref('Hello')

// Computed
const doubled = computed(() => localCount.value * 2)

// Methods
function increment() {
  localCount.value++
  emit('update', localCount.value)
}

// Lifecycle
onMounted(() => {
  console.log('Component mounted')
})
</script>

<template>
  <div class="my-component">
    <h2>{{ title }}</h2>
    <p>{{ message }}</p>
    <p>Count: {{ localCount }}</p>
    <p>Doubled: {{ doubled }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<style scoped>
.my-component {
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
```

### 2. Use Component in Parent

```vue
<script setup lang="ts">
import MyComponent from '@/components/MyComponent.vue'

function handleUpdate(value: number) {
  console.log('Updated:', value)
}
</script>

<template>
  <MyComponent
    title="My Component"
    :count="5"
    @update="handleUpdate"
  />
</template>
```

### 3. Create Composable (Optional)

สร้าง `src/composables/useCounter.ts`:

```typescript
import { ref, computed } from 'vue'

export function useCounter(initial = 0) {
  const count = ref(initial)
  const doubled = computed(() => count.value * 2)

  function increment() {
    count.value++
  }

  function decrement() {
    count.value--
  }

  return {
    count,
    doubled,
    increment,
    decrement
  }
}
```

ใช้ใน component:

```vue
<script setup lang="ts">
import { useCounter } from '@/composables/useCounter'

const { count, doubled, increment, decrement } = useCounter(10)
</script>
```

## Best Practices

- ใช้ `<script setup lang="ts">` เสมอ
- ใช้ TypeScript interfaces สำหรับ props
- ใช้ `withDefaults` สำหรับ default props
- ใช้ typed emits สำหรับ events
- ใช้ composables สำหรับ reusable logic
- ใช้ `scoped` styles เพื่อ isolation
- ตั้งชื่อ components ด้วย PascalCase

## Expected Outcome

- Component ที่ type-safe
- Reusable logic ด้วย composables
- Clean component structure
- Style isolation
