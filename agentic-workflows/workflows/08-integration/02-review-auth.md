---
title: Review Authentication & Authorization
description: ตรวจสอบ authentication mechanisms, authorization patterns, session management, token handling และ security controls
auto_execution_mode: 3
file-patterns:
  - "**/workflows/08-integration/*-review-auth.md"
---

## Prerequisites

- เข้าใจ authentication protocols (OAuth 2.0, OIDC, SAML, JWT)
- รู้จัก authorization patterns (RBAC, ABAC, ACL)
- เข้าใจ session management และ token security
- รู้จัก security best practices (OWASP)

## 3.1 Precondition

- มี application ที่มี authentication/authorization
- มีสิทธิ์อ่าน/เขียนไฟล์ใน project directory
- เข้าใจ security requirements

## 3.2 Prepare

- รวบรวม auth flow diagrams
- ระบุ authentication providers/methods
- เตรียม checklist ตาม security best practices
- ทำความเข้าใจ compliance requirements

## 3.3 Execute

1. ตรวจสอบ authentication
   - Password policies (complexity, rotation)
   - Multi-factor authentication (MFA)
   - SSO integration (OAuth, SAML)
   - Social login implementations

2. ตรวจสอบ authorization
   - Role-based access control (RBAC)
   - Permission granularity
   - Resource-level authorization
   - Authorization middleware/filters

3. ตรวจสอบ token management
   - JWT structure และ claims
   - Token expiration และ refresh
   - Secure token storage
   - Token revocation

4. ตรวจสอบ session management
   - Session timeout configuration
   - Session fixation protection
   - Concurrent session handling
   - Secure session storage

5. ตรวจสอบ security headers
   - Content Security Policy (CSP)
   - CORS configuration
   - CSRF protection
   - Secure cookie flags

6. ตรวจสอบ credential handling
   - Password hashing (bcrypt, Argon2)
   - API key management
   - Secret rotation
   - Credential encryption

7. ตรวจสอบ audit logging
   - Authentication events logging
   - Authorization failures
   - Suspicious activity detection
   - Log retention policies

## 3.4 Validate

- [ ] Authentication มี MFA หรือ strong methods
- [ ] Authorization มี principle of least privilege
- [ ] Tokens มี appropriate expiration และ refresh
- [ ] Sessions secure และ properly managed
- [ ] Security headers configured
- [ ] Credentials ถูก hash/encrypt
- [ ] Audit logging comprehensive

## 3.5 Verify

- [ ] ยืนยันว่า auth flows ทำงานถูกต้อง
- [ ] ทดสอบ authorization bypass attempts
- [ ] ตรวจสอบ token expiration behavior
- [ ] ทดสอบ session timeout และ logout
