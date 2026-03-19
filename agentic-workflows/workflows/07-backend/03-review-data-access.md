---
title: Review Data Access Layer
description: ตรวจสอบ data access patterns, ORM usage, query optimization, connection pooling และ transaction management
auto_execution_mode: 3
file-patterns:
  - "**/workflows/07-backend/*-review-data-access.md"
---

## Prerequisites

- เข้าใจ ORM patterns (Prisma, TypeORM, Drizzle, Sequelize)
- รู้จัก SQL optimization และ query planning
- เข้าใจ database connection pooling
- รู้จัก transaction isolation levels

## 3.1 Precondition

- มี backend codebase ที่ interact กับ database
- มีสิทธิ์อ่าน/เขียนไฟล์ใน project directory
- เข้าใจ database schema และ ORM ที่ใช้

## 3.2 Prepare

- รวบรวม database schema และ ORM models
- ระบุ query patterns ที่ critical
- เตรียม checklist ตาม data access best practices
- ทำความเข้าใจ connection pool configuration

## 3.3 Execute

1. ตรวจสอบ ORM models/entities
   - Model definitions ที่ accurate
   - Relationship mappings (1:1, 1:N, N:M)
   - Indexes ที่ defined ใน models
   - Validation/constraints ใน ORM level

2. ตรวจสอบ repository pattern
   - Repository interfaces/abstractions
   - CRUD operations encapsulation
   - Query method organization
   - Separation จาก business logic

3. ตรวจสอบ query optimization
   - N+1 query detection และ resolution
   - Eager loading vs lazy loading decisions
   - Query batching
   - Raw SQL สำหรับ complex queries (ถ้าจำเป็น)

4. ตรวจสอบ connection management
   - Connection pooling configuration
   - Connection timeout settings
   - Max connections ตาม load requirements
   - Connection cleanup ใน errors

5. ตรวจสอบ transaction management
   - Transaction boundaries
   - ACID compliance
   - Rollback handling
   - Distributed transactions (ถ้ามี)

6. ตรวจสอบ error handling
   - Database error mapping
   - Retry logic สำหรับ transient failures
   - Circuit breaker สำหรับ database calls
   - Fallback strategies

7. ตรวจสอบ migrations
   - Migration organization
   - Version control สำหรับ schema changes
   - Seed data management
   - Rollback procedures

## 3.4 Validate

- [ ] ORM models accurate และ complete
- [ ] Repository pattern implemented correctly
- [ ] Queries optimized (no N+1 problems)
- [ ] Connection pooling configured properly
- [ ] Transaction management robust
- [ ] Error handling comprehensive
- [ ] Migrations organized และ reversible

## 3.5 Verify

- [ ] ยืนยันว่า queries execute ใน reasonable time
- [ ] ทดสอบ connection pool under load
- [ ] ตรวจสอบ transaction rollback behavior
- [ ] ทดสอบ migration rollback procedures
