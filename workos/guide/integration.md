# Integration

การเชื่อมต่อ WorkOS กับ frameworks และ systems ต่างๆ

## Framework Support

| Framework | Integration Method | Documentation |
|-----------|-------------------|---------------|
| **Express** | Middleware | WorkOS SDK |
| **Next.js** | API Routes | WorkOS SDK |
| **Nuxt** | Server Middleware | WorkOS SDK |
| **React** | AuthKit | React SDK |
| **Vue** | Composables | WorkOS SDK |
| **Node.js** | Direct SDK | @workos-inc/node |

## Database Integration

### User Sync

```typescript
// ตัวอย่างการ sync users จาก Directory Sync
import WorkOS from '@workos-inc/node';

const workos = new WorkOS(process.env.WORKOS_API_KEY);

// Webhook handler สำหรับ user sync
app.post('/webhooks', async (req, res) => {
  const { event, data } = req.body;

  if (event === 'directory.user.created') {
    // สร้าง user ใน database ของคุณ
    await createUser(data);
  } else if (event === 'directory.user.deleted') {
    // ลบ user จาก database
    await deleteUser(data.id);
  }

  res.json({ received: true });
});
```

## Third-Party Services

### SIEM Integration

- **Splunk**: Audit log streaming
- **Datadog**: Event monitoring
- **Sumo Logic**: Log aggregation

### HRIS Integration

- **BambooHR**: Directory sync
- **Workday**: User provisioning
- **Okta**: SSO integration

## Best Practices

1. **Webhook Verification**: ตรวจสอบ signature ของ webhooks
2. **Error Handling**: จัดการ errors อย่างเหมาะสม
3. **Rate Limiting**: คำนึงถึง rate limits
4. **Caching**: Cache responses เพื่อ performance
