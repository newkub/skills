# tRPC React Query Integration

## Query Client Setup

```typescript
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false,
    },
  },
})
```

## useQuery

```typescript
const { data, isLoading, error, refetch } = trpc.getUser.useQuery(
  { id: '1' },
  {
    enabled: !!id,
    staleTime: 1000 * 60,
  }
)
```

## useMutation

```typescript
const mutation = trpc.createUser.useMutation({
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: [['users']] })
  },
})

mutation.mutate({ name: 'John', email: 'john@example.com' })
```

## useInfiniteQuery

```typescript
const { data, fetchNextPage, hasNextPage } = trpc.getPosts.useInfiniteQuery(
  { limit: 10 },
  {
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  }
)
```

## Prefetching

```typescript
const queryClient = trpc.useContext()

queryClient.getUser.prefetch({ id: '1' })
```

## Optimistic Updates

```typescript
const mutation = trpc.updatePost.useMutation({
  onMutate: async (newPost) => {
    await queryClient.cancelQueries(['post', newPost.id])
    const previousPost = queryClient.getQueryData(['post', newPost.id])
    queryClient.setQueryData(['post', newPost.id], newPost)
    return { previousPost }
  },
  onError: (err, newPost, context) => {
    queryClient.setQueryData(['post', newPost.id], context.previousPost)
  },
})
```
