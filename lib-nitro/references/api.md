# API Reference

## Handler Functions

| Function | Description |
|----------|-------------|
| `defineHandler(handler)` | Define a route handler |
| `defineCachedHandler(handler, options)` | Define a cached route handler |
| `defineWebSocketHandler(hooks)` | Define a WebSocket handler |
| `defineTask(task)` | Define a runtime task |
| `defineNitroPlugin(plugin)` | Define a Nitro plugin |
| `defineNitroErrorHandler(handler)` | Define a global error handler |

## Runtime Utilities

| Function | Description |
|----------|-------------|
| `useStorage(base?)` | Access KV storage |
| `useDatabase(name?)` | Access SQL database |
| `useRuntimeConfig()` | Access runtime configuration |
| `useBase(base, handler)` | Set base path for routes |

## Handler Context (event)

| Property/Method | Description |
|-----------------|-------------|
| `event.method` | HTTP method (GET, POST, etc.) |
| `event.path` | Request path |
| `event.headers` | Request headers |
| `event.request` | Web Request object |
| `event.context.params` | Route parameters |

## Request Helpers

| Function | Description |
|----------|-------------|
| `event.request.json()` | Parse JSON body |
| `event.request.text()` | Parse text body |
| `event.request.formData()` | Parse form data |
| `event.request.arrayBuffer()` | Read raw body |

## Response Types

| Type | Description |
|------|-------------|
| `JSON object` | Auto-serialized to JSON |
| `string` | Sent as text/plain |
| `Response` | Web standard Response |
| `ReadableStream` | Streamed response |

## Storage API

| Method | Description |
|--------|-------------|
| `getItem(key)` | Get value by key |
| `setItem(key, value)` | Set key-value pair |
| `removeItem(key)` | Remove by key |
| `hasItem(key)` | Check if key exists |
| `getKeys(base?)` | List all keys |
| `getMeta(key)` | Get key metadata |
| `setMeta(key, meta)` | Set key metadata |

## Cache Options

| Option | Type | Description |
|--------|------|-------------|
| `maxAge` | `number` | Cache TTL in seconds |
| `staleMaxAge` | `number` | Stale cache TTL |
| `swr` | `boolean` | Stale-while-revalidate |
| `base` | `string` | Storage base key |
| `name` | `string` | Cache entry name |

## Error Handling

| Function | Description |
|----------|-------------|
| `createError({ statusCode, statusMessage })` | Create HTTP error |

## Database API

| Method | Description |
|--------|-------------|
| `db.sql\`query\`` | Execute SQL template literal |
