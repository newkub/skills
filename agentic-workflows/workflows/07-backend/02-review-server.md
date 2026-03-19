---
title: Review Server Architecture
description: ตรวจสอบ backend architecture, middleware pipeline, request lifecycle, dependency injection และ service organization
auto_execution_mode: 3
file-patterns:
  - "**/workflows/07-backend/*-review-server.md"
---

## Prerequisites

- เข้าใจ backend framework architecture (Express, Fastify, NestJS, Elysia)
- รู้จัก middleware pattern และ request pipeline
- เข้าใจ dependency injection และ inversion of control
- รู้จัก layered architecture (Controller, Service, Repository)

## 3.1 Precondition

- มี backend codebase ที่ต้องตรวจสอบ
- มีสิทธิ์อ่าน/เขียนไฟล์ใน project directory
- เข้าใจ framework ที่ใช้

## 3.2 Prepare

- รวบรวม architecture documentation
- ระบุ framework และ version
- เตรียม checklist ตาม backend architecture best practices
- ทำความเข้าใจ request lifecycle

## 3.3 Execute

1. ตรวจสอบ project structure
   - Layer separation (routes, controllers, services, repositories)
   - Feature-based organization
   - Clear module boundaries
   - Dependency graph ที่ manageable

2. ตรวจสอบ middleware pipeline
   - Middleware execution order
   - Error handling middleware
   - Authentication/authorization middleware
   - Logging และ tracing middleware

3. ตรวจสอบ request lifecycle
   - Request validation (body, params, query)
   - Route handling และ parameter extraction
   - Response formatting
   - Error propagation

4. ตรวจสอบ dependency injection
   - DI container configuration
   - Service registration (singleton, scoped, transient)
   - Constructor injection patterns
   - Circular dependency detection

5. ตรวจสอบ service layer
   - Business logic separation
   - Service interfaces/abstractions
   - Transaction boundaries
   - Cross-cutting concerns (logging, caching)

6. ตรวจสอบ configuration management
   - Environment-based configuration
   - Secrets management
   - Feature flags
   - Configuration validation

7. ตรวจสอบ error handling
   - Global error handling strategy
   - Error classes/hierarchy
   - Error logging และ monitoring
   - User-friendly error responses

## 3.4 Validate

- [ ] Project structure follows layered architecture
- [ ] Middleware pipeline configured correctly
- [ ] Request lifecycle มี validation และ error handling
- [ ] Dependency injection ใช้งานถูกต้อง
- [ ] Service layer มี separation ที่ชัดเจน
- [ ] Configuration management secure
- [ ] Error handling comprehensive

## 3.5 Verify

- [ ] ยืนยันว่า middleware execute ใน correct order
- [ ] ทดสอบ request validation ทุก endpoints
- [ ] ตรวจสอบ DI container registrations
- [ ] ทดสอบ error handling ใน multiple scenarios
