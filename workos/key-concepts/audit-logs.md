# Audit Logs

## Overview

WorkOS Audit Logs API ให้ comprehensive event tracking สำหรับ compliance (SOC 2, ISO 27001, HIPAA, GDPR)

## Why Audit Logs?

- **Compliance Requirements**: SOC 2, ISO 27001, HIPAA, GDPR
- **Security Monitoring**: Track suspicious activities
- **Incident Response**: Investigate security incidents
- **Forensics**: Analyze historical events

## Event Types

### Authentication Events

- User login/logout
- Password changes
- MFA enrollment/verification
- Failed authentication attempts

### User Management Events

- User creation/update/deletion
- Role changes
- Permission changes
- Group membership changes

### SSO Events

- SSO connection creation/deletion
- SAML assertion failures
- OIDC token issuance
- JIT provisioning events

### SCIM Events

- User provisioning
- Group sync
- Attribute updates
- Deprovisioning

## Audit Log Structure

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
  }
}
```

## Creating Audit Logs

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
    }
  ],
  context: {
    location: '192.168.1.1',
    userAgent: 'Mozilla/5.0...',
  },
});
```

## Exporting Audit Logs

```typescript
const export = await workos.auditLogs.createExport({
  rangeStart: '2024-01-01T00:00:00Z',
  rangeEnd: '2024-01-31T23:59:59Z',
  actions: ['user.created', 'user.deleted'],
});
```

## Audit Log Schema

ดู schema ที่สมบูรณ์ใน WorkOS documentation

## Retention Policies

- Default retention: 90 days
- Extended retention: Available on enterprise plans
- Export for long-term storage

## Compliance Mapping

| Compliance | Requirements | WorkOS Support |
|------------|--------------|----------------|
| SOC 2 | Access logging, change tracking | ✅ Full support |
| ISO 27001 | Audit trails, incident logging | ✅ Full support |
| HIPAA | PHI access logging | ✅ Full support |
| GDPR | Data processing records | ✅ Full support |

## Best Practices

- Log all security-relevant events
- Include sufficient context (IP, user agent)
- Use consistent action naming
- Implement log retention policies
- Regularly review audit logs
- Set up alerts for suspicious activities

## Related Concepts

- SSO: Track SSO authentication events
- SCIM: Track provisioning events
- Webhooks: Real-time event notifications
