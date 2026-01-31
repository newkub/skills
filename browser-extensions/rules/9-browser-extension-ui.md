# Browser Extension UI Components

UI สำหรับ browser extensions ต้องถูกสร้างอย่างระมัดระวังเพื่อ avoid conflicts

## Popup UI

### Basic Popup

```html
<!-- entrypoints/popup.html -->
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>My Extension</title>
  <style>
    body {
      width: 300px;
      padding: 16px;
    }
  </style>
</head>
<body>
  <h1>My Extension</h1>
  <div id="app"></div>
  <script src="./popup.ts"></script>
</body>
</html>
```

```typescript
// entrypoints/popup.ts
import { createApp } from 'vue';

createApp({
  data() {
    return {
      message: 'Hello World',
    };
  },
}).mount('#app');
```

### Popup Size

```typescript
// wxt.config.ts
export default defineConfig({
  manifest: {
    action: {
      default_popup: 'popup.html',
    },
  },
});
```

## Options UI

### Basic Options

```html
<!-- entrypoints/options.html -->
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Options</title>
  <meta name="manifest.open_in_tab" content="true" />
</head>
<body>
  <h1>Options</h1>
  <div id="app"></div>
  <script src="./options.ts"></script>
</body>
</html>
```

## Content Script UI

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
        const app = document.createElement('div');
        app.innerHTML = '<h1>Hello!</h1>';
        container.appendChild(app);
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

## Best Practices

1. **ใช้ shadow root** สำหรับ content script UI
2. **ใช้ iframe** สำหรับ isolated UI
3. **กำหนด popup size** อย่างเหมาะสม
4. **ใช้ responsive design** สำหรับ options page
5. **Clean up UI** เมื่อ content script unload
6. **Use CSS isolation** สำหรับ content scripts
