---
name: Background Scripts
description: การใช้งาน background scripts
priority: 5
impact: MEDIUM
---

# Background Scripts

## Overview

Background scripts คือ scripts ที่ run ใน background เพื่อจัดการ events และ logic ของ extension

## Creating Background Scripts

### MV3 (Service Worker)

```typescript
// entrypoints/background.ts
export default defineBackground(() => {
  console.log('Background script started');
  
  // Listen for extension installation
  browser.runtime.onInstalled.addListener((details) => {
    if (details.reason === 'install') {
      console.log('Extension installed');
    }
  });
});
```

### MV2 (Background Page)

```typescript
// entrypoints/background.ts
export default defineBackground({
  persistent: true,
}, () => {
  console.log('Background script started');
  
  // Listen for extension installation
  browser.runtime.onInstalled.addListener((details) => {
    if (details.reason === 'install') {
      console.log('Extension installed');
    }
  });
});
```

## Background Script Options

### Common Options

| Option | Type | Description |
|--------|------|-------------|
| `persistent` | boolean | MV2: Persistent background page |
| `type` | string | `module` or `classic` |
| `include` | string[] | Browsers ที่จะ build |
| `exclude` | string[] | Browsers ที่ไม่ build |

## Common Events

### Extension Installation

```typescript
browser.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    console.log('Extension installed');
    // Initialize extension
  } else if (details.reason === 'update') {
    console.log('Extension updated');
    // Handle update
  }
});
```

### Message Passing

```typescript
// Listen for messages from content scripts
browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log('Received message:', message);
  
  // Send response
  sendResponse({ status: 'success' });
  
  // Return true for async response
  return true;
});
```

### Tab Events

```typescript
// Listen for tab updates
browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete') {
    console.log('Tab loaded:', tab.url);
  }
});

// Listen for tab activation
browser.tabs.onActivated.addListener((activeInfo) => {
  console.log('Tab activated:', activeInfo.tabId);
});
```

### Storage Events

```typescript
// Listen for storage changes
browser.storage.onChanged.addListener((changes, areaName) => {
  console.log('Storage changed:', changes, areaName);
});
```

## Message Passing

### From Content Script to Background

```typescript
// Content script
browser.runtime.sendMessage({ action: 'getData' }).then((response) => {
  console.log('Response:', response);
});

// Background script
browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'getData') {
    sendResponse({ data: 'some data' });
  }
  return true;
});
```

### From Popup to Background

```typescript
// Popup
browser.runtime.sendMessage({ action: 'getData' }).then((response) => {
  console.log('Response:', response);
});

// Background script
browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'getData') {
    sendResponse({ data: 'some data' });
  }
  return true;
});
```

## Storage API

```typescript
// Read storage
browser.storage.local.get(['key']).then((result) => {
  console.log('Data:', result.key);
});

// Write storage
browser.storage.local.set({ key: 'value' });

// Listen for changes
browser.storage.onChanged.addListener((changes, areaName) => {
  if (areaName === 'local' && changes.key) {
    console.log('Key changed:', changes.key.newValue);
  }
});
```

## Best Practices

1. **Use defineBackground**: ใช้ helper function ที่ WXT ให้มา
2. **Handle async properly**: ใช้ async/await หรือ promises
3. **Clean up listeners**: Remove listeners เมื่อไม่ใช้
4. **Use storage API**: ใช้ storage API แทน variables
5. **Handle errors**: จัดการ errors อย่างถูกต้อง
6. **Use message passing**: ใช้ message passing สำหรับ communication
7. **Keep background script minimal**: เก็บ logic ใน background script ให้น้อยที่สุด

## Common Mistakes

1. **Not handling async**: ไม่ handle async operations อย่างถูกต้อง
2. **Leaking listeners**: ไม่ remove listeners เมื่อไม่ใช้
3. **Not using storage**: ใช้ variables แทน storage API
4. **Not handling errors**: ไม่ handle errors อย่างถูกต้อง
5. **Too much logic**: ใส่ logic เยอะเกินไปใน background script

## References

- [Background Scripts](https://wxt.dev/guide/essentials/background)
- [Message Passing](https://developer.chrome.com/docs/extensions/mv3/messaging/)
- [Storage API](https://developer.chrome.com/docs/extensions/reference/storage/)
