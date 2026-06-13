---
title: SvelteKit
description: Full-stack framework สำหรับสร้าง web applications ด้วย Svelte รองรับ file-based routing, SSR/CSR/Prerendering, Vite-powered HMR และ built-in optimization
auto_execution_mode: 3
---

## Goal

สร้าง Svelte applications ด้วย SSR/CSR/Prerendering และ file-based routing ตามมาตรฐาน SvelteKit

## Scope

ใช้สำหรับการพัฒนา Svelte applications ที่ต้องการ full-stack framework ด้วย Vite-powered HMR

## โครงสร้าง Directory

```
svelte-kit/
├── SKILL.md
├── guide/
│   ├── architecture.md
│   ├── best-practices.md
│   ├── configuration.md
│   ├── features.md
│   ├── how-it-works.md
│   ├── installation.md
│   ├── integration.md
│   ├── quick-start.md
│   └── ...
├── key-concepts/
│   └── key-concept.md
├── principles/
│   ├── progressive-enhancement.md
│   ├── zero-js-by-default.md
│   ├── file-based-magic.md
│   └── server-first.md
├── references/
│   ├── api.md
│   ├── cli.md
│   ├── sitemap.md
│   └── website.md
└── workflows/
    └── create-sveltekit-app.md
```

## หมวดหมู่ไฟล์

| หมวดหมู่ | ไฟล์ | คำอธิบาย |
|-----------|------|-----------|
| Root Files | SKILL.md | Index file สำหรับ SvelteKit skill |
| guide/ | architecture.md | Architecture ของ SvelteKit |
| guide/ | best-practices.md | Best practices สำหรับ development |
| guide/ | configuration.md | Configuration และ setup |
| guide/ | features.md | Features ที่สำคัญ |
| guide/ | how-it-works.md | วิธีการทำงาน |
| guide/ | installation.md | วิธีการติดตั้ง |
| guide/ | integration.md | การเชื่อมต่อกับ tools อื่น |
| guide/ | quick-start.md | เริ่มต้นอย่างรวดเร็ว |
| key-concepts/ | key-concept.md | แนวคิดสำคัญของ SvelteKit |
| principles/ | progressive-enhancement.md | หลักการ Progressive Enhancement |
| principles/ | zero-js-by-default.md | หลักการ Zero JS by Default |
| principles/ | file-based-magic.md | หลักการ File-based Magic |
| principles/ | server-first.md | หลักการ Server-First |
| references/ | api.md | API documentation |
| references/ | cli.md | CLI documentation |
| references/ | sitemap.md | Sitemap ของ documentation |
| references/ | website.md | เว็บไซต์และ resources |
| workflows/ | create-sveltekit-app.md | Workflow สำหรับสร้าง SvelteKit app |

## Execute

### 1. Create Project

สร้าง project ใหม่ด้วย `bun create svelte@latest`

```bash
bun create svelte@latest my-app
```

### 2. Setup Configuration

ตั้งค่า `svelte.config.js` และ environment variables

### 3. Develop Pages

ใช้ file-based routing ใน `src/routes/` directory

### 4. Implement Data Fetching

ใช้ `load` functions สำหรับ data fetching

### 5. Build and Deploy

Build สำหรับ SSR, CSR หรือ prerendering

## Rules

### Development

- ใช้ TypeScript สำหรับ type safety
- ใช้ Svelte components สำหรับ UI
- Follow SvelteKit conventions
- ใช้ `bun add` หรือ `bun add -D` สำหรับ dependencies

### Best Practices

- ใช้ proper caching strategies
- Optimize bundle size
- Implement proper error handling
- Follow progressive enhancement principles

### File Organization

- ใช้ file-based routing conventions
- แยก server และ client logic
- ใช้ layouts สำหรับ shared UI
- ใช้ error pages สำหรับ error handling

## Expected Outcome

- Svelte applications ด้วย SSR/CSR/Prerendering
- File-based routing และ Vite-powered HMR
- Full-stack framework capabilities
- Code ที่ maintainable และ scalable
