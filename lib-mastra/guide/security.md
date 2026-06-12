# Security

ความปลอดภัยและ security considerations สำหรับ Mastra applications

## ภาพรวม

Security concerns หลัก:
- Authentication & Authorization
- Data Protection
- API Security
- Secret Management
- Audit Logging

## Authentication

### API Key Authentication

```typescript
import { Auth } from '@mastra/auth';

const auth = new Auth({
  provider: 'api-key',
  validate: async (apiKey) => {
    const user = await validateApiKey(apiKey);
    return user;
  }
});
```

### OAuth Integration

```typescript
const auth = new Auth({
  provider: 'oauth',
  config: {
    clientId: process.env.OAUTH_CLIENT_ID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    scopes: ['read', 'write']
  }
});
```

### JWT Support

```typescript
const auth = new Auth({
  provider: 'jwt',
  secret: process.env.JWT_SECRET,
  verify: async (token) => {
    return verifyJWT(token);
  }
});
```

## Authorization

### Role-Based Access Control

```typescript
import { RBAC } from '@mastra/rbac';

const rbac = new RBAC({
  roles: {
    admin: ['read', 'write', 'delete'],
    user: ['read', 'write'],
    guest: ['read']
  }
});

const agent = new Agent({
  name: 'secure-agent',
  authorization: rbac
});
```

### Tool Access Policies

```typescript
const tool = new Tool({
  name: 'admin-tool',
  permissions: ['admin'],
  execute: async (input, context) => {
    if (!context.user.hasPermission('admin')) {
      throw new Error('Unauthorized');
    }
    // Execute
  }
});
```

### Workspace Isolation

```typescript
const workspace = new Workspace({
  name: 'secure-workspace',
  isolation: {
    memory: true,
    tools: true,
    agents: true
  }
});
```

## Data Protection

### Encryption at Rest

```typescript
import { Encryption } from '@mastra/encryption';

const encryption = new Encryption({
  key: process.env.ENCRYPTION_KEY,
  algorithm: 'aes-256-gcm'
});

const memory = new Memory({
  store: encryptedStore,
  encryption
});
```

### Encryption in Transit

```typescript
const tool = new Tool({
  name: 'secure-api',
  execute: async (input) => {
    const response = await fetch(input.url, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.json();
  }
});
```

### Data Masking

```typescript
const tool = new Tool({
  name: 'data-tool',
  execute: async (input) => {
    const result = await fetchData(input);
    return maskSensitiveData(result);
  }
});
```

## Secret Management

### Environment Variables

```typescript
const agent = new Agent({
  name: 'secure-agent',
  config: {
    apiKey: process.env.API_KEY
  }
});
```

### Secret Store Integration

```typescript
import { SecretStore } from '@mastra/secrets';

const secrets = new SecretStore({
  provider: 'aws-secrets-manager',
  region: 'us-east-1'
});

const apiKey = await secrets.get('api-key');
```

### Runtime Secrets

```typescript
const tool = new Tool({
  name: 'secret-tool',
  secrets: ['api-key'],
  execute: async (input, context) => {
    const apiKey = context.secrets['api-key'];
    // Use secret
  }
});
```

## API Security

### Rate Limiting

```typescript
import { RateLimiter } from '@mastra/rate-limiter';

const limiter = new RateLimiter({
  max: 100,
  window: 60000
});

const agent = new Agent({
  name: 'rate-limited-agent',
  rateLimit: limiter
});
```

### Input Validation

```typescript
const tool = new Tool({
  name: 'validated-tool',
  schema: {
    type: 'object',
    properties: {
      email: { type: 'string', format: 'email' }
    }
  },
  execute: async (input) => {
    // Input is validated
  }
});
```

### Output Sanitization

```typescript
const tool = new Tool({
  name: 'sanitized-tool',
  execute: async (input) => {
    const result = await fetchData(input);
    return sanitizeOutput(result);
  }
});
```

## Audit Logging

### Structured Logging

```typescript
import { Logger } from '@mastra/logger';

const logger = new Logger({
  level: 'info',
  format: 'json'
});

const agent = new Agent({
  name: 'audited-agent',
  logger
});
```

### Event Tracking

```typescript
const tool = new Tool({
  name: 'tracked-tool',
  execute: async (input, context) => {
    logger.info('tool.execution', {
      tool: 'tracked-tool',
      user: context.user.id,
      input: sanitizeInput(input)
    });
    // Execute
  }
});
```

### Security Events

```typescript
import { SecurityMonitor } from '@mastra/security';

const monitor = new SecurityMonitor();

monitor.on('unauthorized-access', (event) => {
  logger.warn('Security event', event);
  alertAdmin(event);
});
```

## Security Checklist

### Development

- [ ] Validate all inputs
- [ ] Sanitize all outputs
- [ ] Use environment variables for secrets
- [ ] Implement rate limiting
- [ ] Enable audit logging

### Production

- [ ] Enable encryption at rest
- [ ] Enable encryption in transit
- [ ] Use secret management service
- [ ] Implement RBAC
- [ ] Enable security monitoring
- [ ] Regular security audits
- [ ] Keep dependencies updated

## Common Vulnerabilities

### 1. Injection Attacks

**Prevention:**
- Validate inputs
- Use parameterized queries
- Sanitize outputs
- Use prepared statements

### 2. Broken Authentication

**Prevention:**
- Use strong authentication
- Implement MFA
- Secure session management
- Use secure password policies

### 3. Sensitive Data Exposure

**Prevention:**
- Encrypt data at rest
- Encrypt data in transit
- Implement data masking
- Secure secret storage

### 4. Broken Access Control

**Prevention:**
- Implement RBAC
- Validate permissions
- Use least privilege
- Audit access logs
