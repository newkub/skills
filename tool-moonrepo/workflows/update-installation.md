---
title: Update Installation
description: ติดตั้ง moonrepo สำหรับ monorepo management
auto_execution_mode: 3
---

## Goal

ติดตั้ง moonrepo สำหรับใช้งานใน monorepo

## Scope

ครอบคลุมการติดตั้ง moonrepo ผ่าน bun

## Execute

### 1. Install moonrepo

ติดตั้ง moonrepo ผ่าน bun:

```bash
bun add -D @moonrepo/cli
```

### 2. Initialize moonrepo

สร้าง configuration:

```bash
bunx moon init
```

### 3. Verify Installation

ตรวจสอบการติดตั้ง:

```bash
bunx moon --version
```

## Expected Outcome

- moonrepo ติดตั้งเรียบร้อย
- moon.yml สร้างเรียบร้อย
- พร้อมใช้งานสำหรับ monorepo management
