# Signals

## What are Signals

Signals คือ reactive state management:
- **Fine-grained** - fine-grained reactivity
- **No Virtual DOM** - direct DOM updates
- **Type-safe** - TypeScript support

## Creating Signals

```typescript
import { createSignal } from 'solid-js';

const [count, setCount] = createSignal(0);
```

## Signal Features

- **Getter/Setter** - getter/setter pattern
- **Derived Signals** - derived signals with createMemo
- **Effects** - side effects with createEffect
