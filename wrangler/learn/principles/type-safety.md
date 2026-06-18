# Type Safety

ใช้ TypeScript เพื่อให้มั่นใจว่า code ถูกต้องและ maintainable

## TypeScript Interface

กำหนด interface สำหรับ environment bindings

```typescript
interface Env {
  CACHE: KVNamespace;
  BUCKET: R2Bucket;
  DB: D1Database;
  MY_QUEUE: Queue;
  MY_DO: DurableObjectNamespace;
  API_KEY: string;
  ENV: string;
}
```

## Type Generation

ใช้ wrangler สำหรับ generate types อัตโนมัติ

```bash
wrangler types
```

จะสร้าง `worker-configuration.d.ts` ที่มี types สำหรับ bindings

## ประโยชน์

- **Compile-time checking** - ตรวจสอบ error ก่อน runtime
- **Auto-completion** - IDE ช่วย suggest code
- **Refactoring** - แก้ไข code ได้อย่างปลอดภัย
- **Documentation** - Types เป็น documentation ในตัว
