# Browser Extension Permissions

Permissions คือสิ่งที่ extension ต้องการเพื่อเข้าถึง browser APIs และ websites

## Basic Permissions

```typescript
// wxt.config.ts
export default defineConfig({
  manifest: {
    permissions: ['storage', 'tabs'],
  },
});
```

## Common Permissions

### Storage

```typescript
permissions: ['storage']
```

- **storage.local** - Local storage
- **storage.sync** - Sync storage (syncs across devices)

### Tabs

```typescript
permissions: ['tabs']
```

- Access tab information
- Create, update, remove tabs
- Listen to tab events

### Active Tab

```typescript
permissions: ['activeTab']
```

- Access current tab only
- Less invasive than 'tabs'

### Scripting

```typescript
permissions: ['scripting']
```

- Execute scripts programmatically
- Inject CSS programmatically

### Bookmarks

```typescript
permissions: ['bookmarks']
```

- Access and manage bookmarks

### History

```typescript
permissions: ['history']
```

- Access and manage browsing history

### Downloads

```typescript
permissions: ['downloads']
```

- Manage downloads

### Notifications

```typescript
permissions: ['notifications']
```

- Show notifications

### Alarms

```typescript
permissions: ['alarms']
```

- Schedule and manage alarms

### Idle

```typescript
permissions: ['idle']
```

- Detect when user is idle

### Web Navigation

```typescript
permissions: ['webNavigation']
```

- Monitor navigation events

### Web Request

```typescript
permissions: ['webRequest']
```

- Intercept and modify network requests

### Cookies

```typescript
permissions: ['cookies']
```

- Access and manage cookies

## Host Permissions

Host permissions ให้ access ถึง websites:

```typescript
// wxt.config.ts
export default defineConfig({
  manifest: {
    host_permissions: [
      '*://*.example.com/*',
      'https://example.org/*',
    ],
  },
});
```

### Pattern Examples

```typescript
host_permissions: [
  '*://*/*',                    // All URLs
  '*://*.example.com/*',        // All subdomains of example.com
  'https://example.com/*',      // Only HTTPS on example.com
  'http://localhost:*/*',        // Localhost
  'file:///*',                  // Local files
  'chrome-extension://*/*',     // Other extensions
]
```

## Optional Permissions

Permissions ที่ optional สำหรับ features ที่ไม่จำเป็น:

```typescript
// wxt.config.ts
export default defineConfig({
  manifest: {
    optional_permissions: ['tabs', 'bookmarks'],
    optional_host_permissions: ['*://*.example.com/*'],
  },
});
```

### Requesting Optional Permissions

```typescript
// Request permission
const granted = await browser.permissions.request({
  permissions: ['tabs'],
});

if (granted) {
  console.log('Permission granted');
}

// Check permission
const hasPermission = await browser.permissions.contains({
  permissions: ['tabs'],
});

if (hasPermission) {
  console.log('Has permission');
}

// Remove permission
const removed = await browser.permissions.remove({
  permissions: ['tabs'],
});
```

## Auto-added Permissions

WXT จะ auto-add permissions ในบางสถานการณ์:

### Development Mode

```typescript
// Auto-added during development
permissions: ['tabs', 'scripting']
```

สำหรับ hot reloading

### Sidepanel Entrypoint

```typescript
// Auto-added when sidepanel entrypoint exists
permissions: ['sidepanel']
```

## Content Script Permissions

Content scripts ต้องการ host permissions:

```typescript
export default defineContentScript({
  matches: ['*://*.example.com/*'],
  main(ctx) {
    // Can access example.com pages
  },
});
```

## Best Practices

1. **ใช้ permissions ที่จำเป็นเท่านั้น** - Principle of least privilege
2. **ใช้ activeTab** แทน tabs เมื่อเป็นไปได้
3. **ใช้ optional_permissions** สำหรับ features ที่ไม่จำเป็น
4. **ระบุ host_permissions** ที่เฉพาะเจาะจง
5. **อธิบาย permissions** ใน description
6. **Test permissions** บน browsers ที่ต่างกัน
7. **Handle permission denial** อย่างเหมาะสม
