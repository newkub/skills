---
title: Review Backend API Design
description: ตรวจสอบ API endpoints, request/response formats, REST conventions, versioning และ API documentation
auto_execution_mode: 3
file-patterns:
  - "**/workflows/07-backend/*-review-api.md"
---

## Prerequisites

- เข้าใจ RESTful API design principles
- รู้จัก OpenAPI/Swagger specification
- เข้าใจ HTTP methods, status codes, headers
- รู้จัก API versioning strategies

## 3.1 Precondition

- มี backend API codebase หรือ documentation
- มีสิทธิ์อ่าน/เขียนไฟล์ใน project directory
- เข้าใจ business domain และ use cases

## 3.2 Prepare

- รวบรวม API documentation หรือ OpenAPI spec
- ระบุ framework ที่ใช้ (Express, Fastify, Elysia, etc.)
- เตรียม checklist ตาม REST API best practices
- ทำความเข้าใจ authentication/authorization mechanisms

## 3.3 Execute

1. ตรวจสอบ URL structure และ naming
   - Resource-based URLs (/users, /orders)
   - Plural nouns สำหรับ collections
   - Hierarchical relationships (/users/123/orders)
   - Avoid verbs in URLs

2. ตรวจสอบ HTTP methods
   - GET สำหรับ read operations
   - POST สำหรับ create
   - PUT/PATCH สำหรับ update
   - DELETE สำหรับ remove
   - Appropriate status codes (200, 201, 204, 400, 404, 500)

3. ตรวจสอบ request/response formats
   - JSON structure ที่ consistent
   - Field naming conventions (camelCase vs snake_case)
   - Date/time formats (ISO 8601)
   - Null handling strategy

4. ตรวจสอบ pagination และ filtering
   - Pagination patterns (offset, cursor-based)
   - Filtering parameters
   - Sorting options
   - Field selection (sparse fieldsets)

5. ตรวจสอบ error responses
   - Consistent error format
   - HTTP status codes ที่ appropriate
   - Error codes/messages ที่ actionable
   - Validation error details

6. ตรวจสอบ API versioning
   - Version in URL (/v1/users) หรือ headers
   - Backward compatibility strategy
   - Deprecation notices
   - Migration guides

7. ตรวจสอบ documentation
   - OpenAPI/Swagger spec ที่ complete
   - Request/response examples
   - Authentication requirements
   - Rate limiting info

## 3.4 Validate

- [ ] URL structure follows REST conventions
- [ ] HTTP methods ใช้ถูกต้อง
- [ ] Request/response formats consistent
- [ ] Pagination และ filtering รองรับ
- [ ] Error responses well-structured
- [ ] API versioning strategy ชัดเจน
- [ ] Documentation complete และ up-to-date

## 3.5 Verify

- [ ] ยืนยันว่า API ผ่าน tests ทั้งหมด
- [ ] ทดสอบ error scenarios หลายๆ แบบ
- [ ] ตรวจสอบ backward compatibility
- [ ] ทดสอบ rate limiting (ถ้ามี)
