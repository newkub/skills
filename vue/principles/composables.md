# Composables Principles

## Overview

Composables เป็น functions ที่ encapsulate reusable logic สำหรับ Vue 3 Composition API

## Naming Conventions

- ใช้ prefix `use` เสมอ (เช่น `useFetch`, `useCounter`)
- ใช้ชื่อที่ descriptive และ clear
- รักษา consistency ทั่ว application

## Structure

### Focused Composables

สร้าง composables ที่ทำสิ่งเดียวได้ดี

```typescript
// Good
function useUserAuthentication() { ... }
function useNotifications() { ... }

// Avoid
function useUserAuthenticationAndNotifications() { ... }
```

### Flexible Inputs

ใช้ `MaybeRefOrGetter` สำหรับ flexible inputs

```typescript
import { MaybeRefOrGetter, toValue } from 'vue'

export function useFetch(url: MaybeRefOrGetter<string>) {
  const actualUrl = computed(() => toValue(url))
  // ...
}
```

### Return Values

ใช้ `readonly()` สำหรับ exposed refs เพื่อ prevent mutations

```typescript
import { ref, readonly } from 'vue'

export function useCounter() {
  const count = ref(0)
  
  function increment() {
    count.value++
  }
  
  return {
    count: readonly(count),
    increment
  }
}
```

## SSR Safety

Guard browser APIs สำหรับ SSR

```typescript
export function useLocalStorage() {
  if (typeof window === 'undefined') {
    return {
      value: ref(null),
      set: () => {}
    }
  }
  
  // Browser-specific logic
}
```

## Cleanup

ใช้ `onEffectCleanup` สำหรับ automatic cleanup

```typescript
import { onEffectCleanup } from 'vue'

export function useEventListener(target: EventTarget, event: string, handler: Function) {
  target.addEventListener(event, handler)
  
  onEffectCleanup(() => {
    target.removeEventListener(event, handler)
  })
}
```

## TypeScript Best Practices

- ใช้ generic types สำหรับ type inference
- ใช้ function overloads สำหรับ multiple signatures
- หลีกเลี่ยง `any` - ใช้ strict types

```typescript
export function useFetch<T>(url: string) {
  const data = ref<T | null>(null)
  // ...
}
```

## Checklist

- Focused: ทำสิ่งเดียวได้ดี
- Flexible: รับ refs, getters, หรือ plain values
- Safe: ทำงานใน SSR, cleanup automatically
- Typed: Full TypeScript support
- Testable: ง่ายต่อการ unit test
