# Best Practices

## Overview

Best practices สำหรับการพัฒนา web applications ที่มีคุณภาพ

## Code Quality

### 1. TypeScript Best Practices

| Practice | Do | Don't |
|----------|-----|-------|
| **Types** | Use explicit types | `any` everywhere |
| **Interfaces** | Define interfaces | Missing contracts |
| **Generics** | Use for reusable code | Duplicate code |
| **Null Safety** | Use optional chaining | `!` assertion |

```typescript
// ✅ Good: Explicit types
function fetchUser(id: string): Promise<User> {
  return fetch(`/api/users/${id}`).then(res => res.json())
}

// ❌ Bad: Using any
function fetchUser(id: any): any {
  return fetch(`/api/users/${id}`).then(res => res.json())
}
```

### 2. React Best Practices

| Practice | Do | Don't |
|----------|-----|-------|
| **Components** | Small, focused | Large, monolithic |
| **Props** | Type definitions | Missing prop types |
| **State** | Local for UI, global for shared | Overusing global state |
| **Effects** | Minimal side effects | Complex effect logic |

```tsx
// ✅ Good: Small, focused component
function UserCard({ user }: { user: User }) {
  return (
    <div className="user-card">
      <img src={user.avatar} alt={user.name} />
      <span>{user.name}</span>
    </div>
  )
}

// ❌ Bad: Large component with too much logic
function UserPage() {
  // 500 lines of logic...
}
```

### 3. CSS Best Practices

| Practice | Do | Don't |
|----------|-----|-------|
| **Naming** | BEM, CSS Modules | Global conflicts |
| **Specificity** | Low specificity | Deep nesting |
| **Responsive** | Mobile-first | Desktop-only |
| **Performance** | CSS variables | Repeated values |

```css
/* ✅ Good: BEM naming */
.user-card__avatar { /* ... */ }
.user-card__name { /* ... */ }

/* ❌ Bad: Deep nesting */
.page .container .card .avatar { /* ... */ }
```

## Performance

### 1. Bundle Size

| Technique | Description | Impact |
|-----------|-------------|--------|
| **Code Splitting** | Lazy load chunks | Reduce initial load |
| **Tree Shaking** | Remove unused code | Smaller bundles |
| **Compression** | gzip/brotli | 70% size reduction |

```typescript
// Lazy load component
const LazyComponent = lazy(() => import('./HeavyComponent'))

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <LazyComponent />
    </Suspense>
  )
}
```

### 2. Rendering Performance

| Technique | Description | Use Case |
|-----------|-------------|----------|
| **Memoization** | `useMemo`, `useCallback` | Expensive calculations |
| **Virtualization** | Only render visible items | Long lists |
| **Debounce** | Limit function calls | Scroll, resize |

```typescript
// Memoize expensive calculation
const sortedItems = useMemo(() => {
  return items.sort((a, b) => a.name.localeCompare(b.name))
}, [items])

// Debounce search input
const debouncedSearch = useMemo(
  () => debounce((query: string) => fetchSearch(query), 300),
  []
)
```

## Security

| Practice | Description |
|----------|-------------|
| **Sanitize HTML** | Prevent XSS |
| **Validate Input** | Client and server side |
| **HTTPS** | Always use HTTPS in production |
| **Secrets** | Never expose API keys |

```typescript
// ✅ Sanitize user input
import DOMPurify from 'dompurify'

function SafeHTML({ html }: { html: string }) {
  return <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }} />
}
```

## SEO

| Practice | Description |
|----------|-------------|
| **Semantic HTML** | Use proper elements |
| **Meta Tags** | Title, description, OG tags |
| **Sitemap** | Help search engines |
| **Performance** | Core Web Vitals |

## Summary

| Category | Best Practice |
|----------|--------------|
| **Code Quality** | TypeScript, small components, BEM CSS |
| **Performance** | Code splitting, memoization, virtualization |
| **Security** | Sanitize, validate, HTTPS |
| **SEO** | Semantic HTML, meta tags, sitemap |
