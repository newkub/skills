# API Reference

## Overview

API references สำหรับ Vue.js core APIs

## Reactivity API

### ref()

สร้าง reactive reference:

```ts
import { ref } from 'vue'

const count = ref(0)
const message = ref('Hello')
```

### reactive()

สร้าง reactive object:

```ts
import { reactive } from 'vue'

const state = reactive({
  count: 0,
  user: {
    name: 'John'
  }
})
```

### computed()

สร้าง computed value:

```ts
import { ref, computed } from 'vue'

const count = ref(0)
const doubleCount = computed(() => count.value * 2)
```

### watch()

Track changes:

```ts
import { ref, watch } from 'vue'

const count = ref(0)

watch(count, (newValue, oldValue) => {
  console.log(newValue, oldValue)
})
```

### watchEffect()

Track dependencies อัตโนมัติ:

```ts
import { ref, watchEffect } from 'vue'

const count = ref(0)

watchEffect(() => {
  console.log(count.value)
})
```

### toRef()

Convert reactive property to ref:

```ts
import { reactive, toRef } from 'vue'

const state = reactive({ count: 0 })
const count = toRef(state, 'count')
```

### toRefs()

Convert reactive object to refs:

```ts
import { reactive, toRefs } from 'vue'

const state = reactive({ count: 0, message: 'Hello' })
const { count, message } = toRefs(state)
```

## Component API

### defineProps()

Define component props:

```ts
interface Props {
  title: string
  count?: number
}

const props = withDefaults(defineProps<Props>(), {
  count: 0
})
```

### defineEmits()

Define component emits:

```ts
const emit = defineEmits<{
  (e: 'update', value: number): void
  (e: 'delete', id: string): void
}>()
```

### defineExpose()

Expose component methods:

```ts
const count = ref(0)

function increment() {
  count.value++
}

defineExpose({
  increment,
  count
})
```

## Lifecycle Hooks

### onMounted()

Run after component mount:

```ts
import { onMounted } from 'vue'

onMounted(() => {
  console.log('Mounted')
})
```

### onUnmounted()

Run before component unmount:

```ts
import { onUnmounted } from 'vue'

onUnmounted(() => {
  console.log('Unmounted')
})
```

### onUpdated()

Run after component update:

```ts
import { onUpdated } from 'vue'

onUpdated(() => {
  console.log('Updated')
})
```

### onBeforeMount()

Run before component mount:

```ts
import { onBeforeMount } from 'vue'

onBeforeMount(() => {
  console.log('Before mount')
})
```

### onBeforeUnmount()

Run before component unmount:

```ts
import { onBeforeUnmount } from 'vue'

onBeforeUnmount(() => {
  console.log('Before unmount')
})
```

## Template Refs

### ref() in Template

Reference template elements:

```vue
<script setup lang="ts">
import { ref, onMounted } from 'vue'

const inputRef = ref<HTMLInputElement>()

onMounted(() => {
  inputRef.value?.focus()
})
</script>

<template>
  <input ref="inputRef" />
</template>
```

## Component Refs

### ref() for Components

Reference component instances:

```vue
<script setup lang="ts">
import Child from './Child.vue'
import { ref } from 'vue'

const childRef = ref<InstanceType<typeof Child>>()

function callChildMethod() {
  childRef.value?.increment()
}
</script>

<template>
  <Child ref="childRef" />
</template>
```

## References

- [Reactivity API](https://vuejs.org/api/reactivity-core)
- [Component API](https://vuejs.org/api/general)
- [Lifecycle Hooks](https://vuejs.org/api/composition-api-lifecycle)
