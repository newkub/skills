---
name: Hooks
description: การใช้งาน hooks
priority: 8
impact: LOW
---

# Hooks

## Overview

Hooks ให้ run code ที่ขั้นตอนต่างๆ ใน build process เพื่อ modify build

## Adding Hooks

### In wxt.config.ts

```typescript
// wxt.config.ts
export default defineConfig({
  hooks: {
    buildManifest(manifest) {
      console.log('Building manifest:', manifest);
    },
  },
});
```

### In Modules

```typescript
// modules/my-module.ts
export default defineWxtModule({
  setup(wxt) {
    wxt.hooks.buildManifest((manifest) => {
      console.log('Building manifest:', manifest);
    });
  },
});
```

## Execution Order

Hooks จะถูก execute ตามลำดับ:

1. Config hooks (ใน wxt.config.ts)
2. Module hooks (ใน modules)

## Available Hooks

### buildManifest

```typescript
hooks: {
  buildManifest(manifest) {
    // Modify manifest
    manifest.permissions?.push('notifications');
  },
}
```

### buildEntrypoint

```typescript
hooks: {
  buildEntrypoint(entrypoint) {
    console.log('Building entrypoint:', entrypoint.name);
  },
}
```

### buildDone

```typescript
hooks: {
  buildDone(ctx) {
    console.log('Build done:', ctx.outDir);
  },
}
```

## Common Hook Use Cases

### Add Permissions

```typescript
hooks: {
  buildManifest(manifest) {
    manifest.permissions?.push('notifications', 'storage');
  },
}
```

### Add Icons

```typescript
hooks: {
  buildManifest(manifest) {
    manifest.icons = {
      '16': 'icon16.png',
      '48': 'icon48.png',
      '128': 'icon128.png',
    };
  },
}
```

### Modify Entrypoints

```typescript
hooks: {
  buildEntrypoint(entrypoint) {
    if (entrypoint.type === 'popup') {
      // Add analytics
      entrypoint.imports?.push('~/utils/analytics');
    }
  },
}
```

### Generate Files

```typescript
hooks: {
  buildDone(ctx) {
    // Generate additional files
    console.log('Build done:', ctx.outDir);
  },
}
```

## Hooks in Modules

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

## Best Practices

1. **Use hooks for dynamic config**: ใช้ hooks สำหรับ config ที่ต้องการ dynamic modification
2. **Keep hooks minimal**: เก็บ logic ใน hooks ให้น้อยที่สุด
3. **Use modules for reusable hooks**: ใช้ modules สำหรับ hooks ที่ใช้หลาย projects
4. **Test hooks**: Test hooks อย่างละเอียด
5. **Document hooks**: Document hooks อย่างชัดเจน

## Common Mistakes

1. **Not using hooks**: ไม่ใช้ hooks ทำให้ไม่สามารถ modify build ได้
2. **Too much logic in hooks**: Logic เยอะเกินไปใน hooks
3. **Not documenting hooks**: ไม่ document hooks
4. **Not testing hooks**: ไม่ test hooks

## References

- [Hooks](https://wxt.dev/guide/essentials/config/hooks)
- [WXT Modules](https://wxt.dev/guide/essentials/wxt-modules)
