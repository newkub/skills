# Lifecycle

## ภาพรวม

Lifecycle hooks สำหรับ component initialization และ cleanup

## onMount

### Basic Usage

```javascript
import { onMount } from 'svelte';

onMount(() => {
  console.log('Component mounted');
});
```

### With Cleanup

```javascript
onMount(() => {
  const interval = setInterval(() => {}, 1000);
  
  return () => {
    clearInterval(interval);
  };
});
```

### Async Operations

```javascript
onMount(async () => {
  const data = await fetchData();
  // use data
});
```

## onDestroy

### Basic Usage

```javascript
import { onDestroy } from 'svelte';

onDestroy(() => {
  console.log('Component destroyed');
});
```

### Cleanup Resources

```javascript
let eventListener;

onMount(() => {
  eventListener = window.addEventListener('resize', handleResize);
});

onDestroy(() => {
  window.removeEventListener('resize', eventListener);
});
```

## beforeUpdate / afterUpdate

### beforeUpdate

```javascript
import { beforeUpdate } from 'svelte';

beforeUpdate(() => {
  console.log('Before update');
});
```

### afterUpdate

```javascript
import { afterUpdate } from 'svelte';

afterUpdate(() => {
  console.log('After update');
});
```

## tick

### Force DOM Update

```javascript
import { tick } from 'svelte';

async function updateAndRead() {
  count += 1;
  await tick(); // Wait for DOM update
  console.log(element.offsetHeight); // Read updated DOM
}
```

## Lifecycle Order

```
1. Component initialization
2. Props assignment
3. onMount callback
4. beforeUpdate (on subsequent updates)
5. DOM update
6. afterUpdate (on subsequent updates)
7. onDestroy callback
```

## Common Patterns

### Data Fetching

```javascript
import { onMount } from 'svelte';

let data;
let loading = true;

onMount(async () => {
  data = await fetchData();
  loading = false;
});
```

### Event Listeners

```javascript
import { onMount, onDestroy } from 'svelte';

let handler;

onMount(() => {
  handler = window.addEventListener('scroll', handleScroll);
});

onDestroy(() => {
  window.removeEventListener('scroll', handler);
});
```

### Subscriptions

```javascript
import { onMount, onDestroy } from 'svelte';
import { store } from '../stores/store.js';

let unsubscribe;

onMount(() => {
  unsubscribe = store.subscribe(value => {
    console.log(value);
  });
});

onDestroy(() => {
  unsubscribe();
});
```

## Best Practices

- **Cleanup**: เสมอ cleanup ใน onDestroy
- **Async**: ใช้ onMount สำหรับ async operations
- **tick**: ใช้ tick เมื่อต้องอ่าน DOM หลัง update
- **Subscriptions**: Unsubscribe stores ใน onDestroy
- **Event Listeners**: Remove event listeners ใน onDestroy

## Summary

Lifecycle hooks:
- **onMount**: Component initialization
- **onDestroy**: Component cleanup
- **beforeUpdate**: Before DOM update
- **afterUpdate**: After DOM update
- **tick**: Force DOM update
