# การตั้งค่า

คู่มือการตั้งค่า TanStack Router

## Basic Configuration

### สร้าง Router

```typescript
// src/router.tsx
import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router'

// Root route
const rootRoute = createRootRoute({
  component: () => (
    <div>
      <nav>Navigation</nav>
      <Outlet />
      <footer>Footer</footer>
    </div>
  ),
})

// Child routes
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
})

const postsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'posts',
})

const postRoute = createRoute({
  getParentRoute: () => postsRoute,
  path: '$postId',
})

// Build route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  postsRoute.addChildren([postRoute]),
])

// Create router
export const router = createRouter({ routeTree })

// Type declaration
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
```

## Route Options

### Full Configuration

```typescript
const postRoute = createRoute({
  getParentRoute: () => postsRoute,
  path: '$postId',
  
  // Component
  component: PostDetail,
  
  // Loader
  loader: async ({ params, context }) => {
    return { post: await fetchPost(params.postId) }
  },
  
  // Before load
  beforeLoad: async ({ params, location }) => {
    if (!isAuthenticated()) {
      throw redirect({ to: '/login' })
    }
  },
  
  // Error component
  errorComponent: ({ error }) => <ErrorDisplay error={error} />,
  
  // Loading component
  pendingComponent: () => <LoadingSkeleton />,
  
  // Meta
  meta: [{ title: 'Post Detail' }],
  
  // Search params validation
  validateSearch: (search) => ({
    page: Number(search.page ?? 1),
  }),
})
```

## Router Configuration

### All Options

```typescript
const router = createRouter({
  routeTree,
  
  // History
  history: createBrowserHistory(),
  
  // Context
  context: {
    auth: null as AuthUser | null,
  },
  
  // Default loader options
  loaderDefaults: {
    maxAge: 1000 * 60 * 5,      // 5 minutes
    staleMaxAge: 1000 * 60 * 60, // 1 hour
    gcMaxAge: 1000 * 60 * 10,   // 10 minutes
  },
  
  // Not found route
  notFoundMode: 'fuzzy', // or '404'
  
  // Preload
  defaultPreload: 'intent', // 'render' | 'intent' | false
  
  // Error handling
  onError: (error) => {
    console.error('Router error:', error)
  },
})
```

## Search Params Schema

### With Zod

```typescript
import { z } from 'zod'

const searchSchema = z.object({
  page: z.coerce.number().min(1).default(1),
  sort: z.enum(['asc', 'desc']).default('desc'),
  filter: z.string().optional(),
  tags: z.array(z.string()).default([]),
})

const postsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/posts',
  validateSearch: searchSchema,
})
```

### Programmatic Validation

```typescript
const postsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/posts',
  validateSearch: (raw) => {
    const parsed = searchSchema.safeParse(raw)
    if (!parsed.success) {
      return { page: 1, sort: 'desc' }
    }
    return parsed.data
  },
})
```

## Route Meta

### Meta Tags

```typescript
const postRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/posts/$postId',
  meta: [
    { title: 'Post' },
    { name: 'description', content: 'Post description' },
  ],
})
```

### Dynamic Meta

```typescript
const postRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/posts/$postId',
  meta: ({ params }) => [
    { title: `Post: ${params.postId}` },
  ],
})
```

## Context

### Type-Safe Context

```typescript
// Define root route with context
const rootRoute = createRootRoute({
  context: {
    auth: null as AuthUser | null,
    db: null as Database,
  },
})

// Use in loader
const postRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/posts/$postId',
  loader: ({ params, context }) => {
    if (!context.auth) {
      throw redirect({ to: '/login' })
    }
    return { post: context.db.posts.get(params.postId) }
  },
})

// Create router with context
const router = createRouter({
  routeTree,
  context: {
    auth: await getAuthUser(),
    db: createDatabase(),
  },
})
```

## History Types

### Browser History (Default)

```typescript
import { createBrowserHistory } from '@tanstack/history'

const router = createRouter({
  routeTree,
  history: createBrowserHistory(),
})
```

### Hash History

```typescript
import { createHashHistory } from '@tanstack/history'

const router = createRouter({
  routeTree,
  history: createHashHistory({
    baseHref: '/app',
  }),
})
```

### Memory History

```typescript
import { createMemoryHistory } from '@tanstack/history'

const router = createRouter({
  routeTree,
  history: createMemoryHistory({
    initialEntries: ['/'],
    initialIndex: 0,
  }),
})
```

## Environment Variables

### Vite

```typescript
// vite.config.ts
export default defineConfig({
  define: {
    'import.meta.env.VITE_APP_BASE_PATH': JSON.stringify(process.env.BASE_PATH),
  },
})
```

## Advanced Options

### Custom Error Handling

```typescript
const router = createRouter({
  routeTree,
  onError: (error) => {
    if (error.status === 404) {
      // Handle 404
    }
    Sentry.captureException(error)
  },
})
```

### Custom Link Component

```typescript
import { Link } from '@tanstack/react-router'

const AppLink = Link.options({
  activeProps: {
    class: 'active',
  },
  inactiveProps: {
    class: 'inactive',
  },
})
```

### Scroll Restoration

```typescript
const router = createRouter({
  routeTree,
  defaultScrollRestoration: 'manual',
})
```

## Best Practices

### Environment-Based Config

```typescript
const createRouter = (basePath: string) => {
  return createRouter({
    routeTree,
    history: createBrowserHistory({ basepath: basePath }),
    context: {
      env: process.env.NODE_ENV,
    },
  })
}
```

### Type-Safe Defaults

```typescript
const router = createRouter({
  routeTree,
  loaderDefaults: {
    maxAge: 1000 * 60 * 5,
  },
})

// In route
const postRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/posts/$postId',
  loaderOptions: {
    maxAge: 1000 * 60 * 10, // Override for this route
  },
})