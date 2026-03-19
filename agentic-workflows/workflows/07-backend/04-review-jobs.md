---
title: Review Background Jobs
description: ตรวจสอบ background job processing, job queues, scheduling, retries และ job monitoring
auto_execution_mode: 3
file-patterns:
  - "**/workflows/07-backend/*-review-jobs.md"
---

## Prerequisites

- เข้าใจ background job patterns (queues, workers, schedulers)
- รู้จัก job queue systems (Bull, Bee Queue, Agenda, Celery)
- เข้าใจ job retries และ dead letter queues
- รู้จัก cron jobs และ scheduled tasks

## 3.1 Precondition

- มี backend codebase ที่มี background jobs
- มีสิทธิ์อ่าน/เขียนไฟล์ใน project directory
- มี access ไปยัง job queue system (ถ้าต้องทดสอบ)

## 3.2 Prepare

- รวบรวม job definitions และ schedules
- ระบุ job queue system ที่ใช้
- เตรียม checklist ตาม background job best practices
- ทำความเข้าใจ job dependencies และ flows

## 3.3 Execute

1. ตรวจสอบ job definitions
   - Job names ที่ descriptive
   - Job payload structure
   - Priority levels
   - Job types (immediate, delayed, scheduled)

2. ตรวจสอบ job processing
   - Worker configuration (concurrency, rate limiting)
   - Job handler implementations
   - Idempotency handling
   - Job progress tracking

3. ตรวจสอบ retry mechanisms
   - Retry strategies (fixed, exponential backoff)
   - Max retry attempts
   - Dead letter queue configuration
   - Retryable vs non-retryable errors

4. ตรวจสอบ scheduling
   - Cron expression accuracy
   - Timezone handling
   - Job overlap prevention
   - Schedule monitoring

5. ตรวจสอบ error handling
   - Error logging และ alerting
   - Job failure recovery
   - Manual retry mechanisms
   - Poison message handling

6. ตรวจสอบ observability
   - Job queue metrics
   - Processing time tracking
   - Failed job monitoring
   - Dashboard/visibility

7. ตรวจสอบ resource management
   - Memory cleanup หลัง job
   - Connection cleanup
   - CPU throttling (ถ้าจำเป็น)
   - Graceful shutdown handling

## 3.4 Validate

- [ ] Job definitions clear และ consistent
- [ ] Workers configured appropriately
- [ ] Retry mechanisms robust
- [ ] Scheduling accurate และ reliable
- [ ] Error handling comprehensive
- [ ] Observability ครอบคลุม
- [ ] Resource cleanup ใน place

## 3.5 Verify

- [ ] ยืนยันว่า jobs enqueue และ process ได้
- [ ] ทดสอบ retry behavior กับ failing jobs
- [ ] ตรวจสอบ dead letter queue
- [ ] ทดสอบ graceful shutdown กับ running jobs
