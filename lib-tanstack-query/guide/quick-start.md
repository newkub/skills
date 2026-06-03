# Quick Start

## Purpose

คู่มือเริ่มต้นใช้งาน TanStack Query ตั้งแต่การติดตั้งจนถึงการใช้งาน query แรก

## Step 1: Install

```bash
npm install @tanstack/react-query
```

## Step 2: Setup Provider

```typescript
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <YourApp />
    </QueryClientProvider>
  );
}
```

## Step 3: Fetch Data

### Basic Query

```typescript
import { useQuery } from "@tanstack/react-query";

function Users() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: () => fetch("/api/users").then((res) => res.json()),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

### Query with Parameters

```typescript
function UserProfile({ userId }) {
  const { data, isLoading } = useQuery({
    queryKey: ["users", userId],
    queryFn: () => fetch(`/api/users/${userId}`).then((res) => res.json()),
    enabled: !!userId,
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.email}</p>
    </div>
  );
}
```

## Step 4: Create/Update Data

### Basic Mutation

```typescript
import { useMutation, useQueryClient } from "@tanstack/react-query";

function CreateUser() {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: (newUser) =>
      fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      }).then((res) => res.json()),
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
    },
  });

  return (
    <button onClick={() => mutate({ name: "John", email: "john@example.com" })}>
      Create User
    </button>
  );
}
```

### Mutation with Feedback

```typescript
function CreateUser() {
  const { mutate, isLoading, isSuccess, isError } = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      // Show success message
    },
  });

  return (
    <div>
      <button onClick={() => mutate({ name: "John" })}>
        {isLoading ? "Creating..." : "Create User"}
      </button>
      {isSuccess && <span>User created!</span>}
      {isError && <span>Error creating user</span>}
    </div>
  );
}
```

## Step 5: Update Cache Directly

### Optimistic Update

```typescript
const mutation = useMutation({
  mutationFn: updateUser,
  onMutate: async (newUser) => {
    await queryClient.cancelQueries(["users"]);
    const previous = queryClient.getQueryData(["users"]);
    queryClient.setQueryData(["users"], (old) =>
      old.map((user) => (user.id === newUser.id ? newUser : user))
    );
    return { previous };
  },
  onError: (err, newUser, context) => {
    queryClient.setQueryData(["users"], context.previous);
  },
  onSettled: () => {
    queryClient.invalidateQueries(["users"]);
  },
});
```

## Common Patterns

### Parallel Queries

```typescript
const usersQuery = useQuery({ queryKey: ["users"], queryFn: fetchUsers });
const postsQuery = useQuery({ queryKey: ["posts"], queryFn: fetchPosts });

// Both run in parallel
const { data: users } = usersQuery;
const { data: posts } = postsQuery;
```

### Dependent Queries

```typescript
const userQuery = useQuery({
  queryKey: ["user", userId],
  queryFn: () => fetchUser(userId),
  enabled: !!userId,
});

const postsQuery = useQuery({
  queryKey: ["posts", "user", userId],
  queryFn: () => fetchUserPosts(userId),
  enabled: !!userId && userQuery.isSuccess,
});
```

### Paginated Queries

```typescript
const [page, setPage] = useState(0);

const { data } = useQuery({
  queryKey: ["posts", page],
  queryFn: () => fetchPosts({ page, limit: 10 }),
});
```

## Next Steps

| Topic | Description |
|-------|-------------|
| [Configuration](configuration.md) | QueryClient setup and options |
| [Features](features.md) | All available features |
| [Best Practices](best-practices.md) | Production patterns |
| [Integration](integration.md) | Framework-specific guides |