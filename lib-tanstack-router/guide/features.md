# คุณสมบัติ

ภาพรวมคุณสมบัติหลักของ TanStack Router

## Type Safety

### 100% Type-Safe Without Code Generation

TanStack Router inference types อัตโนมัติ ไม่ต้องใช้ code generation

```typescript
import { createRootRoute, createRoute } from '@tanstack/react-router'

const rootRoute = createRootRoute()
const postRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/posts/$postId',
  component: () => {
    // Type-safe params!
    const { postId } = postRoute.useParams()
    return <div>Post: {postId}</div>
  },
})
```

### Search Params Validation

```typescript
const postsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/posts',
  validateSearch: (search) => ({
    page: Number(search.page ?? 1),
    sort: search.sort as 'asc' | 'desc' ?? 'desc',
  }),
})
```

## File-Based Routing

### Automatic Route Generation

```
src/routes/
├── route.ts              → /
├── posts.tsx             → /posts
├── posts.$postId.tsx     → /posts/:postId
└── posts.$postId.edit.tsx → /posts/:postId/edit
```

### Route File Conventions

| Pattern | Route Path | Description |
|---------|------------|-------------|
| `route.ts` | `/` | Index route |
| `route.tsx` | `/` | Index with component |
| `about.tsx` | `/about` | Static route |
| `posts.tsx` | `/posts` | Nested route |
| `$postId.tsx` | `/:postId` | Dynamic segment |
| `($postId).tsx` | `/:postId` | Optional (with parentheses) |
| `*.tsx` | `/*` | Wildcard |
| `(group).tsx` | - | Group without path |
| `layout.tsx` | - | Layout wrapper |

## Data Loading

### Loaders

```typescript
const postsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/posts',
  loader: async ({ context }) => {
    return { posts: await fetchPosts() }
  },
})
```

### Caching

```typescript
const router = createRouter({
  routeTree,
  loaderDefaults: {
    maxAge: 1000 * 60 * 5, // 5 minutes
    staleMaxAge: 1000 * 60 * 60, // 1 hour
  },
})
```

### Deferred Loading

```typescript
const postRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/posts/$postId',
  loader: async ({ params }) => {
    const post = await fetchPost(params.postId)
    const comments = fetchComments(params.postId) // Not awaited!
    return {
      post,
      // Deferred
      comments: await comments,
    }
  },
})
```

## Search Params API

### Schema Validation

```typescript
import { z } from 'zod'

const searchSchema = z.object({
  page: z.number().min(1).default(1),
  sort: z.enum(['asc', 'desc']).default('desc'),
  filter: z.string().optional(),
})

const postsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/posts',
  validateSearch: searchSchema,
})
```

### Type-Safe Access

```typescript
function PostsList() {
  const search = postsRoute.useSearch({
    // Select specific fields
    select: (s) => ({ page: s.page, sort: s.sort }),
  })
  
  return <div>Page {search.page}</div>
}
```

## Nested Routes

### Layout Routes

```typescript
const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/dashboard',
  component: () => (
    <div class="dashboard">
      <Sidebar />
      <Outlet /> {/* Child routes */}
    </div>
  ),
})
```

### Route Isolation

```typescript
// แต่ละ route มี state แยกกัน
const postsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/posts',
})

// posts/index.tsx
const postsIndexRoute = createRoute({
  getParentRoute: () => postsRoute,
  path: '/',
})

// posts/$postId.tsx
const postRoute = createRoute({
  getParentRoute: () => postsRoute,
  path: '$postId',
})
```

## Navigation

### Link Component

```typescript
import { Link } from '@tanstack/react-router'

// Basic link
<Link to="/posts">Posts</Link>

// With params
<Link to="/posts/$postId" params={{ postId: '123' }}>Post</Link>

// With search params
<Link to="/posts" search={{ page: 2 }}>Next Page</Link>

// Preload on hover
<Link to="/posts" preload="intent">Posts</Link>
```

### Programmatic Navigation

```typescript
const router = useRouter()

// Navigate
router.navigate({ to: '/posts' })

// With params
router.navigate({ to: '/posts/$postId', params: { postId: '123' } })

// Go back
router.history.back()
```

## Code Splitting

### Automatic Splitting

```typescript
// แต่ละ route file = separate chunk
const postsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'posts',
  lazy: () => import('./routes/posts.lazy'),
})
```

### Preloading

```typescript
// Preload route on hover
<Link to="/posts" preload="intent">Posts</Link>

// Preload on view
<Link to="/posts" preload="render">Posts</Link>
```

## SSR Support

### Server-Side Rendering

```typescript
import { createStaticHandler, createStaticRouter } from '@tanstack/react-router'

const { data: routeTree } = await fetch('/route-tree')
const context = await queryRouter({ request, routeTree })
const router = createStaticRouter({ routeTree, context })
```

### Streaming

```typescript
const router = createRouter({
  routeTree,
  streaming: {
    enabled: true,
  },
})
```

## Integration Features

### TanStack Query Integration

```typescript
import { useQuery } from '@tanstack/react-query'
import { useLoaderData } from '@tanstack/react-router'

function Posts() {
  const { queryKey } = postsRoute.useLoaderData()
  const { data } = useQuery({
    queryKey,
    queryFn: fetchPosts,
  })
  
  return <div>{data}</div>
}
```

### Route Masking

```typescript
<Link
  to="/posts"
  mask={{
    to: '/dashboard/posts',
    search: (search) => ({ tab: 'posts' }),
  }}
>
  View Posts
</Link>
```

### View Transitions

```typescript
import { useViewTransition } from '@tanstack/react-router'

function MyComponent() {
  const { isTransitioning } = useViewTransition()
  
  return (
    <Link to="/new-page" viewTransition>
      Navigate with Animation
    </Link>
  )
}
```

## Performance Features

| Feature | Description |
|---------|-------------|
| Automatic Code Splitting | Split bundles by route |
| Preloading | Load routes before navigation |
| Caching | Cache loader data |
| Pending States | Show loading indicators |
| Error Boundaries | Handle errors gracefully |
| Suspense | Stream data progressively |