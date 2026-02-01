---
name: nuxt
description: Best practices for Nuxt.js development including Vue 3, Server-Side Rendering, and performance optimization
goal: พัฒนา Nuxt.js applications ตาม best practices
outcome: Nuxt.js applications ที่มีคุณภาพสูง ประสิทธิภาพดี และ SEO-friendly
---

# Nuxt.js

## When to Use

ใช้ Skill นี้เมื่อต้องการพัฒนา Nuxt.js applications ที่มีคุณภาพสูง

- เมื่อสร้าง Nuxt.js application ใหม่และต้องการโครงสร้างที่ถูกต้อง
- เมื่อต้องการใช้ Vue 3 และ Composition API
- เมื่อต้องการ implement Server-Side Rendering (SSR)
- เมื่อต้องการ optimize performance และ SEO
- เมื่อต้องการจัดการ modules และ plugins

## Quick Start

1. สร้าง Nuxt.js project ใหม่ด้วย `npx nuxi@latest init my-app`
2. ตั้งค่าโครงสร้างโปรเจกต์ตาม [1-nuxt-project-structure.md](./rules/1-nuxt-project-structure.md)
3. ใช้ Vue 3 และ Composition API ตาม [2-nuxt-vue3.md](./rules/2-nuxt-vue3.md)
4. ตั้งค่า SSR ตาม [3-nuxt-ssr.md](./rules/3-nuxt-ssr.md)
5. รัน `npm run dev` เพื่อเริ่มการพัฒนา

## Rules

| Priority | Impact | Reference | Name | Description | Prefix | Condition |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | `CRITICAL` | [1-nuxt-project-structure.md](./rules/1-nuxt-project-structure.md) | Project Structure | โครงสร้าง Nuxt.js project ที่ถูกต้อง | `nuxt-` | เมื่อสร้าง project |
| 2 | `HIGH` | [2-nuxt-vue3.md](./rules/2-nuxt-vue3.md) | Vue 3 | ใช้ Vue 3 และ Composition API อย่างเหมาะสม | `nuxt-` | เมื่อพัฒนา components |
| 3 | `HIGH` | [3-nuxt-ssr.md](./rules/3-nuxt-ssr.md) | SSR | ตั้งค่า Server-Side Rendering อย่างเหมาะสม | `nuxt-` | เมื่อใช้ SSR |
| 4 | `HIGH` | [4-nuxt-performance.md](./rules/4-nuxt-performance.md) | Performance | การ optimize performance ของ Nuxt.js application | `nuxt-` | เมื่อ optimize |
| 5 | `HIGH` | [5-nuxt-modules.md](./rules/5-nuxt-modules.md) | Modules | จัดการ Nuxt modules และ plugins อย่างมีประสิทธิภาพ | `nuxt-` | เมื่อใช้ modules |

## Knowledge

| Reference | Name | Description | Prefix |
| :--- | :--- | :--- | :--- |
| [core-concepts.md](./knowledge/core-concepts.md) | Core Concepts | ความรู้เกี่ยวกับ concepts หลักของ Nuxt.js | `nuxt-` |
| [all-features.md](./knowledge/all-features.md) | All Features | ความรู้เกี่ยวกับฟีเจอร์ทั้งหมดของ Nuxt.js | `nuxt-` |
| [best-practices.md](./knowledge/best-practices.md) | Best Practices | best practices สำหรับ Nuxt.js development | `nuxt-` |

## Verification

1. ตรวจสอบว่า Nuxt.js ติดตั้งและตั้งค่าถูกต้องด้วย `npx nuxi --version`
2. ทดสอบด้วยการรัน `npm run dev` และตรวจสอบว่า application ทำงานได้
3. ตรวจสอบว่า SSR ทำงานได้ถูกต้องและ generate HTML บน server
4. ตรวจสอบว่า Vue 3 และ Composition API ใช้งานได้ถูกต้อง
