# Nitro Best Practices

## Project Structure

### Directory Organization

```text
my-nitro-app/
├── routes/                 # Route handlers
│   ├── api/               # API routes
│   ├── pages/             # Page routes
│   └── index.ts           # Home page
├── middleware/            # Global middleware
├── plugins/              # Nitro plugins
├── utils/                # Utility functions
├── types/                # TypeScript definitions
├── nitro.config.ts       # Configuration
├── package.json
└── tsconfig.json
```

### Route Naming Conventions

```typescript
// ✅ Good: Descriptive and consistent
routes/api/v1/users/[id].ts
routes/api/v1/posts/[slug].ts
routes/pages/about.ts

// ❌ Avoid: Inconsistent naming
routes/user/[userId].ts
routes/post/[postSlug].ts
routes/about-page.ts
```

## Code Organization

### Separation of Concerns

```typescript
// ✅ Good: Separate business logic from route handlers
// utils/userService.ts
export async function getUserById(id: string) {
  const db = useDatabase()
  const user = await db.get('SELECT * FROM users WHERE id = ?', [id])
  return user
}

// routes/api/users/[id].ts
export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  const user = await getUserById(id)

  if (!user) {
    throw createError({
      statusCode: 404,
      statusMessage: 'User not found'
    })
  }

  return { user }
})
```

### Reusable Middleware

```typescript
// middleware/auth.ts
export function defineAuthMiddleware(roles?: string[]) {
  return defineEventHandler(async (event) => {
    const token = getCookie(event, 'auth-token')

    if (!token) {
      throw createError({
        statusCode: 401,
        statusMessage: 'Authentication required'
      })
    }

    const user = await verifyToken(token)

    if (roles && !roles.includes(user.role)) {
      throw createError({
        statusCode: 403,
        statusMessage: 'Insufficient permissions'
      })
    }

    event.context.user = user
  })
}

// Usage in routes
export default defineAuthMiddleware(['admin'])
```

## Error Handling

### Consistent Error Responses

```typescript
// utils/errors.ts
export class ApiError extends Error {
  constructor(
    public statusCode: number,
    public message: string,
    public data?: any
  ) {
    super(message)
  }
}

export function handleApiError(error: any, event: H3Event) {
  console.error('API Error:', error)

  if (error instanceof ApiError) {
    throw createError({
      statusCode: error.statusCode,
      statusMessage: error.message,
      data: error.data
    })
  }

  throw createError({
    statusCode: 500,
    statusMessage: 'Internal server error'
  })
}

// Usage in routes
export default defineEventHandler(async (event) => {
  try {
    const user = await getUserById(id)
    return { user }
  } catch (error) {
    return handleApiError(error, event)
  }
})
```

### Validation Best Practices

```typescript
// utils/validation.ts
import { z } from 'zod'

export const createUserSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
  age: z.number().min(0).max(120).optional()
})

export function validateInput<T>(schema: z.ZodSchema<T>, data: any): T {
  try {
    return schema.parse(data)
  } catch (error) {
    throw new ApiError(400, 'Validation failed', error.errors)
  }
}

// Usage in routes
export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const validated = validateInput(createUserSchema, body)

  const user = await createUser(validated)
  return { user }
})
```

## Performance Optimization

### Caching Strategies

```typescript
// utils/cache.ts
export async function getCachedData<T>(
  key: string,
  fetcher: () => Promise<T>,
  ttl: number = 3600
): Promise<T> {
  const cache = useCache()

  let data = await cache.getItem(key)

  if (!data) {
    data = await fetcher()
    await cache.setItem(key, data, { ttl })
  }

  return data
}

// Usage
export default defineEventHandler(async (event) => {
  const userId = getRouterParam(event, 'id')

  const user = await getCachedData(
    `user:${userId}`,
    () => getUserById(userId),
    1800 // 30 minutes
  )

  return { user }
})
```

### Database Optimization

```typescript
// utils/database.ts
export async function getUsersWithPagination(
  page: number = 1,
  limit: number = 10
) {
  const db = useDatabase()
  const offset = (page - 1) * limit

  const [users, total] = await Promise.all([
    db.sql`
      SELECT id, name, email, created_at 
      FROM users 
      ORDER BY created_at DESC 
      LIMIT ${limit} OFFSET ${offset}
    `,
    db.sql`SELECT COUNT(*) as total FROM users`
  ])

  return {
    users,
    pagination: {
      page,
      limit,
      total: total[0].total,
      pages: Math.ceil(total[0].total / limit)
    }
  }
}
```

### Efficient Storage Usage

```typescript
// utils/storage.ts
export class StorageManager {
  constructor(private namespace: string) {}

  async get(key: string): Promise<any> {
    const storage = useStorage(this.namespace)
    return storage.getItem(key)
  }

  async set(key: string, value: any, options?: any): Promise<void> {
    const storage = useStorage(this.namespace)
    return storage.setItem(key, value, options)
  }

  async invalidate(pattern: string): Promise<void> {
    const storage = useStorage(this.namespace)
    const keys = await storage.getKeys()
    const matchingKeys = keys.filter(key => key.includes(pattern))

    await Promise.all(matchingKeys.map(key => storage.removeItem(key)))
  }
}

// Usage
const userCache = new StorageManager('user-cache')
await userCache.set(`user:${id}`, userData, { ttl: 3600 })
```

## Security Best Practices

### Input Sanitization

```typescript
// utils/security.ts
export function sanitizeInput(input: any): any {
  if (typeof input === 'string') {
    return input.trim()
      .replace(/[<>]/g, '') // Remove HTML tags
      .slice(0, 1000) // Limit length
  }

  if (Array.isArray(input)) {
    return input.map(sanitizeInput)
  }

  if (typeof input === 'object' && input !== null) {
    const sanitized: any = {}
    for (const [key, value] of Object.entries(input)) {
      if (typeof key === 'string' && /^[a-zA-Z0-9_]+$/.test(key)) {
        sanitized[key] = sanitizeInput(value)
      }
    }
    return sanitized
  }

  return input
}

// Usage in routes
export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const sanitized = sanitizeInput(body)

  // Process sanitized data
})
```

### Rate Limiting

```typescript
// middleware/rate-limit.ts
export function defineRateLimitMiddleware(options: {
  windowMs: number
  maxRequests: number
}) {
  return defineEventHandler(async (event) => {
    const clientIP = getClientIP(event)
    const storage = useStorage()
    const key = `rate-limit:${clientIP}`

    const requests = await storage.getItem(key) || 0

    if (requests >= options.maxRequests) {
      throw createError({
        statusCode: 429,
        statusMessage: 'Too many requests'
      })
    }

    await storage.setItem(key, requests + 1, { ttl: options.windowMs / 1000 })
  })
}

// Usage
export default defineRateLimitMiddleware({
  windowMs: 60 * 1000, // 1 minute
  maxRequests: 100
})
```

### CORS Configuration

```typescript
// nitro.config.ts
export default defineNitroConfig({
  routeRules: {
    '/api/**': {
      cors: {
        origin: ['https://myapp.com', 'https://admin.myapp.com'],
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true
      }
    }
  }
})
```

## Testing Best Practices

### Test Structure

```typescript
// tests/api/users.test.ts
import { describe, it, expect, beforeAll } from 'vitest'

describe('User API', () => {
  beforeAll(async () => {
    // Setup test database
    await setupTestDatabase()
  })

  it('should create a user', async () => {
    const response = await $fetch('/api/users', {
      method: 'POST',
      body: {
        name: 'John Doe',
        email: 'john@example.com'
      }
    })

    expect(response).toHaveProperty('user')
    expect(response.user.name).toBe('John Doe')
  })

  it('should get user by ID', async () => {
    const user = await createTestUser()

    const response = await $fetch(`/api/users/${user.id}`)

    expect(response.user).toEqual(user)
  })

  it('should return 404 for non-existent user', async () => {
    try {
      await $fetch('/api/users/999')
    } catch (error) {
      expect(error.response?.status).toBe(404)
    }
  })
})
```

### Mock Services

```typescript
// tests/mocks/userService.ts
export const mockUserService = {
  getUserById: vi.fn(),
  createUser: vi.fn(),
  updateUser: vi.fn(),
  deleteUser: vi.fn()
}

// tests/api/users.test.ts
import { mockUserService } from '../mocks/userService'

vi.mock('../../utils/userService', () => ({
  getUserById: mockUserService.getUserById,
  createUser: mockUserService.createUser
}))

it('should handle service errors', async () => {
  mockUserService.getUserById.mockRejectedValue(
    new Error('Database error')
  )

  try {
    await $fetch('/api/users/1')
  } catch (error) {
    expect(error.response?.status).toBe(500)
  }
})
```

## Configuration Management

### Environment-specific Config

```typescript
// nitro.config.ts
export default defineNitroConfig({
  $development: {
    devServer: {
      port: 3000
    },
    routeRules: {
      '/api/**': {
        cors: true,
        headers: {
          'X-Debug': 'true'
        }
      }
    }
  },

  $test: {
    preset: 'node',
    routeRules: {
      '/api/**': {
        cache: false
      }
    }
  },

  $production: {
    preset: 'cloudflare',
    minify: true,
    sourcemap: false,
    routeRules: {
      '/api/**': {
        cache: {
          maxAge: 300
        }
      }
    }
  }
})
```

### Runtime Configuration

```typescript
// config/runtime.ts
export interface RuntimeConfig {
  database: {
    url: string
    maxConnections: number
  }
  auth: {
    jwtSecret: string
    jwtExpiresIn: string
  }
  cache: {
    redis: {
      url: string
    }
  }
}

export const runtimeConfig: RuntimeConfig = {
  database: {
    url: process.env.DATABASE_URL!,
    maxConnections: parseInt(process.env.DB_MAX_CONNECTIONS || '10')
  },
  auth: {
    jwtSecret: process.env.JWT_SECRET!,
    jwtExpiresIn: process.env.JWT_EXPIRES_IN || '24h'
  },
  cache: {
    redis: {
      url: process.env.REDIS_URL!
    }
  }
}
```

## Logging and Monitoring

### Structured Logging

```typescript
// utils/logger.ts
export class Logger {
  constructor(private context: string) {}

  info(message: string, meta?: any) {
    console.log(JSON.stringify({
      level: 'info',
      context: this.context,
      message,
      meta,
      timestamp: new Date().toISOString()
    }))
  }

  error(message: string, error?: any, meta?: any) {
    console.error(JSON.stringify({
      level: 'error',
      context: this.context,
      message,
      error: error?.stack || error,
      meta,
      timestamp: new Date().toISOString()
    }))
  }
}

// Usage
const logger = new Logger('UserService')
logger.info('User created successfully', { userId: user.id })
```

### Performance Monitoring

```typescript
// middleware/performance.ts
export default defineEventHandler(async (event) => {
  const start = Date.now()

  try {
    await event.handler()
  } finally {
    const duration = Date.now() - start

    // Log slow requests
    if (duration > 1000) {
      console.warn(`Slow request: ${getMethod(event)} ${event.path} - ${duration}ms`)
    }

    // Send metrics to monitoring service
    await sendMetric('api.request.duration', duration, {
      method: getMethod(event),
      path: event.path
    })
  }
})
```

## Documentation

### API Documentation

```typescript
// routes/api/users/[id].ts
/**
 * Get user by ID
 * 
 * @param id - User ID
 * @returns User object
 * @throws 404 - User not found
 * @example
 * GET /api/users/123
 * Response:
 * {
 *   "user": {
 *     "id": 123,
 *     "name": "John Doe",
 *     "email": "john@example.com"
 *   }
 * }
 */
export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  const user = await getUserById(id)

  if (!user) {
    throw createError({
      statusCode: 404,
      statusMessage: 'User not found'
    })
  }

  return { user }
})
```

### Type Safety

```typescript
// types/api.ts
export interface User {
  id: number
  name: string
  email: string
  createdAt: string
  updatedAt: string
}

export interface CreateUserRequest {
  name: string
  email: string
}

export interface UserResponse {
  user: User
}

export interface UsersResponse {
  users: User[]
  pagination: {
    page: number
    limit: number
    total: number
    pages: number
  }
}

// Usage in routes
export default defineEventHandler(async (event): Promise<UserResponse> => {
  const id = getRouterParam(event, 'id')
  const user = await getUserById(id)

  return { user }
})
```
