---
title: Vite
description: Best practices สำหรับ Vite build tool - next generation frontend tooling
version: 1.0.0
auto_execution_mode: 3
file-patterns:
  - "**/vite.config.*"
  - "**/vite.*.config.*"
  - "**/*.html"
follow:
  skills:
    - "@typescript"
    - "@vue"
    - "@react"
    - "@javascript"
  workflows:
    - "/validate"
    - "/optimize-workflows"
    - "/learn-from-web"
  files:
    - "SKILL.md"
    - "patterns/*.md"
    - "rules/*.md"
---

## Purpose

กำหนด best practices สำหรับการพัฒนาโปรเจกต์ด้วย Vite - next generation frontend build tool ที่เร็วกว่า traditional bundlers 10-100 เท่า

## Scope

- ใช้กับโปรเจกต์ที่ใช้ Vite เป็น build tool (SPA, MPA, Library)
- รวม patterns สำหรับ configuration, plugins, performance
- รวม rules สำหรับ project structure และ conventions
- ไม่รวม frameworks เฉพาะ (Vue, React มี skill แยก)

## Inputs

| Input | Details |
|-------|---------|
| Project Type | SPA / MPA / Library |
| Framework | Vue, React, Svelte, Solid, etc. |
| Node.js | Version 20.19+ หรือ 22.12+ |

## Rules

| Category | Requirements |
|----------|--------------|
| **Config** | ใช้ `defineConfig` เพื่อ type safety |
| **Plugins** | เรียงตามลำดับ: pre-processing → framework → transform → optimization |
| **Imports** | ใช้ explicit extensions (`.vue`, `.ts`, `.js`) |
| **Performance** | หลีกเลี่ยง barrel files, ลด resolve.extensions |
| **Dev Server** | ใช้ `server.warmup` สำหรับ frequently used files |

## Structure

### Directory Structure

```text
vite/
├── SKILL.md
├── patterns/
│   ├── config-basics.md                  # Configuration patterns
│   ├── config-alias.md                   # Path aliases
│   ├── config-proxy.md                   # Dev server & proxy
│   ├── config-env.md                     # Environment variables
│   ├── plugin-basics.md                  # Plugin patterns
│   ├── plugin-dev.md                     # Custom plugin development
│   ├── build-library.md                  # Library build
│   ├── build-mpa.md                      # Multi-page app
│   ├── dev-hmr.md                        # Hot Module Replacement
│   ├── dev-warmup.md                     # Warmup & pre-bundling
│   ├── test-vitest.md                    # Testing patterns
│   ├── perf-code-splitting.md            # Code splitting
│   ├── css-preprocessors.md              # CSS & preprocessors
│   ├── assets-handling.md                # Static assets
│   ├── ssr-middleware-mode.md            # SSR middleware mode
│   ├── ssr-configuration.md              # SSR configuration
│   ├── ssr-server-entry.md               # SSR server entry
│   ├── ssr-client-entry.md               # SSR client entry
│   ├── ssr-html-template.md              # SSR HTML template
│   ├── ssr-preload-directives.md         # SSR preload directives
│   ├── ssr-external-dependencies.md      # SSR external dependencies
│   ├── ssr-express-integration.md        # SSR Express integration
│   ├── ssr-css-handling.md               # SSR CSS handling
│   ├── ssr-data-prefetching.md           # SSR data prefetching
│   └── ssr-production-build.md           # SSR production build
├── rules/
│   ├── 01-naming.md                      # Naming conventions
│   ├── 02-imports.md                     # Import rules
│   ├── 03-plugins.md                     # Plugin rules
│   ├── 04-env.md                         # Environment variables
│   └── 05-structure.md                   # Project structure
├── commands/
│   └── cli-reference.md                  # CLI commands reference
├── templates/
│   ├── spa.md                            # SPA template
│   ├── library.md                        # Library template
│   ├── ssr.md                            # SSR template
│   ├── config.md                         # Config templates
│   └── plugin.md                         # Plugin template
├── guide/
│   ├── install.md                        # Installation guide
│   ├── migrate.md                        # Migration guide
│   ├── migrate-webpack.md                # Migration from Webpack
│   └── migrate-cra.md                    # Migration from CRA
├── techniques/
│   └── optimization-build.md             # Build optimization
├── knowledge/
│   └── concept-esm.md                    # ES Modules concept
├── integrations/
│   ├── integration-docker.md             # Docker integration
│   └── integration-ci-cd.md              # CI/CD integration
├── examples/
│   └── basic-spa/                        # Basic SPA example
├── introduction/
│   ├── why.md                            # Why Vite
│   ├── features.md                       # Vite features
│   ├── getting-started.md                # Getting started
│   ├── comparison/
│   │   └── vs-webpack.md                 # vs Webpack
│   ├── design-principles/
│   │   └── native-esm.md                 # Native ESM
│   │   └── principle-esm.md              # ESM Principle
│   ├── key-concepts/
│   │   ├── esm.md                        # ES Modules
│   │   └── esm-architecture.md           # ESM Architecture
│   ├── features/
│   │   ├── feature-hmr.md                # HMR Feature
│   │   ├── feature-build.md              # Build Feature
│   │   └── feature-plugins.md            # Plugins Feature
│   └── architecture/
│       └── arch-plugin-system.md         # Plugin Architecture
├── workflows/
│   └── follow-vite-patterns.md           # Follow patterns workflow
├── troubleshooting/
│   ├── common-issues.md                  # Common issues
│   └── debugging-guide.md                # Debugging guide
└── references/
    └── links.md                          # Links and resources
```

### Phase Definitions

| Phase | Description | Main Activities |
|-------|-------------|-----------------|
| Setup | เตรียม environment | ติดตั้ง Vite, สร้าง project |
| Config | ตั้งค่า configuration | สร้าง `vite.config.ts` |
| Dev | Development | รัน dev server, HMR |
| Build | Production build | Optimize, bundle |
| Optimize | Performance tuning | Code splitting, lazy loading |

## Steps

### Phase 0: Precondition

| Step | Action | Details |
|------|--------|---------|
| 0.1 | ตรวจสอบ Node.js | ต้องเป็น 20.19+ หรือ 22.12+ |
| 0.2 | ตรวจสอบ Package Manager | ใช้ bun ตาม global rules |

### Phase 1: Setup

| Step | Action | Command |
|------|--------|---------|
| 1.1 | สร้าง Project | `bun create vite@latest my-app --template vue-ts` |
| 1.2 | ติดตั้ง Dependencies | `bun install` |

### Phase 2: Research

| Step | Action | Reference |
|------|--------|-----------|
| 2.1 | ศึกษา Vite docs | <https://vitejs.dev/> |
| 2.2 | ศึกษา Performance | <https://vitejs.dev/guide/performance> |

### Phase 3: Analyze

| Step | Action | Output |
|------|--------|--------|
| 3.1 | วิเคราะห์ Project Type | SPA/MPA/Library |
| 3.2 | วิเคราะห์ Plugin Needs | รายการ plugins ที่จำเป็น |

### Phase 4: Plan

| Step | Action | Output |
|------|--------|--------|
| 4.1 | วางแผน Configuration | รายการ config options |
| 4.2 | วางแผน Project Structure | โครงสร้าง directories |

### Phase 5: Execute

| Step | Action | File |
|------|--------|------|
| 5.1 | สร้าง Config | `vite.config.ts` |
| 5.2 | ตั้งค่า TypeScript | `tsconfig.json` |
| 5.3 | ตั้งค่า Path Aliases | ใน `vite.config.ts` |
| 5.4 | ตั้งค่า Dev Server | `server.warmup`, `proxy` |

### Phase 6: Verify

| Step | Action | Command |
|------|--------|---------|
| 6.1 | ตรวจสอบ Dev Server | `bunx vite` |
| 6.2 | ตรวจสอบ Build | `bunx vite build` |
| 6.3 | ตรวจสอบ HMR | แก้ไขไฟล์แล้วดู browser |

### Phase 7: Review

| Step | Action | Focus |
|------|--------|-------|
| 7.1 | ตรวจสอบ Code Quality | Plugin order, imports |
| 7.2 | ตรวจสอบ Performance | Bundle size, build time |

### Phase 8: Finalize

| Step | Action | Output |
|------|--------|--------|
| 8.1 | สรุปผลงาน | Config ที่สมบูรณ์ |
| 8.2 | Documentation | README, setup guide |

## Outputs

| Output | Details |
|--------|---------|
| Vite Config | `vite.config.ts` พร้อม type safety |
| Project Setup | โครงสร้าง project ตาม best practices |
| Build Scripts | Scripts สำหรับ dev และ production |

## Expected Outcome

| Criteria | Result |
|----------|--------|
| Dev server | รันได้ไม่มี errors |
| HMR | ทำงานเร็ว <50ms |
| Production build | ผ่านไม่มี errors |
| TypeScript | type checking ผ่าน |

## Reference

### Documentation

- [Vite Official Docs](https://vitejs.dev/)
- [Vite GitHub](https://github.com/vitejs/vite)

### Related Skills

- `@typescript` - TypeScript skill
- `@vue` - Vue.js skill
- `@react` - React skill
- `@javascript` - JavaScript skill

### Related Workflows

- `/validate` - ตรวจสอบความถูกต้อง
- `/optimize-workflows` - ปรับปรุงคุณภาพ
- `/learn-from-web` - ศึกษา domain
