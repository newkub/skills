---
title: Follow Vite Patterns
description: ทำตาม patterns ใน Vite skill เพื่อ implement best practices ตามสถานการณ์
description-short: ใช้ patterns จาก @vite
auto_execution_mode: 3
file-patterns:
  - "**/vite.config.*"
  - "**/vite.*.config.*"
follow:
  skills:
    - "@vite"
    - "@typescript"
  workflows:
    - "/validate"
    - "/write-markdown"
  files:
    - "vite/patterns/*.md"
---

## Purpose

เลือกและ implement Vite patterns ที่เหมาะสมกับสถานการณ์ โดยอ้างอิงจาก patterns ที่มีอยู่ใน `@vite`

## Scope

- วิเคราะห์สถานการณ์และเลือก pattern ที่เหมาะสม
- Implement config patterns ตาม best practices
- ตั้งค่า SSR, plugins, performance ตาม patterns

## Inputs

| Input | Details |
|-------|---------|
| สถานการณ์ | ต้องการแก้ปัญหาอะไร (config, SSR, plugins, performance) |
| Project Type | SPA / MPA / Library / SSR |
| Framework | Vue, React, Svelte, Solid |

## Rules

### Pattern Selection

| สถานการณ์ | Pattern File | Section |
|-----------|--------------|---------|
| ตั้งค่า config พื้นฐาน | `patterns/01-config.md` | defineConfig, env variables |
| ตั้งค่า plugins | `patterns/02-plugins.md` | plugin order, configuration |
| Optimize performance | `patterns/03-performance.md` | code splitting, lazy loading |
| SSR middleware mode | `patterns/ssr-middleware-mode.md` | server integration |
| SSR production build | `patterns/ssr-production-build.md` | build configuration |
| Testing setup | `patterns/05-testing.md` | vitest, test patterns |

### Implementation Priority

1. อ่าน pattern file ที่เกี่ยวข้อง
2. วิเคราะห์ว่า pattern นั้น apply กับโปรเจกต์ได้ไหม
3. Implement ตามตัวอย่างใน pattern
4. ตรวจสอบว่าทำงานได้จริง

## Structure

### Available Patterns

```text
vite/patterns/
├── 01-config.md                    # Configuration patterns
├── 02-plugins.md                   # Plugin patterns
├── 03-performance.md               # Performance optimization
├── ssr-middleware-mode.md          # SSR middleware mode
├── ssr-configuration.md            # SSR configuration
├── ssr-server-entry.md             # SSR server entry
├── ssr-client-entry.md             # SSR client entry
├── ssr-html-template.md            # SSR HTML template
├── ssr-preload-directives.md       # SSR preload directives
├── ssr-external-dependencies.md    # SSR external dependencies
├── ssr-express-integration.md      # SSR Express integration
├── ssr-css-handling.md             # SSR CSS handling
├── ssr-data-prefetching.md         # SSR data prefetching
├── ssr-production-build.md         # SSR production build
└── 05-testing.md                   # Testing patterns
```

## Steps

### Phase 0: Precondition

- 0.1 ตรวจสอบว่ามี `@vite` skill อยู่ใน workspace
- 0.2 ตรวจสอบว่าโปรเจกต์ใช้ Vite (มี `vite.config.*`)

### Phase 1: Setup

- 1.1 อ่าน `vite/SKILL.md` เพื่อเข้าใจ overview
- 1.2 ระบุสถานการณ์และปัญหาที่ต้องการแก้

### Phase 2: Research

- 2.1 อ่าน pattern file ที่เหมาะสมกับสถานการณ์
- 2.2 จดบันทึก code examples และ best practices

### Phase 3: Analyze

- 3.1 วิเคราะห์ว่า pattern apply กับโปรเจกต์ได้ไหม
- 3.2 ปรับแต่ง pattern ให้เหมาะกับ context

### Phase 4: Plan

- 4.1 วางแผนการ implement pattern
- 4.2 ระบุไฟล์ที่ต้องแก้ไข

### Phase 5: Execute

- 5.1 Implement pattern ตามตัวอย่าง
- 5.2 ปรับแต่งให้เหมาะกับโปรเจกต์

### Phase 6: Verify

- 6.1 รัน dev server ตรวจสอบว่าทำงานได้
- 6.2 รัน build ตรวจสอบว่าไม่มี errors

### Phase 7: Review

- 7.1 ตรวจสอบว่า follow pattern อย่างถูกต้อง
- 7.2 ตรวจสอบ code quality

### Phase 8: Finalize

- 8.1 สรุป pattern ที่ implement
- 8.2 อัพเดท documentation ถ้าจำเป็น

## Outputs

| Output | Description |
|--------|-------------|
| Config | `vite.config.ts` ที่ implement pattern |
| Documentation | บันทึกว่าใช้ pattern ไหน และทำไม |

## Expected Outcome

- Pattern implement ถูกต้องตาม best practices
- Dev server และ build ทำงานได้ไม่มี errors
- Code มีคุณภาพตามมาตรฐาน

## Reference

### Patterns

- `@vite/patterns/01-config.md` - Config patterns
- `@vite/patterns/02-plugins.md` - Plugin patterns
- `@vite/patterns/03-performance.md` - Performance patterns
- `@vite/patterns/ssr-*.md` - SSR patterns

### Related

- `/validate` - ตรวจสอบความถูกต้อง
- `@vite` - Vite skill หลัก
