# Migration

## ภาพรวม

วิธีการ migrate จาก frameworks อื่นมาเป็น Svelte

## From React

### Concepts Mapping

| React | Svelte |
|-------|--------|
| `useState` | `let` variable |
| `useEffect` | `$:` reactive statement |
| `useMemo` | `$:` derived value |
| `useCallback` | Function declaration |
| Props | `export let` |

### Example

**React:**
```jsx
function Counter() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    document.title = count;
  }, [count]);
  
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}
```

**Svelte:**
```svelte
<script>
  let count = 0;
  
  $: document.title = count;
</script>

<button on:click={() => count += 1}>{count}</button>
```

## From Vue

### Concepts Mapping

| Vue | Svelte |
|-----|--------|
| `data()` | `let` variables |
| `computed` | `$:` reactive statement |
| `watch` | `$:` reactive statement |
| `v-if` | `{#if}` |
| `v-for` | `{#each}` |
| `v-bind` | `bind:` |

### Example

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

## From Angular

### Concepts Mapping

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

### Lifecycle Differences

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

## Tools

### Automatic Migration

ไม่มี tool สำหรับ automatic migration ต้อง migrate manually

### Code Review

- Review component ทีละอัน
- Test functionality
- Check performance

## Summary

Migration tips:
- Map concepts ระหว่าง frameworks
- Start small, migrate gradually
- Use Svelte stores สำหรับ state
- Setup proper build tools
- Test thoroughly
