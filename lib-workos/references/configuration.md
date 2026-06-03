# Configuration

Configuration options for WorkOS SDK

## Environment Variables

```env
# API Key (required)
WORKOS_API_KEY=sk_xxxxxxxxxxxxxxxxxxxxxxxx

# Client ID (required for OAuth)
WORKOS_CLIENT_ID=client_xxxxxxxxxxxxxxxxxxxxxxxx

# Client Secret (required for OAuth)
WORKOS_CLIENT_SECRET=client_secret_xxxxxxxx

# Redirect URI (required for OAuth)
WORKOS_REDIRECT_URI=http://localhost:3000/callback

# Webhook Secret (required for webhooks)
WORKOS_WEBHOOK_SECRET=we_xxxxxxxxxxxxxxxxxxxxxxxx
```

## SDK Configuration

```typescript
import WorkOS from '@workos-inc/node';

const workos = new WorkOS(process.env.WORKOS_API_KEY, {
  // Optional configuration
  apiHostname: 'api.workos.com',
});
```

## SSO Configuration

```typescript
// OAuth configuration
const ssoConfig = {
  clientId: process.env.WORKOS_CLIENT_ID,
  clientSecret: process.env.WORKOS_CLIENT_SECRET,
  redirectUri: process.env.WORKOS_REDIRECT_URI,
};

// Domain-based SSO
const domainConfig = {
  domain: 'acme.com',
  clientId: process.env.WORKOS_CLIENT_ID,
  redirectUri: process.env.WORKOS_REDIRECT_URI,
};
```

## Webhook Configuration

```typescript
import { verifyWebhookEvent } from '@workos-inc/node/auditLogs';

// Express webhook endpoint
app.post('/webhooks/workos', (req, res) => {
  const event = verifyWebhookEvent(
    req.body,
    process.env.WORKOS_WEBHOOK_SECRET
  );
  
  // Handle event
  switch (event.action) {
    case 'user.created':
      // Handle user creation
      break;
    case 'user.updated':
      // Handle user update
      break;
  }
  
  res.status(200).send('OK');
});
```

## TypeScript Configuration

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "strict": true,
    "esModuleInterop": true
  }
}
```

## See Also

- [CLI](./cli.md) - CLI commands
- [Programmatic API](./programmatic-api.md) - SDK usage