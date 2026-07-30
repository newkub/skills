---
name: monitoring-and-observability
description: "ตั้งค่า monitoring และ observability สำหรับ production"
triggers: ['user', 'model']
allowed-tools: ['read', 'edit', 'grep', 'glob', 'exec']
---
## Goal

ตั้งค่า monitoring และ observability เพื่อติดตามและสังเกต application ใน production


## Scope

ใช้สำหรับตั้งค่า monitoring และ observability สำหรับ production applications


## Execute

### 1. Monitoring Setup

ตั้งค่า monitoring

- Configure error tracking (Sentry/Bugsnag)
- Setup performance monitoring (Datadog/New Relic)
- Configure uptime monitoring
- Setup log aggregation (Logtail/Papertrail)

### 2. Metrics Collection

เก็บ metrics

- Track error rates
- Track response times
- Track throughput
- Track resource usage (CPU, memory)
- Track business metrics (conversions, signups)

### 3. Alerting Configuration

ตั้งค่า alerting

- Configure error alerts
- Configure performance alerts
- Configure uptime alerts
- Setup on-call rotation


## Rules

### 1. Essential Metrics

ต้อง track metrics สำคัญ

- Error rates ต้อง track
- Response times ต้อง track
- Resource usage ต้อง track
- Business metrics ต้อง track

### 2. Alert Thresholds

ต้องตั้งค่า thresholds ที่เหมาะสม

- ตั้งค่า error rate thresholds
- ตั้งค่า response time thresholds
- ตั้งค่า resource usage thresholds
- ตั้งค่า uptime thresholds

### 3. Documentation

ต้องบันทึก monitoring setup

- บันทึก metrics ที่ track
- บันทึก alerting rules
- บันทึก on-call procedures
- บันทึกใน `docs/monitoring/`


## Expected Outcome

- Error tracking ตั้งค่าเสร็จ
- Performance monitoring ตั้งค่าเสร็จ
- Uptime monitoring ตั้งค่าเสร็จ
- Log aggregation ตั้งค่าเสร็จ
- Metrics collection ตั้งค่าเสร็จ
- Alerting configuration ตั้งค่าเสร็จ
- Monitoring documentation บันทึกเสร็จ
