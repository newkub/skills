# Solid Dependencies

## Core

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| solid-js | SolidJS framework | `bun add solid-js` |
| @solidjs/router | Solid Router | `bun add @solidjs/router` |
| @solidjs/meta | Meta tags | `bun add @solidjs/meta` |
| @solidjs/start | SolidStart | `bun add @solidjs/start` |

## State Management

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| @solidjs/signals | Signals (built-in) | (built-in) |
| solid-zustand | Zustand for Solid | `bun add solid-zustand` |
| solid-jotai | Jotai for Solid | `bun add solid-jotai` |
| create-store | Store primitive | `bun add create-store` |

## Data Fetching

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| @tanstack/solid-query | TanStack Query | `bun add @tanstack/solid-query` |
| solid-query | Solid Query | `bun add solid-query` |
| solid-resource | Resource primitive | `bun add solid-resource` |
| @solidjs/suspense | Suspense | `bun add @solidjs/suspense` |

## Styling

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| tailwindcss | Utility CSS | `bun add -d tailwindcss` |
| unocss | Instant atomic CSS | `bun add -d unocss` |
| @unocss/vite | UnoCSS Vite | `bun add -d @unocss/vite` |
| solid-styled-components | Styled components | `bun add solid-styled-components` |
| solid-styled-jsx | Styled JSX | `bun add solid-styled-jsx` |
| clsx | Conditional classes | `bun add clsx` |
| tailwind-merge | Merge classes | `bun add tailwind-merge` |

## UI Components

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| @kobalte/core | Headless components | `bun add @kobalte/core` |
| solid-headless | Headless UI | `bun add solid-headless` |
| solid-ui | UI components | `bun add solid-ui` |
| hope-ui | Hope UI | `bun add @hope-ui/solid` |
| solid-aria | ARIA utilities | `bun add solid-aria` |
| corvu | Modern components | `bun add corvu` |

## Forms

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| @felte/solid | Form library | `bun add @felte/solid` |
| @felte/validator-zod | Zod validator | `bun add @felte/validator-zod` |
| zod | Schema validation | `bun add zod` |

## Animation

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| @motionone/solid | Motion for Solid | `bun add @motionone/solid` |
| solid-motion | Animation | `bun add solid-motion` |
| solid-transition-group | Transitions | `bun add solid-transition-group` |
| solid-auto-animate | Auto animations | `bun add solid-auto-animate` |

## Icons

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| solid-heroicons | Heroicons | `bun add solid-heroicons` |
| solid-icons | Icon library | `bun add solid-icons` |
| unplugin-icons | Icon plugin | `bun add -d unplugin-icons` |

## Testing

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| @solidjs/testing-library | Testing library | `bun add -d @solidjs/testing-library` |
| vitest | Unit testing | `bun add -d vitest` |
| @vitest/ui | Vitest UI | `bun add -d @vitest/ui` |
| jsdom | DOM environment | `bun add -d jsdom` |
| happy-dom | Fast DOM | `bun add -d happy-dom` |

## Development Tools

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| vite-plugin-solid | Vite plugin | `bun add -d vite-plugin-solid` |
| @solidjs/vite-plugin | Solid Vite plugin | `bun add -d @solidjs/vite-plugin` |
| typescript | TypeScript | `bun add -d typescript` |
| @types/node | Node types | `bun add -d @types/node` |
| vite | Build tool | `bun add -d vite` |

## Utilities

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| @solid-primitives | Primitives collection | `bun add @solid-primitives/...` |
| @solid-primitives/i18n | i18n | `bun add @solid-primitives/i18n` |
| @solid-primitives/clipboard | Clipboard | `bun add @solid-primitives/clipboard` |
| @solid-primitives/date | Date utilities | `bun add @solid-primitives/date` |
| @solid-primitives/storage | Storage | `bun add @solid-primitives/storage` |
| @solid-primitives/script-loader | Script loader | `bun add @solid-primitives/script-loader` |
| @solid-primitives/share | Web Share | `bun add @solid-primitives/share` |
| solid-utils | Utilities | `bun add solid-utils` |
| solid-dismiss | Dismissible | `bun add solid-dismiss` |
| solid-presence | Presence | `bun add solid-presence` |
| solid-focus-trap | Focus trap | `bun add solid-focus-trap` |

## Stores

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| @solid-primitives/storage | LocalStorage/SessionStorage | `bun add @solid-primitives/storage` |
| solid-store | Store | `bun add solid-store` |

## Real-time

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| solid-realtime | Realtime hooks | `bun add solid-realtime` |
| @solidjs/suspense | Suspense | `bun add @solidjs/suspense` |

## คำแนะนำ

| หมวดหมู่ | แนะนำ | เหตุผล |
|---------|-------|--------|
| **Core** | solid-js + @solidjs/router | Official |
| **State** | Signals (built-in) | Reactive by default |
| **Data** | @tanstack/solid-query | Best async state |
| **UI** | @kobalte/core | Modern, accessible |
| **Styling** | tailwindcss หรือ unocss | Utility-first |
| **Forms** | @felte/solid + zod | Great DX |
| **Animation** | @motionone/solid | Performant |
| **Utils** | @solid-primitives | Official collection |
