# Integration

การเชื่อมต่อ TanStack Router กับ libraries อื่นๆ

## TanStack Query

### Setup Integration

```typescript
import { createRootRoute, createRouter } from '@tanstack/react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from '@tanstack/react-router'

const queryClient = new QueryClient()

const rootRoute = createRootRoute({
  component: () => <Outlet />,
})

const router = createRouter({
  routeTree: rootRoute,
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}
```

### Use with Loaders

```typescript
import { useLoaderQuery } from '@tanstack/react-query'

const postRoute = createRoute({
  getParentRoute: () => postsRoute,
  path: '$postId',
  loader: async ({ params }) => {
    return { queryKey: ['post', params.postId] }
  },
  component: PostComponent,
})

function PostComponent() {
  const { queryKey } = postRoute.useLoaderData()
  const { data: post } = useQuery({ queryKey })
  
  return <div>{post?.title}</div>
}
```

### Automatic Cache Sync

```typescript
import { router as globalRouter } from './router'

// Invalidate when navigating
router.navigate({ to: '/posts' }).then(() => {
  queryClient.invalidateQueries({ queryKey: ['posts'] })
})
```

## TanStack Form

### Form Integration

```typescript
import { Form } from '@tanstack/react-form'
import { useNavigate } from '@tanstack/react-router'

function CreatePost() {
  const navigate = useNavigate()
  
  return (
    <Form
      onSubmit={async (values) => {
        await createPost(values)
        navigate({ to: '/posts' })
      }}
    >
      <Field name="title">
        {({ value, onChange }) => (
          <input
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
        )}
      </Field>
      <button type="submit">Create</button>
    </Form>
  )
}
```

## Zustand

### State Management

```typescript
import { create } from 'zustand'
import { useNavigate } from '@tanstack/react-router'

const useAppStore = create<{
  sidebarOpen: boolean
  toggleSidebar: () => void
}>((set) => ({
  sidebarOpen: true,
  toggleSidebar: () => set((s) => ({ sidebarOpen: !s.sidebarOpen })),
}))

// In layout
function Layout() {
  const { sidebarOpen, toggleSidebar } = useAppStore()
  
  return (
    <div>
      <button onClick={toggleSidebar}>Toggle</button>
      {sidebarOpen && <Sidebar />}
      <Outlet />
    </div>
  )
}
```

## React Query with SSR

```typescript
import { dehydrate } from '@tanstack/react-query'
import { createStaticHandler, createStaticRouter } from '@tanstack/react-router'

async function getServerData(url: string) {
  const queryClient = new QueryClient()
  
  const { routeTree } = await fetchRoutes()
  const context = await queryRouter({
    request: new Request(url),
    routeTree,
    context: { queryClient },
  })
  
  return {
    dehydratedState: dehydrate(queryClient),
    router: createStaticRouter({ routeTree, context }),
  }
}
```

## React Native

```typescript
import { createRouter } from '@tanstack/react-router'
import { createHashHistory } from '@tanstack/history'

// For React Native
const router = createRouter({
  routeTree,
  history: createHashHistory(), // ใช้ hash แทน path
})
```

## View Transitions API

```typescript
import { useViewTransition } from '@tanstack/react-router'

function Post() {
  const { isTransitioning } = useViewTransition()
  
  return (
    <>
      <Link to="/posts/123" viewTransition>
        View Post
      </Link>
      {isTransitioning && <LoadingIndicator />}
    </>
  )
}
```

## Framer Motion

```typescript
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from '@tanstack/react-router'

function Layout() {
  const location = useLocation()
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Outlet />
      </motion.div>
    </AnimatePresence>
  )
}
```

## TanStack Start

### Full-Stack Setup

```typescript
// entry-client.tsx
import { mount, StartClient } from '@tanstack/start/client'

mount(() => <StartClient />)

// entry-server.tsx
import { createStartHandler } from '@tanstack/start/server'

export default createStartHandler({
  createRouter: () =>
    createRouter({
      routeTree,
      context: {
        env: process.env.NODE_ENV,
      },
    }),
})
```

## i18n (Internationalization)

### with react-i18next

```typescript
import { useTranslation } from 'react-i18next'

const postRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '$postId',
  meta: ({ params }) => [
    { title: `post.title` }, // Translation key
  ],
})

function Post() {
  const { t } = useTranslation()
  const { postId } = postRoute.useParams()
  
  return <h1>{t('post.title', { id: postId })}</h1>
}
```

## Authentication

### Auth Provider Pattern

```typescript
// Auth context
const rootRoute = createRootRoute({
  context: {
    auth: null as AuthUser | null,
  },
})

// Auth guard
const protectedRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/dashboard',
  beforeLoad: ({ context }) => {
    if (!context.auth) {
      throw redirect({ to: '/login', search: { from: '/dashboard' } })
    }
  },
})
```

## CSS Modules / Tailwind

### Styling

```typescript
import './post.module.css'

const postRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/posts/$postId',
  component: () => {
    return (
      <div className={styles.postContainer}>
        <h1 className={styles.postTitle}>
          {postRoute.useParams().postId}
        </h1>
      </div>
    )
  },
})
```

### With Tailwind

```typescript
const postRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/posts/$postId',
  component: () => (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Post</h1>
    </div>
  ),
})
```

## Testing Libraries

### with Vitest

```typescript
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { createRouter, createRootRoute, RouterProvider } from '@tanstack/react-router'

describe('Post', () => {
  it('renders post id', async () => {
    const rootRoute = createRootRoute({
      component: () => <Outlet />,
    })
    
    const routeTree = rootRoute.addChildren([
      createRoute({
        getParentRoute: () => rootRoute,
        path: '/posts/$postId',
        component: () => {
          const params = postRoute.useParams()
          return <div>Post: {params.postId}</div>
        },
      }),
    ])
    
    const router = createRouter({ routeTree })
    
    render(<RouterProvider router={router} />)
    
    expect(screen.getByText('Post: 123')).toBeInTheDocument()
  })
})
```