---
title: Review GraphQL
description: ตรวจสอบ GraphQL schema, queries, resolvers และ best practices
auto_execution_mode: 3
file-patterns:
  - "**/workflows/03-quality/*-review-graphql.md"
---

## Prerequisites

- เข้าใจ GraphQL concepts (schema, types, queries, mutations)
- รู้จัก GraphQL best practices (N+1 problem, dataloader)
- เข้าใจ GraphQL security (depth limiting, complexity analysis)
- รู้จัก federation และ schema stitching

## 3.1 Precondition

- มี GraphQL schema หรือ API
- มี GraphQL server ที่สามารถ introspect ได้
- มีสิทธิ์อ่าน/เขียนไฟล์ใน project directory

## 3.2 Prepare

- อ่าน GraphQL schema
- ระบุ GraphQL framework (Apollo, Relay, Strawberry)
- เตรียม GraphQL validation tools
- ทำ checklist ตาม GraphQL best practices

## 3.3 Execute

1. ตรวจสอบ schema design
   - Type names ใช้ PascalCase
   - Field names ใช้ camelCase
   - Enum names ใช้ SCREAMING_SNAKE_CASE
   - Descriptions สำหรับ types และ fields
   - Non-null types ที่เหมาะสม

2. ตรวจสอบ queries และ mutations
   - Query names ที่ descriptive
   - Mutation names เป็น verbs (createUser, deletePost)
   - Input types สำหรับ complex arguments
   - Pagination (cursor-based หรือ offset)

3. ตรวจสอบ N+1 query problem
   - DataLoader pattern
   - Batching และ caching
   - Field-level resolver optimization
   - Database query optimization

4. ตรวจสอบ security
   - Query depth limiting
   - Complexity analysis
   - Rate limiting
   - Authentication/authorization
   - Introspection ใน production

5. ตรวจสอบ error handling
   - Error extensions
   - User-friendly error messages
   - Error codes
   - ไม่ expose internal errors

6. ตรวจสอบ subscriptions (ถ้ามี)
   - WebSocket configuration
   - Authentication ใน subscriptions
   - Backpressure handling
   - Cleanup logic

7. ตรวจสอบ federation (ถ้ามี)
   - @key directives
   - Entity resolution
   - Gateway configuration
   - Schema composition

## 3.4 Validate

- [ ] Schema naming conventions consistent
- [ ] Types และ fields มี descriptions
- [ ] N+1 problem ถูกจัดการด้วย DataLoader
- [ ] Query depth limiting ถูกติดตั้ง
- [ ] Complexity analysis ทำงาน
- [ ] Error handling ครอบคลุม
- [ ] Authentication/authorization ถูกต้อง
- [ ] Subscriptions มี proper cleanup (ถ้ามี)

## 3.5 Verify

- [ ] Schema introspection ทำงานได้
- [ ] Queries/mutations รันได้สำเร็จ
- [ ] ทดสอบ N+1 scenarios
- [ ] ทดสอบ complex queries กับ depth limit
