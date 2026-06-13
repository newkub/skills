# Effects

## What are Effects

Effects คือ side effects:
- **createEffect** - create side effects
- **onMount** - on mount callbacks
- **onCleanup** - cleanup callbacks

## Using Effects

```typescript
import { createEffect, onMount, onCleanup } from 'solid-js';

createEffect(() => {
  console.log(count());
});

onMount(() => {
  console.log('mounted');
});

onCleanup(() => {
  console.log('cleanup');
});
```

## Effect Features

- **Automatic Cleanup** - automatic cleanup
- **Dependency Tracking** - automatic dependency tracking
- **Composable** - composable effects
