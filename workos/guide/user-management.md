# User Management

## Overview

Implement user management with WorkOS User Management API สำหรับ comprehensive user lifecycle

## Authentication Methods

### Password Authentication

```typescript
const response = await workos.userManagement.authenticateWithPassword({
  email: 'user@example.com',
  password: 'password123',
});

const { user, accessToken, refreshToken } = response;
```

### Magic Link (Passwordless)

```typescript
// Create session
const session = await workos.passwordless.createSession({
  email: 'user@example.com',
});

// Send magic link via email
await workos.passwordless.sendSession(session);

// Verify magic link
const response = await workos.userManagement.authenticateWithMagicAuth({
  code: '123456',
  email: 'user@example.com',
});
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
// Enroll TOTP factor
const enrollment = await workos.mfa.enrollFactor({
  type: 'totp',
  organizationId: 'org_id',
});

// Challenge factor
const challenge = await workos.mfa.challengeFactor({
  authenticationFactorId: enrollment.id,
  organizationId: 'org_id',
});

// Verify challenge
const response = await workos.userManagement.authenticateWithTotp({
  code: '123456',
  authenticationChallengeId: challenge.id,
  pendingAuthenticationToken: 'token',
});
```

### Refresh Token

```typescript
const response = await workos.userManagement.authenticateWithRefreshToken({
  refreshToken: 'refresh_token',
});
```

## User CRUD Operations

### Create User

```typescript
const user = await workos.userManagement.createUser({
  email: 'user@example.com',
  password: 'password123',
  firstName: 'John',
  lastName: 'Doe',
  emailVerified: true,
});
```

### Get User

```typescript
const user = await workos.userManagement.getUser('user_id');
```

### List Users

```typescript
const users = await workos.userManagement.listUsers({
  limit: 100,
  cursor: 'next_cursor',
});
```

### Update User

```typescript
const user = await workos.userManagement.updateUser('user_id', {
  firstName: 'Jane',
  lastName: 'Smith',
});
```

### Delete User

```typescript
await workos.userManagement.deleteUser('user_id');
```

## User Invitations

### Send Invitation

```typescript
const invitation = await workos.userManagement.sendInvitation({
  email: 'user@example.com',
});

// Invitation URL: invitation.url
```

### List Invitations

```typescript
const invitations = await workos.userManagement.listInvitations({
  limit: 100,
});
```

### Revoke Invitation

```typescript
await workos.userManagement.revokeInvitation('invitation_id');
```

## Password Reset

### Send Password Reset Email

```typescript
await workos.userManagement.sendPasswordResetEmail({
  email: 'user@example.com',
});
```

### Reset Password

```typescript
await workos.userManagement.resetPassword({
  token: 'reset_token',
  newPassword: 'new_password123',
});
```

## Session Management

### Session Tokens

```typescript
const { accessToken, refreshToken } = await workos.userManagement.authenticateWithPassword({
  email: 'user@example.com',
  password: 'password123',
});

// Access token: 15 minutes
// Refresh token: 30 days
```

### Refresh Session

```typescript
const response = await workos.userManagement.authenticateWithRefreshToken({
  refreshToken: 'refresh_token',
});
```

### Revoke Session

```typescript
await workos.userManagement.revokeSession('session_id');
```

## Organization Selection

สำหรับ users ที่มีหลาย organizations:

```typescript
const response = await workos.userManagement.authenticateWithOrganizationSelection({
  organizationId: 'org_id',
  pendingAuthenticationToken: 'token',
});
```

## User Sessions

### List Sessions

```typescript
const sessions = await workos.userManagement.listSessions('user_id');
```

### Revoke All Sessions

```typescript
await workos.userManagement.revokeAllSessions('user_id');
```

## Error Handling

```typescript
try {
  const user = await workos.userManagement.createUser({
    email: 'user@example.com',
    password: 'password123',
  });
} catch (error) {
  if (error instanceof WorkOSError) {
    switch (error.code) {
      case 'user_already_exists':
        // User already exists
        break;
      case 'invalid_password':
        // Password too weak
        break;
      case 'invalid_email':
        // Invalid email format
        break;
      default:
        // Other errors
    }
  }
}
```

## Best Practices

- Hash passwords with bcrypt
- Enforce strong password policies
- Use short-lived access tokens
- Implement session timeout
- Log authentication attempts
- Use rate limiting for auth endpoints

## Next Steps

- อ่าน `key-concepts/user-management.md` สำหรับ user management concepts
- อ่าน `guide/mfa-passwordless.md` สำหรับ MFA และ passwordless
- อ่าน `principles/security.md` สำหรับ security guidelines
