# tool-remotion

## Overview

Remotion เป็น framework สำหรับสร้างวิดีโอแบบโปรแกรมมิ่งโดยใช้ React ช่วยให้สร้างวิดีโอด้วย component model เดียวกับ React โดยใช้ hooks เช่น `useCurrentFrame()` สำหรับ animations

## Content Summary

| Folder | File | Description |
|--------|------|-------------|
| **guide/** | [key-concept.md](guide/key-concept.md) | แนวคิดหลักและสถาปัตยกรรม |
| | [how-it-works.md](guide/how-it-works.md) | วิธีการทำงานของ Remotion |
| | [features.md](guide/features.md) | ฟีเจอร์หลักที่สำคัญ |
| | [installation.md](guide/installation.md) | การติดตั้งและข้อกำหนด |
| | [configuration.md](guide/configuration.md) | การตั้งค่า remotion.config.ts |
| | [quick-start.md](guide/quick-start.md) | เริ่มต้นสร้างวิดีโอ |
| | [best-practices.md](guide/best-practices.md) | แนวทางปฏิบัติที่ดี |
| **references/** | [website.md](references/website.md) | เว็บไซต์และเอกสารอย่างเป็นทางการ |
| | [cli.md](references/cli.md) | คำสั่ง CLI สำหรับ render |
| | [configuration.md](references/configuration.md) | ตัวเลือก configuration ทั้งหมด |
| | [api.md](references/api.md) | React hooks และ API reference |

## Quick Reference

```bash
# สร้างโปรเจกต์ใหม่
bunx create-video@latest

# เริ่มต้น preview
npm start

# render วิดีโอ
bunx remotion render MyComposition

# render เป็น GIF
bunx remotion render MyComposition --output.gif
```

## Key Rules

| Rule | Description |
|------|-------------|
| **1** | ใช้ `useCurrentFrame()` เสมอ - ไม่ใช้ CSS animations |
| **2** | ใช้ Zod สำหรับ props - ทำให้ parameters มี type ที่ปลอดภัย |
| **3** | แปลงวินาทีเป็น frames - ใช้ `time * fps` |
| **4** | ใช้ `staticFile()` สำหรับ assets - path แบบ relative ไม่รองรับ |

## File Structure

```
tool-remotion/
├── SKILL.md
├── guide/
│   ├── key-concept.md
│   ├── how-it-works.md
│   ├── features.md
│   ├── installation.md
│   ├── configuration.md
│   ├── quick-start.md
│   └── best-practices.md
└── references/
    ├── website.md
    ├── cli.md
    ├── configuration.md
    └── api.md
```