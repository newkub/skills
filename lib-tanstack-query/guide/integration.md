# Integration

## Purpose

แนวทางการรวม TanStack Query กับ frameworks และ libraries ต่างๆ

## Scope

- React frameworks (Next.js, Remix)
- State management integration
- Form libraries
- Authentication
- Testing

## Next.js

### App Router (Server Components)

```typescript
// app/providers.tsx
"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
```

### Server-Side Prefetching

```typescript
// app/users/page.tsx
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { HydrationBoundary } from "@tanstack/react-query";
import { getUsers } from "@/lib/api";

export default async function UsersPage() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <UsersList />
    </HydrationBoundary>
  );
}
```

### Pages Router

```typescript
// pages/_app.tsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
```

### With Middleware

```typescript
// middleware.ts
import { NextResponse } from "next/server";

export function middleware() {
  const response = NextResponse.next();
  response.headers.set("x-custom-header", "value");
  return response;
}
```

## Remix

### Setup

```typescript
// app/root.tsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
```

### With loaders

```typescript
// app/routes/users.tsx
import { useLoaderData } from "@remix-run/react";
import { useQuery } from "@tanstack/react-query";
import { json } from "@remix-run/node";

export async function loader() {
  return json({ users: await getUsers() });
}

export default function Users() {
  const { users } = useLoaderData<typeof loader>();

  const { data } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    initialData: users,
  });

  return <UserList users={data} />;
}
```

## Authentication

### Protected Queries

```typescript
function useAuthQuery(options: UseQueryOptions) {
  const { user } = useAuth();

  return useQuery({
    ...options,
    enabled: !!user && options.enabled,
  });
}

// Usage
const { data } = useAuthQuery({
  queryKey: ["profile"],
  queryFn: fetchProfile,
});
```

### Token Refresh

```typescript
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: (failureCount, error) => {
        if (error.status === 401) {
          // Refresh token
          return refreshToken().then(() => true);
        }
        return failureCount < 3;
      },
    },
  },
});
```

## Form Libraries

### React Hook Form + Zod

```typescript
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
});

function UserForm() {
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(schema),
  });

  const { mutate } = useMutation({
    mutationFn: createUser,
  });

  return (
    <form onSubmit={handleSubmit((data) => mutate(data))}>
      <input {...register("name")} />
      <input {...register("email")} />
      <button type="submit">Submit</button>
    </form>
  );
}
```

## State Management

### Combine with Zustand

```typescript
import { create } from "zustand";
import { useQuery } from "@tanstack/react-query";

const useUIStore = create((set) => ({
  selectedId: null,
  setSelectedId: (id) => set({ selectedId: id }),
}));

function UserDetail() {
  const selectedId = useUIStore((state) => state.selectedId);
  const { data } = useQuery({
    queryKey: ["users", selectedId],
    queryFn: () => fetchUser(selectedId),
    enabled: !!selectedId,
  });

  return <div>{data?.name}</div>;
}
```

### Combine with Jotai

```typescript
import { atom } from "jotai";
import { useAtomValue } from "jotai";
import { useQuery } from "@tanstack/react-query";

const userIdAtom = atom<string | null>(null);

function UserDetail() {
  const userId = useAtomValue(userIdAtom);
  const { data } = useQuery({
    queryKey: ["users", userId],
    queryFn: () => fetchUser(userId),
    enabled: !!userId,
  });

  return <div>{data?.name}</div>;
}
```

## Testing

### with React Testing Library

```typescript
import { render, screen, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { server } from "./mocks/server";
import { http, HttpResponse } from "msw";

function createWrapper() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return ({ children }) => (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}

test("fetches users", async () => {
  server.use(
    http.get("/api/users", () => HttpResponse.json([{ id: "1", name: "John" }]))
  );

  render(<UserList />, { wrapper: createWrapper() });

  await waitFor(() => {
    expect(screen.getByText("John")).toBeInTheDocument();
  });
});
```

### with Vitest

```typescript
import { describe, it, expect } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useUser } from "./useUser";

function createWrapper() {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  });

  return ({ children }) => (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}

describe("useUser", () => {
  it("fetches user", async () => {
    const { result } = renderHook(() => useUser("1"), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(result.current.data.name).toBe("John");
  });
});
```

## Error Boundaries

```typescript
import { QueryErrorResetBoundary } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";

function App() {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary onReset={reset}>
          <Component />
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
}
```

## Summary

| Integration | Pattern |
|-------------|---------|
| **Next.js** | Providers + HydrationBoundary |
| **Remix** | Loaders + useQuery initialData |
| **Auth** | Token refresh + protected queries |
| **Forms** | React Hook Form + Zod |
| **State** | Zustand/Jotai for local state |
| **Testing** | Mock service worker + waitFor |