# API Reference

Complete API documentation for TanStack Router

## Core Functions

### createRootRoute

Creates the root route of the route tree.

```typescript
function createRootRoute<TOptions extends RootRouteOptions>(
  options?: TOptions
): RootRoute<TOptions>
```

| Option | Type | Description |
|--------|------|-------------|
| `component` | `React.ComponentType` | Root component |
| `errorComponent` | `React.ComponentType` | Error boundary component |
| `pendingComponent` | `React.ComponentType` | Loading boundary component |
| `validateSearch` | `SearchSchemaValidator` | Search params validator |
| `meta` | `RouteMeta[]` | Meta tags |
| `preload` | `PreloadOption` | Preload behavior |
| `context` | `Record<string, any>` | Context data |
| `beforeLoad` | `BeforeLoadFn` | Before load hook |

### createRoute

Creates a route that can be added to a route tree.

```typescript
function createRoute<TParentRoute, TPath extends string>(
  options: RouteOptions<TParentRoute, TPath>
): Route<TParentRoute, TPath>
```

| Option | Type | Description |
|--------|------|-------------|
| `getParentRoute` | `() => TParentRoute` | Parent route accessor |
| `path` | `string` | Route path pattern |
| `id` | `string` | Unique route identifier |
| `component` | `React.ComponentType` | Route component |
| `loader` | `LoaderFn` | Data loader function |
| `beforeLoad` | `BeforeLoadFn` | Before load hook |
| `errorComponent` | `React.ComponentType` | Error boundary |
| `pendingComponent` | `React.ComponentType` | Loading state |
| `validateSearch` | `SearchSchemaValidator` | Search validator |
| `meta` | `RouteMeta[]` | Meta tags |
| `lazy` | `() => Promise` | Lazy component loader |

### createRouter

Creates the router instance.

```typescript
function createRouter<T extends RouteTree>(
  options: RouterOptions<T>
): Router<T>
```

| Option | Type | Description |
|--------|------|-------------|
| `routeTree` | `RouteTree` | Route tree structure |
| `history` | `HistoryAdapter` | History adapter |
| `context` | `Record<string, any>` | App context |
| `loaderDefaults` | `LoaderDefaults` | Default loader options |
| `defaultPreload` | `PreloadOption` | Default preload |
| `notFoundMode` | `'fuzzy' | '404'` | Not found handling |
| `onError` | `ErrorHandler` | Error handler |

## Components

### RouterProvider

Provider component that wraps the application.

```typescript
function RouterProvider<T extends Router>(
  options: { router: T }
): React.ReactElement
```

### Outlet

Renders child routes at the current position.

```typescript
function Outlet(): React.ReactElement
```

### Link

Navigation link component with type-safe routing.

```typescript
function Link<TOptions extends LinkOptions>(
  options: TOptions
): React.ReactElement
```

| Prop | Type | Description |
|------|------|-------------|
| `to` | `string` | Route path |
| `params` | `Record<string, string>` | Route params |
| `search` | `Record<string, any>` | Search params |
| `replace` | `boolean` | Replace history entry |
| `preload` | `'render' | 'intent' | false` | Preload behavior |
| `viewTransition` | `boolean` | View transition API |
| `activeProps` | `Record<string, string>` | Props when active |
| `inactiveProps` | `Record<string, string>` | Props when inactive |

## Hooks

### useRouter

Access the router instance.

```typescript
function useRouter(): Router
```

### useLocation

Get current location.

```typescript
function useLocation(): Location
```

### useNavigate

Get navigate function.

```typescript
function useNavigate(): NavigateFunction
```

### useParams

Get route params (type-safe).

```typescript
// In route component
const route = createRoute({ path: '/posts/$postId' })
const params = route.useParams()
// { postId: string }
```

### useSearch

Get validated search params (type-safe).

```typescript
// In route component
const route = createRoute({ 
  path: '/posts',
  validateSearch: (s) => ({ page: Number(s.page ?? 1) })
})
const search = route.useSearch()
// { page: number }
```

### useLoaderData

Get loader data (type-safe).

```typescript
// In route component
const route = createRoute({
  loader: () => ({ posts: [] })
})
const data = route.useLoaderData()
// { posts: any[] }
```

### useLoaderError

Get loader error.

```typescript
const route = createRoute({ ... })
const error = route.useLoaderError()
```

### useRouteContext

Get route context.

```typescript
const route = createRoute({ ... })
const context = route.useRouteContext()
```

### useMatchedRoute

Get matched route information.

```typescript
const route = createRoute({ ... })
const match = route.useMatchedRoute()
```

## History

### createBrowserHistory

Browser history for SPAs.

```typescript
function createBrowserHistory(options?: BrowserHistoryOptions): HistoryAdapter
```

### createHashHistory

Hash history for static hosting.

```typescript
function createHashHistory(options?: HashHistoryOptions): HistoryAdapter
```

### createMemoryHistory

Memory history for SSR/testing.

```typescript
function createMemoryHistory(options?: MemoryHistoryOptions): HistoryAdapter
```

## Route Utilities

### rootRoute.addChildren

Add child routes to a route.

```typescript
rootRoute.addChildren([route1, route2, ...])
```

### route.useParams

Get params in component.

```typescript
function useParams<T>(
  opts?: { select?: (params: RawParams) => T }
): T
```

### route.useSearch

Get search params in component.

```typescript
function useSearch<T>(
  opts?: { select?: (search: RawSearch) => T }
): T
```

### route.useLoaderData

Get loader data in component.

```typescript
function useLoaderData<T>(
  opts?: { select?: (data: RawData) => T }
): T
```

### route.useLinkProps

Generate link props for manual anchor elements.

```typescript
function useLinkProps(options: LinkOptions): LinkProps
```

## Router Methods

### router.navigate

Navigate to a route.

```typescript
router.navigate({
  to: string,
  params?: Record<string, string>,
  search?: Record<string, any>,
  replace?: boolean,
})
```

### router.invalidate

Invalidate loader data.

```typescript
router.invalidate({
  filter?: (route: Route) => boolean
})
```

### router.preloadRoute

Preload a route.

```typescript
router.preloadRoute({
  to: string,
  params?: Record<string, string>,
  search?: Record<string, any>,
})
```

### router.buildLink

Build a link URL.

```typescript
router.buildLink({
  to: string,
  params?: Record<string, string>,
  search?: Record<string, any>,
})
```

### router.history

Access history instance.

```typescript
router.history.back()
router.history.forward()
router.history.go(-1)
```