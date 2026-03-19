---
title: Review API Integration
description: ตรวจสอบการ integrate กับ backend APIs, data fetching, caching, error handling และ request/response patterns
auto_execution_mode: 3
file-patterns:
  - "**/workflows/06-frontend/*-review-api-integration.md"
---

## Prerequisites

- เข้าใจ RESTful APIs และ GraphQL
- รู้จัก data fetching libraries (TanStack Query, SWR, RTK Query)
- เข้าใจ HTTP protocols และ status codes
- รู้จัก caching strategies

## 3.1 Precondition

- มี frontend application ที่ consume APIs
- มี API documentation หรือ OpenAPI spec
- มีสิทธิ์อ่าน/เขียนไฟล์ใน project directory

## 3.2 Prepare

- รวบรวม API endpoints และ documentation
- ระบุ data fetching library ที่ใช้
- เตรียม checklist ตาม API integration best practices
- ทำความเข้าใจ authentication mechanism

## 3.3 Execute

1. ตรวจสอบ data fetching patterns
   - Consistent fetching utilities/functions
   - Centralized API client configuration
   - Request/response interceptors
   - Retry logic และ circuit breaker

2. ตรวจสอบ caching
   - Client-side caching strategy
   - Cache invalidation patterns
   - Stale-while-revalidate (SWR)
   - Optimistic updates (ถ้ามี)

3. ตรวจสอบ loading states
   - Skeleton screens หรือ loading indicators
   - Loading state consistency
   - Progressive loading
   - Loading state management

4. ตรวจสอบ error handling
   - Global error handling
   - Error boundaries (React) หรือ equivalent
   - User-friendly error messages
   - Retry mechanisms

5. ตรวจสอบ authentication
   - Token management (JWT, sessions)
   - Automatic token refresh
   - Secure storage (httpOnly cookies vs localStorage)
   - Logout/cleanup handling

6. ตรวจสอบ request optimization
   - Debouncing/throttling
   - Request deduplication
   - Batch requests
   - Pagination และ infinite scroll

7. ตรวจสอบ type safety
   - API response types
   - Request payload types
   - Type-safe API clients (if using codegen)
   - Runtime validation (ถ้าจำเป็น)

## 3.4 Validate

- [ ] Data fetching มี patterns ที่ consistent
- [ ] Caching strategy มีประสิทธิภาพ
- [ ] Loading states มี UX ที่ดี
- [ ] Error handling ครอบคลุมทุก scenarios
- [ ] Authentication secure และ seamless
- [ ] Requests optimized (debounce, deduplicate)
- [ ] Type safety ครอบคลุม API interfaces

## 3.5 Verify

- [ ] ยืนยันว่า API calls ทำงานถูกต้อง
- [ ] ทดสอบ error scenarios (network, server errors)
- [ ] ตรวจสอบ cache invalidation behavior
- [ ] ทดสอบ authentication flow (login, refresh, logout)
