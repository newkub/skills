# Cloudflare Workers - Key Concepts

แนวคิดหลักและคำศัพท์สำคัญสำหรับ Cloudflare Workers

## 1. Workers Architecture

### What is a Worker?

Worker คือ JavaScript/TypeScript code ที่ทำงานบน Cloudflare's edge network:

```text
User Request
     ↓
Cloudflare Edge (300+ locations)
     ↓
Worker Execution (V8 Isolates)
     ↓
Response
```

### V8 Isolates vs Containers

Cloudflare ใช้ V8 isolates แทน containers:

| Feature | Containers | V8 Isolates |
|---------|------------|-------------|
| Cold Start | 100-500ms | <5ms |
| Memory | 128MB+ | ~5MB |
| Isolation | Full | Process-level |
| Scale | Manual | Auto |

## 2. Request Lifecycle

### FetchEvent Handler

```typescript
export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    
    // Handle request
    if (url.pathname === '/api') {
      return new Response('API Response');
    }
    
    return fetch(request);
  }
};
```

### Middleware Pattern

```typescript
export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    // 1. Parse and modify request
    const modifiedRequest = new Request(request, {
      headers: {
        ...Object.fromEntries(request.headers),
        'X-CF-Worker': 'true'
      }
    });
    
    // 2. Call upstream
    const response = await fetch(modifiedRequest);
    
    // 3. Modify response
    const modifiedResponse = new Response(response.body, response);
    modifiedResponse.headers.set('X-Response-Time', Date.now().toString());
    
    return modifiedResponse;
  }
};
```

## 3. Environment & Bindings

### Types of Bindings

| Type | Purpose | Example |
|------|---------|---------|
| `KV` | Key-value storage | `env.MY_KV` |
| `D1` | SQLite database | `env.DB` |
| `R2` | Object storage | `env.ASSETS` |
| `DO` | Durable Objects | `env.DO` |
| `Secret` | Environment variables | `env.API_KEY` |
| `Vars` | Public variables | `env.CONFIG` |

### Accessing Bindings

```typescript
interface Env {
  MY_KV: KVNamespace;
  DB: D1Database;
  ASSETS: R2Bucket;
  API_KEY: string;
  CONFIG: string;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    // KV
    const value = await env.MY_KV.get('key');
    
    // D1
    const result = await env.DB.prepare('SELECT * FROM users').all();
    
    // Secret
    const apiKey = env.API_KEY;
  }
};
```

## 4. Routing

### wrangler.toml Routes

```toml
name = "my-worker"
main = "src/index.ts"
compatibility_date = "2024-01-01"

routes = [
  { pattern = "example.com", zone_name = "example.com" },
  { pattern = "api.example.com", zone_name = "example.com" }
]
```

### Multiple Routes Pattern

```typescript
const router = {
  '/api/*': handleAPI,
  '/admin/*': handleAdmin,
  '/static/*': handleStatic,
  '/': handleFallback
};

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    
    for (const [pattern, handler] of Object.entries(router)) {
      if (matchRoute(pattern, url.pathname)) {
        return handler(request, env);
      }
    }
    
    return new Response('Not Found', { status: 404 });
  }
};
```

## 5. Caching Strategy

### Cache API

```typescript
export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const cache = caches.default;
    
    // Check cache
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Fetch from origin
    const response = await fetch(request);
    
    // Store in cache (1 hour)
    const headers = new Headers(response.headers);
    headers.set('Cache-Control', 'public, max-age=3600');
    
    const cacheResponse = new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers
    });
    
    await cache.put(request, cacheResponse.clone());
    
    return response;
  }
};
```

## 6. Modules Mode

### ES Module Workers

```typescript
// src/index.ts
export interface Env {
  MY_KV: KVNamespace;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    return new Response('Hello from Modules!');
  }
};
```

### Importing Modules

```typescript
// src/utils.ts
export function parseQuery(url: URL): Record<string, string> {
  const params = new URLSearchParams(url.search);
  return Object.fromEntries(params);
}

// src/index.ts
import { parseQuery } from './utils';

export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);
    const query = parseQuery(url);
    return new Response(JSON.stringify(query));
  }
};
```

## สรุป

- Workers ใช้ V8 Isolates สำหรับ cold start ที่เร็วมาก
- Bindings ให้ access ไปยัง services ต่างๆ
- Cache API ช่วยให้ caching ง่าย
- Modules mode รองรับ ES modules และ imports