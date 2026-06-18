# Configuration

## nitro.config.ts

```typescript
import { defineConfig } from "nitro/config";

export default defineConfig({
  preset: "node_server",
  serverDir: "./server",
  runtimeConfig: {
    apiSecret: "default-secret",
  },
});
```

## General Options

| Option | Default | Description |
|--------|---------|-------------|
| `preset` | `node_server` | Deploy target preset |
| `debug` | `false` | เปิด debug mode |
| `logLevel` | `3` | ระดับความละเอียดของ log |
| `static` | `false` | เปิด static site generation |
| `compatibilityDate` | `latest` | วันที่ทดสอบ compatibility |
| `serverDir` | `./server` | โฟลเดอร์ server code |

## Runtime Config

```typescript
export default defineConfig({
  runtimeConfig: {
    dbUrl: "postgres://localhost", // override: NITRO_DB_URL
    apiSecret: "secret", // override: NITRO_API_SECRET
  },
});
```

ใช้งานใน handler:

```typescript
import { useRuntimeConfig } from "nitro/runtime-config";

export default defineHandler(() => {
  const config = useRuntimeConfig();
  return { dbUrl: config.dbUrl };
});
```

## Route Rules

```typescript
export default defineConfig({
  routeRules: {
    "/api/**": { cors: true },
    "/cached/**": { cache: { maxAge: 3600 } },
    "/admin/**": { redirect: "/login" },
  },
});
```

| Option | Description |
|--------|-------------|
| `cors` | เปิด CORS |
| `cache` | ตั้งค่า caching |
| `headers` | กำหนด response headers |
| `redirect` | Redirect rules |

## Storage Config (unstorage)

```typescript
export default defineConfig({
  storage: {
    cache: { driver: "fs", base: "./.cache" },
    db: { driver: "redis", url: "redis://localhost" },
  },
});
```

## Database Config (db0)

```typescript
export default defineConfig({
  experimental: {
    database: true
  },
  database: {
    default: {
      connector: "sqlite",
      options: { name: "./db.sqlite" },
    },
  },
});
```

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `NITRO_PORT` | `3000` | Server port |
| `NITRO_HOST` | `localhost` | Server host |
| `NITRO_PRESET` | - | Override preset |
| `NODE_ENV` | `development` | Environment |

## Presets

| Preset | Platform |
|--------|----------|
| `node_server` | Node.js standalone |
| `cloudflare_pages` | Cloudflare Pages |
| `vercel` | Vercel Edge |
| `netlify` | Netlify Functions |
| `bun` | Bun runtime |
| `deno` | Deno runtime |
| `static` | Pre-rendered HTML |

## Next Steps

- [Features](features.md)
- [Best Practices](best-practices.md)
- [Architecture](architecture.md)
