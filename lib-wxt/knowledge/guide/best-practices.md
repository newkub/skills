# แนวทางปฏิบัติที่ดี - WXT

## โครงสร้างโปรเจกต์

```
my-extension/
├── entrypoints/
│   ├── background.ts
│   ├── content.ts
│   ├── popup/
│   │   ├── index.html
│   │   └── main.tsx
│   └── options/
│       ├── index.html
│       └── main.tsx
├── public/
│   └── icons/
├── wxt.config.ts
└── package.json
```

## TypeScript

### ใช้ TypeScript ทุกที่

```typescript
// ดี
interface User {
  id: string
  name: string
}

// ไม่ดี
const user = { id: '1', name: 'John' }
```

### กำหนด Message Types

```typescript
// background.ts
export type MessageType = 
  | { type: 'GET_USER'; id: string }
  | { type: 'SET_USER'; user: User }
```

## Performance

### Lazy Load Content Scripts

```typescript
export default defineContentScript({
  matches: ['<all_urls>'],
  runAt: 'document_idle',
  main() {
    // Heavy code here
  }
})
```

### ใช้ Shared Worker

```typescript
export default defineBackground(() => {
  // Shared across tabs
})
```

## Security

### ตรวจสอบ Input

```typescript
browser.runtime.onMessage.addListener((msg, sender) => {
  // Validate message
  if (!msg || typeof msg.type !== 'string') {
    return false
  }
})
```

### Content Security

```typescript
export default defineContentScript({
  main() {
    // Sanitize user input
    const sanitized = DOMPurify.sanitize(userInput)
  }
})
```

## Testing

```typescript
import { describe, it, expect } from '@jest/extend'

describe('Storage', () => {
  it('should persist data', async () => {
    const storage = new StorageArea('sync')
    await storage.set({ key: 'value' })
    expect(await storage.get('key')).toBe('value')
  })
})
```
