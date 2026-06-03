# Key Concept

## What is Nuxt?

Nuxt เป็น Vue.js meta-framework ที่ช่วยให้การพัฒนา web applications ง่ายขึ้นด้วย features สำหรับ server-side rendering (SSR), static site generation (SSG), และ modern web development

## Core Features

| Feature | Description |
|---------|-------------|
| Server-Side Rendering | Render Vue components บน server สำหรับ SEO และ performance |
| Static Site Generation | Generate static HTML files ล่วงหน้า |
| File-Based Routing | สร้าง routes อัตโนมัติจาก file structure |
| Auto Imports | Import components และ composables โดยไม่ต้องเขียน import statements |
| TypeScript Support | Built-in TypeScript support |
| Hybrid Rendering | เลือก rendering mode ได้ต่างกันในแต่ละ route |

## Key Concepts

| Concept | Description |
|---------|-------------|
| Pages | Vue components ใน `/pages` directory ที่กลายเป็น routes |
| Components | Vue components ที่ auto-imported ใน `/components` |
| Composables | Reusable logic ที่เขียนด้วย Composition API |
| Layouts | Page templates สำหรับ shared UI |
| Middleware | Code ที่ทำงานก่อน route เปลี่ยน |
| Plugins | Code ที่ทำงานตอน app start |
| Server Routes | API routes ใน `/server` directory |

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