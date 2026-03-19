---
title: Review Logging & Observability
description: ตรวจสอบ logging practices, monitoring, tracing และ observability
auto_execution_mode: 3
file-patterns:
  - "**/workflows/review-logging.md"
---

## Prerequisites

- เข้าใจ logging best practices (levels, structured logging)
- รู้จัก observability pillars (logs, metrics, traces)
- เข้าใจ monitoring tools (Prometheus, Grafana, DataDog)
- รู้จัก distributed tracing (OpenTelemetry, Jaeger)

## 3.1 Precondition

- มี logging/observability configuration
- มี application ที่สามารถรันและ generate logs
- มีสิทธิ์อ่าน/เขียนไฟล์ใน project directory

## 3.2 Prepare

- อ่าน logging configuration และ code
- ระบุ observability requirements
- เตรียม checklist ตาม logging best practices
- ตรวจสอบ monitoring infrastructure (ถ้ามี)

## 3.3 Execute

1. ตรวจสอบ logging levels
   - ERROR สำหรับ errors ที่ต้อง investigate
   - WARN สำหรับ potential issues
   - INFO สำหรับ normal operations
   - DEBUG สำหรับ development troubleshooting
   - ไม่ใช้ console.log ใน production code

2. ตรวจสอบ log format
   - Structured logging (JSON) เพื่อ parsing
   - Timestamps ใน ISO 8601 format
   - Correlation IDs สำหรับ request tracing
   - Service name และ version

3. ตรวจสอบ sensitive data
   - ไม่มี PII (Personally Identifiable Information)
   - ไม่มี passwords หรือ tokens
   - ไม่มี credit card numbers
   - ไม่มี session IDs ใน production logs

4. ตรวจสอบ error logging
   - Stack traces ใน error logs
   - Context ที่เพียงพอสำหรับ debugging
   - Error codes หรือ categories
   - ไม่มี swallowed exceptions

5. ตรวจสอบ log volume
   - ไม่มี excessive logging (performance impact)
   - Sampling สำหรับ high-volume logs (ถ้าจำเป็น)
   - Log rotation และ retention policies
   - Storage costs ที่เหมาะสม

6. ตรวจสอบ metrics
   - Application metrics (requests, latency, errors)
   - Business metrics (conversions, revenue)
   - Infrastructure metrics (CPU, memory, disk)
   - Metric naming conventions ที่ consistent

7. ตรวจสอบ tracing (ถ้ามี)
   - Request IDs propagate ทั่วทั้ง system
   - Span names ที่ descriptive
   - Distributed tracing ครอบคลุม service calls
   - Sampling rate ที่เหมาะสม

8. ตรวจสอบ alerting
   - Alerts บน critical errors
   - Alert fatigue ไม่สูง (ไม่ alert บนทุก error)
   - Escalation policies
   - Runbooks สำหรับแต่ละ alert

9. ตรวจสอบ dashboards
   - Key metrics มองเห็นได้ชัดเจน
   - Dashboards ตาม role (dev, ops, business)
   - Real-time หรือ near real-time data
   - Historical trends

## 3.4 Validate

- [ ] Logging levels ใช้งานถูกต้อง
- [ ] ใช้ structured logging (JSON)
- [ ] ไม่มี sensitive data ใน logs
- [ ] Error logs มี stack traces และ context
- [ ] Correlation IDs สำหรับ request tracing
- [ ] Metrics ครอบคลุง application และ business
- [ ] Tracing propagate ทั่วทั้ง system (ถ้ามี)
- [ ] Alerting บน critical issues ไม่ noisy

## 3.5 Verify

- [ ] Application รันและ generate logs ได้
- [ ] Logs สามารถ parse และ query ได้
- [ ] Alerts trigger ได้จริง (ทดสอบด้วย simulated error)
- [ ] Dashboards แสดง metrics ถูกต้อง
- [ ] Tracing แสดง request flow ครบถ้วน
