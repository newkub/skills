---
description: ใช้งาน Svelte stores สำหรับ state management
---

## Goal

ใช้งาน Svelte stores สำหรับ global state management

## Steps

### 1. Create Store

สร้างไฟล์ store ใน `src/lib/stores/`:

```javascript
// src/lib/stores/user.js
import { writable } from 'svelte/store';

export const user = writable(null);

export function setUser(userData) {
  user.set(userData);
}

export function clearUser() {
  user.set(null);
}
```

### 2. Use Store in Component

```svelte
<script>
  import { user } from '../lib/stores/user.js';
</script>

{#if $user}
  <p>Welcome, {$user.name}</p>
{:else}
  <p>Please login</p>
{/if}
```

### 3. Update Store

```svelte
<script>
  import { setUser } from '../lib/stores/user.js';
  
  function login() {
    setUser({ name: 'John', email: 'john@example.com' });
  }
</script>

<button on:click={login}>Login</button>
```

## Store Types

### Writable Store

```javascript
import { writable } from 'svelte/store';

const count = writable(0);

// Methods
count.set(1);
count.update(n => n + 1);
count.subscribe(value => console.log(value));
```

### Readable Store

```javascript
import { readable } from 'svelte/store';

const time = readable(new Date(), set => {
  const interval = setInterval(() => set(new Date()), 1000);
  return () => clearInterval(interval);
});
```

### Derived Store

```javascript
import { derived } from 'svelte/store';

const doubled = derived(count, $count => $count * 2);

// Multiple sources
const total = derived([count, price], ([$count, $price]) => $count * $price);
```

## Custom Store with Actions

```javascript
// src/lib/stores/counter.js
import { writable } from 'svelte/store';

function createCounter() {
  const { subscribe, set, update } = writable(0);
  
  return {
    subscribe,
    increment: () => update(n => n + 1),
    decrement: () => update(n => n - 1),
    reset: () => set(0)
  };
}

export const counter = createCounter();
```

### Use Custom Store

```svelte
<script>
  import { counter } from '../lib/stores/counter.js';
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
- **Actions**: เพิ่ม methods ใน custom stores
- **Persistence**: ใช้ localStorage สำหรับ persistent stores
- **Derived**: ใช้ derived stores สำหรับ computed values
- **TypeScript**: Add types สำหรับ type safety

## Summary

ใช้งาน stores:
1. สร้าง writable/readable/derived stores
2. Subscribe ด้วย `$` prefix
3. Update ด้วย `set` หรือ `update`
4. สร้าง custom stores ด้วย actions
5. Persist ด้วย localStorage
6. ใช้ TypeScript สำหรับ type safety
