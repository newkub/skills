## Domain Verification

Domain Verification สำหรับ verify domain ownership ของ customers

## Methods

- **DNS TXT record**: Add TXT record ใน DNS
- **HTML file upload**: Upload verification file
- **Meta tag**: Add meta tag ใน website

## Setup

เริ่ม domain verification:

```typescript
import { WorkOS } from '@workos-inc/node';

const workos = new WorkOS({
  apiKey: process.env.WORKOS_API_KEY,
});

const verification = await workos.domainVerification.create({
  domain: 'example.com',
  organizationId: 'org_id',
});
```

## DNS TXT Record

เพิ่ม TXT record ใน DNS:

```
TXT
workos-verification=verification_token
```

## HTML File Upload

Upload verification file:

```bash
# File: workos-verification.html
workos-verification-token
```

## Meta Tag

เพิ่ม meta tag ใน HTML:

```html
<meta name="workos-verification" content="verification_token">
```

## Checking Status

ตรวจสอบ verification status:

```typescript
const status = await workos.domainVerification.getStatus({
  domainId: 'domain_id',
});
```

## Best Practices

- ใช้ DNS TXT record สำหรับ production
- ใช้ HTML file สำหรับ development
- Monitor verification status
- Handle verification failures
