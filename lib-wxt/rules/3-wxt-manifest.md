---
name: Manifest Configuration
description: การกำหนดค่า manifest ใน WXT
priority: 3
impact: HIGH
---

# Manifest Configuration

## Overview

ใน WXT ไม่มีไฟล์ `manifest.json` ใน source code แต่ manifest ถูก generate จากหลายแหล่ง

## Manifest Generation

Manifest ถูก generate จาก:

1. **Global options** ใน `wxt.config.ts`
2. **Entrypoint-specific options** ในแต่ละ entrypoint
3. **WXT Modules** ที่ add ไปยัง project
4. **Hooks** ที่ define ใน project

## Output Location

Manifest จะถูก output ไปยัง:
```
.output/{target}/manifest.json
```

เมื่อ run:
```bash
wxt build
```

## Global Options (wxt.config.ts)

### Basic Config

```typescript
export default defineConfig({
  manifest: {
    name: 'My Extension',
    version: '1.0.0',
    description: 'My awesome extension',
    permissions: ['storage'],
  },
});
```

### Browser-specific Config

```typescript
export default defineConfig({
  manifest: {
    name: 'My Extension',
    version: '1.0.0',
    // Chrome-specific
    chrome: {
      permissions: ['tabs'],
    },
    // Firefox-specific
    firefox: {
      permissions: ['webRequest'],
    },
  },
});
```

## Entrypoint-specific Options

### Content Scripts

```typescript
export default defineContentScript({
  matches: ['*://*.wxt.dev/*'],
  runAt: 'document_idle',
  main() {
    // Content script logic
  },
});
```

### Popup Pages

```html
<!doctype html>
<html lang="en">
  <head>
    <meta name="manifest.type" content="popup" />
    <meta name="manifest.default_title" content="My Extension" />
  </head>
</html>
```

## WXT Modules

Modules สามารถ modify manifest ได้:

```typescript
// modules/my-module.ts
export default defineWxtModule({
  setup(wxt) {
    wxt.hooks.buildManifest((manifest) => {
      manifest.permissions?.push('notifications');
    });
  },
});
```

## Hooks

Hooks สามารถ modify manifest ได้:

```typescript
// wxt.config.ts
export default defineConfig({
  hooks: {
    buildManifest(manifest) {
      manifest.permissions?.push('notifications');
    },
  },
});
```

## Manifest Options

### Common Options

| Option | Type | Description |
|--------|------|-------------|
| `name` | string | ชื่อ extension |
| `version` | string | Version ของ extension |
| `version_name` | string | Display version |
| `icons` | object | Icons สำหรับ extension |
| `permissions` | string[] | Permissions ที่ต้องการ |
| `host_permissions` | string[] | Host permissions |
| `default_locale` | string | Default locale |
| `action` | object | Action configuration |

### Actions

```typescript
manifest: {
  action: {
    default_icon: {
      '16': 'icon16.png',
      '48': 'icon48.png',
      '128': 'icon128.png',
    },
    default_title: 'My Extension',
    default_popup: 'popup.html',
  },
}
```

## Best Practices

1. **Use wxt.config.ts for global config**: Config ที่ใช้ร่วมกันทั้ง project
2. **Use entrypoint-specific options**: Config ที่เฉพาะกับ entrypoint
3. **Use modules for reusable config**: Config ที่ใช้หลาย projects
4. **Use hooks for dynamic config**: Config ที่ต้องการ dynamic modification
5. **Keep manifest minimal**: เพิ่ม permissions และ options เท่าที่จำเป็น

## Common Mistakes

1. **Creating manifest.json manually**: WXT จะ generate manifest ให้อัตโนมัติ
2. **Not using entrypoint options**: ไม่ใช้ options ใน entrypoints
3. **Over-configuring**: Config เยอะเกินไปทำให้ manifest ซับซ้อน
4. **Wrong manifest version**: ไม่ระบุ manifest version ที่ถูกต้อง

## References

- [Manifest](https://wxt.dev/guide/essentials/config/manifest)
- [Entrypoints](https://wxt.dev/guide/essentials/entrypoints)
- [WXT Modules](https://wxt.dev/guide/essentials/wxt-modules)
- [Hooks](https://wxt.dev/guide/essentials/config/hooks)
