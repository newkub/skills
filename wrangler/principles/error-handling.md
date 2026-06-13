# Error Handling

จัดการ errors อย่างเหมาะสมเพื่อ reliability

## Try-Catch

```typescript
export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext) {
    try {
      const data = await fetchData(env);
      return new Response(JSON.stringify(data));
    } catch (error) {
      console.error("Error:", error);
      return new Response("Internal Error", { status: 500 });
    }
  },
};
```

## HTTP Status Codes

ใช้ status codes ที่เหมาะสม

```typescript
if (!data) {
  return new Response("Not Found", { status: 404 });
}

if (invalidInput) {
  return new Response("Bad Request", { status: 400 });
}

if (unauthorized) {
  return new Response("Unauthorized", { status: 401 });
}
```

## Error Logging

```typescript
try {
  await operation();
} catch (error) {
  console.error({
    message: error.message,
    stack: error.stack,
    timestamp: new Date().toISOString(),
  });
  throw error;
}
```

## Best Practices

- Log errors ด้วย context
- Return appropriate HTTP status
- Never expose sensitive data
- Use structured logging
