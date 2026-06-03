# Key Concept

## Purpose

อธิบาย core concepts ของ TanStack Query เพื่อให้เข้าใจพื้นฐานการทำงาน

## Scope

- Queries vs Mutations
- Query Keys
- Cache Management
- Stale vs Fresh
- Query States

## Queries

### What is a Query?

Query คือ asynchronous data source ที่ต้องการ state management:

```
┌─────────────────────────────────────────────────────────────┐
│                       Query                                  │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│   queryKey: ["users", "123"]                                │
│   queryFn: () => fetch("/api/users/123")                     │
│                                                              │
│   Lifecycle:                                                │
│   ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐            │
│   │ Fresh  │→│ Stale  │→│ Refetch│→│ Fresh  │            │
│   └────────┘  └────────┘  └────────┘  └────────┘            │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### useQuery Hook

```typescript
import { useQuery } from "@tanstack/react-query";

function UserProfile({ userId }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users", userId],
    queryFn: () => fetch(`/api/users/${userId}`).then((r) => r.json()),
  });

  if (isLoading) return <Loading />;
  if (error) return <Error error={error} />;

  return <Profile user={data} />;
}
```

### Query Key Best Practices

| Pattern | Example | Use Case |
|---------|---------|----------|
| Entity + ID | `["users", "123"]` | Single resource |
| Entity + List | `["users", "list"]` | Collection |
| Entity + Filter | `["users", { status: "active" }]` | Filtered list |
| Nested | `["posts", "123", "comments"]` | Related data |

## Mutations

### What is a Mutation?

Mutation คือ operation ที่เปลี่ยนแปลงข้อมูล (create, update, delete):

```
┌─────────────────────────────────────────────────────────────┐
│                      Mutation                                │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│   mutationFn: (data) => fetch("/api/users", {               │
│     method: "POST",                                         │
│     body: JSON.stringify(data),                             │
│   })                                                        │
│                                                              │
│   Lifecycle:                                                │
│   ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐          │
│   │  Idle  │→│ Loading│→│ Success │→│  Idle  │          │
│   └────────┘  └────────┘  └────┬────┘  └────────┘          │
│                                │                             │
│                                ▼                             │
│                          ┌────────┐                         │
│                          │ Error  │                         │
│                          └────────┘                         │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### useMutation Hook

```typescript
import { useMutation, useQueryClient } from "@tanstack/react-query";

function CreateUser() {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: (newUser) =>
      fetch("/api/users", {
        method: "POST",
        body: JSON.stringify(newUser),
      }).then((r) => r.json()),
    onSuccess: () => {
      // Invalidate queries to refetch
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  return (
    <button onClick={() => mutate({ name: "John" })} disabled={isLoading}>
      {isLoading ? "Creating..." : "Create User"}
    </button>
  );
}
```

## Cache Management

### Query Cache

```
┌─────────────────────────────────────────────────────────────┐
│                      Query Cache                             │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│   ┌────────────────────────────────────────────────────┐     │
│   │ ["users", "123"]  ──>  { data: User, status }     │     │
│   └────────────────────────────────────────────────────┘     │
│   ┌────────────────────────────────────────────────────┐     │
│   │ ["posts"]  ──>  { data: Post[], status }           │     │
│   └────────────────────────────────────────────────────┘     │
│                                                              │
│   Key: queryKey (string[])                                   │
│   Value: QueryState                                          │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Cache Operations

| Method | Description |
|--------|-------------|
| `getQueryData(key)` | Get cached value |
| `setQueryData(key, value)` | Set cached value |
| `invalidateQueries(key)` | Mark as stale (need refetch) |
| `removeQueries(key)` | Remove from cache |

## Stale vs Fresh

### Stale Time Concept

```
┌─────────────────────────────────────────────────────────────┐
│                    Stale Time Concept                        │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│   request()                                                  │
│      │                                                       │
│      ▼                                                       │
│   ┌──────────────┐                                          │
│   │ Fresh (0ms)  │                                          │
│   └──────┬───────┘                                          │
│          │ (staleTime: 5000ms)                              │
│          ▼                                                   │
│   ┌──────────────┐                                          │
│   │  Stale (5s)  │  ← Auto-refetch if used                  │
│   └──────┬───────┘                                          │
│          │                                                   │
│          ▼                                                   │
│   ┌──────────────┐                                          │
│   │  Fresh       │  ← After refetch                          │
│   └──────────────┘                                          │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### gcTime (Garbage Collection Time)

```
┌─────────────────────────────────────────────────────────────┐
│                     gcTime Concept                           │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│   Query becomes inactive (no observers)                     │
│          │                                                   │
│          ▼                                                   │
│   Start gcTime countdown (default: 5 min)                   │
│          │                                                   │
│          ▼                                                   │
│   ┌─────────────────────────────────────────┐              │
│   │  If observers attach before gcTime     │              │
│   │  → Cancel countdown, reuse cache      │              │
│   └─────────────────────────────────────────┘              │
│          │                                                   │
│          ▼ (no observers attached)                          │
│   ┌─────────────────────────────────────────┐              │
│   │  Remove from cache (garbage collect)    │              │
│   └─────────────────────────────────────────┘              │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## Query States

### State Machine

```
                    ┌───────────────┐
                    │    Fresh      │
                    │  (idle, no   │
                    │   observers) │
                    └───────┬───────┘
                            │
                            │ subscribe()
                            ▼
                    ┌───────────────┐
                    │   Loading    │
                    │ (fetching)   │
                    └───────┬───────┘
                            │
              ┌─────────────┴─────────────┐
              │                           │
              ▼                           ▼
    ┌─────────────────┐       ┌─────────────────┐
    │    Success      │       │     Error       │
    │ (has data)      │       │ (has error)     │
    └────────┬────────┘       └────────┬────────┘
             │                           │
             └──────────┬─────────────────┘
                        │
                        ▼
              ┌─────────────────┐
              │     Stale       │
              │ (needs refetch) │
              └────────┬────────┘
                       │
                       ▼
              ┌─────────────────┐
              │    Inactive     │
              │ (no observers,  │
              │  gcTime active) │
              └─────────────────┘
```

### Status vs FetchStatus

| Property | Values | Description |
|----------|--------|-------------|
| `status` | `"pending"`, `"loading"`, `"error"`, `"success"` | Data state |
| `fetchStatus` | `"fetching"`, `"paused"`, `"idle"` | Network state |

### Common Combinations

| status | fetchStatus | Meaning |
|--------|-------------|---------|
| `"loading"` | `"fetching"` | Initial load in progress |
| `"success"` | `"fetching"` | Background refetch |
| `"success"` | `"idle"` | Cached data, not fetching |
| `"error"` | `"idle"` | Error, not retrying |

## Query Key Factory

### Define Keys

```typescript
// src/utils/queryKeys.ts
export const queryKeys = {
  users: {
    all: ["users"] as const,
    lists: () => [...queryKeys.users.all, "list"] as const,
    list: (filters: string[]) => [...queryKeys.users.lists(), filters] as const,
    details: () => [...queryKeys.users.all, "detail"] as const,
    detail: (id: string) => [...queryKeys.users.details(), id] as const,
  },
} as const;
```

### Usage

```typescript
// List users
useQuery({
  queryKey: queryKeys.users.lists(),
  queryFn: fetchUsers,
});

// Get user detail
useQuery({
  queryKey: queryKeys.users.detail(userId),
  queryFn: () => fetchUser(userId),
});

// Invalidate all user queries
queryClient.invalidateQueries({
  queryKey: queryKeys.users.all,
});
```

## Summary

| Concept | Description |
|---------|-------------|
| **Query** | Async data fetch with cache |
| **Mutation** | Write operation with callbacks |
| **Query Key** | Unique identifier for cache |
| **staleTime** | Time before data needs refetch |
| **gcTime** | Time before unused cache is removed |
| **Status** | Data state (loading/error/success) |
| **FetchStatus** | Network state (fetching/idle/paused) |