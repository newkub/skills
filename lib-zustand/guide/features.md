# All Features

## Core Features

### Store Creation

| Feature | Description | Example |
|---------|-------------|---------|
| `create()` | Create a new store | `create((set) => ({ count: 0 }))` |
| `createJSONBlob()` | Create store with JSON blob | `createJSONBlob((set) => ({ data: {} }))` |
| State | Initial state object | `{ count: 0, user: null }` |
| Actions | Functions to update state | `increment: () => set(s => ...)` |

### State Access

| Method | Description | Example |
|--------|-------------|---------|
| `useStore(selector)` | Select state slice | `useStore((s) => s.count)` |
| `useStore()` | Get entire store | `const store = useStore()` |
| `get()` | Get state outside component | `store.get()` |
| `shallow` | Shallow equality comparison | `useStore(selector, shallow)` |

### State Updates

| Method | Description | Example |
|--------|-------------|---------|
| `set(state)` | Update with object | `set({ count: 1 })` |
| `set(fn)` | Update with function | `set((s) => ({ count: s.count + 1 }))` |

## Middleware Features

### Built-in Middleware

| Middleware | Description | Import |
|------------|-------------|--------|
| `devtools` | Redux DevTools integration | `zustand/middleware` |
| `persist` | LocalStorage/sessionStorage persistence | `zustand/middleware` |
| `immer` | Immer for immutable updates | `zustand/middleware/immer` |
| `subscribeWithSelector` | Enhanced selectors | `zustand/middleware` |
| `redux` | Redux-like actions | `zustand/middleware/redux` |

### DevTools Middleware

```typescript
import { devtools } from "zustand/middleware";

const useStore = create(
  devtools((set) => ({
    count: 0,
    increment: () => set((s) => ({ count: s.count + 1 })),
  }), { name: "Counter" })
);
```

### Persist Middleware

```typescript
import { persist, createJSONStorage } from "zustand/middleware";

const useStore = create(
  persist(
    (set) => ({
      count: 0,
      increment: () => set((s) => ({ count: s.count + 1 })),
    }),
    {
      name: "counter-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ count: state.count }),
      version: 1,
      migrate: (persistedState, version) => {
        // Migration logic
      },
    }
  )
);
```

### Immer Middleware

```typescript
import { immer } from "zustand/middleware/immer";

const useStore = create(
  immer((set) => ({
    nested: { value: 0 },
    update: () =>
      set((draft) => {
        draft.nested.value += 1;
      }),
  }))
);
```

## Advanced Features

### Subscribe with Selector

```typescript
import { subscribeWithSelector } from "zustand/middleware";

const useStore = create(
  subscribeWithSelector((set) => ({
    count: 0,
    increment: () => set((s) => ({ count: s.count + 1 })),
  }))
);

// Subscribe to specific changes
useStore.subscribe(
  (state) => state.count,
  (count, prevCount) => {
    console.log(`Count changed: ${prevCount} → ${count}`);
  }
);
```

### Redux Middleware

```typescript
import { redux } from "zustand/middleware/redux";

const useStore = create(
  redux((set, get) => ({
    count: 0,
  }), {
    increment: (by = 1) => set(s => ({ count: s.count + by })),
  })
);

// Usage
const increment = useStore.getState().actions.increment;
increment(5);
```

### Middleware Combinations

```typescript
import { create } from "zustand";
import { devtools, persist, immer } from "zustand/middleware";

const useStore = create(
  devtools(
    persist(
      immer((set) => ({
        count: 0,
        increment: () =>
          set((draft) => {
            draft.count += 1;
          }),
      }))
    ),
    { name: "Counter" }
  )
);
```

## Store Patterns

### Slices Pattern

```typescript
const createCounterSlice = (set) => ({
  count: 0,
  increment: () => set((s) => ({ count: s.count + 1 })),
  decrement: () => set((s) => ({ count: s.count - 1 })),
});

const createUserSlice = (set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
});

// Combine slices
const useStore = create((...a) => ({
  ...createCounterSlice(...a),
  ...createUserSlice(...a),
}));
```

### Context Pattern

```typescript
import { createContext, useContext } from "react";

const StoreContext = createContext();

export const StoreProvider = ({ children }) => (
  <StoreContext.Provider value={useStore}>
    {children}
  </StoreContext.Provider>
);

export const useStoreContext = () => useContext(StoreContext);
```

## React Integration

### Basic Usage

```typescript
const count = useStore((state) => state.count);
```

### Multiple Selectors

```typescript
const { count, user } = useStore(
  (state) => ({ count: state.count, user: state.user }),
  shallow
);
```

### Subscribe Outside Component

```typescript
// Subscribe
const unsubscribe = useStore.subscribe(
  (state) => state.count,
  (count) => console.log(count)
);

// Unsubscribe
unsubscribe();
```

### DevTools React Component

```typescript
import { useDevtoolsBackend } from "zustand/react/devtools";

// In development
const devtools = useDevtoolsBackend(useStore);
```