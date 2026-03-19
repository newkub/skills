---
title: Review Database
description: ตรวจสอบ database schema, queries, indexes, migrations และ data integrity
auto_execution_mode: 3
file-patterns:
  - "**/workflows/review-db.md"
---

## Prerequisites

- เข้าใจ database design principles (normalization, indexing, relationships)
- รู้จัก SQL best practices และ query optimization
- เข้าใจ migration strategies (versioning, rollbacks)
- รู้จัก database security (access control, encryption)

## 3.1 Precondition

- มี database schema หรือ migration files
- มี access ไปยัง database หรือ schema files
- มีสิทธิ์อ่าน/เขียนไฟล์ใน project directory
- รู้จัก database engine ที่ใช้ (PostgreSQL, MySQL, SQLite, etc.)

## 3.2 Prepare

- ระบุ database schema หรือ ORM models ที่ต้องตรวจสอบ
- อ่าน existing migrations และ seed data
- เตรียม database tools (psql, mysql cli, migration tools)
- ทำ checklist ตาม database best practices

## 3.3 Execute

1. ตรวจสอบ schema design
   - Normalization level (1NF, 2NF, 3NF)
   - Primary keys และ foreign keys ที่เหมาะสม
   - Data types ที่เหมาะสมกับข้อมูล
   - ไม่มี duplicate data ที่ไม่จำเป็น
   - Table names ใช้ convention ที่ consistent

2. ตรวจสอบ indexes
   - Primary key indexes
   - Foreign key indexes
   - Indexes บน frequently queried columns
   - Composite indexes สำหรับ multi-column queries
   - ไม่มี redundant indexes

3. ตรวจสอบ queries
   - N+1 queries ที่ต้องแก้ไข
   - SELECT * ที่ไม่จำเป็น
   - Missing JOIN conditions
   - Full table scans ที่ควรมี index
   - Subqueries ที่ควรเป็น JOIN

4. ตรวจสอบ migrations
   - Migration files มี version control
   - Rollback scripts สำหรับแต่ละ migration
   - Migrations เป็น idempotent
   - ไม่มี destructive changes ที่ไม่ได้ backup
   - Transaction safety

5. ตรวจสอบ data integrity
   - Constraints (NOT NULL, UNIQUE, CHECK)
   - Cascading deletes/updates
   - Default values ที่เหมาะสม
   - Enum validation (ถ้ามี)

6. ตรวจสอบ security
   - Connection strings ไม่ hardcoded secrets
   - Database user permissions principle of least privilege
   - Sensitive data encrypted (PII, passwords)
   - SQL injection prevention

7. ตรวจสอบ performance
   - Slow query logs
   - Connection pooling configuration
   - Query execution plans
   - Partitioning strategy (ถ้ามี large tables)

## 3.4 Validate

- [ ] Schema normalized อย่างเหมาะสม
- [ ] Indexes ครอบคลุม query patterns ที่สำคัญ
- [ ] ไม่มี N+1 queries ที่รู้จัก
- [ ] Migrations มี rollback strategy
- [ ] Data integrity constraints ครบถ้วน
- [ ] ไม่มี SQL injection vulnerabilities
- [ ] Connection strings secure
- [ ] Sensitive data encrypted

## 3.5 Verify

- [ ] ยืนยันว่า migrations รันได้สำเร็จ
- [ ] ทดสอบ query performance หลัง add indexes
- [ ] ตรวจสอบว่า data integrity constraints ทำงานได้
- [ ] ทดสอบ rollback ของ migrations ล่าสุด
