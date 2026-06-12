# tool-jspm

## Overview

JSPM เป็น ES Module Package Manager และ CDN ที่ใช้มาตรฐาน native ES modules พร้อม import maps สำหรับการพัฒนาเว็บแบบไม่ต้อง bundle


## When to use



## Skills Related



## References


## What is JSPM?

- **Standards-Based**: ใช้ native ES modules โดยไม่ต้อง bundle
- **Import Maps**: จัดการ module resolution ด้วย web standard import maps
- **Zero Config**: เริ่มต้น project ได้ทันที
- **TypeScript Support**: Type stripping โดยไม่ต้อง compile
- **Hot Reloading**: Development server พร้อม HMR
- **CDN Integration**: โหลด dependencies จาก JSPM.io CDN

## File Structure

| Folder | Description |
|--------|-------------|
| guide/ | Guides และ tutorials สำหรับการใช้งาน |
| reference/ | Official links |
| changelog/ | Changelog และ version history |

## Quick Start

```bash
# Install globally
npm install -g jspm

# Initialize project
jspm init my-project

# Start development server
jspm serve

# Build for production
jspm build
```

## Core Concepts

| Concept | Description |
|---------|-------------|
| **ES Modules** | มาตรฐาน native JavaScript modules |
| **Import Maps** | Web standard สำหรับ bare module specifiers |
| **Bare Specifier** | เช่น `import "lit"` แทน URL |
| **CDN** | โหลด packages จาก jspm.io |

## Guide Files

| File | Description |
|------|-------------|
| [key-concept.md](guide/key-concept.md) | แนวคิดหลักเกี่ยวกับ ESM และ Import Maps |
| [getting-started.md](guide/getting-started.md) | เริ่มต้นใช้งาน JSPM |
| [installation.md](guide/installation.md) | การติดตั้งและ initialize project |
| [configuration.md](guide/configuration.md) | การตั้งค่า package.json และ importmap.js |
| [all-features.md](guide/all-features.md) | คุณสมบัติทั้งหมดของ JSPM |
| [best-practices.md](guide/best-practices.md) | แนวทางปฏิบัติที่ดี |
| [troubleshooting.md](guide/troubleshooting.md) | การแก้ปัญหาที่พบบ่อย |

## Reference Files

| Folder | Files |
|--------|-------|
| reference/ | [official.md](reference/official.md) - Official resources และ links |

## Version

- Current: v4.0
- Website: https://jspm.org
- GitHub: https://github.com/jspm/jspm.org
- npm: jspm