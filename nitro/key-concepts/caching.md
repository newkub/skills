---
title: Caching
description: ระบบ caching ของ Nitro สำหรับเพิ่ม performance ด้วย stale-while-revalidate
---

## What is Caching?

Nitro มีระบบ caching ที่สร้างขึ้นบน storage layer (unstorage) รองรับทั้ง cached handlers และ cached functions

## Cached Handlers

ใช้ `defineCachedHandler` แทน `defineHandler` เพื่อ cache response

```typescript
import { defineCachedHandler } from "nitro/cache";

export default defineCachedHandler((event) => {
  return "I am cached for an hour";
}, {
  maxAge: 60 * 60
});
```

### SWR (Stale-While-Revalidate)

โดย default Nitro ใช้ SWR pattern:
- ส่ง stale value ให้ client ทันที
- Update cache ใน background
- ถ้าต้องการให้รอ update ให้ตั้ง `swr: false`

```typescript
export default defineCachedHandler((event) => {
  return "Cached content";
}, {
  maxAge: 60 * 60,
  swr: false // รอ cache update ก่อนส่ง response
});
```

## Cached Functions

Cache functions ที่ไม่ใช่ event handlers:

```typescript
import { cache } from "nitro/cache";

const cachedData = await cache("my-key", async () => {
  return await fetchExpensiveData();
}, {
  maxAge: 60 * 60
});
```

## Using Route Rules

ใช้ route rules เพื่อ cache routes โดย automatic:

```typescript
import { defineConfig } from "nitro/config";

export default defineConfig({
  routeRules: {
    "/api/**": { cache: { maxAge: 60 } },
    "/static/**": { cache: { maxAge: 60 * 60 * 24 } }
  }
});
```

## Cache Options

### Shared Options

- `maxAge`: เวลา cache ในหน่วยวินาที
- `name`: ชื่อ cache group
- `group`: cache group สำหรับ organization
- `base`: base key สำหรับ cache
- `getKey`: custom function สำหรับ generate cache key

### Handler-only Options

- `swr`: enable/disable stale-while-revalidate
- `varies`: cache based on headers (เช่น `["cookie"]`)
- `headers`: custom headers สำหรับ cached response

### Function-only Options

- `shouldInvalidateCache`: function สำหรับ check ว่าควร invalidate หรือไม่

## Cache Invalidation

### Manual Invalidation

```typescript
import { invalidateCache } from "nitro/cache";

await invalidateCache("my-key");
```

### Using .invalidate()

```typescript
const cached = await cache("key", async () => data, { maxAge: 60 });
await cached.invalidate();
```

## Cache Keys

Cache keys ถูก generate อัตโนมัติจาก:
- Route path
- Query parameters
- Headers (ถ้าใช้ `varies` option)

สามารถ custom ด้วย `getKey` option

## Cache Storage

Cache ใช้ storage layer (unstorage) โดย default:
- Development: in-memory storage
- Production: ใช้ storage ที่ configure ไว้ (Redis, Cloudflare KV, etc.)

## Best Practices

- Cache static data ที่ไม่เปลี่ยนบ่อย
- ใช้ SWR สำหรับ data ที่เปลี่ยนบ่อยแต่ต้องการ fast response
- Set appropriate `maxAge` ตามความถี่ของการเปลี่ยนแปลง
- ใช้ `varies` option เมื่อ cache ต้องแตกต่างตาม headers
- Invalidate cache เมื่อ data ถูก update
