# Browser Extension Messaging

## Description
การสื่อสารระหว่าง components ของ browser extension เพื่อแลกเปลี่ยนข้อมูลและคำสั่งระหว่าง content scripts, background scripts, popup และส่วนอื่นๆ

## Examples

### One-time Messages

#### Send from Content Script to Background
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

#### Send from Background to Content Script
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

#### Send from Popup to Background
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

### Long-lived Connections

#### Create Connection
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

#### Disconnect
```typescript
port.onDisconnect.addListener(() => {
  console.log('Connection closed');
});

// Manually disconnect
port.disconnect();
```

### Send to Specific Tab
```typescript
// Background script
const tabId = 123;
browser.tabs.sendMessage(tabId, { type: 'update' });
```

### Send to Specific Extension
```typescript
// Send to other extension
const extensionId = 'abcdefghijklmnop';
browser.runtime.sendMessage(extensionId, { type: 'message' });
```

## Anti-patterns

❌ **ไม่ใช้ message type**: ส่งข้อมูลโดยไม่มีโครงสร้างทำให้จัดการยาก
✅ **ใช้ message type**: สร้าง message object พร้อม `type` สำหรับ routing

❌ **ลืม handle errors**: ไม่จัดการกรณีที่ messaging ล้มเหลว
✅ **Wrap with try-catch**: จัดการ errors จาก messaging

❌ **ส่งข้อมูลใหญ่เกินไป**: ส่ง large objects ผ่าน one-time messages
✅ **ใช้ long-lived connections**: สำหรับข้อมูลขนาดใหญ่หรือการสื่อสารต่อเนื่อง

❌ **ไม่ validate messages**: ไม่ตรวจสอบข้อมูลก่อน process
✅ **Validate input**: ตรวจสอบ message structure ก่อนดำเนินการ

❌ **ลืม disconnect**: เปิด connections ค้างไว้ทำให้ memory leak
✅ **Cleanup properly**: ปิด connections เมื่อไม่ใช้แล้ว

## Verification

1. ตรวจสอบว่า messaging ทำงานระหว่าง content script และ background
2. ทดสอบ one-time messages โดยส่งข้อมูลและตรวจสอบ response
3. ตรวจสอบ long-lived connections ว่าเชื่อมต่อและส่งข้อมูลได้
4. ทดสอบ error handling โดยจำลองสถานการณ์ที่ messaging ล้มเหลว
5. ยืนยันว่า connections ถูกปิดอย่างถูกต้องเมื่อไม่ใช้งาน
6. ตรวจสอบว่า message validation ทำงานได้
