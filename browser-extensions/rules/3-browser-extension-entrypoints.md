# Browser Extension Entrypoints

WXT ใช้ file-based entrypoints ซึ่ง manifest ถูก generate จากไฟล์ใน `entrypoints/` directory

## Entrypoint Definition

Entrypoint ถูกกำหนดจากไฟล์เดียวหรือ directory ที่มี index file:

```
entrypoints/
├── {name}.{ext}           # Single file
└── {name}/
    └── index.{ext}        # Directory with index
```

## Background Scripts

### Basic Background Script

```typescript
// entrypoints/background.ts
export default defineBackground(() => {
  // Executed when background is loaded
  console.log('Background script loaded');
});
```

### Advanced Background Script

```typescript
export default defineBackground({
  // Set manifest options
  persistent: undefined | true | false,
  type: undefined | 'module',
  
  // Set include/exclude if the background should be removed from some builds
  include: undefined | string[],
  exclude: undefined | string[],
  
  main() {
    // Executed when background is loaded, CANNOT BE ASYNC
    console.log('Background script loaded');
  },
});
```

### Important Notes

- **MV2**: Background เป็น script บน background page
- **MV3**: Background เป็น service worker
- **Build-time Import**: WXT จะ import file ใน NodeJS environment ระหว่าง build ดังนั้น runtime code ต้องอยู่ใน `main()` function

## Pages

### Popup Page

```html
<!-- entrypoints/popup.html -->
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Default Popup Title</title>
  <!-- Customize manifest options -->
  <meta name="manifest.default_icon" content="{ 16: '/icon-16.png', 24: '/icon-24.png' }" />
  <meta name="manifest.type" content="page_action|browser_action" />
  <meta name="manifest.browser_style" content="true|false" />
  <!-- Set include/exclude -->
  <meta name="manifest.include" content="['chrome', ...]" />
  <meta name="manifest.exclude" content="['chrome', ...]" />
</head>
<body>
  <!-- ... -->
</body>
</html>
```

### Options Page

```html
<!-- entrypoints/options.html -->
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Options Title</title>
  <!-- Customize manifest options -->
  <meta name="manifest.open_in_tab" content="true|false" />
  <meta name="manifest.chrome_style" content="true|false" />
  <meta name="manifest.browser_style" content="true|false" />
  <!-- Set include/exclude -->
  <meta name="manifest.include" content="['chrome', ...]" />
  <meta name="manifest.exclude" content="['chrome', ...]" />
</head>
<body>
  <!-- ... -->
</body>
</html>
```

### Newtab Page

```html
<!-- entrypoints/newtab.html -->
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Title</title>
  <!-- Set include/exclude -->
  <meta name="manifest.include" content="['chrome', ...]" />
  <meta name="manifest.exclude" content="['chrome', ...]" />
</head>
<body>
  <!-- ... -->
</body>
</html>
```

### History Page

```html
<!-- entrypoints/history.html -->
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Title</title>
  <!-- Set include/exclude -->
  <meta name="manifest.include" content="['chrome', ...]" />
  <meta name="manifest.exclude" content="['chrome', ...]" />
</head>
<body>
  <!-- ... -->
</body>
</html>
```

### Bookmarks Page

```html
<!-- entrypoints/bookmarks.html -->
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Title</title>
  <!-- Set include/exclude -->
  <meta name="manifest.include" content="['chrome', ...]" />
  <meta name="manifest.exclude" content="['chrome', ...]" />
</head>
<body>
  <!-- ... -->
</body>
</html>
```

### Devtools Page

```html
<!-- entrypoints/devtools.html -->
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <!-- Set include/exclude -->
  <meta name="manifest.include" content="['chrome', ...]" />
  <meta name="manifest.exclude" content="['chrome', ...]" />
</head>
<body>
  <!-- ... -->
</body>
</html>
```

### Side Panel

```html
<!-- entrypoints/sidepanel.html -->
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Default Side Panel Title</title>
  <!-- Customize manifest options -->
  <meta name="manifest.default_icon" content="{ 16: '/icon-16.png', 24: '/icon-24.png' }" />
  <meta name="manifest.open_at_install" content="true|false" />
  <meta name="manifest.browser_style" content="true|false" />
  <!-- Set include/exclude -->
  <meta name="manifest.include" content="['chrome', ...]" />
  <meta name="manifest.exclude" content="['chrome', ...]" />
</head>
<body>
  <!-- ... -->
</body>
</html>
```

**Note**: Chrome ใช้ `side_panel` API, Firefox ใช้ `sidebar_action` API

### Sandbox Page

```html
<!-- entrypoints/sandbox.html -->
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Title</title>
  <!-- Set include/exclude -->
  <meta name="manifest.include" content="['chrome', ...]" />
  <meta name="manifest.exclude" content="['chrome', ...]" />
</head>
<body>
  <!-- ... -->
</body>
</html>
```

**Note**: Chromium only, Firefox ไม่รองรับ sandboxed pages

## Content Scripts

### Basic Content Script

```typescript
// entrypoints/content.ts
export default defineContentScript({
  matches: ['*://*/*'],
  main(ctx) {
    // Executed when content script is loaded, can be async
    console.log('Content script loaded');
  },
});
```

### Advanced Content Script

```typescript
export default defineContentScript({
  // Set manifest options
  matches: string[],
  excludeMatches: undefined | [],
  includeGlobs: undefined | [],
  excludeGlobs: undefined | [],
  allFrames: undefined | true | false,
  runAt: undefined | 'document_start' | 'document_end' | 'document_idle',
  matchAboutBlank: undefined | true | false,
  matchOriginAsFallback: undefined | true | false,
  world: undefined | 'ISOLATED' | 'MAIN',
  
  // Set include/exclude
  include: undefined | string[],
  exclude: undefined | string[],
  
  // Configure how CSS is injected
  cssInjectionMode: undefined | "manifest" | "manual" | "ui",
  
  // Configure how/when content script will be registered
  registration: undefined | "manifest" | "runtime",
  
  main(ctx: ContentScriptContext) {
    // Executed when content script is loaded, can be async
  },
});
```

### Named Content Scripts

```typescript
// entrypoints/example.content.ts
export default defineContentScript({
  matches: ['*://example.com/*'],
  main(ctx) {
    console.log('Content script for example.com');
  },
});
```

### Important Notes

- **Build-time Import**: WXT จะ import file ใน NodeJS environment ระหว่าง build ดังนั้น runtime code ต้องอยู่ใน `main()` function

## Unlisted Scripts

```typescript
// entrypoints/{name}.ts
export default defineUnlistedScript(() => {
  // Executed when script is loaded
});
```

### Advanced Unlisted Script

```typescript
export default defineUnlistedScript({
  include: undefined | string[],
  exclude: undefined | string[],
  main() {
    // Executed when script is loaded
  },
});
```

### Accessing Unlisted Scripts

```typescript
const url = browser.runtime.getURL('/{name}.js');
console.log(url); // "chrome-extension://{id}/{name}.js"
```

**Note**: ต้องเพิ่ม script และ assets ที่เกี่ยวข้องใน `web_accessible_resources`

## Unlisted Pages

```html
<!-- entrypoints/{name}.html -->
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Title</title>
  <!-- Set include/exclude -->
  <meta name="manifest.include" content="['chrome', ...]" />
  <meta name="manifest.exclude" content="['chrome', ...]" />
</head>
<body>
  <!-- ... -->
</body>
</html>
```

### Accessing Unlisted Pages

```typescript
const url = browser.runtime.getURL('/{name}.html');
console.log(url); // "chrome-extension://{id}/{name}.html"
window.open(url); // Open the page in a new tab
```

## Unlisted CSS

```css
/* entrypoints/{name}.css */
body {
  /* ... */
}
```

### Content Script CSS

```css
/* entrypoints/content.css */
body {
  /* ... */
}
```

### Named Content Script CSS

```css
/* entrypoints/{name}.content.css */
body {
  /* ... */
}
```

## Best Practices

1. **ใช้ directory structure** สำหรับ entrypoints ที่ซับซ้อน
2. **ระบุ include/exclude** สำหรับ browser-specific features
3. **ใช้ main() function** สำหรับ runtime code
4. **ใช้ named content scripts** สำหรับ matches ที่แตกต่าง
5. **ใช้ unlisted scripts/pages** สำหรับ resources ที่ไม่ต้องการ manifest entry
