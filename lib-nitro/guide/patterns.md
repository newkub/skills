# Patterns

## Common Patterns

## API Routes

```typescript
export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  return { data: body };
});
```

## Middleware

```typescript
export default defineEventHandler(async (event) => {
  const auth = await verifyAuth(event);
  if (!auth) {
    throw createError({ statusCode: 401, message: 'Unauthorized' });
  }
});
```

## Error Handling

```typescript
export default defineEventHandler(async (event) => {
  try {
    return await fetchData();
  } catch (error) {
    throw createError({ statusCode: 500, message: 'Internal Error' });
  }
});
```
