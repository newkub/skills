# Features

## ภาพรวม

Nitro มี features สำหรับสร้าง full-stack server applications ที่รองรับทุก platform

## Filesystem Routing

```typescript
// server/api/users/[id].ts
import { defineHandler } from "nitro";

export default defineHandler((event) => {
  const id = event.context.params.id;
  return { id, name: "John" };
});
```

### Route Patterns

| Pattern | File Path | URL Match |
|---------|-----------|-----------|
| Static | `api/users.ts` | `/api/users` |
| Dynamic | `api/users/[id].ts` | `/api/users/123` |
| Catch-all | `api/[...slug].ts` | `/api/a/b/c` |

## HTTP Methods

```typescript
// GET (default)
export default defineHandler(() => ({ data: [] }));

// POST
export default defineHandler(async (event) => {
  const body = await event.request.json();
  return body;
});
```

### Supported Methods

| Method | Handler | Description |
|--------|---------|-------------|
| GET | `defineHandler` | Default method |
| POST | `defineHandler` + check | อ่าน body จาก request |
| PUT | `defineHandler` + check | Update resource |
| DELETE | `defineHandler` + check | Delete resource |

## Storage (KV)

```typescript
import { useStorage } from "nitro";

const storage = useStorage();

// เขียนข้อมูล
await storage.setItem("users:1", { name: "John" });

// อ่านข้อมูล
const user = await storage.getItem("users:1");

// ลบข้อมูล
await storage.removeItem("users:1");
```

### Storage Drivers

| Driver | Description |
|--------|-------------|
| Memory | In-memory (default) |
| Filesystem | เก็บในไฟล์ |
| Redis | Redis server |
| Cloudflare KV | Cloudflare storage |

## Caching

```typescript
import { defineCachedHandler } from "nitro";

export default defineCachedHandler(
  async () => {
    return await fetchData();
  },
  { maxAge: 3600, staleMaxAge: 86400 }
);
```

## Plugins

```typescript
// server/plugins/setup.ts
export default defineNitroPlugin((nitro) => {
  nitro.hooks.hook("request", (event) => {
    console.log("Request:", event.path);
  });
});
```

## Tasks

```typescript
// server/tasks/cleanup.ts
export default defineTask({
  meta: { name: "cleanup", description: "Clean old data" },
  async run() {
    await cleanupOldData();
    return { result: "done" };
  },
});
```

## WebSocket

```typescript
import { defineWebSocketHandler } from "nitro";

export default defineWebSocketHandler({
  open(peer) { peer.send("Connected!"); },
  message(peer, msg) { peer.send(`Echo: ${msg}`); },
});
```

## OpenAPI

```typescript
// nitro.config.ts
export default defineConfig({
  openAPI: { enabled: true },
});
```

## Next Steps

- [Key Concept](key-concept.md)
- [Configuration](configuration.md)
- [Best Practices](best-practices.md)
