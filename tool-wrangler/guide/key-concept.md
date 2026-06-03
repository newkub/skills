# Key Concept

## Overview

Cloudflare Workers คือ serverless functions ที่รันบน Cloudflare's global network ที่มี data centers กว่า 300 แห่งทั่วโลก ทำให้สามารถ execute code ได้ใกล้กับ end users มากที่สุด

## Core Concepts

### 1. Workers

Workers เป็น JavaScript/TypeScript functions ที่ handle HTTP requests:

```javascript
export default {
  async fetch(request, env, ctx) {
    return new Response('Hello World!');
  },
};
```

### 2. Request/Response Model

```
Request → Worker → Response
           ↓
      Bindings (KV, R2, D1, etc.)
```

### 3. Bindings

Bindings คือวิธีเชื่อมต่อ Worker กับ services อื่นๆ:

| Binding Type | การใช้งาน |
|-------------|----------|
| **KV** | Key-value storage |
| **R2** | Object storage |
| **D1** | SQLite database |
| **Queues** | Message queues |
| **Vectorize** | Vector search |
| **AI** | Machine learning |
| **Hyperdrive** | Database proxy |
| **Secrets** | Environment secrets |
| **Vars** | Environment variables |
| **Durable Objects** | Stateful objects |

### 4. Environments

Wrangler รองรับหลาย environments:

```toml
# wrangler.toml
name = "my-worker"

[env.staging]
name = "my-worker-staging"

[env.production]
name = "my-worker-prod"
```

Deploy ด้วย `-e` flag:

```bash
wrangler deploy -e staging
```

### 5. Compatibility Date

กำหนด Workers runtime version:

```toml
compatibility_date = "2024-06-03"
```

### 6. Module System

Workers มี 2 formats:

| Format | Description |
|--------|-------------|
| **Service Worker** | Single file, `addEventListener` |
| **Module Worker** | ES modules, `export default` |

```javascript
// Module Worker
export default {
  async fetch(request, env, ctx) {
    return new Response('Hello!');
  },
};
```

## Deployment Targets

| Target | Description |
|--------|-------------|
| **workers.dev** | Free *.workers.dev subdomain |
| **Custom Domain** | Your own domain |
| **Route** | Specific URL pattern |