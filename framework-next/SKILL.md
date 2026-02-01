---
name: next
description: Best practices for Next.js development including App Router, Server Components, and performance optimization
goal: พัฒนา Next.js applications ตาม best practices
outcome: Next.js applications ที่มีคุณภาพสูง ประสิทธิภาพดี และ SEO-friendly
---

## When to Execute
- เมื่อสร้าง Next.js application ใหม่
- เมื่อต้องการใช้ App Router และ Server Components
- เมื่อต้องการ optimize performance และ SEO
- เมื่อต้องการจัดการ data fetching และ caching
- เมื่อต้องการ deploy ไปยัง production

## Quick Start
1. สร้าง Next.js project ใหม่ด้วย `npx create-next-app@latest my-app`
2. ตั้งค่าโครงสร้างโปรเจกต์ตาม best practices
3. ใช้ App Router และ Server Components
4. จัดการ data fetching และ caching
5. รัน `npm run dev` เพื่อเริ่มการพัฒนา

## Execution Table

| Number | File | Condition |
|--------|------|-----------|
| 1 | [Setup](rules/1-setup.md) | เมื่อต้องการตั้งค่า Next.js ใหม่ |
| 2 | [App Router](features/1-app-router.md) | เมื่อต้องการใช้ App Router |
| 3 | [Server Components](features/2-server-components.md) | เมื่อต้องการใช้ Server Components |
| 4 | [Client Components](features/3-client-components.md) | เมื่อต้องการใช้ Client Components |
| 5 | [Server Actions](features/4-server-actions.md) | เมื่อต้องการใช้ Server Actions |
| 6 | [Data Fetching](features/5-data-fetching.md) | เมื่อต้องการจัดการ data |
| 7 | [Fundamentals](best-practices/1-fundamentals.md) | เมื่อต้องการเรียนรู้พื้นฐาน |
| 8 | [Performance](best-practices/2-performance.md) | เมื่อต้องการปรับปรุงประสิทธิภาพ |
| 9 | [Patterns](best-practices/3-patterns.md) | เมื่อต้องการเรียนรู้ patterns |
| 10 | [Architecture](summarize/1-architecture.md) | เมื่อต้องการดู best practices สำหรับ architecture |
| 11 | [Optimization](summarize/2-optimization.md) | เมื่อต้องการดู best practices สำหรับ optimization |
| 12 | [Security](summarize/3-security.md) | เมื่อต้องการดู best practices สำหรับ security |
| 13 | [Deployment](summarize/4-deployment.md) | เมื่อต้องการดู best practices สำหรับ deployment |
| 14 | [Testing](summarize/5-testing.md) | เมื่อต้องการดู best practices สำหรับ testing |
| 15 | [Monitoring](summarize/6-monitoring.md) | เมื่อต้องการดู best practices สำหรับ monitoring |
| 16 | [Scalability](summarize/7-scalability.md) | เมื่อต้องการดู best practices สำหรับ scalability |
| 17 | [Maintenance](summarize/8-maintenance.md) | เมื่อต้องการดู best practices สำหรับ maintenance |
| 18 | [Accessibility](summarize/9-accessibility.md) | เมื่อต้องการดู best practices สำหรับ accessibility |
| 19 | [Internationalization](summarize/10-internationalization.md) | เมื่อต้องการดู best practices สำหรับ i18n |
| 20 | [Examples](reference/examples.md) | เมื่อต้องการดูตัวอย่างโค้ด |
| 21 | [Patterns](reference/patterns.md) | เมื่อต้องการดู patterns เพิ่มเติม |
| 22 | [Resources](reference/resources.md) | เมื่อต้องการแหล่งข้อมูลเพิ่มเติม |
| 23 | [External Links](reference/external-links.md) | เมื่อต้องการลิงก์ภายนอก |

## Verification

1. ตรวจสอบว่า Next.js ติดตั้งและตั้งค่าถูกต้องด้วย `npx next --version`
2. ทดสอบด้วยการรัน `npm run dev` และตรวจสอบว่า application ทำงานได้
3. ตรวจสอบว่า App Router และ Server Components ทำงานได้ถูกต้อง
4. ตรวจสอบว่า SEO metadata ตั้งค่าได้ถูกต้อง
