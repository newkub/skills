---
name: microservices
description: Best practices and guidelines for designing, developing, and managing a microservices-based architecture
goal: พัฒนา microservices ตาม best practices
outcome: Microservices architecture มีความน่าเชื่อถือและ maintainable
---

# Microservices

This skill provides best practices and guidelines for designing, developing, and managing a microservices-based architecture. It covers key principles from architectural design to deployment and reliability.

## When to Apply

ใช้ Skill นี้เมื่อพัฒนา microservices architecture

- เมื่อออกแบบ microservices architecture
- เมื่อพัฒนา services ใหม่
- เมื่อจัดการ communication ระหว่าง services
- เมื่อ deploy และ monitor microservices
- เมื่อ ensure resiliency และ reliability

## Rules

| Priority | Impact | Reference | Name | Description | Prefix | Condition |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | `CRITICAL` | [1-architecture-principles.md](./rules/1-architecture-principles.md) | Architecture Principles | Core concepts like Single-Responsibility Principle and database-per-service pattern | `ms-` | เมื่อออกแบบ architecture |
| 2 | `HIGH` | [2-communication-patterns.md](./rules/2-communication-patterns.md) | Communication Patterns | Guidelines for service-to-service communication | `ms-` | เมื่อ implement communication |
| 3 | `HIGH` | [3-security-authentication.md](./rules/3-security-authentication.md) | Security and Authentication | Best practices for securing microservices | `ms-` | เมื่อ implement security |
| 4 | `MEDIUM` | [4-deployment-observability.md](./rules/4-deployment-observability.md) | Deployment and Observability | Containerization, orchestration, health checks, centralized logging | `ms-` | เมื่อ deploy และ monitor |
| 5 | `MEDIUM` | [5-resiliency-reliability.md](./rules/5-resiliency-reliability.md) | Resiliency and Reliability | Circuit Breaker, Retries, Idempotency | `ms-` | เมื่อ ensure reliability |
| 6 | `LOW` | [6-development-practices.md](./rules/6-development-practices.md) | Development Practices | Consistency across services | `ms-` | เมื่อ develop services |

## Knowledge

| Reference | Name | Description | Prefix |
| :--- | :--- | :--- | :--- |

## Overview

### Rules

แต่ละไฟล์ Rule ประกอบด้วย:
- เหตุผล (Why)
- ตัวอย่างที่ไม่ดี (Anti-patterns)
- ตัวอย่างที่ดี (Best practices)
- กฎที่ต้องปฏิบัติตาม (Rules)
- ผลกระทบถ้าไม่ทำตาม (Impact)
- เอกสารอ้างอิง (References)

### Knowledge

แต่ละไฟล์ Knowledge ประกอบด้วย:
- Overview: ภาพรวมของ topic
- Key Concepts: concepts สำคัญที่ต้องรู้
- Examples: ตัวอย่างการใช้งาน
- Best Practices: best practices ที่ควรทำตาม
- References: ลิงก์ไปยังแหล่งข้อมูลต้นฉบับ

## How to Use

แต่ละไฟล์ Rule อธิบายถึง:
- เหตุผลที่ต้องทำตามกฎ
- ตัวอย่างที่ไม่ดีและดี
- กฎที่ต้องปฏิบัติตาม
- ผลกระทบถ้าไม่ทำตาม
- เอกสารอ้างอิง

แต่ละไฟล์ Knowledge อธิบายถึง:
- ภาพรวมของ topic
- Concepts สำคัญที่ต้องรู้
- ตัวอย่างการใช้งาน
- Best practices ที่ควรทำตาม
- เอกสารอ้างอิง

## References

- [Microservices Patterns](https://microservices.io/patterns/)