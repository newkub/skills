---
name: shadcn
description: Beautifully designed components that you can copy and paste into your apps. Accessible, customizable, open source. Use for building modern UI with Tailwind CSS.
goal: Use shadcn/ui components following best practices
outcome: Modern, accessible UI with consistent design system
---

# shadcn/ui Library

## When to Use

ใช้ skill นี้เมื่อ:

- สร้าง React/Vue/Svelte applications ด้วย Tailwind CSS
- ต้องการ UI components ที่ accessible และ customizable
- ต้องการ copy-paste components (ไม่ใช่ dependency)
- สร้าง design systems ด้วย Radix UI primitives
- ต้องการ theming และ dark mode support ที่ consistent
- ต้องการ components ที่ type-safe ด้วย TypeScript

## Summary Table

| Category | File | Purpose | Condition |
|---|---|---|---|
| **Guide** | [getting-started](guide/getting-started.md) | เริ่มต้นใช้งาน shadcn/ui | เมื่อเริ่มโปรเจกต์ใหม่ |
| **Guide** | [installation](guide/installation.md) | ติดตั้งและตั้งค่า | เมื่อติดตั้ง shadcn/ui |
| **Guide** | [components](guide/components.md) | ใช้งาน components | เมื่อใช้ components |
| **Guide** | [theming](guide/theming.md) | ปรับแต่ง theme และ colors | เมื่อ customize theme |
| **Guide** | [customization](guide/customization.md) | ปรับแต่ง components | เมื่อ modify components |
| **Guide** | [cli](guide/cli.md) | ใช้งาน shadcn CLI | เมื่อใช้ CLI commands |
| **Reference** | [official-docs](reference/official-docs.md) | Official documentation | เมื่อต้องการข้อมูลจาก source |
| **Reference** | [registry](reference/registry.md) | Component registry system | เมื่อใช้ registry |
| **Reference** | [api](reference/api.md) | API references | เมื่อต้องการ API details |
| **Rules** | [component-usage](rules/component-usage.md) | การใช้ components อย่างถูกต้อง | เมื่อใช้ components |
| **Rules** | [styling](rules/styling.md) | การจัดการ styles | เมื่อ customize styles |
| **Rules** | [composition](rules/composition.md) | การ compose components | เมื่อสร้าง complex UI |
| **Rules** | [accessibility](rules/accessibility.md) | Accessibility best practices | เมื่อ ensure accessibility |
| **Examples** | [basic-components](examples/basic-components.md) | ตัวอย่างการใช้ components | เมื่อต้องการ examples |
| **Examples** | [forms](examples/forms.md) | ตัวอย่างการสร้าง forms | เมื่อสร้าง forms |
| **Examples** | [layouts](examples/layouts.md) | ตัวอย่างการสร้าง layouts | เมื่อสร้าง layouts |

## Core Features

- **Copy-Paste**: Components ถูก copy ไปยัง codebase ไม่ใช่ติดตั้งเป็น dependency
- **Accessible**: สร้างบน Radix UI primitives พร้อม accessibility เต็มรูปแบบ
- **Customizable**: แก้ไขและขยายได้ง่ายด้วย Tailwind CSS
- **Type Safe**: TypeScript support เต็มรูปแบบ
- **Dark Mode**: Dark mode support ในตัวด้วย CSS variables
- **Open Source**: Free และ open source พร้อม community support

## Quick Reference

```bash
# Initialize shadcn/ui
npx shadcn@latest init

# Add components
npx shadcn@latest add button input card
npx shadcn@latest add -y

# Update components
npx shadcn@latest diff
npx shadcn@latest update
```

## Verification

1. ตรวจสอบ shadcn/ui initialization
2. ตรวจสอบ Tailwind CSS configuration
3. ทดสอบ component rendering
4. ตรวจสอบ accessibility (keyboard navigation)
5. ตรวจสอบ dark mode switching
6. ตรวจสอบ TypeScript types
