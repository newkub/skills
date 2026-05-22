# Installation Guide

## Overview

คู่มือการติดตั้ง shadcn/ui ในโปรเจกต์ใหม่ ครอบคลุมทุก frameworks ที่รองรับ

## Supported Frameworks

- **Next.js** (App Router และ Pages Router)
- **Vite** (React, Vue, Svelte)
- **Remix**
- **Laravel**
- **Astro**

## Installation Steps

### Step 1: Create Project

```bash
# Next.js
npx create-next-app@latest my-app --typescript --tailwind --eslint

# Vite React
npm create vite@latest my-app -- --template react-ts

# Vite Vue
npm create vite@latest my-app -- --template vue-ts

# Vite Svelte
npm create vite@latest my-app -- --template svelte-ts
```

### Step 2: Initialize shadcn/ui

```bash
cd my-app
npx shadcn@latest init
```

### Step 3: Answer Configuration Questions

CLI จะถามคำถามเหล่านี้:

1. **Style**: เลือก style (new-york, default)
2. **Base Color**: เลือก base color (slate, zinc, neutral, stone)
3. **CSS Variables**: เปิดใช้งาน CSS variables (recommended)
4. **Tailwind CSS Config Path**: ระบุ path ของ tailwind config
5. **Components Path**: ระบุ path สำหรับ components
6. **Utils Path**: ระบุ path สำหรับ utils function
7. **RSC**: เปิดใช้งาน React Server Components (Next.js only)
8. **TSX**: เปิดใช้งาน TSX syntax (React only)

### Step 4: Add Components

```bash
# Add specific components
npx shadcn@latest add button card input

# Add all components
npx shadcn@latest add -y
```

## Framework-Specific Setup

### Next.js

```bash
npx create-next-app@latest my-app --typescript --tailwind --eslint --app
cd my-app
npx shadcn@latest init
```

**Configuration Example**:
```json
{
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "app/globals.css",
    "baseColor": "slate",
    "cssVariables": true
  }
}
```

### Vite React

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
npx shadcn@latest init
```

**Configuration Example**:
```json
{
  "style": "new-york",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "src/index.css",
    "baseColor": "slate",
    "cssVariables": true
  }
}
```

### Vite Vue

```bash
npm create vite@latest my-app -- --template vue-ts
cd my-app
npm install
npx shadcn@latest init
```

**Configuration Example**:
```json
{
  "style": "new-york",
  "rsc": false,
  "tsx": false,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "src/style.css",
    "baseColor": "slate",
    "cssVariables": true
  }
}
```

## Tailwind CSS Setup

### Tailwind v3

```css
/* globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    /* ... more variables */
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    /* ... more variables */
  }
}
```

### Tailwind v4

```css
/* globals.css */
@import "tailwindcss";

@theme {
  --color-background: oklch(0.98 0 0);
  --color-foreground: oklch(0.15 0.02 264);
  /* ... more variables */
}
```

## TypeScript Configuration

ตรวจสอบ `tsconfig.json` มี path aliases:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

## Verification

ตรวจสอบการติดตั้ง:

```bash
# Check components.json
cat components.json

# Check components directory
ls components/ui

# Check utils
ls lib/utils.ts
```

## Troubleshooting

### Issue: CLI not detecting Tailwind

**Solution**: ตรวจสอบว่า Tailwind ถูกติดตั้งและ configure อย่างถูกต้อง

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Issue: Import errors

**Solution**: ตรวจสอบ path aliases ใน `tsconfig.json` และ `components.json`

### Issue: Components not styled

**Solution**: ตรวจสอบ CSS variables และ Tailwind configuration

## References

- [Official Installation Guide](https://ui.shadcn.com/docs/installation)
- [Framework-Specific Guides](https://ui.shadcn.com/docs/components)
