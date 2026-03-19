---
title: Review API Design
description: ตรวจสอบ API design, REST conventions, documentation และ API best practices
auto_execution_mode: 3
file-patterns:
  - "**/workflows/review-api.md"
---

## Prerequisites

- เข้าใจ RESTful API design principles และ HTTP methods
- รู้จัก API versioning strategies และ backward compatibility
- เข้าใจ OpenAPI/Swagger specifications
- รู้จัก authentication/authorization ใน APIs (JWT, OAuth, API keys)

## 3.1 Precondition

- มี API endpoints หรือ API specification ที่ต้องการตรวจสอบ
- มี API documentation (OpenAPI, Swagger, หรืออื่น)
- มีสิทธิ์อ่าน/เขียนไฟล์ใน project directory

## 3.2 Prepare

- อ่าน API documentation หรือ OpenAPI spec
- ระบุ API consumers และ use cases
- เตรียม API testing tools (curl, Postman, Bruno, httpie)
- ทำ checklist ตาม API design best practices

## 3.3 Execute

1. ตรวจสอบ REST conventions
   - HTTP methods ใช้ถูกต้อง (GET, POST, PUT, PATCH, DELETE)
   - URL paths ใช้ nouns ไม่ใช้ verbs (/users ไม่ใช่ /getUsers)
   - Consistent naming conventions (snake_case vs camelCase)
   - Proper use of query parameters vs path parameters

2. ตรวจสอบ HTTP status codes
   - 2xx สำหรับ success (200, 201, 204)
   - 4xx สำหรับ client errors (400, 401, 403, 404, 422)
   - 5xx สำหรับ server errors (500, 502, 503)
   - ไม่ใช้ 200 OK สำหรับ error responses

3. ตรวจสอบ request/response formats
   - JSON format ที่ consistent
   - Content-Type headers ถูกต้อง
   - Accept headers รองรับ
   - Date/time formats (ISO 8601)
   - Null handling ที่ consistent

4. ตรวจสอบ error responses
   - Consistent error format
   - Error messages ที่ actionable
   - Error codes ที่ meaningful
   - ไม่ expose internal details ใน production

5. ตรวจสอบ authentication/authorization
   - Auth mechanisms ที่ secure
   - Token expiration และ refresh
   - Rate limiting
   - CORS configuration ที่ถูกต้อง

6. ตรวจสอบ versioning
   - Version ใน URL (/v1/users) หรือ header
   - Breaking changes ถูก version ใหม่
   - Deprecation strategy

7. ตรวจสอบ documentation
   - OpenAPI/Swagger spec ครบถ้วน
   - Request/response examples
   - Authentication requirements
   - Error scenarios

8. ทดสอบ endpoints

   ```bash
   # ทดสอบด้วย curl หรือ httpie
   http GET :3000/api/v1/users
   http POST :3000/api/v1/users name="test"
   ```

## 3.4 Validate

- [ ] REST conventions ถูกต้องและ consistent
- [ ] HTTP status codes ใช้งานถูกต้อง
- [ ] Request/response formats consistent
- [ ] Error responses มีรูปแบบที่ดี
- [ ] Authentication/authorization ใช้ secure patterns
- [ ] API versioning มี strategy ที่ชัดเจน
- [ ] Documentation ครบถ้วนและ up-to-date
- [ ] Endpoints ทำงานได้ตามที่ document
- [ ] Rate limiting ถูกติดตั้ง (ถ้าจำเป็น)

## 3.5 Verify

- [ ] ยืนยันว่า API ทำงานได้ตาม documentation
- [ ] ทดสอบ backward compatibility (ถ้ามี versioning)
- [ ] ตรวจสอบว่าไม่มี breaking changes ที่ไม่ได้ตั้งใจ
