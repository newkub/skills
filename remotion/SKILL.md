---
title: Remotion
description: Framework สำหรับสร้างวิดีโอแบบโปรแกรมมิ่งโดยใช้ React
auto_execution_mode: 3
---

## Goal

ใช้งาน Remotion สำหรับสร้างวิดีโอแบบโปรแกรมมิ่งด้วย React

## Scope

ใช้สำหรับ:
- สร้างวิดีโอแบบโปรแกรมมิ่งด้วย React
- Video generation ด้วย component model
- Animations ด้วย hooks เช่น useCurrentFrame()
- Programmatic video creation
- Cloud rendering (AWS Lambda, GCP Cloud Run)

## Execute

### 1. Create Project

สร้างโปรเจกต์ใหม่:
```bash
bunx create-video@latest
```

### 2. Start Preview

เริ่มต้น preview:
```bash
bun run dev
# หรือ
bunx remotion studio
```

### 3. Render Video

Render วิดีโอ:
```bash
bunx remotion render MyComposition
```

### 4. Render GIF

Render เป็น GIF:
```bash
bunx remotion render MyComposition --output.gif
```

## โครงสร้าง Directory

```
remotion/
├── SKILL.md
├── learn/
│   ├── guide/
│   │   ├── getting-started.md
│   │   ├── project-structure.md
│   │   ├── rendering-workflow.md
│   │   └── framework-integration.md
│   ├── key-concepts/
│   │   ├── composition.md
│   │   ├── frame-based-animation.md
│   │   ├── media-components.md
│   │   ├── rendering-pipeline.md
│   │   └── cloud-rendering.md
│   └── principles/
│       ├── animation-best-practices.md
│       ├── asset-management.md
│       ├── performance-optimization.md
│       └── type-safety.md
├── references/
│   ├── api.md
│   ├── cli.md
│   ├── configuration.md
│   └── website.md
├── scripts/
└── templates/
```

## หมวดหมู่ไฟล์

### learn/guide
Guides สำหรับเริ่มต้นและการใช้งาน:
- **getting-started.md** - การเริ่มต้น, installation, และ first video
- **project-structure.md** - โครงสร้างโปรเจกต์และ organization
- **rendering-workflow.md** - การ render ทั้ง local และ cloud
- **framework-integration.md** - การรวมกับ frameworks อื่นๆ (Vite, Next.js, Tailwind)

### learn/key-concepts
Concepts หลักของ Remotion:
- **composition.md** - Composition API และ metadata
- **frame-based-animation.md** - Frame-based animation และ hooks
- **media-components.md** - Media components (Video, Audio, Img)
- **rendering-pipeline.md** - Rendering pipeline และ architecture
- **cloud-rendering.md** - Cloud rendering (AWS Lambda, GCP Cloud Run)

### learn/principles
Best practices และ principles:
- **animation-best-practices.md** - Animation patterns และ timing
- **asset-management.md** - Asset organization และ optimization
- **performance-optimization.md** - Performance tips และ optimization
- **type-safety.md** - Type safety ด้วย Zod

### references
API references และ documentation:
- **api.md** - API reference (hooks, components, functions)
- **cli.md** - CLI commands และ options
- **configuration.md** - Configuration options
- **website.md** - Links ไปยัง official resources

## Rules

- ใช้ `useCurrentFrame()` เสมอ - ไม่ใช้ CSS animations
- ใช้ Zod สำหรับ props - ทำให้ parameters มี type ที่ปลอดภัย
- แปลงวินาทีเป็น frames - ใช้ `time * fps`
- ใช้ `staticFile()` สำหรับ assets - path แบบ relative ไม่รองรับ
- ใช้ `interpolate()` สำหรับ smooth transitions
- ใช้ `<OffthreadVideo>` สำหรับ videos ขนาดใหญ่
- Test ใน Studio ก่อน render
- Optimize assets ก่อน rendering

## Expected Outcome

- วิดีโอแบบโปรแกรมมิ่งด้วย React
- Animations ที่ smooth และ consistent
- Video generation ที่ automated
- Programmatic video creation ที่ flexible
- Cloud rendering ที่ scalable
- Type-safe components ด้วย Zod
