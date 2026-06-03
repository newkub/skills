# Installation

## Purpose

คู่มือการติดตั้ง @tanstack/react-hotkeys และการตั้งค่าสำหรับ project

## Scope

- Package installation
- React version requirements
- TypeScript configuration
- Environment setup
- Verification

## Package Installation

### npm

```bash
npm install @tanstack/react-hotkeys
```

### yarn

```bash
yarn add @tanstack/react-hotkeys
```

### pnpm

```bash
pnpm add @tanstack/react-hotkeys
```

### bun

```bash
bun add @tanstack/react-hotkeys
```

## Version Requirements

| Package | Version |
|---------|---------|
| **@tanstack/react-hotkeys** | v2.x |
| **React** | v18+ (recommended), v16+ (minimum) |
| **TypeScript** | v4.7+ (recommended) |
| **Bundlers** | Vite, webpack, esbuild, Rollup |

## Framework Packages

| Framework | Package | Command |
|-----------|---------|---------|
| React | `@tanstack/react-hotkeys` | `npm install @tanstack/react-hotkeys` |
| Solid | `@tanstack/solid-hotkeys` | `npm install @tanstack/solid-hotkeys` |
| Svelte | `@tanstack/svelte-hotkeys` | `npm install @tanstack/svelte-hotkeys` |
| Vue | `@tanstack/vue-hotkeys` | `npm install @tanstack/vue-hotkeys` |
| Angular | `@tanstack/angular-hotkeys` | `npm install @tanstack/angular-hotkeys` |
| Preact | `@tanstack/preact-hotkeys` | `npm install @tanstack/preact-hotkeys` |

## TypeScript Configuration

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "jsx": "react-jsx",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

## Import Patterns

### ES Modules (Recommended)

```tsx
import { useHotkey } from '@tanstack/react-hotkeys'
import { HotkeysProvider } from '@tanstack/react-hotkeys'
import { getHotkeyManager } from '@tanstack/hotkeys'
```

### Named imports (tree-shakeable)

```tsx
import { useHotkey, useHotkeySequence } from '@tanstack/react-hotkeys'
```

## Environment Setup

### React + Vite

```tsx
// vite.config.ts - No special config needed
import { defineConfig } from 'vite'

export default defineConfig({
  // Works out of the box
})
```

### Next.js

```tsx
// app/layout.tsx
import { HotkeysProvider } from '@tanstack/react-hotkeys'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <HotkeysProvider>{children}</HotkeysProvider>
      </body>
    </html>
  )
}
```

### Remix

```tsx
// root.tsx
import { HotkeysProvider } from '@tanstack/react-hotkeys'

export default function App() {
  return (
    <html>
      <head />
      <body>
        <HotkeysProvider>
          <Outlet />
        </HotkeysProvider>
      </body>
    </html>
  )
}
```

## Verification

### Basic Test

```tsx
import { useHotkey } from '@tanstack/react-hotkeys'

function Test() {
  useHotkey('Mod+S', () => {
    console.log('Mod+S pressed!')
  })

  return <div>Press Ctrl+S (or Cmd+S)</div>
}
```

### Run Verification

```bash
# TypeScript check
npx tsc --noEmit

# Start dev server
npm run dev
```

## Devtools (Optional)

```bash
npm install @tanstack/react-hotkeys-devtools @tanstack/react-devtools
```

## Next Steps

- [Quick Start](./quick-start.md) - เริ่มต้นใช้งาน hotkeys
- [Key Concept](./key-concept.md) - เข้าใจ core concepts
- [Features](./features.md) - ดู features ทั้งหมด