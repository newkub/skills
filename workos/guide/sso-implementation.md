# SSO Implementation

## Overview

Implement SSO (Single Sign-On) with WorkOS สำหรับ enterprise authentication

## SSO Flow

```
1. User clicks "Sign in with SSO"
2. App generates authorization URL
3. User redirected to IdP (Okta, Microsoft, etc.)
4. User authenticates at IdP
5. IdP redirects back with authorization code
6. App exchanges code for user profile
7. App creates session
```

## Step 1: Generate Authorization URL

```typescript
import WorkOS from '@workos-inc/node';

const workos = new WorkOS(process.env.WORKOS_API_KEY);

const authUrl = workos.sso.getAuthorizationURL({
  clientId: process.env.WORKOS_CLIENT_ID,
  redirectUri: 'https://yourapp.com/sso/callback',
  domain: 'acme.com', // Optional: for domain-based SSO
  state: crypto.randomBytes(16).toString('hex'), // CSRF protection
});
```

## Step 2: Redirect User

```typescript
res.redirect(authUrl);
```

## Step 3: Handle Callback

```typescript
app.get('/sso/callback', async (req, res) => {
  const { code, state } = req.query;
  
  // Validate state to prevent CSRF
  if (state !== session.get('sso_state')) {
    return res.status(400).send('Invalid state');
  }
  
  try {
    // Exchange code for user profile
    const { profile, organizationId } = await workos.sso.getProfileAndToken({
      code,
      clientId: process.env.WORKOS_CLIENT_ID,
    });
    
    // Create or update user
    const user = await upsertUser(profile);
    
    // Create session
    await createSession(user, organizationId);
    
    // Redirect to dashboard
    res.redirect('/dashboard');
  } catch (error) {
    console.error('SSO error:', error);
    res.status(500).send('Authentication failed');
  }
});
```

## Domain-Based SSO

สำหรับ automatic SSO detection based on email domain:

```typescript
app.get('/sso', async (req, res) => {
  const { email } = req.query;
  const domain = email.split('@')[1];
  
  try {
    const connection = await workos.sso.listConnections({
      domain,
    });
    
    if (connection.data.length > 0) {
      // Auto-redirect to SSO
      const authUrl = workos.sso.getAuthorizationURL({
        clientId: process.env.WORKOS_CLIENT_ID,
        redirectUri: 'https://yourapp.com/sso/callback',
        domain,
        state: crypto.randomBytes(16).toString('hex'),
      });
      res.redirect(authUrl);
    } else {
      // No SSO configured, show regular login
      res.render('login');
    }
  } catch (error) {
    res.render('login');
  }
});
```

## Connection Management

### Create SAML Connection

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

### Create OIDC Connection

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

### List Connections

```typescript
const connections = await workos.sso.listConnections({
  organizationId: 'org_id',
});
```

### Delete Connection

```typescript
await workos.sso.deleteConnection('connection_id');
```

## PKCE for Mobile/SPA

สำหรับ mobile apps และ SPAs:

```typescript
const codeVerifier = crypto.randomBytes(32).toString('base64url');
const codeChallenge = crypto
  .createHash('sha256')
  .update(codeVerifier)
  .digest('base64url');

// Store codeVerifier in session
session.set('code_verifier', codeVerifier);

const authUrl = workos.sso.getAuthorizationURL({
  clientId: process.env.WORKOS_CLIENT_ID,
  redirectUri: 'https://yourapp.com/sso/callback',
  codeChallenge,
  codeChallengeMethod: 'S256',
  state: crypto.randomBytes(16).toString('hex'),
});

// In callback
const { profile } = await workos.sso.getProfileAndToken({
  code,
  clientId: process.env.WORKOS_CLIENT_ID,
  codeVerifier: session.get('code_verifier'),
});
```

## Error Handling

```typescript
try {
  const { profile } = await workos.sso.getProfileAndToken({
    code,
    clientId: process.env.WORKOS_CLIENT_ID,
  });
} catch (error) {
  if (error instanceof WorkOSError) {
    switch (error.code) {
      case 'invalid_grant':
        // Invalid or expired code
        break;
      case 'invalid_client':
        // Invalid client ID
        break;
      default:
        // Other errors
    }
  }
}
```

## Testing

Use WorkOS test mode for development:

```typescript
const workos = new WorkOS(process.env.WORKOS_API_KEY, {
  apiHostname: 'api.workos.test',
});
```

## Next Steps

- อ่าน `key-concepts/sso.md` สำหรับ SSO concepts
- อ่าน `guide/scim-implementation.md` สำหรับ SCIM setup
- อ่าน `principles/security.md` สำหรับ security guidelines
