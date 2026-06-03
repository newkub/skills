# create-component

## Create New Component

### 1. Basic Component

สร้างไฟล์ใน `components/` directory:

```bash
# Basic component
touch components/MyButton.vue
```

```vue
<!-- components/MyButton.vue -->
<template>
  <button class="btn" @click="$emit('click')">
    <slot />
  </button>
</template>

<script setup lang="ts">
defineEmits<{
  click: []
}>()
</script>

<style scoped>
.btn {
  padding: 0.5rem 1rem;
  background: #42b883;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
```

### 2. Nested Components

```bash
# Sub-directory components auto-prefix
touch components/base/Button.vue
touch components/ui/Card.vue
```

ใช้งาน:
- `components/base/Button.vue` → `<BaseButton />`
- `components/ui/Card.vue` → `<UiCard />`

### 3. Lazy Components

```vue
<!-- Lazy load heavy component -->
<template>
  <LazyHeavyChart v-if="showChart" />
</template>
```

## Props & Emits

### With TypeScript

```vue
<script setup lang="ts">
interface Props {
  title: string
  count?: number
  variant?: 'primary' | 'secondary'
}

const props = withDefaults(defineProps<Props>(), {
  count: 0,
  variant: 'primary'
})

const emit = defineEmits<{
  update: [value: number]
  delete: []
}>()

function handleClick() {
  emit('update', props.count + 1)
}
</script>
```

## Async Components

```vue
<!-- components/UserProfile.vue -->
<script setup lang="ts">
const props = defineProps<{
  userId: string
}>()

// Async data fetching
const { data: user } = await useFetch(`/api/users/${props.userId}`)
</script>
```

## Component Testing

```typescript
// components/__tests__/MyButton.spec.ts
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import MyButton from '../MyButton.vue'

describe('MyButton', () => {
  it('renders correctly', () => {
    const wrapper = mount(MyButton, {
      slots: { default: 'Click me' }
    })
    expect(wrapper.text()).toContain('Click me')
  })
})
```

## Best Practices

| Practice | Description |
|----------|-------------|
| Use `defineProps` | ใช้ TypeScript types |
| Use `<style scoped>` | Scoped styles |
| Single responsibility | แต่ละ component ทำหน้าที่เดียว |
| Use slots | ใช้ slots สำหรับ content projection |

## Verify

- Component auto-imported โดยไม่ต้องเขียน import
- ใช้งานได้ทันทีใน pages