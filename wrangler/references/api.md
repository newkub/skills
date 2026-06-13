# API Reference

## Environment Interface

TypeScript interface for Worker bindings:

```typescript
interface Env {
  // KV
  MY_KV: KVNamespace;

  // R2
  MY_BUCKET: R2Bucket;

  // D1
  DB: D1Database;

  // Queues
  MY_QUEUE: Queue;

  // Durable Objects
  MY_DO: DurableObjectNamespace;

  // Vectorize
  VECTOR_INDEX: VectorizeIndex;

  // Secrets
  API_KEY: string;

  // Vars
  ENV: string;
}
```

## Runtime APIs

### Request/Response

```typescript
export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext
  ): Promise<Response> {
    // Handle request
    return new Response("Hello!");
  },
};
```

### Scheduled Handler

```typescript
export default {
  async scheduled(
    controller: ScheduledController,
    env: Env,
    ctx: ExecutionContext
  ): Promise<void> {
    // Handle cron trigger
  },
};
```

## Bindings API

### KV

```typescript
// Read
const value = await env.MY_KV.get("key");

// Write
await env.MY_KV.put("key", "value");

// Delete
await env.MY_KV.delete("key");

// List
const list = await env.MY_KV.list({ prefix: "user:" });
```

### R2

```typescript
// Put object
await env.MY_BUCKET.put("file.txt", body);

// Get object
const object = await env.MY_BUCKET.get("file.txt");

// Delete
await env.MY_BUCKET.delete("file.txt");

// List
const objects = await env.MY_BUCKET.list();
```

### D1

```typescript
// Query
const result = await env.DB
  .prepare("SELECT * FROM users WHERE id = ?")
  .bind(userId)
  .first();

// Batch
await env.DB
  .prepare("INSERT INTO users (name) VALUES (?)")
  .bind("John")
  .run();
```

### Queues

```typescript
// Send message
await env.MY_QUEUE.send({
  type: "notification",
  data: { userId: 123 },
});

// Consumer (separate Worker)
export default {
  async queue(
    batch: MessageBatch,
    env: Env
  ): Promise<void> {
    for (const msg of batch.messages) {
      console.log(msg.body);
    }
  },
};
```

## Configuration Options

### Compatibility Flags

```jsonc
{
  "compatibility_flags": [
    "nodejs_compat",
    "export_top_level-await"
  ]
}
```

### Limits

```jsonc
{
  "limits": {
    "cpu_ms": 10,
    "memory_mb": 128
  }
}
```

### Placement

```jsonc
{
  "placement": {
    "mode": "smart"
  }
}
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `CLOUDFLARE_ACCOUNT_ID` | Account ID |
| `CLOUDFLARE_API_TOKEN` | API token |
| `CLOUDFLARE_API_KEY` | Global API key |
| `CLOUDFLARE_EMAIL` | Account email |