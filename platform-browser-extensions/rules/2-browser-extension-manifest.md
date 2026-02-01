# Browser Extension Manifest Configuration

Manifest คือไฟล์หลักที่ browser ใช้เพื่อเข้าใจ extension ของคุณ WXT ช่วยให้การจัดการ manifest ง่ายขึ้น

## Global Manifest Options

ใช้ `manifest` config ใน `wxt.config.ts` เพื่อเพิ่ม properties ใน manifest:

```typescript
// wxt.config.ts
export default defineConfig({
  manifest: {
    // Put manual changes here
  },
});
```

## Dynamic Manifest

สามารถใช้ function เพื่อ generate manifest ตาม target browser, mode, และอื่นๆ:

```typescript
export default defineConfig({
  manifest: ({ browser, manifestVersion, mode, command }) => {
    return {
      // ... dynamic manifest
    };
  },
});
```

## Name

ถ้าไม่ได้ระบุใน manifest config, name จะใช้ค่าจาก `package.json`:

```json
{
  "name": "my-extension"
}
```

## Version

Version และ version_name จะใช้ค่าจาก `package.json`:

```json
{
  "version": "1.3.0-alpha2"
}
```

จะถูกแปลงเป็น:

```json
{
  "version": "1.3.0",
  "version_name": "1.3.0-alpha2"
}
```

ถ้าไม่มี version จะ default เป็น `"0.0.0"`

## Icons

WXT จะ auto-discover icons จาก `public/` directory โดยดูจากชื่อไฟล์:

```
public/
├── icon-16.png
├── icon-24.png
├── icon-48.png
├── icon-96.png
└── icon-128.png
```

### Icon Patterns

- `icon-([0-9]+).png` - icon-16.png
- `icon-([0-9]+)x[0-9]+.png` - icon-16x16.png
- `icon@([0-9]+)w.png` - icon@16w.png
- `icon@([0-9]+)h.png` - icon@16h.png
- `icon@([0-9]+).png` - icon@16.png
- `icons?[/\\]([0-9]+).png` - icon/16.png | icons/16.png
- `icons?[/\\]([0-9]+)x[0-9]+.png` - icon/16x16.png | icons/16x16.png

### Manual Icons

ถ้าไม่ต้องการใช้ pattern สามารถระบุ manually:

```typescript
export default defineConfig({
  manifest: {
    icons: {
      16: '/extension-icon-16.png',
      24: '/extension-icon-24.png',
      48: '/extension-icon-48.png',
      96: '/extension-icon-96.png',
      128: '/extension-icon-128.png',
    },
  },
});
```

### Auto Icons

ใช้ `@wxt-dev/auto-icons` เพื่อ generate icons อัตโนมัติ:

```bash
pnpm add -D @wxt-dev/auto-icons
```

## Permissions

### Manual Permissions

```typescript
export default defineConfig({
  manifest: {
    permissions: ['storage', 'tabs'],
  },
});
```

### Auto-added Permissions

WXT จะ auto-add permissions ในบางสถานการณ์:
- **Development**: `tabs` และ `scripting` permissions สำหรับ hot reloading
- **Sidepanel**: `sidepanel` permission เมื่อมี sidepanel entrypoint

### Host Permissions

```typescript
export default defineConfig({
  manifest: {
    host_permissions: ['*://*.example.com/*'],
  },
});
```

## Default Locale

```typescript
export default defineConfig({
  manifest: {
    default_locale: 'en',
  },
});
```

## Actions

### Action With Popup

Popup entrypoint จะ auto-create action:

```html
<!-- entrypoints/popup.html -->
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Default Popup Title</title>
</head>
<body>
  <!-- ... -->
</body>
</html>
```

### Action Without Popup

ถ้าไม่มี popup, สามารถระบุใน manifest:

```typescript
export default defineConfig({
  manifest: {
    action: {
      default_title: 'My Extension',
      default_icon: {
        16: '/icon-16.png',
        48: '/icon-48.png',
      },
    },
  },
});
```

## Web Accessible Resources

```typescript
export default defineConfig({
  manifest: {
    web_accessible_resources: [
      {
        resources: ['example-main-world.js'],
        matches: ['*://*/*'],
      },
    ],
  },
});
```

## Best Practices

1. **ใช้ package.json** สำหรับ name และ version
2. **ใช้ icon patterns** ที่ WXT รองรับ
3. **ระบุ permissions** เฉพาะที่จำเป็น
4. **ใช้ dynamic manifest** สำหรับ browser-specific configs
5. **ใช้ web_accessible_resources** สำหรับ scripts ที่ต้องเข้าถึงจาก page
