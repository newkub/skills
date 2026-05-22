---
name: nuxt
description: Full-stack web framework built on Vue.js with SSR, file-based routing, auto-imports, and module ecosystem
goal: พัฒนา Nuxt applications ตาม best practices
outcome: Nuxt applications มีประสิทธิภาพและ maintainability
---

# Nuxt Framework

## When to Apply

ใช้ Skill นี้เมื่อพัฒนา Nuxt applications

- เมื่อสร้าง Nuxt applications ใหม่
- เมื่อใช้ SSR/SSG/ISR
- เมื่อใช้ file-based routing
- เมื่อใช้ auto-imports
- เมื่อใช้ modules และ composables

## Summary Table

| Category | File | Purpose | Condition |
|---|---|---|---|
| **Guide** | [getting-started](guide/getting-started.md) | เริ่มต้นใช้งาน Nuxt | เมื่อเริ่มโปรเจกต์ใหม่ |
| **Guide** | [routing](guide/routing.md) | การใช้ file-based routing | เมื่อใช้ routing |
| **Guide** | [data-fetching](guide/data-fetching.md) | การ fetch data ด้วย useAsyncData/useFetch | เมื่อ fetch data |
| **Guide** | [modules](guide/modules.md) | การใช้ modules ecosystem | เมื่อใช้ modules |
| **Guide** | [composables](guide/composables.md) | การใช้ Nuxt composables | เมื่อใช้ composables |
| **Guide** | [middleware](guide/middleware.md) | การใช้ route middleware | เมื่อใช้ middleware |
| **Guide** | [deployment](guide/deployment.md) | การ deploy Nuxt applications | เมื่อ deploy |
| **Reference** | [official-docs](reference/official-docs.md) | Official documentation | เมื่อต้องการข้อมูลจาก source |
| **Reference** | [api](reference/api.md) | API references | เมื่อต้องการ API details |
| **Reference** | [config](reference/config.md) | Configuration options | เมื่อตั้งค่า configuration |
| **Examples** | [basic-pages](examples/basic-pages.md) | ตัวอย่างการสร้าง pages | เมื่อต้องการ examples |
| **Examples** | [data-fetching](examples/data-fetching.md) | ตัวอย่าง data fetching | เมื่อต้องการ examples |
| **Patterns** | [project-structure](patterns/project-structure.md) | Project structure patterns | เมื่อ organize project |

## Core Features

- **Server-Side Rendering**: SSR out of the box สำหรับ SEO และ performance
- **File-Based Routing**: Automatic route generation จาก file structure
- **Auto-Imports**: Auto-import components, composables, utilities
- **Data Fetching**: SSR-compatible data fetching ด้วย useAsyncData/useFetch
- **Module System**: Extensible module ecosystem
- **TypeScript**: Zero-config TypeScript support
- **Nitro Server**: Universal server engine สำหรับ deployment

## Quick Reference

```vue
<script setup lang="ts">
// Auto-imported composables
const { data } = await useAsyncData('/api/users')
</script>

<template>
  <div>
    <h1>{{ data?.value?.name }}</h1>
  </div>
</template>
```

## Verification

1. ตรวจสอบ SSR/SSG modes
2. ทดสอบ file-based routing
3. ตรวจสอบ auto-imports
4. ทดสอบ data fetching
5. ตรวจสอบ module integration
