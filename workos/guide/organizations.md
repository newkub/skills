# Organizations

## Overview

Implement multi-tenant organization management with WorkOS Organizations API

## Organization CRUD

### Create Organization

```typescript
const organization = await workos.organizations.createOrganization({
  name: 'Acme Corp',
  domains: ['acme.com'],
  profileData: {
    id: 'internal_id',
    colors: ['#FF0000', '#00FF00'],
  },
});
```

### Get Organization

```typescript
const organization = await workos.organizations.getOrganization('org_id');
```

### List Organizations

```typescript
const organizations = await workos.organizations.listOrganizations({
  limit: 100,
  cursor: 'next_cursor',
});
```

### Update Organization

```typescript
const organization = await workos.organizations.updateOrganization('org_id', {
  name: 'Acme Corp Updated',
  domains: ['acme.com', 'acme.io'],
});
```

### Delete Organization

```typescript
await workos.organizations.deleteOrganization('org_id');
```

## Domain Management

### Add Domain

```typescript
const organization = await workos.organizations.updateOrganization('org_id', {
  domains: ['acme.com', 'acme.io'],
});
```

### Verify Domain

Domain verification happens automatically via DNS TXT record

### List Domains

```typescript
const organization = await workos.organizations.getOrganization('org_id');
console.log(organization.domains);
```

## Roles

### Create Role

```typescript
const role = await workos.organizations.createRole({
  organizationId: 'org_id',
  key: 'admin',
  name: 'Administrator',
  description: 'Full access to all resources',
});
```

### List Roles

```typescript
const roles = await workos.organizations.listRoles({
  organizationId: 'org_id',
});
```

### Update Role

```typescript
const role = await workos.organizations.updateRole('role_id', {
  name: 'Super Admin',
  description: 'Full access including billing',
});
```

### Delete Role

```typescript
await workos.organizations.deleteRole('role_id');
```

## Feature Flags

### Create Feature Flag

```typescript
const featureFlag = await workos.organizations.createFeatureFlag({
  organizationId: 'org_id',
  key: 'beta_features',
  name: 'Beta Features',
  description: 'Enable beta features for testing',
});
```

### List Feature Flags

```typescript
const featureFlags = await workos.organizations.listFeatureFlags({
  organizationId: 'org_id',
});
```

### Update Feature Flag

```typescript
const featureFlag = await workos.organizations.updateFeatureFlag('flag_id', {
  name: 'Beta Features Updated',
});
```

### Delete Feature Flag

```typescript
await workos.organizations.deleteFeatureFlag('flag_id');
```

## Organization API Keys

### Create API Key

```typescript
const apiKey = await workos.organizations.createApiKey({
  organizationId: 'org_id',
  name: 'Production API Key',
});
```

### List API Keys

```typescript
const apiKeys = await workos.organizations.listApiKeys({
  organizationId: 'org_id',
});
```

### Delete API Key

```typescript
await workos.organizations.deleteApiKey('api_key_id');
```

## User Memberships

### Add User to Organization

```typescript
const membership = await workos.userManagement.createOrganizationMembership({
  userId: 'user_id',
  organizationId: 'org_id',
  role: 'admin',
});
```

### List User Memberships

```typescript
const memberships = await workos.userManagement.listOrganizationMemberships({
  userId: 'user_id',
});
```

### Update Membership Role

```typescript
const membership = await workos.userManagement.updateOrganizationMembership(
  'membership_id',
  {
    role: 'member',
  }
);
```

### Remove User from Organization

```typescript
await workos.userManagement.deleteOrganizationMembership('membership_id');
```

## Multi-Tenant Architecture

### Organization Context

```typescript
// Get organization from subdomain
const subdomain = req.hostname.split('.')[0];
const organization = await workos.organizations.listOrganizations({
  domains: [`${subdomain}.yourapp.com`],
});

// Set organization context
req.organization = organization.data[0];
```

### Organization Isolation

```typescript
// Filter data by organization
const users = await db.users.findMany({
  where: {
    organizationId: req.organization.id,
  },
});
```

### Organization Settings

```typescript
const settings = await workos.organizations.getOrganization('org_id');

// Use organization settings
const theme = settings.profileData.colors;
const logo = settings.profileData.logoUrl;
```

## Best Practices

- Use organization IDs for data isolation
- Implement organization-specific settings
- Use domains for multi-tenancy
- Implement role-based access control
- Use feature flags for gradual rollouts
- Log organization-level events

## Error Handling

```typescript
try {
  const organization = await workos.organizations.createOrganization({
    name: 'Acme Corp',
    domains: ['acme.com'],
  });
} catch (error) {
  if (error instanceof WorkOSError) {
    switch (error.code) {
      case 'organization_already_exists':
        // Organization already exists
        break;
      case 'invalid_domain':
        // Invalid domain format
        break;
      default:
        // Other errors
    }
  }
}
```

## Next Steps

- อ่าน `key-concepts/user-management.md` สำหรับ user management concepts
- อ่าน `guide/sso-implementation.md` สำหรับ SSO implementation
- อ่าน `principles/best-practices.md` สำหรับ best practices
