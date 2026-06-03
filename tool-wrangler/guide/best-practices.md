# Best Practices

## Project Structure

### Recommended Layout

```
my-worker/
├── src/
│   ├── index.ts       # Entry point
│   ├── handlers/      # Route handlers
│   ├── utils/         # Utility functions
│   └── types.ts       # Type definitions
├── wrangler.jsonc     # Configuration
├── package.json
├── tsconfig.json
└── .gitignore
```

### Separate Configuration

ใช้ TypeScript สำหรับ type safety:

```typescript
// src/types.ts
interface Env {
  DB: D1Database;
  MY_KV: KVNamespace;
  API_KEY: string;
}
```

## Development

### Use Local Development

```bash
# Local development
wrangler dev

# With remote bindings
wrangler dev --remote
```

### Test Scheduled Events

```bash
# Expose /__scheduled endpoint
wrangler dev --test-scheduled
```

## Security

### Never Commit Secrets

```bash
# Add to .gitignore
.env
.dev.vars
wrangler.toml
```

### Use Secrets for Sensitive Data

```bash
# Create secret
wrangler secret put API_KEY

# Or bulk upload
wrangler secret bulk secrets.json
```

### Validate Environment Variables

```typescript
export default {
  async fetch(request: Request, env: Env) {
    if (!env.DATABASE_URL) {
      return new Response("Configuration error", { status: 500 });
    }
    // ...
  },
};
```

## Performance

### Use Streaming Responses

```typescript
export default {
  async fetch(request: Request): Promise<Response> {
    const { readable, writable } = new TransformStream();

    // Write to writable in background
    writerToStream(writable);

    return new Response(readable);
  },
};
```

### Enable Caching

```typescript
return new Response(body, {
  headers: {
    "Cache-Control": "public, max-age=86400",
  },
});
```

### Limit Worker Execution Time

Keep request handlers under CPU time limits.

## Deployment

### Use Environments

```bash
# Staging
wrangler deploy -e staging

# Production
wrangler deploy -e production
```

### Test Before Deploy

```bash
# Dry run
wrangler deploy --dry-run

# Preview URL
wrangler dev --preview
```

## Common Pitfalls

| Pitfall | วิธีแก้ |
|---------|----------|
| Missing `compatibility_date` | กำหนด date ใน wrangler.jsonc |
| Undefined bindings | ใช้ TypeScript types |
| Slow cold start | Minimize imports |
| Memory leaks | Clean up event listeners |

## CI/CD

### GitHub Actions

```yaml
name: Deploy
on: [push]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm install
      - run: wrangler deploy
        env:
          CLOUDFLARE_API_TOKEN: ${{ secrets.CLOUDFLARE_API_TOKEN }}
```