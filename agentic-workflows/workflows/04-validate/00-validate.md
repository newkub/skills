---
title: Validate
description: ตรวจสอบความถูกต้อง สมบูรณ์ และคุณภาพของผลงานตามเกณฑ์ที่กำหนดอย่างเข้มงวด
auto_execution_mode: 3
file-patterns:
  - "workflows/**/*.md"
  - "**/workflows/*.md"
---

## Prerequisites

- การ execute เสร็จสมบูรณ์และมี deliverables พร้อมตรวจสอบ
- มี success criteria และ acceptance criteria ที่ชัดเจน
- เข้าใจ requirements, expectations, และ quality standards
- มี tools และ methods สำหรับการ validate พร้อมใช้งาน

## 3.1 Precondition

- ผลลัพธ์จากการ execute พร้อมสำหรับการตรวจสอบ
- มี checklist หรือ validation criteria ที่ครบถ้วน
- เข้าใจ quality standards และ benchmarks ที่ต้องการ
- ผู้ตรวจสอบ (validator) มีความเป็นกลางและ objective
- มี access สู่ deliverables และ documentation ที่ครบถ้วน

## 3.2 Prepare

- รวบรวม success criteria และ acceptance criteria ทั้งหมด
- เตรียม tools, scripts, และ methods สำหรับการ validate
- กำหนดขอบเขตและ depth ของการตรวจสอบให้ชัดเจน
- สร้าง validation checklist ที่ครอบคลุมทุก aspect
- เตรียบรูปแบบสำหรับบันทึกผลและ findings

## 3.3 Execute

1. ตรวจสอบตาม success criteria และ requirements ทั้งหมด

   - เปรียบเทียบผลลัพธ์กับ each success criterion โดยใช้ `read_file` ตรวจสอบ deliverables
   - ใช้ `list_dir` และ `find_by_name` ตรวจสอบ completeness ของไฟล์ทั้งหมด
   - ระบุ gaps, missing items, หรือ deviations ที่พบ
   - ตรวจสอบว่า requirements ทั้ง functional และ non-functional ถูกตอบสนอง
   - ใช้ `grep_search` ตรวจสอบ patterns ที่ควรมีหรือไม่ควรมีในโค้ด
   - บันทึก evidence และ supporting data สำหรับแต่ละการตรวจสอบ

2. ทดสอบ functionality, quality, และ performance อย่างครบถ้วน

   - ใช้ `run_command` รัน linters เช่น `biome`, `eslint`, `oxlint` ตรวจสอบ code quality
   - ใช้ `run_command` รัน tests ด้วย `vitest`, `jest`, `playwright` ตามที่โปรเจกต์ใช้
   - ทดสอบ web applications โดยใช้ `browser_preview` และ `mcp5_*` automation tools
   - ใช้ `deploy_web_app` และ `check_deploy_status` ตรวจสอบ deployment readiness
   - ใช้ `read_deployment_config` ตรวจสอบ configuration ถูกต้อง
   - ทดสอบ edge cases และ error handling โดยใช้ `run_command` รัน specific test cases

3. สร้าง validation report ที่ละเอียดและ transparent

   - ใช้ `todo_list` ตรวจสอบว่าทุก validation item ถูกทำครบถ้วน
   - บันทึกผลการ validate ทั้ง pass และ fail อย่างครบถ้วน
   - ใช้ `create_memory` บันทึก issues สำคัญที่ต้องแก้ไข
   - ระบุ issues ที่พบพร้อม severity levels และ impact analysis
   - สร้าง recommendations สำหรับการแก้ไขที่ actionable
   - สรุป overall validation status และ readiness
   - สื่อสาร findings กับ stakeholders โดยใช้ `ask_user_question` เมื่อต้องการตัดสินใจ

## 3.4 Validate

- [ ] ผลลัพธ์ตรงตามทุก success criteria และ requirements
- [ ] ไม่มี critical issues หรือ blockers ที่พบในการตรวจสอบ
- [ ] Quality อยู่ในระดับที่ยอมรับได้ตาม standards ที่กำหนด
- [ ] Functionality ทำงานถูกต้องและครบถ้วนตาม specification
- [ ] Documentation สมบูรณ์ accurate และ up-to-date

## 3.5 Verify

- [ ] ยืนยันว่า validation ครอบคลุมทุก aspect ที่สำคัญ
- [ ] ตรวจสอบความน่าเชื่อถือและ objectivity ของผลการ validate
- [ ] ยืนยันว่าพร้อมส่งมอบงานและเข้าสู่ verify phase
- [ ] ตรวจสอบว่า validation report สมบูรณ์และ transparent
- [ ] ยืนยันว่า stakeholders มีข้อมูลเพียงพอสำหรับการตัดสินใจ
