# Configuration

## Purpose

Configuration options for TanStack Query QueryClient and DevTools.

## QueryClient Options

### Default Options

```typescript
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 10, // 10 minutes
      retry: 3,
      refetchOnWindowFocus: true,
    },
    mutations: {
      retry: 0,
    },
  },
});
```

## Query Options

### Timing Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `staleTime` | `number` | `0` | Time before data is stale (ms) |
| `gcTime` | `number` | `300000` | Time before unused cache is garbage collected |

### Refetch Triggers

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `refetchOnWindowFocus` | `boolean \| "always"` | `true` | Refetch when window gains focus |
| `refetchOnReconnect` | `boolean \| "always"` | `true` | Refetch when online |
| `refetchOnMount` | `boolean \| "always"` | `true` | Refetch when component mounts |

### Polling

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `refetchInterval` | `number \| false` | `false` | Interval between refetches (ms) |
| `refetchIntervalInBackground` | `boolean` | `false` | Continue polling when tab is hidden |

### Retry

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `retry` | `boolean \| number \| (count, error) => boolean` | `3` | Number of retries on failure |
| `retryDelay` | `number \| (attemptIndex) => number` | exponential | Delay between retries (ms) |

### Network

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `networkMode` | `"online" \| "always" \| "offlineOnly"` | `"online"` | Network behavior |

## Mutation Options

### Callbacks

| Option | Type | Description |
|--------|------|-------------|
| `onMutate` | `(variables) => TContext \| Promise<TContext>` | Called before mutation |
| `onSuccess` | `(data, variables, context) => void \| Promise<void>` | Called on success |
| `onError` | `(error, variables, context) => void \| Promise<void>` | Called on error |
| `onSettled` | `(data, error, variables, context) => void \| Promise<void>` | Always called after settle |

### Retry

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `retry` | `boolean \| number \| (count, error) => boolean` | `0` | Retry mutations |
| `retryDelay` | `number \| (attemptIndex) => number` | exponential | Delay between retries |

## TypeScript Configuration

### tsconfig.json

```json
{
  "compilerOptions": {
    "strict": true,
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

### Typed Query Keys

```typescript
// src/utils/queryKeys.ts
export const queryKeys = {
  users: {
    all: ["users"] as const,
    lists: () => [...queryKeys.users.all, "list"] as const,
    list: (filters: UserFilters) => [...queryKeys.users.lists(), { filters }] as const,
    details: () => [...queryKeys.users.all, "detail"] as const,
    detail: (id: string) => [...queryKeys.users.details(), id] as const,
  },
} as const;

type UserFilters = {
  status?: "active" | "inactive";
  role?: "admin" | "user";
};
```

## DevTools Configuration

### ReactQueryDevtools Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `initialIsOpen` | `boolean` | `false` | Start with devtools open |
| `buttonPosition` | `string` | `"bottom-right"` | Position of toggle button |
| `panelPosition` | `string` | `"bottom"` | Position of panel |
| `style` | `CSSProperties` | - | Custom styles for devtools |
| `className` | `string` | - | Custom class for devtools |

### Positions

| Position | Values |
|----------|--------|
| `buttonPosition` | `"top-left"`, `"top-right"`, `"bottom-left"`, `"bottom-right"` |
| `panelPosition` | `"top"`, `"bottom"`, `"left"`, `"right"` |

### Lazy DevTools

```typescript
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { LazyDevTools } from "@tanstack/react-query-devtools/lazy";

// For code splitting
const DevTools = ReactQueryDevtools;
```

## Environment Configuration

### Development vs Production

```typescript
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: process.env.NODE_ENV === "development" ? 0 : 1000 * 60 * 5,
      gcTime: process.env.NODE_ENV === "development" ? 1000 * 60 * 5 : 1000 * 60 * 60 * 24,
    },
  },
});
```

### Custom Error Handling

```typescript
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: (failureCount, error) => {
        // Don't retry client errors (4xx)
        if (error.status >= 400 && error.status < 500) {
          return false;
        }
        return failureCount < 3;
      },
    },
  },
});
```

## Persistence

### createSyncStoragePersister

```typescript
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";

const persister = createSyncStoragePersister({
  storage: window.localStorage,
  key: "react-query",
});

await persistQueryClient({
  queryClient,
  persister,
  maxAge: 1000 * 60 * 60 * 24, // 24 hours
  dehydrateOptions: {
    shouldDehydrateQuery: (query) =>
      query.state.status === "success" &&
      query.state.data !== undefined,
  },
});
```

### Persister Options

| Option | Type | Description |
|--------|------|-------------|
| `storage` | `Storage` | Storage instance (localStorage, sessionStorage) |
| `key` | `string` | Key for stored data |
| `throttle` | `number` | Throttle interval for writes (ms) |

## SSR Configuration

### dehydrate / hydrate

```typescript
import { dehydrate, hydrate } from "@tanstack/react-query";

// Server: Serialize state
const dehydratedState = dehydrate(queryClient, {
  shouldDehydrateQuery: (query) =>
    query.state.status === "success",
});

// Client: Restore state
hydrate(queryClient, dehydratedState);
```

### HydrationBoundary

```typescript
import { HydrationBoundary } from "@tanstack/react-query";

<HydrationBoundary state={dehydratedState}>
  <Component />
</HydrationBoundary>
```

## Query Key Hashing

### Custom Hash Function

```typescript
const queryClient = new QueryClient({
  queryCache: new QueryCache({
    hashKey: (queryKey) => JSON.stringify(queryKey),
  }),
});
```

## Global Error Handler

```typescript
import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onError: (error) => {
        console.error("Query error:", error);
        // Send to error tracking service
      },
    },
    mutations: {
      onError: (error) => {
        console.error("Mutation error:", error);
      },
    },
  },
});
```