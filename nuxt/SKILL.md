---
title: Nuxt
description: Full-stack Vue framework ด้วย SSR, auto-imports, file-based routing และ Nitro server
auto_execution_mode: 3
---

## Goal

สร้าง Vue.js applications ด้วย SSR/SSG/ISR และ full-stack capabilities ด้วย Nuxt v4

## Scope

ใช้สำหรับการพัฒนา Vue.js applications ที่ต้องการ SEO-friendly, auto-imports, file-based routing, TypeScript support และ server-side capabilities ด้วย Nitro engine

## โครงสร้าง Directory

```
nuxt/
├── SKILL.md
├── guide/                # คู่มือการใช้งาน
├── key-concepts/         # แนวคิดหลัก
├── principles/           # แนวทางปฏิบัติที่ดี
├── references/           # เอกสารอ้างอิง
├── workflows/            # workflows การทำงาน
├── templates/            # templates สำหรับ scaffolding
└── scripts/              # automation scripts
```

## หมวดหมู่ไฟล์

| หมวดหมู่ | ไฟล์ | คำอธิบาย |
|---------|------|---------|
| **guide/** | best-practices.md | Best practices สำหรับการพัฒนา |
| | configuration.md | การตั้งค่า `nuxt.config.ts` |
| | features.md | ฟีเจอร์หลักของ Nuxt v4 |
| | how-it-works.md | ภาพรวม architecture และ request lifecycle |
| | installation.md | วิธีติดตั้งและ setup โปรเจกต์ |
| | integration.md | การเชื่อมต่อกับ libraries และ tools อื่นๆ |
| | quick-start.md | เริ่มต้นใช้งานอย่างรวดเร็ว |
| **key-concepts/** | overview.md | ภาพรวมแนวคิดหลักของ Nuxt |
| | auto-imports.md | Auto-imports system สำหรับ components และ composables |
| | nitro-server.md | Nitro server engine สำหรับ full-stack capabilities |
| | nuxt-app-instance.md | Nuxt App instance และ lifecycle |
| | rendering-modes.md | Rendering modes (SSR, SSG, ISR, SPA) |
| | app-directory.md | app/ directory structure ใน Nuxt v4 |
| | create-use-fetch.md | createUseFetch และ createUseAsyncData factory functions (4.4+) |
| | use-announcer.md | useAnnouncer composable สำหรับ accessibility (4.4+) |
| | typed-layout-props.md | Typed layout props ใน definePageMeta (4.4+) |
| **principles/** | component-design.md | Component design principles |
| | data-fetching.md | Data fetching best practices |
| | performance.md | Performance optimization |
| **references/** | api.md | API documentation |
| | cli.md | CLI commands |
| | configuration.md | Configuration options |
| | modules.md | Module system |
| | website.md | Official documentation |
| | hooks.md | Nuxt hooks system สำหรับ build และ runtime |
| | migration.md | Migration guide จาก Nuxt 2 ไป Nuxt 3 |
| | nuxt-5-preparation.md | Nuxt 5 preparation และ breaking changes |
| **workflows/** | setup-project.md | ตั้งค่าโปรเจกต์ |
| | create-page.md | สร้างหน้าเว็บด้วย file-based routing |
| | create-component.md | สร้างคอมโพเนนต์ |
| | create-module.md | สร้าง Nuxt module |
| | deploy-nuxt.md | Deploy application |
| | upgrade-to-v4.md | Upgrade จาก Nuxt 3 เป็น Nuxt 4 |

## Execute

### 1. เริ่มต้นใช้งาน

ทำตาม `workflows/setup-project.md` เพื่อตั้งค่าโปรเจกต์ Nuxt v4 ด้วย `npx nuxi@latest init`

### 2. ศึกษาคู่มือ

อ่าน `guide/`:
- `quick-start.md` - เริ่มต้นใช้งานอย่างรวดเร็ว
- `installation.md` - วิธีติดตั้งและ setup โปรเจกต์
- `how-it-works.md` - ภาพรวม architecture และ request lifecycle
- `integration.md` - การเชื่อมต่อกับ libraries และ tools อื่นๆ
- `best-practices.md` - best practices สำหรับการพัฒนา
- `configuration.md` - การตั้งค่า `nuxt.config.ts`
- `features.md` - ฟีเจอร์หลักของ Nuxt v4

### 3. ทำตาม Workflows

ทำตาม workflows ใน `workflows/`:
- `setup-project.md` - ตั้งค่าโปรเจกต์
- `create-page.md` - สร้างหน้าเว็บด้วย file-based routing
- `create-component.md` - สร้างคอมโพเนนต์
- `create-module.md` - สร้าง Nuxt module
- `deploy-nuxt.md` - deploy application

### 4. ศึกษาแนวคิดหลัก

อ่าน `key-concepts/`:
- `overview.md` - ภาพรวมแนวคิดหลักของ Nuxt
- `auto-imports.md` - auto-imports system สำหรับ components และ composables
- `nitro-server.md` - Nitro server engine สำหรับ full-stack capabilities
- `nuxt-app-instance.md` - Nuxt App instance และ lifecycle
- `rendering-modes.md` - rendering modes (SSR, SSG, ISR, SPA)
- `app-directory.md` - app/ directory structure ใน Nuxt v4
- `create-use-fetch.md` - createUseFetch และ createUseAsyncData factory functions (4.4+)
- `use-announcer.md` - useAnnouncer composable สำหรับ accessibility (4.4+)
- `typed-layout-props.md` - Typed layout props ใน definePageMeta (4.4+)

### 5. ปฏิบัติตามหลักการ

อ่าน `principles/`:
- `component-design.md` - component design principles
- `data-fetching.md` - data fetching best practices
- `performance.md` - performance optimization

### 6. ดูเอกสารอ้างอิง

อ่าน `references/`:
- `api.md` - API documentation
- `cli.md` - CLI commands
- `configuration.md` - configuration options
- `modules.md` - module system
- `website.md` - official documentation
- `hooks.md` - Nuxt hooks system สำหรับ build และ runtime
- `migration.md` - migration guide จาก Nuxt 2 ไป Nuxt 3
- `nuxt-5-preparation.md` - Nuxt 5 preparation และ breaking changes

## Rules

- ใช้ Nuxt v4 (stable) หรือ Nuxt 3 (maintenance until July 2026)
- ใช้ `app/` directory structure สำหรับ application code (Nuxt v4 default)
- ใช้ TypeScript สำหรับ type safety ด้วย zero-config support และ separate TS projects
- ใช้ Composition API สำหรับ components
- ใช้ auto-imports สำหรับ composables, components และ Vue APIs จาก `app/` directory
- ใช้ file-based routing จาก `app/pages/` directory
- เลือก rendering mode ที่เหมาะสม (SSR, SSG, ISR, SPA) ด้วย `routeRules`
- ใช้ `server/` directory สำหรับ API routes และ middleware
- ใช้ Nitro composables สำหรับ server-side code
- ตั้งค่า `compatibilityDate` ใน `nuxt.config.ts`
- ใช้ Nuxt modules สำหรับ extend functionality ด้วย `@nuxt/kit`
- ใช้ `<NuxtLink>` สำหรับ internal navigation และ smart prefetching
- ใช้ `useFetch` และ `useAsyncData` สำหรับ data fetching ที่ SSR-compatible พร้อม automatic data sharing
- ใช้ `createUseFetch` และ `createUseAsyncData` (Nuxt 4.4+) สำหรับ custom data fetching instances ด้วย default options
- ใช้ lazy loading สำหรับ components (`<LazyMyComponent>`)
- ใช้ `features` config สำหรับ enable/disable optional features (devLogs, inlineStyles, noScripts)
- ใช้ `future.compatibilityVersion: 5` สำหรับ early opt-in ไปยัง Nuxt 5 features (Vite Environment API, normalized page names)
- ใช้ `useAnnouncer` composable (Nuxt 4.4+) สำหรับ accessibility และ dynamic content announcements พร้อม `<NuxtAnnouncer>` component
- ใช้ typed layout props ใน `definePageMeta` (Nuxt 4.4+) สำหรับ parameterized layouts ด้วย full type safety
- ใช้ Vue Router v5 (Nuxt 4.4+) สำหรับ 28x faster dev routing
- ใช้ `refresh` option ใน `useCookie` (Nuxt 4.4+) สำหรับ cookie refresh control
- ใช้ `useState` reset to default (Nuxt 4.4+) สำหรับ state management
- เตรียมสำหรับ Nuxt 5: Vite 8 (Rolldown), Nitro v3 (Web standard APIs), package renames
- ทำตาม `/follow-nuxt` สำหรับ best practices

## Expected Outcome

- Vue.js applications ด้วย SSR/SSG/ISR/SPA rendering modes
- SEO-friendly web applications ด้วย server-side rendering
- Modern Vue 3 features และ zero-config TypeScript support
- Auto-imports และ file-based routing จาก `app/` directory
- Full-stack applications ด้วย Nitro server engine
- Type-safe code ด้วย auto-generated types
- Cross-platform deployment (Node.js, serverless, edge, static)
- Nuxt 4.4+ features (createUseFetch, useAnnouncer, typed layout props, Vue Router v5)
- Nuxt 5 preparation ด้วย future.compatibilityVersion
