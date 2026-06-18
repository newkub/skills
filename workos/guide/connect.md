## Connect Integration

Connect สำหรับ built-in support สำหรับ MCP และ OAuth applications

## Features

- MCP (Model Context Protocol) support
- OAuth 2.0 integrations
- Token management
- Application discovery

## Setup

Configure Connect ใน WorkOS dashboard:

1. ไปที่ Connect section
2. Add application
3. Configure OAuth settings
4. Setup MCP endpoints

## OAuth Integration

สร้าง OAuth application:

```typescript
import { WorkOS } from '@workos-inc/node';

const workos = new WorkOS({
  apiKey: process.env.WORKOS_API_KEY,
});

const app = await workos.connect.createOAuthApp({
  name: 'My App',
  redirectUri: 'https://your-app.com/callback',
  scopes: ['read', 'write'],
});
```

## MCP Integration

Setup MCP endpoint:

```typescript
const mcp = await workos.connect.createMCPConnection({
  endpoint: 'https://your-mcp-server.com',
  capabilities: ['tools', 'resources'],
});
```

## Token Management

Manage OAuth tokens:

```typescript
const token = await workos.connect.getToken({
  appId: 'app_id',
  userId: 'user_id',
});

await workos.connect.refreshToken({
  refreshToken: token.refreshToken,
});
```

## Best Practices

- ใช้ Connect สำหรับ standard OAuth flows
- Implement token refresh logic
- Secure MCP endpoints
- Monitor application usage
