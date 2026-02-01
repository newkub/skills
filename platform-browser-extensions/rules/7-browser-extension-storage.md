# Browser Extension Storage API

Storage API ใช้สำหรับเก็บข้อมูลใน extension แบบ persistent

## Basic Usage

### Local Storage

```typescript
// Set data
await browser.storage.local.set({ key: 'value' });

// Get data
const result = await browser.storage.local.get(['key']);
console.log(result.key); // 'value'

// Get all data
const all = await browser.storage.local.get(null);

// Remove data
await browser.storage.local.remove(['key']);

// Clear all data
await browser.storage.local.clear();

// Get bytes in use
const bytes = await browser.storage.local.getBytesInUse();
```

### Sync Storage

```typescript
// Set data (syncs across devices)
await browser.storage.sync.set({ key: 'value' });

// Get data
const result = await browser.storage.sync.get(['key']);
console.log(result.key); // 'value'

// Note: Limited to 100KB per item, 512KB total
```

## Storage Permissions

```typescript
// wxt.config.ts
export default defineConfig({
  manifest: {
    permissions: ['storage'],
  },
});
```

## Storage Events

```typescript
// Listen to storage changes
browser.storage.onChanged.addListener((changes, areaName) => {
  if (areaName === 'local' && changes.key) {
    const { oldValue, newValue } = changes.key;
    console.log('Key changed:', oldValue, '->', newValue);
  }
});
```

## Best Practices

1. **ใช้ local storage** สำหรับ data ที่ไม่ต้อง sync
2. **ใช้ sync storage** สำหรับ settings ที่ต้อง sync
3. **ใช้ onChanged listener** สำหรับ reactive updates
4. **Handle storage limits** อย่างเหมาะสม
5. **Validate data** ก่อน save ลง storage
6. **Use structured data** สำหรับ complex objects
