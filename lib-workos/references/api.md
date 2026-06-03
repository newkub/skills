# Programmatic API

WorkOS Node.js SDK API

## SDK Setup

```typescript
import WorkOS from '@workos-inc/node';

const workos = new WorkOS(process.env.WORKOS_API_KEY!);
```

## SSO API

### Get Authorization URL

```typescript
const { url } = workos.sso.getAuthorizationUrl({
  clientId: process.env.WORKOS_CLIENT_ID!,
  redirectUri: process.env.WORKOS_REDIRECT_URI!,
  state: 'random-state-string',
});
```

### Get Profile and Token

```typescript
const { type, data } = await workos.sso.getProfileAndToken(
  code,
  process.env.WORKOS_CLIENT_ID!,
  process.env.WORKOS_CLIENT_SECRET!
);

console.log(data.profile);
```

## Directory Sync API

### List Directories

```typescript
const directories = await workos.directorySync.directories.list();
```

### List Users

```typescript
const users = await workos.directorySync.users.list(directoryId);
```

### List Groups

```typescript
const groups = await workos.directorySync.groups.list(directoryId);
```

## Audit Logs API

### Create Event

```typescript
await workos.auditLogs.createEvent({
  organization: 'org_123',
  action: 'user.login',
  actors: [{ type: 'user', id: 'user_123', name: 'John Doe' }],
  targets: [{ type: 'session', id: 'session_456' }],
});
```

### List Events

```typescript
const events = await workos.auditLogs.listEvents({
  organization: 'org_123',
  range: { start: startDate, end: endDate },
});
```

## Organizations API

### List Organizations

```typescript
const organizations = await workos.organizations.list();
```

### Get Organization

```typescript
const org = await workos.organizations.getOrganization('org_xxx');
```

## Webhook Verification

```typescript
import { verifyWebhookEvent } from '@workos-inc/node/auditLogs';

app.post('/webhooks', (req, res) => {
  const event = verifyWebhookEvent(
    req.rawBody,
    process.env.WORKOS_WEBHOOK_SECRET!
  );
  
  console.log(event);
});
```

## Error Handling

```typescript
try {
  const profile = await workos.sso.getProfileAndToken(code, clientId, clientSecret);
} catch (error) {
  if (error.code === 'invalid_code') {
    // Handle expired or invalid code
  }
  console.error('WorkOS error:', error);
}
```

## See Also

- [CLI](./cli.md) - CLI commands
- [Configuration](./configuration.md) - Config options

ดูรายละเอียดเพิ่มเติมที่: [WorkOS Documentation](https://workos.com/docs)