# Components

## Overview

Components เป็น building blocks ของ Vue applications ช่วยให้ organize UI และ logic ได้อย่าง modular

## Component Definition

### Single File Component

```vue
<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <div>
    <p>Count: {{ count }}</p>
  </div>
</template>

<style scoped>
div {
  color: blue;
}
</style>
```

### Props

```vue
<script setup lang="ts">
interface Props {
  title: string
  count?: number
}

const props = withDefaults(defineProps<Props>(), {
  count: 0
})
</script>

<template>
  <div>
    <h2>{{ title }}</h2>
    <p>Count: {{ count }}</p>
  </div>
</template>
```

### Emits

```vue
<script setup lang="ts">
const emit = defineEmits<{
  (e: 'update', value: number): void
  (e: 'delete', id: string): void
}>()

function handleUpdate() {
  emit('update', 10)
}
</script>

<template>
  <button @click="handleUpdate">Update</button>
</template>
```

### Slots

```vue
<script setup lang="ts">
interface Props {
  title: string
}

defineProps<Props>()
</script>

<template>
  <div class="card">
    <div class="card-header">
      <slot name="header">
        <h2>{{ title }}</h2>
      </slot>
    </div>
    <div class="card-body">
      <slot />
    </div>
    <div class="card-footer">
      <slot name="footer" />
    </div>
  </div>
</template>
```

## Component Communication

### Parent to Child (Props)

```vue
<!-- Parent.vue -->
<script setup lang="ts">
import Child from './Child.vue'

const message = ref('Hello from parent')
</script>

<template>
  <Child :message="message" />
</template>

<!-- Child.vue -->
<script setup lang="ts">
interface Props {
  message: string
}

defineProps<Props>()
</script>

<template>
  <p>{{ message }}</p>
</template>
```

### Child to Parent (Emits)

```vue
<!-- Parent.vue -->
<script setup lang="ts">
import Child from './Child.vue'

function handleMessage(value: string) {
  console.log(value)
}
</script>

<template>
  <Child @message="handleMessage" />
</template>

<!-- Child.vue -->
<script setup lang="ts">
const emit = defineEmits<{
  (e: 'message', value: string): void
}>()

function send() {
  emit('message', 'Hello from child')
}
</script>

<template>
  <button @click="send">Send</button>
</template>
```

### Two-way Binding (v-model)

```vue
<!-- Parent.vue -->
<script setup lang="ts">
import { ref } from 'vue'
import Child from './Child.vue'

const text = ref('Hello')
</script>

<template>
  <Child v-model="text" />
</template>

<!-- Child.vue -->
<script setup lang="ts">
interface Props {
  modelValue: string
}

interface Emits {
  (e: 'update:modelValue', value: string): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()
</script>

<template>
  <input
    :value="props.modelValue"
    @input="emit('update:modelValue', $event.target.value)"
  />
</template>
```

## Lifecycle Hooks

### Composition API Lifecycle

```vue
<script setup lang="ts">
import { onMounted, onUnmounted, onUpdated } from 'vue'

onMounted(() => {
  console.log('Component mounted')
})

onUpdated(() => {
  console.log('Component updated')
})

onUnmounted(() => {
  console.log('Component unmounted')
})
</script>
```

## Best Practices

1. **Small Components**: รักษา components ให้ small และ focused
2. **Props Validation**: ใช้ TypeScript สำหรับ props validation
3. **Naming**: ใช้ PascalCase สำหรับ component names
4. **Single Responsibility**: แต่ละ component ควรมี single responsibility
5. **Composition**: ใช้ composition สำหรับ complex UI

## References

- [Components Basics](https://vuejs.org/guide/essentials/component-basics)
- [Component Registration](https://vuejs.org/guide/components/registration)
