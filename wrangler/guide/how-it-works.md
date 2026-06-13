# How It Works

## Development Flow

```
Local Development → Build → Deploy → Edge Network
```

### 1. Local Development

```bash
wrangler dev
```

- Starts local development server
- Simulates edge environment
- Hot reload อัตโนมัติ
- Supports remote resources ด้วย `--remote`

### 2. Build Process

Wrangler automatically:
- Bundles code ด้วย esbuild
- Minifies output (ถ้าเปิดใช้)
- Optimizes สำหรับ edge runtime
- Generates TypeScript types

### 3. Deployment

```bash
wrangler deploy
```

- Uploads code ไปยัง Cloudflare
- Creates/updates Worker
- Configures bindings
- Sets up routes และ domains

## Request Lifecycle

```
User Request → Edge Location → Worker Execution → Response
```

1. Request ถูก route ไปยัง nearest edge location
2. Worker executes ใน isolated environment
3. Bindings เข้าถึง services (KV, R2, D1, etc.)
4. Response ถูก return กลับไปยัง user

## Architecture

```
┌─────────────┐
│   User      │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│ Edge Network│
│  (300+ LOC) │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│   Worker    │
│  + Bindings │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  Services   │
│ KV/R2/D1/   │
│ Queues/DO   │
└─────────────┘
```
