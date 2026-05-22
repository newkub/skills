# Getting Started with shadcn/ui

## Overview

shadcn/ui เป็น component library system ที่ components ถูก distribute เป็น source code ไม่ใช่ npm packages ทั่วไป ผู้ใช้ copy components โดยตรงเข้าไปใน projects ผ่าน CLI tool ทำให้สามารถ customize และเป็นเจ้าของ code ได้อย่างเต็มที่

## Key Concepts

### Registry-First Architecture

Components ถูก treat เป็น "registry items" ที่มี metadata, source code, และ dependencies CLI สามารถ resolve recursive dependencies (เช่น complex block ที่ต้องการ multiple UI components) และ install ในครั้งเดียว

### Code Transformation Pipeline

CLI ไม่ได้แค่ copy files แต่ transform ด้วย:
- Rewrite import aliases ตาม configuration ใน `components.json`
- Convert icon libraries
- Adapt styling ให้ match project's theme

### Multi-Registry Federation

รองรับ third-party registries ผู้ใช้สามารถ configure multiple sources ทำให้ mix official shadcn/ui components กับ community หรือ private company registries ได้ผ่าน namespaced dependencies

## Installation

### Prerequisites

- Node.js 18+ หรือใหม่กว่า
- React 19 หรือ Vue 3 หรือ Svelte 5
- Tailwind CSS 3 หรือ 4
- TypeScript (recommended)

### Initialize Project

```bash
# Initialize shadcn/ui
npx shadcn@latest init
```

CLI จะ detect:
- Framework (Next.js, Vite, Remix, etc.)
- Tailwind version (v3 หรือ v4)
- CSS variables setup
- Component path

### Configuration

ไฟล์ `components.json` จะถูกสร้างขึ้น:

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/app/globals.css",
    "baseColor": "slate",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
```

## Adding Components

### Single Component

```bash
npx shadcn@latest add button
```

### Multiple Components

```bash
npx shadcn@latest add button input card
```

### All Components

```bash
npx shadcn@latest add -y
```

### Update Components

```bash
# Check for updates
npx shadcn@latest diff

# Update components
npx shadcn@latest update
```

## Best Practices

1. **Initialize Early**: รัน `shadcn init` ในตอนเริ่มโปรเจกต์
2. **Use TypeScript**: เปิดใช้งาน TypeScript สำหรับ type safety
3. **Customize Carefully**: แก้ไข components หลังจาก add เสร็จ
4. **Keep Updated**: ใช้ `shadcn diff` เพื่อ check updates
5. **Use Aliases**: ตั้งค่า import aliases ให้ consistent

## Common Issues

### Tailwind Configuration

ถ้า Tailwind ไม่ detect อย่างถูกต้อง:
- ตรวจสอบ `tailwind.config.ts` ใน project root
- ตรวจสอบ CSS file path ใน `components.json`
- รัน `npx tailwindcss init -p` ถ้าจำเป็น

### Import Errors

ถ้า import paths ไม่ถูกต้อง:
- ตรวจสอบ `aliases` ใน `components.json`
- ตรวจสอบ `tsconfig.json` path aliases
- ตรวจสอบ framework support (Next.js, Vite, etc.)

## References

- [Official Documentation](https://ui.shadcn.com/docs/installation)
- [GitHub Repository](https://github.com/shadcn-ui/ui)
- [CLI Documentation](https://ui.shadcn.com/docs/cli)
