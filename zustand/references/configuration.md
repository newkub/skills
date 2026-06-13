# Configuration

## TypeScript Setup

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

## Middleware Configuration

### Persist Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `name` | `string` | Required | Storage key |
| `storage` | `StorageApi` | `localStorage` | Storage adapter |
| `partialize` | `function` | `undefined` | Select what to persist |
| `version` | `number` | `undefined` | Migration version |
| `migrate` | `function` | `undefined` | Migration callback |
| `onRehydrateStorage` | `function` | `undefined` | Post-hydration callback |

### DevTools Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `name` | `string` | `undefined` | Store name |
| `enabled` | `boolean` | `true` | Enable DevTools |

### Immer Options

No configuration options - just import and use.

## Custom Storage

### localStorage

```typescript
import { createJSONStorage } from "zustand/middleware";

const storage = createJSONStorage(() => localStorage);
```

### sessionStorage

```typescript
import { createJSONStorage } from "zustand/middleware";

const storage = createJSONStorage(() => sessionStorage);
```

### AsyncStorage (React Native)

```typescript
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createJSONStorage } from "zustand/middleware";

const storage = createJSONStorage(() => AsyncStorage);
```

## Environment Variables

### Vite

```env
VITE_API_URL=https://api.example.com
VITE_APP_TITLE=My App
```

```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

### Next.js

```env
NEXT_PUBLIC_API_URL=https://api.example.com
```

```typescript
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
```

## Store Type Configuration

### Typed Store

```typescript
import { create } from "zustand";

interface CounterState {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const useStore = create<CounterState>((set) => ({
  count: 0,
  increment: () => set((s) => ({ count: s.count + 1 })),
  decrement: () => set((s) => ({ count: s.count - 1 })),
}));
```

### Middleware with Types

```typescript
const useStore = create<StoreState>()(
  devtools(
    persist(
      (set) => ({
        count: 0,
        increment: () => set((s) => ({ count: s.count + 1 })),
      }),
      { name: "storage" }
    ),
    { name: "Counter" }
  )
);
```