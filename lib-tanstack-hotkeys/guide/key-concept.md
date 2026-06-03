# Key Concept

## What is @tanstack/react-hotkeys?

@tanstack/react-hotkeys เป็น React hook สำหรับจัดการ keyboard shortcuts (hotkeys) ที่พัฒนาโดย TanStack มาพร้อมความสามารถในการ register, scope และ manage hotkeys อย่างมีประสิทธิภาพ

## Core Features

| Feature | Description |
|---------|-------------|
| **Hook-based API** | ใช้งานง่ายผ่าน React hooks |
| **Scoped Hotkeys** | จำกัดการทำงานของ hotkey ใน scope ที่กำหนด |
| **Sequence Support** | รองรับ key sequences เช่น `gg` สำหรับ vim-style |
| **Recorder** | สร้าง UI สำหรับ user record hotkey ได้ |
| **Framework Agnostic** | มี adapters สำหรับ React, Solid, Svelte, Vue, Angular |
| **TypeScript Support** | Full type safety ตั้งแต่ต้น |

## Key Principles

- **Declarative** - กำหนด hotkeys แบบ declarative ใน component
- **Scoped** - Hotkeys ทำงานเฉพาะใน scope ที่กำหนด
- **Automatic Cleanup** - ลงทะเบียนและยกเลิก hotkeys อัตโนมัติ
- **Cross-Platform** - รองรับ `Mod` modifier สำหรับ cross-platform compatibility
- **Composable** - รวม hotkeys หลายตัวใน scope เดียวกันได้

## Architecture

```
                    @tanstack/hotkeys (core)
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
   @tanstack/react   @tanstack/solid    @tanstack/svelte
   @tanstack/vue     @tanstack/angular  @tanstack/preact
```

## Core Concepts

### 1. Hotkey Strings

Format: `{modifier}+{key}` หรือ `+` สำหรับหลาย modifiers

```tsx
'Mod+S'      // Cmd/Ctrl + S
'Mod+Shift+S'  // Cmd/Ctrl + Shift + S
'G + H'      // Sequence: G then H
```

| Modifier | Windows/Linux | macOS |
|----------|---------------|-------|
| `Mod` | Ctrl | Cmd |
| `Ctrl` | Ctrl | Ctrl |
| `Shift` | Shift | Shift |
| `Alt` | Alt | Option |
| `Meta` | Win/Cmd | Cmd |

### 2. useHotkey Hook

```tsx
import { useHotkey } from '@tanstack/react-hotkeys'

function SaveButton() {
  useHotkey('Mod+S', () => {
    save()
  })

  return <button>Save (Ctrl+S)</button>
}
```

### 3. Scoping

```tsx
// ทำงานเฉพาะเมื่อ element ถูก focus
const editorRef = useRef<HTMLDivElement>(null)

useHotkey('Escape', () => close(), {
  target: editorRef
})
```

### 4. Hotkey Sequences

```tsx
// Vim-style navigation
useHotkeySequence(['g', 'g'], () => goToTop())
useHotkeySequence(['G'], () => goToBottom())
useHotkeySequence(['/', 'n'], () => continueSearch())
```

### 5. HotkeysProvider

```tsx
<HotkeysProvider
  defaultOptions={{
    hotkey: {
      preventDefault: true,
    }
  }}
>
  <App />
</HotkeysProvider>
```

## When to Use

- Command palette (`Cmd+K`)
- Editor shortcuts (Vim-style, IDE-style)
- Modal dialogs (Escape to close)
- Global app shortcuts
- Accessible keyboard navigation
- User-configurable shortcuts with recorder

## Comparison

| Feature | @tanstack/react-hotkeys | use-hotkey | hotkeys-js |
|---------|------------------------|------------|------------|
| Framework | React | Vanilla | Vanilla |
| Hooks | Yes | No | No |
| Sequences | Yes | No | Yes |
| Recorder | Yes | No | No |
| Scoping | Advanced | Basic | None |
| Packages | React, Solid, Svelte, Vue | React | Vanilla only |