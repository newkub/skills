# Performance

Optimize Workers สำหรับ low latency และ high throughput

## Minimize Cold Starts

- Keep entry point simple
- Avoid heavy initialization
- Use lazy loading
- Cache frequently used data

## Use Caching

```typescript
export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext) {
    const cacheKey = `data:${request.url}`;
    const cached = await env.CACHE.get(cacheKey);

    if (cached) {
      return new Response(cached);
    }

    const data = await fetchData();
    await env.CACHE.put(cacheKey, JSON.stringify(data), {
      expirationTtl: 3600,
    });

    return new Response(JSON.stringify(data));
  },
};
```

## Streaming

ใช้ streaming สำหรับ large responses

```typescript
export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext) {
    const stream = await env.BUCKET.get("large-file.txt");
    return new Response(stream?.body);
  },
};
```

## Optimize Bundle Size

- Tree-shake unused code
- Minify output
- Avoid large dependencies
- Use ESM modules

## Set Limits

```jsonc
{
  "limits": {
    "cpu_ms": 50,
    "memory_mb": 128
  }
}
```

## Best Practices

- Measure before optimizing
- Use KV for caching
- Stream large responses
- Set appropriate limits
