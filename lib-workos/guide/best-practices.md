# Best Practices

WorkOS development best practices

## Security

### Always verify webhooks

```typescript
import { verifyWebhookEvent } from '@workos-inc/node/auditLogs';

app.post('/webhooks', (req, res) => {
  try {
    const event = verifyWebhookEvent(
      req.body,
      process.env.WORKOS_WEBHOOK_SECRET
    );
    // Process event
  } catch (error) {
    // Reject invalid webhooks
    res.status(400).send('Invalid signature');
  }
});
```

### Use environment variables

Never hardcode API keys in source code.

```typescript
// ✅ Correct
const workos = new WorkOS(process.env.WORKOS_API_KEY);

// ❌ Wrong
const workos = new WorkOS('sk_live_xxxxxx');
```

## Error Handling

```typescript
try {
  const profile = await workos.sso.getProfileAndToken(code, ...);
} catch (error) {
  if (error.code === 'invalid_code') {
    // Handle expired or invalid code
  }
  console.error('WorkOS error:', error);
}
```

## User Management

```typescript
// Always check organization
const { data } = await workos.sso.getProfileAndToken(code, ...);

if (!isValidOrganization(data.profile.organization)) {
  throw new Error('Unauthorized organization');
}
```

## Testing

```typescript
// Use test API key for development
const workos = new WorkOS('sk_test_xxxxxx');

// Test SSO flow
const { url } = workos.sso.getAuthorizationUrl({
  clientId: 'client_test_xxxxxx',
  redirectUri: 'http://localhost:3000/callback',
  state: 'test-state',
});
```

## Production Checklist

- [ ] Use production API key
- [ ] Configure HTTPS
- [ ] Set up webhook verification
- [ ] Implement error logging
- [ ] Add organization validation
- [ ] Set up monitoring