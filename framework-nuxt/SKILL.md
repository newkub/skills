---
title: Nuxt
description: Vue.js meta-framework for building web applications with SSR, SSG, and modern features. Includes auto-imports, file-based routing, data fetching, and TypeScript support.
auto_execution_mode: 3
---

## Goal

สร้าง Vue.js applications ด้วย SSR/SSG และ modern features

## Scope

ใช้สำหรับการพัฒนา Vue.js applications ที่ต้องการ SEO-friendly, auto-imports, file-based routing และ TypeScript support

## Directory Structure

```
framework-nuxt/
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
    ├── create-component.md
    ├── create-page.md
    └── setup-project.md
```

## File Categories

| หมวดหมู่ | ไฟล์ | คำอธิบาย |
|-----------|------|-----------|
| Root Files | SKILL.md | Index file สำหรับ Nuxt skill |
| guide/ | architecture.md | Architecture ของ Nuxt |
| guide/ | best-practices.md | Best practices สำหรับ development |
| guide/ | configuration.md | Configuration และ setup |
| references/ | cli.md | CLI documentation |
| references/ | configuration.md | Configuration reference |
| references/ | sitemap.md | Sitemap ของ documentation |
| references/ | website.md | เว็บไซต์และ resources |
| workflows/ | create-component.md | Workflow สำหรับสร้าง components |
| workflows/ | create-page.md | Workflow สำหรับสร้าง pages |
| workflows/ | setup-project.md | Workflow สำหรับ setup project |

## When to use

- เมื่อต้องการสร้าง Vue.js applications ด้วย SSR/SSG
- เมื่อต้องการ SEO-friendly web applications
- เมื่อต้องการ auto-imports และ file-based routing
- เมื่อต้องการ modern Vue 3 features และ TypeScript support

## Skills Related

- `/write-skills` - มาตรฐานการเขียน skills
- lib-vue
- lang-typescript
- runtime-bun

## Execute

### 1. Create Project

```bash
bun create nuxt-app
```

### 2. Develop Pages

ใช้ file-based routing ใน `pages/` directory

### 3. Implement Data Fetching

ใช้ `useAsyncData` และ `useFetch` สำหรับ data fetching

### 4. Optimize

ใช้ server-side rendering และ client-side navigation

## Rules

### Development
- ใช้ TypeScript สำหรับ type safety
- ใช้ Composition API สำหรับ components
- Follow Nuxt conventions

### Best Practices
- ใช้ auto-imports สำหรับ composables
- Optimize bundle size
- Implement proper error handling

## Expected Outcome

- Vue.js applications ด้วย SSR/SSG
- SEO-friendly web applications
- Modern Vue 3 features และ TypeScript support

## References

- [Nuxt Docs](https://nuxt.com)
- [Nuxt GitHub](https://github.com/nuxt/nuxt)
- [Nuxt Examples](https://nuxt.com/examples)
