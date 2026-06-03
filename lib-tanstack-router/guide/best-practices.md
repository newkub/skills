# Best Practices

แนวทางปฏิบัติที่ดีสำหรับ TanStack Router

## Project Structure

### แนะนำโครงสร้าง

```
src/
├── routes/
│   ├── route.tsx           # Root route (หรือ route.ts)
│   ├── index.tsx           # / route
│   ├── posts/
│   │   ├── index.tsx       # /posts
│   │   ├── $postId.tsx     # /posts/:postId
│   │   └── $postId.edit.tsx # /posts/:postId/edit
│   └── users/
│       └── index.tsx       # /users
├── router.tsx              # Router setup
└── main.tsx
```

### แยก route definitions

```typescript
// src/routes/__root.tsx
import { createRootRoute, Outlet } from '@tanstack/react-router'

export const rootRoute = createRootRoute({
  component: () => <Outlet />,
})

// src/routes/posts.tsx
import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './__root'

export const postsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/posts',
})

// src/routes/posts.$postId.tsx
import { createRoute } from '@tanstack/react-router'
import { postsRoute } from './posts'

export const postRoute = createRoute({
  getParentRoute: () => postsRoute,
  path: '$postId',
})
```

## Type Safety

### ใช้ Router Type Declaration

```typescript
// src/router.tsx
import { createRouter, rootRoute } from './routes'

const router = createRouter({ routeTree: rootRoute })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
```

### Type-Safe Links

```typescript
import { Link, useRouter } from '@tanstack/react-router'

// Link - ใช้ `to` กับ path pattern
<Link to="/posts/$postId" params={{ postId: '123' }}>

// Programmatic - ใช้ route name หรือ path
const router = useRouter()
router.navigate({ to: '/posts/$postId', params: { postId: '123' } })
```

## Data Loading

### ใช้ Loader สำหรับ Data Fetching

```typescript
// ✅ DO: ใช้ loader สำหรับ server data
const postRoute = createRoute({
  getParentRoute: () => postsRoute,
  path: '$postId',
  loader: async ({ params }) => {
    const post = await fetchPost(params.postId)
    if (!post) throw notFound()
    return { post }
  },
})

// ❌ DON'T: fetch ใน useEffect
function Post() {
  const [post, setPost] = useState(null)
  
  useEffect(() => {
    fetchPost(id).then(setPost) // ไม่แนะนำ
  }, [id])
  
  return <div>{post?.title}</div>
}
```

### Cache Strategy

```typescript
const router = createRouter({
  routeTree,
  loaderDefaults: {
    maxAge: 1000 * 60 * 5,       // Cache valid for 5 min
    staleMaxAge: 1000 * 60 * 30, // Stale after 30 min
  },
})
```

## Search Params

### Schema Validation

```typescript
import { z } from 'zod'

const searchSchema = z.object({
  page: z.coerce.number().min(1).default(1),
  sort: z.enum(['asc', 'desc']).default('desc'),
  filter: z.string().optional(),
})

const postsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/posts',
  validateSearch: searchSchema,
})
```

### Immutable Updates

```typescript
function Pagination({ currentPage }) {
  const router = useRouter()
  
  return (
    <button onClick={() => router.navigate({
      to: '/posts',
      search: { ...prevSearch, page: currentPage + 1 }
    })}>
      Next
    </button>
  )
}
```

## Error Handling

### Error Boundaries

```typescript
const postRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/posts/$postId',
  errorComponent: ({ error }) => {
    if (error.status === 404) {
      return <NotFound />
    }
    return <ErrorMessage error={error} />
  },
})
```

### Loading States

```typescript
const postRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/posts/$postId',
  pendingComponent: () => <Skeleton />,
})
```

## Performance

### Code Splitting

```typescript
// แยกโหลด route components
const postRoute = createRoute({
  getParentRoute: () => postsRoute,
  path: '$postId',
  lazy: () => import('./lazy/post'),
})
```

### Preloading

```typescript
// Preload เมื่อ hover (แนะนำ)
<Link to="/posts" preload="intent">Posts</Link>

// Preload เมื่อ render
<Link to="/posts" preload="render">Posts</Link>
```

## Navigation

### Block Navigation

```typescript
import { useBlocker } from '@tanstack/react-router'

function EditForm() {
  const [isDirty, setIsDirty] = useState(false)
  
  useBlocker({
    blockerFn: (tx) => isDirty && !confirm('Leave without saving?'),
  })
  
  return <form onChange={() => setIsDirty(true)}>...</form>
}
```

### Redirect

```typescript
import { redirect } from '@tanstack/react-router'

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/dashboard',
  beforeLoad: ({ context }) => {
    if (!context.auth) {
      throw redirect({ to: '/login', search: { from: '/dashboard' } })
    }
  },
})
```

## Testing

### Test Utilities

```typescript
import { createMemoryHistory } from '@tanstack/history'
import { render, screen } from '@testing-library/react'
import { RouterProvider, createRouter } from '@tanstack/react-router'

function setup(initialPath: string) {
  const history = createMemoryHistory({ initialEntries: [initialPath] })
  const router = createRouter({ routeTree, history })
  
  return render(<RouterProvider router={router} />)
}

test('renders post', () => {
  setup('/posts/123')
  expect(screen.getByText('Post: 123')).toBeInTheDocument()
})
```

## Common Patterns

### Auth Flow

```typescript
// Auth context
const rootRoute = createRootRoute({
  context: {
    auth: null as AuthUser | null,
  },
})

// Protected route
const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/dashboard',
  beforeLoad: ({ context }) => {
    if (!context.auth) {
      throw redirect({ to: '/login' })
    }
  },
})
```

### Nested Layouts

```typescript
// Layout with sidebar
const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/dashboard',
  component: () => (
    <div className="flex">
      <Sidebar />
      <main><Outlet /></main>
    </div>
  ),
})
```

## Don'ts

| Anti-pattern | Recommendation |
|--------------|----------------|
| Fetch in useEffect | Use loader |
| Manual URL manipulation | Use router.navigate() |
| No search validation | Use validateSearch with zod |
| No error boundaries | Add errorComponent |
| No loading states | Add pendingComponent |