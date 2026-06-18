# SCIM Implementation

## Overview

Implement SCIM (System for Cross-Domain Identity Management) สำหรับ automated user provisioning

## SCIM vs Directory Sync

WorkOS provides two approaches:
- **SCIM**: Standard protocol, IdP-initiated
- **Directory Sync**: WorkOS-specific, simpler setup

## SCIM Implementation

### Step 1: Create SCIM Directory

```typescript
const directory = await workos.directorySync.createDirectory({
  organizationId: 'org_id',
  type: 'okta_saml',
  name: 'Okta Directory',
  externalId: 'okta_directory_id',
});
```

### Step 2: Get SCIM Endpoint

```typescript
const scimUrl = directory.scim_endpoint;
// https://api.workos.com/scim/directory/directory_id
```

### Step 3: Configure IdP

ใน IdP (Okta, Microsoft Entra ID, etc.):
- Set SCIM endpoint URL to `scimUrl`
- Set bearer token to WorkOS API key
- Enable SCIM provisioning

### Step 4: Handle SCIM Webhooks

```typescript
app.post('/webhooks/workos', async (req, res) => {
  const signature = req.headers['workos-signature'];
  const event = workos.webhooks.constructEvent(
    req.body,
    signature,
    process.env.WORKOS_WEBHOOK_SECRET
  );
  
  switch (event.type) {
    case 'directory_sync.user.created':
      await handleUserCreated(event.data);
      break;
    case 'directory_sync.user.updated':
      await handleUserUpdated(event.data);
      break;
    case 'directory_sync.user.deleted':
      await handleUserDeleted(event.data);
      break;
    case 'directory_sync.group.created':
      await handleGroupCreated(event.data);
      break;
    case 'directory_sync.group.updated':
      await handleGroupUpdated(event.data);
      break;
    case 'directory_sync.group.deleted':
      await handleGroupDeleted(event.data);
      break;
  }
  
  res.status(200).send('OK');
});
```

### Step 5: Implement User Handlers

```typescript
async function handleUserCreated(data) {
  const { first_name, last_name, emails, active } = data.raw_attributes;
  
  const user = await db.users.create({
    email: emails[0].value,
    firstName: first_name,
    lastName: last_name,
    active: active,
    workosUserId: data.id,
  });
}

async function handleUserUpdated(data) {
  const { first_name, last_name, emails, active } = data.raw_attributes;
  
  await db.users.update({
    where: { workosUserId: data.id },
    data: {
      email: emails[0].value,
      firstName: first_name,
      lastName: last_name,
      active: active,
    },
  });
}

async function handleUserDeleted(data) {
  await db.users.delete({
    where: { workosUserId: data.id },
  });
}
```

### Step 6: Implement Group Handlers

```typescript
async function handleGroupCreated(data) {
  const { display_name } = data.raw_attributes;
  
  const group = await db.groups.create({
    name: display_name,
    workosGroupId: data.id,
  });
}

async function handleGroupUpdated(data) {
  const { display_name } = data.raw_attributes;
  
  await db.groups.update({
    where: { workosGroupId: data.id },
    data: { name: display_name },
  });
}

async function handleGroupDeleted(data) {
  await db.groups.delete({
    where: { workosGroupId: data.id },
  });
}
```

## Directory Sync Implementation

### Step 1: Create Directory

```typescript
const directory = await workos.directorySync.createDirectory({
  organizationId: 'org_id',
  type: 'okta_saml',
  name: 'Okta Directory',
});
```

### Step 2: List Users

```typescript
const users = await workos.directorySync.listUsers({
  directory: directory.id,
});
```

### Step 3: Get User

```typescript
const user = await workos.directorySync.getUser({
  directory: directory.id,
  user: user_id,
});
```

### Step 4: List Groups

```typescript
const groups = await workos.directorySync.listGroups({
  directory: directory.id,
});
```

### Step 5: Get Group

```typescript
const group = await workos.directorySync.getGroup({
  directory: directory.id,
  group: group_id,
});
```

## SCIM Attributes Mapping

### Core User Attributes

| SCIM Attribute | Your App Field |
|----------------|----------------|
| userName | email |
| name.givenName | firstName |
| name.familyName | lastName |
| emails[0].value | email |
| active | isActive |
| id | workosUserId |

### Custom Attributes

Map custom SCIM attributes to your app fields:

```typescript
const customMapping = {
  'urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:department': 'department',
  'urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:employeeNumber': 'employeeId',
};
```

## Testing SCIM

### Test Mode

```typescript
const workos = new WorkOS(process.env.WORKOS_API_KEY, {
  apiHostname: 'api.workos.test',
});
```

### Manual Testing

Use WorkOS dashboard to test SCIM operations:
- Create test user in IdP
- Verify webhook received
- Check user created in your app

## Error Handling

```typescript
try {
  const directory = await workos.directorySync.createDirectory({
    organizationId: 'org_id',
    type: 'okta_saml',
    name: 'Okta Directory',
  });
} catch (error) {
  if (error instanceof WorkOSError) {
    switch (error.code) {
      case 'invalid_request':
        // Invalid parameters
        break;
      case 'unauthorized':
        // Invalid API key
        break;
      default:
        // Other errors
    }
  }
}
```

## Best Practices

- Implement idempotency for webhook handlers
- Use database transactions for user updates
- Log all SCIM operations
- Implement retry logic for failed webhooks
- Monitor SCIM sync status

## Next Steps

- อ่าน `key-concepts/scim.md` สำหรับ SCIM concepts
- อ่าน `guide/sso-implementation.md` สำหรับ SSO setup
- อ่าน `principles/best-practices.md` สำหรับ best practices
