# Performance

## Performance Tips

- **Use Signals** - ใช้ signals สำหรับ reactivity
- **Avoid Re-renders** - หลีกเลี่ยง unnecessary re-renders
- **Memoization** - ใช้ memoization สำหรับ expensive computations

## Optimization

### Signals

```typescript
import { createSignal, createMemo } from 'solid-js';

const [count, setCount] = createSignal(0);
const doubled = createMemo(() => count() * 2);
```

### Lazy Evaluation

```typescript
import { createLazy } from 'solid-js';

const HeavyComponent = createLazy(() => import('./Heavy'));
```
