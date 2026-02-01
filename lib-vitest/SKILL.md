---
name: vitest
description: แนวทางการตั้งค่าและใช้งาน Vitest สำหรับการทดสอบโปรเจกต์ TypeScript และ JavaScript
goal: ตั้งค่าและใช้งาน Vitest สำหรับการทดสอบโปรเจกต์อย่างมีประสิทธิภาพ
outcome: โปรเจกต์มีระบบการทดสอบที่เร็วและเสถียรพร้อม CI/CD integration
---

# Vitest

## When to Apply

ใช้ Skill นี้เมื่อต้องการตั้งค่าระบบการทดสอบสำหรับโปรเจกต์ TypeScript หรือ JavaScript

- เมื่อสร้างโปรเจกต์ใหม่และต้องการ testing framework ที่เร็ว
- เมื่อต้องการย้ายจาก Jest มาใช้ Vitest
- เมื่อต้องการ integrate กับ Vite project
- เมื่อต้องการ setup testing พร้อม TypeScript support
- เมื่อต้องการ configure CI/CD สำหรับการทดสอบ

## Quick Start

1. ติดตั้ง Vitest ด้วย `npm install -D vitest @vitest/ui`
2. สร้างไฟล์ config ตาม [1-vitest-config.md](./rules/1-vitest-config.md)
3. เขียน test แรกใน `src/__tests__/example.test.ts` ตาม [2-vitest-usage.md](./rules/2-vitest-usage.md)
4. ตั้งค่า scripts ใน `package.json` ตาม [3-vitest-scripts.md](./rules/3-vitest-scripts.md)
5. รัน `npm run test` เพื่อเริ่มการทดสอบ

## Rules

| Priority | Impact | Reference | Name | Description | Prefix | Condition |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | `CRITICAL` | [1-vitest-config.md](./rules/1-vitest-config.md) | Configuration | ตั้งค่า Vitest config ให้เหมาะสมกับโปรเจกต์ | `vitest-` | เมื่อตั้งค่า project |
| 2 | `HIGH` | [2-vitest-usage.md](./rules/2-vitest-usage.md) | Usage | เขียน tests ตาม best practices | `vitest-` | เมื่อเขียน tests |
| 3 | `HIGH` | [3-vitest-scripts.md](./rules/3-vitest-scripts.md) | Scripts | ตั้งค่า npm scripts สำหรับการทดสอบ | `vitest-` | เมื่อ setup scripts |
| 4 | `MEDIUM` | [4-vitest-ci-cd.md](./rules/4-vitest-ci-cd.md) | CI/CD | ตั้งค่า CI/CD pipeline สำหรับการทดสอบ | `vitest-` | เมื่อ setup CI/CD |

## Knowledge

| Reference | Name | Description | Prefix |
| :--- | :--- | :--- | :--- |
| [core-concept.md](./knowledge/core-concept.md) | Core Concepts | ความรู้เกี่ยวกับ concepts หลักของ Vitest | `vitest-` |
| [all-features.md](./knowledge/all-features.md) | All Features | ความรู้เกี่ยวกับฟีเจอร์ทั้งหมดของ Vitest | `vitest-` |
| [best-practices.md](./knowledge/best-practices.md) | Best Practices | แนวทางปฏิบัติที่ดีที่สุดสำหรับ Vitest | `vitest-` |

## References

- [Vite Documentation](https://vitejs.dev/)
- [Vitest Documentation](https://vitest.dev/)
- [Vitest Configuration](https://vitest.dev/config/)
- [Vitest API](https://vitest.dev/api/)
