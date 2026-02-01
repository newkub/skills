---
name: Modules
description: การใช้งาน WXT modules
priority: 7
impact: LOW
---

# Modules

## Overview

WXT มี module system ที่ให้ run code ที่ขั้นตอนต่างๆ ใน build process เพื่อ modify build

## Adding a Module

### Local Module

```typescript
// modules/my-module.ts
export default defineWxtModule({
  setup(wxt) {
    console.log('Module setup');
  },
});
```

### External Module

```typescript
// wxt.config.ts
export default defineConfig({
  modules: [
    'wxt-module-analytics',
    'wxt-module-i18n',
  ],
});
```

## Module Options

### Basic Module

```typescript
export default defineWxtModule({
  setup(wxt) {
    console.log('Module setup');
  },
});
```

### Module with Options

```typescript
export default defineWxtModule({
  setup(wxt, options) {
    console.log('Module setup with options:', options);
  },
}, {
  // Default options
  enabled: true,
});
```

## Execution Order

Modules จะถูก execute ตามลำดับที่ define:

```typescript
// wxt.config.ts
export default defineConfig({
  modules: [
    'module-a', // Execute first
    'module-b', // Execute second
    'module-c', // Execute third
  ],
});
```

## Writing Modules

### Basic Module

```typescript
// modules/my-module.ts
export default defineWxtModule({
  setup(wxt) {
    // Run during build
    console.log('Module setup');
  },
});
```

### Module with Hooks

```typescript
// modules/my-module.ts
export default defineWxtModule({
  setup(wxt) {
    // Modify manifest
    wxt.hooks.buildManifest((manifest) => {
      manifest.permissions?.push('notifications');
    });
    
    // Modify entrypoints
    wxt.hooks.buildEntrypoint((entrypoint) => {
      console.log('Building entrypoint:', entrypoint.name);
    });
  },
});
```

### Module with Recipes

#### Add Analytics

```typescript
// modules/analytics.ts
export default defineWxtModule({
  setup(wxt) {
    wxt.hooks.buildEntrypoint((entrypoint) => {
      if (entrypoint.type === 'popup') {
        // Add analytics to popup
        entrypoint.imports?.push('~/utils/analytics');
      }
    });
  },
});
```

#### Add I18n Support

```typescript
// modules/i18n.ts
export default defineWxtModule({
  setup(wxt) {
    wxt.hooks.buildManifest((manifest) => {
      manifest.default_locale = 'en';
    });
  },
});
```

## Example Modules

### Module for Analytics

```typescript
// modules/analytics.ts
export default defineWxtModule({
  setup(wxt) {
    wxt.hooks.buildEntrypoint((entrypoint) => {
      if (entrypoint.type === 'popup' || entrypoint.type === 'options') {
        entrypoint.imports?.push('~/utils/analytics');
      }
    });
  },
});
```

### Module for Icons

```typescript
// modules/icons.ts
export default defineWxtModule({
  setup(wxt) {
    wxt.hooks.buildManifest((manifest) => {
      manifest.icons = {
        '16': 'icon16.png',
        '48': 'icon48.png',
        '128': 'icon128.png',
      };
    });
  },
});
```

### Module for Storage

```typescript
// modules/storage.ts
export default defineWxtModule({
  setup(wxt) {
    wxt.hooks.buildManifest((manifest) => {
      manifest.permissions?.push('storage');
    });
  },
});
```

## Using Modules in Config

```typescript
// wxt.config.ts
export default defineConfig({
  modules: [
    // Local modules
    './modules/my-module',
    
    // External modules
    'wxt-module-analytics',
    'wxt-module-i18n',
  ],
});
```

## Best Practices

1. **Use modules for reusable code**: ใช้ modules สำหรับ code ที่ใช้หลาย projects
2. **Keep modules focused**: แต่ละ module ควรมีความรับผิดชอบชัดเจน
3. **Use hooks**: ใช้ hooks เพื่อ modify build process
4. **Document modules**: Document modules อย่างชัดเจน
5. **Test modules**: Test modules อย่างละเอียด

## Common Mistakes

1. **Not using modules**: ไม่ใช้ modules ทำให้ code ซ้ำซ้อน
2. **Too much logic in modules**: Logic เยอะเกินไปใน modules
3. **Not documenting modules**: ไม่ document modules
4. **Not testing modules**: ไม่ test modules

## References

- [WXT Modules](https://wxt.dev/guide/essentials/wxt-modules)
- [Hooks](https://wxt.dev/guide/essentials/config/hooks)
