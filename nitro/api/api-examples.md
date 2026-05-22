# Nitro API Examples

## Basic Routes

### Simple JSON Response

```typescript
// routes/index.ts
export default defineEventHandler(() => {
  return { message: 'Hello Nitro!' }
})
```

### Route Parameters

```typescript
// routes/users/[id].ts
export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  return { userId: id }
})
```

### Query Parameters

```typescript
// routes/search.ts
export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const term = query.q as string

  return {
    search: term,
    results: await searchDatabase(term)
  }
})
```

### POST Request with Body

```typescript
// routes/api/users.ts
export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  // Validate input
  if (!body.name || !body.email) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Name and email are required'
    })
  }

  // Create user
  const user = await createUser(body)

  return setResponseStatus(event, 201, user)
})
```

## Authentication Examples

### Basic Auth Middleware

```typescript
// middleware/auth.ts
export default defineEventHandler(async (event) => {
  const auth = getHeader(event, 'authorization')

  if (!auth || !isValidToken(auth)) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized'
    })
  }
})
```

### JWT Authentication

```typescript
// routes/api/protected.ts
export default defineEventHandler(async (event) => {
  const token = getCookie(event, 'auth-token')

  if (!token) {
    throw createError({
      statusCode: 401,
      statusMessage: 'No token provided'
    })
  }

  const user = await verifyJWT(token)
  event.context.user = user

  return { user }
})
```

## Database Examples

### Using Built-in Database

```typescript
// routes/api/posts.ts
export default defineEventHandler(async (event) => {
  const db = useDatabase()
  const method = getMethod(event)

  if (method === 'GET') {
    const posts = await db.sql`SELECT * FROM posts ORDER BY created_at DESC`
    return { posts }
  }

  if (method === 'POST') {
    const body = await readBody(event)
    const result = await db.sql`
      INSERT INTO posts (title, content) 
      VALUES (${body.title}, ${body.content})
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
  const { from, to, amount } = await readBody(event)

  try {
    await db.transaction(async (tx) => {
      // Check balance
      const balance = await tx.get(
        'SELECT balance FROM accounts WHERE id = ?',
        [from]
      )

      if (balance.balance < amount) {
        throw new Error('Insufficient funds')
      }

      // Transfer
      await tx.run(
        'UPDATE accounts SET balance = balance - ? WHERE id = ?',
        [amount, from]
      )

      await tx.run(
        'UPDATE accounts SET balance = balance + ? WHERE id = ?',
        [amount, to]
      )
    })

    return { success: true }
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message
    })
  }
})
```

## Storage Examples

### Redis Storage

```typescript
// routes/api/cache.ts
export default defineEventHandler(async (event) => {
  const storage = useStorage('redis')
  const key = getRouterParam(event, 'key')
  const method = getMethod(event)

  if (method === 'GET') {
    const value = await storage.getItem(key)
    return { value }
  }

  if (method === 'POST') {
    const { value, ttl } = await readBody(event)
    await storage.setItem(key, value, { ttl })
    return { success: true }
  }

  if (method === 'DELETE') {
    await storage.removeItem(key)
    return { success: true }
  }
})
```

### File System Storage

```typescript
// routes/api/files.ts
export default defineEventHandler(async (event) => {
  const storage = useStorage('fs')
  const filename = getRouterParam(event, 'filename')

  // Upload file
  if (getMethod(event) === 'POST') {
    const file = await readMultipartFormData(event)
    const buffer = await file[0].data.arrayBuffer()
    await storage.setItem(`uploads/${filename}`, Buffer.from(buffer))
    return { success: true }
  }

  // Download file
  const fileBuffer = await storage.getItem(`uploads/${filename}`)
  return send(event, fileBuffer, {
    type: 'application/octet-stream'
  })
})
```

## Caching Examples

### Route Caching

```typescript
// routes/api/data.ts
export default defineEventHandler(async (event) => {
  const cache = useCache()
  const cacheKey = `data:${getQuery(event).id}`

  let data = await cache.getItem(cacheKey)

  if (!data) {
    data = await fetchExpensiveData(getQuery(event).id)
    await cache.setItem(cacheKey, data, { ttl: 3600 })
  }

  return { data }
})
```

### Response Caching

```typescript
// nitro.config.ts
export default defineNitroConfig({
  routeRules: {
    '/api/data/**': {
      cache: {
        maxAge: 60 * 60 * 24, // 24 hours
        swr: true
      }
    }
  }
})
```

## WebSocket Examples

### Simple Chat Server

```typescript
// routes/chat.ts
export default defineWebSocket({
  open(peer) {
    console.log('New user connected')
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
    console.log('User disconnected')
  }
})
```

### Real-time Notifications

```typescript
// routes/notifications.ts
export default defineWebSocket({
  open(peer) {
    // Send initial notifications
    peer.send(JSON.stringify({
      type: 'notifications',
      data: getInitialNotifications()
    }))
  },

  message(peer, message) {
    const { type, data } = JSON.parse(message)

    if (type === 'subscribe') {
      // Subscribe to notifications for user
      peer.userId = data.userId
    }
  }
})

// Send notification to specific user
export async function sendNotification(userId: string, notification: any) {
  const peers = getConnectedPeers()
  peers
    .filter(peer => peer.userId === userId)
    .forEach(peer => {
      peer.send(JSON.stringify({
        type: 'notification',
        data: notification
      }))
    })
}
```

## File Upload Examples

### Single File Upload

```typescript
// routes/api/upload.ts
export default defineEventHandler(async (event) => {
  const files = await readMultipartFormData(event)

  if (!files || files.length === 0) {
    throw createError({
      statusCode: 400,
      statusMessage: 'No file uploaded'
    })
  }

  const file = files[0]
  const storage = useStorage()

  // Save file
  const filename = `${Date.now()}-${file.filename}`
  await storage.setItem(`uploads/${filename}`, await file.data.arrayBuffer())

  return {
    filename,
    url: `/uploads/${filename}`
  }
})
```

### Multiple File Upload

```typescript
// routes/api/upload-multiple.ts
export default defineEventHandler(async (event) => {
  const files = await readMultipartFormData(event)
  const storage = useStorage()
  const uploadedFiles = []

  for (const file of files) {
    const filename = `${Date.now()}-${file.filename}`
    await storage.setItem(`uploads/${filename}`, await file.data.arrayBuffer())

    uploadedFiles.push({
      filename,
      originalName: file.filename,
      url: `/uploads/${filename}`
    })
  }

  return { files: uploadedFiles }
})
```

## Error Handling Examples

### Global Error Handler

```typescript
// plugins/error-handler.ts
export default defineNitroPlugin((nitro) => {
  nitro.hooks.hook('error', (error, event) => {
    console.error('Server error:', error)

    // Log to external service
    logError(error, {
      url: event.path,
      method: getMethod(event),
      userAgent: getHeader(event, 'user-agent')
    })
  })
})
```

### Custom Error Responses

```typescript
// routes/api/users/[id].ts
export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')

  try {
    const user = await getUserById(id)

    if (!user) {
      throw createError({
        statusCode: 404,
        statusMessage: 'User not found',
        data: { userId: id }
      })
    }

    return { user }
  } catch (error) {
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

## Middleware Examples

### CORS Middleware

```typescript
// middleware/cors.ts
export default defineEventHandler(async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization'
  }

  if (getMethod(event) === 'OPTIONS') {
    setResponseHeaders(event, headers)
    return send(event, null, 200)
  }

  setResponseHeaders(event, headers)
})
```

### Rate Limiting Middleware

```typescript
// middleware/rate-limit.ts
export default defineEventHandler(async (event) => {
  const clientIP = getClientIP(event)
  const storage = useStorage()
  const key = `rate-limit:${clientIP}`

  const requests = await storage.getItem(key) || 0

  if (requests > 100) { // 100 requests per minute
    throw createError({
      statusCode: 429,
      statusMessage: 'Too many requests'
    })
  }

  await storage.setItem(key, requests + 1, { ttl: 60 })
})
```

## Advanced Examples

### Proxy to External API

```typescript
// routes/api/proxy/[...path].ts
export default defineEventHandler(async (event) => {
  const path = getRouterParam(event, 'path')
  const query = getQuery(event)

  const response = await $fetch(`https://api.example.com/${path}`, {
    query,
    headers: {
      'Authorization': getHeader(event, 'authorization')
    }
  })

  return response
})
```

### Server-Side Rendering

```typescript
// routes/ssr/[page].ts
export default defineEventHandler(async (event) => {
  const page = getRouterParam(event, 'page')
  const data = await getPageData(page)

  // Render with template engine
  const html = await renderTemplate('page', {
    title: data.title,
    content: data.content
  })

  return send(event, html, {
    type: 'text/html'
  })
})
```
