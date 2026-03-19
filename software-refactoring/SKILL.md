---
name: microservices
description: แนวทางการพัฒนาระบบ Microservices ด้วย best practices (6 supporting files)
auto_execution_mode: 3
goal: สร้างระบบ microservices ที่มีความสามารถในการขยายตัว บำรุงรักษาง่าย และสื่อสารระหว่าง services ได้อย่างมีประสิทธิภาพ
outcome: สามารถออกแบบ พัฒนา และจัดการระบบ microservices ตามหลักการที่ดีที่สุด
---

## When to Use

ใช้เมื่อต้องการแบ่งแอปพลิเคชันขนาดใหญ่ออกเป็น services ขนาดเล็กที่ทำงานอย่างอิสระ หรือเมื่อต้องการขยายระบบในส่วนต่างๆ แยกกัน

## Quick Start

1. ออกแบบ service boundaries ตาม domain-driven design
2. เลือก communication pattern (synchronous/asynchronous)
3. ตั้งค่า API Gateway สำหรับ routing และ security
4. สร้าง service discovery mechanism
5. ติดตั้ง monitoring และ logging ระดับ service

## Rules

- [Service Design](rules/1-setup.md)
- [Communication Patterns](rules/2-configuration.md)
- [Deployment Strategies](rules/3-usage.md)

## Knowledge

- [Core Concepts](knowledge/core-concept.md)
- [All Features](knowledge/all-features.md)
- [Best Practices](knowledge/best-practices/)

## Verification

1. ตรวจสอบว่า services แยกกันอย่างสมบูรณ์
2. ทดสอบ communication ระหว่าง services
3. ตรวจสอบ scalability และ fault tolerance

## 1. Service Design Principles

1. ใช้ Domain-Driven Design (DDD) ในการกำหนด service boundaries
2. แต่ละ service ต้องมี single responsibility ที่ชัดเจน
3. หลีกเลี่ยงการแชร์ databases ระหว่าง services
4. ออกแบบให้ services สามารถ deploy และ scale แยกกันได้
5. ใช้ API versioning สำหรับ backward compatibility

## 2. Communication Patterns

1. เลือกระหว่าง synchronous และ asynchronous communication
2. ใช้ Circuit Breaker Pattern สำหรับ fault tolerance
3. จัดการ retry mechanisms และ timeout management
4. ใช้ Bulkhead Pattern สำหรับ resource isolation
5. กำหนด message formats และ protocols ที่ชัดเจน

## 3. Data Management Strategies

1. ใช้ Database per Service pattern
2. จัดการ eventual consistency อย่างเหมาะสม
3. ใช้ Saga Pattern สำหรับ distributed transactions
4. กำหนด data ownership ที่ชัดเจน
5. ใช้ immutable data structures เมื่อเป็นไปได้

## 4. Security Implementation

1. ใช้ Zero Trust Architecture
2. จัดการ service-to-service authentication
3. ใช้ Principle of Least Privilege
4. จัดการ secrets อย่างปลอดภัย
5. ติดตั้ง API rate limiting

## 5. Deployment Approaches

1. ใช้ Infrastructure as Code
2. จัดการ blue-green deployments
3. ใช้ canary releases สำหรับ gradual rollout
4. สร้าง automated testing pipelines
5. วางแผน rollback strategies

## 6. Monitoring and Observability

1. ติดตั้ง distributed tracing
2. สร้าง comprehensive health checks
3. จัดการ metrics collection
4. ใช้ structured logging
5. ตั้งค่า proactive alerting

## 7. Performance Optimization

1. ใช้ caching strategies หลาย levels
2. จัดการ connection pooling
3. ใช้ lazy loading สำหรับ data
4. ใช้ batch processing สำหรับ operations
5. จัดการ resource optimization

## 8. Validation

1. ตรวจสอบว่า services แยกกันอย่างสมบูรณ์
2. ทดสอบ communication ระหว่าง services
3. ตรวจสอบ scalability และ fault tolerance
4. ยืนยันว่า security measures ถูกต้อง
5. ตรวจสอบ monitoring capabilities

## 9. Verification

1. ทดสอบ service independence และ isolation
2. ตรวจสอบ API contracts และ versioning
3. ทดสอบ failure scenarios และ recovery
4. ยืนยันว่า performance targets ถูกต้อง
5. ตรวจสอบ observability และ debugging capabilities
