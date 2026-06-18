# Component Design

## Overview

Follow these principles for creating maintainable, reusable, and performant Vue components in Nuxt.

## Single Responsibility

Each component should have one clear purpose:

```vue
<!-- ✅ Good - Single responsibility -->
<template>
  <button @click="handleClick">
    <slot />
  </button>
</template>

<!-- ❌ Bad - Multiple responsibilities -->
<template>
  <div>
    <button @click="fetchData">Load Data</button>
    <div v-if="data">{{ data }}</div>
  </div>
</template>
```

## Composition API

Use Composition API for better logic reuse and TypeScript support:

```vue
<script setup lang="ts">
// ✅ Good - Composition API
const count = ref(0)
const doubled = computed(() => count.value * 2)

// ❌ Bad - Options API
export default {
  data() {
    return { count: 0 }
  },
  computed: {
    doubled() {
      return this.count * 2
    }
  }
}
</script>
```

## Props Definition

Use TypeScript for type-safe props:

```vue
<script setup lang="ts">
// ✅ Good - TypeScript props
interface Props {
  title: string
  count?: number
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  count: 0,
  disabled: false
})

// ❌ Bad - Untyped props
const props = defineProps({
  title: String,
  count: Number,
  disabled: Boolean
})
</script>
```

## Emits Definition

Define emits with TypeScript for type safety:

```vue
<script setup lang="ts">
// ✅ Good - Typed emits
interface Emits {
  (e: 'update:modelValue', value: string): void
  (e: 'submit', data: FormData): void
}

const emit = defineEmits<Emits>()

// ❌ Bad - Untyped emits
const emit = defineEmits(['update:modelValue', 'submit'])
</script>
```

## Slots

Use named slots for flexible composition:

```vue
<template>
  <div class="card">
    <div class="card-header">
      <slot name="header">
        <h2>Default Header</h2>
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

## Composables

Extract reusable logic into composables:

```typescript
// composables/useCounter.ts
export const useCounter = (initial = 0) => {
  const count = ref(initial)
  const increment = () => count.value++
  const decrement = () => count.value--
  return { count, increment, decrement }
}
```

## SSR Considerations

Ensure components work on both server and client:

```vue
<script setup lang="ts">
// ✅ Good - SSR-safe
const mounted = ref(false)
onMounted(() => {
  mounted.value = true
})

// ❌ Bad - Client-only logic without check
const width = ref(window.innerWidth) // Error on server
```

## Performance

### Lazy Loading

Use lazy loading for heavy components:

```vue
<script setup lang="ts">
const HeavyComponent = defineAsyncComponent(
  () => import('./HeavyComponent.vue')
)
</script>
```

### v-if vs v-show

```vue
<!-- ✅ v-if for rarely toggled content -->
<div v-if="showDetails">Details</div>

<!-- ✅ v-show for frequently toggled content -->
<div v-show="isVisible">Content</div>
```

## Styling

Use scoped styles or CSS modules:

```vue
<template>
  <div class="card">
    <slot />
  </div>
</template>

<style scoped>
.card {
  padding: 1rem;
  border: 1px solid #ccc;
}
</style>
```

## Naming Conventions

- **Components**: PascalCase (`UserProfile.vue`)
- **Props**: camelCase (`userName`)
- **Events**: kebab-case (`@user-updated`)
- **Slots**: kebab-case (`#header-content`)

## File Organization

```
components/
├── base/           # Basic UI elements (Button, Input)
├── features/       # Feature-specific components
├── layouts/        # Layout components
└── pages/          # Page-specific components
```
