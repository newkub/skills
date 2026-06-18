# Features

## Core Features

| Feature | Description |
|---------|-------------|
| File-based Routing | สร้าง routes อัตโนมัติจาก `app/pages/` directory |
| Auto Imports | Components, composables, utils auto-imported จาก `app/` |
| Server-Side Rendering | SSR โดย default ด้วย Nitro |
| Static Site Generation | SSG ด้วย `nuxt generate` |
| Hybrid Rendering | เลือก rendering mode ต่างกันในแต่ละ route ด้วย `routeRules` |
| TypeScript | Built-in TypeScript support ด้วย zero-config และ separate TS projects |
| Hot Module Replacement | Fast dev server ด้วย Vite HMR |
| SEO | Built-in meta tags และ SEO utilities |
| Nitro Server | Server engine สำหรับ full-stack capabilities |
| app/ Directory | New directory structure สำหรับ application code (Nuxt v4) |
| Features System | Enable/disable optional features (devLogs, inlineStyles, noScripts) |
| Future Namespace | Early opt-in ไปยัง Nuxt 5 features |
| Vue Router v5 (4.4+) | 28x faster dev routing |
| Accessibility (4.4+) | `useAnnouncer` composable สำหรับ screen reader announcements |
| Typed Layout Props (4.4+) | Full type safety สำหรับ layout props ใน `definePageMeta` |
| Custom Data Fetching (4.4+) | `createUseFetch` และ `createUseAsyncData` factory functions |

## Rendering Modes

| Mode | Description |
|------|-------------|
| `ssr` | Server-Side Rendering |
| `spa` | Single Page Application |
| `static` | Static Site Generation |
| `isr` | Incremental Static Regeneration |
| `prerender` | Pre-render specific routes |

## Data Fetching

| Method | Use Case |
|--------|----------|
| `useFetch` | Fetch data with SSR support |
| `useAsyncData` | Async data with caching |
| `useLazyFetch` | Lazy loading fetch |
| `useLazyAsyncData` | Lazy async data |
| `createUseFetch` (4.4+) | Custom useFetch instances with default options |
| `createUseAsyncData` (4.4+) | Custom useAsyncData instances with default options |

## State Management

| Feature | Description |
|---------|-------------|
| `useState` | SSR-friendly shared state |
| `useCookie` | Reactive cookies |
| `useLocalStorage` | Browser localStorage |
| `useSessionStorage` | Browser sessionStorage |
| Pinia | Official state management |

## Nuxt Modules

| Module | Description |
|--------|-------------|
| `@nuxt/image` | Image optimization |
| `@nuxt/content` | File-based CMS |
| `@nuxt/test-utils` | Testing utilities |
| `@pinia/nuxt` | Pinia state management |
| `@nuxtjs/i18n` | Internationalization |
| `@nuxtjs/tailwindcss` | Tailwind CSS integration |

## Server Features

| Feature | Description |
|---------|-------------|
| Server Routes | API routes ใน `/server/api` |
| Server Middleware | Middleware for API |
| Nitro Server | Built-in server engine |
| Database | Prisma, Drizzle, MongoDB support |
| Authentication | Auth.js, nuxt-auth support |

## Development Features

| Feature | Description |
|--------|-------------|
| DevTools | Vue DevTools integration |
| Type Checking | Built-in TypeScript checking |
| ESLint | Code linting |
| Prettier | Code formatting |
| Debug Mode | Debug with verbose logging |