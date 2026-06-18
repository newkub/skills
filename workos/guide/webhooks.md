# Webhooks

## Overview

Implement webhooks สำหรับ real-time event notifications from WorkOS

## Webhook Setup

### Step 1: Create Webhook Endpoint

```typescript
import express from 'express';
import crypto from 'crypto';

const app = express();

app.use(express.raw({ type: 'application/json' }));

app.post('/webhooks/workos', async (req, res) => {
  const signature = req.headers['workos-signature'];
  const rawBody = req.body;
  
  try {
    const event = workos.webhooks.constructEvent(
      rawBody,
      signature,
      process.env.WORKOS_WEBHOOK_SECRET
    );
    
    // Handle event
    await handleEvent(event);
    
    res.status(200).send('OK');
  } catch (error) {
    console.error('Webhook error:', error);
    res.status(400).send('Invalid signature');
  }
});
```

### Step 2: Configure Webhook in WorkOS Dashboard

- Go to WorkOS Dashboard
- Navigate to Webhooks
- Add webhook URL: `https://yourapp.com/webhooks/workos`
- Set webhook secret
- Select event types to receive

## Event Types

### User Management Events

```typescript
switch (event.type) {
  case 'user.created':
    await handleUserCreated(event.data);
    break;
  case 'user.updated':
    await handleUserUpdated(event.data);
    break;
  case 'user.deleted':
    await handleUserDeleted(event.data);
    break;
  case 'user.verified':
    await handleUserVerified(event.data);
    break;
}
```

### SSO Events

```typescript
switch (event.type) {
  case 'connection.created':
    await handleConnectionCreated(event.data);
    break;
  case 'connection.updated':
    await handleConnectionUpdated(event.data);
    break;
  case 'connection.deleted':
    await handleConnectionDeleted(event.data);
    break;
  case 'sso.login':
    await handleSSOLogin(event.data);
    break;
}
```

### Directory Sync Events

```typescript
switch (event.type) {
  case 'directory_sync.user.created':
    await handleUserCreated(event.data);
    break;
  case 'directory_sync.user.updated':
    await handleUserUpdated(event.data);
    break;
  case 'directory_sync.user.deleted':
    await handleUserDeleted(event.data);
    break;
  case 'directory_sync.group.created':
    await handleGroupCreated(event.data);
    break;
  case 'directory_sync.group.updated':
    await handleGroupUpdated(event.data);
    break;
  case 'directory_sync.group.deleted':
    await handleGroupDeleted(event.data);
    break;
}
```

### Organization Events

```typescript
switch (event.type) {
  case 'organization.created':
    await handleOrganizationCreated(event.data);
    break;
  case 'organization.updated':
    await handleOrganizationUpdated(event.data);
    break;
  case 'organization.deleted':
    await handleOrganizationDeleted(event.data);
    break;
}
```

## Event Handlers

### User Created Handler

```typescript
async function handleUserCreated(data) {
  const { id, email, first_name, last_name } = data;
  
  const user = await db.users.create({
    workosUserId: id,
    email,
    firstName: first_name,
    lastName: last_name,
  });
  
  console.log(`User created: ${user.id}`);
}
```

### User Updated Handler

```typescript
async function handleUserUpdated(data) {
  const { id, email, first_name, last_name } = data;
  
  const user = await db.users.update({
    where: { workosUserId: id },
    data: {
      email,
      firstName: first_name,
      lastName: last_name,
    },
  });
  
  console.log(`User updated: ${user.id}`);
}
```

### User Deleted Handler

```typescript
async function handleUserDeleted(data) {
  const { id } = data;
  
  await db.users.delete({
    where: { workosUserId: id },
  });
  
  console.log(`User deleted: ${id}`);
}
```

## Idempotency

Implement idempotency to prevent duplicate processing:

```typescript
async function handleEvent(event) {
  // Check if event already processed
  const processed = await db.webhookEvents.findUnique({
    where: { id: event.id },
  });
  
  if (processed) {
    console.log(`Event already processed: ${event.id}`);
    return;
  }
  
  // Process event
  await processEvent(event);
  
  // Mark as processed
  await db.webhookEvents.create({
    data: { id: event.id, type: event.type },
  });
}
```

## Retry Logic

Implement retry logic for failed webhooks:

```typescript
async function handleEventWithRetry(event, maxRetries = 3) {
  let retries = 0;
  
  while (retries < maxRetries) {
    try {
      await handleEvent(event);
      return;
    } catch (error) {
      retries++;
      console.error(`Retry ${retries}/${maxRetries}:`, error);
      
      if (retries >= maxRetries) {
        // Send to dead letter queue
        await deadLetterQueue.add(event);
        throw error;
      }
      
      // Exponential backoff
      await new Promise(resolve => setTimeout(resolve, Math.pow(2, retries) * 1000));
    }
  }
}
```

## Webhook Verification

Always verify webhook signatures:

```typescript
function verifyWebhookSignature(rawBody, signature, secret) {
  const hmac = crypto.createHmac('sha256', secret);
  hmac.update(rawBody);
  const expectedSignature = hmac.digest('hex');
  
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expectedSignature)
  );
}
```

## Testing Webhooks

### Local Testing

Use ngrok or similar for local testing:

```bash
ngrok http 3000
```

Configure webhook URL to ngrok URL

### Test Events

Use WorkOS dashboard to send test events

### Webhook Debugger

Use WorkOS webhook debugger to inspect events

## Best Practices

- Always verify webhook signatures
- Implement idempotency
- Use retry logic with exponential backoff
- Log all webhook events
- Monitor webhook delivery status
- Use dead letter queue for failed events
- Process webhooks asynchronously

## Monitoring

### Webhook Delivery Status

```typescript
const deliveries = await workos.webhooks.listDeliveries({
  limit: 100,
});

deliveries.data.forEach(delivery => {
  console.log(`Event: ${delivery.eventType}`);
  console.log(`Status: ${delivery.status}`);
  console.log(`Attempts: ${delivery.attempts}`);
});
```

### Alert on Failures

Set up alerts for:
- High failure rates
- Repeated delivery failures
- Signature verification failures

## Next Steps

- อ่าน `key-concepts/audit-logs.md` สำหรับ audit logs concepts
- อ่าน `principles/best-practices.md` สำหรับ best practices
- อ่าน `references/configuration.md` สำหรับ webhook configuration
