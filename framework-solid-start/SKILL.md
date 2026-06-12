---
title: Solid Start
description: SolidJS meta-framework for building web applications with CSR, SSR, and SSG. Includes file-based routing, server functions, data fetching, and TypeScript support.
auto_execution_mode: 3
---

## Goal

สร้าง SolidJS applications ด้วย CSR, SSR, SSG และ file-based routing

## Scope

ใช้สำหรับการพัฒนา SolidJS applications ที่ต้องการ TypeScript support, server functions และ multi-platform deployment

## Directory Structure

```
framework-solid-start/
├── SKILL.md
├── guide/
│   ├── architecture.md
│   ├── best-practices.md
│   ├── configuration.md
│   └── ...
├── key-concepts/
├── principles/
├── references/
│   ├── cli.md
│   ├── configuration.md
│   ├── sitemap.md
│   └── website.md
└── workflows/
    └── create-solidstart-app.md
```

## File Categories

| หมวดหมู่ | ไฟล์ | คำอธิบาย |
|-----------|------|-----------|
| Root Files | SKILL.md | Index file สำหรับ Solid Start skill |
| guide/ | architecture.md | Architecture ของ Solid Start |
| guide/ | best-practices.md | Best practices สำหรับ development |
| guide/ | configuration.md | Configuration และ setup |
| references/ | cli.md | CLI documentation |
| references/ | configuration.md | Configuration reference |
| references/ | sitemap.md | Sitemap ของ documentation |
| references/ | website.md | เว็บไซต์และ resources |
| workflows/ | create-solidstart-app.md | Workflow สำหรับสร้าง Solid Start app |

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
bun create solid@latest
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
