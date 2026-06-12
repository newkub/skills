# Performance

## ภาพรวม

เทคนิคการปรับปรุง performance สำหรับ Svelte applications

## Compile-time Optimizations

### Static Analysis

Svelte compiler วิเคราะห์ code ณ build time:

```svelte
<script>
  // Compiler รู้ว่า count เปลี่ยนเมื่อไหร่
  let count = 0;
  
  // อัตโนมัติ optimize DOM updates
  $: doubled = count * 2;
</script>
```

### Dead Code Elimination

Code ที่ไม่ได้ใช้จะถูกลบออกอัตโนมัติ

## Runtime Optimizations

### Reactive Statements

ใช้ `$:` อย่างมีประสิทธิภาพ:

```javascript
// ✅ Good - อัตโนมัติ track dependencies
$: total = price * quantity;

// ❌ Bad - Manual dependency tracking
$: {
  total = price * quantity;
}
```

### Avoid Unnecessary Reactivity

```javascript
// ✅ Good - Static value
const PI = 3.14159;

// ❌ Bad - Unnecessary reactivity
$: PI = 3.14159;
```

## Component Optimization

### Component Splitting

แบ่ง components ขนาดใหญ่:

```svelte
<!-- Parent.svelte -->
<script>
  import Header from './Header.svelte';
  import Content from './Content.svelte';
  import Footer from './Footer.svelte';
</script>

<Header />
<Content />
<Footer />
```

### Lazy Loading

ใช้ dynamic imports:

```javascript
const LazyComponent = import('./HeavyComponent.svelte');
```

## List Optimization

### Keyed Each Loop

```svelte
<!-- ✅ Good - Use key -->
{#each items as item (item.id)}
  <Item {item} />
{/each}

<!-- ❌ Bad - No key -->
{#each items as item}
  <Item {item} />
{/each}
```

### Virtual Scrolling

สำหรับ lists ขนาดใหญ่:

```bash
bun add svelte-virtual-list
```

## State Management

### Store Optimization

```javascript
// ✅ Good - Derived store
const doubled = derived(count, $count => $count * 2);

// ❌ Bad - Manual subscription
$: doubled = $count * 2;
```

### Selective Updates

```javascript
// Update เฉพาะส่วนที่จำเป็น
store.update(n => n + 1);
```

## Bundle Optimization

### Code Splitting

```javascript
// Dynamic import
const module = await import('./module.js');
```

### Tree Shaking

Svelte compiler ทำ tree shaking อัตโนมัติ

## Memory Management

### Cleanup

```javascript
import { onDestroy } from 'svelte';

let interval;

onMount(() => {
  interval = setInterval(() => {}, 1000);
});

onDestroy(() => {
  clearInterval(interval);
});
```

### Event Listeners

```javascript
// ✅ Good - Auto cleanup
<div on:click={handleClick} />

// ❌ Bad - Manual cleanup needed
<div on:click={handleClick} />
```

## Measurement Tools

### Lighthouse

```bash
bunx lighthouse https://your-app.com
```

### Bundle Analyzer

```bash
bun add -D rollup-plugin-visualizer
```

## Summary

เทคนิค performance หลัก:
- ใช้ compile-time optimizations
- Avoid unnecessary reactivity
- Split large components
- Use keyed each loops
- Optimize stores
- Code splitting
- Proper cleanup
- Measure with tools
