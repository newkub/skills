# Audit Logs Implementation

## Overview

Implement audit logs with WorkOS สำหรับ compliance (SOC 2, ISO 27001, HIPAA, GDPR)

## Creating Audit Events

### Basic Event

```typescript
await workos.auditLogs.createEvent({
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
      name: 'Jane Doe',
    }
  ],
});
```

### Event with Context

```typescript
await workos.auditLogs.createEvent({
  action: 'user.login',
  actor: {
    type: 'user',
    id: 'user_id',
    name: 'John Doe',
  },
  targets: [
    {
      type: 'organization',
      id: 'org_id',
      name: 'Acme Corp',
    }
  ],
  context: {
    location: '192.168.1.1',
    userAgent: 'Mozilla/5.0...',
    requestId: 'req_123',
  },
});
```

## Event Types

### Authentication Events

```typescript
// User login
await workos.auditLogs.createEvent({
  action: 'user.login',
  actor: { type: 'user', id: userId, name: userName },
  context: { location: ipAddress, userAgent },
});

// User logout
await workos.auditLogs.createEvent({
  action: 'user.logout',
  actor: { type: 'user', id: userId, name: userName },
});

// Failed login
await workos.auditLogs.createEvent({
  action: 'user.login_failed',
  actor: { type: 'user', id: userId, name: userName },
  context: { location: ipAddress, reason: 'invalid_password' },
});
```

### User Management Events

```typescript
// User created
await workos.auditLogs.createEvent({
  action: 'user.created',
  actor: { type: 'user', id: adminId, name: adminName },
  targets: [{ type: 'user', id: userId, name: userName }],
});

// User updated
await workos.auditLogs.createEvent({
  action: 'user.updated',
  actor: { type: 'user', id: adminId, name: adminName },
  targets: [{ type: 'user', id: userId, name: userName }],
  context: { changes: ['email', 'firstName'] },
});

// User deleted
await workos.auditLogs.createEvent({
  action: 'user.deleted',
  actor: { type: 'user', id: adminId, name: adminName },
  targets: [{ type: 'user', id: userId, name: userName }],
});
```

### SSO Events

```typescript
// SSO connection created
await workos.auditLogs.createEvent({
  action: 'connection.created',
  actor: { type: 'user', id: adminId, name: adminName },
  targets: [{ type: 'connection', id: connectionId, name: 'Okta SSO' }],
});

// SSO login
await workos.auditLogs.createEvent({
  action: 'sso.login',
  actor: { type: 'user', id: userId, name: userName },
  targets: [{ type: 'connection', id: connectionId, name: 'Okta SSO' }],
  context: { idp: 'Okta' },
});
```

### SCIM Events

```typescript
// User provisioned
await workos.auditLogs.createEvent({
  action: 'scim.user.provisioned',
  actor: { type: 'system', id: 'scim', name: 'SCIM' },
  targets: [{ type: 'user', id: userId, name: userName }],
  context: { source: 'Okta' },
});

// User deprovisioned
await workos.auditLogs.createEvent({
  action: 'scim.user.deprovisioned',
  actor: { type: 'system', id: 'scim', name: 'SCIM' },
  targets: [{ type: 'user', id: userId, name: userName }],
  context: { source: 'Okta' },
});
```

## Exporting Audit Logs

### Create Export

```typescript
const export = await workos.auditLogs.createExport({
  rangeStart: '2024-01-01T00:00:00Z',
  rangeEnd: '2024-01-31T23:59:59Z',
  actions: ['user.created', 'user.deleted', 'user.login'],
});
```

### Get Export

```typescript
const export = await workos.auditLogs.getExport('export_id');

if (export.status === 'complete') {
  const logs = await workos.auditLogs.listExports({
    exportId: export.id,
  });
}
```

### List Exports

```typescript
const exports = await workos.auditLogs.listExports({
  limit: 100,
});
```

## Audit Log Schema

### Event Structure

```typescript
{
  id: 'event_id',
  createdAt: '2024-01-01T00:00:00Z',
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
      name: 'Jane Doe',
    }
  ],
  context: {
    location: '192.168.1.1',
    userAgent: 'Mozilla/5.0...',
    requestId: 'req_123',
  },
  occurredAt: '2024-01-01T00:00:00Z',
}
```

### Actor Types

- `user`: Human user
- `system`: Automated system
- `api`: API client
- `webhook`: Webhook trigger

### Target Types

- `user`: User resource
- `organization`: Organization resource
- `connection`: SSO connection
- `directory`: SCIM directory
- `group`: Group resource

## Compliance Mapping

### SOC 2

Required events:
- Access logging
- Change tracking
- Security incident logging

```typescript
await workos.auditLogs.createEvent({
  action: 'security.incident',
  actor: { type: 'system', id: 'security', name: 'Security System' },
  context: { severity: 'high', type: 'unauthorized_access' },
});
```

### ISO 27001

Required events:
- Access control
- Asset management
- Cryptography usage

```typescript
await workos.auditLogs.createEvent({
  action: 'access_control.granted',
  actor: { type: 'user', id: adminId, name: adminName },
  targets: [{ type: 'user', id: userId, name: userName }],
  context: { permission: 'admin', resource: 'dashboard' },
});
```

### HIPAA

Required events:
- PHI access logging
- User authentication
- Data modification

```typescript
await workos.auditLogs.createEvent({
  action: 'phi.accessed',
  actor: { type: 'user', id: userId, name: userName },
  targets: [{ type: 'patient', id: patientId, name: 'Patient Name' }],
  context: { phiType: 'medical_record' },
});
```

### GDPR

Required events:
- Data processing
- Data access
- Data deletion

```typescript
await workos.auditLogs.createEvent({
  action: 'gdpr.data_deleted',
  actor: { type: 'user', id: userId, name: userName },
  targets: [{ type: 'user', id: userId, name: userName }],
  context: { reason: 'right_to_be_forgotten' },
});
```

## Best Practices

- Log all security-relevant events
- Include sufficient context (IP, user agent)
- Use consistent action naming
- Implement log retention policies
- Regularly review audit logs
- Set up alerts for suspicious activities
- Export logs for long-term storage

## Next Steps

- อ่าน `key-concepts/audit-logs.md` สำหรับ audit logs concepts
- อ่าน `principles/security.md` สำหรับ security guidelines
- อ่าน `guide/webhooks.md` สำหรับ webhook integration
