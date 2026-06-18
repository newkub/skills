# Configuration Reference

## nitro.config.ts

```typescript
import { defineConfig } from "nitro/config";

export default defineConfig({
  preset: "node_server",
  serverDir: "./server",
  runtimeConfig: {},
});
```

## General Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `preset` | `string` | `node_server` | Deploy target preset |
| `defaultPreset` | `string` | - | Fallback preset |
| `debug` | `boolean` | `false` | Enable debug mode |
| `logLevel` | `number` | `3` | Log verbosity (0-5) |
| `static` | `boolean` | `false` | Static site generation |
| `serverDir` | `string` | `./server` | Server source directory |
| `compatibilityDate` | `string` | `latest` | Compatibility date |

## Runtime Config

```typescript
export default defineConfig({
  runtimeConfig: {
    apiSecret: "default",     // NITRO_API_SECRET
    dbUrl: "postgres://...",  // NITRO_DB_URL
  },
});
```

## Route Rules

```typescript
export default defineConfig({
  routeRules: {
    "/api/**": { cors: true },
    "/cached/**": { cache: { maxAge: 3600 } },
    "/admin/**": { redirect: "/login" },
    "/static/**": { prerender: true },
  },
});
```

| Option | Type | Description |
|--------|------|-------------|
| `cors` | `boolean` | Enable CORS |
| `cache` | `object` | Cache configuration |
| `headers` | `object` | Response headers |
| `redirect` | `string` | Redirect URL |
| `prerender` | `boolean` | Pre-render at build |

## Storage (unstorage)

```typescript
export default defineConfig({
  storage: {
    cache: { driver: "fs", base: "./.cache" },
    db: { driver: "redis", url: "redis://localhost" },
    data: { driver: "fs", base: "./data" },
  },
});
```

### Storage Drivers

| Driver | Package | Description |
|--------|---------|-------------|
| `memory` | Built-in | In-memory storage |
| `fs` | Built-in | Filesystem storage |
| `redis` | `ioredis` | Redis server |
| `cloudflare-kv` | `@cloudflare/kv` | Cloudflare KV |
| `http` | Built-in | HTTP-based storage |

## Database (db0)

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

## OpenAPI

```typescript
export default defineConfig({
  openAPI: {
    enabled: true,
    meta: { title: "My API", version: "1.0.0" },
  },
});
```

## Deploy Presets

| Preset | Platform | Output |
|--------|----------|--------|
| `node_server` | Node.js | Standalone server |
| `node_cluster` | Node.js cluster | Cluster mode |
| `cloudflare_pages` | Cloudflare | Worker script |
| `cloudflare_module` | Cloudflare | ES module |
| `vercel` | Vercel | Edge function |
| `netlify` | Netlify | Serverless function |
| `bun` | Bun | Bun server |
| `deno` | Deno | Deno server |
| `static` | Static | Pre-rendered HTML |
