# Server Routes

## What are Server Routes

Server routes คือ API endpoints ที่ Nitro สร้างให้อัตโนมัติ:
- **File-based** - สร้าง routes จาก file structure
- **Auto-routing** - Nitro จัดการ routing อัตโนมัติ
- **HTTP Methods** - รองรับ GET, POST, PUT, DELETE

## Creating Routes

```typescript
// server/api/index.get.ts
export default defineEventHandler(() => {
  return { message: 'Hello World' };
});
```

## Dynamic Routes

```typescript
// server/api/users/[id].get.ts
export default defineEventHandler((event) => {
  const id = getRouterParam(event, 'id');
  return { userId: id };
});
```
