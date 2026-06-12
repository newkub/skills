---
title: Flutter
description: Google's UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase using Dart. Includes widgets, state management, platform integration, and multi-platform deployment.
auto_execution_mode: 3
---

## Goal

สร้าง cross-platform applications (mobile, web, desktop) จาก single codebase ด้วย Dart

## Scope

ใช้สำหรับการพัฒนา applications ที่ต้องการ performance สูงและ native-like experience บนหลาย platforms

## Directory Structure

```
framework-flutter/
├── SKILL.md
├── guide/
│   ├── architecture.md
│   ├── best-practices.md
│   ├── configuration.md
│   └── ...
├── key-concepts/
├── principles/
├── references/
│   ├── cli.md
│   ├── configuration.md
│   ├── sitemap.md
│   └── website.md
└── workflows/
    └── create-flutter-app.md
```

## File Categories

| หมวดหมู่ | ไฟล์ | คำอธิบาย |
|-----------|------|-----------|
| Root Files | SKILL.md | Index file สำหรับ Flutter skill |
| guide/ | architecture.md | Architecture ของ Flutter |
| guide/ | best-practices.md | Best practices สำหรับ development |
| guide/ | configuration.md | Configuration และ setup |
| references/ | cli.md | CLI documentation |
| references/ | configuration.md | Configuration reference |
| references/ | sitemap.md | Sitemap ของ documentation |
| references/ | website.md | เว็บไซต์และ resources |
| workflows/ | create-flutter-app.md | Workflow สำหรับสร้าง Flutter app |

## When to use

- เมื่อต้องการสร้าง cross-platform applications (mobile, web, desktop)
- เมื่อต้องการ performance สูงและ native-like experience
- เมื่อต้องการ single codebase สำหรับหลาย platforms
- เมื่อต้องการ rich UI และ animations

## Skills Related

- `/write-skills` - มาตรฐานการเขียน skills
- lang-dart

## Execute

### 1. Create Project

```bash
flutter create my-app
```

### 2. Develop Widgets

ใช้ Flutter widget system

### 3. Manage State

ใช้ state management solutions

### 4. Build for Target

Build สำหรับ platform ที่ต้องการ

## Rules

### Development
- ใช้ Dart สำหรับ type safety
- ใช้ widgets สำหรับ UI composition
- Follow Flutter widget patterns

### Best Practices
- ใช้ proper state management
- Optimize widget rebuilds
- Test บน target platforms

## Expected Outcome

- Cross-platform applications จาก single codebase
- Performance สูงและ native-like
- Rich UI และ animations

## References

- [Flutter Docs](https://docs.flutter.dev)
- [Flutter GitHub](https://github.com/flutter/flutter)
- [Flutter Samples](https://flutter.dev/samples)
