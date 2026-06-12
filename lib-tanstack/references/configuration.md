# Configuration

## TanStack Query

```typescript
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      retry: 3,
    },
  },
});
```

## TanStack Router

```typescript
const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  defaultStaleTime: 0,
});
```

## TanStack Start

```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import tanstackStart from '@tanstack/start/vite';

export default defineConfig({
  plugins: [tanstackStart()],
});
```
