# How It Works

## Overview

Zustand ทำงานโดยใช้ React hooks และ subscription model เพื่อให้ state management ที่เรียบง่ายและมีประสิทธิภาพ

## Core Flow

```
User Action
     │
     ▼
┌─────────────────────────────────────────┐
│            set() Function                │
│                                         │
│  set((state) => ({ count: state.count + 1 }))
│                                         │
└─────────────────────────────────────────┘
     │
     ▼
┌─────────────────────────────────────────┐
│            State Update                 │
│                                         │
│  { count: 1, user: null }               │
│              ↓                          │
│  { count: 2, user: null }               │
└─────────────────────────────────────────┘
     │
     ▼
┌─────────────────────────────────────────┐
│         Notify Subscribers              │
│                                         │
│  listeners.forEach(listener =>          │
│    listener(state))                     │
└─────────────────────────────────────────┘
     │
     ▼
┌─────────────────────────────────────────┐
│         Re-render Components            │
│                                         │
│  const count = useStore(selectCount)    │
└─────────────────────────────────────────┘
```

## Internal Architecture

### Store Creation

```typescript
// Simplified Zustand create()
function create(createState) {
  let state;                    // Current state
  const listeners = new Set();   // Subscription set

  const set = (partial) => {
    state = typeof partial === "function"
      ? partial(state)
      : partial;
    listeners.forEach((l) => l(state)); // Notify all
  };

  const get = () => state;

  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener); // Unsubscribe
  };

  const useStore = (selector) => {
    const [snapshot, setSnapshot] = useState(() =>
      selector(state)
    );

    useEffect(() => {
      let currentState;
      const unsubscribe = subscribe((s) => {
        currentState = selector(s);
        setSnapshot(currentState);
      });
      return unsubscribe;
    }, []);

    return snapshot;
  };

  // Initialize state
  state = createState(set, get, { subscribe });

  return { get, set, subscribe, useStore };
}
```

### Subscription Model

```typescript
// Component subscribes to store
const Component = () => {
  const count = useStore((state) => state.count);
  //                    ↑
  //              Selector function
};
```

### React Integration

```
Component                     Store
    │                           │
    │── useStore(select) ────►  │ Subscribe
    │                           │
    │◄── state snapshot ──────  │ Return value
    │                           │
    │     (re-render)           │
    │◄── new state ──────────  │ Notify
    │                           │
    │── (unmount) ───────────►  │ Unsubscribe
```

## Middleware Pipeline

```
create(
  persist(                    // Middleware 2
    devtools(                 // Middleware 1
      (set, get) => ({        // Store creator
        count: 0,
        increment: () => set(s => ({ count: s.count + 1 }))
      })
    )
  )
)

     │
     ▼
┌─────────────────────────────────────────────┐
│           Middleware Chain                  │
│                                             │
│   persist → devtools → storeCreator        │
│       │          │         │               │
│       └──────────┴─────────┘               │
│                  │                          │
│                  ▼                          │
│            Final Store                      │
└─────────────────────────────────────────────┘
```

## State Updates

### Synchronous Update

```typescript
// Direct update
set({ count: 1 });

// Function update
set((state) => ({ count: state.count + 1 }));
```

### Batch Updates

```typescript
// Multiple updates in one render
set((state) => ({
  a: state.a + 1,
  b: state.b + 1,
}));
// Re-renders only once
```

### Immer Middleware

```typescript
import { immer } from "zustand/middleware/immer";

const useStore = create(
  immer((set) => ({
    nested: { deep: { value: 0 } },
    update: () =>
      set((draft) => {
        draft.nested.deep.value += 1; // Mutate directly
      }),
  }))
);
```

## DevTools Integration

```
┌────────────────┐     ┌──────────────────┐
│   Browser      │     │   Redux DevTools  │
│   DevTools     │────►│   (Extension)     │
└────────────────┘     └──────────────────┘
        │                       │
        │                       ▼
        │              ┌──────────────────┐
        │              │   Time Travel    │
        │              │   State History  │
        │              └──────────────────┘
        │
        ▼
┌─────────────────────────────────────────────┐
│            devtools middleware              │
│                                             │
│  devtools((set, get) => ({                  │
│    count: 0,                                │
│    increment: () => set(s => ({             │
│      count: s.count + 1                     │
│    }))                                      │
│  }), { name: "Counter" })                   │
└─────────────────────────────────────────────┘
```

## Persist Middleware

```
┌─────────────────────────────────────────────┐
│            persist middleware              │
│                                             │
│  persist(                                   │
│    (set, get) => ({ count: 0 }),            │
│    {                                        │
│      name: "store",      // Storage key     │
│      storage: localStorage,                  │
│      partialize: (s) => ({ count: s.count })│
│    }                                        │
│  )                                          │
└─────────────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────────────┐
│            localStorage                     │
│                                             │
│  { "store": { "state": { "count": 42 } } }  │
└─────────────────────────────────────────────┘
```