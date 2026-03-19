---
title: Review Database Design
description: ตรวจสอบ database schema, relationships, indexing, normalization และ query patterns
auto_execution_mode: 3
file-patterns:
  - "**/workflows/04-design/*-review-db-design.md"
---

## Prerequisites

- เข้าใจ relational database design (normalization, constraints)
- รู้จัก NoSQL database patterns
- เข้าใจ indexing strategies และ query optimization
- รู้จัก data modeling techniques

## 3.1 Precondition

- มี database schema หรือ migration files
- มีสิทธิ์อ่าน/เขียนไฟล์ใน project directory
- เข้าใจ data access patterns และ query requirements

## 3.2 Prepare

- รวบรวม ER diagrams หรือ schema documentation
- ระบุ query patterns (read-heavy, write-heavy, mixed)
- เตรียม checklist ตาม database design best practices
- ทำความเข้าใจ database engine ที่ใช้

## 3.3 Execute

1. ตรวจสอบ table/entity design
   - Normalization level (3NF สำหรับ OLTP, denormalized สำหรับ OLAP)
   - Single responsibility ของ tables
   - Meaningful table และ column names
   - Appropriate data types

2. ตรวจสอบ relationships
   - Foreign key constraints ที่ appropriate
   - Relationship cardinality (1:1, 1:N, N:M)
   - Cascade behaviors (ON DELETE, ON UPDATE)
   - Avoid orphaned records

3. ตรวจสอบ indexing
   - Primary keys ที่ appropriate
   - Foreign key indexes
   - Query-driven secondary indexes
   - Avoid over-indexing

4. ตรวจสอบ constraints
   - NOT NULL constraints ที่ logical
   - UNIQUE constraints สำหรับ business keys
   - CHECK constraints สำหรับ data integrity
   - Default values ที่ sensible

5. ตรวจสอบ query patterns
   - N+1 query detection
   - Query complexity และ execution plans
   - Join strategies
   - Pagination patterns

6. ตรวจสอบ data integrity
   - Transaction boundaries
   - ACID compliance (ถ้าจำเป็น)
   - Consistency checks
   - Data validation layers

7. ตรวจสอบ migrations
   - Version control สำหรับ schema changes
   - Backward compatibility
   - Rollback strategies
   - Data migration plans

## 3.4 Validate

- [ ] Schema normalized/denormalized ตาม use case
- [ ] Relationships มี constraints ที่ appropriate
- [ ] Indexes support query patterns หลัก
- [ ] Data integrity enforced ผ่าน constraints
- [ ] Query patterns optimized
- [ ] Migration strategy มี version control
- [ ] Documentation ครอบคลุม schema design

## 3.5 Verify

- [ ] ยืนยันว่า schema รองรับ business requirements
- [ ] ทดสอบ query performance กับ production-like data
- [ ] ตรวจสอบ referential integrity
- [ ] ทดสอบ migration rollback procedures
