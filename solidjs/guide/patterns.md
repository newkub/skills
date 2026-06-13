# Patterns

## Common Patterns

## Signal Pattern

```typescript
import { createSignal } from 'solid-js';

const [count, setCount] = createSignal(0);
```

## Effect Pattern

```typescript
import { createEffect } from 'solid-js';

createEffect(() => {
  console.log(count());
});
```

## Component Pattern

```typescript
import { createSignal, Component } from 'solid-js';

const Counter: Component = () => {
  const [count, setCount] = createSignal(0);
  return <div onClick={() => setCount(count() + 1)}>{count()}</div>;
};
```
