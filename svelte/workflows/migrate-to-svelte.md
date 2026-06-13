---
description: Migrate จาก frameworks อื่นมาเป็น Svelte
---

## Goal

Migrate components จาก React/Vue/Angular มาเป็น Svelte

## From React

### Component Migration

**React:**
```jsx
function Counter({ initial = 0 }) {
  const [count, setCount] = useState(initial);
  
  useEffect(() => {
    document.title = count;
  }, [count]);
  
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}
```

**Svelte:**
```svelte
<script>
  export let initial = 0;
  let count = initial;
  
  $: document.title = count;
</script>

<button on:click={() => count += 1}>{count}</button>
```

### Mapping Table

| React | Svelte |
|-------|--------|
| `useState` | `let` variable |
| `useEffect` | `$:` reactive statement / `onMount` |
| `useMemo` | `$:` derived value |
| `useCallback` | Function declaration |
| `props` | `export let` |
| `className` | `class` |

## From Vue

### Component Migration

**Vue:**
```vue
<template>
  <div v-if="show">Hello</div>
  <button @click="toggle">Toggle</button>
</template>

<script>
export default {
  data() {
    return { show: true };
  },
  methods: {
    toggle() {
      this.show = !this.show;
    }
  }
};
</script>
```

**Svelte:**
```svelte
<script>
  let show = true;
  
  function toggle() {
    show = !show;
  }
</script>

{#if show}
  <div>Hello</div>
{/if}

<button on:click={toggle}>Toggle</button>
```

### Mapping Table

| Vue | Svelte |
|-----|--------|
| `data()` | `let` variables |
| `computed` | `$:` reactive statement |
| `watch` | `$:` reactive statement |
| `v-if` | `{#if}` |
| `v-for` | `{#each}` |
| `v-bind` | `bind:` |
| `@click` | `on:click` |

## From Angular

### Component Migration

**Angular:**
```typescript
@Component({
  selector: 'app-counter',
  template: `<button (click)="increment()">{{count}}</button>`
})
export class CounterComponent {
  count = 0;
  
  increment() {
    this.count++;
  }
}
```

**Svelte:**
```svelte
<script>
  let count = 0;
  
  function increment() {
    count += 1;
  }
</script>

<button on:click={increment}>{count}</button>
```

### Mapping Table

| Angular | Svelte |
|---------|--------|
| `@Input()` | `export let` |
| `@Output()` | `createEventDispatcher` |
| `ngOnInit` | `onMount` |
| `ngOnDestroy` | `onDestroy` |
| `*ngIf` | `{#if}` |
| `*ngFor` | `{#each}` |

## Migration Strategy

### 1. Start Small

- Migrate 1 component ในเวลา
- Test อย่างละเอียด
- Gradual migration

### 2. Shared State

- ใช้ Svelte stores แทน Redux/Vuex
- Migrate state management ก่อน

### 3. Routing

- ใช้ `svelte-routing` หรือ migrate ไป SvelteKit

### 4. Build Tools

- Setup Vite สำหรับ Svelte
- Migrate build configuration

## Common Challenges

### Lifecycle

```javascript
// React
useEffect(() => {
  // mount
  return () => {
    // unmount
  };
}, []);

// Svelte
import { onMount, onDestroy } from 'svelte';

onMount(() => {
  // mount
});

onDestroy(() => {
  // unmount
});
```

### Event Handling

```javascript
// React
<button onClick={handleClick} />

// Svelte
<button on:click={handleClick} />
```

## Testing After Migration

- Test functionality
- Check performance
- Verify accessibility
- Run automated tests

## Summary

Migration steps:
1. Map concepts ระหว่าง frameworks
2. Start small, migrate gradually
3. Use Svelte stores สำหรับ state
4. Setup proper build tools
5. Test thoroughly
6. Verify performance and accessibility
