# Bun Dependencies

## Core Runtime

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| bun | Runtime และ package manager | (built-in) |
| typescript | TypeScript compiler | `bun add -d typescript` |
| @types/node | Node.js type definitions | `bun add -d @types/node` |
| @types/bun | Bun type definitions | `bun add -d @types/bun` |

## CLI Framework

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| cac | Modern CLI framework (~4KB) | `bun add cac` |
| citty | Full-featured CLI framework | `bun add citty` |
| consola | Elegant console logger | `bun add consola` |
| picocolors | Terminal colors (~1KB) | `bun add picocolors` |
| nanospinner | Ultra-light spinner | `bun add nanospinner` |
| prompts | Interactive prompts | `bun add prompts` |
| uqr | QR code generator | `bun add uqr` |
| envix | Environment variables | `bun add envix` |

## Web Framework

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| nuxt | Nuxt.js framework | `bun add -d nuxt` |
| vue | Vue.js framework | `bun add vue` |
| vue-router | Vue router | `bun add vue-router` |
| h3 | Minimal HTTP framework | `bun add h3` |
| nitro | Universal server engine | `bun add nitro` |
| @nuxt/ui | Nuxt UI components | `bun add @nuxt/ui` |
| @nuxt/image | Image optimization | `bun add @nuxt/image` |
| @nuxt/fonts | Font optimization | `bun add @nuxt/fonts` |
| @nuxt/icon | Icon system | `bun add @nuxt/icon` |
| @nuxt/content | Content module | `bun add @nuxt/content` |
| @nuxt/scripts | Script management | `bun add @nuxt/scripts` |
| @nuxt/seo | SEO optimization | `bun add @nuxt/seo` |
| @nuxt/test-utils | Testing utilities | `bun add @nuxt/test-utils` |
| @nuxtjs/tailwindcss | Tailwind CSS integration | `bun add -d @nuxtjs/tailwindcss` |
| @pinia/nuxt | Pinia for Nuxt | `bun add @pinia/nuxt` |
| pinia | State management | `bun add pinia` |
| @vueuse/nuxt | VueUse for Nuxt | `bun add @vueuse/nuxt` |
| @vueuse/core | Vue utilities | `bun add @vueuse/core` |
| @vueuse/integrations | VueUse integrations | `bun add @vueuse/integrations` |
| @headlessui/vue | Headless UI components | `bun add @headlessui/vue` |
| @radix-vue/shadcn-vue | shadcn/ui for Vue | `bun add @radix-vue/shadcn-vue` |
| @iconify/vue | Universal icon component | `bun add @iconify/vue` |
| lucide-vue-next | Lucide icons for Vue | `bun add lucide-vue-next` |

## Validation (Fast)

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| zod | Schema validation (type-safe) | `bun add zod` |
| valibot | Alternative to Zod (6x smaller, faster) | `bun add valibot` |
| arktype | TypeScript-native validation | `bun add arktype` |
| superstruct | Interface validation | `bun add superstruct` |

## HTTP Client (Modern)

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| ofetch | Universal fetch client (better than axios) | `bun add ofetch` |
| ungh | GitHub API client | `bun add ungh` |
| graphql-request | GraphQL client | `bun add graphql-request` |

## Database ORM

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| drizzle-orm | TypeScript ORM (fast, lightweight) | `bun add drizzle-orm` |
| @prisma/client | Prisma client | `bun add @prisma/client` |
| kysely | Type-safe SQL query builder | `bun add kysely` |

## Server/API

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| elysia | Bun-native web framework (13x faster than Express) | `bun add elysia` |
| hono | Ultralight web framework | `bun add hono` |
| @trpc/server | tRPC server (end-to-end typesafe) | `bun add @trpc/server` |
| @trpc/client | tRPC client | `bun add @trpc/client` |

## Testing

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| bun:test | Bun built-in test runner (no install needed) | (built-in) |
| vitest | Fast unit testing | `bun add -d vitest` |
| @vitest/ui | Vitest UI | `bun add -d @vitest/ui` |
| @vitest/coverage-v8 | V8 coverage | `bun add -d @vitest/coverage-v8` |
| @vue/test-utils | Vue testing utilities | `bun add -d @vue/test-utils` |
| @testing-library/jest-dom | DOM assertions | `bun add -d @testing-library/jest-dom` |
| @testing-library/react | React testing | `bun add -d @testing-library/react` |
| @testing-library/vue | Vue testing | `bun add -d @testing-library/vue` |
| @nuxt/test-utils | Nuxt testing utilities | `bun add -d @nuxt/test-utils` |
| @playwright/test | E2E testing | `bun add -d @playwright/test` |
| happy-dom | Fast DOM environment | `bun add -d happy-dom` |

## Linting (Modern & Fast)

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| @biomejs/biome | All-in-one toolchain (ESLint + Prettier replacement) | `bun add -d @biomejs/biome` |
| oxlint | Ultra-fast JavaScript linter (Rust-based) | `bun add -d oxlint` |

## CSS (Modern)

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| unocss | Instant atomic CSS (faster than Tailwind) | `bun add -d unocss` |
| @unocss/core | UnoCSS core | `bun add -d @unocss/core` |
| @unocss/preset-uno | Default preset | `bun add -d @unocss/preset-uno` |
| @unocss/preset-icons | Icon preset | `bun add -d @unocss/preset-icons` |
| tailwindcss | Utility-first CSS | `bun add -d tailwindcss` |
| autoprefixer | CSS autoprefixer | `bun add -d autoprefixer` |
| postcss | CSS transformations | `bun add -d postcss` |
| clsx | Conditional CSS classes | `bun add clsx` |
| cva | Class variance authority | `bun add cva` |
| tailwind-merge | Tailwind class merging | `bun add tailwind-merge` |

## Dev Tools

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| @nuxt/devtools | Nuxt devtools | `bun add -d @nuxt/devtools` |
| @vitejs/plugin-vue | Vite Vue plugin | `bun add -d @vitejs/plugin-vue` |
| @vitejs/plugin-react | Vite React plugin | `bun add -d @vitejs/plugin-react` |
| unplugin-auto-import | Auto imports | `bun add -d unplugin-auto-import` |
| unplugin-vue-components | Vue auto components | `bun add -d unplugin-vue-components` |
| unplugin-vue-router | File-based routing | `bun add -d unplugin-vue-router` |
| unplugin-icons | Icon components on-demand | `bun add -d unplugin-icons` |
| tsx | TypeScript execute (fast) | `bun add -d tsx` |
| tsup | TypeScript bundler | `bun add -d tsup` |
| tsdown | TypeScript bundler (Rolldown-based) | `bun add -d tsdown` |
| bumpp | Bump version interactively | `bun add -d bumpp` |
| changelogithub | Generate changelog | `bun add -d changelogithub` |
| @antfu/ni | Use the right package manager | `bun add -d @antfu/ni` |

## Git Hooks (Lightweight)

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| simple-git-hooks | Simple git hooks (~1KB) | `bun add -d simple-git-hooks` |
| nano-staged | Ultra-light lint-staged | `bun add -d nano-staged` |
| lint-staged | Staged file linting | `bun add -d lint-staged` |

## Type Definitions

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| @types/inquirer | Inquirer types | `bun add -d @types/inquirer` |
| @types/figlet | Figlet types | `bun add -d @types/figlet` |
