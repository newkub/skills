# Integration

## Overview

การ integrate web app กับ tools และ services ต่างๆ

## API Integration

### 1. REST API

| Pattern | Description | Implementation |
|---------|-------------|----------------|
| **Fetch** | Native API calls | `fetch()`, `axios` |
| **Error Handling** | Handle failures | try/catch |
| **Caching** | Cache responses | TanStack Query |

```typescript
// Basic fetch
async function fetchUsers(): Promise<User[]> {
  const response = await fetch('/api/users')
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }
  return response.json()
}

// With error handling
async function fetchUser(id: string): Promise<User> {
  try {
    const response = await fetch(`/api/users/${id}`)
    if (!response.ok) {
      throw new Error(`User ${id} not found`)
    }
    return response.json()
  } catch (error) {
    console.error('Failed to fetch user:', error)
    throw error
  }
}
```

### 2. TanStack Query

```typescript
// Query hooks
const { data, isLoading, error } = useQuery({
  queryKey: ['users'],
  queryFn: fetchUsers,
})

// Mutations
const mutation = useMutation({
  mutationFn: createUser,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['users'] })
  },
})
```

## Authentication

### 1. JWT Authentication

| Step | Description |
|------|-------------|
| **Login** | POST credentials, receive JWT |
| **Storage** | Store in httpOnly cookie or memory |
| **Headers** | Include in Authorization header |
| **Refresh** | Refresh token before expiry |

```typescript
// Set Authorization header
function getAuthHeaders(): HeadersInit {
  const token = getToken()
  return token ? { Authorization: `Bearer ${token}` } : {}
}

// API call with auth
async function fetchProtectedData() {
  const response = await fetch('/api/protected', {
    config: getAuthHeaders()
  })
  return response.json()
}
```

### 2. OAuth 2.0

| Provider | Documentation |
|----------|---------------|
| **Google** | https://developers.google.com/identity/protocols/oauth2 |
| **GitHub** | https://docs.github.com/en/apps/oauth-apps |
| **Facebook** | https://developers.facebook.com/docs/facebook-login |

## Social Sharing

### 1. Open Graph Tags

```html
<meta property="og:title" content="Page Title" />
<meta property="og:description" content="Page description" />
<meta property="og:image" content="https://example.com/image.jpg" />
<meta property="og:url" content="https://example.com/page" />
```

### 2. Social Meta Tags

```html
<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Page Title" />
<meta name="twitter:description" content="Page description" />
<meta name="twitter:image" content="https://example.com/image.jpg" />
```

## Analytics Integration

| Provider | Integration |
|----------|-------------|
| **Google Analytics** | gtag.js |
| **Mixpanel** | mixpanel-js |
| **Plausible** | plausible-analytics |

```typescript
// Google Analytics
import { gtag } from 'ga-gtag'

gtag('event', 'page_view', {
  page_title: document.title,
  page_location: window.location.href,
})
```

## Third-Party Services

| Service | Use Case | SDK |
|---------|----------|-----|
| **Stripe** | Payments | @stripe/stripe-js |
| **Cloudinary** | Image CDN | cloudinary-upload |
| **Sentry** | Error tracking | @sentry/react |
| **Intercom** | Customer chat | @intercom/messenger-js-sdk |

## Summary

| Integration | Purpose | Key Points |
|-------------|---------|------------|
| **REST API** | Data fetching | Error handling, caching |
| **JWT Auth** | User authentication | Token storage, refresh |
| **OAuth** | Social login | Provider-specific flows |
| **Social Sharing** | SEO promotion | OG/Twitter tags |
| **Analytics** | User tracking | Event tracking |
| **Third-Party** | External services | SDK integration |
