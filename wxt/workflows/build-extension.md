---
description: Build และ package extension สำหรับ production
---

## Goal

Build และ package WXT extension สำหรับ production deployment

## Scope

ใช้สำหรับ build และ package extensions สำหรับทุก browsers

## Execute

### 1. Build สำหรับ Chrome

```bash
bun run build
```

หรือ:

```bash
wxt build
```

Output จะอยู่ใน `.output/chrome-mv3/`

### 2. Build สำหรับ Firefox

```bash
bun run build:firefox
```

หรือ:

```bash
wxt build --browser firefox
```

Output จะอยู่ใน `.output/firefox-mv3/`

### 3. Build สำหรับ Manifest V2

ถ้าต้องการ Manifest V2:

```bash
wxt build --manifest-version 2
```

### 4. Zip สำหรับ Chrome Web Store

```bash
bun run zip
```

หรือ:

```bash
wxt zip
```

Output: `my-extension-{version}-chrome.zip`

### 5. Zip สำหรับ Firefox Add-ons

```bash
bun run zip:firefox
```

หรือ:

```bash
wxt zip --browser firefox
```

Output: `my-extension-{version}-firefox.zip`

### 6. Build Options

#### Build สำหรับหลาย Browsers

```bash
wxt build --browser chrome
wxt build --browser firefox
wxt build --browser safari
```

#### Build สำหรับ Mode ต่างๆ

```bash
wxt build --mode production
wxt build --mode development
```

#### Build ด้วย Custom Config

```bash
wxt build --config wxt.config.prod.ts
```

### 7. Verify Build

ตรวจสอบ output folder:

```
.output/
├── chrome-mv3/
│   ├── manifest.json
│   ├── background.js
│   ├── popup/
│   └── assets/
└── firefox-mv3/
    ├── manifest.json
    ├── background.js
    └── ...
```

### 8. Test Build

Load extension ใน browser:
- Chrome: Load unpacked จาก `.output/chrome-mv3/`
- Firefox: Load temporary add-on จาก `.output/firefox-mv3/`

## Rules

### Build Targets

- **Chrome**: Default target, Chromium-based browsers
- **Firefox**: Firefox Add-ons
- **Safari**: Safari Web Extensions (ต้อง additional setup)
- **Edge**: Chromium-based, ใช้ Chrome build

### Manifest Version

- **MV3**: Default, recommended สำหรับ new extensions
- **MV2**: Legacy, ใช้เฉพาะถ้าจำเป็น

### Output Structure

- `.output/<browser>-mv<version>/` - Build artifacts
- `manifest.json` - Generated manifest
- Entrypoints ถูก bundle และ optimize
- Assets ถูก copy และ hash

### Source Maps

WXT สร้าง source maps โดย default ใน development mode

ปิด source maps ใน production:

```typescript
// wxt.config.ts
export default defineConfig({
  vite: () => ({
    build: {
      sourcemap: false
    }
  })
})
```

## Expected Outcome

- Extension ที่ build และ optimize แล้ว
- ZIP files พร้อม upload ไปยัง stores
- Manifest ที่ถูกต้องสำหรับ target browser
- Source maps สำหรับ debugging (ถ้าต้องการ)
