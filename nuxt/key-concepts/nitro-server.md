# Nitro Server

## Overview

Nitro is the server engine powering Nuxt 3. It provides cross-platform server support, API routing, serverless capabilities, and edge deployment.

## Features

- **Cross-platform**: Deploy to Node.js, Edge, Serverless
- **API Routes**: Built-in API routing in `/server` directory
- **Serverless**: Auto-scaling, pay-per-use
- **Edge Deployment**: Global low latency
- **Storage**: Built-in support for KV, R2, D1
- **Middleware**: Request/response middleware
- **Caching**: Built-in caching strategies

## Server Directory Structure

```
server/
├── api/           # API routes
│   ├── hello.ts   # GET /api/hello
│   └── users/
│       └── [id].ts # GET /api/users/:id
├── middleware/    # Server middleware
├── routes/        # Additional server routes
└── plugins/       # Server plugins
```

## API Routes

### Basic Route

```typescript
// server/api/hello.ts
export default defineEventHandler((event) => {
  return { message: 'Hello World' }
})
```

### HTTP Methods

```typescript
// server/api/users.ts
export default defineEventHandler((event) => {
  const method = getMethod(event)
  
  if (method === 'GET') {
    return { users: [] }
  }
  
  if (method === 'POST') {
    const body = await readBody(event)
    return { created: true, user: body }
  }
})
```

### Dynamic Routes

```typescript
// server/api/users/[id].ts
export default defineEventHandler((event) => {
  const id = getRouterParam(event, 'id')
  return { userId: id }
})
```

### Route Parameters

```typescript
const id = getRouterParam(event, 'id')
const query = getQuery(event)
const headers = getHeaders(event)
const cookies = parseCookies(event)
```

### Response Helpers

```typescript
export default defineEventHandler((event) => {
  // JSON response (default)
  return { data: 'value' }
  
  // Set status
  setResponseStatus(event, 201)
  
  // Set headers
  setHeader(event, 'X-Custom-Header', 'value')
  
  // Send file
  return send(event, '/path/to/file.pdf')
  
  // Redirect
  return sendRedirect(event, '/new-path')
})
```

## Middleware

### Global Middleware

```typescript
// server/middleware/auth.ts
export default defineEventHandler((event) => {
  const token = getCookie(event, 'token')
  if (!token) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized'
    })
  }
})
```

### Route-Specific Middleware

```typescript
// server/middleware/api.ts
export default defineEventHandler((event) => {
  if (event.path.startsWith('/api')) {
    // API-specific logic
  }
})
```

## Error Handling

```typescript
export default defineEventHandler((event) => {
  try {
    // Your logic
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal Server Error',
      data: { error: error.message }
    })
  }
})
```

## Storage

### KV Storage

```typescript
// server/api/counter.ts
export default defineEventHandler(async (event) => {
  const storage = useStorage('kv')
  const count = await storage.getItem('count') || 0
  await storage.setItem('count', count + 1)
  return { count: count + 1 }
})
```

### Database Connections

```typescript
// server/plugins/db.ts
export default defineNitroPlugin((nitroApp) => {
  const db = drizzle(...connection)
  nitroApp.context.db = db
})

// server/api/users.ts
export default defineEventHandler(async (event) => {
  const db = event.context.db
  const users = await db.select().from(usersTable)
  return { users }
})
```

## Deployment Presets

### Vercel

```typescript
export default defineNuxtConfig({
  nitro: {
    preset: 'vercel'
  }
})
```

### Cloudflare Pages

```typescript
export default defineNuxtConfig({
  nitro: {
    preset: 'cloudflare-pages'
  }
})
```

### Netlify

```typescript
export default defineNuxtConfig({
  nitro: {
    preset: 'netlify'
  }
})
```

### Node.js (Default)

```typescript
export default defineNuxtConfig({
  nitro: {
    preset: 'node-server'
  }
})
```

## Environment Variables

```typescript
// server/api/config.ts
export default defineEventHandler((event) => {
  const config = useRuntimeConfig(event)
  return {
    apiKey: config.apiKey,
    databaseUrl: config.databaseUrl
  }
})
```

## Caching

```typescript
export default defineEventHandler(async (event) => {
  const cached = await useStorage('cache').getItem('data')
  if (cached) return cached
  
  const data = await fetchData()
  await useStorage('cache').setItem('data', data, { ttl: 3600 })
  return data
})
```

## Best Practices

- Use `defineEventHandler` for type safety
- Validate input with Zod or similar
- Handle errors gracefully with `createError`
- Use environment variables via `useRuntimeConfig`
- Implement proper authentication/authorization
- Use caching for expensive operations
- Keep routes small and focused
