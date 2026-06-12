# How It Works

## Architecture

WorkOS ใช้ SDK-based architecture สำหรับ integrate enterprise features:

```
┌─────────────────────────────────────┐
│         WorkOS Architecture            │
├─────────────────────────────────────┤
│  SDK (@workos-inc/node)             │
├─────────────────────────────────────┤
│  SSO │ Directory │ Audit │ Org       │
├─────────────────────────────────────┤
│  API Gateway (api.workos.com)        │
├─────────────────────────────────────┤
│  Identity Providers (Okta, Azure)   │
└─────────────────────────────────────┘
```

## Workflow

### SSO Flow

1. **Init** - Initialize WorkOS SDK with API key
2. **Redirect** - Generate authorization URL
3. **Authenticate** - User authenticates with IdP
4. **Callback** - Handle callback with code
5. **Profile** - Get user profile and create session

### Directory Sync Flow

1. **Setup** - Create directory connection
2. **Webhook** - Receive directory updates
3. **Sync** - Sync users and groups
4. **Manage** - Manage provisioning

### Audit Log Flow

1. **Configure** - Set up audit log service
2. **Track** - Create events for actions
3. **Search** - Query audit events
4. **Export** - Export for compliance

## Key Concepts

- **SSO Profile** - User info from IdP
- **Organization** - Tenant in your app
- **Connection** - SSO configuration
- **Directory** - User/group source

## See Also

- [Key Concept](./key-concept.md) - Core concepts
- [Features](./features.md) - Feature details
- [Configuration](./configuration.md) - Configuration