# Middleware

## What is Middleware

Middleware คือ functions ที่ intercept requests:
- **Request Processing** - ประมวลผล requests ก่อน handler
- **Response Processing** - ประมวลผล responses หลัง handler
- **Chaining** - ใช้ multiple middleware ใน chain

## Using Middleware

```typescript
import { defineHandler, createError } from "nitro";

export default defineHandler(async (event) => {
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
import { defineHandler } from "nitro";

export default defineHandler(async (event) => {
  // Global auth logic
});
```
