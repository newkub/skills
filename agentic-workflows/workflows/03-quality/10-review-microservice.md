---
title: Review Microservices
description: ตรวจสอบ microservices architecture, service boundaries, inter-service communication
auto_execution_mode: 3
file-patterns:
  - "**/workflows/03-quality/*-review-microservice.md"
---

## Prerequisites

- เข้าใจ microservices architecture principles
- รู้จัก service mesh, API gateways, service discovery
- เข้าใจ distributed systems challenges
- รู้จัก inter-service communication patterns

## 3.1 Precondition

- มี microservices codebase
- มี service definitions หรือ API contracts
- มีสิทธิ์อ่าน/เขียนไฟล์ใน project directory

## 3.2 Prepare

- อ่าน service definitions และ boundaries
- ระบุ communication protocols (HTTP, gRPC, message queues)
- เตรียม checklist ตาม microservices best practices
- ทำความเข้าใจ system architecture

## 3.3 Execute

1. ตรวจสอบ service boundaries
   - Domain-driven design boundaries
   - Single responsibility per service
   - Loose coupling ระหว่าง services
   - High cohesion ภายใน service

2. ตรวจสอบ API contracts
   - Versioning strategy
   - Backward compatibility
   - Contract testing (Pact, Spring Cloud Contract)
   - OpenAPI/Swagger specs

3. ตรวจสอบ inter-service communication
   - Synchronous vs asynchronous
   - Circuit breaker patterns
   - Retry mechanisms
   - Timeout configurations
   - Bulkhead patterns

4. ตรวจสอบ data consistency
   - Transaction boundaries
   - Saga patterns (orchestration/choreography)
   - Eventual consistency
   - Distributed transactions

5. ตรวจสอบ service discovery
   - Service registry (Consul, Eureka, Kubernetes DNS)
   - Health checks
   - Load balancing
   - Failover mechanisms

6. ตรวจสอบ security
   - Service-to-service authentication (mTLS, JWT)
   - Zero trust architecture
   - API gateway security
   - Secret management

7. ตรวจสอบ observability
   - Distributed tracing
   - Centralized logging
   - Service metrics
   - Health endpoints

8. ตรวจสอบ deployment
   - Independent deployability
   - Database per service
   - Container orchestration
   - Blue-green/canary deployments

## 3.4 Validate

- [ ] Service boundaries ชัดเจนตาม DDD
- [ ] API contracts มี versioning
- [ ] Circuit breakers ติดตั้ง
- [ ] Database per service (ไม่ shared database)
- [ ] Distributed tracing ทำงาน
- [ ] Health checks กำหนดถูกต้อง
- [ ] Security ครอบคลุง service-to-service
- [ ] Independent deployment เป็นไปได้

## 3.5 Verify

- [ ] Services communicate ได้สำเร็จ
- [ ] Circuit breaker ทดสอบกับ simulated failure
- [ ] Distributed trace แสดง service flow
- [ ] Health checks รายงานสถานะถูกต้อง
