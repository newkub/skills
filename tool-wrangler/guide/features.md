# Features

## Core Features

| Feature | คำอธิบาย |
|---------|----------|
| **Local Development** | รัน Worker บน local ด้วย `wrangler dev` |
| **Hot Reload** | Auto-reload เมื่อมีการเปลี่ยนแปลง code |
| **Deployment** | Deploy Worker ไปยัง Cloudflare ด้วยคำสั่งเดียว |
| **Environment Support** | รองรับหลาย environments (staging, production) |
| **TypeScript Support** | Built-in TypeScript support |

## Service Integrations

### Data Services

| Service | Wrangler Command | Description |
|---------|------------------|-------------|
| **KV** | `wrangler kv:*` | Key-value storage |
| **R2** | `wrangler r2:*` | Object storage |
| **D1** | `wrangler d1:*` | SQLite database |
| **Queues** | `wrangler queues:*` | Message queues |
| **Hyperdrive** | `wrangler hyperdrive:*` | Database proxy |

### AI Services

| Service | Wrangler Command | Description |
|---------|------------------|-------------|
| **Workers AI** | `wrangler ai:*` | ML inference |
| **Vectorize** | `wrangler vectorize:*` | Vector search |

### Developer Services

| Service | Wrangler Command | Description |
|---------|------------------|-------------|
| **Secrets** | `wrangler secret:*` | Environment secrets |
| **Pages** | `wrangler pages:*` | Static site deployment |
| **Tunnels** | `wrangler tunnel:*` | Local development tunnels |

## Development Features

| Feature | คำอธิบาย |
|---------|----------|
| **Remote Development** | Test against remote resources |
| **Tunnel Mode** | Share local dev server publicly |
| **Inspector Support** | Chrome DevTools debugging |
| **Scheduled Events** | Test cron triggers locally |
| **Multiple Workers** | Run multiple Workers simultaneously |

## Deployment Features

| Feature | คำอธิบาย |
|---------|----------|
| **Zero-downtime Deploy** | Atomic deployments |
| **Rollbacks** | Revert ไป version ก่อนหน้า |
| **Versions** | Version history และ tracking |
| **Secrets Upload** | Upload secrets พร้อม code |
| **Assets** | Serve static assets |

## Configuration Features

| Feature | คำอธิบาย |
|---------|----------|
| **wrangler.toml** | TOML configuration |
| **wrangler.jsonc** | JSON configuration (recommended) |
| **Environments** | Per-environment settings |
| **Type Generation** | Auto-generate type definitions |
| **Schema Validation** | JSON schema validation |

## Observability Features

| Feature | คำอธิบาย |
|---------|----------|
| **Tail Workers** | Log aggregation |
| **Logpush** | Push logs to external services |
| **Real-time Logs** | Live tail of Worker logs |
| **Metrics** | Request/response metrics |