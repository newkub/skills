# All Features

ฟีเจอร์ทั้งหมดของ SolidJS สำหรับสร้าง reactive applications

## Feature Summary

| Feature | Description | Use Case |
|---------|-------------|----------|
| Signals | Reactive state ด้วย getter/setter pattern | State management พื้นฐาน |
| Stores | Reactive state สำหรับ objects ที่ซับซ้อน | State ที่มีหลาย levels |
| Effects | Side effects ที่ทำงานเมื่อ dependencies เปลี่ยน | API calls, subscriptions |
| Memos | Computed values ที่ cache ไว้ | Derived state, calculations |
| Context | State sharing ระหว่าง components | Global state, theming |
| Resources | Async data fetching พร้อม loading states | API calls, data fetching |

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