---
name: react
description: แนวทางการพัฒนา React applications ตาม Best Practices
goal: พัฒนา React applications ตาม best practices
outcome: React applications มีโครงสร้างที่ดี ประสิทธิภาพสูง และ maintainable
---

## When to Execute

- เมื่อสร้าง React application ใหม่
- เมื่อต้องการจัดการ components อย่างมีประสิทธิภาพ
- เมื่อต้องการจัดการ state และ data flow
- เมื่อต้องการ optimize performance
- เมื่อต้องการตั้งค่า testing

## Quick Start

1. สร้าง React project ใหม่ด้วย `npx create-react-app my-app --template typescript`
2. ตั้งค่าโครงสร้างโปรเจกต์ตาม best practices
3. จัดการ components ตาม component patterns
4. ตั้งค่า state management ตาม guidelines
5. รัน `npm start` เพื่อเริ่มการพัฒนา

## Execution Table

| Number | File | Condition |
|--------|------|-----------|
| 1 | [Setup](rules/1-setup.md) | เมื่อต้องการตั้งค่า React ใหม่ |
| 2 | [Components](features/1-components.md) | เมื่อต้องการสร้าง components |
| 3 | [Hooks](features/2-hooks.md) | เมื่อต้องการใช้ React hooks |
| 4 | [State Management](features/3-state-management.md) | เมื่อต้องการจัดการ state |
| 5 | [Forms](features/4-forms.md) | เมื่อต้องการจัดการ forms |
| 6 | [Testing](features/5-testing.md) | เมื่อต้องการทดสอบ components |
| 7 | [Fundamentals](best-practices/1-fundamentals.md) | เมื่อต้องการเรียนรู้พื้นฐาน |
| 8 | [Performance](best-practices/2-performance.md) | เมื่อต้องการปรับปรุงประสิทธิภาพ |
| 9 | [Patterns](best-practices/3-patterns.md) | เมื่อต้องการเรียนรู้ patterns |
| 10 | [Component Architecture](summarize/1-component-architecture.md) | เมื่อต้องการดู best practices สำหรับ architecture |
| 11 | [State Management](summarize/2-state-management.md) | เมื่อต้องการดู best practices สำหรับ state |
| 12 | [Performance](summarize/3-performance.md) | เมื่อต้องการดู best practices สำหรับ performance |
| 13 | [Testing](summarize/4-testing.md) | เมื่อต้องการดู best practices สำหรับ testing |
| 14 | [Accessibility](summarize/5-accessibility.md) | เมื่อต้องการดู best practices สำหรับ accessibility |
| 15 | [Security](summarize/6-security.md) | เมื่อต้องการดู best practices สำหรับ security |
| 16 | [Examples](reference/examples.md) | เมื่อต้องการดูตัวอย่างโค้ด |
| 17 | [Patterns](reference/patterns.md) | เมื่อต้องการดู patterns เพิ่มเติม |
| 18 | [Resources](reference/resources.md) | เมื่อต้องการแหล่งข้อมูลเพิ่มเติม |
| 19 | [External Links](reference/external-links.md) | เมื่อต้องการลิงก์ภายนอก |

## Verification

1. ตรวจสอบว่า React ติดตั้งและตั้งค่าถูกต้องด้วย `npx react --version`
2. ทดสอบด้วยการรัน `npm start` และตรวจสอบว่า application ทำงานได้
3. ตรวจสอบว่า components และ hooks ทำงานได้ถูกต้อง
4. ตรวจสอบว่า state management ตั้งค่าได้ถูกต้อง
