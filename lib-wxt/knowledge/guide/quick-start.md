# Quick Start - WXT

## Prerequisites

- Node.js 18+
- pnpm 8+ (recommended) หรือ npm/bun

## 1. Create Project

```bash
# Using bun (recommended)
bunx wxt@latest init my-extension
cd my-extension
bun install

# Using npm
npm create wxt@latest my-extension
cd my-extension
npm install

# Using pnpm
pnpm create wxt@latest my-extension
cd my-extension
pnpm install
```

## 2. Project Structure

หลังจากสร้าง project จะได้ structure:

```
my-extension/
├── entrypoints/
│   └── main.ts          # Main entrypoint
├── public/
│   └── icon.png         # Extension icon
├── wxt.config.ts        # WXT configuration
├── package.json
└── tsconfig.json
```

## 3. Start Development

```bash
# Start dev server
bun run dev
# หรือ
npm run dev
```

Extension จะถูก load ใน browser ที่รองรับ

## 4. Add Entrypoints

### Background Script

```typescript
// entrypoints/background.ts
export default defineBackground(() => {
  browser.runtime.onInstalled.addListener(() => {
    console.log('Extension installed!')
  })
})
```

### Content Script

```typescript
// entrypoints/content.ts
export default defineContentScript({
  matches: ['<all_urls>'],
  main() {
    document.body.textContent = 'Hello from WXT!'
  }
})
```

## 5. Build for Production

```bash
# Build for default browser
bun run build

# Build for specific browser
bun run build --target chrome
bun run build --target firefox

# Build and create zip
bun run zip
```

## 6. Load Extension

### Chrome/Edge
1. ไปที่ `chrome://extensions/`
2. เปิด Developer mode
3. Click "Load unpacked"
4. เลือกโฟลเดอร์ `.output/chrome`

### Firefox
1. ไปที่ `about:debugging#/runtime/this-firefox`
2. Click "Load Temporary Add-on"
3. เลือกไฟล์ `.output/firefox/manifest.json`

## Next Steps

- ดู [features.md](./features.md) สำหรับรายละเอียด features
- ดู [configuration.md](./configuration.md) สำหรับ configuration options
- ดู [best-practices.md](./best-practices.md) สำหรับ best practices