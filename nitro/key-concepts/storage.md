# Storage

## What is Storage

Storage คือ abstraction สำหรับ data persistence:
- **Key-Value** - simple key-value storage
- **Multi-platform** - รองรับ multiple storage backends
- **Type-safe** - TypeScript support

## Using Storage

```typescript
export default defineEventHandler(async (event) => {
  const storage = useStorage('data');
  await storage.setItem('key', { value: 123 });
  const data = await storage.getItem('key');
  return data;
});
```

## Storage Drivers

- **Memory** - in-memory storage
- **Redis** - Redis storage
- **Cloudflare KV** - Cloudflare KV storage
- **File System** - file system storage
