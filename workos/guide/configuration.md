# Configuration

WorkOS configuration options

## Environment Variables

```env
# WorkOS API Key (secret)
WORKOS_API_KEY=sk_xxxxxxxxxxxxxxxxxxxxxxxx

# WorkOS Client ID
WORKOS_CLIENT_ID=client_xxxxxxxxxxxxxxxxxxxxxxxx

# Client Secret (for OAuth)
WORKOS_CLIENT_SECRET=client_secret_xxxxxxxx

# Redirect URI
WORKOS_REDIRECT_URI=http://localhost:3000/callback

# Webhook Secret
WORKOS_WEBHOOK_SECRET=we_xxxxxxxxxxxxxxxxxxxxxxxx

# Organization ID
WORKOS_ORGANIZATION_ID=org_xxxxxxxxxxxxxxxxxxxxxxxx
```

## SDK Configuration

```typescript
import WorkOS from '@workos-inc/node';

const workos = new WorkOS(process.env.WORKOS_API_KEY, {
  // Optional: custom API URL
  apiHostname: 'api.workos.com',
  
  // Optional: custom HTTPS agent
  agent: new https.Agent({ keepAlive: true }),
});
```

## SSO Configuration

```typescript
const ssoConfig = {
  clientId: process.env.WORKOS_CLIENT_ID,
  clientSecret: process.env.WORKOS_CLIENT_SECRET,
  redirectUri: process.env.WORKOS_REDIRECT_URI,
  organization: process.env.WORKOS_ORGANIZATION_ID,
};
```

## Directory Sync Configuration

```typescript
const directoryConfig = {
  directoryId: 'directory_xxxxxxxx',
  webhookEndpoint: '/webhooks/directory-sync',
};
```

## Webhook Verification

```typescript
import { verifyWebhookEvent } from '@workos-inc/node/auditLogs';

app.post('/webhooks', (req, res) => {
  const event = verifyWebhookEvent(
    req.body,
    process.env.WORKOS_WEBHOOK_SECRET
  );
  
  // Handle event
  console.log(event);
});
```

## Provider Configuration

| Provider | Configuration |
|----------|---------------|
| Google Workspace | domain, client_id, client_secret |
| Okta | domain, client_id, client_secret |
| Azure AD | domain, client_id, client_secret |
| SAML | saml_connection_id |