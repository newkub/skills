# setup-project

## Setup New Nuxt Project

### Prerequisites

| Requirement | Version |
|-------------|---------|
| Node.js | 18.x หรือสูงกว่า |
| Package Manager | bun, yarn, bun, หรือ bun |

### 1. Initialize Project

```bash
# Using npx (recommended)
npx nuxi@latest init my-project
cd my-project

# Or using bun
bun install nuxt
```

### 2. Install Dependencies

```bash
bun install
```

### 3. Start Development Server

```bash
bun run dev
```

เปิด http://localhost:3000

## Project Configuration

### Basic Configuration

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true
})
```

### TypeScript Configuration

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  typescript: {
    strict: true,
    typeCheck: true
  }
})
```

## Add Essential Modules

### Tailwind CSS

```bash
bun install -D @nuxtjs/tailwindcss
```

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss']
})
```

### Pinia

```bash
bun install @pinia/nuxt pinia
```

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@pinia/nuxt']
})
```

### Nuxt UI

```bash
bun install @nuxt/ui
```

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@nuxt/ui']
})
```

## Create Basic Structure

```bash
# Pages
mkdir -p pages
touch pages/index.vue

# Components
mkdir -p components
mkdir -p components/base

# Composables
mkdir -p composables

# Layouts
mkdir -p layouts
touch layouts/default.vue

# Server routes
mkdir -p server/api

# Assets
mkdir -p assets/css
mkdir -p public
```

## Essential Files

### app.vue

```vue
<!-- app.vue -->
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
```

### layouts/default.vue

```vue
<!-- layouts/default.vue -->
<template>
  <div>
    <header>My App</header>
    <slot />
    <footer>Footer</footer>
  </div>
</template>
```

### pages/index.vue

```vue
<!-- pages/index.vue -->
<template>
  <div>
    <h1>Welcome to Nuxt!</h1>
  </div>
</template>
```

## Scripts in package.json

```json
{
  "scripts": {
    "dev": "nuxt dev",
    "build": "nuxt build",
    "generate": "nuxt generate",
    "preview": "nuxt preview",
    "postinstall": "nuxt prepare"
  }
}
```

## Development Workflow

```bash
# Development
bun run dev

# Type checking
bun run typecheck

# Linting
bun run lint

# Build for production
bun run build

# Preview production
bun run preview

# Generate static site
bun run generate
```

## Verify Setup

- เปิด http://localhost:3000
- ตรวจสอบ DevTools ทำงาน (F12)
- ลองสร้าง page ใหม่ใน `pages/`