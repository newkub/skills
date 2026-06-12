---
name: framework-tauri
description: Tauri framework สำหรับสร้าง desktop และ mobile applications ด้วย Rust backend และ web technologies frontend
---

## When to use

- เมื่อต้องการ desktop applications ที่มีขนาดเล็กและเร็ว
- เมื่อต้องการ Rust backend และ web technologies frontend
- เมื่อต้องการ cross-platform (Windows, macOS, Linux, Android, iOS)
- เมื่อต้องการ security และ performance สูง

## Skills Related

- `/lang-rust` - Rust programming language
- `/lib-vite` - Vite build tool
- `/lib-react` - React library

## หมวดหมู่ไฟล์

| Folder | File | Description |
|--------|------|-------------|
| **knowledge/guide/** | [key-concept.md](knowledge/guide/key-concept.md) | แนวคิดหลักของ Tauri |
| | [how-it-works.md](knowledge/guide/how-it-works.md) | การทำงานของ Tauri |
| | [features.md](knowledge/guide/features.md) | Features ทั้งหมด |
| | [installation.md](knowledge/guide/installation.md) | การติดตั้ง |
| | [configuration.md](knowledge/guide/configuration.md) | การตั้งค่า |
| | [quick-start.md](knowledge/guide/quick-start.md) | เริ่มต้นใช้งาน |
| | [best-practices.md](knowledge/guide/best-practices.md) | แนวทางปฏิบัติที่ดี |
| | [integration.md](knowledge/guide/integration.md) | การรวมกับ tools อื่น |
| | [architecture.md](knowledge/guide/architecture.md) | สถาปัตยกรรมของ Tauri |
| **references/** | [website.md](references/website.md) | แหล่งข้อมูลอย่างเป็นทางการ |
| | [api.md](references/api.md) | Rust API reference |
| | [cli.md](references/cli.md) | CLI commands reference |
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

