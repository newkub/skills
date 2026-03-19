---
title: Database Migration
description: Migrate database schema และ data อย่างปลอดภัย
auto_execution_mode: 3
file-patterns:
  - "workflows/**/*.md"
  - "**/workflows/*.md"
---

## Prerequisites

- Schema changes หรือ migration plan ชัดเจน
- Access สู่ database และ migration tools
- เข้าใจ data volume และ complexity

## 3.1 Precondition

- Source schema และ target schema กำหนดแล้ว
- Data mapping กำหนดแล้ว
- Downtime window approved (ถ้าจำเป็น)
- Rollback plan เตรียมไว้แล้ว

## 3.2 Prepare

- สำรอง database ปัจจุบัน
- สร้าง migration scripts
- เตรียม testing environment
- กำหนด validation queries

## 3.3 Execute

1. Prepare migration

   - ใช้ `run_command` สำรอง database
   - ใช้ `write_to_file` สร้าง migration scripts
   - ใช้ `read_file` ตรวจสอบ scripts
   - ใช้ `run_command` ทดสอบบน staging

2. Execute migration

   - ใช้ `run_command` รัน migration scripts
   - ใช้ `read_file` ตรวจสอบ logs
   - ใช้ `run_command` รัน validation queries
   - ใช้ `grep_search` หา errors

3. Verify และ monitor

   - ใช้ `run_command` รัน data consistency checks
   - ใช้ `read_file` ตรวจสอบ application logs
   - ใช้ `browser_preview` ทดสอบ functionality
   - ใช้ `create_memory` บันทึก migration log

## 3.4 Validate

- [ ] Schema migrated ถูกต้อง
- [ ] Data integrity maintained
- [ ] Application ทำงานได้
- [ ] ไม่มี data loss

## 3.5 Verify

- [ ] ยืนยันว่า migration สมบูรณ์
- [ ] ตรวจสอบว่า no rollback needed
- [ ] ยืนยันว่า performance normal
- [ ] ตรวจสอบว่า monitoring active
