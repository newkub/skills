## Custom Metadata

Custom Metadata สำหรับ store additional information ของ users และ organizations

## Features

- Store custom attributes
- Query by metadata
- Schema validation
- Type safety

## Setup

ตั้งค่า metadata schema:

```typescript
import { WorkOS } from '@workos-inc/node';

const workos = new WorkOS({
  apiKey: process.env.WORKOS_API_KEY,
});

await workos.metadata.createSchema({
  resourceType: 'user',
  schema: {
    department: { type: 'string' },
    employeeId: { type: 'string' },
    startDate: { type: 'date' },
  },
});
```

## Storing Metadata

Add metadata ให้ user:

```typescript
await workos.metadata.set({
  resourceType: 'user',
  resourceId: 'user_id',
  metadata: {
    department: 'Engineering',
    employeeId: 'EMP123',
    startDate: '2024-01-01',
  },
});
```

## Querying Metadata

Query users ตาม metadata:

```typescript
const users = await workos.metadata.query({
  resourceType: 'user',
  filter: {
    department: 'Engineering',
  },
});
```

## Updating Metadata

Update metadata:

```typescript
await workos.metadata.update({
  resourceType: 'user',
  resourceId: 'user_id',
  metadata: {
    department: 'Product',
  },
});
```

## Best Practices

- Define schemas อย่างชัดเจน
- ใช้ metadata สำหรับ application-specific data
- Index frequently queried fields
- Validate metadata before storing
