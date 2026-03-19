---
title: Deployment
description: Deploy ระบบและ applications อย่างเป็นระบบและปลอดภัย
auto_execution_mode: 3
file-patterns:
  - "workflows/**/*.md"
  - "**/workflows/*.md"
---

## Prerequisites

- มี release หรือ build พร้อมสำหรับ deployment
- เข้าใจ target environment และ infrastructure
- มี access และ permissions สำหรับ deployment

## 3.1 Precondition

- Code ผ่านการ validate และ verify แล้ว
- Deployment environment พร้อมและ configured
- Rollback plan เตรียมไว้แล้ว
- Stakeholders พร้อมสำหรับ deployment window

## 3.2 Prepare

- ตรวจสอบ deployment checklist
- เตรียม environment variables และ secrets
- สำรอง database และ critical data
- กำหนด deployment schedule และ communication plan

## 3.3 Execute

1. Pre-deployment checks

   - ใช้ `read_file` ตรวจสอบ configuration files
   - ใช้ `run_command` รัน pre-deployment tests
   - ใช้ `grep_search` ตรวจสอบ environment variables
   - สำรองข้อมูลสำคัญด้วย `run_command`

2. Deploy ไปยัง target environment

   - ใช้ `run_command` รัน build scripts
   - ใช้ `deploy_web_app` สำหรับ web applications
   - ใช้ `run_command` รัน deployment scripts
   - ตรวจสอบ deployment progress ด้วย `check_deploy_status`

3. Post-deployment verification

   - ใช้ `browser_preview` ทดสอบ application
   - ใช้ `run_command` รัน smoke tests
   - ใช้ `mcp5_*` tools ทดสอบ functionality
   - ตรวจสอบ logs และ monitoring

## 3.4 Validate

- [ ] Deployment สำเร็จโดยไม่มี errors
- [ ] Application ทำงานถูกต้องใน production
- [ ] Smoke tests ผ่านทั้งหมด
- [ ] Monitoring และ alerting ทำงาน

## 3.5 Verify

- [ ] ยืนยันว่า users สามารถใช้งานได้
- [ ] ตรวจสอบว่าไม่มี performance issues
- [ ] ยืนยันว่า rollback plan พร้อมใช้
- [ ] ตรวจสอบว่า documentation อัปเดตแล้ว
