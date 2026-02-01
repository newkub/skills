---
name: next
description: Best practices for Next.js development including App Router, Server Components, and performance optimization
goal: พัฒนา Next.js applications ตาม best practices
outcome: Next.js applications ที่มีคุณภาพสูง ประสิทธิภาพดี และ SEO-friendly
---

# Next.js

## When to Use

ใช้ Skill นี้เมื่อต้องการพัฒนา Next.js applications ที่มีคุณภาพสูง

- เมื่อสร้าง Next.js application ใหม่และต้องการโครงสร้างที่ถูกต้อง
- เมื่อต้องการใช้ App Router และ Server Components
- เมื่อต้องการ optimize performance และ SEO
- เมื่อต้องการจัดการ data fetching และ caching
- เมื่อต้องการ deploy ไปยัง production อย่างเหมาะสม

## Quick Start

1. สร้าง Next.js project ใหม่ด้วย `npx create-next-app@latest my-app`
2. ตั้งค่าโครงสร้างโปรเจกต์ตาม [1-next-project-structure.md](./rules/1-next-project-structure.md)
3. ใช้ App Router ตาม [2-next-app-router.md](./rules/2-next-app-router.md)
4. จัดการ data fetching ตาม [3-next-data-fetching.md](./rules/3-next-data-fetching.md)
5. รัน `npm run dev` เพื่อเริ่มการพัฒนา

## Rules

| Priority | Impact | Reference | Name | Description | Prefix | Condition |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | `CRITICAL` | [1-next-project-structure.md](./rules/1-next-project-structure.md) | Project Structure | โครงสร้าง Next.js project ที่ถูกต้อง | `next-` | เมื่อสร้าง project |
| 2 | `CRITICAL` | [2-next-app-router.md](./rules/2-next-app-router.md) | App Router | ใช้ App Router และ Server Components อย่างเหมาะสม | `next-` | เมื่อใช้ routing |
| 3 | `HIGH` | [3-next-data-fetching.md](./rules/3-next-data-fetching.md) | Data Fetching | จัดการ data fetching และ caching อย่างมีประสิทธิภาพ | `next-` | เมื่อจัดการ data |
| 4 | `HIGH` | [4-next-performance.md](./rules/4-next-performance.md) | Performance | การ optimize performance ของ Next.js application | `next-` | เมื่อ optimize |
| 5 | `HIGH` | [5-next-seo.md](./rules/5-next-seo.md) | SEO | การตั้งค่า SEO และ metadata อย่างเหมาะสม | `next-` | เมื่อตั้งค่า SEO |

## Knowledge

| Reference | Name | Description | Prefix |
| :--- | :--- | :--- | :--- |
| [core-concepts.md](./knowledge/core-concepts.md) | Core Concepts | ความรู้เกี่ยวกับ concepts หลักของ Next.js | `next-` |
| [all-features.md](./knowledge/all-features.md) | All Features | ความรู้เกี่ยวกับฟีเจอร์ทั้งหมดของ Next.js | `next-` |
| [best-practices.md](./knowledge/best-practices.md) | Best Practices | best practices สำหรับ Next.js development | `next-` |

## Verification

1. ตรวจสอบว่า Next.js ติดตั้งและตั้งค่าถูกต้องด้วย `npx next --version`
2. ทดสอบด้วยการรัน `npm run dev` และตรวจสอบว่า application ทำงานได้
3. ตรวจสอบว่า App Router และ Server Components ทำงานได้ถูกต้อง
4. ตรวจสอบว่า SEO metadata ตั้งค่าได้ถูกต้อง
