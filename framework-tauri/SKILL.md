# framework-tauri

## Overview

Tauri เป็น framework สำหรับสร้าง desktop และ mobile applications ที่มีขนาดเล็กและเร็ว ใช้ Rust สำหรับ backend และ web technologies สำหรับ frontend รองรับ Windows, macOS, Linux, Android และ iOS

## Content Summary

| Folder | File | Description |
|--------|------|-------------|
| **guide/** | [key-concept.md](guide/key-concept.md) | แนวคิดหลักของ Tauri |
| | [how-it-works.md](guide/how-it-works.md) | การทำงานของ Tauri |
| | [features.md](guide/features.md) | Features ทั้งหมด |
| | [installation.md](guide/installation.md) | การติดตั้ง |
| | [configuration.md](guide/configuration.md) | การตั้งค่า |
| | [quick-start.md](guide/quick-start.md) | เริ่มต้นใช้งาน |
| | [best-practices.md](guide/best-practices.md) | แนวทางปฏิบัติที่ดี |
| | [integration.md](guide/integration.md) | การรวมกับ tools อื่น |
| | [architecture.md](guide/architecture.md) | สถาปัตยกรรมของ Tauri |
| **references/** | [website.md](references/website.md) | แหล่งข้อมูลอย่างเป็นทางการ |
| | [api.md](references/api.md) | Rust API reference |
| | [configuration.md](references/configuration.md) | Configuration reference |

## Quick Reference

| Command | Description |
|---------|-------------|
| `npm run tauri init` | Initialize project |
| `npm run tauri dev` | Run in dev mode |
| `npm run tauri build` | Build release |
| `npm run tauri add <plugin>` | Add plugin |
| `cargo tauri dev` | Run with Cargo |
| `cargo tauri build` | Build with Cargo |

## Key Concepts

| Concept | คำอธิบาย |
|---------|----------|
| **IPC** | Inter-Process Communication ระหว่าง Rust และ Frontend |
| **Commands** | Rust functions ที่เรียกจาก Frontend |
| **Capabilities** | ระบบ permission สำหรับ Tauri v2 |
| **WebView** | Embedded web browser (Wry/TAO) |
| **Plugins** | ระบบ plugin ขยาย functionality |

## File Structure

```
framework-tauri/
├── SKILL.md
├── guide/
│   ├── key-concept.md
│   ├── how-it-works.md
│   ├── features.md
│   ├── installation.md
│   ├── configuration.md
│   ├── quick-start.md
│   ├── best-practices.md
│   ├── integration.md
│   └── architecture.md
└── references/
    ├── website.md
    ├── api.md
    └── configuration.md
```