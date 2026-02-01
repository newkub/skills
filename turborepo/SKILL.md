---
name: turborepo
description: Best practices สำหรับการพัฒนา monorepo ด้วย Turborepo
goal: ใช้ Turborepo เพื่อจัดการ monorepo อย่างมีประสิทธิภาพ
outcome: เข้าใจและสามารถใช้ Turborepo สำหรับ monorepo ได้อย่างถูกต้อง
---

## When to Apply

ใช้ Skill นี้เมื่อต้องการจัดการ monorepo ที่มีหลาย packages และต้องการ:

- Build และ test หลาย packages พร้อมกัน
- Cache dependencies และ build artifacts
- จัดการ dependencies ระหว่าง packages
- รัน scripts แบบ parallel หรือ sequential

## Quick Start

1. ติดตั้ง Turborepo ใน monorepo ด้วย `npm install turbo -D`
2. สร้าง `turbo.json` สำหรับ configuration
3. รัน `turbo build` เพื่อ build ทุก packages
4. รัน `turbo test` เพื่อ test ทุก packages
5. ตรวจสอบว่าทุกอย่างทำงานถูกต้อง

## Rules

| Priority | Impact | Reference | Name | Description | Prefix | Condition |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | `CRITICAL` | [1-setup.md](./rules/1-setup.md) | Setup | ตั้งค่า Turborepo ใน monorepo | `turbo-` | เมื่อเริ่มต้น |
| 2 | `HIGH` | [2-configuration.md](./rules/2-configuration.md) | Configuration | ตั้งค่า turbo.json ให้เหมาะสม | `turbo-` | เมื่อตั้งค่า |
| 3 | `HIGH` | [3-usage.md](./rules/3-usage.md) | Usage | ใช้ Turborepo commands อย่างมีประสิทธิภาพ | `turbo-` | เมื่อใช้งาน |

## Knowledge

| Reference | Name | Description | Prefix |
| :--- | :--- | :--- | :--- |
| [core-concept.md](./knowledge/core-concept.md) | Core Concepts | ความรู้เกี่ยวกับ concepts หลักของ Turborepo | `turbo-` |
| [all-features.md](./knowledge/all-features.md) | All Features | ความรู้เกี่ยวกับฟีเจอร์ทั้งหมดของ Turborepo | `turbo-` |
| [best-practices.md](./knowledge/best-practices.md) | Best Practices | แนวทางปฏิบัติที่ดีที่สุดสำหรับ Turborepo | `turbo-` |

## References

- [Official Documentation](https://turbo.build/repo/docs)
