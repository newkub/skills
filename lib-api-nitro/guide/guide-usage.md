# Nitro Usage Guide

## Getting Started

### 1. Create Your First Route

```typescript
// routes/index.ts
export default defineEventHandler(() => {
  return { message: 'Hello Nitro!' }
})
```

### 2. Run Development Server

```bash
npm run dev
# หรือ
bun run dev
```

### 3. Test Your API

เปิด <http://localhost:3000> ใน browser หรือใช้ curl:

```bash
curl http://localhost:3000
# Response: {"message":"Hello Nitro!"}
```

## Route Patterns

### Static Routes

```typescript
// routes/about.ts
export default defineEventHandler(() => {
  return { page: 'about', content: 'About us page' }
})
```

### Dynamic Routes

```typescript
// routes/users/[id].ts
export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  return { userId: id }
})
```

### Catch-all Routes

```typescript
// routes/[...slug].ts
export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')
  return { path: slug }
})
```

### Nested Routes

```typescript
// routes/api/v1/users/[id].ts
export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  return { apiVersion: 'v1', userId: id }
})
```

## HTTP Methods

### GET Request

```typescript
// routes/api/users.ts
export default defineEventHandler(async (event) => {
  if (getMethod(event) !== 'GET') {
    throw createError({
      statusCode: 405,
      statusMessage: 'Method Not Allowed'
    })
  }

  const users = await getUsers()
  return { users }
})
```

### POST Request

```typescript
// routes/api/users.ts
export default defineEventHandler(async (event) => {
  if (getMethod(event) !== 'POST') {
    throw createError({
      statusCode: 405,
      statusMessage: 'Method Not Allowed'
    })
  }

  const body = await readBody(event)
  const user = await createUser(body)

  return setResponseStatus(event, 201, user)
})
```

### PUT Request

```typescript
// routes/api/users/[id].ts
export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')

  if (getMethod(event) !== 'PUT') {
    throw createError({
      statusCode: 405,
      statusMessage: 'Method Not Allowed'
    })
  }

  const body = await readBody(event)
  const user = await updateUser(id, body)

  return { user }
})
```

### DELETE Request

```typescript
// routes/api/users/[id].ts
export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')

  if (getMethod(event) !== 'DELETE') {
    throw createError({
      statusCode: 405,
      statusMessage: 'Method Not Allowed'
    })
  }

  await deleteUser(id)

  return setResponseStatus(event, 204)
})
```

## Request Handling

### Query Parameters

```typescript
// routes/api/search.ts
export default defineEventHandler(async (event) => {
  const query = getQuery(event)

  // Type casting
  const search = query.q as string
  const page = parseInt(query.page as string) || 1
  const limit = parseInt(query.limit as string) || 10

  const results = await searchItems(search, page, limit)

  return {
    search,
    page,
    limit,
    results
  }
})
```

### Headers

```typescript
// routes/api/info.ts
export default defineEventHandler(async (event) => {
  const userAgent = getHeader(event, 'user-agent')
  const contentType = getHeader(event, 'content-type')
  const authorization = getHeader(event, 'authorization')

  return {
    userAgent,
    contentType,
    hasAuth: !!authorization
  }
})
```

### Cookies

```typescript
// routes/api/auth.ts
export default defineEventHandler(async (event) => {
  // Get cookies
  const token = getCookie(event, 'auth-token')
  const sessionId = getCookie(event, 'session-id')

  // Set cookies
  setCookie(event, 'new-token', 'abc123', {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    maxAge: 60 * 60 * 24 // 24 hours
  })

  return { token, sessionId }
})
```

### Request Body

```typescript
// routes/api/data.ts
export default defineEventHandler(async (event) => {
  const method = getMethod(event)

  if (method === 'POST' || method === 'PUT') {
    const body = await readBody(event)

    // Handle JSON data
    if (typeof body === 'object') {
      return { received: body }
    }

    // Handle form data
    if (event.node.req.headers['content-type']?.includes('multipart/form-data')) {
      const files = await readMultipartFormData(event)
      return { files: files.map(f => f.filename) }
    }
  }

  return { method }
})
```

## Response Handling

### JSON Response

```typescript
// routes/api/json.ts
export default defineEventHandler(async (event) => {
  return {
    success: true,
    data: {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com'
    },
    timestamp: new Date().toISOString()
  }
})
```

### HTML Response

```typescript
// routes/page.ts
export default defineEventHandler(async (event) => {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>My Page</title>
    </head>
    <body>
      <h1>Hello Nitro!</h1>
      <p>This is an HTML response.</p>
    </body>
    </html>
  `

  return send(event, html, {
    type: 'text/html'
  })
})
```

### File Response

```typescript
// routes/download/[filename].ts
export default defineEventHandler(async (event) => {
  const filename = getRouterParam(event, 'filename')
  const storage = useStorage()

  const file = await storage.getItem(`files/${filename}`)

  if (!file) {
    throw createError({
      statusCode: 404,
      statusMessage: 'File not found'
    })
  }

  return send(event, file, {
    type: 'application/octet-stream',
    disposition: `attachment; filename="${filename}"`
  })
})
```

### Redirect Response

```typescript
// routes/old-path.ts
export default defineEventHandler(async (event) => {
  return sendRedirect(event, '/new-path', 301)
})
```

## Error Handling

### Throwing Errors

```typescript
// routes/api/error.ts
export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')

  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'ID is required',
      data: { field: 'id' }
    })
  }

  try {
    const data = await fetchData(id)
    return { data }
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal server error'
    })
  }
})
```

### Error Middleware

```typescript
// middleware/error-handler.ts
export default defineEventHandler(async (event) => {
  try {
    await event.handler()
  } catch (error) {
    console.error('Error:', error)

    if (isH3Error(error)) {
      throw error
    }

    throw createError({
      statusCode: 500,
      statusMessage: 'Internal server error'
    })
  }
})
```

## Storage Usage

### Basic Storage Operations

```typescript
// routes/api/storage.ts
export default defineEventHandler(async (event) => {
  const storage = useStorage()
  const method = getMethod(event)

  if (method === 'GET') {
    const value = await storage.getItem('my-key')
    return { value }
  }

  if (method === 'POST') {
    const { value } = await readBody(event)
    await storage.setItem('my-key', value)
    return { success: true }
  }

  if (method === 'DELETE') {
    await storage.removeItem('my-key')
    return { success: true }
  }
})
```

### Namespaced Storage

```typescript
// routes/api/cache.ts
export default defineEventHandler(async (event) => {
  const redisStorage = useStorage('redis')
  const fsStorage = useStorage('fs')

  // Use Redis for caching
  await redisStorage.setItem('cache:user:123', userData, { ttl: 3600 })

  // Use filesystem for files
  await fsStorage.setItem('uploads/image.jpg', imageBuffer)

  return { success: true }
})
```

## Database Usage

### Basic Database Operations

```typescript
// routes/api/database.ts
export default defineEventHandler(async (event) => {
  const db = useDatabase()
  const method = getMethod(event)

  if (method === 'GET') {
    const users = await db.sql`SELECT * FROM users`
    return { users }
  }

  if (method === 'POST') {
    const { name, email } = await readBody(event)
    const result = await db.sql`
      INSERT INTO users (name, email) 
      VALUES (${name}, ${email})
    `
    return { id: result.lastInsertRowid }
  }
})
```

### Database Transactions

```typescript
// routes/api/transfer.ts
export default defineEventHandler(async (event) => {
  const db = useDatabase()
  const { fromAccount, toAccount, amount } = await readBody(event)

  await db.transaction(async (tx) => {
    // Check balance
    const balance = await tx.get(
      'SELECT balance FROM accounts WHERE id = ?',
      [fromAccount]
    )

    if (balance.balance < amount) {
      throw new Error('Insufficient funds')
    }

    // Transfer money
    await tx.run(
      'UPDATE accounts SET balance = balance - ? WHERE id = ?',
      [amount, fromAccount]
    )

    await tx.run(
      'UPDATE accounts SET balance = balance + ? WHERE id = ?',
      [amount, toAccount]
    )
  })

  return { success: true }
})
```

## Caching Usage

### Basic Caching

```typescript
// routes/api/expensive.ts
export default defineEventHandler(async (event) => {
  const cache = useCache()
  const cacheKey = 'expensive-data'

  let data = await cache.getItem(cacheKey)

  if (!data) {
    console.log('Computing expensive data...')
    data = await computeExpensiveData()
    await cache.setItem(cacheKey, data, { ttl: 3600 })
  }

  return { data, cached: true }
})
```

### Route-based Caching

```typescript
// nitro.config.ts
export default defineNitroConfig({
  routeRules: {
    '/api/public/**': {
      cache: {
        maxAge: 60 * 60, // 1 hour
        swr: true
      }
    },
    '/api/static/**': {
      cache: {
        maxAge: 60 * 60 * 24 // 24 hours
      }
    }
  }
})
```

## WebSocket Usage

### Basic WebSocket

```typescript
// routes/chat.ts
export default defineWebSocket({
  open(peer) {
    console.log('New user connected to chat')
  },

  message(peer, message) {
    // Broadcast to all connected peers
    peer.send(JSON.stringify({
      type: 'message',
      data: message,
      timestamp: Date.now()
    }))
  },

  close(peer) {
    console.log('User disconnected from chat')
  }
})
```

### WebSocket with Authentication

```typescript
// routes/secure-chat.ts
export default defineWebSocket({
  async open(peer) {
    // Authenticate on connection
    const token = peer.headers.get('authorization')
    const user = await verifyToken(token)

    if (!user) {
      peer.close(1008, 'Invalid token')
      return
    }

    peer.user = user
    console.log(`User ${user.id} connected`)
  },

  message(peer, message) {
    if (!peer.user) {
      peer.close(1008, 'Not authenticated')
      return
    }

    // Send message with user info
    peer.send(JSON.stringify({
      type: 'message',
      user: peer.user,
      data: message,
      timestamp: Date.now()
    }))
  }
})
```

## Middleware Usage

### Global Middleware

```typescript
// middleware/logger.ts
export default defineEventHandler(async (event) => {
  const start = Date.now()

  console.log(`${getMethod(event)} ${event.path}`)

  await event.handler()

  const duration = Date.now() - start
  console.log(`${getMethod(event)} ${event.path} - ${duration}ms`)
})
```

### Route-specific Middleware

```typescript
// routes/api/admin/users.ts
export default defineEventHandler(async (event) => {
  // Check admin permission
  const user = event.context.user

  if (!user || !user.isAdmin) {
    throw createError({
      statusCode: 403,
      statusMessage: 'Admin access required'
    })
  }

  // Admin logic here
  const users = await getAllUsers()
  return { users }
})
```

## Environment Variables

### Using Environment Variables

```typescript
// routes/api/config.ts
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()

  return {
    databaseUrl: config.databaseUrl,
    apiKey: config.apiKey,
    environment: process.env.NODE_ENV
  }
})
```

### Configuration with Environment Variables

```typescript
// nitro.config.ts
export default defineNitroConfig({
  runtimeConfig: {
    // Private keys (only available on server-side)
    apiSecret: process.env.API_SECRET,
    databaseUrl: process.env.DATABASE_URL,

    // Public keys (exposed to client-side)
    public: {
      apiUrl: process.env.API_URL || '/api',
      version: '1.0.0'
    }
  }
})
```

## Production Deployment

### Building for Production

```bash
npm run build
# หรือ
bun run build
```

### Preview Production Build

```bash
npm run preview
# หรือ
bun run preview
```

### Environment-specific Configuration

```typescript
// nitro.config.ts
export default defineNitroConfig({
  $development: {
    devServer: {
      port: 3000
    },
    routeRules: {
      '/api/**': {
        cors: true
      }
    }
  },

  $production: {
    preset: 'cloudflare',
    minify: true,
    sourcemap: false
  }
})
```
