# MFA and Passwordless Authentication

## Overview

Implement MFA (Multi-Factor Authentication) และ passwordless authentication สำหรับ enhanced security

## MFA (Multi-Factor Authentication)

### TOTP (Time-based One-Time Password)

#### Enroll TOTP Factor

```typescript
const enrollment = await workos.mfa.enrollFactor({
  type: 'totp',
  organizationId: 'org_id',
});

// Display QR code to user
// enrollment.totp_secret
// enrollment.totp_uri
```

#### Challenge TOTP Factor

```typescript
const challenge = await workos.mfa.challengeFactor({
  authenticationFactorId: enrollment.id,
  organizationId: 'org_id',
});

// challenge.id - authentication challenge ID
```

#### Verify TOTP Challenge

```typescript
const response = await workos.userManagement.authenticateWithTotp({
  code: '123456',
  authenticationChallengeId: challenge.id,
  pendingAuthenticationToken: 'token',
});
```

### SMS MFA

#### Enroll SMS Factor

```typescript
const enrollment = await workos.mfa.enrollFactor({
  type: 'sms',
  organizationId: 'org_id',
  phoneNumber: '+1234567890',
});
```

#### Challenge SMS Factor

```typescript
const challenge = await workos.mfa.challengeFactor({
  authenticationFactorId: enrollment.id,
  organizationId: 'org_id',
});
```

#### Verify SMS Challenge

```typescript
const response = await workos.userManagement.authenticateWithSms({
  code: '123456',
  authenticationChallengeId: challenge.id,
  pendingAuthenticationToken: 'token',
});
```

### List Factors

```typescript
const factors = await workos.mfa.listFactors({
  organizationId: 'org_id',
});
```

### Delete Factor

```typescript
await workos.mfa.deleteFactor({
  authenticationFactorId: 'factor_id',
  organizationId: 'org_id',
});
```

## Passwordless Authentication

### Magic Link (Email)

#### Create Session

```typescript
const session = await workos.passwordless.createSession({
  email: 'user@example.com',
});

// session.id - session ID
// session.link - magic link URL
```

#### Send Session

```typescript
await workos.passwordless.sendSession(session);
```

#### Verify Magic Link

```typescript
const response = await workos.userManagement.authenticateWithMagicAuth({
  code: '123456',
  email: 'user@example.com',
});
```

### Email Verification

#### Send Verification Email

```typescript
await workos.userManagement.sendVerificationEmail({
  email: 'user@example.com',
});
```

#### Verify Email

```typescript
const response = await workos.userManagement.authenticateWithEmailVerification({
  code: '123456',
  pendingAuthenticationToken: 'token',
});
```

## Passkeys (WebAuthn)

### Register Passkey

```typescript
const registrationOptions = await workos.userManagement.getPasskeyRegistrationOptions({
  email: 'user@example.com',
});

// Use registrationOptions with WebAuthn API
const credential = await navigator.credentials.create({
  publicKey: registrationOptions,
});

const verification = await workos.userManagement.verifyPasskeyRegistration({
  email: 'user@example.com',
  registrationResponse: credential,
});
```

### Authenticate with Passkey

```typescript
const authenticationOptions = await workos.userManagement.getPasskeyAuthenticationOptions({
  email: 'user@example.com',
});

// Use authenticationOptions with WebAuthn API
const credential = await navigator.credentials.get({
  publicKey: authenticationOptions,
});

const response = await workos.userManagement.verifyPasskeyAuthentication({
  email: 'user@example.com',
  authenticationResponse: credential,
});
```

## Authentication Flow with MFA

### Step 1: Initial Authentication

```typescript
const response = await workos.userManagement.authenticateWithPassword({
  email: 'user@example.com',
  password: 'password123',
});

// If MFA required
if (response.pendingAuthenticationToken) {
  // Store token for MFA step
  session.set('pending_token', response.pendingAuthenticationToken);
  
  // Redirect to MFA challenge
  res.redirect('/mfa/challenge');
}
```

### Step 2: MFA Challenge

```typescript
const challenge = await workos.mfa.challengeFactor({
  authenticationFactorId: factorId,
  organizationId: 'org_id',
});

session.set('challenge_id', challenge.id);
```

### Step 3: Verify MFA

```typescript
const response = await workos.userManagement.authenticateWithTotp({
  code: '123456',
  authenticationChallengeId: session.get('challenge_id'),
  pendingAuthenticationToken: session.get('pending_token'),
});

// Create session
await createSession(response.user);
```

## Passwordless Flow

### Step 1: Request Magic Link

```typescript
const session = await workos.passwordless.createSession({
  email: 'user@example.com',
});

await workos.passwordless.sendSession(session);

res.render('magic-link-sent', { email: 'user@example.com' });
```

### Step 2: Verify Magic Link

```typescript
const { code, email } = req.query;

const response = await workos.userManagement.authenticateWithMagicAuth({
  code,
  email,
});

// Create session
await createSession(response.user);

res.redirect('/dashboard');
```

## Best Practices

### MFA

- Require MFA for sensitive operations
- Support multiple MFA methods (TOTP, SMS)
- Implement MFA backup codes
- Allow MFA reset with verification
- Log MFA enrollment and challenges

### Passwordless

- Use time-limited magic links (15 minutes)
- Implement rate limiting for magic link requests
- Log all passwordless authentication attempts
- Provide fallback authentication methods
- Use secure email delivery

### Security

- Validate all authentication codes
- Implement rate limiting
- Use short-lived tokens
- Log all authentication events
- Monitor for suspicious patterns

## Error Handling

```typescript
try {
  const enrollment = await workos.mfa.enrollFactor({
    type: 'totp',
    organizationId: 'org_id',
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

## Next Steps

- อ่าน `key-concepts/user-management.md` สำหรับ user management concepts
- อ่าน `principles/security.md` สำหรับ security guidelines
- อ่าน `guide/sso-implementation.md` สำหรับ SSO implementation
