---
title: Review Authentication
description: ตรวจสอบ authentication systems, identity management, auth flows, และ security
auto_execution_mode: 3
file-patterns:
  - "**/workflows/03-quality/*-review-auth.md"
---

## Prerequisites

- เข้าใจ authentication concepts (OAuth 2.0, OpenID Connect, SAML)
- รู้จัก authentication patterns (JWT, session-based, token-based)
- เข้าใจ security best practices สำหรับ authentication
- รู้จัก MFA/2FA implementation

## 3.1 Precondition

- มี authentication system หรือ code
- มี user management หรือ identity provider integration
- มีสิทธิ์อ่าน/เขียนไฟล์ใน project directory

## 3.2 Prepare

- อ่าน authentication implementation
- ระบุ auth mechanisms ที่ใช้
- เตรียม checklist ตาม authentication best practices
- ทำความเข้าใจ user flows

## 3.3 Execute

1. ตรวจสอบ password policies
   - Minimum length และ complexity
   - Password hashing (bcrypt, Argon2)
   - Salt usage
   - ไม่มี plaintext password storage

2. ตรวจสอบ session/token management
   - JWT structure (header, payload, signature)
   - Token expiration
   - Refresh token rotation
   - Session timeout
   - Secure cookie settings

3. ตรวจสอบ OAuth/OpenID Connect
   - OAuth 2.0 flows (Authorization Code, PKCE)
   - Scope limitations
   - State parameter (CSRF protection)
   - PKCE for mobile/SPA

4. ตรวจสอบ MFA/2FA
   - TOTP (Time-based One-Time Password)
   - WebAuthn/FIDO2
   - SMS/Email 2FA (backup only)
   - Recovery codes

5. ตรวจสอบ social login
   - OAuth providers (Google, GitHub, etc.)
   - Account linking
   - Data privacy

6. ตรวจสอบ password reset
   - Secure token generation
   - Token expiration
   - Email delivery
   - Rate limiting

7. ตรวจสอบ account security
   - Account lockout after failed attempts
   - Rate limiting บน auth endpoints
   - Suspicious activity detection
   - Audit logging

8. ตรวจสอบ transport security
   - HTTPS enforcement
   - Secure cookies (HttpOnly, Secure, SameSite)
   - HSTS headers
   - Token storage (ไม่ใน localStorage สำหรับ sensitive)

## 3.4 Validate

- [ ] Password hashing ใช้ modern algorithms
- [ ] JWT มี proper signature และ expiration
- [ ] Refresh tokens rotate
- [ ] OAuth flows ใช้ PKCE สำหรับ public clients
- [ ] MFA available (TOTP หรือ WebAuthn)
- [ ] Secure password reset flow
- [ ] Rate limiting บน auth endpoints
- [ ] Audit logging ครอบคลุม auth events

## 3.5 Verify

- [ ] Login flow ทำงานได้
- [ ] Token refresh ทำงานถูกต้อง
- [ ] MFA enrollment และ verification ทำงาน
- [ ] Password reset flow ทดสอบได้
- [ ] Logout invalidate sessions/tokens
