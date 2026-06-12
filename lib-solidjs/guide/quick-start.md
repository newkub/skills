# Quick Start

## First Component

```tsx
import { createSignal } from 'solid-js';

function Counter() {
  const [count, setCount] = createSignal(0);

  return (
    <div>
      <p>Count: {count()}</p>
      <button onClick={() => setCount(c => c + 1)}>
        Increment
      </button>
    </div>
  );
}

export default Counter;
```

## App Entry

```tsx
// src/index.tsx
import { render } from 'solid-js/web';
import Counter from './Counter';

render(() => <Counter />, document.getElementById('root')!);
```

## Run

```bash
npm run dev
```

## Next Steps

- [Key Concepts](key-concept.md)
- [Best Practices](best-practices.md)
- [Configuration](configuration.md)