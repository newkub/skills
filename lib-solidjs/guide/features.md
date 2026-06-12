# All Features

## Signals

```tsx
import { createSignal } from 'solid-js';

const [count, setCount] = createSignal(0);
const [name, setName] = createSignal('John');
```

## Stores

```tsx
import { createStore } from 'solid-js/store';

const [state, setState] = createStore({
  user: { name: '', email: '' },
  posts: []
});

setState('user', 'name', 'Jane');
setState('posts', (posts) => [...posts, newPost]);
```

## Effects

```tsx
import { createEffect } from 'solid-js';

createEffect(() => {
  console.log('Count changed:', count());
});
```

## Memos

```tsx
import { createMemo } from 'solid-js';

const doubled = createMemo(() => count() * 2);
const filtered = createMemo(() =>
  items().filter(item => item.active)
);
```

## Context

```tsx
import { createContext, useContext } from 'solid-js';

const CountContext = createContext(0);

function App() {
  return (
    <CountContext.Provider value={5}>
      <Child />
    </CountContext.Provider>
  );
}

function Child() {
  const count = useContext(CountContext);
  return <div>{count}</div>;
}
```

## Resources

```tsx
import { createResource } from 'solid-js';

const [data] = createResource(async () => {
  return fetch('/api/data').then(res => res.json());
});
```