# Security

รักษาความปลอดภัยสำหรับ Workers และ data

## Secrets

ใช้ secrets สำหรับ sensitive data

```bash
# Set secret
wrangler secret put API_KEY

# Use in code
const apiKey = env.API_KEY;
```

## Environment Variables

```jsonc
{
  "vars": {
    "ENV": "production"
  }
}
```

## Never Commit Secrets

- Add `wrangler.jsonc` แต่ไม่ include secrets
- Use environment variables สำหรับ CI/CD
- Rotate secrets regularly
- Use least privilege access

## Input Validation

```typescript
export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext) {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");

    if (!id || !/^[a-zA-Z0-9-]+$/.test(id)) {
      return new Response("Invalid ID", { status: 400 });
    }

    // Process request
  },
};
```

## CORS

```typescript
export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext) {
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    }

    // Handle request
  },
};
```

## Best Practices

- Use secrets for sensitive data
- Validate all inputs
- Implement CORS properly
- Use HTTPS only
- Monitor for security issues
