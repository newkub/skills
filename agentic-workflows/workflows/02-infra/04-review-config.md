---
title: Review Configuration
description: ตรวจสอบ config files, environment variables, และ configuration management
auto_execution_mode: 3
file-patterns:
  - "**/workflows/review-config.md"
---

## Prerequisites

- เข้าใจ configuration management best practices
- รู้จัก environment variables และ secrets management
- เข้าใจ 12-factor app principles (config in environment)
- รู้จัก config validation และ schema checking

## 3.1 Precondition

- มี config files (JSON, YAML, TOML, .env)
- มีสิทธิ์อ่าน/เขียนไฟล์ใน project directory
- เข้าใจ deployment environments (dev, staging, prod)

## 3.2 Prepare

- อ่าน existing config files
- ระบุ environments ที่ต้องรองรับ
- เตรียม checklist ตาม config best practices
- ตรวจสอบ secrets management system (ถ้ามี)

## 3.3 Execute

1. ตรวจสอบ config file organization
   - Config แยกตาม environment (dev, staging, prod)
   - Default values ที่เหมาะสม
   - Config validation ใน startup
   - ไม่มี duplicate config ระหว่าง files

2. ตรวจสอบ secrets handling
   - Secrets ไม่ hardcoded ใน config files
   - ใช้ environment variables หรือ secrets manager
   - .env files ไม่ commit ใน repository
   - .env.example มีทุก required variables

3. ตรวจสอบ environment variables
   - Naming convention ที่ consistent (UPPER_SNAKE_CASE)
   - Required vs optional variables แยกชัดเจน
   - Default values ที่เหมาะสม
   - Documentation สำหรับแต่ละ variable

4. ตรวจสอบ config validation
   - Schema validation (ถ้ามี)
   - Type checking (string, number, boolean, array)
   - Range validation (ถ้าเหมาะสม)
   - Error messages ที่ชัดเจนเมื่อ config ผิด

5. ตรวจสอบ sensitive config
   - Database URLs ไม่มี credentials ใน plaintext
   - API keys ไม่ hardcoded
   - Encryption keys จัดการอย่างปลอดภัย
   - CORS origins กำหนดอย่างเคร่งครัด (production)

6. ตรวจสอบ feature flags (ถ้ามี)
   - Feature flags มี default ที่เหมาะสม
   - สามารถ toggle ได้ง่าย
   - มี documentation สำหรับแต่ละ flag
   - ไม่มี orphaned flags (ที่ไม่ใช้แล้ว)

7. ตรวจสอบ config documentation
   - README อธิบาย config options
   - .env.example ครบถ้วน
   - Config changes มี changelog
   - Migration guides สำหรับ breaking changes

8. ตรวจสอบ security
   - Debug mode ปิดใน production
   - Verbose logging ปิดใน production (ถ้ามี sensitive data)
   - CORS ไม่ allow all origins ใน production
   - Content Security Policy กำหนด

## 3.4 Validate

- [ ] Config files มี structure ที่เป็นระเบียบ
- [ ] Secrets ไม่ hardcoded ใช้ environment variables
- [ ] .env.example ครบถ้วนและ up-to-date
- [ ] Config validation ทำงานใน startup
- [ ] Required environment variables มี documentation
- [ ] Debug/verbose modes ปิดใน production
- [ ] Sensitive config encrypted หรือใช้ secrets manager
- [ ] Feature flags มี documentation

## 3.5 Verify

- [ ] Application รันได้ด้วย config ปัจจุบัน
- [ ] ทดสอบ config validation ด้วย invalid values
- [ ] ยืนยันว่า production config ไม่มี debug modes
- [ ] ตรวจสอบว่า .env files ไม่ถูก commit
