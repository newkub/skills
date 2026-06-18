# Quick Start

## First Component

```svelte
<script>
  let count = 0;

  function increment() {
    count += 1;
  }
</script>

<button on:click={increment}>
  Count: {count}
</button>
```

## App Entry

```svelte
<!-- App.svelte -->
<script>
  import Counter from './Counter.svelte';
</script>

<Counter />
```

## Run

```bash
bun run dev
```

## Next Steps

- [Key Concepts](key-concept.md)
- [Best Practices](best-practices.md)
- [Configuration](configuration.md)