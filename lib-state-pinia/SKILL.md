---
name: pinia
description: The intuitive store for Vue.js. Type safe, extensible, and modular by design. Use for state management in Vue applications.
goal: Use Pinia following best practices
outcome: Type-safe, modular state management for Vue
---

# Pinia Library

## When to Use

Use this library when:

- Building Vue 3 applications
- Need intuitive state management
- Want TypeScript support out of the box
- Using with Composition API or Options API
- Need modular store architecture
- Want devtools integration

## Quick Start

1. Install: `npm install pinia`
2. Create Pinia instance and app.use()
3. Define store with `defineStore()`
4. Use store in components

## Summary Table

| Category | File | Purpose | Condition |
|---|---|---|---|
| **Knowledge** | [Core Concepts](knowledge/core-concept.md) | Pinia fundamentals | Understanding the basics |
| **Knowledge** | [Best Practices](knowledge/best-practices.md) | Store patterns | Effective state management |
| **Rules** | [Setup](rules/1-setup.md) | Installation and provider | New project setup |
| **Rules** | [Defining Stores](rules/2-defining-stores.md) | State, getters, actions | Store creation |
| **Rules** | [Using Stores](rules/3-using-stores.md) | Accessing in components | Component usage |
| **Rules** | [State](rules/4-state.md) | Reactive state management | Data storage |
| **Rules** | [Getters](rules/5-getters.md) | Computed properties | Derived state |
| **Rules** | [Actions](rules/6-actions.md) | Methods and async operations | State mutations |
| **Rules** | [Plugins](rules/7-plugins.md) | Persistence, hydration | Extensions |

## Core Features

- **TypeScript**: Full type inference and support
- **Modular**: Split stores by domain
- **DevTools**: Vue DevTools integration
- **SSR**: Server-side rendering support
- **Plugins**: Ecosystem of plugins (persistence, etc.)
- **Lightweight**: ~1KB gzipped

## Quick Reference

```bash
# Install
npm install pinia
```

```typescript
// Define store
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  getters: {
    double: (state) => state.count * 2
  },
  actions: {
    increment() {
      this.count++
    }
  }
})

// Use in component
const counter = useCounterStore()
```

## Verification

1. Check Pinia installation
2. Verify store creation
3. Test state reactivity
4. Validate getters
5. Check actions
6. Ensure devtools integration

## References

- [Pinia Documentation](https://pinia.vuejs.org/)
- [Getting Started](https://pinia.vuejs.org/getting-started.html)
- [GitHub Repository](https://github.com/vuejs/pinia)
