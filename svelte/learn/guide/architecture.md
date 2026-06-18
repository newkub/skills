# Architecture

## ภาพรวม

Svelte architecture ออกแบบมาเพื่อ performance และ developer experience

## Component Architecture

### Component Structure

```svelte
<script>
  // Logic layer
</script>

<!-- Template layer -->
<div>
  <!-- UI -->
</div>

<style>
  /* Style layer */
</style>
```

### Layers

1. **Script Layer** - Business logic และ state
2. **Template Layer** - UI structure
3. **Style Layer** - Component styles

## Reactivity System

### Reactive Declarations

```javascript
$: doubled = count * 2;
```

### Reactive Statements

```javascript
$: if (count > 10) {
  console.log('Count is high');
}
```

### Stores

```javascript
// Writable store
const count = writable(0);

// Readable store
const time = readable(new Date(), set => {
  const interval = setInterval(() => set(new Date()), 1000);
  return () => clearInterval(interval);
});

// Derived store
const doubled = derived(count, $count => $count * 2);
```

## Compilation Architecture

### Build Pipeline

```
Source (.svelte) → Parser → Compiler → Optimizer → Output (JS/CSS)
```

### Compiler Stages

1. **Parsing** - Parse Svelte syntax
2. **Compilation** - Generate JavaScript
3. **Optimization** - Optimize output
4. **Code Generation** - Generate final code

## State Management

### Local State

```javascript
let count = 0;
```

### Props

```svelte
<script>
  export let name;
</script>
```

### Stores

```javascript
import { writable } from 'svelte/store';

export const store = writable(initialValue);
```

## Lifecycle

### onMount

```javascript
import { onMount } from 'svelte';

onMount(() => {
  // Run on component mount
  return () => {
    // Cleanup on unmount
  };
});
```

### onDestroy

```javascript
import { onDestroy } from 'svelte';

onDestroy(() => {
  // Cleanup
});
```

## Performance Architecture

### No Virtual DOM

- Direct DOM manipulation
- No diffing algorithm
- Smaller runtime overhead

### Compile-time Optimization

- Static analysis
- Dead code elimination
- Tree-shaking friendly

## Module System

### ES Modules

```javascript
import { Component } from './Component.svelte';
export { default as MyComponent } from './MyComponent.svelte';
```

### Component Reusability

- Props for input
- Events for output
- Slots for composition

## Summary

Svelte architecture ประกอบด้วย:
- Component-based structure
- Compile-time reactivity
- No virtual DOM
- Efficient state management
- Optimized build pipeline
