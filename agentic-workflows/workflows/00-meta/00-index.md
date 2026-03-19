---
title: Workflow Index
description: ดัชนีรวม workflows ทั้งหมดในระบบ
auto_execution_mode: 3
file-patterns:
  - "workflows/**/*.md"
---

## โครงสร้าง Workflows

### 00-meta - ข้อมูล meta

- `00-index.md` - ดัชนีนี้
- `01-naming-convention.md` - หลักการตั้งชื่อไฟล์

### 01-start - เริ่มต้น

- `00-receive.md` - รับงาน
- `01-context-gathering.md` - รวบรวม context
- `02-analyze.md` - วิเคราะห์
- `03-clarify-requirements.md` - ทำความเข้าใจ requirements
- `04-stakeholder-analysis.md` - วิเคราะห์ stakeholders

### 02-plan - วางแผน

- `00-plan.md` - วางแผน (overview)
- `01-architecture-design.md` - ออกแบบ architecture
- `02-tech-selection.md` - เลือก technology

### 03-execute - ดำเนินการ

- `00-execute.md` - ดำเนินการ (overview)
- `01-refactoring.md` - refactoring
- `02-api-development.md` - พัฒนา API
- `03-frontend-implementation.md` - พัฒนา UI
- `04-database-migration.md` - ย้าย database

### 04-validate - ตรวจสอบ

- `00-validate.md` - ตรวจสอบ (overview)
- `01-security-review.md` - ตรวจสอบความปลอดภัย
- `02-performance-review.md` - ตรวจสอบประสิทธิภาพ
- `03-accessibility-review.md` - ตรวจสอบ accessibility
- `04-compliance-check.md` - ตรวจสอบ compliance

### 05-verify - ยืนยัน

- `00-verify.md` - ยืนยัน

### 06-finish - สิ้นสุด

- `00-report.md` - รายงานผล
- `01-reflect.md` - ทบทวน

### 07-special - เฉพาะทาง

- `00-problem-solving.md` - แก้ไขปัญหา
- `01-experimentation.md` - ทดลอง
- `02-decision-making.md` - การตัดสินใจ
- `03-emergency-fix.md` - แก้ไข emergency
- `04-poc-development.md` - พัฒนา POC

## การใช้งาน

1. เริ่มจาก `01-start/00-receive.md`
2. ทำตามลำดับ phase 01 → 02 → 03 → 04 → 05 → 06
3. ใช้ `07-special/` เมื่อเจอสถานการณ์เฉพาะทาง

## Tools ที่ใช้บ่อย

- `read_file`, `write_to_file`, `edit`, `multi_edit` - จัดการไฟล์
- `code_search`, `grep_search`, `find_by_name`, `list_dir` - ค้นหา
- `run_command` - รันคำสั่ง
- `browser_preview`, `mcp5_*` - ทดสอบ web
- `todo_list`, `create_memory` - จัดการงานและความจำ
- `search_web`, `skill`, `mcp2_query-docs` - ค้นหาข้อมูล
