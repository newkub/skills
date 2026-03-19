---
title: Test Performance
description: ทดสอบประสิทธิภาพของ application และวัดผลการทำงาน
auto_execution_mode: 3
file-patterns:
  - "**/*.{ts,js}"
  - "**/*.test.{ts,js}"
  - "**/*.spec.{ts,js}"
follow:
  skills:
    - "@write-skills"
    - "@test-vitest"
    - "@test-playwright"
  workflows:
    - "/validate"
    - "/test-performance"
    - "/run-test"
  files:
    - "guidelines/testing-standards.md"
---

## Test Performance

## Purpose

ทดสอบประสิทธิภาพของ application เพื่อหา bottlenecks และปรับปรุง performance

## Scope

- Unit tests สำหรับ functions
- Integration tests สำหรับ APIs
- Load tests สำหรับ high traffic
- Performance monitoring

## Rules

### 1. Test Categories

| ประเภท | วัตถุประสงค์ | Tools |
|--------|--------------|-------|
| **Unit Tests** | ทดสอบ functions แยกส่วน | Vitest |
| **Integration** | ทดสอบ API endpoints | Supertest |
| **Load Tests** | ทดสอบ concurrent users | Artillery |
| **E2E Tests** | ทดสอบ user flows | Playwright |

### 2. Performance Metrics

| Metric | Target | Tool |
|--------|--------|------|
| **Response Time** | < 200ms (API) | Lighthouse |
| **First Contentful Paint** | < 1.5s | Web Vitals |
| **Time to Interactive** | < 3s | Lighthouse |
| **Bundle Size** | < 100KB (gzipped) | Bundle Analyzer |

### 3. Testing Standards

| Rule | Requirement |
|------|-------------|
| **Coverage** | > 80% statements |
| **Assertions** | มี assertions ชัดเจน |
| **Mocking** | Mock external dependencies |
| **Cleanup** | Clean up after tests |

## Steps

### Phase 1: Test Setup

1. ติดตั้ง testing framework (Vitest)
2. ตั้งค่า test configuration
3. สร้าง test files และ directories

### Phase 2: Unit Testing

1. เขียน tests สำหรับ pure functions
2. ทดสอบ edge cases และ error handling
3. ตรวจสอบ test coverage

### Phase 3: Performance Testing

1. ทดสอบ response times และ throughput
2. วิเคราะห์ bottlenecks ด้วย profiling
3. ปรับปรุง performance ตามผลลัพธ์

## Expected Outcome

| ผลลัพธ์ | คำอธิบาย | วิธีวัดผล |
|--------|----------|------------|
| **Tests Passing** | ทุก tests ผ่าน | Test runner report |
| **Coverage Met** | Coverage > 80% | Coverage report |
| **Performance OK** | ตรงตาม targets | Performance metrics |
| **Bottlenecks Fixed** | ไม่มีปัญหา performance | Profiling results |

## Reference

- [Vitest Documentation](../../../lib-test-vitest)
- [Playwright Testing](../../../lib-test-playwright)
- [Performance Testing Guide](../../../test-perf/)
- [Load Testing](../../../test-load/)
- [Web Performance Standards](https://web.dev/performance/)
