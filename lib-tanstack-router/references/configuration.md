# Configuration Reference

Complete configuration options for TanStack Router

## Router Options

### createRouter

```typescript
const router = createRouter({
  routeTree: RouteTree,
  history?: HistoryAdapter,
  context?: Record<string, any>,
  loaderDefaults?: LoaderDefaults,
  defaultPreload?: 'render' | 'intent' | false,
  notFoundMode?: 'fuzzy' | '404',
  onError?: (error: Error, info: ErrorInfo) => void,
})
```

### LoaderDefaults

```typescript
interface LoaderDefaults {
  maxAge?: number        // Cache valid duration in ms
  staleMaxAge?: number   // Mark as stale after duration
  gcMaxAge?: number      // Garbage collect after duration
}
```

## Route Options

### createRoute

```typescript
createRoute({
  // Required
  getParentRoute: () => parentRoute,
  path: string,
  
  // Component
  component?: React.ComponentType,
  
  // Data Loading
  loader?: (context: LoaderContext) => Promise<any>,
  loaderOptions?: LoaderOptions,
  
  // Lifecycle
  beforeLoad?: (context: BeforeLoadContext) => void | Promise<void>,
  onLoad?: (context: OnLoadContext) => void,
  
  // Error Handling
  errorComponent?: React.ComponentType,
  onError?: (error: Error, info: ErrorInfo) => void,
  
  // Loading State
  pendingComponent?: React.ComponentType,
  
  // Search
  validateSearch?: SearchSchemaValidator,
  
  // Meta
  meta?: RouteMeta[] | ((context: MetaContext) => RouteMeta[]),
  
  // Preload
  preload?: 'render' | 'intent' | false,
  
  // Lazy Loading
  lazy?: () => Promise<{ default: React.ComponentType }>,
  
  // ID
  id?: string,
})
```

### LoaderOptions

```typescript
interface LoaderOptions {
  maxAge?: number
  staleMaxAge?: number
  defer?: boolean
}
```

### SearchSchemaValidator

```typescript
// Function-based
validateSearch: (raw: RawSearch) => ValidatedSearch

// Zod schema
validateSearch: z.object({
  page: z.coerce.number().min(1).default(1),
  sort: z.enum(['asc', 'desc']).default('desc'),
})
```

## History Configuration

### createBrowserHistory

```typescript
createBrowserHistory({
  basepath?: string,     // Base path for the app
  window?: Window,      // Window object
})
```

### createHashHistory

```typescript
createHashHistory({
  basepath?: string,     // Base path
  hashBang?: boolean,    // Use #! prefix
})
```

### createMemoryHistory

```typescript
createMemoryHistory({
  initialEntries?: string[],  // Initial URLs
  initialIndex?: number,       // Start index
})
```

## Link Configuration

### Link Options

```typescript
interface LinkOptions {
  to: string
  params?: Record<string, string | number>
  search?: Record<string, any>
  hash?: string
  replace?: boolean
  preload?: 'render' | 'intent' | false
  viewTransition?: boolean
  activeProps?: Record<string, string>
  inactiveProps?: Record<string, string>
}
```

### Global Link Defaults

```typescript
import { Link } from '@tanstack/react-router'

// Customize default behavior
const AppLink = Link.options({
  activeProps: { class: 'active' },
  inactiveProps: { class: 'inactive' },
})
```

## Route Meta

### RouteMeta

```typescript
interface RouteMeta {
  title?: string
  description?: string
  rel?: string
  scripts?: string[]
}
```

### Dynamic Meta

```typescript
meta: ({ params, search, location }) => [
  { title: `Page ${search.page}` },
  { name: 'description', content: 'My page' },
]
```

## Context

### Root Route Context

```typescript
const rootRoute = createRootRoute({
  context: {
    auth: null as AuthUser | null,
    db: createDb(),
    i18n: createI18n(),
  },
})
```

### Access Context in Loader

```typescript
const postRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/posts/$postId',
  loader: ({ params, context }) => {
    return { 
      post: context.db.posts.get(params.postId)
    }
  },
})
```

## Default Configuration

### Common Setup Pattern

```typescript
const router = createRouter({
  routeTree,
  context: {
    auth: null,
  },
  loaderDefaults: {
    maxAge: 1000 * 60 * 5,       // 5 minutes
    staleMaxAge: 1000 * 60 * 30, // 30 minutes
  },
  defaultPreload: 'intent',
  notFoundMode: 'fuzzy',
  onError: (error) => {
    console.error('Router error:', error)
  },
})
```

## Type Declarations

### Global Type Registration

```typescript
// src/router.ts
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
```

This enables type-safe hooks:

```typescript
// Now these are fully typed
useParams()     // Returns exact params for current route
useSearch()     // Returns exact search type
useLoaderData() // Returns exact loader data type
```

## Environment Variables

### Vite

```typescript
// vite.config.ts
export default defineConfig({
  define: {
    'import.meta.env.VITE_APP_BASE': JSON.stringify(
      process.env.VITE_APP_BASE || '/'
    ),
  },
})
```

### Custom Base Path

```typescript
const router = createRouter({
  routeTree,
  history: createBrowserHistory({
    basepath: import.meta.env.VITE_APP_BASE,
  }),
})
```

## Scroll Restoration

```typescript
const router = createRouter({
  routeTree,
  defaultScrollRestoration: 'auto', // 'auto' | 'manual'
})

// Manual
window.scrollTo(0, 0)
```

## View Transitions

```typescript
// Enable view transitions globally
const router = createRouter({
  routeTree,
  defaultViewTransition: true,
})

// Per-link
<Link to="/page" viewTransition>
  Navigate
</Link>
```

## Block Navigation

```typescript
import { useBlocker } from '@tanstack/react-router'

function EditForm() {
  const [isDirty, setIsDirty] = useState(false)
  
  useBlocker({
    blockerFn: (tx) => {
      return isDirty && !window.confirm('Leave without saving?')
    },
  })
  
  return <Form onChange={() => setIsDirty(true)}>...</Form>
}
```