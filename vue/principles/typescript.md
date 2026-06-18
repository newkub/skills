# TypeScript Integration

## Overview

Vue 3 มี native TypeScript support ที่ดีกว่า Vue 2

## Setup

ใช้ `<script setup lang="ts">` สำหรับ TypeScript components

```vue
<script setup lang="ts">
import { ref } from 'vue'

const count = ref<number>(0)
</script>
```

## Props Typing

ใช้ interfaces หรือ type aliases สำหรับ props

```vue
<script setup lang="ts">
interface Props {
  title: string
  count?: number
  user: {
    id: number
    name: string
  }
}

const props = withDefaults(defineProps<Props>(), {
  count: 0
})
</script>
```

## Emits Typing

ใช้ type-safe emits

```vue
<script setup lang="ts">
const emit = defineEmits<{
  update: [value: string]
  delete: [id: number]
}>()

function handleUpdate() {
  emit('update', 'new value')
}
</script>
```

## Ref Typing

ใช้ generic types สำหรับ refs

```typescript
import { ref } from 'vue'

const count = ref<number>(0)
const user = ref<User | null>(null)
const items = ref<Item[]>([])
```

## Computed Typing

Computed properties infer types อัตโนมัติ

```typescript
import { ref, computed } from 'vue'

const count = ref(0)
const doubled = computed(() => count.value * 2) // inferred as Ref<number>
```

## Composables Typing

ใช้ generic types สำหรับ reusable composables

```typescript
export function useFetch<T>(url: string) {
  const data = ref<T | null>(null)
  const error = ref<Error | null>(null)
  
  async function fetchData() {
    try {
      const response = await fetch(url)
      data.value = await response.json()
    } catch (e) {
      error.value = e as Error
    }
  }
  
  return { data, error, fetchData }
}

// Usage
const { data } = useFetch<User[]>('/api/users')
```

## Template Refs

ใช้ `useTemplateRef()` (Vue 3.5+) สำหรับ type-safe template refs

```vue
<script setup lang="ts">
import { useTemplateRef, onMounted } from 'vue'

const inputRef = useTemplateRef<HTMLInputElement>('input')

onMounted(() => {
  inputRef.value?.focus()
})
</script>

<template>
  <input ref="input" />
</template>
```

**Benefits:**
- Cleaner syntax (no need for `ref<HTMLInputElement | null>(null)`)
- Better type inference
- Built-in type safety

## Vue 3.5+ TypeScript Features

### useTemplateRef

Type-safe template ref management (Vue 3.5+)

```typescript
import { useTemplateRef } from 'vue'

const inputRef = useTemplateRef<HTMLInputElement>('input')
```

### defineSlots

Explicit slot type checking (Vue 3.3+)

```vue
<script setup lang="ts">
defineSlots<{
  default: (props: { item: string }) => any
  header: (props: { title: string }) => any
}>()
</script>
```

### defineModel

Type-safe v-model implementation (Vue 3.4+)

```vue
<script setup lang="ts">
const modelValue = defineModel<string>()
const count = defineModel<number>('count')
</script>
```

### Reactive Props Destructuring

Built-in reactive props destructuring (Vue 3.5+)

```vue
<script setup lang="ts">
// No need for toRefs() anymore
const { title, count } = defineProps<{
  title: string
  count: number
}>()
</script>
```

## Best Practices

- ใช้ `<script setup lang="ts">` เป็น default
- ใช้ interfaces สำหรับ complex types
- ใช้ generic types สำหรับ reusable functions
- ใช้ strict mode ใน `tsconfig.json`
- ใช้ `defineProps` และ `defineEmits` สำหรับ type safety
- ใช้ `useTemplateRef()` สำหรับ template refs (Vue 3.5+)
- ใช้ `defineSlots<>()` สำหรับ explicit slot types
- ใช้ `defineModel()` สำหรับ v-model (Vue 3.4+)
- ใช้ reactive props destructuring (Vue 3.5+, no toRefs needed)
- หลีกเลี่ยง `any` - ใช้ proper types
- ใช้ `as` casting เฉพาะเมื่อจำเป็น
- ใช้ `withDefaults()` สำหรับ prop defaults
