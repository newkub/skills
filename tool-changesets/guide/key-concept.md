# Key Concept

## What is Changesets?

Changesets เป็นเครื่องมือสำหรับจัดการ versioning และ releases ใน monorepo อย่างเป็นระบบ โดยบันทึกการเปลี่ยนแปลงแต่ละ package ในไฟล์ changeset แล้วคำนวณ semver version อัตโนมัติ

## Key Terms

| Term | Description |
|------|-------------|
| **changeset** | ไฟล์ `.md` ใน `.changeset/` ที่บันทึกการเปลี่ยนแปลง |
| **version** | semver (major.minor.patch) |
| **fixed** | packages ที่ต้องเปลี่ยน version พร้อมกัน |
| **linked** | packages ที่ version ผูกกัน (เช่น `pkg-a@1.0.0` กับ `pkg-b@1.0.0`) |
| **independent** | packages ที่ version แยกกันอิสระ |
| **changelog** | ไฟล์ประวัติการเปลี่ยนแปลง |

## Core Features

| Feature | Description |
|---------|-------------|
| **Monorepo Support** | จัดการหลาย packages ใน repo เดียว |
| **Semantic Versioning** | คำนวณ version ตาม semver rules |
| **CHANGELOG Generation** | สร้าง changelog อัตโนมัติ |
| **CI/CD Integration** | ทำงานร่วมกับ GitHub Actions |
| **Flexible** | ปรับแต่งได้ตามความต้องการ |

## Changeset File Structure

```md
---
"package-name": minor
---

Description of the change
```

## Package Relationship Types

```
┌─────────────────────────────────────────────────────────────┐
│                 Package Versioning Types                     │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Fixed (เปลี่ยนพร้อมกัน)                                     │
│  ┌─────────────┐                                           │
│  │  shared  →  │  ถ้า 1 package เปลี่ยน → ทุก package เปลี่ยน │
│  │  shared  →  │                                           │
│  └─────────────┘                                           │
│                                                              │
│  Linked (version ผูกกัน)                                     │
│  ┌─────────────┐                                           │
│  │  core  → 1.0│  ทุก package ใน group มี version เดียวกัน    │
│  │  utils → 1.0│                                           │
│  └─────────────┘                                           │
│                                                              │
│  Independent (อิสระ)                                         │
│  ┌─────────────┐                                           │
│  │  pkg-a → 1.2│  แต่ละ package มี version ของตัวเอง        │
│  │  pkg-b → 2.1│                                           │
│  └─────────────┘                                           │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## Popular Projects Using Changesets

| Project | Description |
|---------|-------------|
| **Astro** | Web framework |
| **Vite** | Build tool |
| **Remix** | React framework |
| **SvelteKit** | Svelte framework |
| **Chakra UI** | React component library |

## When to Use Changesets

| Use Case | Recommendation |
|----------|----------------|
| Monorepo หลาย packages | ✅ เหมาะมาก |
| Library ที่มีหลาย exports | ✅ ดีมาก |
| CI/CD automated releases | ✅ รองรับ GitHub Actions |
| Single package repo | ❌ ใช้ manual versioning แทน |
| Simple projects | ⚠️ อาจซับซ้อนเกินไป |