# WXT Framework Concepts

WXT เป็น framework สำหรับพัฒนา web extensions ที่ได้รับแรงบันดาลใจจาก Nuxt

## Core Concepts

### File-based Entrypoints

WXT ใช้ file-based entrypoints ซึ่ง manifest ถูก generate จากไฟล์ใน `entrypoints/` directory:

```
entrypoints/
├── background.ts          # Background script
├── popup.html             # Popup page
├── options.html           # Options page
├── content.ts             # Content script
└── ...
```

### Auto-imports

WXT ให้ auto-imports สำหรับ:
- `components/` - UI components
- `composables/` - Composable functions
- `hooks/` - React/Solid hooks
- `utils/` - Utility functions

### TypeScript by Default

WXT ใช้ TypeScript โดย default และ generate TS config อัตโนมัติ

### Fast HMR

Hot Module Replacement ที่รวดเร็วสำหรับ UI development และ fast reloads สำหรับ content/background scripts

### Multi-browser Support

WXT รองรับ:
- Chrome
- Firefox
- Edge
- Safari
- Chromium-based browsers

### MV2 & MV3

WXT รองรับทั้ง Manifest V2 และ V3 ด้วย codebase เดียวกัน

### Module System

WXT modules ช่วยให้ reuse code ได้หลาย extensions

### Automated Publishing

WXT ช่วย zip, upload, submit, และ publish extensions อัตโนมัติ

### Bundle Analysis

Tools สำหรับวิเคราะห์ bundle size

### Bundle Remote Code

Download และ bundle remote code จาก URLs

## Build-time vs Runtime

WXT จะ import entrypoints ใน NodeJS environment ระหว่าง build ดังนั้น:

- Runtime code ต้องอยู่ใน `main()` function
- ห้ามใส่ runtime code นอก `main()` function

## Context Invalidation

Content scripts ต้อง handle context invalidation เมื่อ extension ถูก uninstall/update/disable:

```typescript
export default defineContentScript({
  matches: ['*://*/*'],
  main(ctx) {
    ctx.addEventListener(...)
    ctx.setTimeout(...)
    ctx.setInterval(...)
  },
});
```

## Isolated World vs Main World

### Isolated World (Default)

Content scripts ทำงานใน isolated context โดยมีเพียง DOM ที่ shared

### Main World

สำหรับ MV3, Chromium รองรับ content scripts ใน main world แต่มี drawbacks:
- ไม่รองรับ MV2
- รองรับเฉพาะ Chromium browsers
- Main world content scripts ไม่มี access ถึง extension API

### Solution: injectScript

ใช้ `injectScript` function แทน:

```typescript
await injectScript('/example-main-world.js', { keepInDom: true });
```

## Content Script UI

WXT มี 3 built-in utilities สำหรับ UI:

### Integrated UI

```typescript
createIntegratedUi({
  position: 'top-right',
  mount(container) { ... },
  remove(container) { ... },
});
```

### Shadow Root UI

```typescript
createShadowRootUi({
  name: 'my-extension',
  position: 'inline',
  anchor: 'body',
  append: 'first',
  mount(container) { ... },
  remove(container) { ... },
});
```

### IFrame UI

```typescript
createIframeUi({
  page: '/popup.html',
  position: 'top-right',
});
```

## Manifest Generation

Manifest ถูกสร้างจาก:
1. Global options ใน `wxt.config.ts`
2. Entrypoint-specific options ในแต่ละ entrypoint
3. WXT Modules
4. Hooks

## Service Worker Lifecycle (MV3)

MV3 background scripts คือ service workers ที่:
- ถูก terminate เมื่อ idle
- Restart เมื่อต้องการ
- ต้องใช้ storage สำหรับ state persistence
- ต้องใช้ keep-alive mechanism สำหรับ long-running tasks

## Best Practices

1. **ใช้ src/ directory** เพื่อแยก source code จาก configuration files
2. **ใช้ auto-imports** เพื่อลด boilerplate code
3. **ใช้ main() function** สำหรับ runtime code
4. **ใช้ ctx methods** สำหรับ asynchronous operations
5. **ใช้ shadow root UI** เพื่อ avoid style conflicts
6. **ใช้ injectScript** สำหรับ main world access
7. **ใช้ storage** สำหรับ state persistence (MV3)
8. **ใช้ include/exclude** สำหรับ browser-specific code
