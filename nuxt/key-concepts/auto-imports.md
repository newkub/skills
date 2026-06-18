# Auto-Imports

## Overview

Nuxt automatically imports components, composables, and utilities from the `app/` directory, eliminating the need for explicit import statements while maintaining full TypeScript support and IDE completions.

## Component Auto-Imports

Components in the `app/components/` directory are automatically available:

```vue
<!-- components/Header.vue -->
<template>
  <header>My Header</header>
</template>

<!-- pages/index.vue -->
<template>
  <div>
    <Header /> <!-- Auto-imported -->
  </div>
</template>
```

### Component Discovery

| Directory | Auto-Imported? |
|-----------|----------------|
| `app/components/` | Yes |
| `app/components/**/` | Yes (nested) |
| `~/components/` | Yes (aliased) |

### Naming Conventions

- `PascalCase.vue` → `<PascalCase />`
- `kebab-case.vue` → `<KebabCase />`
- `MixedCase.vue` → `<MixedCase />`

## Composable Auto-Imports

Composables in the `app/composables/` directory are auto-imported:

```typescript
// app/composables/useCounter.ts
export const useCounter = () => {
  const count = ref(0)
  const increment = () => count.value++
  return { count, increment }
}

// app/pages/index.vue
<script setup>
const { count, increment } = useCounter() // Auto-imported
</script>
```

## Built-in Auto-Imports

### Vue APIs

```typescript
// No import needed
const count = ref(0)
const doubled = computed(() => count.value * 2)
watch(count, (val) => console.log(val))
```

### Nuxt APIs

```typescript
// No import needed
const route = useRoute()
const router = useRouter()
const config = useRuntimeConfig()
const { data } = await useFetch('/api/data')
```

## Configuration

### Disable Auto-Imports

```typescript
export default defineNuxtConfig({
  components: false, // Disable component auto-imports
  imports: {
    autoImport: false // Disable composable auto-imports
  }
})
```

### Custom Import Presets

```typescript
export default defineNuxtConfig({
  imports: {
    presets: [
      {
        from: 'lodash-es',
        imports: ['map', 'filter', 'reduce']
      }
    ]
  }
})
```

### Exclude Specific Imports

```typescript
export default defineNuxtConfig({
  imports: {
    dirs: ['composables'],
    exclude: ['composables/internal/**']
  }
})
```

## Type Safety

Auto-imports maintain full TypeScript support:

```typescript
// TypeScript knows the types
const { data } = await useFetch<User[]>('/api/users')
// data is Ref<User[]> | null
```

## IDE Support

- **VS Code**: Auto-completion works out of the box
- **WebStorm**: Requires enabling Nuxt plugin
- **TypeScript**: Generates `.nuxt/tsconfig.json` for types

## Performance Impact

Auto-imports have minimal performance impact:
- Build-time transformation (no runtime overhead)
- Tree-shaking removes unused imports
- Type generation happens during build

## Best Practices

- Use descriptive names for components and composables
- Keep composables small and focused
- Avoid circular dependencies in composables
- Use explicit imports for third-party libraries
- Check `.nuxt/auto-imports.d.ts` for available imports
