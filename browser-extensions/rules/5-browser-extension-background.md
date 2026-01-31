# Browser Extension Background Scripts

Background scripts คือ scripts ที่ทำงานเป็น long-running processes ใน browser extension

## Basic Background Script

```typescript
// entrypoints/background.ts
export default defineBackground(() => {
  console.log('Background script loaded');
});
```

## Background Script Options

```typescript
export default defineBackground({
  // Manifest options
  persistent: undefined | true | false,
  type: undefined | 'module',
  
  // Build configuration
  include: undefined | string[],
  exclude: undefined | string[],
  
  main() {
    // Executed when background is loaded, CANNOT BE ASYNC
  },
});
```

## Manifest V2 vs V3

### MV2 (Persistent)

```typescript
export default defineBackground({
  persistent: true,
  main() {
    // Runs as long as extension is loaded
  },
});
```

### MV3 (Service Worker)

```typescript
export default defineBackground({
  type: 'module',
  main() {
    // Runs as service worker
  },
});
```

**Note**: MV3 background scripts คือ service workers ที่ถูก terminate เมื่อ idle และ restart เมื่อต้องการ

## Important Notes

1. **Build-time Import**: WXT จะ import file ใน NodeJS environment ระหว่าง build ดังนั้น runtime code ต้องอยู่ใน `main()` function
2. **Cannot Be Async**: `main()` function ไม่สามารถเป็น async ได้
3. **Event Listeners**: ใส่ event listeners ใน `main()` function

## Event Listeners

```typescript
export default defineBackground(() => {
  // Browser action click
  browser.action.onClicked.addListener((tab) => {
    console.log('Action clicked', tab);
  });

  // Tab updates
  browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete') {
      console.log('Tab loaded', tab.url);
    }
  });

  // Extension install/update
  browser.runtime.onInstalled.addListener((details) => {
    if (details.reason === 'install') {
      console.log('Extension installed');
    } else if (details.reason === 'update') {
      console.log('Extension updated');
    }
  });

  // Messages from content scripts
  browser.runtime.onMessage.addListener((message, sender) => {
    console.log('Message received', message);
    return Promise.resolve({ response: 'ok' });
  });
});
```

## Service Worker Lifecycle (MV3)

### Idle Detection

```typescript
export default defineBackground(() => {
  // Keep alive mechanism
  const keepAlive = () => setInterval(() => {
    browser.runtime.getPlatformInfo();
  }, 20000);

  browser.alarms.create('keep-alive', { periodInMinutes: 1 });
  browser.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === 'keep-alive') {
      keepAlive();
    }
  });
});
```

### State Persistence

```typescript
export default defineBackground(() => {
  // Use storage for persistence
  browser.storage.local.get(['state'], (result) => {
    const state = result.state || { count: 0 };
    console.log('Restored state', state);
  });
});
```

## Cross-Browser Compatibility

```typescript
export default defineBackground({
  include: ['chrome', 'edge'],
  exclude: ['firefox'],
  main() {
    // Chrome/Edge specific code
  },
});
```

## Best Practices

1. **ใช้ main() function** สำหรับ runtime code
2. **ใช้ event listeners** ใน main() function
3. **ใช้ storage** สำหรับ state persistence (MV3)
4. **ใช้ keep-alive mechanism** สำหรับ MV3 service workers
5. **ใช้ include/exclude** สำหรับ browser-specific code
6. **Handle runtime.onInstalled** สำหรับ setup
7. **Avoid async main()** - ใช้ callbacks หรือ promises ใน event handlers
