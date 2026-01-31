---
name: nuxt
description: รวมแนวทางการพัฒนาโปรเจกต์ Nuxt.js ตาม Best Practices
---

## Rules by category

### Setup & Configuration (การตั้งค่าโปรเจกต์)

| Priority | Impact | Reference | Name | Description | Prefix | Condition |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | `CRITICAL` | `follow-nuxt-package-json` | Package & Scripts | ตั้งค่า package.json และ scripts ตามมาตรฐาน | `nuxt-` | เมื่อสร้างโปรเจกต์ใหม่หรืออัปเดต dependencies |
| 2 | `HIGH` | `follow-nuxt-config-ts` | Nuxt Config | ตั้งค่า nuxt.config.ts ตาม best practices | `nuxt-` | เมื่อสร้างหรือแก้ไข nuxt.config.ts |
| 2 | `HIGH` | `follow-nuxt-tsconfig-json` | TS Config | ตั้งค่า tsconfig.json สำหรับ Nuxt | `nuxt-` | เมื่อสร้างหรือแก้ไข tsconfig.json |

### Project Structure & Core Concepts (โครงสร้างและแนวคิดหลัก)

| Priority | Impact | Reference | Name | Description | Prefix | Condition |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | `CRITICAL` | `follow-nuxt-project-structure` | Overall Structure | โครงสร้างโปรเจกต์ Nuxt ที่เหมาะสม | `nuxt-` | เมื่อสร้างโปรเจกต์ใหม่ |
| 1 | `CRITICAL` | `follow-nuxt-app-vue` | App Entry | ตั้งค่า app.vue ตาม best practices | `nuxt-` | เมื่อสร้างหรือแก้ไข app.vue |
| 2 | `HIGH` | `follow-nuxt-pages` | Pages & Routing | สร้างและจัดการ pages และ routing | `nuxt-` | เมื่อสร้าง page ใหม่ |
| 2 | `HIGH` | `follow-nuxt-components` | Components | สร้างและจัดโครงสร้าง Vue Components | `nuxt-` | เมื่อสร้าง component ใหม่ |
| 2 | `HIGH` | `follow-nuxt-layouts` | Layouts | สร้างและจัดการ layouts | `nuxt-` | เมื่อสร้าง layout ใหม่ |
| 2 | `HIGH` | `follow-nuxt-composables` | Composables | สร้างและจัดการ composables | `nuxt-` | เมื่อสร้าง composable ใหม่ |
| 2 | `HIGH` | `follow-nuxt-stores` | State Management | ใช้ Pinia สำหรับ state management | `nuxt-` | เมื่อสร้าง store ใหม่ |

### Server Engine (การพัฒนาฝั่ง Server)

| Priority | Impact | Reference | Name | Description | Prefix | Condition |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 2 | `HIGH` | `follow-nuxt-server-api` | API Routes | สร้างและจัดการ API routes | `nuxt-` | เมื่อสร้าง API route ใหม่ |
| 2 | `HIGH` | `follow-nuxt-server-composables` | Server Composables | สร้าง server composables | `nuxt-` | เมื่อสร้าง server composable ใหม่ |
| 2 | `HIGH` | `follow-nuxt-server-middleware` | Server Middleware | สร้างและจัดการ server middleware | `nuxt-` | เมื่อสร้าง middleware ใหม่ |

### Advanced (หัวข้อขั้นสูง)

| Priority | Impact | Reference | Name | Description | Prefix | Condition |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 3 | `MEDIUM` | `follow-nuxt-module` | Module Development | พัฒนา Nuxt modules | `nuxt-` | เมื่อต้องการสร้าง module ใหม่ |
| 3 | `MEDIUM` | `follow-nuxt-optimization` | Optimization | ปรับปรุงประสิทธิภาพ Nuxt | `nuxt-` | เมื่อต้องการ optimize โปรเจกต์ |

## How to Use

แต่ละไฟล์ Rule ประกอบด้วย:
- **Frontmatter**: ระบุ trigger, description, condition สำหรับการใช้งาน
- **Content**: แนวทางและตัวอย่างโค้ดจริงสำหรับการปฏิบัติตาม best practices

ตัวอย่างการใช้งาน:
- [`./rules/follow-nuxt-components.md`](./rules/follow-nuxt-components.md) - สำหรับการสร้าง Vue Components
- [`./rules/follow-nuxt-pages.md`](./rules/follow-nuxt-pages.md) - สำหรับการสร้าง Pages
- [`./rules/follow-nuxt-app-vue.md`](./rules/follow-nuxt-app-vue.md) - สำหรับการตั้งค่า app.vue
