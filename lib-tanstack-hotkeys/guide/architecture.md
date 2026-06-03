# Architecture

## Package Structure

```
@tanstack/hotkeys (core)
├── packages/
│   ├── hotkeys/          # Core package
│   ├── react-hotkeys/    # React adapter
│   ├── solid-hotkeys/    # Solid adapter
│   ├── svelte-hotkeys/   # Svelte adapter
│   ├── vue-hotkeys/      # Vue adapter
│   ├── angular-hotkeys/  # Angular adapter
│   ├── preact-hotkeys/   # Preact adapter
│   ├── lit-hotkeys/      # Lit adapter
│   ├── react-hotkeys-devtools/  # React devtools
│   └── react-devtools/    # Devtools core
```

## Core Architecture

### HotkeyManager

```ansi
┌─────────────────────────────────────────────────────┐
│                   HotkeyManager                      │
│                   (Singleton)                         │
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

### HotkeyRegistration

```tsx
interface HotkeyRegistration {
  id: string
  hotkey: string
  callback: HotkeyCallback
  options: HotkeyOptions
  scopes: string[]
  target?: HTMLElement | RefObject<HTMLElement>
  createdAt: number
  metadata?: Record<string, any>
}
```

## Flow Diagram

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   Hook      │───▶│  Manager    │───▶│  Event      │
│  useHotkey  │    │  HotkeyMgr  │    │  Listener   │
└─────────────┘    └─────────────┘    └─────────────┘
                       │                    │
                       ▼                    ▼
              ┌─────────────────┐    ┌─────────────┐
              │  Registration   │    │  Key State  │
              │  Store          │    │  Tracker    │
              └─────────────────┘    └─────────────┘
```

## Event Handling

### Keydown Flow

```
KeyDown Event
      │
      ▼
┌──────────────────┐
│  Event Listener  │
│  (on the target) │
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
│  Find matching  │
│  registrations   │
└──────────────────┘
      │
      ▼
┌──────────────────┐
│  Check scopes   │
│  & conditions    │
└──────────────────┘
      │
      ├── ❌ No match → ignore
      │
      ▼
┌──────────────────┐
│  Execute        │
│  callbacks      │
│  + preventDef    │
└──────────────────┘
```

## State Management

### Global State

```tsx
// Core state structure
interface HotkeysState {
  registrations: Map<string, HotkeyRegistration>
  scopes: Map<string, ScopeState>
  keyState: Map<string, KeyState>
  sequences: Map<string, SequenceState>
}

// Singleton access
const state = getHotkeyManager().getState()
```

### Per-Component State

```tsx
// React adapter state
interface UseHotkeyState {
  isRegistered: boolean
  registrationHandle?: HotkeyRegistrationHandle
  error?: Error
}

// Auto-updated on mount/unmount
```

## Framework Adapters

### React Adapter Pattern

```tsx
// Simplified adapter pattern
export function useHotkey(hotkey, callback, options) {
  const manager = getHotkeyManager()

  useEffect(() => {
    const handle = manager.register(hotkey, callback, {
      ...options,
      onCleanup: () => {
        // React-specific cleanup
      }
    })

    return () => handle.remove()
  }, [hotkey, callback, options])

  return {
    isRegistered: true,
    remove: () => manager.unregister(hotkey)
  }
}
```

### Adapter Interface

```tsx
// Each framework adapter implements:
interface FrameworkAdapter {
  // Lifecycle integration
  onMount(callback: () => void): void
  onUnmount(callback: () => void): void

  // Scoping
  createScope(element: HTMLElement): Scope

  // State (framework-specific)
  getState(): AdapterState

  // Cleanup
  cleanup(): void
}
```

## Sequence Detection

### SequenceManager

```ansi
┌─────────────────────────────────────────────────────┐
│                 SequenceManager                      │
├─────────────────────────────────────────────────────┤
│  Properties:                                         │
│  ├── sequences: Map<string, SequenceDefinition>      │
│  ├── currentSequence: string[]                       │
│  ├── timeout: number                                 │
│  └── timer: NodeJS.Timeout | null                   │
├─────────────────────────────────────────────────────┤
│  Methods:                                            │
│  ├── startSequence(keys: string[])                  │
│  ├── continueSequence(key: string)                  │
│  ├── completeSequence() → callback fired            │
│  ├── resetSequence()                                │
│  └── setTimeout(ms: number)                          │
└─────────────────────────────────────────────────────┘
```

### Sequence Flow

```
Key Press
    │
    ▼
Is it part of registered sequence?
    │
    ├── No → execute as regular hotkey
    │
    ▼
Start/continue sequence
    │
    ▼
Wait for next key (timeout)
    │
    ├── Timeout → reset sequence
    │
    ▼
Sequence complete → execute callback
```

## Key State Tracking

### KeyStateTracker

```tsx
interface KeyState {
  key: string
  isHeld: boolean
  heldAt: number  // timestamp
  duration: number // time held
}

// Example states
const states = {
  'Shift': { isHeld: true, heldAt: 1234567890, duration: 5000 },
  'Ctrl': { isHeld: false, heldAt: 0, duration: 0 }
}
```

## Devtools Architecture

### Plugin System

```tsx
interface HotkeysDevtoolsPlugin {
  // State updates
  onRegistration(registration: HotkeyRegistration): void
  onUnregistration(hotkey: string): void
  onKeyStateChange(state: KeyState): void

  // UI integration
  render(): React.ReactNode
  panel: DevtoolsPanel
}
```

### Integration Flow

```ansi
HotkeyManager ──▶ Plugin Bridge ──▶ Devtools Panel
                   │
                   ▼
              ┌──────────┐
              │  State   │
              │  Sync    │
              └──────────┘
```

## Memory Management

### Cleanup on Unmount

```tsx
// Framework adapter responsibility
useEffect(() => {
  const handle = manager.register(hotkey, callback, options)

  return () => {
    handle.remove()
    // Also clears any event listeners
    // Removes from scope tracking
  }
}, [])
```

### Global Cleanup

```tsx
// Application unmount
window.addEventListener('beforeunload', () => {
  const manager = getHotkeyManager()
  manager.clear()  // Remove all registrations
})
```

## Performance Considerations

### Event Delegation

```tsx
// Single listener on document
document.addEventListener('keydown', handleKeyDown)
document.addEventListener('keyup', handleKeyUp)

// Check registration match per event
function handleKeyDown(event) {
  const matches = manager.findMatches(event)
  matches.forEach(m => m.callback(event))
}
```

### Lazy Evaluation

```tsx
// Options evaluated at call time
useHotkey('Mod+S', () => save(), {
  // These are read at event time, not hook time
  enabled: isEnabled,  // reactive
  target: ref.current   // evaluated at registration
})
```

## Type System

### Hotkey String Type

```tsx
// Template literal type for type-safe hotkeys
type HotkeyModifier = 'Mod' | 'Ctrl' | 'Shift' | 'Alt' | 'Meta'
type HotkeyKey = /* valid key names */

type HotkeyString = `${HotkeyModifier}+${HotkeyKey}`

// Invalid strings caught at compile time
const valid: HotkeyString = 'Mod+S'  // ✅
const invalid: HotkeyString = 'invalid'  // ❌ Error
```

### Registration Type

```tsx
interface HotkeyRegistration<T = unknown> {
  id: string
  hotkey: HotkeyString
  callback: HotkeyCallback<T>
  options: HotkeyOptions
  metadata: T
}
```