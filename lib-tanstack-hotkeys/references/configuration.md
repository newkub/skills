# Configuration

## Purpose

Complete configuration options for @tanstack/react-hotkeys.

## HotkeysProvider Configuration

Set default options for all hotkeys:

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
        hotkeyRecorder: {
          onCancel: () => console.log('Cancelled'),
        },
      }}
    >
      <YourApp />
    </HotkeysProvider>
  )
}
```

## useHotkey Options

```tsx
useHotkey('Mod+S', () => save(), {
  // Scoping
  target: ref,           // Ref or element for scoping

  // Behavior
  preventDefault: true,   // Prevent default browser action
  stopPropagation: true,   // Stop event propagation

  // Condition
  enabled: true,          // Enable/disable hotkey

  // Callbacks
  callback: () => {},     // Alternative callback

  // Ignore elements
  ignore: ['INPUT', 'TEXTAREA'],

  // scopes: ['global', 'editor'],  // Multiple scopes
})
```

## useHotkeySequence Options

```tsx
useHotkeySequence(['G', 'G'], () => goToTop(), {
  // Timing
  timeout: 1500,  // Max time between keys (ms)

  // Scoping
  target: ref,

  // Behavior
  preventDefault: true,
  stopPropagation: true,

  // Condition
  enabled: true,
})
```

## useHotkeyRecorder Options

```tsx
useHotkeyRecorder({
  // Callbacks
  onCommit: (hotkey) => {
    console.log('Recorded:', hotkey)
  },
  onCancel: () => {
    console.log('Cancelled')
  },

  // Behavior
  preventDefault: true,
  stopPropagation: true,

  // Commit keys
  commitKeys: ['Enter'],

  // Cancel keys
  cancelKeys: ['Escape'],

  // Target
  target: ref,
})
```

## Target Scoping

### Document-Level

```tsx
// Affects entire document
useHotkey('Mod+S', () => save())
```

### Element-Level

```tsx
const panelRef = useRef<HTMLDivElement>(null)

// Only fires when element is focused
useHotkey('Escape', () => close(), {
  target: panelRef
})
```

### Multiple Scopes

```tsx
// Register in multiple scopes
useHotkey('Mod+K', () => search(), {
  scopes: ['global', 'editor'],
})
```

## Ignore Elements

### Default Ignored

Input elements are ignored by default:
- `INPUT`
- `TEXTAREA`
- `SELECT`
- `contenteditable` elements

### Custom Ignore

```tsx
// Add custom elements to ignore
useHotkey('Mod+S', () => save(), {
  ignore: ['INPUT', 'TEXTAREA', '[data-disable-hotkeys]'],
})

// Disable input filtering
useHotkey('Mod+S', () => save(), {
  ignore: false,
})
```

## Key Format Options

### Modifiers Order

```tsx
import { MODIFIER_ORDER } from '@tanstack/hotkeys'

// Default: ['mod', 'ctrl', 'shift', 'alt', 'meta']
console.log(MODIFIER_ORDER)
```

### Platform-Specific Display

```tsx
import { formatForDisplay } from '@tanstack/react-hotkeys'

// Mac
formatForDisplay('Mod+S', { platform: 'macos' })
// => '⌘S'

// Windows
formatForDisplay('Mod+S', { platform: 'windows' })
// => 'Ctrl+S'

// Linux
formatForDisplay('Mod+S', { platform: 'linux' })
// => 'Ctrl+S'
```

## Global Configuration

```tsx
import { getHotkeyManager } from '@tanstack/hotkeys'

const manager = getHotkeyManager()

// Set global options
manager.options = {
  preventDefault: true,
  stopPropagation: true,
  ignore: ['INPUT', 'TEXTAREA'],
}

// Get all registrations
const registrations = manager.getRegistered()

// Clear all
manager.clear()
```

## TypeScript Types

```tsx
interface UseHotkeyOptions {
  target?: RefObject<HTMLElement> | HTMLElement
  preventDefault?: boolean
  stopPropagation?: boolean
  enabled?: boolean | (() => boolean)
  ignore?: boolean | string[]
  scopes?: string[]
}

interface UseHotkeySequenceOptions extends UseHotkeyOptions {
  timeout?: number
}

interface HotkeyRecorderOptions extends UseHotkeyOptions {
  onCommit?: (hotkey: string) => void
  onCancel?: () => void
  commitKeys?: string[]
  cancelKeys?: string[]
}
```

## Environment Variables

For advanced configuration:

```bash
# Debug mode
TANSTACK_HOTKEYS_DEBUG=true

# Custom timeout
TANSTACK_HOTKEYS_SEQUENCE_TIMEOUT=2000
```

## Best Configuration Practices

| Scenario | Recommended Config |
|----------|-------------------|
| Editor app | `{ target: editorRef, preventDefault: true }` |
| Modal dialogs | `{ enabled: isOpen }` |
| Global shortcuts | No target (document level) |
| Input-rich apps | `{ ignore: ['INPUT', 'TEXTAREA'] }` |
| Vim-style sequences | `{ timeout: 1500 }` |