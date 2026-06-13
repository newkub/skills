---
title: Update Check
description: ตรวจสอบ configuration ของ moonrepo
auto_execution_mode: 3
---

## Goal

ตรวจสอบ configuration ของ moonrepo

## Scope

ครอบคลุมการตรวจสอบ configuration และ validation

## Execute

### 1. Check Configuration

ตรวจสอบ configuration:

```bash
bunx moon check
```

### 2. Validate Projects

ตรวจสอบ projects:

```bash
bunx moon check projects
```

### 3. Validate Tasks

ตรวจสอบ tasks:

```bash
bunx moon check tasks
```

## Expected Outcome

- Configuration ตรวจสอบเรียบร้อย
- Errors แสดงเรียบร้อย
- Warnings แสดงเรียบร้อย
