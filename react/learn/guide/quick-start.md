# Quick Start

## First Component

```tsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default Counter;
```

## App Entry

```tsx
// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter from './Counter';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>
);
```

## Run

```bash
bun run dev
```

## Next Steps

- [Key Concepts](key-concept.md)
- [Best Practices](best-practices.md)
- [Configuration](configuration.md)