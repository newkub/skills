# Stores

## ภาพรวม

Svelte stores สำหรับ global state management ที่ reactive และ subscribe ได้

## Writable Store

### Creating Writable Store

```javascript
import { writable } from 'svelte/store';

const count = writable(0);
```

### Methods

```javascript
// Set value
count.set(1);

// Update value
count.update(n => n + 1);

// Subscribe
const unsubscribe = count.subscribe(value => {
  console.log(value);
});

// Unsubscribe
unsubscribe();
```

### Using in Component

```svelte
<script>
  import { count } from '../stores/count.js';
</script>

<button on:click={() => count.update(n => n + 1)}>
  Count: {$count}
</button>
```

## Readable Store

### Creating Readable Store

```javascript
import { readable } from 'svelte/store';

const time = readable(new Date(), set => {
  const interval = setInterval(() => set(new Date()), 1000);
  return () => clearInterval(interval);
});
```

### Using Readable Store

```svelte
<script>
  import { time } from '../stores/time.js';
</script>

<p>Time: {$time}</p>
```

## Derived Store

### Simple Derived

```javascript
import { derived } from 'svelte/store';

const doubled = derived(count, $count => $count * 2);
```

### Multiple Sources

```javascript
const total = derived([count, price], ([$count, $price]) => {
  return $count * $price;
});
```

### Using Derived Store

```svelte
<script>
  import { doubled } from '../stores/doubled.js';
</script>

<p>Doubled: {$doubled}</p>
```

## Custom Stores

### Creating Custom Store

```javascript
import { writable } from 'svelte/store';

function createCounter(initial = 0) {
  const { subscribe, set, update } = writable(initial);
  
  return {
    subscribe,
    increment: () => update(n => n + 1),
    decrement: () => update(n => n - 1),
    reset: () => set(initial)
  };
}

export const counter = createCounter();
```

### Using Custom Store

```svelte
<script>
  import { counter } from '../stores/counter.js';
</script>

<button on:click={counter.increment}>+</button>
<span>{$counter}</span>
<button on:click={counter.decrement}>-</button>
```

## Store Persistence

### LocalStorage Store

```javascript
import { writable } from 'svelte/store';

function createPersistedStore(key, initialValue) {
  const stored = localStorage.getItem(key);
  const store = writable(stored ? JSON.parse(stored) : initialValue);
  
  store.subscribe(value => {
    localStorage.setItem(key, JSON.stringify(value));
  });
  
  return store;
}

export const theme = createPersistedStore('theme', 'light');
```

## Best Practices

- **Organization**: เก็บ stores ใน `src/lib/stores/`
- **Custom Stores**: เพิ่ม methods สำหรับ complex logic
- **Derived Stores**: ใช้สำหรับ computed values
- **Persistence**: ใช้ localStorage สำหรับ persistent data
- **Unsubscribe**: Cleanup subscriptions ใน onDestroy

## Summary

Store types:
- **Writable**: Read and write
- **Readable**: Read-only
- **Derived**: Computed from other stores
- **Custom**: Extended with methods
- **Persistence**: LocalStorage integration
