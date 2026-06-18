---
title: Lifecycle
description: Request lifecycle และ hooks ของ Nitro
---

## Request Lifecycle

Request สามารถถูก intercept และ terminate จาก layer ใดๆ ตามลำดับนี้:

```
1. request hook
2. Static assets
3. Route rules
4. Global middleware
5. Routed middleware
6. Routes
7. Renderer
8. response hook
```

## Detailed Flow

### 1. Request Hook

Hook แรกที่ run สำหรับทุก request:

```typescript
export default definePlugin((nitroApp) => {
  nitroApp.hooks.hook('request', (event) => {
    console.log('Request received:', event.node.req.url);
  });
});
```

### 2. Static Assets

Check ว่า request match กับ static assets ใน `public/` directory

### 3. Route Rules

Apply route rules:
- Headers
- CORS
- Redirect
- Proxy
- Caching
- Prerender

```typescript
export default defineConfig({
  routeRules: {
    '/api/**': { cors: true, headers: { 'x-api': 'true' } }
  }
});
```

### 4. Global Middleware

Middleware ใน `middleware/` directory ที่ apply กับทุก routes:

```typescript
// middleware/auth.ts
export default defineMiddleware((event) => {
  const token = getCookie(event, 'token');
  if (!token) {
    throw createError({ statusCode: 401 });
  }
});
```

### 5. Routed Middleware

Middleware ที่ specific กับ route:

```typescript
// routes/admin/users.ts
export default defineEventHandler(event => {
  // Route-specific middleware
}, {
  middleware: ['auth']
});
```

### 6. Routes

Match และ execute route handler จาก `routes/` หรือ `api/`:

```typescript
// routes/hello.ts
export default defineHandler(() => {
  return { message: 'Hello World' };
});
```

### 7. Renderer

ถ้าไม่ match กับ routes ใดๆ จะไปยัง renderer:

```typescript
// renderer.ts
export default defineRenderer((url) => {
  return new Response('HTML content');
});
```

### 8. Response Hook

Hook สุดท้าย หลัง response ถูกส่ง:

```typescript
export default definePlugin((nitroApp) => {
  nitroApp.hooks.hook('response', (event, response) => {
    console.log('Response sent');
  });
});
```

## Error Handling

Errors สามารถถูก handle ในหลายจุด:

### Middleware

```typescript
export default defineMiddleware((event) => {
  try {
    // Logic
  } catch (error) {
    throw createError({ statusCode: 500, message: 'Internal error' });
  }
});
```

### Error Hook

```typescript
export default definePlugin((nitroApp) => {
  nitroApp.hooks.hook('error', (error, event) => {
    console.error('Error:', error);
    // Send to error tracking
  });
});
```

### Error Handler Config

```typescript
export default defineConfig({
  errorHandler: (error, event) => {
    return {
      statusCode: error.statusCode || 500,
      message: error.message
    };
  }
});
```

## Server Shutdown

Handle graceful shutdown:

```typescript
export default definePlugin((nitroApp) => {
  nitroApp.hooks.hook('close', async () => {
    console.log('Shutting down...');
    // Cleanup
  });
});
```

## Hooks Reference

| Hook | Description | When |
|------|-------------|------|
| `request` | Before request processing | Start of request |
| `response` | After response sent | End of request |
| `error` | When error occurs | On error |
| `render` | Before rendering | Before renderer |
| `close` | Server shutdown | On shutdown |

## Best Practices

- ใช้ hooks สำหรับ cross-cutting concerns
- Avoid heavy operations ใน hooks
- Handle errors gracefully ในทุก layer
- Test lifecycle ใน different scenarios
- Use middleware สำหรับ route-specific logic
