---
description: สร้าง web extension ด้วย WXT
---

## Goal

สร้าง web extension ใหม่ด้วย WXT ตั้งแต่เริ่มต้นจนพร้อมใช้งาน

## Scope

ใช้สำหรับสร้าง extension ใหม่ทั้งหมด หรือเพิ่ม features ใน extension ที่มีอยู่

## Execute

### 1. Setup Project

ทำตาม `/setup-wxt` workflow ก่อน

### 2. สร้าง Entrypoints

WXT ใช้ file-based entrypoints ใน `entrypoints/` folder

#### Background Script

สร้าง `entrypoints/background.ts`:

```typescript
export default defineBackground(() => {
  console.log('Background script started')
  
  browser.runtime.onInstalled.addListener(() => {
    console.log('Extension installed')
  })
})
```

#### Popup

สร้าง `entrypoints/popup/index.html`:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Popup</title>
  </head>
  <body>
    <h1>Hello World</h1>
    <script src="./main.ts"></script>
  </body>
</html>
```

สร้าง `entrypoints/popup/main.ts`:

```typescript
console.log('Popup loaded')
```

#### Content Script

สร้าง `entrypoints/content.ts`:

```typescript
export default defineContentScript({
  matches: ['*://*/*'],
  main() {
    console.log('Content script injected')
  }
})
```

### 3. ตั้งค่า Manifest Options

เพิ่ม options ใน entrypoint files:

```typescript
export default defineBackground({
  persistent: true,
  main() {
    // background logic
  }
})
```

### 4. เพิ่ม Icons

วาง icons ใน `public/` folder:

```
public/
├── icon-16.png
├── icon-48.png
├── icon-128.png
└── icon-512.png
```

### 5. ทดสอบ Development

```bash
bun run dev
```

### 6. Build สำหรับ Production

```bash
bun run build
```

### 7. Load Extension ใน Browser

- Chrome: chrome://extensions → Developer mode → Load unpacked
- Firefox: about:debugging → This Firefox → Load Temporary Add-on
- เลือก `.output/<browser>-mv3` folder

## Rules

### Entrypoint Types

- **background.ts** - Background script/service worker
- **popup/** - Popup UI
- **options/** - Options page
- **content.ts** - Content script
- **devtools/** - DevTools panel
- **sandbox/** - Sandboxed page
- **sidepanel/** - Side panel (Chrome)

### Manifest Auto-generation

- WXT สร้าง manifest จาก entrypoints อัตโนมัติ
- ไม่ต้องแก้ `manifest.json` ด้วยตัวเอง
- ใช้ functions ใน entrypoints แทน

### Browser API Usage

- ใช้ `browser` global แทน `chrome`
- WXT จะ handle cross-browser compatibility
- อย่าใช้ browser APIs นอก main function

## Expected Outcome

- Web extension ที่ทำงานได้
- Manifest ที่สร้างอัตโนมัติ
- Entrypoints ที่ถูกต้อง
- Extension ที่โหลดได้ใน browser
