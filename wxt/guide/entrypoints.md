# WXT Entrypoints

## Background Script

```typescript
// entrypoints/background.ts
export default defineBackground(() => {
  console.log('Background script loaded')
})
```

## Popup Page

```typescript
// entrypoints/popup/index.html
<!DOCTYPE html>
<html>
  <head>
    <title>Popup</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="./main.tsx"></script>
  </body>
</html>
```

```typescript
// entrypoints/popup/main.tsx
export default defineContentScript({
  matches: ['<all_urls>'],
  main() {
    console.log('Content script loaded')
  },
})
```

## Options Page

```html
<!-- entrypoints/options/index.html -->
<!DOCTYPE html>
<html>
  <head>
    <title>Options</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="./main.tsx"></script>
  </body>
</html>
```

## Content Script

```typescript
// entrypoints/content.ts
export default defineContentScript({
  matches: ['<all_urls>'],
  main() {
    console.log('Content script loaded')
  },
})
```

## Manifest Configuration

```typescript
// entrypoints/background.ts
export default defineBackground({
  manifest: {
    permissions: ['storage'],
  },
  main() {
    console.log('Background script loaded')
  },
})
```
