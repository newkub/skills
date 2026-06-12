# Quick Start

## Create New Project

```bash
# Create new Worker
wrangler init my-worker

# Navigate to project
cd my-worker
```

## Project Structure

```
my-worker/
├── src/
│   └── index.ts      # Worker entry point
├── wrangler.jsonc    # Configuration
├── package.json      # Dependencies
└── tsconfig.json      # TypeScript config
```

## Basic Worker

```typescript
// src/index.ts
export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext
  ): Promise<Response> {
    return new Response("Hello World!");
  },
};
```

## Development

```bash
# Start local development
wrangler dev

# Open browser to http://localhost:8787
```

## Deploy

```bash
# Deploy to Cloudflare
wrangler deploy

# Deploy to specific environment
wrangler deploy --env staging
```

## Add Bindings

### KV

```bash
# Create KV namespace
wrangler kv:namespace create MY_KV

# Add to wrangler.jsonc
```

### R2

```bash
# Create R2 bucket
wrangler r2 bucket create my-bucket

# Add to wrangler.jsonc
```

### D1

```bash
# Create D1 database
wrangler d1 create my-db

# Add to wrangler.jsonc
```

## View Logs

```bash
# Tail logs in real-time
wrangler tail my-worker
```

## Next Steps

- Add bindings (KV, R2, D1)
- Configure routes and domains
- Set up environments
- Add cron triggers
- Implement Durable Objects
