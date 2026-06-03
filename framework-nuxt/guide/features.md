# Features

## Core Features

| Feature | Description |
|---------|-------------|
| File-based Routing | สร้าง routes อัตโนมัติจาก `pages/` directory |
| Auto Imports | Components, composables, utils auto-imported |
| Server-Side Rendering | SSR โดย default |
| Static Site Generation | SSG ด้วย `nuxt generate` |
| Hybrid Rendering | เลือก rendering mode ต่างกันในแต่ละ route |
| TypeScript | Built-in TypeScript support |
| Hot Module Replacement | Fast dev server with HMR |
| SEO | Built-in meta tags และ SEO utilities |

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