# How It Works - WXT

## Development Flow

```
┌─────────────────────────────────────────────────────────────┐
│                     WXT Development Flow                     │
└─────────────────────────────────────────────────────────────┘

  ┌──────────┐     ┌──────────┐     ┌──────────┐     ┌──────────┐
  │  Source  │────▶│  Vite    │────▶│  WXT     │────▶│  Browser │
  │  Files   │     │  Bundler │     │  Builder │     │  (Dev)   │
  └──────────┘     └──────────┘     └──────────┘     └──────────┘
       │               │                │                │
       │               │                │                │
  entrypoints/     HMR + TS         manifest.json    Extension
  content.ts       transformation   auto-gen         loaded
  background.ts                      types
```

## Build Process

```
wxt build
├── Parse entrypoints/
├── Generate manifest.json
├── Bundle with Vite
├── Transform TypeScript
├── Copy public assets
└── Output to .output/
```

## File Processing

```
entrypoints/
│
├── background.ts
│   ├── defineBackground()
│   ├── TypeScript transform
│   └── → .output/background.js
│
├── content.ts
│   ├── defineContentScript()
│   ├── CSS injection setup
│   └── → .output/content.js
│
└── popup/
    ├── index.html
    ├── main.tsx
    └── → .output/popup/
```

## Entrypoint Definition

```typescript
// Define entrypoint type via function
export default defineBackground(() => {
  // Background script code
})

export default defineContentScript({
  matches: ['<all_urls>'],
  main() {
    // Content script code
  }
})
```

## Manifest Generation

WXT อ่าน entrypoints และสร้าง manifest:

| Entrypoint | Manifest Key |
|------------|--------------|
| `background.ts` | `background.service_worker` |
| `content.ts` | `content_scripts[]` |
| `popup/main.tsx` | `action.default_popup` |
| `options/main.tsx` | `options_ui.page` |
| `sidepanel.ts` | `sidepanel` |

## Hot Reload Architecture

```
┌────────────────────────────────────────┐
│           Dev Server (Vite)            │
├────────────────────────────────────────┤
│                                        │
│   File Watcher ────▶ HMR Client        │
│        │                 │             │
│        ▼                 ▼             │
│   Entrypoint          Extension        │
│   Changes             Reload          │
│                                        │
└────────────────────────────────────────┘
```

## Cross-Browser Build

```bash
wxt build --target chrome
wxt build --target firefox
wxt build --target safari
wxt build --target all
```

แต่ละ target สร้าง manifest ที่แตกต่างกันตาม browser requirements