# Architecture

## Purpose

อธิบายสถาปัตยกรรมภายในของ TanStack Query library

## Scope

- QueryClient Architecture
- Cache Structure
- Observer Pattern
- Query Lifecycle
- Notification System

## Core Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      TanStack Query                          │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│   ┌─────────────────┐    ┌─────────────────┐                 │
│   │   QueryClient   │    │   MutationCache │                 │
│   │                 │    │                 │                 │
│   │  - queryCache   │    │  - mutations    │                 │
│   │  - mutationCache│    │  - subscribers │                 │
│   │  - defaults     │    │  - observers   │                 │
│   └────────┬────────┘    └────────┬────────┘                 │
│            │                      │                          │
│            ▼                      ▼                          │
│   ┌──────────────────────────────────────────┐              │
│   │                   QueryCache               │              │
│   ├──────────────────────────────────────────┤              │
│   │  ┌────────────┐  ┌────────────┐          │              │
│   │  │   Query    │  │   Query    │  ...     │              │
│   │  │  (users)   │  │  (posts)   │          │              │
│   │  └────────────┘  └────────────┘          │              │
│   └──────────────────────────────────────────┘              │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## QueryClient Structure

```typescript
class QueryClient {
  // Configuration
  private queryCache: QueryCache;
  private mutationCache: MutationCache;
  private defaultOptions: DefaultOptions;

  // Public Methods
  getQueryData(key): T | undefined;
  setQueryData(key, data): void;
  invalidateQueries(filters?): Promise<void>;
  removeQueries(filters?): void;
  resetQueries(filters?): Promise<void>;
  cancelQueries(filters?): Promise<void>;
  prefetchQuery(options): Promise<void>;
  fetchQuery(options): Promise<T>;

  // Mutations
  executeMutation(options): Promise<T>;

  // Cache Access
  getQueryCache(): QueryCache;
  getMutationCache(): MutationCache;
}
```

## QueryCache Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                       QueryCache                             │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│   queries: Map<string, Query>                               │
│        │                                                     │
│        ▼                                                     │
│   ┌─────────────────────────────────────────────────────┐    │
│   │  Query Key: ["users", "list", { status: "active" }]  │    │
│   ├─────────────────────────────────────────────────────┤    │
│   │                                                       │    │
│   │  queryKey: string[]                                   │    │
│   │  queryHash: string                                    │    │
│   │  state: QueryState<T>                                 │    │
│   │  cacheTime: number                                    │    │
│   │  observers: QueryObserver[]                           │    │
│   │  subsribers: Set<() => void>                          │    │
│   │  promise: Promise<T> | null                          │    │
│   │                                                       │    │
│   └─────────────────────────────────────────────────────┘    │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## Query State Machine

```
┌─────────────────────────────────────────────────────────────┐
│                    Query State Machine                       │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│                 ┌─────────────┐                             │
│                 │   Fresh     │                             │
│                 │ (status: idle)│                           │
│                 └──────┬──────┘                             │
│                        │                                     │
│              ┌─────────┴─────────┐                           │
│              │                   │                           │
│              ▼                   ▼                           │
│       ┌────────────┐       ┌────────────┐                   │
│       │   Loading  │       │   Fetching │                   │
│       │ (no data)  │       │  (refetch) │                   │
│       └──────┬──────┘       └──────┬──────┘                   │
│              │                    │                           │
│              └──────────┬──────────┘                           │
│                         │                                      │
│              ┌──────────┴──────────┐                           │
│              │                     │                           │
│              ▼                     ▼                           │
│       ┌────────────┐       ┌────────────┐                     │
│       │  Success   │       │   Error    │                     │
│       │ (has data)│       │(has error) │                     │
│       └──────┬─────┘       └─────┬──────┘                     │
│              │                   │                            │
│              └────────┬──────────┘                            │
│                       │                                       │
│              ┌────────┴────────┐                             │
│              │                 │                             │
│              ▼                 ▼                             │
│       ┌────────────┐   ┌────────────┐                       │
│       │   Stale    │───│  Inactive  │                       │
│       │            │   │  (gcTime)  │                       │
│       └────────────┘   └────────────┘                       │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## Observer Pattern

```
┌─────────────────────────────────────────────────────────────┐
│                    Observer Architecture                      │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│   Component                                                 │
│      │                                                       │
│      ▼                                                       │
│   ┌─────────────────────────────────────────────────────┐    │
│   │  QueryObserver                                        │    │
│   ├─────────────────────────────────────────────────────┤    │
│   │  - subscribe() → Component re-renders               │    │
│   │  - getResult() → Current state                       │    │
│   │  - update() → Notifies component                     │    │
│   └───────────────┬─────────────────────────────────────┘    │
│                   │                                           │
│                   ▼                                           │
│   ┌─────────────────────────────────────────────────────┐    │
│   │  Query                                                │    │
│   ├─────────────────────────────────────────────────────┤    │
│   │  - observers: Set<QueryObserver>                     │    │
│   │  - state: QueryState                                 │    │
│   │  - notify() → Updates all observers                  │    │
│   └─────────────────────────────────────────────────────┘    │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## Query Execution Flow

```
┌─────────────────────────────────────────────────────────────┐
│                  Query Execution Flow                        │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│   1. Create Query                                           │
│      ┌────────────────────────────────────┐                  │
│      │ queryClient.fetchQuery({            │                  │
│      │   queryKey: ["users"],              │                  │
│      │   queryFn: fetchUsers               │                  │
│      │ })                                  │                  │
│      └─────────────────────┬────────────────┘                  │
│                            │                                   │
│                            ▼                                   │
│   2. Check Cache                                    │
│      ┌────────────────────────────────────┐                  │
│      │  Query exists?                      │                  │
│      │  └── No → Create new Query         │                  │
│      │  └── Yes → Check if stale          │                  │
│      └─────────────────────┬────────────────┘                  │
│                            │                                   │
│              ┌─────────────┴─────────────┐                   │
│              │                           │                    │
│              ▼                           ▼                    │
│    ┌─────────────────┐         ┌─────────────────┐            │
│    │   Not Stale    │         │    Is Stale     │            │
│    │   → Return     │         │    → Refetch    │            │
│    │   cached data  │         │    → Update     │            │
│    └─────────────────┘         └─────────────────┘            │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## Mutation Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Mutation Architecture                      │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│   useMutation({                                             │
│     mutationFn: createUser,                                 │
│     onMutate: (data) => {...},                              │
│     onSuccess: (result) => {...},                           │
│     onError: (error) => {...},                              │
│     onSettled: () => {...}                                  │
│   });                                                       │
│                                                              │
│   ┌─────────────────────────────────────────────────────┐    │
│   │  MutationCache                                       │    │
│   ├─────────────────────────────────────────────────────┤    │
│   │  ┌────────────────────────────────────────────┐     │    │
│   │  │  MutationState                              │     │    │
│   │  ├────────────────────────────────────────────┤     │    │
│   │  │  - state: "pending" | "success" | "error" │     │    │
│   │  │  - data: T | undefined                      │     │    │
│   │  │  - error: Error | undefined                 │     │    │
│   │  │  - submittedAt: timestamp                   │     │    │
│   │  │  - context: TContext | undefined            │     │    │
│   │  └────────────────────────────────────────────┘     │    │
│   └─────────────────────────────────────────────────────┘    │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## Notification System

```typescript
// Query Cache Events
interface QueryCacheNotifications {
  queryAdded: (query: Query) => void;
  queryUpdated: (query: Query, type: "added" | "removed" | "updated") => void;
  queryRemoved: (query: Query) => void;
}

// Subscribe to changes
queryClient.getQueryCache().subscribe((event) => {
  console.log(event.type); // "added" | "updated" | "removed"
  console.log(event.query.queryKey);
});
```

## Memory Management

### Garbage Collection Flow

```
┌─────────────────────────────────────────────────────────────┐
│                  Garbage Collection Flow                      │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│   QueryCache                                                │
│        │                                                     │
│        ▼                                                     │
│   Check: gcTime exceeded?                                   │
│        │                                                     │
│        ▼                                                     │
│   ┌─────────────────────────────────────────────────────┐    │
│   │  No observers watching this query                   │    │
│   │  AND query.state.status === "inactive"              │    │
│   │  AND (Date.now() - query.state.dataUpdatedAt) > gcTime  │
│   └────────────────────┬────────────────────────────────┘    │
│                        │                                      │
│                        ▼                                      │
│                Remove from cache                             │
│                Free memory                                    │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### gcTime vs staleTime

| Option | Purpose | When to Adjust |
|--------|---------|----------------|
| **gcTime** | When to remove unused queries | Longer for expensive data |
| **staleTime** | When to refetch automatically | Longer for stable data |

## Performance Characteristics

| Operation | Complexity | Notes |
|-----------|------------|-------|
| getQueryData | O(1) | Hash map lookup |
| setQueryData | O(1) | Hash map update |
| invalidateQueries | O(n) | Check all queries |
| subscribe | O(1) | Add to observers |
| notify | O(m) | m = observer count |

## Summary

| Component | Purpose |
|-----------|---------|
| **QueryClient** | Central API, manages cache |
| **QueryCache** | Stores all queries by hash |
| **Query** | Single query instance with state |
| **QueryObserver** | Subscribes component to query |
| **MutationCache** | Manages mutations |
| **MutationObserver** | Subscribes to mutation state |