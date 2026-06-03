# Quick Start

## 1. Install Wrangler

```bash
npm install -D wrangler
```

## 2. Login to Cloudflare

```bash
wrangler login
```

## 3. Create Worker Project

```bash
wrangler init my-worker --yes
cd my-worker
```

## 4. Edit Worker Code

แก้ไข `src/index.ts`:

```typescript
export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/api/hello") {
      return Response.json({ message: "Hello from Workers!" });
    }

    return new Response("Hello World!");
  },
};
```

## 5. Start Development

```bash
wrangler dev
```

เปิด browser ไปที่ `http://localhost:8787`

## 6. Deploy

```bash
wrangler deploy
```

## Common Commands

| Command | Description |
|---------|-------------|
| `wrangler init <name>` | สร้าง project ใหม่ |
| `wrangler dev` | เริ่ม local development |
| `wrangler deploy` | Deploy ไป production |
| `wrangler tail` | ดู logs real-time |
| `wrangler secret put <name>` | สร้าง secret |

## Example Project Structure

```
my-worker/
├── src/
│   └── index.ts       # Worker code
├── wrangler.jsonc     # Configuration
├── package.json
└── tsconfig.json
```

## Environment Variables

สร้าง `.dev.vars` สำหรับ local development:

```bash
# .dev.vars
DATABASE_URL=postgres://...
API_KEY=xxx
```

## Multiple Environments

```bash
# Deploy to staging
wrangler deploy -e staging

# Deploy to production
wrangler deploy -e production
```

## Next Steps

- ดู [Configuration Guide](configuration.md) สำหรับรายละเอียดเพิ่มเติม
- ดู [Best Practices](best-practices.md) สำหรับแนวทางที่แนะนำ
- ดู [References](../references/) สำหรับ CLI commands