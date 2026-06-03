# Architecture - WXT

## High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        WXT CLI                               │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │   DevCmd    │  │  BuildCmd   │  │ PublishCmd  │         │
│  └─────────────┘  └─────────────┘  └─────────────┘         │
│                                                             │
│  ┌─────────────────────────────────────────────────┐       │
│  │              WXT Core Engine                      │       │
│  │  ┌───────────┐ ┌───────────┐ ┌───────────┐      │       │
│  │  │ Entrypoint│ │ Manifest  │ │   Vite    │      │       │
│  │  │  Scanner  │ │ Generator │ │ Bundler   │      │       │
│  │  └───────────┘ └───────────┘ └───────────┘      │       │
│  └─────────────────────────────────────────────────┘       │
│                                                             │
│  ┌─────────────────────────────────────────────────┐       │
│  │           Auto-Import System                     │       │
│  │  #storage, #navigation, #browser, #wxt           │       │
│  └─────────────────────────────────────────────────┘       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## Core Components

### Entrypoint Scanner

```typescript
// อ่านไฟล์ใน entrypoints/
// วิเคราะห์ defineBackground(), defineContentScript() ฯลฯ
// สร้าง entrypoint manifest
```

### Manifest Generator

```typescript
// แปลง entrypoints เป็น manifest.json
// รองรับหลาย browser targets
// Auto-detect permissions
```

### Vite Bundler

```typescript
// Bundle TypeScript, CSS, assets
// HMR support
// Code splitting
```

## Plugin Architecture

```
Vite Plugins
├── @wxt-dev/unlisted-prerender  // Pre-render pages
├── @wxt-dev/virtual-module     // Auto-imports
└── @wxt-dev/zip                // Create zip files
```

## Auto-Import System

```
Source Code                      Generated
───────────────                  ─────────
useStorage('key')      →        import { useStorage } from '#storage'
navigate.on()          →        import { navigate } from '#navigation'
defineBackground()     →        import { defineBackground } from '#wxt'
```

## Build Pipeline

```
Source Files
    │
    ▼
┌─────────────────┐
│  Entrypoint     │
│  Scanner        │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Manifest      │
│  Generator     │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Vite Bundler   │
│  (TypeScript)   │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Output Writer  │
│  (.output/)     │
└─────────────────┘
```

## Browser-Specific Output

```
.output/
├── chrome/
│   ├── manifest.json
│   ├── background.js
│   ├── content.js
│   └── _locales/
├── firefox/
│   ├── manifest.json
│   ├── background.js
│   └── content.js
└── safari/
    └── ...
```