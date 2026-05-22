---
name: Content Scripts
description: การใช้งาน content scripts
priority: 4
impact: MEDIUM
---

# Content Scripts

## Overview

Content scripts เป็น scripts ที่ inject เข้าไปใน web pages เพื่อเข้าถึงและ modify DOM

## Creating Content Scripts

### Basic Content Script

```typescript
// entrypoints/content.ts
export default defineContentScript({
  matches: ['*://*.wxt.dev/*'],
  main() {
    console.log('Content script loaded');
  },
});
```

### Context Parameter

```typescript
export default defineContentScript({
  matches: ['*://*.wxt.dev/*'],
  main(ctx) {
    console.log('Content script loaded');
    console.log('Tab ID:', ctx.tabId);
    console.log('Frame ID:', ctx.frameId);
  },
});
```

## Content Script Options

### Common Options

| Option | Type | Description |
|--------|------|-------------|
| `matches` | string[] | URL patterns ที่ content script จะ inject |
| `exclude_matches` | string[] | URL patterns ที่ไม่ inject |
| `run_at` | string | เวลาที่ script จะ run (`document_start`, `document_end`, `document_idle`) |
| `all_frames` | boolean | Inject ทุก frames หรือแค่ top frame |
| `css` | string[] | CSS files ที่จะ inject |
| `js` | string[] | JS files ที่จะ inject |
| `include` | string[] | Browsers ที่จะ build |
| `exclude` | string[] | Browsers ที่ไม่ build |

### Example with Options

```typescript
export default defineContentScript({
  matches: ['*://*.wxt.dev/*'],
  exclude_matches: ['*://*.wxt.dev/admin/*'],
  run_at: 'document_idle',
  all_frames: false,
  main(ctx) {
    // Content script logic
  },
});
```

## UI in Content Scripts

### Integrated UI

```typescript
export default defineContentScript({
  matches: ['*://*.wxt.dev/*'],
  main(ctx) {
    // Create UI directly in the page
    const div = document.createElement('div');
    div.textContent = 'Hello from extension!';
    document.body.appendChild(div);
  },
});
```

### Shadow Root UI

```typescript
export default defineContentScript({
  matches: ['*://*.wxt.dev/*'],
  cssInjectionMode: 'ui',
  main(ctx) {
    // Create UI in shadow root
    const ui = createShadowRootUi(ctx, {
      name: 'my-extension-ui',
      position: 'inline',
      onMount: (container) => {
        const div = document.createElement('div');
        div.textContent = 'Hello from extension!';
        container.appendChild(div);
      },
      onRemove: (container) => {
        container.remove();
      },
    });
    ui.mount();
  },
});
```

### IFrame UI

```typescript
export default defineContentScript({
  matches: ['*://*.wxt.dev/*'],
  main(ctx) {
    // Create UI in iframe
    const iframe = document.createElement('iframe');
    iframe.src = browser.runtime.getURL('entrypoints/iframe.html');
    document.body.appendChild(iframe);
  },
});
```

## Isolated World vs Main World

### Isolated World (Default)

```typescript
export default defineContentScript({
  matches: ['*://*.wxt.dev/*'],
  world: 'ISOLATED', // Default
  main() {
    // Cannot access page's variables
    console.log(window.myVariable); // undefined
  },
});
```

### Main World

```typescript
export default defineContentScript({
  matches: ['*://*.wxt.dev/*'],
  world: 'MAIN',
  main() {
    // Can access page's variables
    console.log(window.myVariable); // Works
  },
});
```

## Dealing with SPAs

### Watch for Navigation

```typescript
export default defineContentScript({
  matches: ['*://*.wxt.dev/*'],
  main(ctx) {
    // Handle SPA navigation
    const observer = new MutationObserver(() => {
      // React to DOM changes
    });
    observer.observe(document.body, { childList: true, subtree: true });
  },
});
```

### Use CSS Injection Mode

```typescript
export default defineContentScript({
  matches: ['*://*.wxt.dev/*'],
  cssInjectionMode: 'ui',
  main(ctx) {
    // UI will be preserved across SPA navigations
    const ui = createShadowRootUi(ctx, {
      name: 'my-extension-ui',
      position: 'inline',
      onMount: (container) => {
        const div = document.createElement('div');
        div.textContent = 'Hello from extension!';
        container.appendChild(div);
      },
      onRemove: (container) => {
        container.remove();
      },
    });
    ui.mount();
  },
});
```

## Best Practices

1. **Use defineContentScript**: ใช้ helper function ที่ WXT ให้มา
2. **Specify matches**: ระบุ matches อย่างชัดเจน
3. **Use run_at**: กำหนด run_at ที่เหมาะสม
4. **Use shadow root for UI**: ใช้ shadow root เพื่อ isolate styles
5. **Handle SPAs**: จัดการ SPA navigation อย่างถูกต้อง
6. **Use isolated world**: ใช้ isolated world โดย default เพื่อ security
7. **Use main world carefully**: ใช้ main world เฉพาะเมื่อจำเป็น

## Common Mistakes

1. **Not specifying matches**: ไม่ระบุ matches ทำให้ไม่ inject
2. **Wrong URL patterns**: URL patterns ไม่ถูกต้อง
3. **Not handling SPAs**: ไม่จัดการ SPA navigation
4. **Not using shadow root**: ไม่ใช้ shadow root ทำให้ styles ซ้ำซ้อน
5. **Using main world unnecessarily**: ใช้ main world เมื่อไม่จำเป็น

## References

- [Content Scripts](https://wxt.dev/guide/essentials/content-scripts)
- [Entrypoints](https://wxt.dev/guide/essentials/entrypoints)
