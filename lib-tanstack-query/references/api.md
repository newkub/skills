# API

## Purpose

Complete API reference for TanStack Query hooks and methods.

## useQuery

### Signature

```typescript
function useQuery<TData, TError = Error>(
  options: UseQueryOptions<TData, TError>
): UseQueryResult<TData, TError>
```

### Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `queryKey` | `unknown[]` | required | Unique query key |
| `queryFn` | `() => Promise<TData>` | required | Fetch function |
| `enabled` | `boolean` | `true` | Enable/disable query |
| `staleTime` | `number` | `0` | Time before stale (ms) |
| `gcTime` | `number` | `300000` | Cache garbage collection time |
| `refetchOnWindowFocus` | `boolean \| "always"` | `true` | Refetch on window focus |
| `refetchOnReconnect` | `boolean \| "always"` | `true` | Refetch on reconnect |
| `refetchOnMount` | `boolean \| "always"` | `true` | Refetch on mount |
| `refetchInterval` | `number \| false` | `false` | Polling interval (ms) |
| `refetchIntervalInBackground` | `boolean` | `false` | Poll even when background |
| `retry` | `boolean \| number \| (count, err) => boolean` | `3` | Retry configuration |
| `retryDelay` | `number \| (count) => number` | exponential | Delay between retries |
| `select` | `(data: TData) => TSelected` | - | Transform data |
| `placeholderData` | `TData \| (prev) => TData` | - | Placeholder while loading |
| `placeholderDataIsLoading` | `boolean` | `false` | Show loading for placeholder |
| `initialData` | `TData \| (prev) => TData` | - | Initial data |
| `initialDataUpdatedAt` | `number` | - | Timestamp of initial data |
| `networkMode` | `"online" \| "always" \| "offlineOnly"` | `"online"` | Network mode |

### Return Value

| Property | Type | Description |
|----------|------|-------------|
| `data` | `TData \| undefined` | Query data |
| `error` | `TError \| null` | Error object |
| `status` | `"pending" \| "loading" \| "error" \| "success"` | Query status |
| `fetchStatus` | `"fetching" \| "paused" \| "idle"` | Fetch status |
| `isLoading` | `boolean` | `status === "loading"` |
| `isError` | `boolean` | `status === "error"` |
| `isSuccess` | `boolean` | `status === "success"` |
| `isFetching` | `boolean` | `fetchStatus === "fetching"` |
| `isFetched` | `boolean` | Has been fetched at least once |
| `isPlaceholderData` | `boolean` | Showing placeholder data |
| `dataUpdatedAt` | `number` | Timestamp of last update |
| `errorUpdatedAt` | `number` | Timestamp of last error |
| `refetch` | `(options?) => Promise` | Manually refetch |
| `remove` | `() => void` | Remove from cache |

## useMutation

### Signature

```typescript
function useMutation<TData, TError = Error, TVariables = void, TContext = unknown>(
  options: UseMutationOptions<TData, TError, TVariables, TContext>
): UseMutationResult<TData, TError, TVariables, TContext>
```

### Options

| Option | Type | Description |
|--------|------|-------------|
| `mutationFn` | `(variables) => Promise<TData>` | Mutation function |
| `onMutate` | `(variables) => TContext \| Promise<TContext>` | Before mutation |
| `onSuccess` | `(data, variables, context) => void \| Promise<void>` | On success |
| `onError` | `(error, variables, context) => void \| Promise<void>` | On error |
| `onSettled` | `(data, error, variables, context) => void \| Promise<void>` | Always runs |
| `retry` | `boolean \| number \| (count, err) => boolean` | Retry on failure |
| `retryDelay` | `number \| (count) => number` | Delay between retries |
| `networkMode` | `"online" \| "always" \| "offlineOnly"` | Network mode |

### Return Value

| Property | Type | Description |
|----------|------|-------------|
| `mutate` | `(variables, options?) => void` | Trigger mutation |
| `mutateAsync` | `(variables, options?) => Promise<TData>` | Async mutation |
| `status` | `"idle" \| "loading" \| "success" \| "error"` | Mutation status |
| `data` | `TData \| null` | Result data |
| `error` | `TError \| null` | Error object |
| `isIdle` | `boolean` | `status === "idle"` |
| `isLoading` | `boolean` | `status === "loading"` |
| `isError` | `boolean` | `status === "error"` |
| `isSuccess` | `boolean` | `status === "success"` |
| `isPending` | `boolean` | `status === "loading" \| "idle"` |
| `reset` | `() => void` | Reset state |

## useQueryClient

### Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `getQueryData` | `(queryKey) => TData \| undefined` | Get cached data |
| `setQueryData` | `(queryKey, data \| updater) => TData` | Set cached data |
| `invalidateQueries` | `(filters?) => Promise` | Mark queries stale |
| `invalidateQueries` | `(queryKey, filters?) => Promise` | Invalidate specific |
| `removeQueries` | `(filters?) => void` | Remove from cache |
| `resetQueries` | `(filters?) => Promise` | Reset to loading |
| `cancelQueries` | `(filters?) => Promise` | Cancel in-flight |
| `refetchQueries` | `(filters?) => Promise` | Force refetch |
| `fetchQuery` | `(options) => Promise<TData>` | Fetch with caching |
| `prefetchQuery` | `(options) => Promise` | Prefetch for later |

### Query Filters

```typescript
interface QueryFilters {
  queryKey?: unknown[];
  predicate?: (query: Query) => boolean;
  refetchType?: "all" | "active" | "none" | "inactive";
  active?: boolean;
  stale?: boolean;
}
```

## useInfiniteQuery

### Options

| Option | Type | Description |
|--------|------|-------------|
| `queryKey` | `unknown[]` | Query key |
| `queryFn` | `(context) => Promise<TData>` | Fetch function |
| `getNextPageParam` | `(lastPage, pages) => unknown` | Cursor for next page |
| `getPreviousPageParam` | `(firstPage, pages) => unknown` | Cursor for previous |
| `initialPageParam` | `unknown` | Initial cursor |

### Return Value

| Property | Type | Description |
|----------|------|-------------|
| `data` | `{ pages: TData[], pageParams: unknown[] }` | Paginated data |
| `fetchNextPage` | `() => Promise` | Load next page |
| `fetchPreviousPage` | `() => Promise` | Load previous page |
| `hasNextPage` | `boolean` | Has more pages |
| `hasPreviousPage` | `boolean` | Has previous pages |
| `isFetchingNextPage` | `boolean` | Loading next page |
| `isFetchingPreviousPage` | `boolean` | Loading previous page |

## QueryClient

### Constructor

```typescript
new QueryClient(config?: {
  queryCache?: QueryCache;
  mutationCache?: MutationCache;
  defaultOptions?: DefaultOptions;
})
```

### DefaultOptions

```typescript
interface DefaultOptions {
  queries?: UseQueryOptions;
  mutations?: UseMutationOptions;
}
```

## QueryCache

### Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `subscribe` | `(callback) => () => void` | Subscribe to changes |
| `build` | `(client, options) => Query` | Create new query |
| `get` | `(queryKey) => Query \| undefined` | Get query |
| `getAll` | `() => Query[]` | Get all queries |
| `remove` | `(query) => void` | Remove query |
| `clear` | `() => void` | Clear all queries |

## useQueries

### Signature

```typescript
function useQueries<T extends QueryObserver[]>(
  queries: { queryKey: unknown[]; queryFn: () => Promise<any> }[]
): UseQueriesResult<T>
```

### Return Value

```typescript
Array<UseQueryResult> // Array of query results
```

## Helper Functions

| Function | Signature | Description |
|----------|-----------|-------------|
| `keepPreviousData` | `() => TData` | Keep previous data during refetch |
| ` dehydrate` | `(client, options?) => DehydratedState` | Serialize for SSR |
| `hydrate` | `(client, state) => void` | Restore from SSR |
| `InMemoryPersister` | `class` | In-memory persistence |
| `createSyncStoragePersister` | `(options) => Persister` | LocalStorage/session persister |

## Context

### QueryClientProvider Props

| Prop | Type | Description |
|------|------|-------------|
| `client` | `QueryClient` | QueryClient instance |
| `children` | `ReactNode` | Child components |

### useQueryClient

```typescript
function useQueryClient(): QueryClient
```

### useMutationCache

```typescript
function useMutationCache(): MutationCache
```

### useQueryCache

```typescript
function useQueryCache(): QueryCache
```