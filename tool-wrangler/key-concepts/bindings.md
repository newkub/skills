# Bindings

Bindings คือวิธีเชื่อมต่อ Workers กับ Cloudflare services

## ประเภท Bindings

### KV Namespace

Key-value storage สำหรับ caching และ data ที่เขียนน้อย

```typescript
interface Env {
  CACHE: KVNamespace;
}

// ใช้งาน
await env.CACHE.get("key");
await env.CACHE.put("key", "value");
```

### R2 Bucket

Object storage ที่ compatible กับ S3 API

```typescript
interface Env {
  BUCKET: R2Bucket;
}

// ใช้งาน
await env.BUCKET.put("file.txt", body);
const object = await env.BUCKET.get("file.txt");
```

### D1 Database

SQLite database สำหรับ relational data

```typescript
interface Env {
  DB: D1Database;
}

// ใช้งาน
const result = await env.DB.prepare("SELECT * FROM users").all();
```

### Queues

Message queue สำหรับ async processing

```typescript
interface Env {
  MY_QUEUE: Queue;
}

// ใช้งาน
await env.MY_QUEUE.send({ type: "notification", data: {...} });
```

### Durable Objects

Stateful coordination สำหรับ real-time apps

```typescript
interface Env {
  COUNTER: DurableObjectNamespace;
}

// ใช้งาน
const id = env.COUNTER.idFromName("my-counter");
const stub = env.COUNTER.get(id);
const count = await stub.getCount();
```

### Vectorize

Vector database สำหรับ AI/ML applications

```typescript
interface Env {
  VECTORS: VectorizeIndex;
}

// ใช้งาน
const results = await env.VECTORS.query(vector, { topK: 10 });
```

## Configuration

กำหนด bindings ใน `wrangler.jsonc`

```jsonc
{
  "kv_namespaces": [
    { "binding": "CACHE", "id": "xxx" }
  ],
  "r2_buckets": [
    { "binding": "BUCKET", "bucket_name": "my-bucket" }
  ],
  "d1_databases": [
    { "binding": "DB", "database_id": "xxx" }
  ]
}
```
