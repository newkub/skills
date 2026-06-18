## FGA Setup

Fine-Grained Authorization (FGA) สำหรับ authorization ที่ละเอียดและ flexible

## Concepts

- **Relations**: ความสัมพันธ์ระหว่าง objects และ users
- **Tuples**: Data ที่ define relationships
- **Authorization Model**: Schema ที่ define authorization logic

## Setup

สร้าง authorization model:

```typescript
import { WorkOS } from '@workos-inc/node';

const workos = new WorkOS({
  apiKey: process.env.WORKOS_API_KEY,
});

const model = await workos.fga.createModel({
  name: 'document_model',
  schema: `
    type user
    type document
    
    relation owner: user
    relation editor: user
    relation viewer: user
    
    permission view = viewer + owner
    permission edit = editor + owner
    permission delete = owner
  `,
});
```

## Usage

Create tuples สำหรับ relationships:

```typescript
await workos.fga.createTuple({
  storeId: 'store_id',
  tuple: {
    user: 'user_id',
    relation: 'owner',
    object: 'document:doc_id',
  },
});
```

## Checking Authorization

ตรวจสอบ authorization:

```typescript
const allowed = await workos.fga.check({
  storeId: 'store_id',
  tupleKey: {
    user: 'user_id',
    relation: 'view',
    object: 'document:doc_id',
  },
});
```

## Best Practices

- Design authorization model ที่ clear และ maintainable
- ใช้ hierarchical relationships เมื่อเหมาะสม
- Cache authorization decisions สำหรับ performance
- Test authorization logic thoroughly
