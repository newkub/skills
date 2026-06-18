# Best Practices

## Implementation

### 1. Use Environment Variables

เก็บ sensitive data ใน environment variables:

```bash
WORKOS_API_KEY=sk_...
WORKOS_CLIENT_ID=client_...
WORKOS_WEBHOOK_SECRET=whsec_...
```

### 2. Implement Error Handling

Handle WorkOS errors gracefully:

```typescript
try {
  const user = await workos.userManagement.getUser('user_id');
} catch (error) {
  if (error instanceof WorkOSError) {
    // Handle specific error
  }
}
```

### 3. Use Webhooks for Real-time Updates

ใช้ webhooks แทน polling:

```typescript
app.post('/webhooks', (req, res) => {
  const signature = req.headers['workos-signature'];
  const event = workos.webhooks.constructEvent(req.body, signature);
  
  switch (event.type) {
    case 'user.created':
      // Handle user creation
      break;
  }
});
```

### 4. Implement Rate Limiting

ป้องกัน abuse ด้วย rate limiting:

```typescript
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});
```

### 5. Validate Webhook Signatures

ตรวจสอบ webhook signatures:

```typescript
const event = workos.webhooks.constructEvent(
  rawBody,
  signature,
  webhookSecret
);
```

## Security

### 1. Use HTTPS

เปิดใช้ HTTPS สำหรับทุก endpoints

### 2. Validate State Parameter

ใช้ state parameter สำหรับ SSO flow เพื่อ prevent CSRF:

```typescript
const state = crypto.randomBytes(16).toString('hex');
// Store state in session
const authUrl = workos.sso.getAuthorizationURL({
  state,
  // ...
});
```

### 3. Implement Session Security

- Use secure, httpOnly cookies
- Set appropriate cookie expiration
- Implement session invalidation on logout
- Use short-lived access tokens

### 4. Log Security Events

บันทึก security events ลง audit logs:

```typescript
await workos.auditLogs.createEvent({
  action: 'user.login',
  actor: { type: 'user', id: userId },
  context: { location: ipAddress },
});
```

## Performance

### 1. Cache User Data

Cache user data สำหรับ reduce API calls:

```typescript
const cachedUser = cache.get(`user:${userId}`);
if (cachedUser) return cachedUser;

const user = await workos.userManagement.getUser(userId);
cache.set(`user:${userId}`, user, { ttl: 300 });
```

### 2. Use Bulk Operations

ใช้ bulk operations เมื่อ possible:

```typescript
const users = await workos.userManagement.listUsers({
  limit: 100,
});
```

### 3. Implement Pagination

ใช้ pagination สำหรับ large datasets:

```typescript
let users = [];
let page = 1;

while (true) {
  const response = await workos.userManagement.listUsers({
    page,
    limit: 100,
  });
  
  users = users.concat(response.data);
  
  if (!response.hasMore) break;
  page++;
}
```

## Testing

### 1. Use Test Mode

ใช้ WorkOS test mode สำหรับ development:

```typescript
const workos = new WorkOS(process.env.WORKOS_API_KEY, {
  apiHostname: 'api.workos.test',
});
```

### 2. Mock API Responses

Mock WorkOS API สำหรับ unit tests:

```typescript
jest.mock('@workos-inc/node');
```

### 3. Test Webhook Handlers

Test webhook handlers ด้วย sample events:

```typescript
const sampleEvent = {
  type: 'user.created',
  data: { /* ... */ },
};
```

## Monitoring

### 1. Track API Usage

Monitor API usage สำหรับ detect anomalies:

```typescript
console.log(`API calls: ${metrics.apiCalls}`);
```

### 2. Set Up Alerts

Set up alerts สำหรับ:
- High error rates
- Unusual authentication patterns
- Failed webhook deliveries
- Rate limit breaches

### 3. Monitor Webhook Delivery

Monitor webhook delivery status:

```typescript
webhookClient.listDeliveries();
```

## Documentation

### 1. Document API Usage

Document WorkOS API usage ใน code comments:

```typescript
// Create user with WorkOS
const user = await workos.userManagement.createUser({
  email: 'user@example.com',
  password: 'password123',
});
```

### 2. Keep SDKs Updated

Keep WorkOS SDKs updated:

```bash
bun update @workos-inc/node
```

### 3. Follow WorkOS Documentation

Follow official WorkOS documentation:
- [WorkOS Docs](https://workos.com/docs)
- [API Reference](https://workos.com/docs/reference)
