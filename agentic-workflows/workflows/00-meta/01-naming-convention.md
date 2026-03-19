---
title: Naming Convention
description: หลักการตั้งชื่อไฟล์และจัดโครงสร้าง workflows
auto_execution_mode: 3
file-patterns:
  - "workflows/**/*.md"
---

## หลักการตั้งชื่อไฟล์

### Format

```text
[NN]-[name].md
```

- `NN` - หมายเลขลำดับ 2 หลัก (00, 01, 02, ...)
- `name` - ชื่อที่อธิบายเนื้อหา ใช้ kebab-case

### ตัวอย่าง

- `00-index.md`
- `01-receive.md`
- `02-analyze.md`
- `02-analyze/01-code-analysis.md`

## หลักการจัดกลุ่ม

### 00-[name] - Meta

ข้อมูลเกี่ยวกับระบบ workflows เอง

### 01-[name] - Start Phase

เริ่มต้นโปรเจกต์ รับงาน วิเคราะห์

### 02-[name] - Plan Phase

วางแผนการทำงาน

### 03-[name] - Execute Phase

ดำเนินการตามแผน

### 04-[name] - Validate Phase

ตรวจสอบคุณภาพ

### 05-[name] - Verify Phase

ยืนยันความถูกต้อง

### 06-[name] - Finish Phase

สิ้นสุดและสรุปผล

### 07-[name] - Special

Workflows เฉพาะทางหรือสถานการณ์พิเศษ

## การสร้าง Subfolder

ใช้เมื่อมี workflows ย่อยที่เกี่ยวข้องกัน:

```text
02-analyze.md              # overview
02-analyze/
  01-code-analysis.md      # sub-workflow 1
  02-requirements-analysis.md  # sub-workflow 2
```

## การเรียงลำดับ

1. เรียงตามเลข prefix
2. ไฟล์ overview มาก่อนเสมอ
3. ไฟล์ย่อยเรียงตามลำดับการทำงาน

## ชื่อที่แนะนำ

### Start Phase

- `00-receive.md`
- `01-context-gathering.md`
- `02-analyze.md`

### Plan Phase

- `00-plan.md`
- `01-task-planning.md`
- `02-resource-planning.md`
- `03-risk-planning.md`

### Execute Phase

- `00-execute.md`
- `01-code-edit.md`
- `02-testing.md`
- `03-debugging.md`
- `04-documentation.md`
- `05-refactoring.md`

### Validate Phase

- `00-validate.md`
- `01-security-review.md`
- `02-performance-review.md`
- `03-code-review.md`

### Finish Phase

- `00-report.md`
- `01-reflect.md`

### Special

- `00-problem-solving.md`
- `01-experimentation.md`
- `02-decision-making.md`
