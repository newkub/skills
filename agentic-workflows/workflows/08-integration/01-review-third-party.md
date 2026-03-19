---
title: Review Third-Party Integrations
description: ตรวจสอบการ integrate กับ external services, SDK usage, webhook handling, rate limiting และ error recovery
auto_execution_mode: 3
file-patterns:
  - "**/workflows/08-integration/*-review-third-party.md"
---

## Prerequisites

- เข้าใจ integration patterns (adapter, facade, anti-corruption layer)
- รู้จัก external APIs และ SDKs
- เข้าใจ webhook security และ verification
- รู้จัก circuit breaker และ retry patterns

## 3.1 Precondition

- มี codebase ที่ integrate กับ third-party services
- มีสิทธิ์อ่าน/เขียนไฟล์ใน project directory
- มี access ไปยัง third-party documentation

## 3.2 Prepare

- รวบรวม list ของ third-party integrations
- ระบุ SDKs และ libraries ที่ใช้
- เตรียม checklist ตาม integration best practices
- ทำความเข้าใจ rate limits และ quotas

## 3.3 Execute

1. ตรวจสอบ SDK/client configuration
   - SDK initialization และ configuration
   - Authentication/credential management
   - Timeout settings
   - Connection pooling

2. ตรวจสอบ error handling
   - HTTP error handling (4xx, 5xx)
   - SDK-specific errors
   - Network failure handling
   - Graceful degradation

3. ตรวจสอบ retry mechanisms
   - Exponential backoff
   - Max retry attempts
   - Jitter สำหรับ distributed systems
   - Circuit breaker pattern

4. ตรวจสอบ rate limiting
   - Rate limit awareness
   - Throttling implementation
   - Queue-based request management
   - Token bucket/leaky bucket patterns

5. ตรวจสอบ webhook handling
   - Webhook signature verification
   - Idempotency handling
   - Webhook payload validation
   - Acknowledgment responses

6. ตรวจสอบ data mapping
   - External data models ไปยัง internal models
   - Data transformation logic
   - Schema validation
   - Data sanitization

7. ตรวจสอบ testing
   - Mocking external services
   - Contract testing
   - Integration test coverage
   - Error scenario testing

## 3.4 Validate

- [ ] SDK clients configured appropriately
- [ ] Error handling comprehensive
- [ ] Retry mechanisms robust
- [ ] Rate limiting respected
- [ ] Webhooks secure และ verified
- [ ] Data mapping accurate
- [ ] Testing covers integration scenarios

## 3.5 Verify

- [ ] ยืนยันว่า integrations ทำงานใน sandbox/test environment
- [ ] ทดสอบ error scenarios กับ external services
- [ ] ตรวจสอบ rate limit compliance
- [ ] ทดสอบ webhook signature verification
