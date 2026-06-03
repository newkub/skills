# Integration

## React Integration

### Basic React Setup

```tsx
import { useHotkey } from '@tanstack/react-hotkeys'

function App() {
  useHotkey('Mod+S', () => save())

  return <YourApp />
}
```

### With React DevTools

```tsx
import { TanStackDevtools } from '@tanstack/react-devtools'
import { hotkeysDevtoolsPlugin } from '@tanstack/react-hotkeys-devtools'
import { HotkeysProvider } from '@tanstack/react-hotkeys'

function App() {
  return (
    <HotkeysProvider>
      <YourApp />
      <TanStackDevtools plugins={[hotkeysDevtoolsPlugin()]} />
    </HotkeysProvider>
  )
}
```

### React with Strict Mode

```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

function App() {
  useHotkey('Mod+S', () => save())

  return <YourApp />
}

const root = createRoot(document.getElementById('root')!)
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
// Works correctly with StrictMode double-rendering
```

## Framework Integrations

### Solid

```tsx
import { createSignal, onMount, onCleanup } from 'solid-js'
import { useHotkey } from '@tanstack/solid-hotkeys'

function App() {
  useHotkey('Mod+S', () => save())

  return <YourApp />
}
```

### Svelte

```tsx
<script>
  import { useHotkey } from '@tanstack/svelte-hotkeys'

  useHotkey('Mod+S', () => save())
</script>

<YourApp />
```

### Vue

```tsx
<script setup>
import { useHotkey } from '@tanstack/vue-hotkeys'

useHotkey('Mod+S', () => save())
</script>

<template>
  <YourApp />
</template>
```

### Angular

```tsx
import { Component } from '@angular/core'
import { useHotkey } from '@tanstack/angular-hotkeys'

@Component({
  selector: 'app-root',
  template: `<YourApp />`
})
export class AppComponent {
  constructor() {
    useHotkey('Mod+S', () => this.save())
  }

  save() {
    console.log('Saved!')
  }
}
```

### Preact

```tsx
import { useHotkey } from '@tanstack/preact-hotkeys'

function App() {
  useHotkey('Mod+S', () => save())

  return <YourApp />
}
```

## State Management Integration

### Zustand

```tsx
import { create } from 'zustand'

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}))

function Counter() {
  const { count, increment } = useStore()

  useHotkey('Mod+I', increment)

  return <div>{count}</div>
}
```

### Redux Toolkit

```tsx
import { useDispatch } from 'react-redux'
import { increment } from './counterSlice'

function Counter() {
  const dispatch = useDispatch()

  useHotkey('Mod+I', () => dispatch(increment()))

  return <div>Press Mod+I to increment</div>
}
```

### Jotai

```tsx
import { atom, useAtom } from 'jotai'
import { useHotkey } from '@tanstack/react-hotkeys'

const countAtom = atom(0)

function Counter() {
  const [count, setCount] = useAtom(countAtom)

  useHotkey('Mod+I', () => setCount(c => c + 1))

  return <div>{count}</div>
}
```

## Routing Integration

### React Router

```tsx
import { Routes, Route, useNavigate } from 'react-router-dom'

function Navigation() {
  const navigate = useNavigate()

  useHotkey('G + H', () => navigate('/home'))
  useHotkey('G + P', () => navigate('/profile'))

  return null
}

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  )
}
```

### TanStack Router

```tsx
import { useRouter } from '@tanstack/react-router'

function Navigation() {
  const router = useRouter()

  useHotkey('G + H', () => router.navigate({ to: '/home' }))
  useHotkey('G + P', () => router.navigate({ to: '/profile' }))

  return null
}
```

## UI Framework Integration

### Tailwind CSS

```tsx
function ShortcutButton({ shortcut, children }) {
  const hotkeyDisplay = formatForDisplay(shortcut)

  return (
    <button className="px-4 py-2 bg-blue-500 text-white rounded">
      {children}
      <kbd className="ml-2 px-2 py-1 bg-gray-200 rounded text-sm">
        {hotkeyDisplay}
      </kbd>
    </button>
  )
}
```

### Radix UI

```tsx
import * as Dialog from '@radix-ui/react-dialog'
import { useHotkey } from '@tanstack/react-hotkeys'

function Modal() {
  const [open, setOpen] = useState(false)

  useHotkey('Mod+K', () => setOpen(true))
  useHotkey('Escape', () => setOpen(false), { enabled: open })

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger>Open</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Content>
          <Dialog.Title>Modal</Dialog.Title>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
```

### shadcn/ui

```tsx
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { useHotkey } from '@tanstack/react-hotkeys'

function ShortcutDialog({ open, onOpenChange }) {
  useHotkey('Escape', () => onOpenChange(false), {
    enabled: open
  })

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
```

## Editor Integration

### CodeMirror

```tsx
import { EditorView, keymap } from '@codemirror/view'
import { useHotkey } from '@tanstack/react-hotkeys'

function CodeEditor() {
  const editorRef = useRef<HTMLDivElement>(null)

  useHotkey('Mod+D', () => {
    // Duplicate line in CodeMirror
    const view = editorRef.current?.querySelector('.cm-editor')?.CodeMirror
    if (view) {
      // Duplicate logic
    }
  }, { target: editorRef })

  return <div ref={editorRef} />
}
```

### Monaco Editor

```tsx
import { useHotkey } from '@tanstack/react-hotkeys'

function MonacoEditor({ editor }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useHotkey('Mod+Shift+F', () => {
    editor.getAction('editor.action.formatDocument')?.run()
  }, { target: containerRef })

  return <div ref={containerRef}>{editor}</div>
}
```

## Testing Integration

### Vitest + Testing Library

```tsx
import { render, fireEvent } from '@testing-library/react'
import { useHotkey } from '@tanstack/react-hotkeys'

test('hotkey triggers save', async () => {
  const save = vi.fn()
  const { getByRole } = render(<SaveButton onSave={save} />)

  // Focus the button
  const button = getByRole('button', { name: /save/i })
  button.focus()

  // Press shortcut
  await fireEvent.keyDown(document, {
    key: 's',
    metaKey: true
  })

  expect(save).toHaveBeenCalled()
})
```

## Build Tools

### Vite

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