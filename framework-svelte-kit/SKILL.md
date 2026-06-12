---
title: SvelteKit
description: Full-stack framework for building web applications with Svelte. Includes file-based routing, SSR/CSR/Prerendering, Vite-powered HMR, and built-in optimization.
auto_execution_mode: 3
---

## Goal

สร้าง Svelte applications ด้วย SSR/CSR/Prerendering และ file-based routing

## Scope

ใช้สำหรับการพัฒนา Svelte applications ที่ต้องการ full-stack framework ด้วย Vite-powered HMR

## Directory Structure

```
framework-svelte-kit/
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
    └── create-sveltekit-app.md
```

## File Categories

| หมวดหมู่ | ไฟล์ | คำอธิบาย |
|-----------|------|-----------|
| Root Files | SKILL.md | Index file สำหรับ SvelteKit skill |
| guide/ | architecture.md | Architecture ของ SvelteKit |
| guide/ | best-practices.md | Best practices สำหรับ development |
| guide/ | configuration.md | Configuration และ setup |
| references/ | cli.md | CLI documentation |
| references/ | configuration.md | Configuration reference |
| references/ | sitemap.md | Sitemap ของ documentation |
| references/ | website.md | เว็บไซต์และ resources |
| workflows/ | create-sveltekit-app.md | Workflow สำหรับสร้าง SvelteKit app |

## When to use

- เมื่อต้องการ full-stack framework สำหรับ Svelte
- เมื่อต้องการ SSR/CSR/Prerendering
- เมื่อต้องการ file-based routing
- เมื่อต้องการ Vite-powered HMR

## Skills Related

- `/write-skills` - มาตรฐานการเขียน skills
- lib-svelte
- lib-vite
- lang-typescript

## Execute

### 1. Create Project

```bash
bun create svelte@latest my-app
```

### 2. Develop Pages

ใช้ file-based routing ใน `src/routes/` directory

### 3. Implement Data Fetching

ใช้ `load` functions สำหรับ data fetching

### 4. Build and Deploy

Build สำหรับ SSR, CSR หรือ prerendering

## Rules

### Development
- ใช้ TypeScript สำหรับ type safety
- ใช้ Svelte components สำหรับ UI
- Follow SvelteKit conventions

### Best Practices
- ใช้ proper caching strategies
- Optimize bundle size
- Implement proper error handling

## Expected Outcome

- Svelte applications ด้วย SSR/CSR/Prerendering
- File-based routing และ Vite-powered HMR
- Full-stack framework capabilities

## References

- [SvelteKit Docs](https://kit.svelte.dev)
- [Svelte Docs](https://svelte.dev)
- [SvelteKit GitHub](https://github.com/sveltejs/kit)
