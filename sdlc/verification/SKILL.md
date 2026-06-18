---
title: Verification
description: ตรวจสอบคุณภาพ code อย่างครบถ้วนก่อน deploy
auto_execution_mode: 3
---

## Goal

ตรวจสอบคุณภาพ code อย่างครบถ้วนเพื่อให้มั่นใจว่าพร้อม deploy

## Scope

ใช้สำหรับตรวจสอบคุณภาพ code ก่อน deploy หรือ merge

## Execute

### 1. Code Quality Verification

ตรวจสอบคุณภาพโค้ด

- รัน linting และแก้ issues ทั้งหมด
- รัน type checking และแก้ errors ทั้งหมด
- Check code complexity metrics
- Verify ไม่มี console.log หรือ debugger statements
- Verify ไม่มี TODO/FIXME/HACK comments

### 2. Testing Verification

ตรวจสอบการทดสอบ

- รัน unit tests ด้วย 100% coverage
- รัน integration tests
- รัน E2E tests
- Verify ไม่มี flaky tests
- Check test performance

### 3. Security Verification

ตรวจสอบ security

- รัน security audit (bun audit/Snyk)
- Check สำหรับ hardcoded secrets
- Verify dependencies เป็นเวอร์ชันล่าสุด
- Check สำหรับ vulnerable dependencies
- Verify API security (authentication, rate limiting)

### 4. Performance Verification

ตรวจสอบ performance

- รัน performance benchmarks
- Check bundle size
- Verify Core Web Vitals (ถ้า web)
- Check memory usage
- Verify response times

### 5. Accessibility Verification

ตรวจสอบ accessibility

- รัน accessibility audit (Lighthouse)
- Verify keyboard navigation
- Check color contrast
- Verify screen reader compatibility

### 6. Documentation Verification

ตรวจสอบ documentation

- Verify API documentation ครบถ้วน
- Check README อัพเดทแล้ว
- Verify code comments เหมาะสม
- Check changelog อัพเดทแล้ว

## Rules

### 1. All Checks Must Pass

ทุกการตรวจสอบต้องผ่าน

- ถ้า linting fail ให้แก้ก่อน
- ถ้า tests fail ให้แก้ก่อน
- ถ้า security issues ให้แก้ก่อน
- ถ้า performance issues ให้แก้ก่อน

### 2. Use Existing Workflows

ใช้ workflows ที่มีอยู่แล้ว

- ทำตาม `/run-lint` สำหรับ linting
- ทำตาม `/run-typecheck` สำหรับ type checking
- ทำตาม `/run-test` สำหรับ testing
- ทำตาม `/run-audit` สำหรับ security audit

### 3. Document Issues

ต้องบันทึก issues ที่พบ

- บันทึก linting issues
- บันทึก test failures
- บันทึก security vulnerabilities
- บันทึก performance bottlenecks

## Expected Outcome

- Code quality ผ่านมาตรฐาน
- Tests ผ่านทั้งหมด
- Security ไม่มี vulnerabilities
- Performance ผ่าน benchmarks
- Accessibility ผ่านมาตรฐาน
- Documentation ครบถ้วน
- Code พร้อม deploy
