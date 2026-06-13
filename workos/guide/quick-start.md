# Quick Start

Get started with WorkOS in minutes

## Step 1: Install SDK

```bash
bun add @workos-inc/node
```

## Step 2: Configure Environment

```bash
# .env
WORKOS_API_KEY=sk_xxxxxxxxxxxxxxxxxxxxxxxx
WORKOS_CLIENT_ID=client_xxxxxxxxxxxxxxxxxxxxxxxx
WORKOS_REDIRECT_URI=http://localhost:3000/callback
```

## Step 3: Create Authentication Flow

```typescript
import WorkOS from '@workos-inc/node';

const workos = new WorkOS(process.env.WORKOS_API_KEY);

// Get authorization URL
const { url } = workos.sso.getAuthorizationUrl({
  clientId: process.env.WORKOS_CLIENT_ID,
  redirectUri: process.env.WORKOS_REDIRECT_URI,
  state: 'random-state-string',
});

res.redirect(url);
```

## Step 4: Handle Callback

```typescript
const { type, data } = await workos.sso.getProfileAndToken(
  code,
  process.env.WORKOS_CLIENT_ID,
  process.env.WORKOS_CLIENT_SECRET
);

// data contains user profile
console.log(data.profile);
```

## Step 5: Verify Organization

```typescript
const organization = await workos.organizations.getOrganization(data.profile.organization);

// Check if user belongs to allowed organization
if (organization.id === expectedOrgId) {
  // Grant access
}
```

## Next Steps

- Read [key-concept.md](key-concept.md) for core concepts
- Read [configuration.md](configuration.md) for setup options
- Check [best-practices.md](best-practices.md) for recommendations