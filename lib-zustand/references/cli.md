# cli

## index.md

# CLI Commands

Zustand development tools

## Installation

```bash
npm install zustand
```

## DevTools

Zustand integrates with Redux DevTools:

```typescript
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const useStore = create(
  devtools(
    (set) => ({
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 })),
    }),
    { name: 'Counter' }
  )
);
```

## Development Tools

Zustand works with your framework:

```bash
# Vite
npm run dev

# Next.js
npm run dev

# React Native
npm start
```

## VS Code Extensions

- Redux Snippets
- ES7+ React/Redux/React-Native snippets

## Package.json Scripts

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "test": "vitest"
  }
}
```

## Type Checking

```bash
bunx tsc --noEmit
```

## Middleware Tools

```typescript
import { create } from 'zustand';
import { devtools, persist, subscribeWithSelector } from 'zustand/middleware';

const useStore = create(
  devtools(
    persist(
      (set) => ({
        count: 0,
        increment: () => set((state) => ({ count: state.count + 1 })),
      }),
      { name: 'counter' }
    ),
    { name: 'Counter' }
  )
);
```

---

