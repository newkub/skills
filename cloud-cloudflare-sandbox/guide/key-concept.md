# Cloudflare Sandbox - Key Concepts

แนวคิดหลักและคำศัพท์สำคัญสำหรับ Cloudflare Sandbox

## 1. Wrangler CLI

### What is Wrangler?

```text
┌─────────────────────────────────────────────────┐
│              Wrangler CLI Architecture           │
├─────────────────────────────────────────────────┤
│                                                  │
│   ┌─────────────────────────────────────────┐   │
│   │            Wrangler                     │   │
│   │  ┌─────────┐  ┌─────────┐  ┌─────────┐  │   │
│   │  │ Config  │  │  Auth   │  │ Deploy  │  │   │
│   │  │ Parser  │  │ Manager │  │ Manager │  │   │
│   │  └─────────┘  └─────────┘  └─────────┘  │   │
│   └─────────────────────────────────────────┘   │
│          │           │           │              │
│          ▼           ▼           ▼              │
│   ┌──────────┐  ┌──────────┐  ┌──────────┐      │
│   │   TOML   │  │   CF    │  │   KV     │      │
│   │  Parser  │  │   API   │  │ Worker  │      │
│   └──────────┘  └──────────┘  └──────────┘      │
│                                                  │
└─────────────────────────────────────────────────┘
```

### Installation

```bash
npm install -g wrangler
wrangler --version
```

### Authentication

```bash
# Login to Cloudflare
wrangler login

# Check auth status
wrangler whoami

# Logout
wrangler logout
```

## 2. Local Development

### Start Dev Server

```bash
# Start with default settings
wrangler dev

# Specify port
wrangler dev --port 3000

# Specify host
wrangler dev --host localhost
```

### Live Reload

```text
Dev server features:
├── Auto-reload on file changes
├── Hot module replacement
├── Source maps
├── Local KV emulation
└── Error overlay
```

### Debug Mode

```bash
# Enable verbose logging
wrangler dev --verbose

# Enable source maps
wrangler dev --source-map

# Enable heap snapshots
wrangler dev --inspect
```

## 3. Environment Configuration

### wrangler.toml

```toml
name = "my-worker"
main = "src/index.ts"
compatibility_date = "2024-01-01"

# Environments
[env.staging]
name = "my-worker-staging"

[env.production]
name = "my-worker-prod"
```

### Environment Variables

```toml
# Public variables (visible in browser)
[vars]
DEBUG = "false"
API_URL = "https://api.example.com"

# Secrets (not in config)
# Use: wrangler secret put NAME
```

### Secret Management

```bash
# Add secret
wrangler secret put API_KEY

# List secrets
wrangler secret list

# Delete secret
wrangler secret delete API_KEY
```

## 4. Local Services

### KV Namespace

```bash
# Create local KV for dev
wrangler kv:namespace create "MY_KV"

# Or in wrangler.toml
[[kv_namespaces]]
binding = "MY_KV"
id = "xxxxxxxxxxxxxxxxxxxxx"
```

### D1 Database

```bash
# Create local D1
wrangler d1 create my-db

# Apply migrations
wrangler d1 execute my-db --file=./migrations/001.sql
```

### R2 Bucket

```bash
# Create local R2
wrangler r2 bucket create my-bucket

# In wrangler.toml
[[r2_buckets]]
binding = "ASSETS"
bucket_name = "my-bucket"
```

## 5. Testing

### Playwright Integration

```typescript
// test/worker.spec.ts
import { env, fetch } from '@cloudflare/workers-test-utils';

test('worker returns greeting', async () => {
  const result = await fetch('http://localhost:8787/');
  expect(result.status).toBe(200);
  expect(await result.text()).toBe('Hello!');
});
```

### Run Tests

```bash
# Run all tests
wrangler dev --test

# Or use vitest directly
npx vitest
```

## 6. Preview & Deploy

### Preview Deployment

```bash
# Deploy to preview (staging)
wrangler deploy --env staging

# Get preview URL
wrangler deploy
```

### Production Deploy

```bash
# Deploy to production
wrangler deploy --env production

# Force deploy
wrangler deploy --force
```

## 7. Logging & Debugging

### View Logs

```bash
# Tail live logs
wrangler tail

# Filter by status
wrangler tail --status error

# Filter by header
wrangler tail --header "X-Custom: value"
```

### Debug Worker

```bash
# Enable inspector
wrangler dev --inspect

# Use Chrome DevTools
# Navigate to chrome://inspect
# Connect to localhost:9229
```

## 8. Project Types

### TypeScript Worker

```typescript
// src/index.ts
interface Env {
  MY_KV: KVNamespace;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    return new Response('Hello!');
  }
};
```

### Service Worker (Module Worker)

```typescript
// src/index.ts
export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    return new Response('Hello!');
  }
};

export { fetch };
```

### Durable Objects

```typescript
// src/do.ts
export class Counter implements DurableObject {
  private count = 0;
  
  async fetch(request: Request): Promise<Response> {
    this.count++;
    return new Response(this.count.toString());
  }
}
```

## Common Commands

| Command | Description |
|---------|-------------|
| `wrangler init` | Create new project |
| `wrangler dev` | Start local dev |
| `wrangler deploy` | Deploy to Cloudflare |
| `wrangler tail` | View logs |
| `wrangler secret` | Manage secrets |
| `wrangler kv` | Manage KV |
| `wrangler d1` | Manage D1 |
| `wrangler pages` | Manage Pages |
| `wrangler whoami` | Check auth |

## สรุป

- Wrangler CLI เป็นเครื่องมือหลักสำหรับ development
- Local dev server รองรับ hot reload
- จัดการ secrets และ environment variables
- ทดสอบ local ด้วย Playwright
- Preview deployment ก่อน production