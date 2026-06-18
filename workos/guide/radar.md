## Radar Setup

Radar สำหรับ protect application จาก bots, fraud, และ abuse

## Features

- Bot detection
- Fraud prevention
- Rate limiting
- IP reputation checking

## Setup

เปิดใช้งาน Radar ใน WorkOS dashboard:

1. ไปที่ Radar section
2. Configure rules
3. Set thresholds
4. Enable monitoring

## Usage

Check request ด้วย Radar:

```typescript
import { WorkOS } from '@workos-inc/node';

const workos = new WorkOS({
  apiKey: process.env.WORKOS_API_KEY,
});

const result = await workos.radar.check({
  ip: '192.168.1.1',
  userAgent: 'Mozilla/5.0...',
  email: 'user@example.com',
});
```

## Rules

Configure Radar rules:

```typescript
await workos.radar.createRule({
  name: 'block_suspicious_ips',
  action: 'block',
  condition: 'ip.reputation < 50',
});
```

## Monitoring

Monitor Radar activity:

```typescript
const events = await workos.radar.listEvents({
  organizationId: 'org_id',
  startDate: '2024-01-01',
});
```

## Best Practices

- ใช้ Radar สำหรับ sensitive endpoints
- Monitor false positives
- Adjust rules regularly
- Integrate กับ alerting
