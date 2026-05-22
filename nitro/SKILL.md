---
name: nitro
description: Best practices for Nitro development including server-side APIs, deployment, and performance optimization
goal: พัฒนา Nitro servers ตาม best practices
outcome: Nitro servers ที่มีคุณภาพสูง ปรับขนาดได้ และ deploy ได้หลาย platforms
---

# Nitro

## When to Use

ใช้ Skill นี้เมื่อต้องการพัฒนา Nitro servers ที่มีคุณภาพสูง

- เมื่อสร้าง Nitro server ใหม่และต้องการโครงสร้างที่ถูกต้อง
- เมื่อต้องการสร้าง server-side APIs ที่ปรับขนาดได้
- เมื่อต้องการ deploy ไปยังหลาย platforms (Node.js, Deno, Cloudflare Workers)
- เมื่อต้องการ optimize performance และ caching
- เมื่อต้องการจัดการ middleware และ plugins

## Quick Start

1. สร้าง Nitro project ใหม่ด้วย `npx nuxi@latest init my-nitro-app --template nitro-prisma`
2. ตั้งค่าโครงสร้างโปรเจกต์
3. สร้าง API routes
4. ตั้งค่า deployment
5. รัน `npm run dev` เพื่อเริ่มการพัฒนา

## Rules

| Priority | Impact | Reference | Name | Description | Prefix | Condition |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | `CRITICAL` | - | Project Structure | โครงสร้าง Nitro project ที่ถูกต้อง | `nitro-` | เมื่อสร้าง project |
| 2 | `HIGH` | - | API Routes | สร้าง API routes อย่างมีประสิทธิภาพ | `nitro-` | เมื่อสร้าง APIs |
| 3 | `HIGH` | - | Deployment | Deploy Nitro server ไปยังหลาย platforms | `nitro-` | เมื่อ deploy |
| 4 | `HIGH` | - | Performance | การ optimize performance ของ Nitro server | `nitro-` | เมื่อ optimize |
| 5 | `HIGH` | - | Middleware | จัดการ middleware และ plugins อย่างเหมาะสม | `nitro-` | เมื่อใช้ middleware |

## Knowledge

| Reference | Name | Description | Prefix |
| :--- | :--- | :--- | :--- |
| Core Concepts | Core Concepts | ความรู้เกี่ยวกับ concepts หลักของ Nitro | `nitro-` |
| All Features | All Features | ความรู้เกี่ยวกับฟีเจอร์ทั้งหมดของ Nitro | `nitro-` |
| Best Practices | Best Practices | best practices สำหรับ Nitro development | `nitro-` |

## Verification

1. ตรวจสอบว่า Nitro ติดตั้งและตั้งค่าถูกต้องด้วย `npx nitropack --version`
2. ทดสอบด้วยการรัน `npm run dev` และตรวจสอบว่า server ทำงานได้
3. ตรวจสอบว่า API routes ทำงานได้ถูกต้องและ return response ที่เหมาะสม
4. ตรวจสอบว่า deployment ไปยัง target platform ทำงานได้จริง
