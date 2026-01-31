# Browser Extension Messaging

Messaging ใช้สำหรับสื่อสารระหว่าง components ของ extension

## One-time Messages

### Send from Content Script to Background

```typescript
// Content script
const response = await browser.runtime.sendMessage({ type: 'greet', name: 'World' });
console.log(response); // { greeting: 'Hello World' }

// Background script
browser.runtime.onMessage.addListener((message, sender) => {
  if (message.type === 'greet') {
    return Promise.resolve({ greeting: `Hello ${message.name}` });
  }
});
```

### Send from Background to Content Script

```typescript
// Background script
const [tab] = await browser.tabs.query({ active: true, currentWindow: true });
const response = await browser.tabs.sendMessage(tab.id, { type: 'ping' });
console.log(response); // { pong: true }

// Content script
browser.runtime.onMessage.addListener((message, sender) => {
  if (message.type === 'ping') {
    return Promise.resolve({ pong: true });
  }
});
```

### Send from Popup to Background

```typescript
// Popup
const response = await browser.runtime.sendMessage({ type: 'getData' });
console.log(response); // { data: '...' }

// Background script
browser.runtime.onMessage.addListener((message, sender) => {
  if (message.type === 'getData') {
    return Promise.resolve({ data: '...' });
  }
});
```

## Long-lived Connections

### Create Connection

```typescript
// Content script
const port = browser.runtime.connect({ name: 'my-connection' });

port.onMessage.addListener((message) => {
  console.log('Received:', message);
});

port.postMessage({ type: 'init' });

// Background script
browser.runtime.onConnect.addListener((port) => {
  port.onMessage.addListener((message) => {
    console.log('Received:', message);
    port.postMessage({ type: 'response', data: '...' });
  });
});
```

### Disconnect

```typescript
port.onDisconnect.addListener(() => {
  console.log('Connection closed');
});

// Manually disconnect
port.disconnect();
```

## Send to Specific Tab

```typescript
// Background script
const tabId = 123;
browser.tabs.sendMessage(tabId, { type: 'update' });
```

## Send to Specific Extension

```typescript
// Send to other extension
const extensionId = 'abcdefghijklmnop';
browser.runtime.sendMessage(extensionId, { type: 'message' });
```

## Best Practices

1. **ใช้ message type** สำหรับ routing
2. **ใช้ long-lived connections** สำหรับ ongoing communication
3. **Handle errors** อย่างเหมาะสม
4. **Validate messages** ก่อน process
5. **Use structured messages** สำหรับ complex data
6. **Disconnect connections** เมื่อไม่ใช้แล้ว
