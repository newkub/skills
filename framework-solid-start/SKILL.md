---
title: Solid Start
description: SolidJS meta-framework for building web applications with CSR, SSR, and SSG. Includes file-based routing, server functions, data fetching, and TypeScript support.
auto_execution_mode: 3
---

## Goal

สร้าง SolidJS applications ด้วย CSR, SSR, SSG และ file-based routing

## Scope

ใช้สำหรับการพัฒนา SolidJS applications ที่ต้องการ TypeScript support, server functions และ multi-platform deployment

## โครงสร้าง Directory

```
framework-solid-start/
├── SKILL.md
├── guide/
├── key-concepts/
├── principles/
├── references/
├── rules/
└── workflows/
```

## หมวดหมู่ไฟล์

| หมวดหมู่ | ไฟล์ | คำอธิบาย |
|-----------|------|-----------|
| Root Files | SKILL.md | Index file สำหรับ Solid Start skill |
| guide/ | installation.md | วิธีติดตั้ง SolidStart และ dependencies ที่จำเป็น |
| guide/ | quick-start.md | เริ่มต้นใช้งาน SolidStart อย่างรวดเร็ว |
| guide/ | key-concept.md | concept หลักของ SolidStart |
| guide/ | how-it-works.md | วิธีการทำงานของ SolidStart |
| guide/ | features.md | features และ capabilities ของ SolidStart |
| guide/ | configuration.md | การตั้งค่าและ configuration ต่างๆ |
| guide/ | best-practices.md | best practices สำหรับการพัฒนาด้วย SolidStart |
| guide/ | integration.md | การเชื่อมต่อกับ libraries และ services อื่นๆ |
| guide/ | architecture.md | architecture และโครงสร้างของ SolidStart |
| guide/ | structure.md | โครงสร้าง project และ file organization |
| guide/ | performance.md | การปรับปรุง performance และ optimization |
| guide/ | security.md | security best practices และ protection |
| guide/ | migration.md | การ migrate จาก frameworks อื่นๆ |
| guide/ | ecosystem.md | libraries และ tools ใน SolidStart ecosystem |
| guide/ | testing.md | การทดสอบ unit, integration, และ E2E |
| guide/ | patterns.md | design patterns สำหรับ SolidStart |
| guide/ | troubleshooting.md | การแก้ปัญหาที่พบบ่อย |
| key-concepts/ | file-based-routing.md | แนวคิด file-based routing และ route types |
| key-concepts/ | rendering-modes.md | rendering modes (CSR, SSR, SSG) และการเลือกใช้ |
| key-concepts/ | server-functions.md | server functions และ API routes |
| principles/ | single-responsibility.md | หลักการ single responsibility สำหรับ components |
| principles/ | composition-over-inheritance.md | ใช้ composition แทน inheritance |
| principles/ | explicit-over-implicit.md | ทำให้ dependencies และ behavior ชัดเจน |
| references/ | website.md | เว็บไซต์และ resources หลักของ SolidStart |
| references/ | sitemap.md | sitemap ของ documentation |
| references/ | api.md | API reference สำหรับ SolidStart |
| references/ | cli.md | CLI commands และ options |
| references/ | configuration.md | Configuration reference สำหรับ app.config.ts |
| rules/ | structure-framework.md | โครงสร้างและ organization ของ framework |
| workflows/ | create-solidstart-app.md | สร้าง SolidStart application ใหม่ |

## When to use

- เมื่อต้องการ meta-framework สำหรับ SolidJS
- เมื่อต้องการ CSR, SSR, SSG
- เมื่อต้องการ file-based routing
- เมื่อต้องการ TypeScript support
- เมื่อต้องการ server functions และ API routes
- เมื่อต้องการ deployment ไปหลาย platforms (Vercel, Netlify, Cloudflare)

## Skills Related

- `/write-skills` - มาตรฐานการเขียน skills
- lib-solidjs
- lib-vite
- lib-nitro

## Execute

### 1. Create Project

```bash
bun create solid-start
```

### 2. Develop Pages

ใช้ file-based routing ใน `src/routes/` directory

### 3. Implement Server Functions

ใช้ server functions สำหรับ API routes

### 4. Build and Deploy

Build สำหรับ CSR, SSR หรือ SSG และ deploy ไปยัง target platform

## Rules

### Development
- ใช้ TypeScript สำหรับ type safety
- ใช้ SolidJS components สำหรับ UI
- Follow SolidStart conventions

### Best Practices
- ใช้ proper caching strategies
- Optimize bundle size
- Implement proper error handling

## Expected Outcome

- SolidJS applications ด้วย CSR/SSR/SSG
- File-based routing และ TypeScript support
- Multi-platform deployment

## References

- [SolidStart Docs](https://start.solidjs.com)
- [SolidJS Docs](https://solidjs.com)
- [SolidStart GitHub](https://github.com/solidjs/solid-start)
