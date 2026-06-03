# Cloudflare Workers - Installation

การติดตั้งและเริ่มต้นใช้งาน Cloudflare Workers

## Prerequisites

| Requirement | Version |
|-------------|---------|
| Node.js | >= 18.x |
| npm | >= 9.x |
| Wrangler | >= 3.x |

## Installation Steps

### 1. Install Wrangler CLI

```bash
npm install -g wrangler
```

### 2. Verify Installation

```bash
wrangler --version
# wrangler 3.x.x
```

### 3. Login to Cloudflare

```bash
wrangler login
# Opens browser for authentication
```

### 4. Create New Project

```bash
# Interactive mode
wrangler init my-worker

# Or with template
wrangler generate my-worker https://github.com/cloudflare/worker-template
```

## Project Structure

```
my-worker/
├── src/
│   └── index.ts          # Worker code
├── wrangler.toml         # Configuration
├── package.json
├── tsconfig.json
└── node_modules/
```

## Basic Configuration

### wrangler.toml

```toml
name = "my-worker"
main = "src/index.ts"
compatibility_date = "2024-01-01"

# Optional: Add KV namespace
[[kv_namespaces]]
binding = "MY_KV"
id = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"

# Optional: Add environment
[env.production]
name = "my-worker-prod"
```

## Development

### Start Dev Server

```bash
wrangler dev
# Runs on http://localhost:8787
```

### Hot Reload

Dev server supports hot reload automatically:

```bash
wrangler dev --port 3000
```

### Local KV

```bash
wrangler dev --local
# Or use specific KV namespace
wrangler dev --kv_namespaces NAMESPACE
```

## Deployment

### Deploy to Production

```bash
wrangler deploy
```

### Deploy to Specific Environment

```bash
wrangler deploy --env staging
```

## Common Commands

| Command | Description |
|---------|-------------|
| `wrangler init` | Create new project |
| `wrangler dev` | Start local dev server |
| `wrangler deploy` | Deploy to Cloudflare |
| `wrangler tail` | View real-time logs |
| `wrangler secret put` | Add secret variable |
| `wrangler kv:namespace create` | Create KV namespace |
| `wrangler d1 create` | Create D1 database |
| `wrangler r2 bucket create` | Create R2 bucket |

## Example Project

### Create Project

```bash
mkdir my-worker && cd my-worker
wrangler init
```

### Edit src/index.ts

```typescript
export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    
    if (url.pathname === '/hello') {
      return new Response('Hello from Workers!');
    }
    
    return new Response('Not Found', { status: 404 });
  }
};
```

### Run Locally

```bash
wrangler dev
# Test: curl http://localhost:8787/hello
```

### Deploy

```bash
wrangler deploy
# Test: curl https://my-worker.<username>.workers.dev/hello
```

## TypeScript Setup

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ES2022",
    "moduleResolution": "bundler",
    "types": ["@cloudflare/workers-types"]
  }
}
```

### Install Types

```bash
npm install -D @cloudflare/workers-types @types/node
```

## Environments

### Multiple Environments

```toml
# wrangler.toml
name = "my-worker"
main = "src/index.ts"

[env.staging]
name = "my-worker-staging"
routes = [
  { pattern = "staging.example.com", zone_name = "example.com" }
]

[env.production]
name = "my-worker-prod"
routes = [
  { pattern = "example.com", zone_name = "example.com" }
]
```

### Deploy to Environment

```bash
wrangler deploy --env staging
wrangler deploy --env production
```

## Secrets Management

### Add Secret

```bash
wrangler secret put API_KEY
# Enter value when prompted
```

### List Secrets

```bash
wrangler secret list
```

## Troubleshooting

### Common Issues

```bash
# Clear cache and restart
wrangler dev --clear

# Check wrangler version
wrangler --version

# Update wrangler
npm update -g wrangler
```

## Next Steps

- [Configuration](./configuration.md) - การตั้งค่า Workers
- [Best Practices](./best-practices.md) - แนวทางที่ดีที่สุด
- [Integration](./integration.md) - การเชื่อมต่อกับ services อื่น