# Best Practices

## Reactivity Pattern

```tsx
// Use functions to access signals
const [count, setCount] = createSignal(0);

// Access with ()
console.log(count());

// Update
setCount(c => c + 1);
```

## Derived State

```tsx
import { createMemo } from 'solid-js';

const [count, setCount] = createSignal(0);
const doubled = createMemo(() => count() * 2);

// Use in JSX
<p>Doubled: {doubled()}</p>
```

## Store Pattern

```tsx
import { createStore } from 'solid-js/store';

const [state, setState] = createStore({
  user: { name: '', age: 0 },
  loading: false
});

// Update nested
setState('user', 'name', 'John');
```

## Control Flow

| Component | Use Case |
|-----------|----------|
| `<Show>` | Conditional rendering |
| `<For>` | List rendering |
| `<Switch>`/`<Match>` | Multiple conditions |
| `<Dynamic>` | Dynamic component |