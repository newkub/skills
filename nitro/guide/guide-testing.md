# Nitro Testing Guide

## Testing Setup

### Install Testing Dependencies

```bash
# Using npm
npm install -D vitest @vitest/ui @types/supertest supertest

# Using bun
bun add -D vitest @vitest/ui @types/supertest supertest
```

### Configure Vitest

```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'node',
    globals: true,
    setupFiles: ['./tests/setup.ts']
  }
})
```

### Test Setup

```typescript
// tests/setup.ts
import { beforeAll, afterAll } from 'vitest'
import { $fetch } from 'nitro'
import { setup } from './setup-server'

let nitro: any

beforeAll(async () => {
  nitro = await setup()
})

afterAll(async () => {
  if (nitro) {
    await nitro.close()
  }
})
```

## Unit Testing

### Testing Route Handlers

```typescript
// tests/routes/api/users.test.ts
import { describe, it, expect, beforeEach } from 'vitest'
import { createEvent, createApp } from 'h3'
import userHandler from '~/routes/api/users/[id].ts'

describe('User API', () => {
  beforeEach(() => {
    // Reset mocks and database
    vi.clearAllMocks()
  })

  it('should return user data', async () => {
    // Create mock event
    const event = createEvent('/api/users/123')

    // Mock getRouterParam
    vi.mocked(getRouterParam).mockReturnValue('123')

    // Mock getUserById
    vi.mock('~/utils/userService', () => ({
      getUserById: vi.fn().mockResolvedValue({
        id: 123,
        name: 'John Doe',
        email: 'john@example.com'
      })
    }))

    // Call handler
    const result = await userHandler(event)

    expect(result).toEqual({
      user: {
        id: 123,
        name: 'John Doe',
        email: 'john@example.com'
      }
    })
  })

  it('should return 404 for non-existent user', async () => {
    const event = createEvent('/api/users/999')

    vi.mocked(getRouterParam).mockReturnValue('999')

    vi.mock('~/utils/userService', () => ({
      getUserById: vi.fn().mockResolvedValue(null)
    }))

    await expect(userHandler(event)).rejects.toThrow('User not found')
  })
})
```

### Testing Utility Functions

```typescript
// tests/utils/validation.test.ts
import { describe, it, expect } from 'vitest'
import { validateUserInput } from '~/utils/validation'

describe('Validation Utils', () => {
  it('should validate correct user input', () => {
    const input = {
      name: 'John Doe',
      email: 'john@example.com',
      age: 30
    }

    const result = validateUserInput(input)
    expect(result).toEqual(input)
  })

  it('should reject invalid email', () => {
    const input = {
      name: 'John Doe',
      email: 'invalid-email',
      age: 30
    }

    expect(() => validateUserInput(input)).toThrow('Invalid email')
  })

  it('should reject missing required fields', () => {
    const input = {
      name: 'John Doe'
      // missing email
    }

    expect(() => validateUserInput(input)).toThrow('Email is required')
  })
})
```

### Testing Middleware

```typescript
// tests/middleware/auth.test.ts
import { describe, it, expect, beforeEach } from 'vitest'
import { createEvent } from 'h3'
import authMiddleware from '~/middleware/auth'

describe('Auth Middleware', () => {
  it('should allow access with valid token', async () => {
    const event = createEvent('/api/protected')

    vi.mocked(getCookie).mockReturnValue('valid-token')
    vi.mock('~/utils/auth', () => ({
      verifyToken: vi.fn().mockResolvedValue({
        id: 123,
        role: 'user'
      })
    }))

    await authMiddleware(event)

    expect(event.context.user).toEqual({
      id: 123,
      role: 'user'
    })
  })

  it('should reject access without token', async () => {
    const event = createEvent('/api/protected')

    vi.mocked(getCookie).mockReturnValue(null)

    await expect(authMiddleware(event)).rejects.toThrow('Authentication required')
  })
})
```

## Integration Testing

### Testing API Endpoints

```typescript
// tests/integration/api.test.ts
import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { setup } from '../setup-server'

describe('API Integration Tests', () => {
  let server: any

  beforeEach(async () => {
    server = await setup()
  })

  afterEach(async () => {
    if (server) {
      await server.close()
    }
  })

  it('should create and retrieve user', async () => {
    // Create user
    const createResponse = await $fetch('/api/users', {
      baseURL: server.url,
      method: 'POST',
      body: {
        name: 'John Doe',
        email: 'john@example.com'
      }
    })

    expect(createResponse).toHaveProperty('user')
    expect(createResponse.user.name).toBe('John Doe')

    // Retrieve user
    const getResponse = await $fetch(`/api/users/${createResponse.user.id}`, {
      baseURL: server.url
    })

    expect(getResponse.user).toEqual(createResponse.user)
  })

  it('should handle validation errors', async () => {
    try {
      await $fetch('/api/users', {
        baseURL: server.url,
        method: 'POST',
        body: {
          name: 'John'
          // missing email
        }
      })
    } catch (error) {
      expect(error.response?.status).toBe(400)
      expect(error.data?.message).toContain('validation')
    }
  })
})
```

### Database Testing

```typescript
// tests/integration/database.test.ts
import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { setup } from '../setup-server'
import { useDatabase } from '~/utils/database'

describe('Database Integration', () => {
  let server: any
  let db: any

  beforeEach(async () => {
    server = await setup()
    db = useDatabase()

    // Clean database
    await db.sql`DELETE FROM users`
  })

  afterEach(async () => {
    if (server) {
      await server.close()
    }
  })

  it('should perform CRUD operations', async () => {
    // Create
    const result = await db.sql`
      INSERT INTO users (name, email) 
      VALUES (${'John Doe'}, ${'john@example.com'})
    `

    expect(result.lastInsertRowid).toBeDefined()

    // Read
    const users = await db.sql`SELECT * FROM users WHERE id = ${result.lastInsertRowid}`
    expect(users).toHaveLength(1)
    expect(users[0].name).toBe('John Doe')

    // Update
    await db.sql`
      UPDATE users SET name = ${'Jane Doe'} 
      WHERE id = ${result.lastInsertRowid}
    `

    const updated = await db.sql`SELECT * FROM users WHERE id = ${result.lastInsertRowid}`
    expect(updated[0].name).toBe('Jane Doe')

    // Delete
    await db.sql`DELETE FROM users WHERE id = ${result.lastInsertRowid}`

    const deleted = await db.sql`SELECT * FROM users WHERE id = ${result.lastInsertRowid}`
    expect(deleted).toHaveLength(0)
  })
})
```

## E2E Testing

### Testing with Playwright

```typescript
// tests/e2e/api.spec.ts
import { test, expect } from '@playwright/test'

test.describe('API E2E Tests', () => {
  test('should handle complete user flow', async ({ request }) => {
    // Create user
    const createResponse = await request.post('/api/users', {
      data: {
        name: 'John Doe',
        email: 'john@example.com'
      }
    })

    expect(createResponse.ok()).toBeTruthy()
    const createUser = await createResponse.json()

    // Get user
    const getResponse = await request.get(`/api/users/${createUser.user.id}`)
    expect(getResponse.ok()).toBeTruthy()

    const getUser = await getResponse.json()
    expect(getUser.user).toEqual(createUser.user)

    // Update user
    const updateResponse = await request.put(`/api/users/${createUser.user.id}`, {
      data: {
        name: 'Jane Doe'
      }
    })

    expect(updateResponse.ok()).toBeTruthy()

    // Delete user
    const deleteResponse = await request.delete(`/api/users/${createUser.user.id}`)
    expect(deleteResponse.ok()).toBeTruthy()

    // Verify deletion
    const verifyResponse = await request.get(`/api/users/${createUser.user.id}`)
    expect(verifyResponse.status()).toBe(404)
  })
})
```

### WebSocket Testing

```typescript
// tests/e2e/websocket.spec.ts
import { test, expect } from '@playwright/test'
import { WebSocket } from 'ws'

test.describe('WebSocket E2E Tests', () => {
  test('should handle chat messages', async ({ page }) => {
    const ws = new WebSocket('ws://localhost:3000/chat')

    await new Promise<void>((resolve) => {
      ws.on('open', () => {
        // Send message
        ws.send(JSON.stringify({
          type: 'message',
          data: 'Hello World'
        }))
      })

      ws.on('message', (data) => {
        const message = JSON.parse(data.toString())
        expect(message.type).toBe('message')
        expect(message.data).toBe('Hello World')
        resolve()
      })
    })

    ws.close()
  })
})
```

## Mock Testing

### Mock External Services

```typescript
// tests/mocks/external-api.ts
import { vi } from 'vitest'

export const mockExternalAPI = {
  getUser: vi.fn(),
  createPayment: vi.fn(),
  sendEmail: vi.fn()
}

vi.mock('~/utils/external-api', () => ({
  getUser: mockExternalAPI.getUser,
  createPayment: mockExternalAPI.createPayment,
  sendEmail: mockExternalAPI.sendEmail
}))

// Usage in tests
mockExternalAPI.getUser.mockResolvedValue({
  id: 123,
  name: 'John Doe'
})
```

### Mock Database

```typescript
// tests/mocks/database.ts
export class MockDatabase {
  private data = new Map<string, any>()

  async sql(query: string, ...values: any[]) {
    // Mock implementation
    if (query.includes('SELECT')) {
      return this.mockSelect(query, values)
    }
    if (query.includes('INSERT')) {
      return this.mockInsert(query, values)
    }
    if (query.includes('UPDATE')) {
      return this.mockUpdate(query, values)
    }
    if (query.includes('DELETE')) {
      return this.mockDelete(query, values)
    }
  }

  private mockSelect(query: string, values: any[]) {
    // Simple mock for SELECT queries
    return Array.from(this.data.values())
  }

  private mockInsert(query: string, values: any[]) {
    return { lastInsertRowid: Math.floor(Math.random() * 1000) }
  }

  private mockUpdate(query: string, values: any[]) {
    return { changes: 1 }
  }

  private mockDelete(query: string, values: any[]) {
    return { changes: 1 }
  }
}

// Usage in tests
const mockDb = new MockDatabase()
vi.mock('~/utils/database', () => ({
  useDatabase: () => mockDb
}))
```

## Performance Testing

### Load Testing

```typescript
// tests/performance/load.test.ts
import { describe, it, expect } from 'vitest'
import { $fetch } from 'nitro'

describe('Performance Tests', () => {
  it('should handle concurrent requests', async () => {
    const requests = Array.from({ length: 100 }, (_, i) =>
      $fetch('/api/users', {
        query: { page: Math.floor(i / 10) + 1 }
      })
    )

    const startTime = Date.now()
    const results = await Promise.all(requests)
    const endTime = Date.now()

    expect(results).toHaveLength(100)
    expect(endTime - startTime).toBeLessThan(5000) // 5 seconds
  })

  it('should have fast response times', async () => {
    const start = Date.now()
    await $fetch('/api/users/1')
    const duration = Date.now() - start

    expect(duration).toBeLessThan(100) // 100ms
  })
})
```

## Test Utilities

### Test Helpers

```typescript
// tests/utils/helpers.ts
import { createEvent } from 'h3'

export function createMockEvent(path: string, options: any = {}) {
  const event = createEvent(path)

  // Mock request methods
  if (options.method) {
    event.node.req.method = options.method
  }

  if (options.query) {
    vi.mocked(getQuery).mockReturnValue(options.query)
  }

  if (options.params) {
    vi.mocked(getRouterParam).mockImplementation((key) => options.params[key])
  }

  if (options.body) {
    vi.mocked(readBody).mockResolvedValue(options.body)
  }

  if (options.headers) {
    Object.entries(options.headers).forEach(([key, value]) => {
      vi.mocked(getHeader).mockImplementation((headerKey) => 
        headerKey === key ? value : undefined
      )
    })
  }

  return event
}

export function createTestUser(overrides: any = {}) {
  return {
    id: Math.floor(Math.random() * 1000),
    name: 'Test User',
    email: 'test@example.com',
    createdAt: new Date().toISOString(),
    ...overrides
  }
}

export async function setupTestDatabase() {
  const db = useDatabase()

  // Clean all tables
  await db.sql`DELETE FROM users`
  await db.sql`DELETE FROM posts`

  return db
}
```

### Test Fixtures

```typescript
// tests/fixtures/user-fixture.ts
import { TestFixture } from 'vitest'

export const userFixture = new TestFixture({
  async setup() {
    const user = await createTestUser()
    return { user }
  },

  async teardown({ user }) {
    await deleteUser(user.id)
  }
})

// Usage in tests
test('should work with user fixture', async ({ user }) => {
  const result = await getUserById(user.id)
  expect(result).toEqual(user)
})
```

## Continuous Integration

### GitHub Actions Configuration

```yaml
# .github/workflows/test.yml
name: Test

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest

    services:
      postgres:
        image: postgres:15
        env:
          POSTGRES_PASSWORD: postgres
          POSTGRES_DB: test
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
        ports:
          - 5432:5432

      redis:
        image: redis:7
        options: >-
          --health-cmd "redis-cli ping"
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
        ports:
          - 6379:6379

    steps:
    - uses: actions/checkout@v3

    - name: Setup Bun
      uses: oven-sh/setup-bun@v1

    - name: Install dependencies
      run: bun install

    - name: Run tests
      run: bun test
      env:
        DATABASE_URL: postgresql://postgres:postgres@localhost:5432/test
        REDIS_URL: redis://localhost:6379
```

### Coverage Configuration

```typescript
// vitest.config.ts
export default defineConfig({
  test: {
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'tests/',
        '**/*.d.ts',
        '**/*.config.*'
      ]
    }
  }
})
```

## Best Practices

### Test Organization

```text
tests/
├── unit/                 # Unit tests
│   ├── routes/
│   ├── utils/
│   └── middleware/
├── integration/          # Integration tests
│   ├── api/
│   └── database/
├── e2e/                 # End-to-end tests
│   ├── api.spec.ts
│   └── websocket.spec.ts
├── fixtures/            # Test fixtures
├── mocks/              # Mock implementations
├── utils/              # Test utilities
└── setup.ts            # Global setup
```

### Test Naming Conventions

```typescript
// ✅ Good: Descriptive test names
it('should create user with valid data')
it('should return 404 for non-existent user')
it('should reject invalid email format')

// ❌ Avoid: Vague test names
it('works')
it('test user')
it('error case')
```

### Test Data Management

```typescript
// ✅ Good: Use factories for test data
export function createUserFactory(overrides: any = {}) {
  return {
    id: faker.datatype.number(),
    name: faker.name.fullName(),
    email: faker.internet.email(),
    createdAt: faker.date.past().toISOString(),
    ...overrides
  }
}

// ✅ Good: Clean up after tests
afterEach(async () => {
  await cleanupDatabase()
})
```
