---
name: lang-zig
description: แนวทางการพัฒนา Zig ตาม best practices สำหรับ systems programming ที่เน้นความเรียบง่าย, performance และ memory safety โดยไม่มี hidden control flow หรือ hidden allocations
---

# lang-zig

## When to use

- Systems programming (OS, drivers, embedded systems)
- Game development และ game engines
- CLI tools และ command-line applications
- WebAssembly development
- C/C++ interoperability
- โปรเจกต์ที่ต้องการ control สูงและ zero hidden costs
- Cross-compilation ที่ไม่ต้องการ dependencies มากมาย

## Skills Related

## โครงสร้าง Directory

โครงสร้างโฟลเดอร์สำหรับ Programming Language Skills

```
lang-zig/
├── SKILL.md                      # ไฟล์ index หลัก
├── guide/                        # เนื้อหาแนะนำและ best practices
├── references/                   # เอกสารอ้างอิง
└── workflows/                    # Workflows สำหรับ automation
```

## หมวดหมู่ไฟล์

| Category | File |
|----------|------|
| guide | [installation.md](guide/installation.md) |
| guide | [key-concept.md](guide/key-concept.md) |
| guide | [how-it-works.md](guide/how-it-works.md) |
| guide | [features.md](guide/features.md) |
| guide | [configuration.md](guide/configuration.md) |
| guide | [quick-start.md](guide/quick-start.md) |
| guide | [best-practices.md](guide/best-practices.md) |
| guide | [integration.md](guide/integration.md) |
| guide | [architecture.md](guide/architecture.md) |
| guide | [troubleshooting.md](guide/troubleshooting.md) |
| key-concepts | [comptime.md](key-concepts/comptime.md) |
| key-concepts | [allocator.md](key-concepts/allocator.md) |
| key-concepts | [error-handling.md](key-concepts/error-handling.md) |
| references | [website.md](references/website.md) |
| references | [sitemap.md](references/sitemap.md) |
| references | [cli.md](references/cli.md) |
| references | [configuration.md](references/configuration.md) |
| workflows | [setup-zig-project.md](workflows/setup-zig-project.md) |
