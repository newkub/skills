---
title: Update Configuration
description: ตั้งค่า moon.yml สำหรับ monorepo
auto_execution_mode: 3
---

## Goal

ตั้งค่า moon.yml สำหรับ monorepo

## Scope

ครอบคลุมการตั้งค่า configuration สำหรับ projects และ tasks

## Execute

### 1. Create moon.yml

สร้างไฟล์ `moon.yml` ที่ root directory:

```yaml
projects:
  - 'apps/*'
  - 'packages/*'

tasks:
  build:
    command: 'bun run build'
  test:
    command: 'bun test'
```

### 2. Add Task Dependencies

เพิ่ม task dependencies:

```yaml
tasks:
  build:
    command: 'bun run build'
  test:
    command: 'bun test'
    deps:
      - build
```

### 3. Add Task Inputs

เพิ่ม task inputs:

```yaml
tasks:
  build:
    command: 'bun run build'
    inputs:
      - 'src/**/*'
```

### 4. Verify Configuration

ตรวจสอบ configuration:

```bash
bunx moon list
```

## Expected Outcome

- moon.yml สร้างเรียบร้อย
- Projects ตั้งค่าเรียบร้อย
- Tasks ตั้งค่าเรียบร้อย
- Configuration ทำงานได้ถูกต้อง
