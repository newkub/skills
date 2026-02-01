---
name: raycast-extensions
description: Best practices for building Raycast extensions including React components, API integration, and UI/UX design
goal: พัฒนา Raycast extensions ตาม best practices
outcome: Raycast extensions ที่มีคุณภาพสูง ใช้งานง่าย และ integrate ได้ดี
---

# Raycast Extensions

## When to Use

ใช้ Skill นี้เมื่อต้องการพัฒนา Raycast extensions ที่มีคุณภาพสูง

- เมื่อสร้าง Raycast extension ใหม่และต้องการโครงสร้างที่ถูกต้อง
- เมื่อต้องการใช้ React components สำหรับ Raycast UI
- เมื่อต้องการ integrate กับ external APIs
- เมื่อต้องการ optimize performance และ user experience
- เมื่อต้องการ publish extension ไปยัง Raycast Store

## Quick Start

1. สร้าง Raycast extension ใหม่ด้วย `npx create-raycast-extension`
2. ตั้งค่าโครงสร้างโปรเจกต์ตาม [1-raycast-project-structure.md](./rules/1-raycast-project-structure.md)
3. สร้าง UI components ตาม [2-raycast-ui-components.md](./rules/2-raycast-ui-components.md)
4. integrate APIs ตาม [3-raycast-api-integration.md](./rules/3-raycast-api-integration.md)
5. รัน `npm run dev` เพื่อเริ่มการพัฒนา

## Rules

| Priority | Impact | Reference | Name | Description | Prefix | Condition |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | `CRITICAL` | [1-raycast-project-structure.md](./rules/1-raycast-project-structure.md) | Project Structure | โครงสร้าง Raycast extension project ที่ถูกต้อง | `raycast-` | เมื่อสร้าง project |
| 2 | `HIGH` | [2-raycast-ui-components.md](./rules/2-raycast-ui-components.md) | UI Components | สร้าง React components สำหรับ Raycast UI | `raycast-` | เมื่อสร้าง UI |
| 3 | `HIGH` | [3-raycast-api-integration.md](./rules/3-raycast-api-integration.md) | API Integration | integrate กับ external APIs อย่างมีประสิทธิภาพ | `raycast-` | เมื่อใช้ APIs |
| 4 | `HIGH` | [4-raycast-performance.md](./rules/4-raycast-performance.md) | Performance | การ optimize performance ของ Raycast extension | `raycast-` | เมื่อ optimize |
| 5 | `HIGH` | [5-raycast-publishing.md](./rules/5-raycast-publishing.md) | Publishing | Publish extension ไปยัง Raycast Store | `raycast-` | เมื่อ publish |

## Knowledge

| Reference | Name | Description | Prefix |
| :--- | :--- | :--- | :--- |
| [core-concepts.md](./knowledge/core-concepts.md) | Core Concepts | ความรู้เกี่ยวกับ concepts หลักของ Raycast | `raycast-` |
| [all-features.md](./knowledge/all-features.md) | All Features | ความรู้เกี่ยวกับฟีเจอร์ทั้งหมดของ Raycast | `raycast-` |
| [best-practices.md](./knowledge/best-practices.md) | Best Practices | best practices สำหรับ Raycast development | `raycast-` |

## Verification

1. ตรวจสอบว่า Raycast CLI ติดตั้งและตั้งค่าถูกต้องด้วย `raycast --version`
2. ทดสอบด้วยการรัน `npm run dev` และตรวจสอบว่า extension ทำงานใน Raycast
3. ตรวจสอบว่า UI components แสดงผลได้ถูกต้องและ responsive
4. ตรวจสอบว่า API integration ทำงานได้และจัดการ errors อย่างเหมาะสม
