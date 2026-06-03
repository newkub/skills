# การติดตั้ง

คู่มือการติดตั้ง TanStack Router สำหรับ React และ Solid

## React

### ด้วย Vite (แนะนำ)

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install @tanstack/react-router
```

### ด้วย Manual Setup

```bash
npm install @tanstack/react-router
```

### การตั้งค่า Vite

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

## Solid

### ด้วย Vite

```bash
npm create vite@latest my-app -- --template solid-ts
cd my-app
npm install @tanstack/solid-router
```

### การตั้งค่า Vite

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'

export default defineConfig({
  plugins: [solid()],
})
```

## TypeScript Configuration

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}
```

## Router CLI

### ติดตั้ง CLI

```bash
npm install @tanstack/react-router-dev
```

### ใช้งาน CLI

```bash
# สร้าง route file
npx tsr generate

# Generate route tree
npx tsr generate --file routeTree.ts

# Watch mode
npx tsr watch
```

### CLI Options

| Option | Description |
|--------|-------------|
| `--file` | Output file name |
| `--watch` | Watch for changes |
| `--root` | Root directory |
| `--recursive` | Process subdirectories |

## Project Structure

### แนะนำโครงสร้าง

```
src/
├── routes/
│   ├── route.tsx           # Root route
│   ├── index.tsx          # Index route
│   ├── posts.tsx          # /posts
│   └── posts.$postId.tsx  # /posts/:postId
├── main.tsx
├── App.tsx
└── router.tsx             # Router configuration
```

### Alternative Structure

```
src/
├── routes/
│   ├── (app).tsx          # Layout group
│   ├── (app).posts.tsx   # /posts (with layout)
│   ├── (auth).tsx         # Auth layout
│   ├── (auth).login.tsx   # /login (with auth layout)
│   └── route.tsx         # Root route
└── main.tsx
```

## Package Versions

### Peer Dependencies

| Package | Version | Notes |
|---------|---------|-------|
| react | >=18.0.0 | For React |
| solid-js | >=1.8.0 | For Solid |
| @tanstack/history | ^1 | History management |

### Install All Dependencies

```bash
# React
npm install react react-dom @tanstack/react-router @tanstack/history

# Solid
npm install solid-js @tanstack/solid-router @tanstack/history

# Dev dependencies
npm install -D vite @vitejs/plugin-react typescript @types/react @types/react-dom
```

## CDN (Development Only)

```html
<script type="module">
  import {
    createRouter,
    createRootRoute,
    Link,
    Outlet,
  } from 'https://esm.sh/@tanstack/react-router'
</script>
```

## Verify Installation

```typescript
// main.tsx
import { createRootRoute, RouterProvider } from '@tanstack/react-router'
import { createRouter } from '@tanstack/react-router'

const rootRoute = createRootRoute()

const indexRoute = createRootRoute({
  component: () => <div>Hello World!</div>,
})

const router = createRouter({ routeTree: rootRoute })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
```

## Troubleshooting

### Common Issues

| Issue | Solution |
|-------|----------|
| Type errors | Run `npx tsc --init` and configure properly |
| Routes not found | Check file naming conventions |
| Module not found | Verify tsconfig paths |
| Build errors | Clear cache: `rm -rf node_modules/.vite` |