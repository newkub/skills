# Nitro API Reference

## Core API

### defineEventHandler()

สร้าง event handler สำหรับ routes

```typescript
import { defineEventHandler } from 'h3'

export default defineEventHandler((event) => {
  return { message: 'Hello World' }
})
```

### defineEventHandler() with async

```typescript
export default defineEventHandler(async (event) => {
  const data = await fetchData()
  return { data }
})
```

## Request Handling

### getQuery()

รับ query parameters

```typescript
export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  return { search: query.search }
})
```

### getRouterParam()

รับ route parameters

```typescript
// routes/users/[id].ts
export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  return { userId: id }
})
```

### readBody()

รับ request body

```typescript
export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  return { received: body }
})
```

### getCookie() / setCookie()

จัดการ cookies

```typescript
export default defineEventHandler(async (event) => {
  const token = getCookie(event, 'auth-token')
  setCookie(event, 'session', 'abc123')
  return { token }
})
```

### getHeaders()

รับ request headers

```typescript
export default defineEventHandler(async (event) => {
  const headers = getHeaders(event)
  return { userAgent: headers['user-agent'] }
})
```

## Response Handling

### setResponseStatus()

ตั้งค่า HTTP status

```typescript
export default defineEventHandler(async (event) => {
  setResponseStatus(event, 201)
  return { message: 'Created' }
})
```

### setResponseHeaders()

ตั้งค่า response headers

```typescript
export default defineEventHandler(async (event) => {
  setResponseHeaders(event, {
    'Content-Type': 'application/json',
    'X-Custom-Header': 'value'
  })
  return { data: 'success' }
})
```

### sendRedirect()

ส่ง redirect

```typescript
export default defineEventHandler(async (event) => {
  return sendRedirect(event, '/login')
})
```

## Error Handling

### createError()

สร้าง HTTP errors

```typescript
export default defineEventHandler(async (event) => {
  if (!isValid()) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request'
    })
  }
  return { success: true }
})
```

### handleServerError()

จัดการ server errors

```typescript
export default defineEventHandler(async (event) => {
  try {
    return await riskyOperation()
  } catch (error) {
    return handleServerError(error, event)
  }
})
```

## Storage API

### useStorage()

ใช้งาน storage layer

```typescript
export default defineEventHandler(async (event) => {
  const storage = useStorage()

  // Set value
  await storage.setItem('key', 'value')

  // Get value
  const value = await storage.getItem('key')

  // Remove value
  await storage.removeItem('key')

  return { value }
})
```

### Storage with namespace

```typescript
export default defineEventHandler(async (event) => {
  const storage = useStorage('redis')
  const data = await storage.getItem('user:123')
  return { data }
})
```

## Database API

### useDatabase()

ใช้งาน database layer

```typescript
export default defineEventHandler(async (event) => {
  const db = useDatabase()

  // Query
  const users = await db.sql`SELECT * FROM users`

  // Insert
  await db.sql`INSERT INTO users (name) VALUES (${'John'})`

  return { users }
})
```

## Caching API

### useCache()

ใช้งาน caching

```typescript
export default defineEventHandler(async (event) => {
  const cache = useCache()

  // Get cached data
  let data = await cache.getItem('expensive-data')

  if (!data) {
    data = await expensiveOperation()
    await cache.setItem('expensive-data', data, { ttl: 3600 })
  }

  return { data }
})
```

## Utility Functions

### getRouteRules()

รับ route rules

```typescript
export default defineEventHandler(async (event) => {
  const rules = getRouteRules(event)
  return { cors: rules.cors }
})
```

### getNitroConfig()

รับ Nitro configuration

```typescript
export default defineEventHandler(async (event) => {
  const config = getNitroConfig()
  return { preset: config.preset }
})
```

## Plugin API

### defineNitroPlugin()

สร้าง Nitro plugins

```typescript
export default defineNitroPlugin((nitro) => {
  nitro.hooks.hook('request', (event) => {
    console.log('Request:', event.path)
  })
})
```

## Runtime API

### useRuntimeConfig()

รับ runtime configuration

```typescript
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  return { apiSecret: config.apiSecret }
})
```

## WebSocket API

### defineWebSocket()

สร้าง WebSocket handlers

```typescript
export default defineWebSocket({
  open(peer) {
    console.log('WebSocket opened')
  },
  message(peer, message) {
    peer.send(`Echo: ${message}`)
  },
  close(peer, event) {
    console.log('WebSocket closed')
  }
})
```

## Middleware API

### event.handler()

สร้าง middleware

```typescript
export default defineEventHandler(async (event) => {
  // Middleware logic
  console.log('Middleware executed')

  // Continue to next handler
  await event.handler()
})
```

## Type Definitions

### H3Event

```typescript
interface H3Event {
  node: {
    req: IncomingMessage
    res: ServerResponse
  }
  context: Record<string, any>
}
```

### EventHandler

```typescript
type EventHandler<T = any> = (event: H3Event) => T | Promise<T>
```

## Built-in Utilities

### sanitizeQuery()

```typescript
export default defineEventHandler(async (event) => {
  const query = sanitizeQuery(getQuery(event))
  return { query }
})
```

### validateData()

```typescript
export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const validated = validateData(body, schema)
  return { data: validated }
})
```
