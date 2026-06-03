# Cloudflare Workers - Features

คุณสมบัติและ capabilities ของ Cloudflare Workers

## Core Features

### 1. Edge Computing

```typescript
export default {
  async fetch(request: Request): Promise<Response> {
    // รัน logic ใกล้ user มากที่สุด
    const edgeLocation = request.cf?.colo || 'unknown';
    
    return new Response(`Served from ${edgeLocation}`, {
      headers: { 'Content-Type': 'text/plain' }
    });
  }
};
```

### 2. Global Caching

```typescript
export default {
  async fetch(request: Request): Promise<Response> {
    const cache = caches.default;
    
    // Cache-first strategy
    const cached = await cache.match(request);
    if (cached) {
      return cached;
    }
    
    const response = await fetch(request);
    await cache.put(request, response.clone());
    
    return response;
  }
};
```

### 3. Streaming Responses

```typescript
export default {
  async fetch(request: Request): Promise<Response> {
    const { readable, writable } = new TransformStream();
    
    // Stream data to client
    const writer = writable.getWriter();
    
    // Write data as it arrives
    writer.write('Hello ');
    setTimeout(() => writer.write('World!'), 100);
    setTimeout(() => writer.close(), 200);
    
    return new Response(readable);
  }
};
```

### 4. WebSocket Support

```typescript
export default {
  async fetch(request: Request): Promise<Response> {
    if (request.headers.get('Upgrade') === 'websocket') {
      const pair = new WebSocketPair();
      
      // Handle WebSocket
      pair[1].accept();
      pair[1].addEventListener('message', (event) => {
        pair[1].send(`Echo: ${event.data}`);
      });
      
      return new Response(null, {
        status: 101,
        webSocket: pair[1]
      });
    }
    
    return new Response('Not a WebSocket request', { status: 400 });
  }
};
```

### 5. HTML Rewriting

```typescript
export default {
  async fetch(request: Request): Promise<Response> {
    const response = await fetch(request);
    
    // Rewrite HTML
    const modified = new HTMLRewriter()
      .on('h1', {
        element(element) {
          element.setInnerContent('Modified Title');
        }
      })
      .on('a[href]', {
        element(element) {
          const href = element.getAttribute('href');
          element.setAttribute('href', `https://proxy.example.com${href}`);
        }
      })
      .transform(response);
    
    return modified;
  }
};
```

## Data Storage Features

### KV (Key-Value Storage)

```typescript
// Writing
await env.MY_KV.put('key', 'value', {
  expirationTtl: 86400 // 1 day
});

// Reading
const value = await env.MY_KV.get('key', 'text');

// Listing
const list = await env.MY_KV.list({
  prefix: 'user:',
  limit: 100
});
```

### D1 (SQLite Database)

```typescript
// Query
const result = await env.DB.prepare(
  'SELECT * FROM users WHERE id = ?'
).bind('123').first();

// Insert
await env.DB.prepare(
  'INSERT INTO users (id, name) VALUES (?, ?)'
).bind('123', 'John').run();

// Batch
await env.DB.batch([
  env.DB.prepare('DELETE FROM users WHERE id = ?').bind('123'),
  env.DB.prepare('INSERT INTO users (id, name) VALUES (?, ?)').bind('456', 'Jane')
]);
```

### R2 (Object Storage)

```typescript
// Upload
await env.ASSETS.put('file.txt', 'Hello World', {
  httpMetadata: { contentType: 'text/plain' }
});

// Download
const object = await env.ASSETS.get('file.txt');
const body = await object.text();

// Delete
await env.ASSETS.delete('file.txt');

// List
const objects = await env.ASSETS.list({
  prefix: 'images/',
  limit: 100
});
```

### Durable Objects

```typescript
// Worker with Durable Object
export class Counter implements DurableObject {
  private count = 0;
  
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);
    
    if (url.pathname === '/increment') {
      this.count++;
      return new Response(this.count.toString());
    }
    
    return new Response(this.count.toString());
  }
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const id = env.COUNTER.idFromName('counter');
    const stub = env.COUNTER.get(id);
    return stub.fetch(request);
  }
};
```

## AI Features

### Workers AI

```typescript
export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    // Run AI model at edge
    const response = await env.AI.run('@cf/meta/llama-2-7b-chat-int8', {
      messages: [
        { role: 'user', content: 'Hello!' }
      ]
    });
    
    return new Response(response.response);
  }
};
```

## Performance Features

### Cron Triggers

```toml
# wrangler.toml
[triggers]
crons = ["*/15 * * * *"]  # Every 15 minutes
```

```typescript
export default {
  async scheduled(controller: ScheduledController, env: Env): Promise<void> {
    // Run cleanup task
    console.log('Cron triggered!');
  }
};
```

### Queue

```typescript
export default {
  async queue(batch: MessageBatch, env: Env): Promise<void> {
    for (const message of batch.messages) {
      console.log('Processing:', message.body);
    }
  }
};
```

### Wait Until

```typescript
export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    // Start background task
    ctx.waitUntil(doBackgroundTask(env));
    
    return new Response('Started');
  }
};

async function doBackgroundTask(env: Env) {
  // This runs after response is sent
  await env.KV.put('last-run', Date.now().toString());
}
```

## Security Features

### CORs Headers

```typescript
export default {
  async fetch(request: Request): Promise<Response> {
    return new Response('data', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      }
    });
  }
};
```

### Rate Limiting via Worker

```typescript
const rateLimitMap = new Map<string, number>();

export default {
  async fetch(request: Request): Promise<Response> {
    const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
    const now = Date.now();
    
    // Check rate limit (100 requests per minute)
    const key = `${ip}:${Math.floor(now / 60000)}`;
    const count = rateLimitMap.get(key) || 0;
    
    if (count >= 100) {
      return new Response('Rate limit exceeded', { status: 429 });
    }
    
    rateLimitMap.set(key, count + 1);
    
    return new Response('OK');
  }
};
```

## Features Comparison

| Feature | Workers | Lambda | Vercel |
|---------|---------|--------|--------|
| Cold Start | <5ms | 1-3s | <50ms |
| Max Memory | 128MB | 10GB | 1.5GB |
| Max Duration | 30s (CPU) | 15min | 10s |
| Global Edge | ✅ 300+ | ❌ | ✅ |
| KV Storage | ✅ | ❌ | ❌ |
| D1 Database | ✅ | ❌ | ❌ |
| Durable Objects | ✅ | ❌ | ❌ |
| Workers AI | ✅ | ❌ | ❌ |
| WebSocket | ✅ | ❌ | ✅ |
| Queue | ✅ | ❌ | ❌ |

## สรุป

- Workers มี features ครบถ้วนสำหรับ edge computing
- รองรับ data storage หลายรูปแบบ (KV, D1, R2)
- Durable Objects ให้ stateful capabilities
- AI inference ที่ edge
- Security features ในตัว