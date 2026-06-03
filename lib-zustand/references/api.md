# API Reference

## create()

Creates a new Zustand store.

```typescript
import { create } from "zustand";

const useStore = create<StoreState>()((set, get, api) => ({
  // Initial state
  count: 0,
  // Actions
  increment: () => set((state) => ({ count: state.count + 1 })),
}));
```

## Store Methods

### set()

Updates the store state.

```typescript
// Object update
set({ count: 1 });

// Functional update
set((state) => ({ count: state.count + 1 }));
```

### get()

Returns the current state.

```typescript
const count = get().count;
```

### subscribe()

Subscribes to state changes.

```typescript
const unsubscribe = useStore.subscribe(
  (state) => state.count,
  (count, prevCount) => {
    console.log(`Count changed: ${prevCount} → ${count}`);
  }
);

// Unsubscribe
unsubscribe();
```

### setState()

Updates state directly.

```typescript
useStore.setState({ count: 42 });
```

### getState()

Gets current state.

```typescript
const state = useStore.getState();
```

## Middleware API

### devtools

Redux DevTools integration.

```typescript
import { devtools } from "zustand/middleware";

const useStore = create(
  devtools((set) => ({
    count: 0,
    increment: () => set((s) => ({ count: s.count + 1 })),
  }), { name: "Counter", enabled: true })
);
```

**Options:**

| Option | Type | Description |
|--------|------|-------------|
| `name` | `string` | Store name in DevTools |
| `enabled` | `boolean` | Enable/disable DevTools |
| `actionTypeProperty` | `string` | Action type property |

### persist

LocalStorage/sessionStorage persistence.

```typescript
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set) => ({
      count: 0,
      increment: () => set((s) => ({ count: s.count + 1 })),
    }),
    {
      name: "storage-key",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ count: state.count }),
      version: 1,
      migrate: (persistedState, version) => {},
      onRehydrateStorage: () => (state) => {},
    }
  )
);
```

**Options:**

| Option | Type | Description |
|--------|------|-------------|
| `name` | `string` | Storage key |
| `storage` | `StorageApi` | Storage adapter |
| `partialize` | `(state) => Partial<State>` | Control what to persist |
| `version` | `number` | Migration version |
| `migrate` | `(persisted, version) => state` | Migration function |
| `onRehydrateStorage` | `(state) => (state?) => void` | Post-hydration callback |

### createJSONStorage

Creates JSON storage adapter.

```typescript
import { createJSONStorage } from "zustand/middleware";

const storage = createJSONStorage(() => sessionStorage);
```

### immer

Immer middleware for immutable updates.

```typescript
import { immer } from "zustand/middleware/immer";

const useStore = create(
  immer((set) => ({
    nested: { value: 0 },
    update: () => set((draft) => {
      draft.nested.value += 1;
    }),
  }))
);
```

### subscribeWithSelector

Enhanced subscription with selectors.

```typescript
import { subscribeWithSelector } from "zustand/middleware";

const useStore = create(
  subscribeWithSelector((set) => ({
    count: 0,
    increment: () => set((s) => ({ count: s.count + 1 })),
  }))
);

// Subscribe to specific state
useStore.subscribe(
  (state) => state.count,
  (count) => console.log(count)
);
```

### redux

Redux-like actions middleware.

```typescript
import { redux } from "zustand/middleware/redux";

const useStore = create(
  redux(
    (set) => ({ count: 0 }),
    {
      increment: (by = 1) => set((s) => ({ count: s.count + by })),
      decrement: (by = 1) => set((s) => ({ count: s.count - by })),
    }
  )
);

// Usage
useStore.dispatch({ type: "increment", payload: 5 });
```

## React Hooks

### useStore

Access store state and actions.

```typescript
const count = useStore((state) => state.count);
const increment = useStore((state) => state.increment);
```

### useShallow

Shallow equality comparison for objects.

```typescript
import { useShallow } from "zustand/react/shallow";

const { count, user } = useStore(
  useShallow((state) => ({ count: state.count, user: state.user }))
);
```

## TypeScript Types

### StoreCreator

```typescript
type StoreCreator<T extends State> = (
  set: SetState<T>,
  get: GetState<T>,
  api: StoreApi<T>
) => T;
```

### SetState

```typescript
type SetState<T extends State> = (
  partial: Partial<T> | ((state: T) => Partial<T>)
) => void;
```

### GetState

```typescript
type GetState<T extends State> = () => T;
```

### StoreApi

```typescript
interface StoreApi<T extends State> {
  setState: SetState<T>;
  getState: GetState<T>;
  subscribe: (listener: (state: T, prevState: T) => void) => () => void;
  destroy: () => void;
}
```

### StateCreator

```typescript
type StateCreator<T extends State> = (
  set: SetState<T>,
  get: GetState<T>,
  api: StoreApi<T>
) => T;
```