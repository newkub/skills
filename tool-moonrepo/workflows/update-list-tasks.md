---
title: Update List Tasks
description: แสดงรายการ tasks ทั้งหมด
auto_execution_mode: 3
---

## Goal

แสดงรายการ tasks ทั้งหมดใน monorepo

## Scope

ครอบคลุมการแสดงรายการ tasks

## Execute

### 1. List All Tasks

แสดงรายการ tasks ทั้งหมด:

```bash
bunx moon list
```

### 2. List Tasks for Specific Project

แสดง tasks สำหรับ project เฉพาะ:

```bash
bunx moon list --project app
```

### 3. List Available Projects

แสดง projects ทั้งหมด:

```bash
bunx moon list projects
```

## Expected Outcome

- Tasks แสดงเรียบร้อย
- Projects แสดงเรียบร้อย
- Dependencies แสดงเรียบร้อย
