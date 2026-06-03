# แนวคิดหลัก

แนวคิดสำคัญที่ต้องเข้าใจสำหรับ TanStack Router

## Route Tree

Route Tree คือโครงสร้างแบบ hierarchical ที่แสดงความสัมพันธ์ระหว่าง routes ต่างๆ

```
rootRoute (/)
├── indexRoute (/)
├── postsRoute (/posts)
│   ├── postsIndexRoute (/posts)
│   └── postRoute ($postId) (/posts/:postId)
└── aboutRoute (/about)
```

- **Root Route** - Route หลักที่ครอบทุก route อื่น
- **Parent Route** - Route ที่มี children
- **Child Route** - Route ที่ซ้อนใน parent

## Route Matching

TanStack Router ใช้ pattern matching สำหรับ URL

| Pattern | Description | Example |
|---------|-------------|---------|
| `/` | exact match | `/` |
| `/about` | static path | `/about` |
| `/:id` | dynamic segment | `/posts/123` |
| `/posts/*` | wildcard | `/posts/anything/here` |

### Dynamic Segments

```typescript
const postRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/posts/$postId', // $postId เป็น dynamic segment
})
```

เข้าถึง params ใน component:

```typescript
const postRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/posts/$postId',
  component: () => {
    const params = postRoute.useParams()
    return <div>Post ID: {params.postId}</div>
  },
})
```

## Type Safety

TanStack Router มี type inference ที่ powerful มาก

### Route Components

```typescript
import { createRootRoute, createRoute } from '@tanstack/react-router'

// Type inference อัตโนมัติ
const rootRoute = createRootRoute()
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
})

// ใช้ route ใน component ได้เลย
function App() {
  return (
    <RouterProvider router={createRouter({ routeTree: rootRoute })}>
      <Outlet />
    </RouterProvider>
  )
}
```

### Search Params Types

```typescript
// กำหนด schema สำหรับ search params
const postsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/posts',
  validateSearch: (search: Record<string, string>) => {
    return {
      page: Number(search.page) || 1,
      limit: Number(search.limit) || 10,
    } as const
  },
})

// ใช้ hook อย่างปลอดภัย
const postsRoute = createRoute({ ... })
function PostsList() {
  const search = postsRoute.useSearch() // { page: number, limit: number }
}
```

## Loader & Data Fetching

Loaders ใช้สำหรับ fetch data ก่อน render

```typescript
const postsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/posts',
  loader: async () => {
    const posts = await fetchPosts()
    return { posts }
  },
  component: () => {
    const data = postsRoute.useLoaderData()
    return <PostsList posts={data.posts} />
  },
})
```

## File-Based Routing

ใช้ file convention สำหรับ generate routes

| File | Route Path |
|------|------------|
| `route.ts` | / |
| `about.tsx` | /about |
| `posts.tsx` | /posts |
| `posts.$postId.tsx` | /posts/:postId |
| `posts.$postId.edit.tsx` | /posts/:postId/edit |

### Virtual Routes

```typescript
// routeTree.ts
import { createRootRoute, createRoute } from '@tanstack/react-router'

export const rootRoute = createRootRoute()

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
})

export const postsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'posts',
})

// เพิ่ม children
export const postRoute = createRoute({
  getParentRoute: () => postsRoute,
  path: '$postId',
})
```

## แนวคิดอื่นๆ

### Outlet

`<Outlet />` คือตำแหน่งที่ child routes จะถูก render

```typescript
import { Outlet } from '@tanstack/react-router'

function Layout() {
  return (
    <div>
      <nav>Navigation</nav>
      <Outlet /> {/* Child routes render ที่นี่ */}
      <footer>Footer</footer>
    </div>
  )
}
```

### Link Component

```typescript
import { Link } from '@tanstack/react-router'

// Preload เมื่อ hover
<Link to="/posts" preload="intent">Posts</Link>

// Replace history
<Link to="/about" replace>About</Link>
```

### Router Context

ส่ง data ผ่าน context ทั้ง tree

```typescript
// กำหนด context
const rootRoute = createRootRoute({
  context: {
    auth: null as Auth | null,
  },
})

// ใช้ใน loader
const postsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/posts',
  loader: ({ context }) => {
    return { user: context.auth }
  },
})
```