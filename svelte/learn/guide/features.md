# All Features

## Reactivity

```svelte
<script>
  let count = 0;
  $: doubled = count * 2;
</script>

<p>{count} x 2 = {doubled}</p>
```

## Stores

```javascript
import { writable, derived, readable } from 'svelte/store';

const count = writable(0);
const doubled = derived(count, $c => $c * 2);

const time = readable(new Date(), (set) => {
  const interval = setInterval(() => set(new Date()), 1000);
  return () => clearInterval(interval);
});
```

## Conditional

```svelte
{#if count > 0}
  <p>Positive</p>
{:else if count < 0}
  <p>Negative</p>
{:else}
  <p>Zero</p>
{/if}
```

## Loops

```svelte
{#each items as item, index}
  <p>{index + 1}: {item.name}</p>
{/each}
```

## Await

```svelte
{#await promise}
  <p>Loading...</p>
{:then data}
  <p>{data}</p>
{:catch error}
  <p>{error.message}</p>
{/await}
```

## Bindings

```svelte
<script>
  let value = '';
</script>

<input bind:value />
<p>{value}</p>
```