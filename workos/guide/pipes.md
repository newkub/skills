## Pipes Integration

Pipes ช่วยให้ customers สามารถ connect third-party accounts ไปยัง application

## Features

- Pre-built integrations สำหรับ popular services
- OAuth flow management
- Token management
- Sync data จาก third-party services

## Setup

เปิดใช้งาน Pipes ใน WorkOS dashboard:

1. ไปที่ WorkOS dashboard
2. เปิด Pipes
3. Configure integrations ที่ต้องการ
4. Setup redirect URIs

## Usage

Create connection:

```typescript
import { WorkOS } from '@workos-inc/node';

const workos = new WorkOS({
  apiKey: process.env.WORKOS_API_KEY,
});

const connection = await workos.pipes.createConnection({
  organizationId: 'org_id',
  provider: 'slack',
  scopes: ['channels:read', 'chat:write'],
});
```

## Managing Connections

List connections:

```typescript
const connections = await workos.pipes.listConnections({
  organizationId: 'org_id',
});
```

Delete connection:

```typescript
await workos.pipes.deleteConnection({
  connectionId: 'connection_id',
});
```

## Syncing Data

Sync data จาก third-party service:

```typescript
const sync = await workos.pipes.syncData({
  connectionId: 'connection_id',
  resource: 'channels',
});
```

## Best Practices

- ใช้ Pipes สำหรับ integrations ที่ supported
- Handle token refresh automatically
- Monitor sync status
- Provide clear error messages
