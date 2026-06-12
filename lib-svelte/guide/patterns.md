# Patterns

## ภาพรวม

Design patterns สำหรับ Svelte applications

## Component Patterns

### Container/Presentational

**Container Component:**
```svelte
<script>
  import { onMount } from 'svelte';
  import Presentational from './Presentational.svelte';
  
  let data;
  
  onMount(async () => {
    data = await fetchData();
  });
</script>

<Presentational {data} />
```

**Presentational Component:**
```svelte
<script>
  export let data;
</script>

<div>{data}</div>
```

### Compound Components

```svelte
<!-- Tabs.svelte -->
<script>
  export let activeTab;
</script>

<div class="tabs">
  <slot />
</div>

<!-- Tab.svelte -->
<script>
  export let id;
  export let activeTab;
</script>

<button class:active={id === activeTab}>
  <slot />
</button>
```

## State Patterns

### Store Pattern

```javascript
// stores/user.js
import { writable } from 'svelte/store';

export const user = writable(null);

export function login(email, password) {
  // login logic
  user.set({ email });
}

export function logout() {
  user.set(null);
}
```

### Context Pattern

```svelte
<!-- Parent.svelte -->
<script>
  import { setContext } from 'svelte';

  setContext('theme', 'dark');
</script>

<slot />

<!-- Child.svelte -->
<script>
  import { getContext } from 'svelte';

  const theme = getContext('theme');
</script>
```

## Data Flow Patterns

### Props Down, Events Up

```svelte
<!-- Parent.svelte -->
<script>
  let count = 0;
  
  function handleIncrement() {
    count += 1;
  }
</script>

<Child {count} on:increment={handleIncrement} />

<!-- Child.svelte -->
<script>
  export let count;
  
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  
  function increment() {
    dispatch('increment');
  }
</script>

<button on:click={increment}>{count}</button>
```

### Two-way Binding

```svelte
<!-- Parent.svelte -->
<script>
  let value = '';
</script>

<Child bind:value={value} />

<!-- Child.svelte -->
<script>
  export let value;
</script>

<input bind:value={value} />
```

## Performance Patterns

### Lazy Loading

```javascript
const LazyComponent = import('./HeavyComponent.svelte');
```

### Memoization

```javascript
$: expensiveValue = useMemo(() => {
  return heavyCalculation();
}, [dependency]);
```

## Composition Patterns

### Slots

```svelte
<!-- Layout.svelte -->
<div class="layout">
  <header>
    <slot name="header" />
  </header>
  <main>
    <slot />
  </main>
  <footer>
    <slot name="footer" />
  </footer>
</div>
```

### Render Props

```svelte
<script>
  export let render;
  export let data;
</script>

{#if render}
  {@html render(data)}
{/if}
```

## Error Handling Patterns

### Error Boundaries

```svelte
<script>
  let error = null;
  
  try {
    // risky code
  } catch (e) {
    error = e;
  }
</script>

{#if error}
  <ErrorDisplay {error} />
{:else}
  <slot />
{/if}
```

## Testing Patterns

### Testable Components

```svelte
<script>
  export let data;
  export let onAction;
  
  function handleClick() {
    onAction(data);
  }
</script>

<button on:click={handleClick}>Action</button>
```

## Summary

Common patterns:
- **Component**: Container/Presentational, Compound
- **State**: Store, Context
- **Data Flow**: Props down/events up, Two-way binding
- **Performance**: Lazy loading, Memoization
- **Composition**: Slots, Render props
- **Error Handling**: Error boundaries
- **Testing**: Testable components
