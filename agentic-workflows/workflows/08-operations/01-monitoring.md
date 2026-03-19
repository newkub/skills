---
title: Monitoring
description: ติดตามและ monitor ระบบเพื่อให้แน่ใจว่าทำงานอย่างมีประสิทธิภาพ
auto_execution_mode: 3
file-patterns:
  - "workflows/**/*.md"
  - "**/workflows/*.md"
---

## Prerequisites

- มี monitoring tools และ infrastructure พร้อมใช้งาน
- เข้าใจ metrics และ alerts ที่สำคัญ
- มี access สู่ monitoring dashboards และ logs

## 3.1 Precondition

- System กำลังทำงานใน production
- Monitoring tools configured และ working
- Alerting rules ถูกกำหนดแล้ว
- Team พร้อมรับ alerts และ respond

## 3.2 Prepare

- รวบรวม metrics และ KPIs ที่ต้องติดตาม
- เตรียม dashboards และ visualization
- กำหนด thresholds สำหรับ alerts
- เตรียม incident response procedures

## 3.3 Execute

1. Setup monitoring

   - ใช้ `read_file` ตรวจสอบ monitoring configuration
   - ใช้ `run_command` ติดตั้ง monitoring agents
   - กำหนด metrics collection ด้วย `edit`
   - ใช้ `write_to_file` สร้าง dashboard configs

2. Monitor system health

   - ใช้ `run_command` รัน monitoring queries
   - ใช้ `grep_search` วิเคราะห์ logs สำหรับ patterns
   - ใช้ `browser_preview` ดู dashboards
   - บันทึก metrics และ trends

3. Respond to issues

   - ใช้ `code_search` หา root cause ของ issues
   - ใช้ `read_file` อ่าน error logs
   - ใช้ `run_command` รัน diagnostic commands
   - ใช้ `create_memory` บันทึก incidents

## 3.4 Validate

- [ ] Monitoring ครอบคลุมทุก critical components
- [ ] Alerts ทำงานถูกต้องและ timely
- [ ] Dashboards แสดงข้อมูลที่มีประโยชน์
- [ ] Team สามารถ respond ต่อ alerts ได้

## 3.5 Verify

- [ ] ยืนยันว่า monitoring reliable
- [ ] ตรวจสอบว่า alerts ไม่ noisy
- [ ] ยืนยันว่า dashboards accurate
- [ ] ตรวจสอบว่า incident response effective
