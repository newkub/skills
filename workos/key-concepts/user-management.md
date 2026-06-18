# User Management

## Overview

WorkOS User Management API ให้ comprehensive user lifecycle management ด้วย multiple authentication methods

## Authentication Methods

### Password-based Authentication

```typescript
const response = await workos.userManagement.authenticateWithPassword({
  email: 'user@example.com',
  password: 'password123',
});
```

### OAuth/SSO Code Exchange

```typescript
const response = await workos.userManagement.authenticateWithCode({
  code: 'authorization_code',
});
```

### Magic Link (Passwordless)

```typescript
const session = await workos.passwordless.createSession({
  email: 'user@example.com',
});

await workos.passwordless.sendSession(session);
```

### Email Verification

```typescript
const response = await workos.userManagement.authenticateWithEmailVerification({
  code: '123456',
  pendingAuthenticationToken: 'token',
});
```

### MFA (TOTP)

```typescript
const response = await workos.userManagement.authenticateWithTotp({
  code: '123456',
  authenticationChallengeId: 'challenge_id',
  pendingAuthenticationToken: 'token',
});
```

### Passkeys

- WebAuthn-based authentication
- Biometric or device-based
- Passwordless experience

## User CRUD Operations

### Create User

```typescript
const user = await workos.userManagement.createUser({
  email: 'user@example.com',
  password: 'password123',
  firstName: 'John',
  lastName: 'Doe',
});
```

### Get User

```typescript
const user = await workos.userManagement.getUser('user_id');
```

### Update User

```typescript
const user = await workos.userManagement.updateUser('user_id', {
  firstName: 'Jane',
});
```

### Delete User

```typescript
await workos.userManagement.deleteUser('user_id');
```

## User Invitations

```typescript
const invitation = await workos.userManagement.sendInvitation({
  email: 'user@example.com',
});
```

## Password Reset

```typescript
await workos.userManagement.sendPasswordResetEmail({
  email: 'user@example.com',
});
```

## Session Management

### Refresh Token

```typescript
const response = await workos.userManagement.authenticateWithRefreshToken({
  refreshToken: 'refresh_token',
});
```

### Session Tokens

- Access tokens: Short-lived (15 minutes)
- Refresh tokens: Long-lived (30 days)
- Secure storage required

## Organization Selection

สำหรับ users ที่มีหลาย organizations:

```typescript
const response = await workos.userManagement.authenticateWithOrganizationSelection({
  organizationId: 'org_id',
  pendingAuthenticationToken: 'token',
});
```

## Security Best Practices

- Hash passwords with bcrypt
- Use HTTPS for all requests
- Implement rate limiting
- Validate email formats
- Enforce password complexity
- Log authentication attempts

## Related Concepts

- SSO: Enterprise authentication
- MFA: Multi-factor authentication
- Organizations: Multi-tenant management
