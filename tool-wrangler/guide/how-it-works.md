# How It Works

## Architecture Overview

Wrangler เป็น CLI tool ที่ทำหน้าที่เป็นตัวกลางระหว่าง developer และ Cloudflare Workers platform

```
┌─────────────────────────────────────────────────────────────────┐
│                    Wrangler Architecture                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────┐                                               │
│  │ wrangler.toml │                                               │
│  │   (Config)    │                                               │
│  └──────┬───────┘                                               │
│         │                                                        │
│         ▼                                                        │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │                       Wrangler CLI                         │  │
│  │  ┌────────────┐  ┌────────────┐  ┌────────────┐             │  │
│  │  │    dev     │  │   deploy   │  │  services  │             │  │
│  │  │  (local)   │  │ (remote)   │  │  (manage)  │             │  │
│  │  └────────────┘  └────────────┘  └────────────┘             │  │
│  └────────────────────────────────────────────────────────────┘  │
│                            │                                     │
│         ┌──────────────────┼──────────────────┐                  │
│         ▼                  ▼                  ▼                   │
│  ┌─────────────┐   ┌─────────────┐   ┌─────────────┐            │
│  │    workerd   │   │Cloudflare  │   │  Services   │            │
│  │  (local runtime)│ API    │   │  (KV,R2,D1)  │            │
│  └─────────────┘   └─────────────┘   └─────────────┘            │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

## Development Flow

```
┌──────────────────────────────────────────────────────────────────┐
│                      Development Flow                              │
├──────────────────────────────────────────────────────────────────┤
│                                                                   │
│  1. Create Project                                                │
│  ┌─────────────────┐                                             │
│  │  wrangler init  │ → src/index.ts + wrangler.toml              │
│  └────────┬────────┘                                             │
│           │                                                        │
│           ▼                                                        │
│  2. Write Code                                                    │
│  ┌─────────────────┐                                             │
│  │  src/index.ts   │ → Worker handlers                            │
│  └────────┬────────┘                                             │
│           │                                                        │
│           ▼                                                        │
│  3. Local Development                                             │
│  ┌────────────────────────────────────────┐                       │
│  │           wrangler dev                  │                       │
│  │  ┌──────────┐      ┌──────────┐         │                       │
│  │  │  workerd  │ ←── │  Source   │         │                       │
│  │  │ (runtime) │     │  Files    │         │                       │
│  │  └────┬─────┘      └──────────┘         │                       │
│  │       │                                   │                       │
│  │       ▼                                   │                       │
│  │  http://localhost:8787                    │                       │
│  └────────┬───────────────────────────────────┘                       │
│           │                                                        │
│           ▼                                                        │
│  4. Deploy                                                        │
│  ┌────────────────────────────────────────┐                       │
│  │           wrangler deploy              │                       │
│  │                                        │                       │
│  │  Source → Bundler → Cloudflare API → Workers Runtime           │
│  └────────────────────────────────────────┘                       │
│                                                                   │
└──────────────────────────────────────────────────────────────────┘
```

## Wrangler Commands Categories

| Category | Commands | Description |
|----------|----------|-------------|
| **Workers** | `init`, `dev`, `deploy`, `delete` | Worker lifecycle |
| **Data** | `kv:*`, `r2:*`, `d1:*`, `queues:*` | Data services |
| **AI** | `ai:*`, `vectorize:*` | AI services |
| **Management** | `secret:*`, `login`, `whoami` | Account management |
| **Utilities** | `pages:*`, `tail`, `tail_worker` | Observability |

## Configuration Resolution

Wrangler ใช้ configuration ตามลำดับดังนี้:

```
┌─────────────────────────────────────────┐
│        Configuration Priority            │
├─────────────────────────────────────────┤
│  1. CLI flags (highest)                  │
│  2. wrangler.toml / wrangler.jsonc       │
│  3. Environment variables                │
│  4. Defaults (lowest)                    │
└─────────────────────────────────────────┘
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `CLOUDFLARE_ACCOUNT_ID` | Account ID |
| `CLOUDFLARE_API_TOKEN` | API token |
| `CLOUDFLARE_API_KEY` | Global API key |
| `CLOUDFLARE_EMAIL` | Account email |
| `CLOUDFLARE_KV_CMD` | Enable KV commands |