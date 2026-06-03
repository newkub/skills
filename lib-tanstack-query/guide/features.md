# All Features

## Core Features

### Query Hook

| Feature | Description | Example |
|---------|-------------|---------|
| `useQuery` | Basic query hook | `useQuery({ queryKey: ["users"], queryFn: fetchUsers })` |
| `useQueries` | Multiple queries | `useQueries([{ queryKey: ["users"] }, { queryKey: ["posts"] }])` |
| Query Key Arrays | Key as array | `["users", userId, "posts"]` |
| Dependent Queries | Wait for other | `enabled: !!userId` |

### Mutation Hook

| Feature | Description | Example |
|---------|-------------|---------|
| `useMutation` | Basic mutation | `useMutation({ mutationFn: createUser })` |
| `onMutate` | Optimistic update | `onMutate: (data) => { ... }` |
| `onSuccess` | Success callback | `onSuccess: () => invalidateQueries()` |
| `onError` | Error callback | `onError: (err) => rollback()` |
| `onSettled` | Always run | `onSettled: () => refetch()` |

### Query Options

| Option | Description | Default |
|--------|-------------|---------|
| `enabled` | Enable/disable query | `true` |
| `staleTime` | Time before stale | `0` |
| `gcTime` | Cache lifetime | `300000` (5 min) |
| `refetchOnWindowFocus` | Refetch on focus | `true` |
| `refetchOnReconnect` | Refetch on online | `true` |
| `refetchInterval` | Polling interval | `false` |
| `retry` | Retry on failure | `3` |
| `retryDelay` | Delay between retries | exponential |

## Advanced Features

### Infinite Queries

| Method | Description | Example |
|--------|-------------|---------|
| `useInfiniteQuery` | Paginated data | `useInfiniteQuery({ queryKey: ["posts"], queryFn: fetchPosts })` |
| `fetchNextPage()` | Load more | `queryClient.fetchNextPage()` |
| `hasNextPage` | Check more | `data?.hasNextPage` |
| `getNextPageParam` | Next cursor | `lastPage => lastPage.nextCursor` |

### Query Cancellation

```typescript
// Built-in cancellation
const query = useQuery({
  queryKey: ["user"],
  queryFn: async ({ signal }) => {
    return fetch("/api/user", { signal });
  },
});
```

### Query Preloading

```typescript
// Preload before navigation
const queryClient = useQueryClient();
queryClient.prefetchQuery({
  queryKey: ["users"],
  queryFn: fetchUsers,
});
```

## Caching Features

### Cache Manipulation

| Method | Description |
|--------|-------------|
| `queryClient.setQueryData(key, data)` | Set cache |
| `queryClient.getQueryData(key)` | Get cache |
| `queryClient.invalidateQueries(key)` | Mark stale |
| `queryClient.removeQueries(key)` | Remove cache |
| `queryClient.resetQueries(key)` | Reset to loading |

### Optimistic Updates

```typescript
const mutation = useMutation({
  mutationFn: createTodo,
  onMutate: async (newTodo) => {
    await queryClient.cancelQueries(["todos"]);
    const previous = queryClient.getQueryData(["todos"]);
    queryClient.setQueryData(["todos"], (old) => [...old, newTodo]);
    return { previous };
  },
  onError: (err, newTodo, context) => {
    queryClient.setQueryData(["todos"], context.previous);
  },
  onSettled: () => {
    queryClient.invalidateQueries(["todos"]);
  },
});
```

## DevTools & Debugging

### Query Observer

| Property | Description |
|----------|-------------|
| `data` | Current data |
| `error` | Error object |
| `isLoading` | Initial load |
| `isFetching` | Any fetch |
| `isSuccess` | Success state |
| `isError` | Error state |
| `isStale` | Data is stale |
| `dataUpdatedAt` | Last update time |
| `errorUpdatedAt` | Last error time |

### DevTools

```typescript
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Component />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
```

## SSR Features

### Hydration

```typescript
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";

// Server
const dehydratedState = dehydrate(queryClient);

// Client
<HydrationBoundary state={dehydratedState}>
  <Component />
</HydrationBoundary>
```

### Prefetching

```typescript
// On server
await queryClient.prefetchQuery({
  queryKey: ["users"],
  queryFn: fetchUsers,
});

// Or in component
useEffect(() => {
  queryClient.prefetchQuery({ ... });
}, []);
```

## Type-Safe Features

### Type Inference

| Method | Description |
|--------|-------------|
| `UseQueryResult<TData>` | Query result type |
| `UseMutationResult<TData, TError, TVariables>` | Mutation type |
| `QueryKey` | Typed query keys |

### Typed Query Keys

```typescript
const userKeys = {
  all: ["users"] as const,
  lists: () => [...userKeys.all, "list"] as const,
  list: (filters: string) => [...userKeys.lists(), filters] as const,
  details: () => [...userKeys.all, "detail"] as const,
  detail: (id: string) => [...userKeys.details(), id] as const,
};
```

## Background Sync

### Polling

```typescript
useQuery({
  queryKey: ["posts"],
  queryFn: fetchPosts,
  refetchInterval: 30000, // 30 seconds
  refetchIntervalInBackground: false,
});
```

### Keep Previous Data

```typescript
useQuery({
  queryKey: ["users"],
  queryFn: fetchUsers,
  placeholderData: keepPreviousData,
});
```

## Error Handling

### Retry Configuration

| Option | Description | Example |
|--------|-------------|---------|
| `retry` | Number of retries | `3` |
| `retryDelay` | Delay function | `( attempt ) => Math.min(attempt * 1000, 30000)` |
| `retryOn` | Retry condition | `[true]` or `[(error) => error.status === 403]` |

### Error States

```typescript
const { data, isError, error } = useQuery({
  queryKey: ["users"],
  queryFn: fetchUsers,
});

if (isError) {
  return <ErrorBoundary error={error} />;
}
```

## Notifications

### Query Cache Listeners

```typescript
queryClient.getQueryCache().subscribe((event) => {
  console.log(event.type); // "updated", "added", "removed"
  console.log(event.query.queryKey);
});
```

## Persistence

### Storage Persister

```typescript
import { createSyncStoragePersister } from "@tanstack/react-query-persist-client";

const persister = createSyncStoragePersister({
  storage: window.localStorage,
});

await persistQueryClient({
  queryClient,
  persister,
  maxAge: 1000 * 60 * 60 * 24, // 24 hours
  dehydrate,
  hydrate,
});
```

## Summary

| Category | Features |
|----------|----------|
| **Queries** | useQuery, useQueries, Infinite, Dependent |
| **Mutations** | useMutation, Optimistic Updates, Rollback |
| **Cache** | setQueryData, getQueryData, invalidate, remove |
| **DevTools** | ReactQueryDevtools, queryObserver |
| **SSR** | dehydrate, hydrate, prefetchQuery |
| **Types** | Type inference, Typed keys |