---
name: nuxt2
description: รวมแนวทางการพัฒนาโปรเจกต์ Nuxt.js ตาม Best Practices
goal: พัฒนาโปรเจกต์ Nuxt.js ตาม best practices
outcome: โปรเจกต์ Nuxt.js มีโครงสร้างและคุณภาพตามมาตรฐาน
---

# Nuxt.js Development

## When to Apply

ใช้ Skill นี้เมื่อพัฒนาโปรเจกต์ Nuxt.js

- เมื่อสร้างโปรเจกต์ Nuxt.js ใหม่
- เมื่ออัปเดต dependencies
- เมื่อสร้าง pages หรือ components
- เมื่อตั้งค่า config

## Rules

| Priority | Impact | Reference | Name | Description | Prefix | Condition |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | `CRITICAL` | `follow-nuxt-package-json` | Package & Scripts | ตั้งค่า package.json และ scripts ตามมาตรฐาน | `nuxt-` | เมื่อสร้างโปรเจกต์ใหม่หรืออัปเดต dependencies |
| 2 | `HIGH` | `follow-nuxt-config-ts` | Nuxt Config | ตั้งค่า nuxt.config.ts ตาม best practices | `nuxt-` | เมื่อสร้างหรือแก้ไข nuxt.config.ts |
| 2 | `HIGH` | `follow-nuxt-tsconfig-json` | TS Config | ตั้งค่า tsconfig.json สำหรับ Nuxt | `nuxt-` | เมื่อสร้างหรือแก้ไข tsconfig.json |
| 1 | `CRITICAL` | `follow-nuxt-project-structure` | Overall Structure | โครงสร้างโปรเจกต์ Nuxt ที่เหมาะสม | `nuxt-` | เมื่อสร้างโปรเจกต์ใหม่ |
| 1 | `CRITICAL` | `follow-nuxt-app-vue` | App Entry | ตั้งค่า app.vue ตาม best practices | `nuxt-` | เมื่อสร้างหรือแก้ไข app.vue |
| 2 | `HIGH` | `follow-nuxt-pages` | Pages & Routing | สร้างและจัดการ pages และ routing | `nuxt-` | เมื่อสร้าง page ใหม่ |
| 2 | `HIGH` | `follow-nuxt-components` | Components | สร้างและจัดโครงสร้าง Vue Components | `nuxt-` | เมื่อสร้าง component ใหม่ |
| 2 | `HIGH` | `follow-nuxt-layouts` | Layouts | สร้างและจัดการ layouts | `nuxt-` | เมื่อสร้าง layout ใหม่ |
| 2 | `HIGH` | `follow-nuxt-composables` | Composables | สร้างและจัดการ composables | `nuxt-` | เมื่อสร้าง composable ใหม่ |
| 2 | `HIGH` | `follow-nuxt-stores` | State Management | ใช้ Pinia สำหรับ state management | `nuxt-` | เมื่อสร้าง store ใหม่ |
| 2 | `HIGH` | `follow-nuxt-server-api` | API Routes | สร้างและจัดการ API routes | `nuxt-` | เมื่อสร้าง API route ใหม่ |
| 2 | `HIGH` | `follow-nuxt-server-composables` | Server Composables | สร้าง server composables | `nuxt-` | เมื่อสร้าง server composable ใหม่ |
| 2 | `HIGH` | `follow-nuxt-server-middleware` | Server Middleware | สร้างและจัดการ server middleware | `nuxt-` | เมื่อสร้าง middleware ใหม่ |
| 3 | `MEDIUM` | `follow-nuxt-module` | Module Development | พัฒนา Nuxt modules | `nuxt-` | เมื่อต้องการสร้าง module ใหม่ |
| 3 | `MEDIUM` | `follow-nuxt-optimization` | Optimization | ปรับปรุงประสิทธิภาพ Nuxt | `nuxt-` | เมื่อต้องการ optimize โปรเจกต์ |

## Knowledge

| Reference | Name | Description | Prefix |
| :--- | :--- | :--- | :--- |

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

ตัวอย่าง:
- [`./rules/follow-nuxt-components.md`](./rules/follow-nuxt-components.md) - สร้าง Vue Components
- [`./rules/follow-nuxt-pages.md`](./rules/follow-nuxt-pages.md) - สร้าง Pages
- [`./rules/follow-nuxt-app-vue.md`](./rules/follow-nuxt-app-vue.md) - ตั้งค่า app.vue

## References

- [Nuxt.js Documentation](https://nuxtjs.org/docs)
