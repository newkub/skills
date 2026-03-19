---
title: API Development
description: พัฒนา APIs อย่างเป็นระบบด้วย best practices
auto_execution_mode: 3
file-patterns:
  - "workflows/**/*.md"
  - "**/workflows/*.md"
---

## Prerequisites

- API specifications หรือ requirements ชัดเจน
- เข้าใจ data models และ business logic
- เลือก technology stack แล้ว

## 3.1 Precondition

- API contracts (OpenAPI, GraphQL schema) กำหนดแล้ว
- Data models designed
- Authentication/authorization requirements ชัดเจน
- Testing strategy กำหนดแล้ว

## 3.2 Prepare

- รวบรวม API specifications
- ศึกษา frameworks และ libraries
- เตรียม development environment
- กำหนด endpoint structure

## 3.3 Execute

1. Design API structure

   - ใช้ `write_to_file` สร้าง OpenAPI/GraphQL specs
   - ใช้ `code_search` ดู existing API patterns
   - ใช้ `skill` โหลด API best practices
   - ใช้ `mcp2_query-docs` หา framework docs

2. Implement endpoints

   - ใช้ `write_to_file` สร้าง route handlers
   - ใช้ `edit` แก้ไข business logic
   - ใช้ `read_file` ดู models และ validations
   - ใช้ `run_command` รัน development server

3. Add tests และ docs

   - ใช้ `write_to_file` สร้าง API tests
   - ใช้ `run_command` รัน test suites
   - ใช้ `write_to_file` สร้าง API documentation
   - ใช้ `browser_preview` ทดสอบ endpoints

## 3.4 Validate

- [ ] API endpoints ทำงานถูกต้อง
- [ ] Validation และ error handling ครบถ้วน
- [ ] Tests ผ่านทั้งหมด
- [ ] Documentation สมบูรณ์

## 3.5 Verify

- [ ] ยืนยันว่า API contract ถูกต้อง
- [ ] ตรวจสอบว่า security ครอบคลุม
- [ ] ยืนยันว่า performance acceptable
- [ ] ตรวจสอบว่า ready สำหรับ integration
