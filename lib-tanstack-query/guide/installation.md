# Installation

## Purpose

แนวทางการติดตั้ง TanStack Query สำหรับ various JavaScript frameworks

## Package Managers

### npm

```bash
npm install @tanstack/react-query
```

### yarn

```bash
yarn add @tanstack/react-query
```

### pnpm

```bash
pnpm add @tanstack/react-query
```

### bun

```bash
bun add @tanstack/react-query
```

## Framework-Specific Packages

### React

```bash
npm install @tanstack/react-query
```

### Solid

```bash
npm install @tanstack/solid-query
```

### Vue

```bash
npm install @tanstack/vue-query
```

### Svelte

```bash
npm install @tanstack/svelte-query
```

## Quick Setup

### 1. Create QueryClient

```typescript
import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 10, // 10 minutes
    },
  },
});
```

### 2. Wrap App with Provider

```typescript
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <YourComponent />
    </QueryClientProvider>
  );
}
```

### 3. Use Query

```typescript
import { useQuery } from "@tanstack/react-query";

function Users() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: () => fetch("/api/users").then((res) => res.json()),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

## Development Tools

### React DevTools

```bash
npm install @tanstack/react-query-devtools
```

```typescript
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <YourComponent />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
```

### DevTools Options

```typescript
<ReactQueryDevtools
  initialIsOpen={false}
  buttonPosition="bottom-left"
  panelPosition="left"
/>
```

## TypeScript Setup

### TypeScript Configuration

```json
{
  "compilerOptions": {
    "strict": true,
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

### Typed Query Keys

```typescript
const userKeys = {
  all: ["users"] as const,
  lists: () => [...userKeys.all, "list"] as const,
  list: (filters: string[]) => [...userKeys.lists(), { filters }] as const,
  details: () => [...userKeys.all, "detail"] as const,
  detail: (id: string) => [...userKeys.details(), id] as const,
};
```

## Framework Integration

### Next.js (App Router)

```typescript
// app/providers.tsx
"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
```

```typescript
// app/layout.tsx
import { Providers } from "./providers";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
```

### Next.js (Pages Router)

```typescript
// pages/_app.tsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
```

### Vite + React

```typescript
// src/App.tsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

function App() {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <YourApp />
    </QueryClientProvider>
  );
}
```

## Environment Requirements

| Requirement | Version |
|-------------|---------|
| Node.js | >= 16 |
| React | >= 17 |
| TypeScript | >= 4.7 |

## Dependencies

### Optional Peer Dependencies

| Package | Purpose |
|---------|---------|
| `@tanstack/react-query-devtools` | DevTools |
| `@tanstack/react-query-persist-client` | Persistence |
| `@tanstack/query-sync-storage-persister` | Storage sync |

## Summary

| Step | Action |
|------|--------|
| 1 | Install: `npm install @tanstack/react-query` |
| 2 | Create QueryClient instance |
| 3 | Wrap app with QueryClientProvider |
| 4 | Use useQuery/useMutation hooks |
| 5 | (Optional) Add ReactQueryDevtools |