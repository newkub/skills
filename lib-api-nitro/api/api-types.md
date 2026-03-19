# Nitro Type Definitions

## Core Types

### H3Event

```typescript
interface H3Event {
  node: {
    req: IncomingMessage
    res: ServerResponse
  }
  context: Record<string, any>
  __nitro?: NitroRuntimeContext
}
```

### EventHandler

```typescript
type EventHandler<T = any> = (event: H3Event) => T | Promise<T>

interface EventHandlerResponse<T = any> {
  data?: T
  statusCode?: number
  statusMessage?: string
  headers?: Record<string, string>
}
```

### NitroConfig

```typescript
interface NitroConfig {
  preset?: string
  devServer?: {
    port?: number
    host?: string
  }
  storage?: Record<string, StorageConfig>
  database?: Record<string, DatabaseConfig>
  routeRules?: Record<string, RouteRule>
  plugins?: string[]
  experimental?: Record<string, any>
  $development?: Partial<NitroConfig>
  $production?: Partial<NitroConfig>
}
```

## Storage Types

### StorageConfig

```typescript
interface StorageConfig {
  driver: string
  options?: Record<string, any>
}
```

### Storage

```typescript
interface Storage {
  getItem(key: string): Promise<any>
  setItem(key: string, value: any, options?: StorageOptions): Promise<void>
  removeItem(key: string): Promise<void>
  hasItem(key: string): Promise<boolean>
  getKeys(): Promise<string[]>
  clear(): Promise<void>
}

interface StorageOptions {
  ttl?: number
}
```

## Database Types

### DatabaseConfig

```typescript
interface DatabaseConfig {
  driver: string
  options?: Record<string, any>
}
```

### Database

```typescript
interface Database {
  sql<T = any>(query: TemplateStringsArray, ...values: any[]): Promise<T[]>
  prepare<T = any>(query: string): PreparedStatement<T>
  transaction<T>(fn: () => Promise<T>): Promise<T>
}

interface PreparedStatement<T = any> {
  execute(...values: any[]): Promise<T[]>
  all(...values: any[]): Promise<T[]>
  get(...values: any[]): Promise<T | undefined>
  run(...values: any[]): Promise<DatabaseRunResult>
}

interface DatabaseRunResult {
  changes: number
  lastInsertRowid?: number
}
```

## Route Types

### RouteRule

```typescript
interface RouteRule {
  cors?: boolean | CorsOptions
  headers?: Record<string, string>
  redirect?: string | { to: string; statusCode?: number }
  cache?: boolean | CacheOptions
  auth?: string | AuthOptions
  proxy?: string | ProxyOptions
}

interface CorsOptions {
  origin?: string | string[]
  methods?: string[]
  allowedHeaders?: string[]
  credentials?: boolean
}

interface CacheOptions {
  maxAge?: number
  swr?: boolean
  varies?: string[]
}

interface AuthOptions {
  providers?: string[]
  session?: boolean
}

interface ProxyOptions {
  to: string
  headers?: Record<string, string>
}
```

## Error Types

### H3Error

```typescript
interface H3Error extends Error {
  statusCode?: number
  statusMessage?: string
  data?: any
  internal?: boolean
}

function createError(options: {
  statusCode?: number
  statusMessage?: string
  data?: any
  cause?: Error
}): H3Error
```

## WebSocket Types

### WebSocketHandler

```typescript
interface WebSocketHandler {
  open?(peer: WebSocketPeer): void | Promise<void>
  message?(peer: WebSocketPeer, message: any): void | Promise<void>
  close?(peer: WebSocketPeer, event: CloseEvent): void | Promise<void>
  error?(peer: WebSocketPeer, error: Error): void | Promise<void>
}

interface WebSocketPeer {
  send(data: any): void
  close(code?: number, reason?: string): void
  readyState: number
}
```

## Plugin Types

### NitroPlugin

```typescript
interface NitroPlugin {
  name?: string
  setup?: (nitro: Nitro) => void | Promise<void>
  hooks?: NitroHooks
}

interface Nitro {
  options: NitroConfig
  hooks: Hookable<NitroHooks>
  storage: Storage
  database: Database
}

interface NitroHooks {
  'request': (event: H3Event) => void | Promise<void>
  'beforeResponse': (event: H3Event, response: any) => void | Promise<void>
  'afterResponse': (event: H3Event, response: any) => void | Promise<void>
  'error': (event: H3Event, error: any) => void | Promise<void>
}
```

## Utility Types

### RuntimeConfig

```typescript
interface RuntimeConfig {
  [key: string]: any
  nitro?: {
    envPrefix?: string
    routeRules?: Record<string, RouteRule>
  }
}
```

### QueryObject

```typescript
interface QueryObject extends Record<string, string | string[]> {
  [key: string]: string | string[] | undefined
}
```

### CookieOptions

```typescript
interface CookieOptions {
  domain?: string
  path?: string
  httpOnly?: boolean
  secure?: boolean
  sameSite?: 'strict' | 'lax' | 'none'
  maxAge?: number
  expires?: Date
}
```

## Response Types

### SendOptions

```typescript
interface SendOptions {
  statusCode?: number
  statusMessage?: string
  type?: string
  charset?: string
}
```

### RedirectOptions

```typescript
interface RedirectOptions {
  code?: number
  headers?: Record<string, string>
}
```

## Validation Types

### ValidationSchema

```typescript
interface ValidationSchema {
  type?: 'object' | 'array' | 'string' | 'number' | 'boolean'
  properties?: Record<string, ValidationSchema>
  items?: ValidationSchema
  required?: string[]
  minimum?: number
  maximum?: number
  pattern?: string
  format?: string
}
```

## Preset Types

### Preset

```typescript
interface Preset {
  name: string
  entry?: string
  output?: {
    dir?: string
    serverDir?: string
    publicDir?: string
  }
  alias?: Record<string, string>
  externals?: string[]
  rollupConfig?: any
  hooks?: NitroHooks
}
```

## Context Types

### NitroRuntimeContext

```typescript
interface NitroRuntimeContext {
  event: H3Event
  nitro: Nitro
  config: NitroConfig
  runtimeConfig: RuntimeConfig
}
```

## Helper Types

### Awaitable

```typescript
type Awaitable<T> = T | Promise<T>
```

### MaybePromise

```typescript
type MaybePromise<T> = T | Promise<T>
```

### DeepPartial

```typescript
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}
```

## Type Guards

### isH3Event

```typescript
function isH3Event(obj: any): obj is H3Event
```

### isH3Error

```typescript
function isH3Error(obj: any): obj is H3Error
```

## Generic Types

### EventHandlerResponse

```typescript
type EventHandlerResponse<T = any> = MaybePromise<T>
```

### MiddlewareHandler

```typescript
type MiddlewareHandler = EventHandler<void>
```

### RouteHandler

```typescript
type RouteHandler<T = any> = EventHandler<T>
```
