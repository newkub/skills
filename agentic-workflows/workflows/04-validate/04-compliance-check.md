---
title: Compliance Check
description: ตรวจสอบ compliance กับ regulations และ standards ที่เกี่ยวข้อง
auto_execution_mode: 3
file-patterns:
  - "workflows/**/*.md"
  - "**/workflows/*.md"
---

## Prerequisites

- เข้าใจ applicable regulations (GDPR, HIPAA, PCI-DSS, etc.)
- มี compliance requirements ที่ชัดเจน
- มี tools สำหรับ compliance scanning

## 3.1 Precondition

- Application หรือ system พร้อมสำหรับ review
- Compliance standards ถูกกำหนดแล้ว
- Legal/Compliance team พร้อม consult
- Documentation พร้อมสำหรับ review

## 3.2 Prepare

- รวบรวม compliance requirements
- เตรียม compliance scanning tools
- กำหนด compliance checklist
- เตรียม evidence collection templates

## 3.3 Execute

1. Review data handling

   - ใช้ `code_search` หา data processing code
   - ใช้ `grep_search` หา PII/PHI handling
   - ใช้ `read_file` อ่าน privacy policies
   - ใช้ `search_web` หา compliance best practices

2. Check technical compliance

   - ใช้ `run_command` รัน compliance scanners
   - ใช้ `read_file` ตรวจสอบ encryption implementation
   - ใช้ `grep_search` หา logging และ audit trails
   - ใช้ `mcp1_search_cloudflare_documentation` หา security compliance

3. Document และ remediate

   - ใช้ `write_to_file` สร้าง compliance report
   - ใช้ `edit` แก้ไข non-compliant areas
   - ใช้ `todo_list` track remediation
   - ใช้ `create_memory` บันทึก compliance decisions

## 3.4 Validate

- [ ] Data handling compliant
- [ ] Security controls ตรงตาม standards
- [ ] Audit trails ครบถ้วน
- [ ] Documentation สมบูรณ์

## 3.5 Verify

- [ ] ยืนยันว่า audit ผ่าน
- [ ] ตรวจสอบว่า legal team approve
- [ ] ยืนยันว่า ready สำหรับ production
- [ ] ตรวจสอบว่า ongoing monitoring ตั้งค่าแล้ว
