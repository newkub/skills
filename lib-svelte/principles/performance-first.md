# Performance Optimization Principles

## ภาพรวม

หลักการปรับปรุง performance ใน Svelte applications

## Compile-time Optimization

### Leverage Compiler

```javascript
// ✅ Good - Compiler optimizes
$: doubled = count * 2;

// ❌ Bad - Manual optimization
let doubled;
function updateDoubled() {
  doubled = count * 2;
}
```

## Minimal Reactivity

### Avoid Unnecessary Reactivity

```javascript
// ✅ Good - Static
const CONFIG = { apiUrl: 'https://api.example.com' };

// ❌ Bad - Unnecessary reactive
$: CONFIG = { apiUrl: 'https://api.example.com' };
```

## Component Splitting

### Split Large Components

```svelte
<!-- ✅ Good - Split -->
<Header />
<Content />
<Footer />

<!-- ❌ Bad - Monolithic -->
<div>
  <!-- 500 lines of code -->
</div>
```

## Efficient Lists

### Keyed Each Loops

```svelte
<!-- ✅ Good - Keyed -->
{#each items as item (item.id)}
  <Item {item} />
{/each}

<!-- ❌ Bad - No key -->
{#each items as item}
  <Item {item} />
{/each}
```

## Lazy Loading

### Dynamic Imports

```javascript
// ✅ Good - Lazy load
const LazyComponent = import('./HeavyComponent.svelte');

// ❌ Bad - Eager load
import HeavyComponent from './HeavyComponent.svelte';
```

## Store Optimization

### Derived Stores

```javascript
// ✅ Good - Derived store
const doubled = derived(count, $count => $count * 2);

// ❌ Bad - Manual subscription
$: doubled = $count * 2;
```

### Selective Updates

```javascript
// ✅ Good - Selective update
store.update(n => n + 1);

// ❌ Bad - Full replacement
store.set(store.value + 1);
```

## Memory Management

### Cleanup Resources

```javascript
// ✅ Good - Cleanup
import { onDestroy } from 'svelte';

let interval;

onMount(() => {
  interval = setInterval(() => {}, 1000);
});

onDestroy(() => {
  clearInterval(interval);
});

// ❌ Bad - No cleanup
let interval = setInterval(() => {}, 1000);
```

## Bundle Optimization

### Code Splitting

```javascript
// ✅ Good - Code split
const module = await import('./module.js');

// ❌ Bad - No split
import module from './module.js';
```

## Measurement

### Profile Before Optimizing

```bash
# Measure performance
bunx lighthouse https://your-app.com
```

## Summary

Performance principles:
- Leverage compiler optimizations
- Minimal reactivity
- Split large components
- Use keyed each loops
- Lazy load heavy components
- Optimize stores
- Cleanup resources
- Code splitting
- Measure before optimizing
