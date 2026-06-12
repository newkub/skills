# Configuration

## Store Configuration

### Basic Store

```typescript
import { create } from "zustand";

const useStore = create((set, get) => ({
  count: 0,
  user: null,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0, user: null }),
  // Get state outside component
  getCount: () => get().count,
}));
```

### With TypeScript

```typescript
import { create } from "zustand";

interface CounterState {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));
```

## Middleware Configuration

### Persist Middleware

```typescript
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface StoreState {
  count: number;
  increment: () => void;
}

const useStore = create<StoreState>()(
  persist(
    (set) => ({
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 })),
    }),
    {
      name: "counter-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ count: state.count }),
      version: 1,
      migrate: (persistedState: unknown, version: number) => {
        // Migration logic
      },
      onRehydrateStorage: () => (state) => {
        console.log("Rehydration complete");
      },
    }
  )
);
```

### DevTools Middleware

```typescript
import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useStore = create(
  devtools(
    (set) => ({
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 })),
    }),
    { name: "Counter", enabled: true }
  )
);
```

### Immer Middleware

```typescript
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const useStore = create(
  immer((set) => ({
    nested: { value: 0, deep: { data: "test" } },
    update: () =>
      set((draft) => {
        draft.nested.deep.data = "updated";
      }),
  }))
);
```

## Custom Storage

### SessionStorage

```typescript
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
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

const useStore = create(
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

## Middleware Options

| Middleware | Options | Description |
|------------|---------|-------------|
| `persist` | `name`, `storage`, `partialize`, `version`, `migrate` | Persist to storage |
| `devtools` | `name`, `enabled` | Redux DevTools |
| `immer` | - | Immer for immutable updates |
| `subscribeWithSelector` | - | Enhanced subscriptions |
| `redux` | `actions` | Redux-like actions |

## TypeScript Configuration

```json
{
  "compilerOptions": {
    "strict": true,
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "jsx": "react-jsx"
  }
}
```

## Environment Variables

```env
# .env
VITE_APP_TITLE=My App
VITE_API_URL=https://api.example.com
```

```typescript
// src/store/env.ts
import { create } from "zustand";

interface EnvState {
  apiUrl: string;
  appTitle: string;
}

const useEnvStore = create<EnvState>()((set) => ({
  apiUrl: import.meta.env.VITE_API_URL || "",
  appTitle: import.meta.env.VITE_APP_TITLE || "App",
}));
```