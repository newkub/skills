# Components

## What are Components

Components คือ UI building blocks:
- **Functional** - functional components
- **JSX** - JSX syntax
- **Type-safe** - TypeScript support

## Creating Components

```typescript
import { Component } from 'solid-js';

const Counter: Component = () => {
  const [count, setCount] = createSignal(0);
  return <div onClick={() => setCount(count() + 1)}>{count()}</div>;
};
```

## Component Features

- **Props** - component props
- **Slots** - component slots
- **Context** - component context
