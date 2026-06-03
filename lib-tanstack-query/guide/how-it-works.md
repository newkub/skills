# How It Works

## Purpose

อธิบายการทำงานภายในของ TanStack Query เพื่อให้เข้าใจกลไก caching, synchronization และ background updates

## Scope

- Query Lifecycle
- Cache Architecture
- Background Refetching
- Stale-While-Revalidate Strategy
- Invalidation & Updates

## Query Lifecycle

```
┌─────────────────────────────────────────────────────────────┐
│                    Query Execution Flow                      │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│   Component Mounts                                           │
│        │                                                     │
│        ▼                                                     │
│   ┌──────────────┐                                          │
│   │ Query Exists │ ──No──> Fetch from Server                │
│   │   in Cache?  │         │                                │
│   └──────┬───────┘         │                                │
│          │Yes              ▼                                │
│          │           ┌──────────────┐                       │
│          │           │  Store Data  │                       │
│          │           └──────┬───────┘                       │
│          │                  │                                │
│          ▼                  ▼                                │
│   ┌─────────────────────────────────────────────┐           │
│   │              Cache State                      │           │
│   ├─────────────────────────────────────────────┤           │
│   │  status: "success" | "loading" | "error"   │           │
│   │  data: T | undefined                        │           │
│   │  error: Error | null                         │           │
│   └─────────────────────────────────────────────┘           │
│        │                                                     │
│        ▼                                                     │
│   Update Component                                           │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## Cache Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     Query Cache                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│   ┌─────────────────────────────────────────────────────┐    │
│   │  QueryHash: ["getUsers", JSON.stringify(options)]   │    │
│   ├─────────────────────────────────────────────────────┤    │
│   │  queryKey: ["users"]                                │    │
│   │  queryHash: "unique-hash"                           │    │
│   │  state: {                                           │    │
│   │    status: "success",                               │    │
│   │    data: User[],                                    │    │
│   │    error: null,                                     │    │
│   │    fetchStatus: "idle",                             │    │
│   │    updatedAt: timestamp                             │    │
│   │  }                                                  │    │
│   │  observers: [Component1, Component2]                │    │
│   │  subscribers: [Mutation1]                          │    │
│   └─────────────────────────────────────────────────────┘    │
│                                                              │
│   ┌─────────────────────────────────────────────────────┐    │
│   │  QueryHash: ["getUser", "123", ...]                  │    │
│   │  queryKey: ["users", "123"]                          │    │
│   │  ...                                                 │    │
│   └─────────────────────────────────────────────────────┘    │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Cache Layers

| Layer | Description | TTL |
|-------|-------------|-----|
| **Query Cache** | Stores query results | Default: 5 min |
| **Persister** | Persist cache to storage | Configurable |
| **Memory** | In-memory storage | Garbage collected |

## Stale-While-Revalidate

TanStack Query ใช้ stale-while-revalidate pattern เพื่อให้ UI responsive:

```
┌─────────────────────────────────────────────────────────────┐
│              Stale-While-Revalidate Flow                      │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│   Request Data                                              │
│        │                                                     │
│        ▼                                                     │
│   ┌──────────────┐                                          │
│   │  Cache Hit?  │                                          │
│   └──────┬───────┘                                          │
│          │                                                   │
│     ┌────┴────┐                                              │
│     │         │                                              │
│     ▼         ▼                                              │
│   ┌──────┐  ┌──────┐                                         │
│   │ Fresh│  │ Stale│                                         │
│   └──────┘  └──────┘                                         │
│     │         │                                              │
│     │         ▼                                              │
│     │    ┌──────────────────┐                               │
│     │    │ Return Cached     │                               │
│     │    │ + Background      │                               │
│     │    │ Refetch           │                               │
│     │    └──────────────────┘                               │
│     │         │                                              │
│     ▼         ▼                                              │
│   ┌──────┐  ┌──────┐                                         │
│   │Update│  │Update│                                        │
│   │UI    │  │UI    │                                        │
│   └──────┘  └──────┘                                         │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## Background Refetching

```
┌─────────────────────────────────────────────────────────────┐
│                Background Refetch Triggers                   │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│   1. Component Mounts                                       │
│      ┌────────────────────────────────────┐                  │
│      │ useQuery({ queryKey: ["users"] })  │                  │
│      │                                    │                  │
│      │ Mount ──> Query not in cache       │                  │
│      │       ──> Fetch triggered          │                  │
│      └────────────────────────────────────┘                  │
│                                                              │
│   2. Window Focus                                           │
│      ┌────────────────────────────────────┐                  │
│      │ refetchOnWindowFocus: true         │                  │
│      │                                    │                  │
│      │ User switches tab ──> Refetch      │                  │
│      └────────────────────────────────────┘                  │
│                                                              │
│   3. Network Reconnect                                      │
│      ┌────────────────────────────────────┐                  │
│      │ refetchOnReconnect: true           │                  │
│      │                                    │                  │
│      │ Online ──> Refetch stale queries    │                  │
│      └────────────────────────────────────┘                  │
│                                                              │
│   4. Interval                                               │
│      ┌────────────────────────────────────┐                  │
│      │ refetchInterval: 30000              │                  │
│      │                                    │                  │
│      │ Every 30s ──> Refetch              │                  │
│      └────────────────────────────────────┘                  │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## Invalidation Flow

```
┌─────────────────────────────────────────────────────────────┐
│                    Cache Invalidation                        │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│   useMutation({                                            │
│     mutationFn: createUser,                                │
│     onSuccess: () => {                                      │
│       queryClient.invalidateQueries({                       │
│         queryKey: ["users"]                                 │
│       });                                                   │
│     }                                                       │
│   });                                                       │
│                                                              │
│   ┌─────────────────────────────────────────────────────┐    │
│   │  Invalidate Query                                    │    │
│   ├─────────────────────────────────────────────────────┤    │
│   │                                                       │    │
│   │   queryClient.invalidateQueries({                    │    │
│   │     queryKey: ["users"]                               │    │
│   │   })                                                  │    │
│   │          │                                             │    │
│   │          ▼                                            │    │
│   │   ┌─────────────────────┐                            │    │
│   │   │  Mark ["users"]     │                            │    │
│   │   │  as STALE           │                            │    │
│   │   └──────────┬──────────┘                            │    │
│   │              │                                       │    │
│   │              ▼                                       │    │
│   │   ┌─────────────────────┐                            │    │
│   │   │  Trigger Refetch    │                            │    │
│   │   │  for all matching   │                            │    │
│   │   │  queries            │                            │    │
│   │   └─────────────────────┘                            │    │
│   │                                                       │    │
│   └─────────────────────────────────────────────────────┘    │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## Optimistic Updates

```
┌─────────────────────────────────────────────────────────────┐
│                 Optimistic Update Flow                        │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│   useMutation({                                            │
│     mutationFn: createUser,                                 │
│     onMutate: async (newUser) => {                          │
│       await queryClient.cancelQueries(["users"]);           │
│       const previous = queryClient.getQueryData(["users"]); │
│       queryClient.setQueryData(["users"], (old) => [        │
│         ...old, newUser                                     │
│       ]);                                                   │
│       return { previous };                                  │
│     },                                                      │
│     onError: (err, newUser, context) => {                   │
│       queryClient.setQueryData(["users"], context.previous);│
│     },                                                      │
│     onSettled: () => {                                      │
│       queryClient.invalidateQueries(["users"]);              │
│     },                                                      │
│   });                                                       │
│                                                              │
│   Timeline:                                                  │
│                                                              │
│   ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐             │
│   │ onMutate│→│ Fetch  │→│ onError│→│ onSettled│            │
│   │ +Cache  │  │        │  │ +Rollback│  │ +Invalidate│     │
│   └────────┘  └────────┘  └────────┘  └────────┘             │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## Garbage Collection

```
┌─────────────────────────────────────────────────────────────┐
│                  Cache Cleanup Process                        │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│   queryCache: QueryCache                                     │
│        │                                                     │
│        ▼                                                     │
│   ┌─────────────────────────────────────────────────────┐    │
│   │  Check: gcTime (default: 5 minutes)                 │    │
│   │                                                       │    │
│   │  Query not observed for > gcTime                     │    │
│   │         │                                             │    │
│   │         ▼                                             │    │
│   │  ┌────────────────────────────────┐                    │    │
│   │  │  Remove from cache            │                    │    │
│   │  │  Free memory                   │                    │    │
│   │  └────────────────────────────────┘                    │    │
│   │                                                       │    │
│   └─────────────────────────────────────────────────────┘    │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## Summary

| Mechanism | Purpose | Benefit |
|-----------|---------|---------|
| **Query Cache** | Store results by key | Avoid duplicate requests |
| **Stale-While-Revalidate** | Show cached while refetching | Fast UI, fresh data |
| **Background Refetch** | Refetch on focus/reconnect | Always up-to-date |
| **Invalidation** | Mark queries as stale | Trigger refetch after mutations |
| **Optimistic Updates** | Update cache immediately | Instant feedback |
| **Garbage Collection** | Clean up unused queries | Memory efficiency |