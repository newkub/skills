## Admin Portal Setup

Admin Portal ช่วยให้ IT admins สามารถ self-serve onboarding ได้โดยไม่ต้องติดต่อ support

## Features

- Self-serve onboarding สำหรับ IT admins
- Configure SSO connections
- Manage directory sync
- View audit logs
- Manage users และ groups

## Setup

เปิดใช้งาน Admin Portal ใน WorkOS dashboard:

1. ไปที่ WorkOS dashboard
2. เลือก organization
3. เปิด Admin Portal
4. Configure branding และ settings

## Configuration

ตั้งค่า Admin Portal options:

- Custom branding (logo, colors)
- Allowed domains
- SSO connections
- Directory sync settings
- User management permissions

## Embedding

Embed Admin Portal ใน application:

```typescript
import { AdminPortal } from '@workos-inc/node';

const adminPortal = new AdminPortal({
  apiKey: process.env.WORKOS_API_KEY,
});

const portalUrl = adminPortal.getPortalUrl({
  organization: 'org_id',
});
```

## Best Practices

- ใช้ Admin Portal สำหรับ enterprise customers
- Configure appropriate permissions สำหรับ admins
- Monitor admin activities ด้วย audit logs
- Provide documentation สำหรับ IT admins
