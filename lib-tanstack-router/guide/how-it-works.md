# วิธีการทำงาน

ภาพรวมของวิธีที่ TanStack Router ประมวลผล routes

## Flow Diagram

```
┌─────────────────────────────────────────────────────────────────────┐
│                         Browser URL Change                          │
└─────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────┐
│                         Route Matching                              │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐              │
│  │   Parse     │───▶│   Match     │───▶│   Validate  │              │
│  │   URL       │    │   Route     │    │   Params    │              │
│  └─────────────┘    └─────────────┘    └─────────────┘              │
└─────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────┐
│                         Data Loading                                │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐              │
│  │   Loader    │───▶│   Cache     │───▶│   Await      │              │
│  │   Execute   │    │   Result   │    │   Promise    │              │
│  └─────────────┘    └─────────────┘    └─────────────┘              │
└─────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────┐
│                         Render                                      │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐              │
│  │  Component  │───▶│   Outlet    │───▶│   Children  │              │
│  │   Render    │    │   Resolve   │    │   Render    │              │
│  └─────────────┘    └─────────────┘    └─────────────┘              │
└─────────────────────────────────────────────────────────────────────┘
```

## Route Tree Structure

TanStack Router สร้าง tree structure จาก routes

```
┌─────────────────────────────────────────────────────────────────┐
│                        Root Route                                │
│                         (/)                                      │
│  ┌──────────────┬──────────────┬──────────────┬─────────────┐   │
│  │              │              │              │             │   │
│  ▼              ▼              ▼              ▼             ▼   │
│ Layout       Dashboard        Posts          Users         About │
│              (/)              (/posts)       (/users)      (/about)
│  │              │              │              │             │
│  └── Outlet     └── Outlet     ├── Index      └── Outlet     └── Outlet
│                  (/)           │ (/posts)        (/users)
│                                  │
│                                  └── $postId
│                                (/posts/:postId)
│                                        │
│                                        └── children...
└─────────────────────────────────────────────────────────────────┘
```

## URL Parsing Flow

```
URL: /posts/123?page=2&sort=asc

┌─────────────────────────────────────────────────────────────────┐
│                        URL                                       │
│  Path: /posts/123                                               │
│  Search: ?page=2&sort=asc                                       │
└─────────────────────────────────────────────────────────────────┘
            │
            ▼
┌─────────────────────────────────────────────────────────────────┐
│                    Parse Components                              │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐           │
│  │  posts  │  │   123    │  │  page   │  │  sort   │           │
│  │ segment │  │ segment  │  │ param   │  │ param   │           │
│  └─────────┘  └─────────┘  └─────────┘  └─────────┘           │
│                                                                 │
│  Type: string    Type: string   Type: number  Type: string     │
└─────────────────────────────────────────────────────────────────┘
            │
            ▼
┌─────────────────────────────────────────────────────────────────┐
│                    Route Matching                                │
│                                                                 │
│  Route Pattern: /posts/$postId                                   │
│                                                                 │
│  Matches: ✓                                                      │
│  Params: { postId: "123" }                                       │
└─────────────────────────────────────────────────────────────────┘
            │
            ▼
┌─────────────────────────────────────────────────────────────────┐
│                    Type Safety                                   │
│                                                                 │
│  postsRoute.useParams() → { postId: string }                    │
│  postsRoute.useSearch() → { page: number, sort: string }        │
└─────────────────────────────────────────────────────────────────┘
```

## Component Rendering

```
┌─────────────────────────────────────────────────────────────────┐
│                        App Component                            │
│                                                                 │
│  <RouterProvider router={router}>                               │
│      │                                                          │
│      └── <Outlet />  ←  Root route renders here                │
│              │                                                   │
│              ▼                                                   │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │              Layout Route Component                      │   │
│  │                                                          │   │
│  │  <nav>...</nav>                                          │   │
│  │  <Outlet />  ←  Child routes render here                 │   │
│  │  <footer>...</footer>                                   │   │
│  └─────────────────────────────────────────────────────────┘   │
│              │                                                   │
│              ▼                                                   │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │              Posts Route Component                       │   │
│  │                                                          │   │
│  │  <PostList posts={loaderData.posts} />                   │   │
│  └─────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
```

## Code Splitting

TanStack Router ทำ code splitting อัตโนมัติตาม routes

```
┌─────────────────────────────────────────────────────────────────┐
│                    Bundle Structure                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  main.js (Core Router)                                          │
│  ├── Router core                                                 │
│  ├── Route matching engine                                       │
│  └── Link component                                              │
│                                                                 │
│  ─────────────────────────────────────────────────────────     │
│                                                                 │
│  posts-abc123.chunk.js (Lazy Route)                             │
│  ├── PostsList component                                         │
│  └── PostDetail component                                        │
│                                                                 │
│  ─────────────────────────────────────────────────────────     │
│                                                                 │
│  users-def456.chunk.js (Lazy Route)                             │
│  ├── UsersList component                                         │
│  └── UserDetail component                                        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Lazy Loading Configuration

```typescript
// กำหนด lazy loading
const postsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'posts',
  lazy: () => import('./routes/posts.lazy'),
})
```

## History Management

TanStack Router รองรับหลาย history types

```
┌─────────────────────────────────────────────────────────────────┐
│                    History Types                                 │
├──────────────────┬──────────────────────────────────────────────┤
│ BrowserHistory   │ สำหรับ SPAs ทั่วไป (ใช้ URL ปกติ)           │
├──────────────────┼──────────────────────────────────────────────┤
│ HashHistory      │ สำหรับ static hosting (เช่น GitHub Pages)    │
├──────────────────┼──────────────────────────────────────────────┤
│ MemoryHistory    │ สำหรับ SSR หรือ testing                      │
└──────────────────┴──────────────────────────────────────────────┘
```

```typescript
import { createBrowserHistory, createHashHistory, createMemoryHistory } from '@tanstack/history'

// Browser (default)
const router = createRouter({
  routeTree,
  history: createBrowserHistory(),
})

// Hash
const router = createRouter({
  routeTree,
  history: createHashHistory(),
})

// Memory (สำหรับ SSR)
const router = createRouter({
  routeTree,
  history: createMemoryHistory(),
})
```