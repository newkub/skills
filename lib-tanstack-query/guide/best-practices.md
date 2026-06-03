# Best Practices

## Purpose

แนวทางปฏิบัติที่ดีที่สุดสำหรับการใช้งาน TanStack Query ใน production

## Scope

- Query key organization
- Data fetching patterns
- Error handling
- Performance optimization
- Cache management
- Type safety

## Query Key Organization

### Define Key Factory

```typescript
// src/utils/queryKeys.ts
export const queryKeys = {
  users: {
    all: ["users"] as const,
    lists: () => [...queryKeys.users.all, "list"] as const,
    list: (filters: UserFilters) => [...queryKeys.users.lists(), filters] as const,
    details: () => [...queryKeys.users.all, "detail"] as const,
    detail: (id: string) => [...queryKeys.users.details(), id] as const,
  },
  posts: {
    all: ["posts"] as const,
    lists: () => [...queryKeys.posts.all, "list"] as const,
    list: (filters: PostFilters) => [...queryKeys.posts.lists(), filters] as const,
    details: () => [...queryKeys.posts.all, "detail"] as const,
    detail: (id: string) => [...queryKeys.posts.details(), id] as const,
  },
} as const;
```

### Usage

```typescript
// Good
useQuery({
  queryKey: queryKeys.users.detail(userId),
  queryFn: () => fetchUser(userId),
});

// Bad
useQuery({
  queryKey: ["users", id],
  queryFn: () => fetchUser(id),
});
```

## Data Fetching Patterns

### Always Handle Loading & Error

```typescript
function UserList() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isLoading) return <Skeleton />;
  if (isError) return <ErrorMessage error={error} />;

  return <UserListComponent users={data} />;
}
```

### Use Enabled for Dependent Queries

```typescript
function UserWithPosts({ userId }) {
  const userQuery = useQuery({
    queryKey: ["users", userId],
    queryFn: () => fetchUser(userId),
    enabled: !!userId,
  });

  const postsQuery = useQuery({
    queryKey: ["posts", "user", userId],
    queryFn: () => fetchUserPosts(userId),
    enabled: !!userId && userQuery.isSuccess,
  });

  // posts won't fetch until user is loaded
}
```

### Avoid Race Conditions

```typescript
// Good: Cancel previous queries before new mutation
useMutation({
  mutationFn: updateUser,
  onMutate: async (newUser) => {
    await queryClient.cancelQueries(["users", newUser.id]);
    // ...optimistic update
  },
});
```

## Error Handling

### Retry Configuration

```typescript
useQuery({
  queryKey: ["users"],
  queryFn: fetchUsers,
  retry: (failureCount, error) => {
    // Don't retry on 4xx errors
    if (error.response?.status >= 400 && error.response?.status < 500) {
      return false;
    }
    return failureCount < 3;
  },
});
```

### Global Error Handler

```typescript
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onError: (error) => {
        console.error("Query error:", error);
        // Send to error tracking
      },
    },
    mutations: {
      onError: (error) => {
        console.error("Mutation error:", error);
        toast.error(error.message);
      },
    },
  },
});
```

## Performance Optimization

### Use staleTime Wisely

```typescript
// Good: Reduce unnecessary refetches
useQuery({
  queryKey: ["users"],
  queryFn: fetchUsers,
  staleTime: 1000 * 60 * 5, // 5 minutes
});

// Good: Static data can stay longer
useQuery({
  queryKey: ["config"],
  queryFn: fetchConfig,
  staleTime: Infinity, // Never refetch automatically
});
```

### Keep Previous Data

```typescript
import { keepPreviousData } from "@tanstack/react-query";

function PaginatedList() {
  const { data } = useQuery({
    queryKey: ["posts", page],
    queryFn: () => fetchPosts(page),
    placeholderData: keepPreviousData,
  });

  // No flash when page changes
}
```

### Separate Query Functions

```typescript
// Good: Keep queryFn pure
const fetchUser = async (userId: string) => {
  const response = await fetch(`/api/users/${userId}`);
  if (!response.ok) throw new Error("Failed to fetch user");
  return response.json();
};

// Good: Use in component
const { data } = useQuery({
  queryKey: ["users", userId],
  queryFn: () => fetchUser(userId),
});
```

## Cache Management

### Invalidate Related Queries

```typescript
useMutation({
  mutationFn: createPost,
  onSuccess: (newPost) => {
    // Invalidate list queries
    queryClient.invalidateQueries({
      queryKey: ["posts"],
      predicate: (query) =>
        query.queryKey.includes("list"),
    });
    // But not detail queries - they need exact match
  },
});
```

### Prefetch on Hover

```typescript
function UserList() {
  const queryClient = useQueryClient();

  const handleHover = (userId: string) => {
    queryClient.prefetchQuery({
      queryKey: ["users", userId],
      queryFn: () => fetchUser(userId),
    });
  };

  return (
    <div onMouseEnter={() => handleHover(user.id)}>
      {user.name}
    </div>
  );
}
```

## Type Safety

### Define Types for Query Functions

```typescript
interface User {
  id: string;
  name: string;
  email: string;
}

interface FetchUsersResult {
  users: User[];
  total: number;
}

const fetchUsers = async (filters: UserFilters): Promise<FetchUsersResult> => {
  const response = await fetch(`/api/users?${new URLSearchParams(filters)}`);
  return response.json();
};

// Type-safe in component
const { data } = useQuery({
  queryKey: ["users", filters],
  queryFn: () => fetchUsers(filters),
});
// data is typed as FetchUsersResult
```

### Type-Safe Mutations

```typescript
interface CreateUserInput {
  name: string;
  email: string;
}

interface CreateUserOutput {
  id: string;
  name: string;
  email: string;
}

const useCreateUser = () =>
  useMutation<CreateUserOutput, Error, CreateUserInput>({
    mutationFn: async (input) => {
      const response = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify(input),
      });
      return response.json();
    },
  });

// Usage
const { mutate } = useCreateUser();
mutate({ name: "John", email: "john@example.com" }); // Typed
```

## SSR Best Practices

### Prefetch on Server

```typescript
import { dehydrate, QueryClient } from "@tanstack/react-query";

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
```

### Use HydrationBoundary

```typescript
"use client";

import { HydrationBoundary } from "@tanstack/react-query";

export default function Layout({ children, dehydratedState }) {
  return (
    <HydrationBoundary state={dehydratedState}>
      {children}
    </HydrationBoundary>
  );
}
```

## Common Pitfalls

| Pitfall | Solution |
|---------|----------|
| Not handling loading state | Always check `isLoading` |
| Query keys too specific | Use key factories |
| Not invalidating on mutations | Use `onSuccess` to invalidate |
| Not cancelling queries | Use `cancelQueries` in `onMutate` |
| Over-fetching | Set appropriate `staleTime` |
| Memory leaks | Use proper `gcTime` |

## Summary

| Practice | Benefit |
|----------|---------|
| Key factories | Consistent, type-safe keys |
| Error handling | Graceful degradation |
| staleTime optimization | Fewer network requests |
| Optimistic updates | Better UX |
| Invalidation strategy | Data consistency |
| TypeScript | Catch errors early |