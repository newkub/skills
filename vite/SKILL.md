---
name: vite
description: แนวทางการพัฒนาโปรเจกต์ Vite ตาม Best Practices
goal: พัฒนาโปรเจกต์ Vite ตาม best practices
outcome: โปรเจกต์ Vite มีโครงสร้างและคุณภาพตามมาตรฐาน
---

# Vite

## When to Use

ใช้ Skill นี้เมื่อต้องการพัฒนาโปรเจกต์ Vite ที่มีคุณภาพสูงและปฏิบัติตาม best practices

- เมื่อสร้างโปรเจกต์ Vite ใหม่และต้องการโครงสร้างที่ถูกต้อง
- เมื่อต้องการตั้งค่า Vite configuration ให้เหมาะสมกับ production
- เมื่อต้องการใช้ Vite plugins อย่างมีประสิทธิภาพ
- เมื่อต้องการ optimize build performance และขนาด bundle
- เมื่อต้องการตั้งค่าสภาพแวดล้อมการพัฒนาที่เหมาะสม

## Quick Start

1. สร้างโปรเจกต์ Vite ใหม่ด้วย `npm create vite@latest my-project -- --template vue`
2. ตั้งค่าโครงสร้างโปรเจกต์ตาม [1-vite-project-structure.md](./rules/1-vite-project-structure.md)
3. ตั้งค่า Vite configuration ใน `vite.config.js` ตาม [2-vite-configuration.md](./rules/2-vite-configuration.md)
4. ติดตั้ง plugins ที่จำเป็นตาม [3-vite-plugins.md](./rules/3-vite-plugins.md)
5. รัน `npm run dev` เพื่อเริ่มการพัฒนา

## Rules

| Priority | Impact | Reference | Name | Description | Prefix | Condition |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | `CRITICAL` | [1-vite-project-structure.md](./rules/1-vite-project-structure.md) | Project Structure | โครงสร้างโปรเจกต์ Vite ที่ถูกต้อง | `vite-` | เมื่อสร้าง project |
| 2 | `HIGH` | [2-vite-configuration.md](./rules/2-vite-configuration.md) | Configuration | ตั้งค่า Vite configuration ให้เหมาะสมกับโปรเจกต์ | `vite-` | เมื่อตั้งค่า config |
| 3 | `HIGH` | [3-vite-plugins.md](./rules/3-vite-plugins.md) | Plugins | ใช้ Vite plugins อย่างเหมาะสมเพื่อเพิ่มฟีเจอร์และประสิทธิภาพ | `vite-` | เมื่อใช้ plugins |

## Knowledge

| Reference | Name | Description | Prefix |
| :--- | :--- | :--- | :--- |
| [vite-vite-concepts.md](./knowledge/vite-vite-concepts.md) | Vite Concepts | ความรู้เกี่ยวกับ concepts หลักของ Vite | `vite-` |
| [vite-build-process.md](./knowledge/vite-build-process.md) | Build Process | ความรู้เกี่ยวกับกระบวนการ build ของ Vite | `vite-` |
| [vite-plugin-system.md](./knowledge/vite-plugin-system.md) | Plugin System | ความรู้เกี่ยวกับระบบ plugins ของ Vite | `vite-` |

## References

- [Vite Documentation](https://vitejs.dev/)
- [Vite Config](https://vitejs.dev/config/)
- [Vite Plugins](https://vitejs.dev/plugins/)
- [Rollup Documentation](https://rollupjs.org/)

## Verification

1. ตรวจสอบว่า Vite ติดตั้งและตั้งค่าถูกต้องด้วย `npm run dev`
2. ทดสอบด้วยการรัน `npm run build` และตรวจสอบว่า build สำเร็จ
3. ตรวจสอบว่า plugins ทำงานได้ตามที่กำหนด
4. ทดสอบว่า development server ทำงานได้ที่ port ที่กำหนด
