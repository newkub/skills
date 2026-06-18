# Best Practices

## Reactivity

```svelte
<script>
  let count = 0;

  // Auto-reactive
  $: doubled = count * 2;

  // Reactive statement
  $: console.log('Count:', count);
</script>
```

## Stores

```javascript
import { writable, derived } from 'svelte/store';

export const count = writable(0);
export const doubled = derived(count, $count => $count * 2);
```

## Component Props

```svelte
<script>
  export let name: string;
  export let age: number = 0;
</script>
```

## Event Handling

```svelte
<script>
  function handleClick(event) {
    console.log(event.target);
  }
</script>

<button on:click={handleClick}>
  Click
</button>
```

## Lifecycle

| Hook | Description |
|------|-------------|
| onMount | After render |
| onDestroy | Before unmount |
| beforeUpdate | Before render |
| afterUpdate | After render |