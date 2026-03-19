---
title: Review Event-Driven Architecture
description: ตรวจสอบ event-driven systems, message queues, event sourcing และ async patterns
auto_execution_mode: 3
file-patterns:
  - "**/workflows/03-quality/*-review-event.md"
---

## Prerequisites

- เข้าใจ event-driven architecture concepts
- รู้จัก message brokers (Kafka, RabbitMQ, AWS SQS/SNS)
- เข้าใจ event sourcing และ CQRS patterns
- รู้จัก idempotency และ eventual consistency

## 3.1 Precondition

- มี event-driven components หรือ message queues
- มี access ไปยัง message broker (ถ้าต้องทดสอบ)
- มีสิทธิ์อ่าน/เขียนไฟล์ใน project directory

## 3.2 Prepare

- อ่าน event schemas และ handlers
- ระบุ message broker ที่ใช้
- เตรียม checklist ตาม event-driven best practices
- ทำความเข้าใจ event flow

## 3.3 Execute

1. ตรวจสอบ event schema
   - Event names ที่ descriptive (past tense: UserCreated)
   - Schema versioning
   - Event payload structure
   - Timestamp และ correlation IDs
   - Event types (domain, integration, notification)

2. ตรวจสอบ message broker configuration
   - Durability settings
   - Retention policies
   - Dead letter queues
   - Retry mechanisms
   - Ordering guarantees

3. ตรวจสอบ event handlers
   - Idempotency handling
   - Error handling และ retries
   - Poison pill handling
   - Concurrency control
   - Circuit breaker patterns

4. ตรวจสอบ event sourcing (ถ้ามี)
   - Event store design
   - Snapshot strategies
   - Event replay capabilities
   - Projection rebuilding
   - Consistency boundaries

5. ตรวจสอบ observability
   - Event tracing
   - Metrics (publish rate, consume rate, lag)
   - Dead letter queue monitoring
   - Alerting on processing failures

6. ตรวจสอบ security
   - Event encryption (ถ้ามี sensitive data)
   - Authentication ใน event consumption
   - Authorization ใน event handling
   - Audit logging

7. ตรวจสอบ error scenarios
   - Network partitions
   - Message broker failures
   - Consumer failures
   - Out-of-order messages
   - Duplicate messages

## 3.4 Validate

- [ ] Event schemas มี versioning และ documentation
- [ ] Handlers มี idempotency logic
- [ ] Dead letter queues กำหนดถูกต้อง
- [ ] Retry policies มี backoff strategies
- [ ] Message ordering ถูกจัดการ (ถ้าจำเป็น)
- [ ] Observability ครอบคลุม (metrics, tracing)
- [ ] Error handling ครบถ้วน
- [ ] Security controls ใน place

## 3.5 Verify

- [ ] Events publish ได้สำเร็จ
- [ ] Consumers process events ได้
- [ ] Dead letter queue ทำงานถูกต้อง
- [ ] Retry mechanisms ทำงานได้
- [ ] Metrics แสดงผลถูกต้อง
