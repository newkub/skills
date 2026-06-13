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

## Rules

- ใช้ `useCurrentFrame()` เสมอ - ไม่ใช้ CSS animations
- ใช้ Zod สำหรับ props - ทำให้ parameters มี type ที่ปลอดภัย
- แปลงวินาทีเป็น frames - ใช้ `time * fps`
- ใช้ `staticFile()` สำหรับ assets - path แบบ relative ไม่รองรับ

## Expected Outcome

- วิดีโอแบบโปรแกรมมิ่งด้วย React
- Animations ที่ smooth และ consistent
- Video generation ที่ automated
- Programmatic video creation ที่ flexible

## Skills Related

- `/lib-react` - React library
- `/follow-react` - React best practices

## โครงสร้าง Directory

```
remotion/
├── SKILL.md
├── guide/              (Guides และ best practices)
├── key-concepts/       (แนวคิดหลัก)
├── principles/         (หลักการ)
├── references/         (CLI, configuration, API reference)
├── workflows/          (Workflows สำหรับการใช้งาน)
├── templates/          (Templates สำหรับ remotion.config.ts)
└── scripts/            (Scripts สำหรับ automation)
```

## หมวดหมู่ไฟล์

| Folder | Files | Description |
|--------|-------|-------------|
| [guide/](guide/) | 0 files | Guides และ best practices สำหรับการใช้งาน |
| [key-concepts/](key-concepts/) | 0 files | แนวคิดหลักของ Remotion |
| [principles/](principles/) | 0 files | หลักการในการใช้งาน Remotion |
| [references/](references/) | 4 files | CLI, configuration, API reference |
| [workflows/](workflows/) | 0 files | Workflows สำหรับการใช้งาน |
| [templates/](templates/) | 0 files | Templates สำหรับ remotion.config.ts |
| [scripts/](scripts/) | 0 files | Scripts สำหรับ automation |
