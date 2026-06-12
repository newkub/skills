# แนวคิดพื้นฐาน - WXT

## Entrypoints

WXT ใช้ file-based routing สำหรับสร้าง manifest อัตโนมัติ

### ประเภท Entrypoint

| ประเภท | ไฟล์ | คำอธิบาย |
|---------|------|-------------|
| Background | `background.ts` | Service worker ที่ทำงานเบื้องหลัง |
| Content | `content.ts` | Script ที่ injection เข้าไปในหน้าเว็บ |
| Popup | `popup/main.tsx` | UI ที่แสดงเมื่อคลิกที่ extension icon |
| Options | `options/main.tsx` | หน้าตั้งค่าของ extension |
| Side Panel | `sidepanel.ts` | Side panel (Chrome/Edge) |
| Devtools | `devtools.ts` | DevTools panel |
| Bookmarks | `bookmarks.ts` | Bookmark API |
| History | `history.ts` | History API |

### โครงสร้างตัวอย่าง

```
entrypoints/
├── background.ts        # Background script
├── content.ts           # Content script
├── popup/
│   ├── index.html
│   └── main.tsx
└── options/
    ├── index.html
    └── main.tsx
```

## Manifest Auto-generation

WXT อ่านไฟล์ใน `entrypoints/` และสร้าง `manifest.json` อัตโนมัติ

```typescript
// content.ts → manifest.json content_scripts[]
export default defineContentScript({
  matches: ['<all_urls>'],
  main() {
    console.log('Content script running')
  }
})
```

## Auto-imports

WXT มี Nuxt-style auto-imports สำหรับ:

| Module | Imports |
|--------|---------|
| `#storage` | `useStorage` |
| `#navigation` | `navigate` |
| `#browser` | `browser` (WebExtension API) |
| `#wxt` | `wxt` (WXT instance) |
| `#tabs` | Tab utilities |

## Storage

```typescript
import { useStorage } from '#storage'

export default defineBackground(() => {
  const settings = useStorage('settings', { theme: 'dark' })
  
  // Reactive - auto-syncs across contexts
  settings.value.theme = 'light'
})
```

## Browser APIs

เข้าถึง WebExtension APIs ผ่าน `browser` global:

```typescript
browser.runtime.getURL('icon.png')
browser.tabs.query({ active: true })
browser.storage.sync.set({ key: 'value' })
```

## Hot Module Replacement

WXT รองรับ HMR ใน development mode:

- Background scripts: Auto-reload เมื่อเปลี่ยนแปลง
- Content scripts: Hot swap โดยไม่ต้อง reload page
- Popup/Options: Live reload