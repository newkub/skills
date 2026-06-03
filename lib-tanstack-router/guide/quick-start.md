# Quick Start

สร้าง TanStack Router project ในไม่กี่ขั้นตอน

## Step 1: สร้าง Project

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install @tanstack/react-router
```

## Step 2: สร้าง Router

```typescript
// src/router.tsx
import { createRootRoute, createRoute, createRouter, Outlet, Link } from '@tanstack/react-router'

// 1. สร้าง root route
const rootRoute = createRootRoute({
  component: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Outlet />
    </div>
  ),
})

// 2. สร้าง child routes
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => <h1>Home Page</h1>,
})

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: () => <h1>About Page</h1>,
})

// 3. สร้าง route tree
const routeTree = rootRoute.addChildren([indexRoute, aboutRoute])

// 4. สร้าง router
export const router = createRouter({ routeTree })

// 5. Type declaration
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
```

## Step 3: ใช้งาน Router

```typescript
// src/main.tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from '@tanstack/react-router'
import { router } from './router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
```

## ผลลัพธ์

```
┌─────────────────────────────────────────────────────────────────┐
│                         Browser                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   ┌─────────────────────────────────────────────────────────┐  │
│   │ Home | About                                             │  │
│   ├─────────────────────────────────────────────────────────┤  │
│   │                                                         │  │
│   │   <h1>Home Page</h1>                                    │  │
│   │                                                         │  │
│   └─────────────────────────────────────────────────────────┘  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## กับ Dynamic Routes

```typescript
// เพิ่ม route สำหรับแสดง post
const postRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/posts/$postId',
  component: () => {
    const params = postRoute.useParams()
    return <h1>Post: {params.postId}</h1>
  },
})

// อัพเดท route tree
const postsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/posts',
})

const postsIndexRoute = createRoute({
  getParentRoute: () => postsRoute,
  path: '/',
  component: () => <h1>All Posts</h1>,
})

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  postsRoute.addChildren([postsIndexRoute, postRoute]),
])
```

## กับ Loader

```typescript
// สร้าง loader สำหรับ fetch data
const postRoute = createRoute({
  getParentRoute: () => postsRoute,
  path: '$postId',
  loader: async ({ params }) => {
    const response = await fetch(`/api/posts/${params.postId}`)
    return { post: await response.json() }
  },
  component: PostComponent,
})

// ใน component
function PostComponent() {
  const data = postRoute.useLoaderData()
  return <div>{data.post.title}</div>
}
```

## กับ Link

```typescript
// ลิงก์พร้อม params
<Link to="/posts/$postId" params={{ postId: '123' }}>
  View Post
</Link>

// ลิงก์พร้อม search params
<Link to="/posts" search={{ page: 2 }}>
  Next Page
</Link>

// preload เมื่อ hover
<Link to="/posts" preload="intent">
  Posts
</Link>
```

## กับ Search Params

```typescript
// กำหนด search params schema
const postsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/posts',
  validateSearch: (search) => ({
    page: Number(search.page ?? 1),
    sort: search.sort ?? 'desc',
  }),
})

// ใช้งาน
function PostsList() {
  const search = postsRoute.useSearch()
  return (
    <div>
      <p>Page: {search.page}</p>
      <p>Sort: {search.sort}</p>
    </div>
  )
}
```

## Next Steps

| Topic | Guide |
|-------|-------|
| File-Based Routing | [Installation](installation.md) |
| Type Safety | [Features](features.md) |
| Data Loading | [Best Practices](best-practices.md) |
| Search Params | [Configuration](configuration.md) |
| Full Example | See [TanStack Router Docs](https://tanstack.com/router/latest/docs/framework/react/guide/quick-start) |