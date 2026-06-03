# lib-workos

แนวทางการใช้งาน WorkOS - Enterprise identity platform สำหรับ SSO, SAML, directory sync และ audit logs

## Overview

WorkOS เป็น platform สำหรับสร้าง enterprise applications ที่รองรับ SSO (SAML/OIDC), Directory Sync, Audit Logs, และ Admin Portal ช่วยให้ developers สามารถเพิ่ม enterprise features ได้อย่างง่ายดาย

## File Structure

```text
lib-workos/
├── SKILL.md
├── guide/
│   ├── key-concept.md
│   ├── how-it-works.md
│   ├── features.md
│   ├── installation.md
│   ├── configuration.md
│   ├── quick-start.md
│   └── best-practices.md
└── references/
    ├── cli.md
    ├── configuration.md
    └── api.md
```

## Content Summary

| Folder | File | Description |
|--------|------|-------------|
| **Guide** | key-concept.md | แนวคิดหลัก - SSO, Directory Sync, Audit Logs |
| **Guide** | how-it-works.md | สถาปัตยกรรม - SDK, OAuth, Webhooks |
| **Guide** | features.md | ฟีเจอร์ทั้งหมด - SSO, Magic Link, MFA |
| **Guide** | installation.md | การติดตั้ง - npm, environment setup |
| **Guide** | configuration.md | การตั้งค่า - Environment variables, SDK |
| **Guide** | quick-start.md | เริ่มต้นใช้งานอย่างรวดเร็ว |
| **Guide** | best-practices.md | แนวทางปฏิบัติที่ดี - Security, Error handling |
| **Reference** | cli.md | CLI commands - Framework integration |
| **Reference** | configuration.md | Configuration options - SDK config |
| **Reference** | [api.md](references/api.md) | Programmatic API - Node.js SDK |

## Quick Start

```bash
# Install SDK
npm install @workos-inc/node

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