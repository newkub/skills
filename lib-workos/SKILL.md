---
name: lib-workos
description: Enterprise identity platform สำหรับ SSO, SAML, directory sync, audit logs และ admin portal
---

## When to use

- เมื่อต้องการ SSO (SAML/OIDC) สำหรับ enterprise
- เมื่อต้องการ directory sync กับ identity providers
- เมื่อต้องการ audit logs สำหรับ compliance
- เมื่อต้องการ multi-tenant organization management

## Skills Related

- `/lang-typescript` - TypeScript programming language
- `/lang-javascript` - JavaScript programming language

## หมวดหมู่ไฟล์

| Folder | File | Description |
|--------|------|-------------|
| **Guide** | key-concept.md | แนวคิดหลัก - SSO, Directory Sync, Audit Logs |
| **Guide** | how-it-works.md | สถาปัตยกรรม - SDK, OAuth, Webhooks |
| **Guide** | features.md | ฟีเจอร์ทั้งหมด - SSO, Magic Link, MFA |
| **Guide** | installation.md | การติดตั้ง - npm, environment setup |
| **Guide** | configuration.md | การตั้งค่า - Environment variables, SDK |
| **Guide** | quick-start.md | เริ่มต้นใช้งานอย่างรวดเร็ว |
| **Guide** | best-practices.md | แนวทางปฏิบัติที่ดี - Security, Error handling |
| **Guide** | integration.md | การเชื่อมต่อกับ frameworks และ systems |
| **Guide** | architecture.md | สถาปัตยกรรมระบบ WorkOS |
| **Reference** | website.md | Official website และ documentation |
| **Reference** | api.md | Programmatic API - Node.js SDK |
| **Reference** | configuration.md | Configuration options - SDK config |

## Quick Start

```bash
# Install SDK
bun add @workos-inc/node

# Configure environment
WORKOS_API_KEY=sk_xxxxxxxx
WORKOS_CLIENT_ID=client_xxxxxx
```

## Key Features

| Feature | Description |
|---------|-------------|
| **SSO (SAML/OIDC)** | Single sign-on with identity providers |
| **Directory Sync** | Sync users and groups from IdP |
| **Audit Logs** | Track user actions for compliance |
| **Organizations** | Multi-tenant organization management |
| **Admin Portal** | Built-in admin dashboard |
| **Webhooks** | Real-time event notifications |

## Usage Order

1. **Start**: `guide/installation.md` → `guide/quick-start.md`
2. **Learn**: `guide/key-concept.md` → `guide/how-it-works.md` → `guide/features.md`
3. **Configure**: `guide/configuration.md`
4. **Reference**: `references/cli.md` → `references/api.md`
5. **Best Practices**: `guide/best-practices.md`