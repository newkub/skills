# Architecture

## Purpose

อธิบายโครงสร้างภายในของ Zustand และหลักการทำงานหลัก

## Core Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      create()                               │
│                                                              │
│  ┌───────────────────────────────────────────────────────┐  │
│  │                  Store Creator                         │  │
│  │  (set, get, api) => initialState + actions             │  │
│  └───────────────────────────────────────────────────────┘  │
│                         │                                   │
│                         ▼                                   │
│  ┌───────────────────────────────────────────────────────┐  │
│  │                    Store                               │  │
│  │  ├── State (immutable snapshot)                       │  │
│  │  ├── set() (update state)                             │  │
│  │  ├── get() (read state)                               │  │
│  │  ├── subscribe() (listen changes)                      │  │
│  │  └── useStore() (React hook)                          │  │
│  └───────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

## Store Creation Flow

### Step 1: Define State & Actions

```typescript
const initialState = {
  count: 0,
  user: null,
};

const actions = (set, get) => ({
  increment: () => set((state) => ({ count: state.count + 1 })),
  setUser: (user) => set({ user }),
  getCount: () => get().count,
});
```

### Step 2: Create Store

```typescript
const storeCreator = (set, get, api) => ({
  ...initialState,
  ...actions(set, get),
});

const useStore = create(storeCreator);
```

### Step 3: Connect to React

```typescript
function Component() {
  const count = useStore((state) => state.count);
  //              ↑
  //         Selector function
  return <div>{count}</div>;
}
```

## Internal Implementation

### Simplified Store

```typescript
function create(createState) {
  let state;                           // Current state
  const listeners = new Set();         // Subscribers

  const set = (update) => {
    const nextState = typeof update === "function"
      ? update(state)
      : update;
    state = Object.assign({}, state, nextState);
    listeners.forEach((l) => l(state)); // Notify all
  };

  const get = () => state;

  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener); // Cleanup
  };

  const useStore = (selector) => {
    const [snapshot, setSnapshot] = useState(() =>
      selector(state)
    );

    useEffect(() => {
      let callback = () => {
        const next = selector(state);
        setSnapshot(next);
      };
      const unsubscribe = subscribe(callback);
      return unsubscribe;
    }, []);

    return snapshot;
  };

  // Initialize
  state = createState(set, get, { subscribe });

  return { get, set, subscribe, useStore };
}
```

### Hook Implementation

```typescript
const useStore = (selector) => {
  const store = useRef(null);
  const [slice, setSlice] = useState(() =>
    selector(store.current.getState())
  );

  useEffect(() => {
    // Subscribe to store
    const unsubscribe = store.current.subscribe(
      (state) => {
        const nextSlice = selector(state);
        setSlice(nextSlice);
      }
    );

    return unsubscribe;
  }, []);

  return slice;
};
```

## Middleware Pipeline

```
┌─────────────────────────────────────────────────────────────┐
│                    Middleware Stack                         │
│                                                              │
│  ┌─────────┐    ┌─────────┐    ┌─────────┐                 │
│  │ devtools │───►│ persist  │───►│  store  │                 │
│  └─────────┘    └─────────┘    └─────────┘                 │
│       │               │                                       │
│       ▼               ▼                                       │
│  [Wrap action]  [Save to storage]  [Actual update]         │
└─────────────────────────────────────────────────────────────┘
```

### Middleware Structure

```typescript
function devtools(storeCreator) {
  return (set, get, api) => {
    // Wrap the original creator
    const wrappedSet = (...args) => {
      // Log to DevTools
      console.log("[DevTools]", ...args);
      return set(...args);
    };

    // Return wrapped store
    const store = storeCreator(wrappedSet, get, api);
    return {
      ...store,
      // Expose devtools API
      $$toDevTools: true,
    };
  };
}
```

## State Management

### Immutable Updates

```typescript
// Direct update
set({ count: 1 });

// Functional update (immutable)
set((state) => ({
  ...state,
  count: state.count + 1,
}));

// With Immer middleware
set((draft) => {
  draft.count += 1; // Mutate directly
});
```

### Selector Pattern

```typescript
// Primitive selector (memoized automatically)
const count = useStore((s) => s.count);

// Object selector (needs shallow)
const { count, user } = useStore(
  (s) => ({ count: s.count, user: s.user }),
  shallow
);

// Complex selector
const activeTodos = useStore((s) =>
  s.todos.filter((t) => !t.completed)
);
```

## React Integration Flow

```
Component                           Store
    │                                │
    │── useStore(selector) ──────►  │ Subscribe
    │                                │
    │◄── initial snapshot ──────   │ Return
    │                                │
    │    (render)                    │
    │                                │
    │    (user clicks)               │
    │                                │
    │── action() ───────────────►  │ set()
    │                                │
    │                                │ Update state
    │                                │
    │◄── notify subscribers ────   │ listeners
    │                                │
    │── selector(state) ────────►  │ Compute slice
    │                                │
    │◄── new snapshot ──────────   │
    │                                │
    │    (re-render)                 │
```

## Performance Optimization

### Subscription Model

```typescript
// Only re-render when selected slice changes
const count = useStore((s) => s.count);

// Batch updates (single re-render)
set((state) => ({
  a: state.a + 1,
  b: state.b + 1,
}));
```

### Selector Memoization

```typescript
// Selector is memoized by Zustand
const user = useStore((s) => s.user); // ✅ Fast

// Shallow compare for objects
const { a, b } = useStore(
  (s) => ({ a: s.a, b: s.b }),
  shallow // ✅ Prevents unnecessary re-renders
);
```

## Middleware Options Reference

| Middleware | Position | Purpose |
|------------|----------|---------|
| `devtools` | Outermost | Redux DevTools |
| `persist` | Middle | LocalStorage |
| `subscribeWithSelector` | Inner | Enhanced subs |
| `immer` | Innermost | Immutable updates |
| `redux` | Inner | Redux actions |