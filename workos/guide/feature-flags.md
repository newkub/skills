## Feature Flags Setup

Feature Flags สำหรับ control rollout ของ features ใน application

## Features

- Gradual rollout
- A/B testing
- Targeted rollouts
- Real-time updates

## Setup

สร้าง feature flag ใน WorkOS dashboard:

1. ไปที่ Feature Flags section
2. Create new flag
3. Configure rollout strategy
4. Set targeting rules

## Usage

Check feature flag:

```typescript
import { WorkOS } from '@workos-inc/node';

const workos = new WorkOS({
  apiKey: process.env.WORKOS_API_KEY,
});

const isEnabled = await workos.featureFlags.isEnabled({
  flagKey: 'new_feature',
  userId: 'user_id',
  organizationId: 'org_id',
});
```

## Rollout Strategies

- **Percentage**: Rollout ตาม percentage ของ users
- **User-based**: Target specific users
- **Organization-based**: Target specific organizations
- **Attribute-based**: Target ตาม user attributes

## Configuration

ตั้งค่า targeting rules:

```typescript
await workos.featureFlags.updateFlag({
  flagKey: 'new_feature',
  rolloutStrategy: {
    type: 'percentage',
    value: 50,
  },
  targetingRules: [
    {
      condition: 'user.email ends with "@company.com"',
      enabled: true,
    },
  ],
});
```

## Best Practices

- ใช้ feature flags สำหรับ gradual rollouts
- Monitor feature performance
- Clean up old flags
- Document flag purposes
