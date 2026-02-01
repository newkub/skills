---
name: testing
description: Best practices for writing and maintaining tests
goal: Write tests following best practices
outcome: High quality and maintainable tests
---

# Testing

## When to Use

ใช้เมื่อเขียน tests หรือ refactor tests ที่มีอยู่

## Quick Start

1. ติดตั้ง test framework (เช่น Vitest, Playwright)
2. ตั้งค่า configuration สำหรับ project
3. เขียน tests ตาม AAA pattern (Arrange, Act, Assert)
4. รัน tests และตรวจสอบ coverage
5. รวม tests ใน CI/CD pipeline

## Rules

- [Test Setup](rules/1-setup.md)
- [Test Configuration](rules/2-configuration.md)
- [Test Usage](rules/3-usage.md)

## Knowledge

- [Core Concepts](knowledge/core-concept.md)
- [Testing Strategies](knowledge/testing-strategies.md)
- [Best Practices](knowledge/best-practices.md)
