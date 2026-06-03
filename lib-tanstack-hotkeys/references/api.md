# API

## Purpose

Complete API reference for @tanstack/react-hotkeys.

## Hooks

### useHotkey

Register a single hotkey.

```tsx
import { useHotkey } from '@tanstack/react-hotkeys'

function Component() {
  useHotkey(hotkey, callback, options?)
}
```

| Parameter | Type | Description |
|-----------|------|-------------|
| `hotkey` | `string` | Hotkey string (e.g., `'Mod+S'`) |
| `callback` | `() => void` | Function to execute |
| `options` | `UseHotkeyOptions` | Configuration options |

**Returns**: `{ remove: () => void }`

### useHotkeySequence

Register a key sequence.

```tsx
import { useHotkeySequence } from '@tanstack/react-hotkeys'

function Component() {
  useHotkeySequence(keys, callback, options?)
}
```

| Parameter | Type | Description |
|-----------|------|-------------|
| `keys` | `string[]` | Array of keys (e.g., `['g', 'g']`) |
| `callback` | `() => void` | Function to execute |
| `options` | `UseHotkeySequenceOptions` | Configuration options |

### useHotkeyRecorder

Create UI for recording hotkeys.

```tsx
import { useHotkeyRecorder } from '@tanstack/react-hotkeys'

function Component() {
  const recorder = useHotkeyRecorder(options)
}
```

**Returns**:

```tsx
{
  recordedHotkey: string | null
  isRecording: boolean
  startRecording: () => void
  stopRecording: () => void
  reset: () => void
}
```

## HotkeysProvider

Wrap your app to provide default options.

```tsx
import { HotkeysProvider } from '@tanstack/react-hotkeys'

<HotkeysProvider defaultOptions={options}>
  {children}
</HotkeysProvider>
```

## Options

### UseHotkeyOptions

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `target` | `RefObject<HTMLElement> \| HTMLElement` | `document` | Target element for scoping |
| `preventDefault` | `boolean` | `true` | Call preventDefault on event |
| `stopPropagation` | `boolean` | `true` | Call stopPropagation on event |
| `enabled` | `boolean \| () => boolean` | `true` | Enable/disable hotkey |
| `ignore` | `boolean \| string[]` | `['INPUT', 'TEXTAREA']` | Elements to ignore |
| `scopes` | `string[]` | `['global']` | Scopes to register in |

### UseHotkeySequenceOptions

Extends `UseHotkeyOptions` plus:

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `timeout` | `number` | `1500` | Max time between keys (ms) |

### HotkeyRecorderOptions

Extends `UseHotkeyOptions` plus:

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `onCommit` | `(hotkey: string) => void` | - | Called when hotkey is recorded |
| `onCancel` | `() => void` | - | Called when recording is cancelled |
| `commitKeys` | `string[]` | `['Enter']` | Keys that commit recording |
| `cancelKeys` | `string[]` | `['Escape']` | Keys that cancel recording |

### HotkeysProviderProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `defaultOptions` | `HotkeyDefaultOptions` | - | Default options for all hotkeys |
| `scopes` | `string[]` | `['global']` | Available scopes |

### HotkeyDefaultOptions

```tsx
{
  hotkey?: {
    preventDefault?: boolean
    stopPropagation?: boolean
    ignore?: boolean | string[]
  }
  hotkeySequence?: {
    timeout?: number
  }
  hotkeyRecorder?: {
    onCancel?: () => void
  }
}
```

## Core Functions

### getHotkeyManager

Access the global manager instance.

```tsx
import { getHotkeyManager } from '@tanstack/hotkeys'

const manager = getHotkeyManager()
```

**Manager Methods**:

| Method | Returns | Description |
|--------|---------|-------------|
| `register(hotkey, callback, options)` | `RegistrationHandle` | Register a hotkey |
| `unregister(hotkey)` | `void` | Unregister a hotkey |
| `getRegistered()` | `Registration[]` | Get all registrations |
| `clear()` | `void` | Clear all registrations |
| `options` | `HotkeyOptions` | Get/set global options |

### formatForDisplay

Format hotkey string for display.

```tsx
import { formatForDisplay } from '@tanstack/react-hotkeys'

formatForDisplay('Mod+S', { platform: 'macos' })  // => '⌘S'
formatForDisplay('Mod+S', { platform: 'windows' }) // => 'Ctrl+S'
```

### isValidHotkey

Validate a hotkey string.

```tsx
import { isValidHotkey } from '@tanstack/hotkeys'

isValidHotkey('Mod+S')   // => true
isValidHotkey('invalid') // => false
```

## Utility Exports

### Constants

| Export | Type | Description |
|--------|------|-------------|
| `MODIFIER_ORDER` | `string[]` | Default modifier order |

### Types

```tsx
import type {
  UseHotkeyOptions,
  UseHotkeySequenceOptions,
  HotkeyRecorderOptions,
  HotkeysProviderProps,
  HotkeyRegistration,
  RegistrationHandle,
} from '@tanstack/react-hotkeys'
```

## Hotkey String Format

```
modifier+key
```

**Modifiers**: `Mod`, `Ctrl`, `Shift`, `Alt`, `Meta`

**Examples**:
- `Mod+S` - Cmd/Ctrl + S
- `Mod+Shift+S` - Cmd/Ctrl + Shift + S
- `Escape` - Escape key
- `G + H` - Sequence: G then H

## Return Types

### RegistrationHandle

```tsx
interface RegistrationHandle {
  remove: () => void
  id: string
  hotkey: string
}
```

### Registration

```tsx
interface Registration {
  id: string
  hotkey: string
  callback: HotkeyCallback
  options: HotkeyOptions
  scopes: string[]
  target?: HTMLElement
  createdAt: number
}
```