# Reactivity

## What is Reactivity

SolidJS ใช้ fine-grained reactivity:
- **Automatic Tracking** - automatic dependency tracking
- **Minimal Updates** - minimal DOM updates
- **No Virtual DOM** - no virtual DOM overhead

## Reactivity Model

```typescript
import { createSignal, createEffect } from 'solid-js';

const [count, setCount] = createSignal(0);

createEffect(() => {
  console.log(count());
});
```

## Reactivity Benefits

- **Performance** - faster than virtual DOM
- **Efficiency** - efficient updates
- **Simplicity** - simple mental model
