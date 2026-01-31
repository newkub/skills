---
name: Auto-imports
description: การใช้งาน auto-imports
priority: 6
impact: MEDIUM
---

# Auto-imports

## Overview

WXT มี Nuxt-like auto-imports เพื่อเร่งการพัฒนา โดย auto-import components, composables, hooks, และ utils

## Auto-imported Directories

### Default Auto-imported

| Directory | Description | Usage |
|-----------|-------------|-------|
| `components/` | UI components | ใช้ได้ทันทีโดยไม่ต้อง import |
| `composables/` | Composable functions (Vue) | ใช้ได้ทันทีโดยไม่ต้อง import |
| `hooks/` | Hooks (React/Solid) | ใช้ได้ทันทีโดยไม่ต้อง import |
| `utils/` | Utility functions | ใช้ได้ทันทีโดยไม่ต้อง import |

## Using Auto-imports

### Components

```vue
<!-- popup/App.vue -->
<template>
  <MyComponent />
</template>

<!-- ไม่ต้อง import -->
<!-- import MyComponent from '~/components/MyComponent.vue'; -->
```

### Composables

```typescript
// composables/useStorage.ts
export function useStorage(key: string, defaultValue: any) {
  const value = ref(defaultValue);
  
  onMounted(() => {
    browser.storage.local.get([key]).then((result) => {
      value.value = result[key] ?? defaultValue;
    });
  });
  
  const setValue = (newValue: any) => {
    value.value = newValue;
    browser.storage.local.set({ [key]: newValue });
  };
  
  return { value, setValue };
}
```

```typescript
// popup/main.ts
// ไม่ต้อง import
// import { useStorage } from '~/composables/useStorage';

const { value } = useStorage('myKey', 'default');
```

### Hooks

```typescript
// hooks/useExtension.ts
export function useExtension() {
  return {
    sendMessage: (message: any) => {
      return browser.runtime.sendMessage(message);
    },
  };
}
```

```typescript
// popup/main.ts
// ไม่ต้อง import
// import { useExtension } from '~/hooks/useExtension';

const { sendMessage } = useExtension();
```

### Utils

```typescript
// utils/format.ts
export function formatDate(date: Date): string {
  return date.toLocaleDateString();
}
```

```typescript
// popup/main.ts
// ไม่ต้อง import
// import { formatDate } from '~/utils/format';

const formatted = formatDate(new Date());
```

## Configuring Auto-imports

### Disable Auto-imports

```typescript
// wxt.config.ts
export default defineConfig({
  imports: {
    dirs: [], // Disable auto-imports
  },
});
```

### Add Custom Directories

```typescript
// wxt.config.ts
export default defineConfig({
  imports: {
    dirs: [
      'components',
      'composables',
      'hooks',
      'utils',
      'my-custom-dir', // Add custom directory
    ],
  },
});
```

### Add Specific Imports

```typescript
// wxt.config.ts
export default defineConfig({
  imports: {
    presets: [
      {
        from: 'lodash-es',
        imports: ['debounce', 'throttle'],
      },
    ],
  },
});
```

## Explicit Imports (#imports)

ใช้ `#imports` prefix เพื่อ import อย่างชัดเจน:

```typescript
// popup/main.ts
import { useStorage } from '#imports/composables/useStorage';
```

## TypeScript Support

WXT จะ generate types สำหรับ auto-imports อัตโนมัติ:

```typescript
// ไม่ต้อง import แต่ TypeScript จะรู้ว่ามี function นี้
const { value } = useStorage('myKey', 'default');
```

## ESLint Support

### Config ESLint

```typescript
// .eslintrc.js
module.exports = {
  plugins: ['import'],
  rules: {
    'import/no-unresolved': [
      'error',
      {
        ignore: ['^#imports/'],
      },
    ],
  },
};
```

## Best Practices

1. **Use auto-imports**: ใช้ auto-imports เพื่อเร่งการพัฒนา
2. **Keep auto-imported files minimal**: เก็บ files ใน auto-imported directories ให้น้อย
3. **Use explicit imports when needed**: ใช้ explicit imports เมื่อจำเป็น
4. **Configure ESLint**: Config ESLint เพื่อ support auto-imports
5. **Use #imports prefix**: ใช้ `#imports` prefix สำหรับ explicit imports

## Common Mistakes

1. **Not using auto-imports**: ไม่ใช้ auto-imports ทำให้ code ยาว
2. **Too many auto-imported files**: ไฟล์เยอะเกินไปทำให้ build ช้า
3. **Not configuring ESLint**: ไม่ config ESLint ทำให้ errors
4. **Not using #imports**: ไม่ใช้ `#imports` prefix สำหรับ explicit imports

## References

- [Auto-imports](https://wxt.dev/guide/essentials/config/auto-imports)
- [Unplugin Auto Import](https://github.com/antfu/unplugin-auto-import)
