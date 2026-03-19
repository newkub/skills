---
title: Review Tests
description: ตรวจสอบ test coverage, test quality, test patterns และ testing best practices
auto_execution_mode: 3
file-patterns:
  - "**/workflows/review-tests.md"
---

## Prerequisites

- เข้าใจ testing strategies (unit, integration, e2e)
- รู้จัก testing frameworks (Vitest, Jest, pytest, cargo test, Playwright)
- เข้าใจ test coverage metrics และ quality indicators
- รู้จัก TDD/BDD practices และ mocking strategies

## 3.1 Precondition

- มี test suite ที่สามารถรันได้
- มีสิทธิ์อ่าน/เขียนไฟล์ใน project directory
- Testing framework ติดตั้งและพร้อมใช้งาน

## 3.2 Prepare

- ระบุ testing framework ที่ใช้
- อ่าน test files ที่มีอยู่
- รวบรวม coverage reports ล่าสุด
- เตรียม checklist ตาม testing best practices

## 3.3 Execute

1. รัน tests ทั้งหมด

   ```bash
   # JavaScript/TypeScript
   bun test

   # Python
   pytest -v

   # Rust
   cargo test
   ```

2. ตรวจสอบ test coverage

   ```bash
   # ดู coverage report
   bunx vitest --coverage

   # หรือ
   pytest --cov=. --cov-report=html
   ```

   - ระบุ files ที่ coverage ต่ำ
   - ดู branches, functions, lines coverage
   - ระบุ dead code จาก coverage gaps

3. วิเคราะห์ test quality
   - Tests มีความ independent (ไม่กระทบกัน)
   - ใช้ descriptive test names
   - Arrange-Act-Assert pattern
   - ไม่มี duplicate test logic
   - ใช้ appropriate mocking

4. ตรวจสอบ test types balance
   - Unit tests: test individual functions/components
   - Integration tests: test module interactions
   - E2E tests: test user flows (ถ้ามี)
   - สัดส่วนที่เหมาะสม (pyramid: many unit, some integration, few e2e)

5. ตรวจสอบ edge cases
   - Error conditions ถูก test
   - Boundary values ถูก test
   - Empty/null/undefined inputs
   - Concurrent/race conditions (ถ้ามี)

6. ตรวจสอบ test maintainability
   - ไม่มี brittle tests (พังบ่อยจาก unrelated changes)
   - Tests อ่านง่ายและเข้าใจได้
   - ใช้ test data builders หรือ fixtures
   - ไม่มี hardcoded values ที่ magic

7. ตรวจสอบ CI/CD integration
   - Tests รันใน CI pipeline
   - Coverage gates (ถ้ามี)
   - Flaky tests ถูกจัดการ

## 3.4 Validate

- [ ] รัน tests ทั้งหมดผ่าน (ไม่มี failing tests)
- [ ] Test coverage อยู่ในระดับที่ยอมรับได้ (>70% หรือตาม policy)
- [ ] Critical paths มี test coverage สูง
- [ ] Error handling ถูก test ครบถ้วน
- [ ] Tests มี quality ที่ดี (readable, maintainable)
- [ ] สัดส่วน unit/integration/e2e tests เหมาะสม
- [ ] ไม่มี flaky tests
- [ ] Tests รันได้ใน CI pipeline

## 3.5 Verify

- [ ] ยืนยันว่า tests ใช้เวลารันอยู่ใน acceptable range
- [ ] ตรวจสอบว่า test coverage ไม่ลดลงจาก baseline
- [ ] ทดสอบว่า new tests จริงๆ จับ bugs ได้
