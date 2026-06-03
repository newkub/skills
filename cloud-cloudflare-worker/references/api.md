# Cloudflare Workers - API Reference

API และ endpoints สำหรับ Cloudflare Workers

## Worker Entry Point

### Basic Handler

```typescript
export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext
  ): Promise<Response> {
    return new Response('Hello World!');
  }
};
```

### Module Worker (Recommended)

```typescript
export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    return new Response('Hello!');
  }
};

export { fetch };
```

## Request Interface

### Request Properties

```typescript
const request: Request = new Request('https://example.com');

// Properties
request.method        // GET, POST, etc.
request.url           // Full URL
request.headers       // Headers object
request.body          // ReadableStream
request.bodyUsed      // Boolean
request.cache         // Cache mode
request.credentials   // Credentials mode
request.mode          // Request mode
request.redirect      // Redirect mode
request.integrity     // Subresource integrity
request.destination   // Destination type
```

### Request Methods

```typescript
request.text()          // Promise<string>
request.json()          // Promise<any>
request.formData()      // Promise<FormData>
request.blob()          // Promise<Blob>
request.arrayBuffer()   // Promise<ArrayBuffer>
request.body?.getReader() // ReadableStream reader
```

## Response Interface

### Response Creation

```typescript
// Simple response
new Response('Hello');

// With status
new Response('Not Found', { status: 404 });

// With headers
new Response('OK', {
  headers: {
    'Content-Type': 'text/plain',
    'X-Custom': 'value'
  }
});

// With JSON
new Response(JSON.stringify({ data: 'value' }), {
  headers: { 'Content-Type': 'application/json' }
});
```

### Response Properties

```typescript
const response: Response = new Response('body');

// Properties
response.ok            // Boolean (status 200-299)
response.status        // Status code
response.statusText   // Status text
response.headers      // Headers
response.body         // ReadableStream
response.bodyUsed     // Boolean
response.url          // Final URL (after redirects)
```

## Environment Interface

### Type Definition

```typescript
interface Env {
  // KV Namespace
  MY_KV: KVNamespace;
  
  // D1 Database
  DB: D1Database;
  
  // R2 Bucket
  ASSETS: R2Bucket;
  
  // Durable Objects
  DO: DurableObjectNamespace;
  
  // Secrets
  API_KEY: string;
  
  // Public variables
  CONFIG: string;
}
```

### Accessing Bindings

```typescript
export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    // KV
    const value = await env.MY_KV.get('key');
    await env.MY_KV.put('key', 'value');
    await env.MY_KV.delete('key');
    
    // D1
    const result = await env.DB.prepare('SELECT * FROM users').all();
    
    // R2
    const object = await env.ASSETS.get('file.txt');
    
    // Secret
    const apiKey = env.API_KEY;
    
    return new Response('OK');
  }
};
```

## Cache API

### Default Cache

```typescript
export default {
  async fetch(request: Request): Promise<Response> {
    const cache = caches.default;
    
    // Match
    const cached = await cache.match(request);
    if (cached) {
      return cached;
    }
    
    // Fetch
    const response = await fetch(request);
    
    // Put
    await cache.put(request, response.clone());
    
    return response;
  }
};
```

### Cache Options

```typescript
// Cache with custom key
await cache.put(customRequest, response);

// Cache with options
const response = new Response('body', {
  headers: {
    'Cache-Control': 'public, max-age=3600'
  }
});
```

## Web Crypto API

### Hashing

```typescript
export default {
  async fetch(request: Request): Promise<Response> {
    const data = 'Hello World';
    
    // SHA-256
    const hashBuffer = await crypto.subtle.digest(
      'SHA-256',
      new TextEncoder().encode(data)
    );
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    
    return new Response(hashHex);
  }
};
```

### AES Encryption

```typescript
// Generate key
const key = await crypto.subtle.generateKey(
  { name: 'AES-GCM', length: 256 },
  true,
  ['encrypt', 'decrypt']
);

// Encrypt
const iv = crypto.getRandomValues(new Uint8Array(12));
const encrypted = await crypto.subtle.encrypt(
  { name: 'AES-GCM', iv },
  key,
  data
);
```

## Streams API

### Transform Stream

```typescript
export default {
  async fetch(request: Request): Promise<Response> {
    const { readable, writable } = new TransformStream();
    
    // Process in background
    const writer = writable.getWriter();
    const encoder = new TextEncoder();
    
    writer.write(encoder.encode('Hello '));
    writer.write(encoder.encode('World!'));
    writer.close();
    
    return new Response(readable);
  }
};
```

### Readable Stream

```typescript
export default {
  async fetch(request: Request): Promise<Response> {
    const body = request.body;
    const reader = body?.getReader();
    
    if (!reader) {
      return new Response('No body', { status: 400 });
    }
    
    let result = '';
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      result += new TextDecoder().decode(value);
    }
    
    return new Response(result);
  }
};
```

## HTML Rewriter API

### Element Handler

```typescript
import { HTMLRewriter } from 'miniflare';

export default {
  async fetch(request: Request): Promise<Response> {
    const response = await fetch(request);
    
    const transformed = new HTMLRewriter()
      .on('h1', {
        element(element) {
          element.setInnerContent('Rewritten Title');
        }
      })
      .on('a[href]', {
        element(element) {
          const href = element.getAttribute('href');
          if (href?.startsWith('http')) {
            element.setAttribute('target', '_blank');
          }
        }
      })
      .on('p', {
        text(text) {
          if (text.text.trim() === '') {
            text.remove();
          }
        }
      })
      .transform(response);
    
    return transformed;
  }
};
```

## WebSocket API

### Server WebSocket

```typescript
export default {
  async fetch(request: Request): Promise<Response> {
    if (request.headers.get('Upgrade') === 'websocket') {
      const pair = new WebSocketPair();
      const [client, server] = Object.values(pair) as [WebSocket, WebSocket];
      
      server.accept();
      
      server.addEventListener('message', (event) => {
        server.send(`Echo: ${event.data}`);
      });
      
      return new Response(null, {
        status: 101,
        webSocket: client
      });
    }
    
    return new Response('Not a WebSocket', { status: 400 });
  }
};
```

## Scheduled Handler

### Cron Trigger

```typescript
export default {
  async scheduled(
    controller: ScheduledController,
    env: Env,
    ctx: ExecutionContext
  ): Promise<void> {
    // This runs on cron schedule
    console.log('Cron triggered!');
    
    // Schedule async work
    ctx.waitUntil(doBackgroundTask(env));
  }
};
```

## Queue API

### Producer

```typescript
export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    await env.QUEUE.send({
      type: 'job',
      data: { key: 'value' }
    });
    
    return new Response('Queued!');
  }
};
```

### Consumer

```typescript
export default {
  async queue(
    batch: MessageBatch,
    env: Env,
    ctx: ExecutionContext
  ): Promise<void> {
    for (const message of batch.messages) {
      console.log('Processing:', message.body);
      message.ack();
    }
  }
};
```

## TypeScript Types

### Worker Types

```typescript
// Environment type
interface Env {
  MY_KV: KVNamespace;
  MY_DO: DurableObjectNamespace;
}

// Fetch handler
export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext
  ): Promise<Response> {
    return new Response('Hello');
  }
};

// Scheduled handler
export {
  scheduled as default
};
```

### Binding Types

```typescript
// KV
type KVNamespace = {
  get(key: string, type?: string): Promise<any>;
  put(key: string, value: string, options?: KVOptions): Promise<void>;
  delete(key: string): Promise<void>;
  list(options?: KVListOptions): Promise<KVListResult>;
};

// D1
type D1Database = {
  prepare(query: string): D1PreparedStatement;
  dump(): Promise<ArrayBuffer>;
};

// R2
type R2Bucket = {
  get(key: string, options?: R2GetOptions): Promise<R2Object | null>;
  put(key: string, value, options?: R2PutOptions): Promise<R2Object>;
  delete(key: string): Promise<void>;
  list(options?: R2ListOptions): Promise<R2Objects>;
};
```

## สรุป

- Workers ใช้ `fetch` handler เป็น entry point
- `Request` และ `Response` APIs เหมือน standard web APIs
- Bindings ให้ access ไปยัง services ต่างๆ
- Cache API, Streams API, WebSocket API มีให้ใช้งาน