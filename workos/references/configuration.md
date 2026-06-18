# Configuration

Configuration options for WorkOS SDK across multiple languages

## Environment Variables

```env
# API Key (required)
WORKOS_API_KEY=sk_xxxxxxxxxxxxxxxxxxxxxxxx

# Client ID (required for SSO)
WORKOS_CLIENT_ID=client_xxxxxxxxxxxxxxxxxxxxxxxx

# Webhook Secret (required for webhooks)
WORKOS_WEBHOOK_SECRET=whsec_xxxxxxxxxxxxxxxxxxxxxxxx

# API Hostname (optional, defaults to api.workos.com)
WORKOS_API_HOSTNAME=api.workos.com

# Environment (optional: production, development)
WORKOS_ENVIRONMENT=production
```

## Node.js Configuration

```typescript
import WorkOS from '@workos-inc/node';

const workos = new WorkOS(process.env.WORKOS_API_KEY, {
  // Optional configuration
  apiHostname: 'api.workos.com',
});
```

## Python Configuration

```python
from workos import WorkOSClient

workos = WorkOSClient(
    api_key="sk_...",
    client_id="client_...",
    base_url="https://api.workos.com"
)
```

## Go Configuration

```go
import "github.com/workos/workos-go/v4/pkg/workos"

workos := workos.NewClient(
    workos.WithAPIKey("sk_..."),
    workos.WithClientID("client_..."),
    workos.WithAPIHostname("api.workos.com"),
)
```

## Ruby Configuration

```ruby
require 'workos'

WorkOS.api_key = 'sk_...'
WorkOS.client_id = 'client_...'
WorkOS.base_url = 'https://api.workos.com'
```

## PHP Configuration

```php
use WorkOS\WorkOS;

$workos = new WorkOS([
    'api_key' => 'sk_...',
    'client_id' => 'client_...',
    'base_url' => 'https://api.workos.com',
]);
```

## SSO Configuration

### SAML Connection

```typescript
const connection = await workos.sso.createConnection({
  organizationId: 'org_id',
  displayName: 'Okta SSO',
  connectionType: 'saml',
  saml: {
    idpUrl: 'https://okta.com/app/.../sso/saml',
    idpX509Certificate: '-----BEGIN CERTIFICATE-----...',
    acsUrl: 'https://yourapp.com/sso/callback',
    entityId: 'https://yourapp.com',
  },
});
```

### OIDC Connection

```typescript
const connection = await workos.sso.createConnection({
  organizationId: 'org_id',
  displayName: 'Google OAuth',
  connectionType: 'oidc',
  oidc: {
    clientId: 'google_client_id',
    clientSecret: 'google_client_secret',
    issuer: 'https://accounts.google.com',
    discoveryUrl: 'https://accounts.google.com/.well-known/openid-configuration',
  },
});
```

## Webhook Configuration

```typescript
import { verifyWebhookEvent } from '@workos-inc/node';

app.post('/webhooks/workos', (req, res) => {
  const signature = req.headers['workos-signature'];
  const event = workos.webhooks.constructEvent(
    req.body,
    signature,
    process.env.WORKOS_WEBHOOK_SECRET
  );
  
  // Handle event
  switch (event.type) {
    case 'user.created':
      // Handle user creation
      break;
    case 'connection.deleted':
      // Handle connection deletion
      break;
  }
  
  res.status(200).send('OK');
});
```

## SCIM Configuration

```typescript
const scimEndpoint = await workos.directorySync.createDirectory({
  organizationId: 'org_id',
  type: 'okta_saml',
  name: 'Okta Directory',
  externalId: 'okta_directory_id',
});
```

## User Management Configuration

```typescript
const user = await workos.userManagement.createUser({
  email: 'user@example.com',
  password: 'password123',
  firstName: 'John',
  lastName: 'Doe',
  emailVerified: true,
});
```

## Audit Logs Configuration

```typescript
const event = await workos.auditLogs.createEvent({
  action: 'user.created',
  actor: {
    type: 'user',
    id: 'user_id',
    name: 'John Doe',
  },
  targets: [
    {
      type: 'user',
      id: 'target_user_id',
    }
  ],
  context: {
    location: '192.168.1.1',
    userAgent: 'Mozilla/5.0...',
  },
});
```

## Test Mode Configuration

```typescript
const workos = new WorkOS(process.env.WORKOS_API_KEY, {
  apiHostname: 'api.workos.test',
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

- [WorkOS Documentation](https://workos.com/docs)
- [API Reference](https://workos.com/docs/reference)