---
title: Review Error Handling
description: ตรวจสอบ error handling patterns, exception management, และ recovery strategies
auto_execution_mode: 3
file-patterns:
  - "**/workflows/03-quality/*-review-error.md"
---

## Prerequisites

- เข้าใจ error handling best practices ตามภาษาที่ใช้
- รู้จัก exception types (checked, unchecked, runtime)
- เข้าใจ retry patterns และ circuit breakers
- รู้จัก error logging และ monitoring

## 3.1 Precondition

- มี source code ที่มี error handling logic
- มี logging system ที่สามารถตรวจสอบได้
- มีสิทธิ์อ่าน/เขียนไฟล์ใน project directory

## 3.2 Prepare

- อ่าน error handling code
- ระบุ error types ที่ใช้
- เตรียม checklist ตาม error handling best practices
- ทำความเข้าใจ recovery strategies

## 3.3 Execute

1. ตรวจสอบ error types
   - Custom exception classes
   - Error hierarchy
   - Domain-specific errors
   - System errors vs application errors

2. ตรวจสอบ error propagation
   - Try-catch blocks ที่เหมาะสม
   - Exception bubbling
   - Error wrapping (cause preservation)
   - ไม่มี swallowed exceptions

3. ตรวจสอบ error messages
   - User-friendly messages
   - Technical details สำหรับ debugging
   - Internationalization (i18n)
   - Error codes

4. ตรวจสอบ recovery strategies
   - Retry mechanisms (exponential backoff)
   - Fallback strategies
   - Circuit breakers
   - Graceful degradation

5. ตรวจสอบ resource cleanup
   - Finally blocks หรือ try-with-resources
   - Resource disposal
   - Transaction rollback
   - Connection cleanup

6. ตรวจสอบ async error handling
   - Promise rejection handling
   - Async/await error handling
   - Unhandled rejection listeners
   - Timeout handling

7. ตรวจสอบ error monitoring
   - Error tracking (Sentry, Rollbar)
   - Alert thresholds
   - Error categorization
   - Error dashboards

## 3.4 Validate

- [ ] Custom error types ที่ descriptive
- [ ] Error messages ชัดเจนและ actionable
- [ ] ไม่มี swallowed exceptions
- [ ] Retry mechanisms มี backoff
- [ ] Circuit breakers ติดตั้ง (ถ้าจำเป็น)
- [ ] Resource cleanup ครอบคลุม
- [ ] Async errors ถูกจัดการ
- [ ] Error tracking ทำงาน

## 3.5 Verify

- [ ] ทดสอบ error scenarios
- [ ] ตรวจสอบ error logs
- [ ] ยืนยัน circuit breaker ทำงาน
- [ ] ทดสอบ retry mechanisms
