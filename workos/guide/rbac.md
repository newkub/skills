## RBAC Implementation

Role-Based Access Control (RBAC) สำหรับ manage user access ด้วย roles และ permissions

## Concepts

- **Roles**: กลุ่มของ permissions
- **Permissions**: สิทธิ์ในการทำ action ต่างๆ
- **Assignments**: การ assign roles ให้ users

## Setup

สร้าง roles ใน WorkOS dashboard หรือผ่าน API:

```typescript
import { WorkOS } from '@workos-inc/node';

const workos = new WorkOS({
  apiKey: process.env.WORKOS_API_KEY,
});

const role = await workos.rbac.createRole({
  name: 'admin',
  description: 'Administrator role',
  permissions: ['users:read', 'users:write'],
});
```

## Usage

Assign roles ให้ users:

```typescript
await workos.rbac.assignRole({
  userId: 'user_id',
  roleId: 'role_id',
  organizationId: 'org_id',
});
```

## Checking Permissions

ตรวจสอบ permissions ของ user:

```typescript
const hasPermission = await workos.rbac.checkPermission({
  userId: 'user_id',
  permission: 'users:write',
  organizationId: 'org_id',
});
```

## Best Practices

- ใช้ principle of least privilege
- Group permissions ใน roles ที่ meaningful
- Review roles และ permissions regularly
- Document role definitions
