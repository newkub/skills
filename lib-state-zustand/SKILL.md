---
name: zustand
description: A small, fast and scalable bearbones state-management solution using simplified flux principles. Use for simple and powerful global state management.
goal: Use Zustand following best practices
outcome: Lightweight, type-safe state management
---

# Zustand Library

## When to Use

Use this library when:

- Need simple global state management
- Want minimal boilerplate (compared to Redux)
- Building React applications with shared state
- Need persistence or middleware support
- Want excellent TypeScript support
- Prefer unopinionated, flexible state management

## Quick Start

1. Install: `npm install zustand`
2. Create store with `create()`
3. Use store in components with hooks
4. Add middleware (persist, devtools) if needed

## Summary Table

| Category | File | Purpose | Condition |
|---|---|---|---|
| **Knowledge** | [Core Concepts](knowledge/core-concept.md) | Zustand fundamentals | Understanding the basics |
| **Knowledge** | [Best Practices](knowledge/best-practices.md) | Recommended practices | Building stores |
| **Rules** | [Setup](rules/1-setup.md) | Creating stores | New project setup |
| **Rules** | [Selectors](rules/2-selectors.md) | Accessing state efficiently | Performance optimization |
| **Rules** | [Actions](rules/3-actions.md) | Updating state | State mutations |
| **Rules** | [Middleware](rules/4-middleware.md) | Persist, devtools, immer | Advanced features |
| **Rules** | [TypeScript](rules/5-typescript.md) | Type-safe stores | TypeScript usage |

## Core Features

- **Minimal**: Small bundle size (~1KB)
- **No Providers**: No context providers needed
- **Hooks API**: Use hooks to access state
- **Middleware**: Persist, devtools, immer support
- **SSR Friendly**: Works with server-side rendering
- **TypeScript**: Excellent TypeScript support

## Quick Reference

```bash
# Install
npm install zustand

# Basic store
import { create } from 'zustand'

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}))

# Using in component
const count = useStore((state) => state.count)
```

## Verification

1. Check Zustand installation
2. Verify store creation
3. Test state access with selectors
4. Validate actions and state updates
5. Check middleware functionality
6. Ensure TypeScript types are correct

## References

- [Zustand Documentation](https://docs.pmnd.rs/zustand)
- [GitHub Repository](https://github.com/pmndrs/zustand)
