# Best Practices

## Organization

### Centralize Hotkey Definitions

```tsx
// constants/hotkeys.ts
export const HOTKEYS = {
  FILE: {
    SAVE: 'Mod+S',
    OPEN: 'Mod+O',
    NEW: 'Mod+N',
    CLOSE: 'Mod+W',
  },
  EDIT: {
    UNDO: 'Mod+Z',
    REDO: 'Mod+Shift+Z',
    CUT: 'Mod+X',
    COPY: 'Mod+C',
    PASTE: 'Mod+V',
  },
  SEARCH: {
    FIND: 'Mod+F',
    REPLACE: 'Mod+H',
  },
} as const
```

### Use Custom Hooks

```tsx
// hooks/useEditorHotkeys.ts
import { useHotkey } from '@tanstack/react-hotkeys'
import { HOTKEYS } from '../constants/hotkeys'

export function useEditorHotkeys(editorRef: RefObject<HTMLElement>) {
  useHotkey(HOTKEYS.EDIT.UNDO, () => undo(), { target: editorRef })
  useHotkey(HOTKEYS.EDIT.REDO, () => redo(), { target: editorRef })
  useHotkey(HOTKEYS.FILE.SAVE, () => save(), { target: editorRef })
}
```

## Performance

### Avoid Unnecessary Re-renders

```tsx
// ❌ Bad - callback recreated on every render
function Component({ onSave }) {
  useHotkey('Mod+S', () => onSave())
}

// ✅ Good - stable callback
const saveHandler = useCallback(() => {
  save()
}, [])

function Component() {
  useHotkey('Mod+S', saveHandler)
}
```

### Lazy Registration

```tsx
// ❌ Load all at once
import { useHotkey, useHotkeySequence } from '@tanstack/react-hotkeys'

// ✅ Lazy load sequences
const loadSequences = () => import('@tanstack/react-hotkeys').then(m => ({
  useHotkeySequence: m.useHotkeySequence
}))
```

## Scoping

### Scope to Relevant Elements

```tsx
// ❌ Global for component-specific actions
function Editor() {
  useHotkey('Escape', () => closeEditor())
}

// ✅ Scoped to editor element
function Editor() {
  const editorRef = useRef<HTMLDivElement>(null)

  useHotkey('Escape', () => closeEditor(), {
    target: editorRef
  })
}
```

### Use Scopes for Context

```tsx
function App() {
  return (
    <>
      <HotkeysProvider scopes={['global', 'editor', 'dialog']}>
        <GlobalToolbar />
        <Editor />
        <Dialog />
      </HotkeysProvider>
    </>
  )
}

// Usage
useHotkey('Mod+S', () => save(), { scopes: ['editor', 'global'] })
```

## Accessibility

### Don't Override Browser Shortcuts

```tsx
// ❌ Bad - conflicts with browser
useHotkey('Ctrl+W', () => {})  // Closes tab!

// ✅ Good - use app-specific shortcuts
useHotkey('Mod+W', () => closePanel())
```

### Provide Visual Feedback

```tsx
function MenuItem({ label, shortcut, action }) {
  const hotkey = formatForDisplay(shortcut)

  return (
    <button onClick={action}>
      {label}
      <kbd>{hotkey}</kbd>
    </button>
  )
}
```

### Support Keyboard Navigation

```tsx
function Menu() {
  const [focusedIndex, setFocusedIndex] = useState(0)

  useHotkey('ArrowDown', () => {
    setFocusedIndex(i => Math.min(i + 1, items.length - 1))
  })

  useHotkey('ArrowUp', () => {
    setFocusedIndex(i => Math.max(i - 1, 0))
  })

  useHotkey('Enter', () => {
    items[focusedIndex].action()
  })
}
```

## Error Handling

### Handle Disabled States

```tsx
function Component({ isDisabled }) {
  // ❌ No handling
  useHotkey('Mod+S', () => save())

  // ✅ Handle disabled state
  useHotkey('Mod+S', () => save(), {
    enabled: !isDisabled
  })
}
```

### Handle Missing Elements

```tsx
function Panel() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Only register when element exists
    if (ref.current) {
      useHotkey('Escape', () => close(), { target: ref })
    }
  }, [ref.current])
}
```

## Testing

### Test Hotkey Registration

```tsx
import { renderHook, act } from '@testing-library/react'
import { useHotkey } from '@tanstack/react-hotkeys'

it('registers hotkey on mount', () => {
  const handler = vi.fn()

  renderHook(() => {
    useHotkey('Mod+S', handler)
  })

  // Simulate key press
  act(() => {
    fireEvent.keyDown(document, { key: 's', metaKey: true })
  })

  expect(handler).toHaveBeenCalled()
})
```

### Test Cleanup

```tsx
it('cleans up on unmount', () => {
  const { unmount } = renderHook(() => {
    useHotkey('Mod+S', handler)
  })

  unmount()

  // Hotkey should no longer fire
  fireEvent.keyDown(document, { key: 's', metaKey: true })

  expect(handler).not.toHaveBeenCalled()
})
```

## Security

### Sanitize Hotkey Input

```tsx
// ❌ Unsafe - user can inject arbitrary keys
const userHotkey = getUserInput()
useHotkey(userHotkey, () => {})

// ✅ Safe - validate before use
import { isValidHotkey } from '@tanstack/hotkeys'

const userHotkey = getUserInput()
if (isValidHotkey(userHotkey)) {
  useHotkey(userHotkey, () => {})
}
```

## Common Patterns

### Modal Shortcuts

```tsx
function Modal({ isOpen, onClose }) {
  useHotkey('Escape', () => onClose(), {
    enabled: isOpen,
    target: modalRef
  })

  useHotkey('Enter', () => submit(), {
    enabled: isOpen,
    target: modalRef
  })
}
```

### Command Palette

```tsx
function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useHotkey('Mod+K', () => setIsOpen(true))
  useHotkey('Escape', () => setIsOpen(false), {
    enabled: isOpen
  })

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus()
    }
  }, [isOpen])
}
```

### Vim-Style Navigation

```tsx
function VimEditor() {
  useHotkeySequence(['g', 'g'], () => goToTop())
  useHotkeySequence(['G', 'Shift+G'], () => goToBottom())
  useHotkeySequence(['/', 'n'], () => continueSearch())
  useHotkeySequence(['*', 'n'], () => continueSearchNext())
}
```