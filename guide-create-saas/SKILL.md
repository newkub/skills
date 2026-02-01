---
name: create-saas
description: Best practices for building SaaS applications including architecture, scaling, and monetization
goal: สร้าง SaaS applications ตาม best practices
outcome: SaaS applications ที่มีความน่าเชื่อถือ ปรับขนาดได้ และสร้างรายได้ได้จริง
---

# Create SaaS

## When to Use

ใช้ Skill นี้เมื่อต้องการสร้าง SaaS applications ที่มีคุณภาพสูง

- เมื่อสร้าง SaaS application ใหม่และต้องการโครงสร้างที่ถูกต้อง
- เมื่อต้องการออกแบบ architecture ที่ปรับขนาดได้
- เมื่อต้องการ implement authentication และ authorization
- เมื่อต้องการจัดการ subscription และ billing
- เมื่อต้องการ optimize performance และ monitoring

## Quick Start

1. วางแผน architecture ตาม [1-saas-architecture.md](./rules/1-saas-architecture.md)
2. ตั้งค่า project structure ตาม [2-saas-project-structure.md](./rules/2-saas-project-structure.md)
3. implement authentication ตาม [3-saas-authentication.md](./rules/3-saas-authentication.md)
4. ตั้งค่า subscription และ billing ตาม [4-saas-billing.md](./rules/4-saas-billing.md)
5. deploy และ monitor ตาม [5-saas-deployment.md](./rules/5-saas-deployment.md)

## Rules

| Priority | Impact | Reference | Name | Description | Prefix | Condition |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | `CRITICAL` | [1-saas-architecture.md](./rules/1-saas-architecture.md) | Architecture | ออกแบบ SaaS architecture ที่ปรับขนาดได้ | `saas-` | เมื่อวางแผน |
| 2 | `HIGH` | [2-saas-project-structure.md](./rules/2-saas-project-structure.md) | Project Structure | โครงสร้างโปรเจกต์ SaaS ที่เหมาะสม | `saas-` | เมื่อสร้าง project |
| 3 | `HIGH` | [3-saas-authentication.md](./rules/3-saas-authentication.md) | Authentication | จัดการ authentication และ authorization | `saas-` | เมื่อจัดการ users |
| 4 | `HIGH` | [4-saas-billing.md](./rules/4-saas-billing.md) | Billing | จัดการ subscription และ payment | `saas-` | เมื่อมี billing |
| 5 | `HIGH` | [5-saas-deployment.md](./rules/5-saas-deployment.md) | Deployment | Deploy และ monitor SaaS application | `saas-` | เมื่อ deploy |

## Knowledge

| Reference | Name | Description | Prefix |
| :--- | :--- | :--- | :--- |
| [core-concepts.md](./knowledge/core-concepts.md) | Core Concepts | ความรู้เกี่ยวกับ concepts หลักของ SaaS | `saas-` |
| [all-features.md](./knowledge/all-features.md) | All Features | ความรู้เกี่ยวกับฟีเจอร์ทั้งหมดของ SaaS | `saas-` |
| [best-practices.md](./knowledge/best-practices.md) | Best Practices | best practices สำหรับ SaaS development | `saas-` |

## Verification

1. ตรวจสอบว่า architecture ออกแบบได้ถูกต้องตามหลักการ SaaS
2. ทดสอบด้วยการรัน application และตรวจสอบว่า authentication ทำงานได้
3. ตรวจสอบว่า subscription และ billing ทำงานได้ถูกต้อง
4. ตรวจสอบว่า deployment และ monitoring ทำงานได้จริง
