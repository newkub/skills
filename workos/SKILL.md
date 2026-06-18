---
title: WorkOS
description: Enterprise identity platform for SSO, SCIM, user management, and compliance
auto_execution_mode: 3
---

## Goal

ใช้ WorkOS สำหรับ enterprise identity platform ด้วย SSO, SCIM, user management, audit logs, และ compliance

## Scope

ใช้สำหรับ SSO (SAML/OIDC), SCIM, user management, directory sync, audit logs, organizations, MFA, passwordless authentication, AuthKit, Admin Portal, RBAC, FGA, Vault, Pipes, Feature Flags, Widgets, Domain Verification, Radar, Custom Metadata, Connect และ multi-tenant organization management

## Execute

### 1. Installation

ติดตั้ง WorkOS SDK ตามภาษาที่ใช้:
- Node.js: `bun install @workos-inc/node`
- Python: `pip install workos`
- Go: `go get github.com/workos/workos-go`
- Ruby: `gem install workos`
- PHP: `composer require workos/workos-php`

### 2. Setup

อ่าน `guide/getting-started.md` สำหรับการติดตั้งและ setup
ตั้งค่า API key และ client ID จาก WorkOS dashboard

### 3. Learn Core Concepts

อ่าน `key-concepts/sso.md` สำหรับ SSO concepts
อ่าน `key-concepts/scim.md` สำหรับ SCIM และ directory sync
อ่าน `key-concepts/user-management.md` สำหรับ user management
อ่าน `key-concepts/audit-logs.md` สำหรับ audit logs
อ่าน `key-concepts/authkit.md` สำหรับ AuthKit concepts
อ่าน `key-concepts/rbac.md` สำหรับ RBAC concepts
อ่าน `key-concepts/fga.md` สำหรับ FGA concepts
อ่าน `key-concepts/vault.md` สำหรับ Vault concepts
อ่าน `key-concepts/pipes.md` สำหรับ Pipes concepts
อ่าน `key-concepts/feature-flags.md` สำหรับ Feature Flags concepts
อ่าน `key-concepts/radar.md` สำหรับ Radar concepts

### 4. Configuration

อ่าน `references/configuration.md` สำหรับ configuration reference
ตั้งค่า environment variables: `WORKOS_API_KEY`, `WORKOS_CLIENT_ID`

### 5. Implement SSO

ใช้ SSO (SAML/OIDC) สำหรับ authentication
อ่าน `guide/sso-implementation.md` สำหรับ SSO implementation

### 6. Implement SCIM

ใช้ SCIM สำหรับ automated user provisioning
อ่าน `guide/scim-implementation.md` สำหรับ SCIM setup

### 7. User Management

ใช้ user management API สำหรับ CRUD operations
อ่าน `guide/user-management.md` สำหรับ user management

### 8. Audit Logs

ใช้ audit logs สำหรับ compliance (SOC 2, ISO 27001, HIPAA, GDPR)
อ่าน `guide/audit-logs.md` สำหรับ audit logs implementation

### 9. MFA and Passwordless

ใช้ MFA (TOTP, SMS) และ passwordless authentication (Magic Links)
อ่าน `guide/mfa-passwordless.md` สำหรับ MFA และ passwordless

### 10. Organizations

ใช้ organizations API สำหรับ multi-tenant management
อ่าน `guide/organizations.md` สำหรับ organization management

### 11. AuthKit

ใช้ AuthKit สำหรับ pre-built authentication UI components
อ่าน `guide/authkit.md` สำหรับ AuthKit implementation

### 12. Admin Portal

ใช้ Admin Portal สำหรับ self-serve onboarding สำหรับ IT admins
อ่าน `guide/admin-portal.md` สำหรับ Admin Portal setup

### 13. RBAC

ใช้ Role-Based Access Control สำหรับ manage user access
อ่าน `guide/rbac.md` สำหรับ RBAC implementation

### 14. FGA

ใช้ Fine-Grained Authorization สำหรับ authorization ที่ละเอียด
อ่าน `guide/fga.md` สำหรับ FGA setup

### 15. Vault

ใช้ Vault สำหรับ encrypt, store, และ control access ของ sensitive data
อ่าน `guide/vault.md` สำหรับ Vault implementation

### 16. Pipes

ใช้ Pipes สำหรับ connect third-party accounts
อ่าน `guide/pipes.md` สำหรับ Pipes integration

### 17. Feature Flags

ใช้ Feature Flags สำหรับ control rollout ของ features
อ่าน `guide/feature-flags.md` สำหรับ feature flags setup

### 18. Widgets

ใช้ Widgets สำหรับ common enterprise app workflows
อ่าน `guide/widgets.md` สำหรับ Widgets implementation

### 19. Domain Verification

ใช้ Domain Verification สำหรับ domain ownership verification
อ่าน `guide/domain-verification.md` สำหรับ domain verification

### 20. Radar

ใช้ Radar สำหรับ protect จาก bots, fraud, และ abuse
อ่าน `guide/radar.md` สำหรับ Radar setup

### 21. Custom Metadata

ใช้ Custom Metadata สำหรับ store additional user และ organization data
อ่าน `guide/custom-metadata.md` สำหรับ custom metadata

### 22. Connect

ใช้ Connect สำหรับ MCP และ OAuth applications
อ่าน `guide/connect.md` สำหรับ Connect integration

### 23. Webhooks

ใช้ webhooks สำหรับ real-time events
อ่าน `guide/webhooks.md` สำหรับ webhook integration

### 24. Best Practices

อ่าน `principles/best-practices.md` สำหรับ best practices
อ่าน `principles/security.md` สำหรับ security guidelines

## Rules

- ใช้ SDK ที่เหมาะสมกับภาษาที่ใช้ (Node.js, Python, Go, Ruby, PHP)
- ใช้ backticks สำหรับ API endpoints, commands, file paths
- ใช้ code blocks สำหรับ examples และ configuration
- ใช้ SSO สำหรับ authentication และ authorization
- ใช้ SCIM สำหรับ automated user provisioning และ deprovisioning
- ใช้ audit logs สำหรับ compliance (SOC 2, ISO 27001, HIPAA, GDPR)
- ใช้ webhooks สำหรับ real-time event handling
- ใช้ organizations API สำหรับ multi-tenant architecture
- ตั้งค่า environment variables สำหรับ API key และ client ID
- ใช้ AuthKit สำหรับ pre-built authentication UI components
- ใช้ Admin Portal สำหรับ self-serve onboarding
- ใช้ RBAC สำหรับ role-based access control
- ใช้ FGA สำหรับ fine-grained authorization
- ใช้ Vault สำหรับ sensitive data encryption
- ใช้ Pipes สำหรับ third-party account connections
- ใช้ Feature Flags สำหรับ feature rollout control
- ใช้ Widgets สำหรับ enterprise workflows
- ใช้ Domain Verification สำหรับ domain ownership
- ใช้ Radar สำหรับ fraud protection
- ใช้ Custom Metadata สำหรับ additional data storage
- ใช้ Connect สำหรับ MCP และ OAuth integrations

## Expected Outcome

- SSO ที่ configured อย่างถูกต้อง (SAML/OIDC)
- SCIM ที่ automated สำหรับ user provisioning
- User management ที่ comprehensive ด้วย multiple authentication methods
- Audit logs ที่ comprehensive สำหรับ compliance
- Multi-tenant organization management ที่ scalable
- AuthKit ที่ integrated สำหรับ authentication UI
- Admin Portal ที่ configured สำหรับ self-serve onboarding
- RBAC ที่ implemented สำหรับ role-based access control
- FGA ที่ configured สำหรับ fine-grained authorization
- Vault ที่ setup สำหรับ sensitive data protection
- Pipes ที่ integrated สำหรับ third-party connections
- Feature Flags ที่ configured สำหรับ feature rollout
- Widgets ที่ implemented สำหรับ enterprise workflows
- Domain Verification ที่ enabled สำหรับ domain ownership
- Radar ที่ configured สำหรับ fraud protection
- Custom Metadata ที่ configured สำหรับ additional data
- Connect ที่ integrated สำหรับ MCP และ OAuth
