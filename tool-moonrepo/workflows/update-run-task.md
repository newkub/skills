---
title: Update Run Task
description: รัน task ด้วย moonrepo
auto_execution_mode: 3
---

## Goal

รัน task ด้วย moonrepo

## Scope

ครอบคลุมการรัน tasks ใน monorepo

## Execute

### 1. Run Task in All Projects

รัน task ในทุก projects:

```bash
bunx moon run build
```

### 2. Run Task in Specific Project

รัน task ใน project เฉพาะ:

```bash
bunx moon run build --project app
```

### 3. Run Task in Affected Projects

รัน task ใน projects ที่มีการเปลี่ยนแปลง:

```bash
bunx moon run build --affected
```

### 4. Run All Tasks

รันทุก tasks:

```bash
bunx moon run
```

## Expected Outcome

- Task รันเรียบร้อย
- Outputs แสดงเรียบร้อย
- Performance ดี
