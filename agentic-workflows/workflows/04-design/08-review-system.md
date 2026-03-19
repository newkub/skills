---
title: Review System Architecture
description: ตรวจสอบ high-level architecture, system boundaries, service communication และ scalability patterns
auto_execution_mode: 3
file-patterns:
  - "**/workflows/04-design/*-review-system.md"
---

## Prerequisites

- เข้าใจ software architecture patterns
- รู้จัก distributed systems concepts
- เข้าใจ scalability, availability, reliability patterns
- รู้จัก CAP theorem และ trade-offs

## 3.1 Precondition

- มี system architecture หรือ design documentation
- มีสิทธิ์อ่าน/เขียนไฟล์ใน project directory
- เข้าใจ business requirements และ constraints

## 3.2 Prepare

- รวบรวม architecture diagrams (C4, UML)
- ระบุ system boundaries และ interfaces
- เตรียม checklist ตาม architectural best practices
- ทำความเข้าใจ non-functional requirements

## 3.3 Execute

1. ตรวจสอบ system boundaries
   - Clear bounded contexts (Domain-Driven Design)
   - Service boundaries ที่ well-defined
   - Interface contracts ที่ stable
   - Avoid tight coupling ระหว่าง systems

2. ตรวจสอบ communication patterns
   - Synchronous vs asynchronous decision
   - API gateway patterns
   - Message broker usage
   - Circuit breaker และ fallback strategies

3. ตรวจสอบ data management
   - Database per service pattern
   - Data consistency strategies
   - CQRS (ถ้ามี)
   - Event sourcing (ถ้ามี)

4. ตรวจสอบ scalability
   - Horizontal scaling readiness
   - Load balancing strategies
   - Caching layers
   - Database scaling strategies

5. ตรวจสอบ resilience
   - Failure isolation (bulkhead pattern)
   - Retry และ backoff strategies
   - Graceful degradation
   - Chaos engineering practices

6. ตรวจสอบ observability
   - Distributed tracing
   - Centralized logging
   - Health checks และ monitoring
   - Alerting strategies

7. ตรวจสอบ security
   - Defense in depth
   - Zero trust architecture
   - Secret management
   - Network security

## 3.4 Validate

- [ ] System boundaries ชัดเจนและ consistent
- [ ] Communication patterns เหมาะสมกับ use case
- [ ] Data consistency strategy รองรับ requirements
- [ ] Scalability patterns รองรับ growth
- [ ] Resilience patterns ครอบคลุม failure scenarios
- [ ] Observability ครอบคลุมทั้ง system
- [ ] Security controls ในทุก layer

## 3.5 Verify

- [ ] ยืนยันว่า architecture รองรับ non-functional requirements
- [ ] ทดสอบ failure scenarios ที่ critical
- [ ] ตรวจสอบ scalability ด้วย load testing
- [ ] ทดสอบ disaster recovery procedures
