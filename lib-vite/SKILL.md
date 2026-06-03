# lib-vite

## Overview

แนวทางการใช้งาน Vite ในฐานะ build library สำหรับ frontend development ด้วย Native ESM, HMR ที่รวดเร็ว, Plugin API และ Rollup-based production build

## File Structure

| Folder | Description |
|--------|-------------|
| guide/ | Guides และ tutorials สำหรับการใช้งาน |
| references/ | References สำหรับ API, Configuration, เว็บไซต์ |

## Guide Files

| File | Description |
|------|-------------|
| key-concept.md | Core concepts ของ Vite |
| how-it-works.md | การทำงานภายในของ Vite |
| features.md | รายการ features ทั้งหมด |
| installation.md | การติดตั้งและ setup |
| configuration.md | การตั้งค่า configuration |
| quick-start.md | คู่มือเริ่มต้นใช้งาน |
| best-practices.md | Best practices |
| integration.md | Integration กับ frameworks และ tools |
| architecture.md | Architecture ของ Vite |

## References Files

| File | Description |
|------|-------------|
| website.md | Official links และ resources |
| api.md | Programmatic API reference |
| configuration.md | Configuration options reference |

## Usage Order

1. **Start**: `guide/key-concept.md` → `guide/quick-start.md`
2. **Setup**: `guide/installation.md` → `guide/configuration.md`
3. **Learn**: `guide/features.md` → `guide/how-it-works.md`
4. **Deep Dive**: `guide/architecture.md` → `guide/best-practices.md`
5. **Integrate**: `guide/integration.md`
6. **Reference**: `references/api.md` → `references/configuration.md`

## Quick Commands

```bash
# Create project
npm create vite@latest my-app -- --template react-ts

# Dev server
npx vite

# Build
npx vite build

# Preview
npx vite preview
```
