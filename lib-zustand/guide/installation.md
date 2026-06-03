# Installation

## Requirements

- React 18+ (for React 17, use v3.x)
- Node.js 14+ recommended
- npm, yarn, pnpm, or bun

## Installation Commands

### npm

```bash
npm install zustand
```

### yarn

```bash
yarn add zustand
```

### pnpm

```bash
pnpm add zustand
```

### bun

```bash
bun add zustand
```

## TypeScript Setup

```json
{
  "compilerOptions": {
    "strict": true,
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "jsx": "react-jsx"
  }
}
```

## Verify Installation

```typescript
import { create } from "zustand";

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));

// Use in component
function Counter() {
  const count = useStore((state) => state.count);
  const increment = useStore((state) => state.increment);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
    </div>
  );
}
```

## Middleware Installation

```bash
# Core middlewares (included in main package)
npm install zustand

# Optional: For Immer middleware
npm install immer
```

### Available Middleware Packages

| Package | Command | Purpose |
|---------|---------|---------|
| `zustand/middleware` | (built-in) | devtools, persist, subscribeWithSelector |
| `zustand/middleware/immer` | (built-in) | Immer-based immutable updates |
| `zustand/middleware/redux` | (built-in) | Redux-like actions |
| `zustand/react` | (built-in) | React hooks integration |

## Package.json Dependencies

```json
{
  "dependencies": {
    "zustand": "^5.0.0"
  },
  "devDependencies": {
    "@types/react": "^18.0.0",
    "typescript": "^5.0.0"
  }
}
```

## Framework Integration

### React

```typescript
// No additional setup needed
import { create } from "zustand";
import { useStore } from "./store";

function App() {
  const count = useStore((s) => s.count);
  return <div>{count}</div>;
}
```

### Next.js (App Router)

```typescript
// app/page.tsx
"use client";

import { useStore } from "@/store";

export default function Page() {
  const count = useStore((s) => s.count);
  return <div>{count}</div>;
}
```

### Vite + React

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install zustand
```