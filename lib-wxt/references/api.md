# API - WXT

## Entrypoint Functions

### defineBackground

```typescript
export default defineBackground((wxt) => {
  // wxt: Wxt instance
})
```

### defineContentScript

```typescript
export default defineContentScript({
  matches: string[],        // URL patterns
  runAt?: 'document_start' | 'document_end' | 'document_idle',
  exclude?: string[],       // Exclude patterns
  css?: string[],           // CSS files to inject
})
```

### definePopup

```typescript
export default definePopup({
  width?: number,
  height?: number,
  defaultIcon?: string,
})
```

### defineOptionsPage

```typescript
export default defineOptionsPage({
  page: string,            // Path to options page
  openInTab?: boolean,
})
```

### defineSidePanel

```typescript
export default defineSidePanel({
  matches: string[],
})
```

## Wxt Instance

```typescript
const wxt = await wxt

wxt.outputDir          // Output directory path
wxt browser             // Browser name
wxt.manifest           // Generated manifest
wxt.entrypoints        // List of entrypoints
```

## Auto-Import Modules

### #storage

```typescript
const value = useStorage<T>(key: string, defaultValue: T)
```

| Property | Type | Description |
|----------|------|-------------|
| `value` | `Ref<T>` | Reactive value |
| `set()` | `(newValue: T) => void` | Set value |
| `update()` | `(fn: (prev: T) => T) => void` | Update value |

### #navigation

```typescript
navigate.on(event: string, handler: () => void)
navigate.url                        // Current URL
```

Events: `locationchange`, `hashchange`, `popstate`

### #browser

WebExtension browser API - already globally available.

### #wxt

```typescript
// WXT utilities
wxt.getUrl(path: string)            // Get extension URL
wxt.parseManifest()                  // Parse manifest
```

## Environment

```typescript
const env = await wxt.environment

env.name         // 'production' | 'development'
env.browser      // Target browser
env.target       // Target manifest version
```

## Lifecycle Hooks

```typescript
export default defineBackground({
  wxt: {
    onMounted(wxt) {
      // Called when background script mounts
    },
    onUnmounted() {
      // Called when background script unmounts
    }
  }
})
```

## Message Passing

```typescript
// Send message
browser.runtime.sendMessage({ type: 'DO_SOMETHING' })

// Receive message
browser.runtime.onMessage.addListener((message, sender) => {
  return response
})
```

## TypeScript Types

```typescript
import type { Wxt, ContentScript, Background } from 'wxt'

// Type-safe entrypoints
export default defineBackground<{
  commands: Record<string, () => void>
}>()
```