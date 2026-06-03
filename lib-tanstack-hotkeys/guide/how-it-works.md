# How It Works

## Purpose

อธิบายการทำงานภายในของ @tanstack/react-hotkeys เพื่อให้เข้าใจกลไกและ flow การทำงาน

## Scope

- Hook Registration Flow
- Event Handling Pipeline
- Scoping Mechanism
- Sequence Detection
- Cleanup Lifecycle

## Hook Registration Flow

```
┌─────────────────────────────────────────────────────────────┐
│                    Component Mount                           │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐   │
│  │  useHotkey  │───▶│ HotkeyMgr   │───▶│  Event      │   │
│  │  (hook)     │    │ (singleton) │    │  Listener   │   │
│  └─────────────┘    └─────────────┘    └─────────────┘   │
│         │                │                    │            │
│         │                ▼                    ▼            │
│         │         ┌─────────────┐    ┌─────────────┐      │
│         │         │ Registration│    │ Key State   │      │
│         │         │    Store    │    │   Tracker   │      │
│         │         └─────────────┘    └─────────────┘      │
│         │                                               │
│         ▼                                               │
│  ┌─────────────┐                                        │
│  │ useEffect   │───▶ Register hotkey on mount           │
│  │  cleanup    │◀─── Unregister on unmount              │
│  └─────────────┘                                        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## Event Handling Pipeline

เมื่อ user กด key ระบบจะผ่าน pipeline หลายขั้นตอน:

```
KeyDown Event
      │
      ▼
┌──────────────────┐
│  Event Listener  │
│  (document/target)│
└──────────────────┘
      │
      ▼
┌──────────────────┐
│  Parse KeyCombo  │
│  from event      │
└──────────────────┘
      │
      ▼
┌──────────────────┐
│  Find matching   │
│  registrations   │
└──────────────────┘
      │
      ▼
┌──────────────────┐
│  Check target    │
│  & scope         │
└──────────────────┘
      │
      ├── ❌ No match → ignore
      │
      ▼
┌──────────────────┐
│  Check enabled   │
│  condition       │
└──────────────────┘
      │
      ├── ❌ Disabled → ignore
      │
      ▼
┌──────────────────┐
│  Execute        │
│  callback       │
│  + preventDef   │
│  + stopProp     │
└──────────────────┘
```

## Scoping Mechanism

### Target Scoping

Hotkeys สามารถ scope ไปที่ element เฉพาะ:

```
┌──────────────────────────────────────────────────────────┐
│                   Document Level                          │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  useHotkey('Mod+S', () => save())                       │
│                                                          │
│  ✅ Fires from anywhere                                  │
│                                                          │
└──────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────┐
│                   Element Level                           │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  ┌────────────────────┐                                 │
│  │    Editor Ref       │                                 │
│  │  ┌──────────────┐  │                                 │
│  │  │              │  │                                 │
│  │  │  [Editor]    │  │                                 │
│  │  │              │  │                                 │
│  │  └──────────────┘  │                                 │
│  └────────────────────┘                                 │
│                                                          │
│  useHotkey('Escape', () => close(), {                   │
│    target: editorRef                                     │
│  })                                                      │
│                                                          │
│  ✅ Only fires when editor is focused                    │
│  ❌ Ignored when other elements are focused             │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

### Scope Management

```tsx
<HotkeysProvider scopes={['global', 'editor', 'dialog']}>
  <GlobalToolbar />     {/* scope: 'global' */}
  <Editor />            {/* scope: 'editor' */}
  <Dialog />            {/* scope: 'dialog' */}
</HotkeysProvider>

// Usage
useHotkey('Mod+S', () => save(), { scopes: ['editor', 'global'] })
```

## Sequence Detection

### How Sequences Work

```
Key Press: 'g'
      │
      ▼
┌──────────────────┐
│ Is 'g' start of  │
│ any sequence?     │
└──────────────────┘
      │
      ├── ❌ No → execute as single hotkey
      │
      ▼
┌──────────────────┐
│ Start sequence   │
│ timer (timeout)  │
└──────────────────┘
      │
      ▼
┌──────────────────┐
│ Wait for next   │
│ key press       │
└──────────────────┘
      │
      ├── Timeout → reset, execute single 'g'
      │
      ▼
Key Press: 'g' (again)
      │
      ▼
┌──────────────────┐
│ Sequence 'gg'   │
│ complete!        │
└──────────────────┘
      │
      ▼
┌──────────────────┐
│ Execute 'gg'    │
│ callback         │
└──────────────────┘
```

### Timeout Behavior

```tsx
useHotkeySequence(['g', 'g'], () => goToTop(), {
  timeout: 1500  // 1.5 seconds between keys
})
```

## Cleanup Lifecycle

### Automatic Cleanup

```tsx
function Component() {
  useHotkey('Mod+S', () => save())

  // On unmount:
  // 1. useEffect cleanup runs
  // 2. HotkeyManager.unregister() is called
  // 3. Event listeners are removed
  // 4. Registration is removed from store
}
```

### Manual Cleanup

```tsx
const { remove } = useHotkey('Mod+S', () => save())

// Later, when you need to remove
remove()
```

## HotkeyManager Singleton

```
┌─────────────────────────────────────────────────────┐
│                   HotkeyManager                      │
│                   (Singleton)                        │
├─────────────────────────────────────────────────────┤
│  Properties:                                         │
│  ├── registrations: Map<hotkey, Registration>        │
│  ├── scopes: Map<scope, HTMLElement>                 │
│  ├── options: HotkeyOptions                          │
│  └── state: HotkeyState                              │
├─────────────────────────────────────────────────────┤
│  Methods:                                            │
│  ├── register(hotkey, callback, options)             │
│  ├── unregister(hotkey)                              │
│  ├── update(hotkey, options)                         │
│  ├── getRegistered() → Registration[]               │
│  └── clear()                                         │
└─────────────────────────────────────────────────────┘
```

## Summary

| กลไก | ประโยชน์ |
|------|---------|
| **Hook-based** | ง่ายต่อการใช้งานใน React components |
| **Singleton Manager** | Centralized registration, ไม่ซ้ำซ้อน |
| **Event Delegation** | Performance ดี - ใช้ listener เดียว |
| **Automatic Cleanup** | ไม่ต้องกังวลเรื่อง memory leaks |
| **Scoped Matching** | Hotkeys ทำงานเฉพาะใน context ที่ต้องการ |
| **Sequence Detection** | รองรับ vim-style shortcuts |