# Performance

## Performance Tips

- **Edge Deployment** - deploy ไปยัง edge servers สำหรับ low latency
- **Caching** - ใช้ caching strategies สำหรับ API responses
- **Streaming** - ใช้ streaming สำหรับ large responses
- **Minify** - minify code สำหรับ production

## Optimization

### Edge Caching

```typescript
export default defineEventHandler(async (event) => {
  const cached = await useStorage('cache').getItem('key');
  if (cached) return cached;
  
  const data = await fetchData();
  await useStorage('cache').setItem('key', data);
  return data;
});
```

### Streaming

```typescript
export default defineEventHandler(async (event) => {
  return sendStream(event, createReadStream('large-file.txt'));
});
```
