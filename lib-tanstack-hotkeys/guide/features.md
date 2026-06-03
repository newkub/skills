# Features

## Overview

@tanstack/react-hotkeys มาพร้อม features ครบถ้วนสำหรับจัดการ keyboard shortcuts ใน React applications

## Core Features

### 1. useHotkey Hook

Register single hotkey:

```tsx
import { useHotkey } from '@tanstack/react-hotkeys'

function App() {
  useHotkey('Mod+S', () => save())
  useHotkey('Mod+Z', () => undo())
  useHotkey('Escape', () => close())
  
  return <YourApp />
}
```

### 2. useHotkeySequence Hook

Register key sequences:

```tsx
import { useHotkeySequence } from '@tanstack/react-hotkeys'

function VimEditor() {
  useHotkeySequence(['g', 'g'], () => goToTop())
  useHotkeySequence(['G'], () => goToBottom())
  useHotkeySequence(['/', 'n'], () => continueSearch())
}
```

### 3. useHotkeyRecorder Hook

Create UI for user to record hotkeys:

```tsx
import { useHotkeyRecorder } from '@tanstack/react-hotkeys'

function HotkeySettings() {
  const { startRecording, stopRecording, recordedHotkey } = useHotkeyRecorder({
    onCommit: (hotkey) => {
      console.log('Recorded:', hotkey)
      saveHotkey(hotkey)
    },
    onCancel: () => {
      console.log('Cancelled')
    }
  })
  
  return (
    <button onClick={startRecording}>
      {recordedHotkey ? `Current: ${recordedHotkey}` : 'Click to record'}
    </button>
  )
}
```

### 4. HotkeysProvider

Set default options สำหรับทุก hotkeys ใน app:

```tsx
import { HotkeysProvider } from '@tanstack/react-hotkeys'

function App() {
  return (
    <HotkeysProvider
      defaultOptions={{
        hotkey: {
          preventDefault: true,
          stopPropagation: true,
        },
        hotkeySequence: {
          timeout: 1500,
        },
      }}
    >
      <YourApp />
    </HotkeysProvider>
  )
}
```

## Advanced Features

### 1. Target Scoping

```tsx
// Document level (default)
useHotkey('Mod+S', () => save())

// Element level
const panelRef = useRef<HTMLDivElement>(null)
useHotkey('Escape', () => close(), {
  target: panelRef
})

// Multiple scopes
useHotkey('Mod+K', () => search(), {
  scopes: ['global', 'editor']
})
```

### 2. Conditional Hotkeys

```tsx
// Enable/disable based on state
useHotkey('Mod+S', () => save(), {
  enabled: !isSaving
})

// Custom condition function
useHotkey('Mod+S', () => save(), {
  enabled: () => canSave && !isSaving
})
```

### 3. Input Element Filtering

```tsx
// Default: ignores INPUT, TEXTAREA, SELECT
useHotkey('Mod+S', () => save())

// Custom ignore list
useHotkey('Mod+F', () => search(), {
  ignore: ['INPUT', 'TEXTAREA', '[data-disable-hotkeys]']
})

// Disable filtering completely
useHotkey('Mod+S', () => save(), {
  ignore: false
})
```

### 4. Event Behavior

```tsx
useHotkey('Mod+S', () => save(), {
  preventDefault: true,   // Prevent browser default (e.g., save page)
  stopPropagation: true,  // Stop event from bubbling
})
```

### 5. Multiple Callbacks

```tsx
// With options
useHotkey('Mod+S', () => save(), {
  callback: () => analytics.track('save')
})

// Or pass multiple functions
useHotkey('Mod+S', () => {
  save()
  analytics.track('save')
})
```

## Framework Adapters

| Framework | Package | Status |
|-----------|---------|--------|
| React | `@tanstack/react-hotkeys` | Stable |
| Solid | `@tanstack/solid-hotkeys` | Stable |
| Svelte | `@tanstack/svelte-hotkeys` | Stable |
| Vue | `@tanstack/vue-hotkeys` | Stable |
| Angular | `@tanstack/angular-hotkeys` | Stable |
| Preact | `@tanstack/preact-hotkeys` | Stable |
| Lit | `@tanstack/lit-hotkeys` | Stable |

## Devtools Integration

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

## Global API

```tsx
import { getHotkeyManager } from '@tanstack/hotkeys'

const manager = getHotkeyManager()

// Get all registrations
const registrations = manager.getRegistered()

// Update options
manager.options = {
  preventDefault: true,
  stopPropagation: true,
}

// Clear all registrations
manager.clear()
```

## Utility Functions

### formatForDisplay

Display hotkey in platform-specific format:

```tsx
import { formatForDisplay } from '@tanstack/react-hotkeys'

formatForDisplay('Mod+S', { platform: 'macos' })
// => '⌘S'

formatForDisplay('Mod+S', { platform: 'windows' })
// => 'Ctrl+S'
```

### isValidHotkey

Validate hotkey string:

```tsx
import { isValidHotkey } from '@tanstack/hotkeys'

isValidHotkey('Mod+S')  // => true
isValidHotkey('invalid')  // => false
```

## TypeScript Support

Full type safety with inference:

```tsx
import { useHotkey } from '@tanstack/react-hotkeys'
import type { UseHotkeyOptions } from '@tanstack/react-hotkeys'

// Options are fully typed
useHotkey('Mod+S', () => save(), {
  target: editorRef,
  preventDefault: true,
  enabled: true,
  ignore: ['INPUT'],
  scopes: ['editor']
} satisfies UseHotkeyOptions)
```

## Feature Comparison

| Feature | useHotkey | useHotkeySequence | useHotkeyRecorder |
|---------|-----------|-------------------|-------------------|
| Single hotkey | ✅ | ❌ | ❌ |
| Key sequences | ❌ | ✅ | ❌ |
| Record UI | ❌ | ❌ | ✅ |
| Scoping | ✅ | ✅ | ✅ |
| Conditional | ✅ | ✅ | ✅ |
| Input filtering | ✅ | ✅ | ✅ |