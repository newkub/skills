---
name: react
description: แนวทางการพัฒนา React applications ตาม Best Practices
goal: พัฒนา React applications ตาม best practices
outcome: React applications มีโครงสร้างที่ดี ประสิทธิภาพสูง และ maintainable
---

# React

## When to Use

ใช้ Skill นี้เมื่อต้องการพัฒนา React applications ที่มีคุณภาพสูง

- เมื่อสร้าง React application ใหม่และต้องการโครงสร้างที่ถูกต้อง
- เมื่อต้องการจัดการ components อย่างมีประสิทธิภาพ
- เมื่อต้องการ optimize performance ของ React application
- เมื่อต้องการจัดการ state และ data flow อย่างเหมาะสม
- เมื่อต้องการตั้งค่า testing และ development environment

## Quick Start

1. สร้าง React project ใหม่ด้วย `npx create-react-app my-app --template typescript`
2. ตั้งค่าโครงสร้างโปรเจกต์ตาม [1-react-project-structure.md](./rules/1-react-project-structure.md)
3. จัดการ components ตาม [2-react-components.md](./rules/2-react-components.md)
4. ตั้งค่า state management ตาม [3-react-state-management.md](./rules/3-react-state-management.md)
5. รัน `npm start` เพื่อเริ่มการพัฒนา

## Rules

| Priority | Impact | Reference | Name | Description | Prefix | Condition |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | `CRITICAL` | [1-react-project-structure.md](./rules/1-react-project-structure.md) | Project Structure | โครงสร้าง React project ที่ถูกต้อง | `react-` | เมื่อสร้าง project |
| 2 | `HIGH` | [2-react-components.md](./rules/2-react-components.md) | Components | การจัดการ React components อย่างมีประสิทธิภาพ | `react-` | เมื่อสร้าง components |
| 3 | `HIGH` | [3-react-state-management.md](./rules/3-react-state-management.md) | State Management | การจัดการ state และ data flow | `react-` | เมื่อจัดการ state |
| 4 | `HIGH` | [4-react-performance.md](./rules/4-react-performance.md) | Performance | การ optimize performance ของ React application | `react-` | เมื่อ optimize |
| 5 | `HIGH` | [5-react-testing.md](./rules/5-react-testing.md) | Testing | การตั้งค่าและเขียน tests สำหรับ React | `react-` | เมื่อทดสอบ |

## Knowledge

| Reference | Name | Description | Prefix |
| :--- | :--- | :--- | :--- |
| [react-core-concepts.md](./knowledge/react-core-concepts.md) | Core Concepts | ความรู้เกี่ยวกับ concepts หลักของ React | `react-` |
| [react-hooks.md](./knowledge/react-hooks.md) | React Hooks | ความรู้เกี่ยวกับ React Hooks | `react-` |
| [react-best-practices.md](./knowledge/react-best-practices.md) | Best Practices | Best practices สำหรับ React development | `react-` |

## Overview

### Rules

แต่ละไฟล์ Rule ประกอบด้วย:
- เหตุผล (Why)
- ตัวอย่างที่ไม่ดี (Anti-patterns)
- ตัวอย่างที่ดี (Best practices)
- กฎที่ต้องปฏิบัติตาม (Rules)
- ผลกระทบถ้าไม่ทำตาม (Impact)
- เอกสารอ้างอิง (References)

### Knowledge

แต่ละไฟล์ Knowledge ประกอบด้วย:
- Overview: ภาพรวมของ topic
- Key Concepts: concepts สำคัญที่ต้องรู้
- Examples: ตัวอย่างการใช้งาน
- Best Practices: best practices ที่ควรทำตาม
- References: ลิงก์ไปยังแหล่งข้อมูลต้นฉบับ

## How to Use

แต่ละไฟล์ Rule อธิบายถึง:
- เหตุผลที่ต้องทำตามกฎ
- ตัวอย่างที่ไม่ดีและดี
- กฎที่ต้องปฏิบัติตาม
- ผลกระทบถ้าไม่ทำตาม
- เอกสารอ้างอิง

แต่ละไฟล์ Knowledge อธิบายถึง:
- ภาพรวมของ topic
- Concepts สำคัญที่ต้องรู้
- ตัวอย่างการใช้งาน
- Best practices ที่ควรทำตาม
- เอกสารอ้างอิง

## References

- [React Documentation](https://react.dev/)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
