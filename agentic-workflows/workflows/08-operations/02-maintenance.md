---
title: Maintenance
description: ดูแล maintain และปรับปรุงระบบให้ทำงานอย่างมีประสิทธิภาพต่อเนื่อง
auto_execution_mode: 3
file-patterns:
  - "workflows/**/*.md"
  - "**/workflows/*.md"
---

## Prerequisites

- ระบบกำลังทำงานใน production
- เข้าใจ technical debt และ areas ที่ต้อง improve
- มี maintenance schedule และ resources

## 3.1 Precondition

- System stable และ operational
- Maintenance window ถูกกำหนดแล้ว
- Backups และ rollback procedures พร้อม
- Stakeholders แจ้งแล้วเกี่ยวกับ downtime ที่อาจเกิดขึ้น

## 3.2 Prepare

- ระบุ components ที่ต้อง maintain
- เตรียม patches, updates, และ fixes
- สำรองข้อมูลและ configurations
- กำหนด testing procedures สำหรับ after maintenance

## 3.3 Execute

1. Pre-maintenance checks

   - ใช้ `read_file` ตรวจสอบ system status
   - ใช้ `run_command` รัน health checks
   - ใช้ `list_dir` ตรวจสอบ file system
   - สำรองข้อมูลสำคัญด้วย `run_command`

2. Perform maintenance tasks

   - ใช้ `run_command` รัน updates และ patches
   - ใช้ `edit` แก้ไข configuration ถ้าจำเป็น
   - ใช้ `code_search` หา deprecated code ที่ต้อง update
   - ใช้ `write_to_file` อัปเดต documentation

3. Post-maintenance verification

   - ใช้ `run_command` รัน validation tests
   - ใช้ `browser_preview` ทดสอบ applications
   - ใช้ `grep_search` ตรวจสอบ logs สำหรับ errors
   - ยืนยัน system performance ด้วย monitoring tools

## 3.4 Validate

- [ ] Maintenance tasks เสร็จสมบูรณ์
- [ ] System ทำงานถูกต้องหลัง maintenance
- [ ] ไม่มี data loss หรือ corruption
- [ ] Performance ปกติหรือดีขึ้น

## 3.5 Verify

- [ ] ยืนยันว่า users สามารถใช้งานได้
- [ ] ตรวจสอบว่าไม่มี issues ใหม่
- [ ] ยืนยันว่า documentation อัปเดตแล้ว
- [ ] ตรวจสอบว่า next maintenance ถูก schedule
