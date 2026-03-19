---
description: การจัดการเวอร์ชันใน Markdown
title: versioning
tags: [markdown, versioning, changelog, releases]
goals:
  - แสดงตัวอย่างการใช้ versioning
  - สอนวิธีสร้างเอกสารที่เกี่ยวกับ version control
---

## Semantic Versioning

````markdown
## เวอร์ชันมาตรฐาน Semantic

| ส่วน | ความหมาย | ตัวอย่าง |
|------|----------|----------|
| MAJOR | เปลี่ยนแปลงที่ไม่ backwards compatible | 2.0.0 → 3.0.0 |
| MINOR | เพิ่มฟีเจอร์ แต่ backwards compatible | 2.0.0 → 2.1.0 |
| PATCH | แก้ไข bugs | 2.0.0 → 2.0.1 |

### Pre-release Versions

```text
1.0.0-alpha.1  ← Alpha release
1.0.0-beta.2   ← Beta release
1.0.0-rc.1     ← Release candidate
```
````

## Version Table

````markdown
## ประวัติเวอร์ชัน

| เวอร์ชัน | วันที่ | สถานะ | หมายเหตุ |
|---------|--------|--------|----------|
| 3.2.0 | 2024-03-15 | 🟢 Stable | เพิ่มฟีเจอร์ใหม่ |
| 3.1.5 | 2024-03-01 | 🟢 Stable | แก้ไข bugs |
| 3.1.4 | 2024-02-15 | 🔴 Deprecated | มีช่องโหว่ |
| 3.0.0 | 2024-01-20 | 🟢 Stable | Major release |
| 2.5.3 | 2023-12-10 | 🔴 EOL | สิ้นสุดการสนับสนุน |
````

## Version Badge

````markdown
## แบดจ์เวอร์ชัน

[![Version](https://img.shields.io/badge/version-3.2.0-blue.svg)](https://github.com)
[![Latest](https://img.shields.io/badge/latest-stable-brightgreen.svg)]()
[![Node](https://img.shields.io/badge/node-%3E%3D18.0.0-green.svg)]()

### สถานะเวอร์ชัน

- 🟢 **Stable** - พร้อมใช้งานใน production
- 🟡 **Beta** - ทดสอบอยู่ อาจมี bugs
- 🟠 **Alpha** - อยู่ในระหว่างพัฒนา
- 🔴 **Deprecated** - เลิกใช้งาน ควรอัพเกรด
````

## Release Notes Template

````markdown
## Release Notes

### [3.2.0] - 2024-03-15

#### ✨ Features

- เพิ่มระบบ Dark Mode
- รองรับการ Export PDF
- ปรับปรุง Performance

#### 🐛 Bug Fixes

- แก้ไขปัญหาเมมอรี่ leak
- แก้ไขการแสดงผลบน Safari

#### 🔧 Improvements

- ลดขนาด bundle ลง 20%
- ปรับปรุง error messages

### [3.1.5] - 2024-03-01

#### 🐛 Bug Fixes

- แก้ไข security vulnerability
- แก้ไข race condition
````

## Version Comparison

````markdown
## เปรียบเทียบเวอร์ชัน

### 2.x vs 3.x

| ฟีเจอร์ | v2.x | v3.x |
|---------|------|------|
| TypeScript | ⚠️ Partial | ✅ Full |
| ESM Support | ❌ | ✅ |
| Tree Shaking | ⚠️ Limited | ✅ Complete |
| Bundle Size | 150KB | 80KB |
| Performance | 🟡 | 🟢 |

### Migration Guide

```bash
# จาก v2.x
npm install package@^2.0

# ไป v3.x
npm install package@^3.0
```
````

## Deprecation Notice

````markdown
## ⚠️ เลิกใช้งาน (Deprecation)

### เวอร์ชัน 2.x

> ⏰ **จะเลิกสนับสนุนในวันที่ 2024-12-31**
>
> กรุณาอัพเกรดเป็นเวอร์ชัน 3.x โดยเร็ว
> [ดูคู่มือการอัพเกรด](./migration.md)

### ฟีเจอร์ที่จะเลิกใช้

| ฟีเจอร์ | เวอร์ชันที่เลิกใช้ | ทางเลือก |
|---------|-------------------|----------|
| `oldApi()` | 3.0.0 | `newApi()` |
| `legacyConfig` | 3.1.0 | `newConfig` |
| `deprecatedHook` | 3.2.0 | `recommendedHook` |
````

## Support Lifecycle

````markdown
## วงจรการสนับสนุน

```text
3.2.x ──────────────────────────────► (Active)
  │
  │ 2024-06 ──────────────────────────────► (Maintenance)
  │
  │ 2024-12 ──────────────────────────────► (EOL)
  ▼
3.3.x ──────────────────────────────► (Active)
  │
  │ 2024-09 ──────────────────────────────► (Maintenance)
  │
  │ 2025-03 ──────────────────────────────► (EOL)
```

| เวอร์ชัน | Active | Maintenance | EOL |
|----------|--------|-------------|-----|
| 3.2.x | ✅ | 2024-06 | 2024-12 |
| 3.3.x | ✅ | 2024-09 | 2025-03 |
| 3.4.x | ✅ | 2024-12 | 2025-06 |
````
