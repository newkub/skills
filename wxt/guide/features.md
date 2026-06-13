# ฟีเจอร์ - WXT

## ฟีเจอร์หลัก

| ฟีเจอร์ | คำอธิบาย |
|---------|-------------|
| Multi-browser | Chrome, Firefox, Edge, Safari |
| Manifest V2/V3 | รองรับทั้งสอง manifest version |
| Hot Reload | พัฒนาเร็วด้วย HMR |
| File-based Routing | สร้าง manifest อัตโนมัติ |
| TypeScript | รองรับ TypeScript ในตัว |
| Auto-imports | Nuxt-like auto-imports |

## Entrypoints

### Background Script

```typescript
export default defineBackground(() => {
  browser.runtime.onInstalled.addListener(() => {
    console.log('Extension installed')
  })
})
```

### Content Script

```typescript
export default defineContentScript({
  matches: ['<all_urls>'],
  main() {
    document.body.textContent = 'Hello World'
  }
})
```

### Side Panel (Chrome/Edge)

```typescript
export default defineSidePanel({
  matches: ['<all_urls>'],
  main() {
    document.body.textContent = 'Side Panel'
  }
})
```

### Options Page

```typescript
// entrypoints/options/main.tsx
export default defineOptionsPage({
  defaultTitle: 'My Extension Settings',
})
```

### Popup

```typescript
// entrypoints/popup/main.tsx
export default definePopup({
  width: 400,
  height: 300,
})
```

## Browser APIs

```typescript
// Runtime
browser.runtime.getURL()
browser.runtime.sendMessage()
browser.storage.sync

// Tabs
browser.tabs.query()
browser.tabs.create()
browser.tabs.sendMessage()

// Windows
browser.windows.create()
browser.windows.getCurrent()
```

## Storage API

```typescript
import { useStorage } from '#storage'

export default defineBackground(() => {
  const count = useStorage('count', 0)
  
  browser.runtime.onMessage.addListener((msg) => {
    if (msg.type === 'increment') {
      count.value++
    }
  })
})
```

## Navigation API

```typescript
import { navigate } from '#navigation'

export default defineContentScript({
  main() {
    navigate.on('locationchange', () => {
      console.log('URL changed:', location.href)
    })
  }
})
```

## Promise-Based APIs

WXT APIs ทั้งหมดเป็น promise-based:

```typescript
const url = browser.runtime.getURL('icon.png')
const [tab] = await browser.tabs.query({ active: true })
```

## Auto-Imports

WXT มี automatic imports สำหรับ:

| Module | Function | คำอธิบาย |
|--------|----------|-------------|
| `#storage` | `useStorage` | Reactive storage |
| `#navigation` | `navigate` | Navigation observer |
| `#browser` | - | WebExtension browser API |
| `#wxt` | `defineBackground` | WXT utilities |
| `#tabs` | - | Tab utilities |

## DevTools Support

```typescript
export default defineDevtools({
  tabId: browser.devtools.panels.create(
    'My Panel',
    'icon.png',
    'panel.html'
  ),
})
```