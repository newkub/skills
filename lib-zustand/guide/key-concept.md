# Key Concept

## What is Zustand?

Zustand เป็น React state management library ที่มีขนาดเล็ก (~1KB) ใช้งานง่าย และมี API ที่เรียบง่าย โดยไม่ต้องใช้ boilerplate มากเหมือน Redux

## Core Features

| Feature | Description |
|---------|-------------|
| **Minimal API** | API ที่เรียบง่าย เข้าใจง่าย |
| **TypeScript** | รองรับ TypeScript เต็มรูปแบบ |
| **DevTools** | รองรับ Redux DevTools |
| **Persistence** | รองรับ localStorage/AsyncStorage |
| **Middleware** | ระบบ middleware ที่ยืดหยุ่น |
| **Boilerplate-free** | ไม่ต้องใช้ reducers, actions, dispatch |

## Key Principles

- **Hooks-based** - ใช้ React hooks สำหรับเข้าถึง state
- **Immutable updates** - ส่งเสริมการ update state แบบ immutable
- **Centralized state** - รวม state ไว้ที่เดียวต่อ concern
- **No Provider** - ไม่ต้องใช้ Context Provider

## Architecture

```
                    create()
                        │
                        ▼
┌─────────────────────────────────────────────┐
│                   Store                      │
│  ┌─────────────────────────────────────┐    │
│  │            State                     │    │
│  │  { count: 0, user: {...} }          │    │
│  └─────────────────────────────────────┘    │
│  ┌─────────────────────────────────────┐    │
│  │           Actions                    │    │
│  │  increment(), setUser(), reset()     │    │
│  └─────────────────────────────────────┘    │
│  ┌─────────────────────────────────────┐    │
│  │          Selectors                   │    │
│  │  (state) => state.count             │    │
│  └─────────────────────────────────────┘    │
└─────────────────────────────────────────────┘
                        │
                        ▼
                 useStore()
```

## Comparison

| Feature | Zustand | Redux | Context |
|---------|---------|-------|---------|
| Bundle size | ~1KB | ~7KB | Built-in |
| Boilerplate | Minimal | High | Low |
| Performance | Excellent | Good | Can be slow |
| DevTools | Yes | Yes | No |
| Provider | Not needed | Required | Required |

## When to Use

- React applications ที่ต้องการ global state
- Projects ที่ Redux ดูเวอร์เกิน
- Applications ที่ต้องการ optimize performance
- Cases ที่ต้องการ persistent state across sessions

## Key Concepts

### Store

```typescript
import { create } from "zustand";

const useStore = create((set) => ({
  count: 0,
  user: null,
  increment: () => set((state) => ({ count: state.count + 1 })),
  setUser: (user) => set({ user }),
  reset: () => set({ count: 0, user: null }),
}));
```

### Actions

- **set** - สำหรับ update state
- **get** - สำหรับอ่าน state (ใน action)
- รองรับ function form และ plain object

### Selectors

```typescript
// Direct access
const count = useStore((state) => state.count);

// Shallow equality
const { count, user } = useStore(
  (state) => ({ count: state.count, user: state.user }),
  shallow
);
```

### Middleware

```typescript
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const useStore = create(
  devtools(
    persist(
      (set) => ({
        count: 0,
        increment: () => set((s) => ({ count: s.count + 1 })),
      }),
      { name: "storage" }
    ),
    { name: "Counter" }
  )
);
```