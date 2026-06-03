# software-testing

## Overview

คู่มือการทดสอบซอฟต์แวร์ครอบคลุมหลักการ ประเภทของการทดสอบ เครื่องมือ และแนวทางปฏิบัติที่ดีในการสร้างซอฟต์แวร์ที่มีคุณภาพ

## Content Summary

| Folder | File | Description |
|--------|------|-------------|
| **guide/** | [key-concept.md](guide/key-concept.md) | แนวคิดหลักของการทดสอบซอฟต์แวร์ |
| | [how-it-works.md](guide/how-it-works.md) | การทำงานของระบบทดสอบ |
| | [features.md](guide/features.md) | Features และประเภทของการทดสอบ |
| | [installation.md](guide/installation.md) | การติดตั้งเครื่องมือทดสอบ |
| | [configuration.md](guide/configuration.md) | การตั้งค่า test configuration |
| | [quick-start.md](guide/quick-start.md) | เริ่มต้นเขียน test |
| | [best-practices.md](guide/best-practices.md) | แนวทางการทดสอบที่ดี |
| | [integration.md](guide/integration.md) | การรวมกับ CI/CD |
| | [architecture.md](guide/architecture.md) | สถาปัตยกรรมของระบบทดสอบ |
| **references/** | [website.md](references/website.md) | แหล่งข้อมูลอย่างเป็นทางการ |

## Quick Reference

| Level | Description |
|-------|-------------|
| **Unit Testing** | Test individual functions/methods |
| **Integration Testing** | Test component interactions |
| **System Testing** | Test complete system |
| **E2E Testing** | Test full user flows |

## Key Concepts

| Concept | คำอธิบาย |
|---------|----------|
| **Test Pyramid** | Unit → Integration → E2E |
| **TDD** | Test-Driven Development |
| **BDD** | Behavior-Driven Development |
| **Mocking** | Simulating dependencies |
| **Coverage** | Code coverage metrics |

## File Structure

```
software-testing/
├── SKILL.md
├── guide/
│   ├── key-concept.md
│   ├── how-it-works.md
│   ├── features.md
│   ├── installation.md
│   ├── configuration.md
│   ├── quick-start.md
│   ├── best-practices.md
│   ├── integration.md
│   └── architecture.md
└── references/
    └── website.md
```