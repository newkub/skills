# Cloudflare Workers - Configuration Reference

Configuration options สำหรับ Cloudflare Workers

## wrangler.toml Schema

### Basic Configuration

```toml
# Project name
name = "my-worker"

# Entry point
main = "src/index.ts"

# Compatibility date (important!)
compatibility_date = "2024-01-01"

# Node compatibility mode
compatibility_flags = ["nodejs_compat"]
```

### Build Configuration

```toml
# Build command (optional, uses framework detection)
build = "npm run build"

# Upload command (for Workers Sites)
upload = "wrangler pages deploy dist"

# Assets directory (for Workers Sites)
assets = "./public"
```

### Regions

```toml
# Deployment regions
regions = ["iad1", "sfo1", "hnd1"]

# Or for specific environments
[env.staging]
regions = ["iad1"]
```

## KV Namespace

### Definition

```toml
[[kv_namespaces]]
binding = "MY_KV"
id = "xxxxxxxxxxxxxxxxxxxxx"

# Preview namespace
[[kv_namespaces]]
binding = "MY_KV_PREVIEW"
id = "yyyyyyyyyyyyyyyyyyyyyyyy"
```

### Usage in Code

```typescript
interface Env {
  MY_KV: KVNamespace;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const value = await env.MY_KV.get('key');
    return new Response(value);
  }
};
```

## D1 Database

### Definition

```toml
[[d1_databases]]
binding = "DB"
database_name = "my-db"
database_id = "xxxxxxxxxxxxxxxxxxxxx"
```

### Usage in Code

```typescript
interface Env {
  DB: D1Database;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const result = await env.DB.prepare(
      'SELECT * FROM users WHERE id = ?'
    ).bind('123').first();
    
    return new Response(JSON.stringify(result));
  }
};
```

## R2 Bucket

### Definition

```toml
[[r2_buckets]]
binding = "ASSETS"
bucket_name = "my-bucket"
```

### Usage in Code

```typescript
interface Env {
  ASSETS: R2Bucket;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const object = await env.ASSETS.get('image.png');
    
    if (!object) {
      return new Response('Not found', { status: 404 });
    }
    
    return new Response(object.body, {
      headers: { 'Content-Type': object.httpMetadata?.contentType || 'image/png' }
    });
  }
};
```

## Durable Objects

### Definition

```toml
[[durable_objects.bindings]]
name = "COUNTER"
class_name = "Counter"
```

### Usage in Code

```typescript
export class Counter implements DurableObject {
  private count = 0;
  
  async fetch(request: Request): Promise<Response> {
    this.count++;
    return new Response(this.count.toString());
  }
}

interface Env {
  COUNTER: DurableObjectNamespace;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const id = env.COUNTER.idFromName('counter');
    const stub = env.COUNTER.get(id);
    return stub.fetch(request);
  }
};
```

## Environment Variables

### Public Variables

```toml
[vars]
DEBUG = "false"
API_URL = "https://api.example.com"
```

### Secrets

```bash
# Add via CLI
wrangler secret put API_KEY
```

### Environment-Specific

```toml
[env.staging]
name = "my-worker-staging"

[vars]
DEBUG = "true"
API_URL = "https://staging-api.example.com"

[env.production]
name = "my-worker-prod"

[vars]
DEBUG = "false"
API_URL = "https://api.example.com"
```

## Routes

### Basic Routes

```toml
routes = [
  { pattern = "example.com", zone_name = "example.com" },
  { pattern = "api.example.com", zone_name = "example.com" }
]
```

### Environment Routes

```toml
[env.staging]
routes = [
  { pattern = "staging.example.com", zone_name = "example.com" }
]

[env.production]
routes = [
  { pattern = "example.com", zone_name = "example.com" },
  { pattern = "www.example.com", zone_name = "example.com" }
]
```

##尾Zone

### Cloudflare Zone

```toml
zone_name = "example.com"

# Or with full zone ID
zone_id = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
```

## Account ID

```toml
account_id = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
```

## Dev Configuration

```toml
[dev]
# Local development port
port = 8787

# Local binding overrides
kv_namespaces = [
  { binding = "MY_KV", id = "xxxxxxxxxxxxxxxx" }
]

# Upstream URL
upstream = "https://example.com"

# Local HTTPS
https = true

# Inspector settings
inspector_port = 9229
```

## Observability

### Logpush

```toml
logpush = true

# Or with destinations
logpush = true
logpit = "datadog"
```

### Metrics

```toml
# Enable Workers Metrics
workers_dev = true
```

## Rate Limiting

### Via Durable Objects

```typescript
// Implement in worker code
const RATE_LIMIT = 100;
const WINDOW_MS = 60000;
```

### Via Config

```toml
# Not directly supported in wrangler.toml
# Use Workers KV or Durable Objects
```

## Custom Domains

```toml
# Routes automatically handle this
routes = [
  { pattern = "api.example.com", zone_name = "example.com" }
]
```

## Upload Options

### Module Worker

```toml
# For modules worker (default in ES modules mode)
main = "src/index.ts"
```

### Service Worker

```toml
# For service worker format
main = "dist/worker.js"
```

## Wrangler.json (Alternative)

```json
{
  "name": "my-worker",
  "main": "src/index.ts",
  "compatibility_date": "2024-01-01",
  "kv_namespaces": [
    { "binding": "MY_KV", "id": "xxx" }
  ],
  "vars": {
    "DEBUG": "false"
  }
}
```

## Environment Override

```toml
[env.production]
name = "my-worker-prod"
route = { pattern = "example.com", zone_name = "example.com" }

# Production-specific overrides
[env.production.kv_namespaces]
MY_KV.id = "production-kv-id"

[env.production.vars]
DEBUG = "false"
```

## Compatibility Flags

```toml
compatibility_flags = [
  "nodejs_compat",           # Node.js compatibility
  "experimental_fetch",       # Native fetch API
  "streams_forbae64",        # Base64 encoding for streams
  "global_navigation"        # Navigation API
]
```

## สรุป

- wrangler.toml เป็น config file หลัก
- KV, D1, R2, Durable Objects มี binding definitions
- Environment variables แบ่งเป็น vars และ secrets
- Routes และ zones สำหรับ custom domains
- Compatibility flags สำหรับ experimental features