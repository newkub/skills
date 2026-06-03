# Configuration

## Purpose

แนวทางการตั้งค่า QueryClient และ QueryOptions สำหรับ TanStack Query

## QueryClient Configuration

### Basic Setup

```typescript
import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 10, // 10 minutes
    },
  },
});
```

### Full Configuration

```typescript
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 10,
      retry: 3,
      retryDelay: (attemptIndex) =>
        Math.min(1000 * 2 ** attemptIndex, 30000),
      refetchOnWindowFocus: "always",
      refetchOnReconnect: "always",
      refetchOnMount: true,
      refetchInterval: false,
      refetchIntervalInBackground: false,
      networkMode: "online",
      queryKeyHashFn: (queryKey) => JSON.stringify(queryKey),
      keepPreviousData: false,
      placeholderData: undefined,
      placeholderDataIsLoading: false,
      structuralSharing: true,
    },
    mutations: {
      onError: undefined,
      onSuccess: undefined,
      onSettled: undefined,
      onMutate: undefined,
      retry: 0,
      retryDelay: undefined,
      networkMode: "online",
    },
  },
});
```

## Query Options

### Individual Query Config

```typescript
useQuery({
  queryKey: ["users"],
  queryFn: fetchUsers,
  staleTime: 1000 * 60, // 1 minute
  gcTime: 1000 * 60 * 30, // 30 minutes
  enabled: !!userId,
  refetchOnWindowFocus: false,
  retry: 2,
});
```

### Query Options Table

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `queryKey` | `unknown[]` | required | Unique key for query |
| `queryFn` | `() => Promise` | required | Fetch function |
| `enabled` | `boolean` | `true` | Enable/disable |
| `staleTime` | `number` | `0` | Time before stale |
| `gcTime` | `number` | `300000` | Cache lifetime |
| `refetchOnWindowFocus` | `boolean \| "always"` | `true` | Focus refetch |
| `refetchOnReconnect` | `boolean \| "always"` | `true` | Online refetch |
| `refetchOnMount` | `boolean \| "always"` | `true` | Mount refetch |
| `refetchInterval` | `number \| false` | `false` | Polling interval |
| `retry` | `boolean \| number \| (failureCount, error) => boolean` | `3` | Retry config |
| `retryDelay` | `number \| (attemptIndex) => number` | exponential | Delay between |
| `networkMode` | `"online" \| "always" \| "offlineOnly"` | `"online"` | Network mode |

## Mutation Options

### Basic Mutation

```typescript
useMutation({
  mutationFn: createUser,
  onSuccess: (data) => {
    console.log("Success:", data);
  },
});
```

### Full Mutation Options

```typescript
useMutation({
  mutationFn: createUser,
  onMutate: async (variables) => {
    // Cancel outgoing refetches
    await queryClient.cancelQueries(["users"]);
    // Snapshot previous value
    const previous = queryClient.getQueryData(["users"]);
    // Optimistically update
    queryClient.setQueryData(["users"], (old) => [...old, variables]);
    return { previous };
  },
  onError: (err, variables, context) => {
    // Rollback on error
    queryClient.setQueryData(["users"], context.previous);
  },
  onSuccess: (data, variables, context) => {
    // Invalidate to refetch
    queryClient.invalidateQueries(["users"]);
  },
  onSettled: (data, error, variables, context) => {
    // Always run after settled
    queryClient.invalidateQueries(["users"]);
  },
  retry: 3,
  retryDelay: 1000,
});
```

## QueryClient Methods

### Cache Manipulation

| Method | Signature | Description |
|--------|-----------|-------------|
| `getQueryData` | `(key) => data` | Get cached data |
| `setQueryData` | `(key, data) => void` | Set cached data |
| `invalidateQueries` | `(filters?) => Promise` | Mark as stale |
| `removeQueries` | `(filters?) => void` | Remove from cache |
| `resetQueries` | `(filters?) => Promise` | Reset to loading |
| `cancelQueries` | `(filters?) => Promise` | Cancel in-flight |
| `refetchQueries` | `(filters?) => Promise` | Force refetch |
| `fetchQuery` | `(options) => Promise` | Fetch with caching |

### Query Cache Events

```typescript
queryClient.getQueryCache().subscribe((event) => {
  console.log(event.type); // "added" | "updated" | "removed"
  console.log(event.query.queryKey);
  console.log(event.query.state);
});
```

## Global Configuration

### Setting Global Defaults

```typescript
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 30,
      refetchOnWindowFocus: true,
      retry: 2,
    },
    mutations: {
      retry: 1,
    },
  },
});
```

## Environment-Based Config

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

## Type-Safe Configuration

### Typed Query Keys

```typescript
interface QueryKeys {
  users: {
    all: ["users"] as const;
    lists: () => [...QueryKeys["users"]["all"], "list"] as const;
    list: (filter: string) => [...QueryKeys["users"]["lists"], { filter }] as const;
    details: () => [...QueryKeys["users"]["all"], "detail"] as const;
    detail: (id: string) => [...QueryKeys["users"]["details"], id] as const;
  };
  posts: {
    all: ["posts"] as const;
  };
}
```

### Usage

```typescript
const { data } = useQuery({
  queryKey: ["users", "detail", userId],
  queryFn: () => fetchUser(userId),
});
```

## DevTools Configuration

### React DevTools

```typescript
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

<QueryClientProvider client={queryClient}>
  <App />
  <ReactQueryDevtools
    initialIsOpen={false}
    buttonPosition="bottom-right"
    panelPosition="bottom"
  />
</QueryClientProvider>
```

### DevTools Button Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `initialIsOpen` | `boolean` | `false` | Initial open state |
| `buttonPosition` | `string` | `"bottom-right"` | Button position |
| `panelPosition` | `string` | `"bottom"` | Panel position |
| `style` | `CSSProperties` | - | Custom styles |

## Summary

| Category | Options |
|---------|---------|
| **Timing** | staleTime, gcTime, refetchInterval |
| **Triggers** | refetchOnWindowFocus, refetchOnReconnect, refetchOnMount |
| **Retry** | retry, retryDelay |
| **Network** | networkMode |
| **Data** | placeholderData, keepPreviousData |