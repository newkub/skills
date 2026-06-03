# Quick Start

## Purpose

คู่มือเริ่มต้นใช้งาน @tanstack/react-hotkeys อย่างรวดเร็ว

## Scope

- Basic hotkey registration
- Common use cases
- Error handling
- Best practices

## Step 1: Install

```bash
npm install @tanstack/react-hotkeys
```

## Step 2: Wrap Your App

```tsx
import { HotkeysProvider } from '@tanstack/react-hotkeys'

function App() {
  return (
    <HotkeysProvider>
      <YourApp />
    </HotkeysProvider>
  )
}
```

## Step 3: Register Hotkeys

### Basic Example

```tsx
import { useHotkey } from '@tanstack/react-hotkeys'

function SaveButton() {
  useHotkey('Mod+S', () => {
    console.log('Save triggered!')
  })

  return <button>Save</button>
}
```

### With Multiple Hotkeys

```tsx
function Editor() {
  useHotkey('Mod+S', () => save())
  useHotkey('Mod+Z', () => undo())
  useHotkey('Mod+Shift+Z', () => redo())
  useHotkey('Mod+C', () => copy())
  useHotkey('Mod+V', () => paste())

  return <div>Your editor content</div>
}
```

## Step 4: Common Patterns

### Modal Dialog

```tsx
function Modal({ isOpen, onClose }) {
  const modalRef = useRef<HTMLDivElement>(null)

  useHotkey('Escape', () => onClose(), {
    enabled: isOpen,
    target: modalRef
  })

  return isOpen ? (
    <div ref={modalRef} className="modal">
      <h2>Modal Title</h2>
      <p>Press Escape to close</p>
    </div>
  ) : null
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

  return isOpen ? (
    <div className="palette">
      <input ref={inputRef} placeholder="Type a command..." />
    </div>
  ) : null
}
```

### Editor with Scoping

```tsx
function TextEditor() {
  const editorRef = useRef<HTMLTextAreaElement>(null)

  useHotkey('Mod+B', () => {
    document.execCommand('bold')
  }, { target: editorRef })

  useHotkey('Mod+I', () => {
    document.execCommand('italic')
  }, { target: editorRef })

  return (
    <textarea ref={editorRef} />
  )
}
```

## Step 5: Hotkey Sequences

```tsx
function VimNavigation() {
  // Go to top
  useHotkeySequence(['g', 'g'], () => {
    scrollToTop()
  })

  // Go to bottom
  useHotkeySequence(['G'], () => {
    scrollToBottom()
  })

  // Find next
  useHotkeySequence(['/', 'n'], () => {
    findNext()
  })

  return <div>Your editor</div>
}
```

## Common Mistakes to Avoid

### ❌ Don't: Global shortcuts for component actions

```tsx
// Bad - conflicts with other components
function Component() {
  useHotkey('Escape', () => close())
}
```

### ✅ Do: Scope to the element

```tsx
// Good - only fires when focused
function Component() {
  const ref = useRef<HTMLDivElement>(null)
  
  useHotkey('Escape', () => close(), {
    target: ref
  })
}
```

### ❌ Don't: Ignore input elements without consideration

```tsx
// May cause issues in forms
useHotkey('Mod+S', () => save(), {
  ignore: false
})
```

### ✅ Do: Use default input filtering

```tsx
// Default behavior - ignores INPUT/TEXTAREA
useHotkey('Mod+S', () => save())
```

## Next Steps

- [Features](./features.md) - ดู features ทั้งหมด
- [Configuration](./configuration.md) - กำหนด options
- [Best Practices](./best-practices.md) - best practices สำหรับ production