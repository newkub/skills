# Key Concept

## Nitro คืออะไร?

Nitro เป็น full-stack server framework สำหรับ JavaScript/TypeScript ที่รองรับทุก runtime และ deploy target ทำงานบน Web Standards (Request/Response API)

## Core Concepts

| Concept | Description |
|---------|-------------|
| Handler | ฟังก์ชันจัดการ request ส่ง response |
| Middleware | ประมวลผล request ก่อนถึง handler |
| Route | URL pattern ที่จับคู่กับ handler |
| Plugin | ขยาย runtime behavior ของ Nitro |
| Task | ดำเนินการ one-off operations |
| Storage | KV storage สำหรับเก็บข้อมูล |
| Cache | ระบบ caching สำหรับ response |

## Handler

```typescript
// server/api/hello.ts
import { defineHandler } from "nitro";

export default defineHandler(() => {
  return { message: "Hello Nitro!" };
});
```

## Middleware

```typescript
// server/middleware/log.ts
import { defineHandler } from "nitro";

export default defineHandler((event) => {
  console.log(`${event.method} ${event.path}`);
});
```

## Storage

```typescript
import { useStorage } from "nitro";

const storage = useStorage();
await storage.setItem("cache:key", "value");
const value = await storage.getItem("cache:key");
```

## Cache

```typescript
import { defineCachedHandler } from "nitro";

export default defineCachedHandler(
  async () => {
    return await fetchData();
  },
  { maxAge: 3600 }
);
```

## เมื่อไหร่ควรใช้

| Use Case | Description |
|----------|-------------|
| API Server | สร้าง REST/GraphQL API |
| SSR Application | Server-side rendering |
| Full-stack App | Frontend + Backend ในโปรเจกต์เดียว |
| Serverless | Deploy เป็น functions |
| Edge Computing | Deploy ที่ edge locations |

## Next Steps

- [Quick Start](quick-start.md)
- [How It Works](how-it-works.md)
- [Features](features.md)
