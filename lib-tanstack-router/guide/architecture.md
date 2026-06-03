# Architecture

สถาปัตยกรรมภายในของ TanStack Router

## Core Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                         TanStack Router                              │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐                │
│  │   Route     │  │   Router    │  │   Link      │                │
│  │   Tree      │──│   Engine     │──│   Component │                │
│  │             │  │             │  │             │                │
│  └─────────────┘  └─────────────┘  └─────────────┘                │
│         │                │                │                         │
│         ▼                ▼                ▼                         │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐                │
│  │   Loader    │  │   Matcher    │  │   History   │                │
│  │   Cache     │  │              │  │   Adapter   │                │
│  └─────────────┘  └─────────────┘  └─────────────┘                │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

## Route Tree

### Tree Structure

```typescript
// Route tree เป็น immutable structure
interface RouteTree {
  root: RootRoute
  children: RouteNode[]
}

interface RouteNode {
  route: Route
  children: RouteNode[]
  fullPath: string
  fullPathPattern: string
}
```

### Tree Operations

```typescript
// เพิ่ม children
const routeTree = rootRoute.addChildren([
  postsRoute.addChildren([postRoute]),
])

// ค้นหา route
const route = routeTree.find(({ params }) => params.postId === '123')

// Tree traversal
routeTree.forEach((node) => {
  console.log(node.route.path)
})
```

## Router Engine

### Core Components

```typescript
// Router state
interface RouterState {
  location: Location
  matches: RouteMatch[]
  resolvedParams: ResolvedParams
  loaderData: LoaderData
  isLoading: boolean
  error: Error | null
}
```

### Matching Flow

```
URL Change
    │
    ▼
┌────────────────────────────────────────────────────────────────────┐
│                     Route Matcher                                   │
├────────────────────────────────────────────────────────────────────┤
│  1. Parse URL → segments                                           │
│  2. Match segments → route candidates                             │
│  3. Validate params → matched route                               │
│  4. Resolve context → final match                                 │
└────────────────────────────────────────────────────────────────────┘
    │
    ▼
┌────────────────────────────────────────────────────────────────────┐
│                    Component Render                                 │
├────────────────────────────────────────────────────────────────────┤
│  1. Execute loaders (parallel)                                     │
│  2. Update loader data                                             │
│  3. Render components                                              │
│  4. Handle outlet                                                   │
└────────────────────────────────────────────────────────────────────┘
```

## Type System

### Type Inference

```typescript
// Types ถูก infer จาก route definitions
interface Route<TRouteTree extends RouteTree> {
  // Params types
  useParams: <T>(opts?: { select?: (params: RawParams) => T }) => T
  
  // Search types
  useSearch: <T>(opts?: { select?: (search: RawSearch) => T }) => T
  
  // Loader data types
  useLoaderData: <T>(opts?: { select?: (data: LoaderData) => T }) => T
}
```

### Declaration Merging

```typescript
// ใช้ module declaration สำหรับ global types
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// ทำให้ทุก route มี type ที่ถูกต้อง
const params = postRoute.useParams() // { postId: string }
const search = postsRoute.useSearch() // { page: number, sort: string }
```

## Loader Cache

### Cache Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                         Loader Cache                                │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  Cache Entry:                                                       │
│  {                                                                  │
│    data: LoaderData,                                               │
│    timestamp: number,                                              │
│    maxAge: number,                                                 │
│    staleMaxAge: number,                                            │
│    key: string (route path + params)                               │
│  }                                                                 │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Cache Invalidation

```typescript
// กำหนด cache behavior ต่อ route
const postRoute = createRoute({
  getParentRoute: () => postsRoute,
  path: '$postId',
  loaderOptions: {
    maxAge: 1000 * 60 * 5,       // Cache for 5 minutes
    staleMaxAge: 1000 * 60 * 30, // Mark stale after 30 min
  },
})

// Programmatic invalidation
router.invalidateLoader({
  routeId: postRoute.id,
  params: { postId: '123' },
})
```

## History Adapter

### Interface

```typescript
interface HistoryAdapter {
  readonly location: Location
  readonly state: HistoryState
  
  // Navigation
  navigate(options: NavigateOptions): Promise<void>
  push(path: string, state?: HistoryState): void
  replace(path: string, state?: HistoryState): void
  go(delta: number): void
  back(): void
  forward(): void
  
  // Listeners
  subscribe(listener: HistoryListener): () => void
  listen(listener: HistoryListener): () => void
}
```

### Implementation Types

```typescript
// Browser - ใช้ window.history
createBrowserHistory()

// Hash - ใช้ hash fragment
createHashHistory({ baseHref: '/app' })

// Memory - สำหรับ SSR/testing
createMemoryHistory({
  initialEntries: ['/'],
  initialIndex: 0,
})
```

## React Integration

### Component Hierarchy

```
<RouterProvider>
    │
    ├── Router context provider
    │
    └── <Outlet>
            │
            ├── Root route component
            │       │
            │       └── <Outlet>
            │               │
            │               ├── Posts route
            │               │       │
            │               │       └── <Outlet>
            │               │               │
            │               │               └── Post route
            │               │
            │               └── Users route
            │
            └── Sidebar (if root route)
```

### Context Flow

```typescript
// Router creates context
const RouterProvider: React.FC<{ router: Router }> = ({ router }) => {
  return (
    <RouterContext.Provider value={router}>
      {router.outlet}
    </RouterContext.Provider>
  )
}

// Child components access via hooks
function useParams() {
  const router = useRouter()
  return router.state.location.params
}
```

## Performance Optimizations

### Code Splitting

```typescript
// Lazy route - สร้าง separate chunk
const postsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'posts',
  lazy: () => import('./lazy/posts'),
})

// Preload strategy
<Link to="/posts" preload="intent"> // เมื่อ hover
<Link to="/posts" preload="render"> // เมื่อ visible
```

### Render Optimizations

```typescript
// Memoized route components
const PostComponent = React.memo(({ postId }) => {
  const params = postRoute.useParams()
  return <div>{params.postId}</div>
})

// Selective re-renders
function PostList() {
  const posts = postRoute.useLoaderData({
    select: (data) => data.posts, // Only re-render on posts change
  })
}
```

## SSR Architecture

### Static Rendering

```typescript
import { createStaticRouter, createStaticHandler } from '@tanstack/react-router'

// Server
const handler = createStaticHandler({ routeTree })

const response = await handler.query(new Request('http://localhost/posts'))

// Client - hydrate
const router = createStaticRouter({
  routeTree,
  context: handler.getContext(),
})
```

### Streaming

```typescript
const router = createRouter({
  routeTree,
  streaming: {
    enabled: true,
    // Stream pending elements
  },
})
```

## Data Flow Diagram

```
┌─────────────────────────────────────────────────────────────────────┐
│                         Data Flow                                    │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  URL ────▶ Router ────▶ Matcher ────▶ Route                        │
│   │          │             │           │                            │
│   │          │             │           ▼                            │
│   │          │             │     Loader (async)                     │
│   │          │             │           │                            │
│   │          │             │           ▼                            │
│   │          │             │     Cache                               │
│   │          │             │           │                            │
│   │          │             ▼           ▼                            │
│   │          │       RouteMatch    LoaderData                       │
│   │          │             │           │                            │
│   │          ▼             ▼           ▼                            │
│   │      Component ◀────────┴───────────┘                           │
│   │          │                                                     │
│   ▼          ▼                                                     │
│  Render ──── <Outlet /> ──── Child routes                          │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```