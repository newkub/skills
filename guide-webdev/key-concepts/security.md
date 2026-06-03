# Security

## Overview

แนวทางการรักษาความปลอดภัยสำหรับ web applications

## Common Threats

| Threat | Description | Prevention |
|--------|-------------|------------|
| **XSS** | Inject malicious scripts | Sanitize input |
| **CSRF** | Unauthorized actions | CSRF tokens |
| **SQL Injection** | Database manipulation | Parameterized queries |
| **Clickjacking** | Hidden overlays | X-Frame-Options |
| **Data Exposure** | Leaking sensitive data | Encryption |

## Security Headers

| Header | Value | Purpose |
|--------|-------|---------|
| **Content-Security-Policy** | Script-src 'self' | Prevent XSS |
| **X-Content-Type-Options** | nosniff | Prevent MIME sniffing |
| **X-Frame-Options** | DENY/SAMEORIGIN | Prevent clickjacking |
| **Strict-Transport-Security** | max-age=31536000 | Enforce HTTPS |
| **X-XSS-Protection** | 1; mode=block | Legacy browser protection |

## Implementation

### 1. Input Validation

```typescript
// Server-side validation
import { z } from 'zod'

const UserSchema = z.object({
  email: z.string().email(),
  age: z.number().min(13).max(120),
  name: z.string().min(1).max(100),
})

// Validate on every request
function createUser(data: unknown) {
  const validated = UserSchema.parse(data)
  // Proceed with validated data
}
```

### 2. Authentication Best Practices

| Practice | Implementation |
|----------|---------------|
| **Password Storage** | bcrypt, Argon2 |
| **Session** | httpOnly, Secure, SameSite |
| **JWT** | Short expiry, refresh tokens |
| **2FA** | TOTP, SMS (backup) |

### 3. API Security

```typescript
// Rate limiting
const rateLimit = {
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per window
}

// CORS configuration
const corsOptions = {
  origin: process.env.ALLOWED_ORIGINS,
  credentials: true,
  methods: ['GET', 'POST'],
}
```

### 4. Secrets Management

| Secret Type | Storage |
|------------|---------|
| **API Keys** | Environment variables |
| **Database** | Vault, secrets manager |
| **JWT Secret** | Rotate, strong key |
| **Encryption Keys** | HSM, cloud KMS |

## Summary

| Category | Practice |
|----------|----------|
| **Headers** | CSP, HSTS, X-Frame-Options |
| **Input** | Server-side validation |
| **Auth** | Hash passwords, secure sessions |
| **API** | Rate limiting, CORS |
| **Secrets** | Never in code, use vault |
