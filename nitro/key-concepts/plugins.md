---
title: Plugins
description: Plugins สำหรับ extend Nitro runtime behavior
---

## What are Plugins?

Plugins คือ functions ที่ execute ครั้งเดียวระหว่าง server startup เพื่อ extend Nitro runtime behavior ผ่าน lifecycle hooks

## Plugin Structure

```typescript
import { defineNitroPlugin } from "nitro";

export default defineNitroPlugin((nitroApp) => {
  // Extend Nitro behavior
  console.log('Nitro plugin loaded', nitroApp);
});
```

## Auto-registration

Plugins ถูก auto-register จาก `plugins/` directory:

```
plugins/
  auth.ts
  logger.ts
  cors.ts
```

Execute ตามลำดับ filename (alphabetical)

## Custom Plugin Directory

```typescript
import { defineConfig } from "nitro/config";

export default defineConfig({
  plugins: ['my-plugins/hello.ts']
});
```

## Nitro Runtime Hooks

### Available Hooks

- `request`: Trigger ก่อนทุก request
- `response`: Trigger หลังทุก response
- `error`: Trigger เมื่อเกิด error
- `render`: Trigger ก่อน rendering
- `close`: Trigger เมื่อ server shutdown

### Registering Hooks

```typescript
import { defineNitroPlugin } from "nitro";

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('request', (event) => {
    console.log('Incoming request:', event.node.req.url);
  });
  
  nitroApp.hooks.hook('response', (event, { body }) => {
    console.log('Response sent');
  });
});
```

### Unregistering Hooks

```typescript
import { defineNitroPlugin } from "nitro";

export default defineNitroPlugin((nitroApp) => {
  const handler = (event) => {
    console.log('Request');
  };
  
  nitroApp.hooks.hook('request', handler);
  
  // Unregister later
  nitroApp.hooks.removeHook('request', handler);
});
```

## Examples

### Capturing Errors

```typescript
import { defineNitroPlugin } from "nitro";

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('error', (error, event) => {
    console.error('Error occurred:', error);
    // Send to error tracking service
  });
});
```

### Graceful Shutdown

```typescript
import { defineNitroPlugin } from "nitro";

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('close', async () => {
    console.log('Server shutting down');
    // Cleanup resources
    await database.close();
  });
});
```

### Request and Response Lifecycle

```typescript
import { defineNitroPlugin } from "nitro";

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('request', (event) => {
    // Add custom headers
    event.node.req.headers['x-request-id'] = generateId();
  });
  
  nitroApp.hooks.hook('response', (event, response) => {
    // Log response time
    const duration = Date.now() - event.context.startTime;
    console.log(`Request took ${duration}ms`);
  });
});
```

### Modifying Response Headers

```typescript
import { defineNitroPlugin } from "nitro";

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('response', (event, { headers }) => {
    headers.set('x-powered-by', 'Nitro');
    headers.set('x-frame-options', 'DENY');
  });
});
```

## Plugin Context

`nitroApp` context มี:
- `hooks`: Register/unregister hooks
- `storage`: Access storage layer (unstorage)
- `config`: Access Nitro configuration
- `utils`: Built-in utilities

## Best Practices

- Plugins ต้องเป็น synchronous functions
- Hooks ที่ register สามารถเป็น async ได้
- ใช้ plugins สำหรับ cross-cutting concerns
- Avoid heavy operations ใน plugin initialization
- Test plugins ใน isolation
