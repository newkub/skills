---
title: Leptos
description: Rust framework for building reactive web applications with SSR and CSR support. Includes component system, signals, reactive system, routing, and server-side rendering capabilities.
auto_execution_mode: 3
---

## Goal

สร้าง reactive web applications ด้วย Rust พร้อม SSR และ CSR support

## Scope

ใช้สำหรับการพัฒนา web applications ด้วย Rust ที่มี performance สูงและ memory footprint ต่ำ

## Directory Structure

```
framework-leptos/
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
    └── create-leptos-app.md
```

## File Categories

| หมวดหมู่ | ไฟล์ | คำอธิบาย |
|-----------|------|-----------|
| Root Files | SKILL.md | Index file สำหรับ Leptos skill |
| guide/ | architecture.md | Architecture ของ Leptos |
| guide/ | best-practices.md | Best practices สำหรับ development |
| guide/ | configuration.md | Configuration และ setup |
| references/ | cli.md | CLI documentation |
| references/ | configuration.md | Configuration reference |
| references/ | sitemap.md | Sitemap ของ documentation |
| references/ | website.md | เว็บไซต์และ resources |
| workflows/ | create-leptos-app.md | Workflow สำหรับสร้าง Leptos app |

## When to use

- เมื่อต้องการสร้าง reactive web applications ด้วย Rust
- เมื่อต้องการ SSR (Server-Side Rendering) และ CSR (Client-Side Rendering)
- เมื่อต้องการ performance สูงและ memory footprint ต่ำ
- เมื่อต้องการใช้ Rust ecosystem สำหรับ web development

## Skills Related

- `/write-skills` - มาตรฐานการเขียน skills
- lang-rust
- runtime-bun

## Execute

### 1. Create Project

```bash
cargo install cargo-leptos
cargo leptos new my-app
```

### 2. Develop Components

ใช้ Leptos component system และ signals

### 3. Configure Routing

ตั้งค่า routing สำหรับ navigation

### 4. Build and Run

Build สำหรับ SSR หรือ CSR

## Rules

### Development
- ใช้ Rust สำหรับ type safety
- ใช้ signals สำหรับ reactive state
- Follow Leptos component patterns

### Best Practices
- ใช้ proper resource management
- Optimize reactivity
- Test SSR และ CSR modes

## Expected Outcome

- Reactive web applications ด้วย Rust
- Performance สูงและ memory footprint ต่ำ
- SSR และ CSR support

## References

- [Leptos Docs](https://leptos.dev)
- [Leptos GitHub](https://github.com/leptos-rs/leptos)
- [Leptos Book](https://book.leptos.dev)
