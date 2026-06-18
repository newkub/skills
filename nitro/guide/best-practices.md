# Best Practices

## Project Structure

```
my-app/
├── server/
│   ├── api/           # API routes
│   ├── middleware/     # Middleware handlers
│   ├── plugins/       # Nitro plugins
│   ├── tasks/         # Runtime tasks
│   └── utils/         # Shared utilities
├── nitro.config.ts    # Nitro configuration
├── vite.config.ts     # Vite configuration
└── package.json
```

## Error Handling

ใช้ `createError` สำหรับจัดการ errors ใน handlers

```typescript
import { defineHandler, createError } from "nitro";

export default defineHandler(async () => {
  try {
    return await fetchData();
  } catch {
    throw createError({
      statusCode: 500,
      statusMessage: "Internal Server Error",
    });
  }
});
```

### Custom Error Handler

```typescript
// server/error.ts
export default defineNitroErrorHandler((error, event) => {
  return new Response(
    JSON.stringify({ error: error.statusMessage }),
    { status: error.statusCode, headers: { "content-type": "application/json" } }
  );
});
```

## Input Validation

ใช้ Zod สำหรับ validate input

```typescript
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
});

export default defineHandler(async (event) => {
  const body = await event.request.json();
  const validated = schema.parse(body);
  return validated;
});
```

## Performance

| Practice | Description |
|----------|-------------|
| ใช้ Cache | `defineCachedHandler` สำหรับข้อมูลที่ไม่เปลี่ยนบ่อย |
| Code-splitting | แยก handler เป็นไฟล์ย่อย (ทำอัตโนมัติด้วย compiled routing) |
| Streaming | ส่ง response เป็น stream สำหรับข้อมูลใหญ่ |
| Lazy loading | ใช้ dynamic import สำหรับ modules ที่ไม่จำเป็น |

```typescript
// Streaming response
export default defineHandler(async () => {
  const stream = await getLargeDataStream();
  return new Response(stream);
});
```

## Security

| Practice | Description |
|----------|-------------|
| Validate inputs | ใช้ Zod หรือ schema validation |
| Sanitize outputs | Escape HTML ก่อนส่ง response |
| Rate limiting | จำกัดจำนวน request |
| CORS | ตั้งค่า CORS ให้ถูกต้อง |
| Secrets | ใช้ `runtimeConfig` ไม่ hardcode |

## Environment Variables

```typescript
// nitro.config.ts
import { defineConfig } from "nitro/config";

export default defineConfig({
  runtimeConfig: {
    dbUrl: "postgres://localhost",   // NITRO_DB_URL
    apiKey: "default-key",           // NITRO_API_KEY
  },
});
```

## Testing

```typescript
import { test, expect } from "vitest";

test("GET /api/hello", async () => {
  const res = await fetch("http://localhost:3000/api/hello");
  const data = await res.json();
  expect(data.message).toBe("Hello Nitro!");
});
```

## Next Steps

- [Configuration](../references/configuration.md)
- [Architecture](architecture.md)
- [Integration](integration.md)
