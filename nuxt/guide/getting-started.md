# Getting Started with Nuxt

## Overview

Nuxt เป็น full-stack web framework บน Vue.js ที่มี SSR, file-based routing, auto-imports, และ module ecosystem

## Key Concepts

### Server-Side Rendering (SSR)
Nuxt มี SSR built-in ทำให้:
- SEO ที่ดีขึ้น
- Initial page load เร็วขึ้น
- Better performance บน low-powered devices

### File-Based Routing
Routes ถูก generate อัตโนมัติจาก file structure:
- `pages/index.vue` → `/`
- `pages/about.vue` → `/about`
- `pages/blog/[id].vue` → `/blog/:id`

### Auto-Imports
Nuxt auto-imports:
- Components จาก `components/`
- Composables จาก `composables/`
- Utilities จาก `utils/`
- Vue composables จาก Vue

### Module System
Modules ขยาย functionality ของ Nuxt:
- Official modules จาก Nuxt team
- Community modules
- Custom modules

## Installation

### Create New Project

```bash
npx nuxi@latest init my-app
cd my-app
npm install
npm run dev
```

### Add to Existing Project

```bash
npm install nuxt
npm install -D @nuxtjs/tailwindcss
```

## Project Structure

```
my-app/
├── .nuxt/              # Auto-generated
├── assets/             # Static assets
├── components/         # Vue components
├── composables/        # Vue composables
├── layouts/            # Layout components
├── middleware/         # Route middleware
├── pages/              # File-based routing
├── plugins/            # Vue plugins
├── public/             # Static files
├── server/             # Server routes
├── app.vue             # Root component
├── nuxt.config.ts      # Nuxt configuration
└── package.json        # Dependencies
```

## Configuration

### nuxt.config.ts

```ts
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'My App',
      meta: [
        { name: 'description', content: 'My Nuxt app' }
      ]
    }
  },
  runtimeConfig: {
    public: {
      apiBase: '/api'
    },
    secret: {
      apiKey: process.env.API_KEY
    }
  }
})
```

## Best Practices

1. **Use File-Based Routing**: ใช้ file-based routing สำหรับ automatic routes
2. **Auto-Imports**: ใช้ auto-imports สำหรับ cleaner code
3. **Data Fetching**: ใช้ useAsyncData/useFetch สำหรับ SSR-compatible data
4. **Modules**: ใช้ modules สำหรับ extending functionality
5. **TypeScript**: ใช้ TypeScript สำหรับ type safety

## References

- [Nuxt Documentation](https://nuxt.com/docs/getting-started/introduction)
- [Installation Guide](https://nuxt.com/docs/getting-started/installation)
