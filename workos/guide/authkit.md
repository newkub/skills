## AuthKit Implementation

AuthKit เป็น pre-built authentication UI components จาก WorkOS ที่ช่วยลดเวลาในการ implement authentication

## Features

- Hosted UI ที่ customizable
- Enterprise auth (SSO, passkeys, social sign-in, passwords)
- Roles and Permissions (RBAC)
- Radar (fraud protection)
- Custom Metadata
- Connect (MCP และ OAuth)

## Installation

ติดตั้ง AuthKit สำหรับ framework ที่ใช้:

```bash
# React
bun install @workos-inc/authkit-react

# Next.js
bun install @workos-inc/authkit-nextjs
```

## Setup

ตั้งค่า AuthKit ใน application:

```typescript
import { AuthKit } from '@workos-inc/authkit-react';

<AuthKit
  clientId="your_client_id"
  redirectUri="https://your-app.com/callback"
>
  <YourApp />
</AuthKit>
```

## Configuration

ตั้งค่า options สำหรับ AuthKit:

- `clientId`: WorkOS client ID
- `redirectUri`: URI สำหรับ redirect หลัง authentication
- `organization`: Organization ID (optional)
- `provider`: Provider สำหรับ SSO (optional)

## Usage

ใช้ AuthKit components ใน application:

```typescript
import { useAuth } from '@workos-inc/authkit-react';

function LoginPage() {
  const { user, signIn, signOut } = useAuth();

  return (
    <button onClick={() => signIn()}>
      Sign In with WorkOS
    </button>
  );
}
```

## Best Practices

- ใช้ environment variables สำหรับ client ID
- ตั้งค่า redirect URI อย่างถูกต้องใน WorkOS dashboard
- ใช้ PKCE สำหรับ public clients
- Configure allowed domains สำหรับ security
