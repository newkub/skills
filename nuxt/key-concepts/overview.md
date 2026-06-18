# Key Concept

## What is Nuxt?

Nuxt เป็น Vue.js meta-framework ที่ช่วยให้การพัฒนา web applications ง่ายขึ้นด้วย features สำหรับ server-side rendering (SSR), static site generation (SSG), และ modern web development ด้วย Nitro server engine

## Core Features

| Feature | Description |
|---------|-------------|
| Server-Side Rendering | Render Vue components บน server ด้วย Nitro สำหรับ SEO และ performance |
| Static Site Generation | Generate static HTML files ล่วงหน้า |
| File-Based Routing | สร้าง routes อัตโนมัติจาก `app/pages/` directory |
| Auto Imports | Import components และ composables จาก `app/` โดยไม่ต้องเขียน import statements |
| TypeScript Support | Built-in TypeScript support ด้วย zero-config |
| Hybrid Rendering | เลือก rendering mode ได้ต่างกันในแต่ละ route ด้วย `routeRules` |
| Nitro Server | Server engine สำหรับ full-stack capabilities |

## Key Concepts

| Concept | Description |
|---------|-------------|
| Pages | Vue components ใน `app/pages/` directory ที่กลายเป็น routes |
| Components | Vue components ที่ auto-imported ใน `app/components/` |
| Composables | Reusable logic ที่เขียนด้วย Composition API ใน `app/composables/` |
| Layouts | Page templates สำหรับ shared UI ใน `app/layouts/` |
| Middleware | Code ที่ทำงานก่อน route เปลี่ยน |
| Plugins | Code ที่ทำงานตอน app start |
| Server Routes | API routes ใน `server/api/` directory |

## Rendering Modes

| Mode | Use Case |
|------|----------|
| SSR | Dynamic content, SEO-critical pages |
| SSG | Static content, documentation, blogs |
| ISR | Content that changes occasionally |
| SPA | Single Page Applications |
| Hybrid | Mix of different modes per route |

## When to Use Nuxt

- เมื่อต้องการ SEO ที่ดี (SSR/SSG)
- เมื่อใช้ Vue.js และต้องการ productivity สูงขึ้น
- เมื่อต้องการ TypeScript support แบบไม่ต้อง config เยอะ
- เมื่อต้องการ modern web development features (auto-imports, file-based routing)