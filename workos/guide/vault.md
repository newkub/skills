## Vault Implementation

Vault สำหรับ encrypt, store, และ control access ของ sensitive data

## Features

- End-to-end encryption
- Secure key management
- Access control
- Audit logging

## Setup

Initialize Vault:

```typescript
import { WorkOS } from '@workos-inc/node';

const workos = new WorkOS({
  apiKey: process.env.WORKOS_API_KEY,
});

const vault = workos.vault;
```

## Storing Data

Encrypt และ store sensitive data:

```typescript
const result = await vault.encrypt({
  data: 'sensitive_information',
  keyId: 'key_id',
});

const stored = await vault.store({
  encryptedData: result.encryptedData,
  metadata: {
    userId: 'user_id',
    type: 'api_key',
  },
});
```

## Retrieving Data

Decrypt และ retrieve data:

```typescript
const encrypted = await vault.retrieve({
  id: 'stored_id',
});

const decrypted = await vault.decrypt({
  encryptedData: encrypted.data,
  keyId: encrypted.keyId,
});
```

## Access Control

ตั้งค่า access policies:

```typescript
await vault.createPolicy({
  name: 'user_policy',
  rules: [
    {
      action: 'read',
      resource: 'user_data',
      condition: 'user.id == resource.userId',
    },
  ],
});
```

## Best Practices

- ใช้ Vault สำหรับ sensitive data เท่านั้น
- Rotate encryption keys regularly
- Monitor access ด้วย audit logs
- ใช้ principle of least privilege
