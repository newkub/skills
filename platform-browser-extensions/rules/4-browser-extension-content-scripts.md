# Browser Extension Content Scripts

Content scripts คือ scripts ที่ทำงานใน context ของ web pages ช่วยให้ extension สามารถเข้าถึงและแก้ไข DOM ของ page ได้

## Basic Content Script

```typescript
// entrypoints/content.ts
export default defineContentScript({
  matches: ['*://*/*'],
  main(ctx) {
    console.log('Content script loaded');
  },
});
```

## Content Script Context

Context object เป็น argument แรกของ `main()` function:

```typescript
export default defineContentScript({
  matches: ['*://*/*'],
  main(ctx) {
    // ctx ใช้ tracking ว่า context ยัง valid อยู่หรือไม่
  },
});
```

### Context Methods

Context มี methods สำหรับหยุด asynchronous code เมื่อ context ถูก invalidate:

```typescript
ctx.addEventListener(...)
ctx.setTimeout(...)
ctx.setInterval(...)
ctx.requestAnimationFrame(...)
// และอื่นๆ
```

### Check Context Validity

```typescript
if (ctx.isValid) {
  // do something
}

// หรือ

if (ctx.isInvalid) {
  // do something
}
```

## Content Script Options

```typescript
export default defineContentScript({
  // Manifest options
  matches: string[],                    // URL patterns
  excludeMatches: undefined | [],       // URL patterns to exclude
  includeGlobs: undefined | [],         // Glob patterns to include
  excludeGlobs: undefined | [],         // Glob patterns to exclude
  allFrames: undefined | true | false,  // Run in all frames
  runAt: undefined | 'document_start' | 'document_end' | 'document_idle',
  matchAboutBlank: undefined | true | false,
  matchOriginAsFallback: undefined | true | false,
  world: undefined | 'ISOLATED' | 'MAIN',
  
  // Build configuration
  include: undefined | string[],        // Include in specific builds
  exclude: undefined | string[],        // Exclude from specific builds
  
  // CSS injection
  cssInjectionMode: undefined | "manifest" | "manual" | "ui",
  
  // Registration
  registration: undefined | "manifest" | "runtime",
  
  main(ctx: ContentScriptContext) {
    // Executed when content script is loaded, can be async
  },
});
```

## CSS in Content Scripts

### Import CSS

```typescript
// entrypoints/example.content.ts
import './style.css';

export default defineContentScript({
  matches: ['*://*/*'],
  main(ctx) {
    // CSS will be automatically added to the manifest
  },
});
```

### Standalone CSS Content Script

สร้าง CSS file:

```css
/* entrypoints/example.content.css */
body {
  background-color: red;
}
```

ใช้ hook เพื่อเพิ่มลง manifest:

```typescript
// wxt.config.ts
export default defineConfig({
  hooks: {
    'build:manifestGenerated': (wxt, manifest) => {
      manifest.content_scripts ??= [];
      manifest.content_scripts.push({
        css: ['content-scripts/example.css'],
        matches: ['*://*/*'],
      });
    },
  },
});
```

## Content Script UI

WXT มี 3 built-in utilities สำหรับเพิ่ม UI ใน page:

### Integrated UI

```typescript
import { createIntegratedUi } from 'wxt/client';

export default defineContentScript({
  matches: ['*://*/*'],
  main(ctx) {
    const ui = createIntegratedUi({
      position: 'top-right',
      mount(container) {
        // Mount your UI to container
        container.innerHTML = '<div>Hello!</div>';
      },
      remove(container) {
        // Remove your UI from container
        container.innerHTML = '';
      },
    });
  },
});
```

### Shadow Root UI

```typescript
import { createShadowRootUi } from 'wxt/client';

export default defineContentScript({
  matches: ['*://*/*'],
  main(ctx) {
    const ui = createShadowRootUi({
      name: 'my-extension',
      position: 'inline',
      anchor: 'body',
      append: 'first',
      mount(container) {
        container.innerHTML = '<div>Hello!</div>';
      },
      remove(container) {
        container.innerHTML = '';
      },
    });
  },
});
```

### IFrame UI

```typescript
import { createIframeUi } from 'wxt/client';

export default defineContentScript({
  matches: ['*://*/*'],
  main(ctx) {
    const ui = createIframeUi({
      page: '/popup.html',
      position: 'top-right',
    });
  },
});
```

## Isolated World vs Main World

### Isolated World (Default)

Content scripts ทำงานใน isolated context โดยมีเพียง DOM ที่ shared กับ webpage

### Main World

สำหรับ MV3, Chromium รองรับ content scripts ใน main world:

```typescript
export default defineContentScript({
  world: 'MAIN',
  matches: ['*://*/*'],
  main(ctx) {
    console.log('Running in main world');
  },
});
```

**Drawbacks:**
- ไม่รองรับ MV2
- รองรับเฉพาะ Chromium browsers
- Main world content scripts ไม่มี access ถึง extension API

### Inject Script to Main World

ใช้ `injectScript` function แทน:

```typescript
// entrypoints/example.content.ts
export default defineContentScript({
  matches: ['*://*/*'],
  async main() {
    await injectScript('/example-main-world.js', {
      keepInDom: true,
    });
  },
});
```

```typescript
// entrypoints/example-main-world.ts
export default defineUnlistedScript(() => {
  console.log('Hello from the main world');
});
```

ต้องเพิ่มใน `web_accessible_resources`:

```typescript
export default defineConfig({
  manifest: {
    web_accessible_resources: [
      {
        resources: ["example-main-world.js"],
        matches: ["*://*/*"],
      },
    ],
  },
});
```

### injectScript Options

```typescript
await injectScript('/example-main-world.js', {
  keepInDom: true,
  modifyScript(script) {
    script.dataset['greeting'] = 'Hello there';
  },
});
```

## Important Notes

1. **Build-time Import**: WXT จะ import file ใน NodeJS environment ระหว่าง build ดังนั้น runtime code ต้องอยู่ใน `main()` function
2. **Context Invalidation**: ใช้ ctx methods เพื่อหยุด code เมื่อ extension ถูก uninstall/update/disable
3. **CSS Injection**: Import CSS จะถูก auto-add ลง manifest
4. **World Isolation**: ใช้ `injectScript` สำหรับ main world access
5. **UI Isolation**: ใช้ shadow root หรือ iframe เพื่อ isolate styles

## Best Practices

1. **ใช้ ctx methods** สำหรับ asynchronous operations
2. **ใช้ shadow root UI** เพื่อ avoid style conflicts
3. **ใช้ injectScript** สำหรับ main world access
4. **Import CSS** ใน content script files
5. **Check context validity** ก่อนทำ operations
6. **Use registration: 'runtime'** สำหรับ dynamic content scripts
