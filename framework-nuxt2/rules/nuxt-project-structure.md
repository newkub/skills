---
trigger: always_on
description: กำหนดโครงสร้างโปรเจกต์ Nuxt และกฎการจัดการไฟล์
condition: |
  ใช้เมื่อต้องการสร้างโปรเจกต์ Nuxt ใหม่
  ใช้เมื่อต้องการทำความเข้าใจและจัดระเบียบโครงสร้างโปรเจกต์ที่มีอยู่
---

## 1. Standard Project Structure (โครงสร้างโปรเจกต์มาตรฐาน)

- **Overview**: โครงสร้างนี้เป็นแนวทางมาตรฐานสำหรับโปรเจกต์ Nuxt 4 โดยแบ่งแยกความรับผิดชอบระหว่าง `app`, `server`, และ `shared` อย่างชัดเจน

````tree
my-nuxt-app/
├── .nuxt/                # Build directory (auto-generated)
├── .output/              # Production build output
├── app/                  # Application code (Universal)
│   ├── components/       # Reusable Vue components
│   ├── composables/      # Reusable Vue Composition API functions
│   ├── layouts/          # Layout components for pages
│   ├── pages/            # File-based routing
│   ├── plugins/          # Vue plugins
│   └── utils/            # App-level utility functions
├── server/               # Server-side code (Nitro)
│   ├── api/              # API routes
│   ├── middleware/       # Server middleware
│   ├── lib/              # Server-only libraries
│   └── utils/            # Server utility functions
├── shared/               # Code shared between app and server
│   ├── types/              # Shared TypeScript types
│   └── utils/              # Shared utility functions
├── public/                 # Static assets (directly served)
├── nuxt.config.ts          # Nuxt configuration
├── package.json            # Project dependencies and scripts
└── tsconfig.json           # TypeScript configuration
````

---

## 2. Directory Responsibilities (หน้าที่ของแต่ละไดเรกทอรี)

- **Summary**: ตารางสรุปหน้าที่หลัก, สภาพแวดล้อม, และพฤติกรรมของแต่ละไดเรกทอรี

| Path | Core Responsibility | Environment | Side Effects | Auto-Imports | Example / Convention |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `app/pages/` | Routing & Data Fetching | Universal | Yes | No | `[id].vue`, `index.vue` |
| `app/components/` | Reusable UI Components | Universal | Yes (UI) | Yes | `ui/Button.vue` |
| `app/composables/` | Reusable Logic | Universal | Varies | Yes | `useAuth.ts` |
| `app/layouts/` | Page Layouts | Universal | Yes (UI) | No | `default.vue` |
| `app/utils/` | Helper Functions | Universal | No | Yes | `formatters.ts` |
| `server/api/` | API Endpoints | Server-Only | Yes | No | `users/[id].get.ts` |
| `server/lib/` | Server Libraries | Server-Only | Yes | No | `payment.ts` |
| `shared/types/` | Shared Types | Universal | No | Yes (types) | `user.types.ts` |
| `public/` | Static Assets | Client-Only | No | No | `favicon.ico` |
