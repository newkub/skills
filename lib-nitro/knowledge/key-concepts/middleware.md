# Middleware

## What is Middleware

Middleware คือ functions ที่ intercept requests:
- **Request Processing** - ประมวลผล requests ก่อน handler
- **Response Processing** - ประมวลผล responses หลัง handler
- **Chaining** - ใช้ multiple middleware ใน chain

## Using Middleware

```typescript
export default defineEventHandler(async (event) => {
  // Middleware logic
  const auth = await verifyAuth(event);
  if (!auth) {
    throw createError({ statusCode: 401 });
  }
});
```

## Global Middleware

```typescript
// middleware/auth.ts
export default defineEventHandler(async (event) => {
  // Global auth logic
});
```
