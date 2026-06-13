# Quick Start

## สร้าง API Route แรก

```typescript
// server/api/hello.ts
import { defineHandler } from "nitro";

export default defineHandler(() => {
  return { message: "Hello Nitro!" };
});
```

## สร้าง Middleware

```typescript
// server/middleware/log.ts
import { defineHandler } from "nitro";

export default defineHandler((event) => {
  console.log(`${event.method} ${event.path}`);
});
```

## ใช้ Storage

```typescript
// server/api/posts/index.ts
import { defineHandler, useStorage } from "nitro";

export default defineHandler(async () => {
  const storage = useStorage();
  const posts = await storage.getItem("posts");
  return posts ?? [];
});
```

## ใช้ Cache

```typescript
// server/api/data.ts
import { defineCachedHandler } from "nitro";

export default defineCachedHandler(
  async () => {
    return await fetchExternalData();
  },
  { maxAge: 3600 }
);
```

## รัน Development Server

```bash
npm run dev
```

## ทดสอบ Endpoint

```bash
curl http://localhost:3000/api/hello
```

## สร้าง Plugin

```typescript
// server/plugins/setup.ts
export default defineNitroPlugin((nitro) => {
  console.log("Nitro is ready!");
});
```

## สร้าง Task

```typescript
// server/tasks/seed.ts
export default defineTask({
  meta: { name: "seed", description: "Seed database" },
  async run() {
    await seedDatabase();
    return { result: "done" };
  },
});
```

## Next Steps

- [Key Concept](key-concept.md)
- [Features](features.md)
- [Best Practices](best-practices.md)
- [Configuration](configuration.md)
