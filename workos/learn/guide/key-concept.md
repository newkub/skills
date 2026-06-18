# Key Concept

Core concepts in WorkOS

## SSO (Single Sign-On)

SSO allows users to authenticate using their existing identity provider.

```typescript
import WorkOS from '@workos-inc/node';

const workos = new WorkOS(process.env.WORKOS_API_KEY);
```

**When to use:**
- Enterprise identity management
- SAML/OAuth integrations
- Multi-tenant applications

## Directory Sync

Sync user and group data from identity providers.

```typescript
const directory = await workos.directorySync.directories.list();
```

**When to use:**
- User provisioning
- Group management
- HRIS integrations

## Audit Log

Track user actions for compliance and security.

```typescript
await workos.auditLogs.createEvent({
  organization: 'org_123',
  action: 'user.login',
  actors: [{ type: 'user', id: 'user_123', name: 'John Doe' }],
  targets: [{ type: 'session', id: 'session_456' }],
});
```

## Organizations

Manage multiple customer organizations.

```typescript
const organizations = await workos.organizations.list();
```

## Key Concepts Table

| Concept | Description |
|---------|-------------|
| SSO | Single Sign-On via SAML/OIDC |
| Directory Sync | Sync users from IdP |
| Audit Logs | Track user actions |
| Organizations | Multi-tenant management |
| Connections | SSO provider connections |