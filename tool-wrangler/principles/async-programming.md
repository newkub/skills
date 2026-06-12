# Async Programming

Workers ใช้ async/await สำหรับ asynchronous operations

## Fetch Handler

```typescript
export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext) {
    // Async operations
    const data = await env.CACHE.get("key");
    return new Response(data);
  },
};
```

## ExecutionContext

ใช้ `ctx.waitUntil()` สำหรับ background tasks

```typescript
export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext) {
    // ทำงานหลัก
    const response = await handleRequest(request);

    // Background task
    ctx.waitUntil(logAnalytics(request));

    return response;
  },
};
```

## Best Practices

- ใช้ `async/await` แทน callbacks
- ใช้ `Promise.all()` สำหรับ parallel operations
- ใช้ `ctx.waitUntil()` สำหรับ non-critical tasks
- Handle errors ด้วย try/catch
