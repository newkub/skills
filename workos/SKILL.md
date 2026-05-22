---
name: workos
description: WorkOS platform for authentication, authorization, and identity management. Use for AuthKit, SSO, Directory Sync, RBAC, FGA, MFA, Vault, Audit Logs, Admin Portal, and migrations.
---

# WorkOS

Authentication, authorization, and identity management platform for modern applications.

## When to Use

- Implementing authentication and authorization
- Setting up Single Sign-On (SSO)
- Directory Sync and user management
- Role-Based Access Control (RBAC)
- Fine-Grained Authorization (FGA)
- Audit logging and compliance
- Multi-Factor Authentication (MFA)
- Migrating from Auth0, Clerk, Firebase, etc.

## Summary Table

| Category | File | Purpose |
|---|---|---|
| **Guide** | [Getting Started](guide/getting-started.md) | Installation, API keys, first integration |
| **Guide** | [AuthKit](guide/authkit.md) | Framework-specific AuthKit setup |
| **Guide** | [Features](guide/features.md) | SSO, MFA, Directory Sync, RBAC |
| **Reference** | [API Reference](reference/api.md) | API endpoints and schemas |
| **Reference** | [Migrations](reference/migrations.md) | Migration guides from other providers |
| **Examples** | [Next.js Integration](examples/nextjs.md) | AuthKit in Next.js application |

## Quick Start

```bash
# Install WorkOS SDK
npm install @workos-inc/node

# Initialize project
npx workos init
```

## Core Features

- **AuthKit**: Pre-built authentication components
- **SSO**: Enterprise single sign-on
- **Directory Sync**: SCIM-based user synchronization
- **RBAC**: Role-based access control
- **FGA**: Fine-grained authorization
- **MFA**: Multi-factor authentication
- **Audit Logs**: Compliance and security logging

## Important Notes

- Never invent CLI commands without verification
- Never invent Dashboard click-paths
- Prefer docs URLs over prose in recipes
- Use the `workos-widgets` skill for widget requests

## References

- [WorkOS Documentation](https://workos.com/docs)
- [GitHub Repository](https://github.com/workos-inc/workos-node)
