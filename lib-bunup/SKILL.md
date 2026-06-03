# Bunup

Bunup เป็นเครื่องมือ build สำหรับ TypeScript libraries ที่ทำงานเร็วมาก ออกแบบมาเพื่อประสบการณ์นักพัฒนาที่ราบรื่นและความเร็วสูง ขับเคลื่อนโดย Bun's native bundler

## Overview

| Folder | Description |
|--------|-------------|
| [guide/](guide/) | คู่มือการใช้งานแบบละเอียด |
| [references/](references/) | เอกสารอ้างอิง API และ CLI |
| [knowledge/](knowledge/) | ความรู้เพิ่มเติม |

## Quick Links

### Installation
```sh
bun add --dev bunup
```

### Quick Start
```sh
bunx bunup
```

## Content Structure

| File | Description |
|------|-------------|
| [guide/key-concept.md](guide/key-concept.md) | แนวคิดหลักของ Bunup |
| [guide/how-it-works.md](guide/how-it-works.md) | วิธีการทำงานของ Bunup |
| [guide/features.md](guide/features.md) | ฟีเจอร์ทั้งหมด |
| [guide/installation.md](guide/installation.md) | การติดตั้ง |
| [guide/configuration.md](guide/configuration.md) | การตั้งค่า |
| [guide/quick-start.md](guide/quick-start.md) | เริ่มต้นใช้งานอย่างรวดเร็ว |
| [guide/best-practices.md](guide/best-practices.md) | แนวปฏิบัติที่ดีที่สุด |
| [guide/integration.md](guide/integration.md) | การรวมกับเครื่องมืออื่น |
| [guide/architecture.md](guide/architecture.md) | สถาปัตยกรรมภายใน |
| [references/website.md](references/website.md) | เว็บไซต์และทรัพยากร |
| [references/api.md](references/api.md) | API Reference |
| [references/configuration.md](references/configuration.md) | Configuration Options |

## Key Features

- **ความเร็วสูง** - ใช้ Bun's native bundler ทำให้ build เร็วมาก
- **รองรับหลาย formats** - ESM, CJS, และ IIFE
- **TypeScript Declarations** - สร้าง .d.ts ไฟล์อัตโนมัติ
- **Plugins** - รองรับ Copy, Tailwind CSS และ plugin อื่นๆ
- **Workspaces** - รองรับ monorepo