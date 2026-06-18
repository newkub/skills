---
title: Server Entry
description: Global middleware ที่ run ก่อนทุก routes
---

## What is Server Entry?

Server entry เป็น special handler ที่ทำหน้าที่เป็น global middleware รันสำหรับทุก incoming request ก่อนที่ routes จะถูก match

## Use Cases

- Authentication
- Logging
- Request preprocessing
- Custom routing logic
- Rate limiting
- CORS handling

## Auto-detected server.ts

Nitro auto-detect `server.ts` ใน project root:

```typescript
// server.ts
export default defineHandler((event) => {
  // Global middleware logic
  console.log('Request:', event.node.req.url);
  
  // Return undefined เพื่อ continue ไปยัง routes
  return undefined;
});
```

## Framework Compatibility

### Web-compatible Frameworks

H3, Hono, Elysia, Express ที่รองรับ Web Standards:

```typescript
import { Hono } from 'hono';

const app = new Hono();

app.use((c, next) => {
  console.log('Middleware');
  return next();
});

export default app;
```

### Node.js Frameworks

Express, Fastify ที่เฉพาะ Node.js:

```typescript
import express from 'express';

const app = express();

app.use((req, res, next) => {
  console.log('Middleware');
  next();
});

export default app;
```

## Configuration

### Custom Server Entry File

```typescript
export default defineConfig({
  serverEntry: './custom-server.ts'
});
```

### Handler Format

Return `Response` หรือ `undefined`:

```typescript
export default defineHandler((event) => {
  // Return response เพื่อ terminate
  if (event.node.req.url === '/health') {
    return { status: 'ok' };
  }
  
  // Return undefined เพื่อ continue
  return undefined;
});
```

### Disabling Server Entry

```typescript
export default defineConfig({
  serverEntry: false
});
```

## Request Lifecycle

```
1. Server hook (request)
2. Route rules
3. Global middleware (middleware/)
4. Server entry ← You are here
5. Routes (routes/)
6. Renderer
7. Server hook (response)
```

## Using Event Handler

```typescript
import type { H3Event } from "nitro";

export default defineHandler((event: H3Event) => {
  // Access request
  const url = event.node.req.url;
  const method = event.node.req.method;
  
  // Access headers
  const auth = getHeader(event, 'authorization');
  
  // Set headers
  setHeader(event, 'x-custom', 'value');
  
  // Continue to routes
  return undefined;
});
```

## Development Mode

ใน development mode:
- HMR สำหรับ server entry
- Auto-reload เมื่อ file เปลี่ยน
- Error reporting แบบ real-time

## Best Practices

- Return `undefined` เพื่อ continue ไปยัง routes
- Return response เพื่อ terminate request
- ใช้สำหรับ cross-cutting concerns เท่านั้น
- Avoid heavy operations ใน server entry
- Test server entry ใน isolation
