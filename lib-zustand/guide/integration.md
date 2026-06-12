# Integration

## Purpose

แนวทางการรวม Zustand กับ libraries และ tools อื่นๆ

## React Integration

### Basic Usage

```typescript
// store.ts
import { create } from "zustand";

export const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));

// App.tsx
import { useStore } from "./store";

function Counter() {
  const count = useStore((state) => state.count);
  return <div>{count}</div>;
}
```

### With TypeScript

```typescript
import { create } from "zustand";

interface StoreState {
  count: number;
  increment: () => void;
}

export const useStore = create<StoreState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));
```

## Framework Integration

### Next.js (App Router)

```typescript
// app/store.ts
"use client";

import { create } from "zustand";

export const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));

// app/page.tsx
"use client";

import { useStore } from "./store";

export default function Page() {
  const count = useStore((state) => state.count);
  return <div>{count}</div>;
}
```

### Vite

```typescript
// src/store.ts
import { create } from "zustand";

export const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));
```

### Remix

```typescript
// app/store.ts
import { create } from "zustand";

export const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));
```

## DevTools Integration

### Setup

```typescript
import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useStore = create(
  devtools(
    (set) => ({
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 })),
    }),
    { name: "Counter" }
  )
);
```

### Time Travel Debugging

```typescript
// Actions are logged in Redux DevTools
// You can time-travel, rewind, and inspect state
```

## Persistence Integration

### localStorage

```typescript
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create(
  persist(
    (set) => ({
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 })),
    }),
    { name: "counter-storage" }
  )
);
```

### sessionStorage

```typescript
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useStore = create(
  persist(
    (set) => ({
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 })),
    }),
    {
      name: "session-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
```

### AsyncStorage (React Native)

```typescript
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useStore = create(
  persist(
    (set) => ({
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 })),
    }),
    {
      name: "async-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
```

### Custom Storage

```typescript
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface MyStorage {
  getItem: (name: string) => string | null;
  setItem: (name: string, value: string) => void;
  removeItem: (name: string) => void;
}

const customStorage: MyStorage = {
  getItem: (name) => {
    // Custom implementation
    return cookies.get(name) || null;
  },
  setItem: (name, value) => {
    cookies.set(name, value);
  },
  removeItem: (name) => {
    cookies.remove(name);
  },
};

export const useStore = create(
  persist(
    (set) => ({
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 })),
    }),
    {
      name: "cookie-storage",
      storage: createJSONStorage(() => customStorage),
    }
  )
);
```

## Immer Integration

```typescript
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const useStore = create(
  immer((set) => ({
    nested: { deep: { value: 0 } },
    increment: () =>
      set((draft) => {
        draft.nested.deep.value += 1;
      }),
  }))
);
```

## Middleware Chaining

```typescript
import { create } from "zustand";
import { devtools, persist, subscribeWithSelector } from "zustand/middleware";

export const useStore = create(
  devtools(
    persist(
      subscribeWithSelector((set, get) => ({
        count: 0,
        increment: () => set((state) => ({ count: state.count + 1 })),
      }))
    ),
    { name: "Counter" }
  )
);

// Now you can subscribe to specific state changes
useStore.subscribe(
  (state) => state.count,
  (count, previousCount) => {
    console.log(`Count changed: ${previousCount} → ${count}`);
  }
);
```

## Testing Integration

### Vitest

```typescript
import { create } from "zustand";

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));

describe("Store", () => {
  it("should increment", () => {
    useStore.setState({ count: 0 });
    useStore.getState().increment();
    expect(useStore.getState().count).toBe(1);
  });
});
```

### Testing Library

```typescript
import { render, screen } from "@testing-library/react";
import { useStore } from "./store";

function TestComponent() {
  const count = useStore((state) => state.count);
  return <div>{count}</div>;
}

it("renders count", () => {
  render(<TestComponent />);
  expect(screen.getByText("0")).toBeInTheDocument();
});
```

## Middleware Options Summary

| Middleware | Import | Use Case |
|------------|--------|----------|
| `devtools` | `zustand/middleware` | Redux DevTools |
| `persist` | `zustand/middleware` | localStorage/sessionStorage |
| `immer` | `zustand/middleware/immer` | Immutable updates |
| `subscribeWithSelector` | `zustand/middleware` | Enhanced subscriptions |
| `redux` | `zustand/middleware/redux` | Redux-like actions |