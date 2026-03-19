---
title: Performance Review
description: ตรวจสอบและปรับปรุงประสิทธิภาพของโค้ดและระบบ
auto_execution_mode: 3
file-patterns:
  - "workflows/**/*.md"
  - "**/workflows/*.md"
---

## Prerequisites

- เข้าใจ performance requirements และ benchmarks
- มี tools สำหรับ profiling และ measurement
- เข้าใจ common performance bottlenecks

## 3.1 Precondition

- Application หรือ code พร้อมสำหรับ testing
- Performance baseline หรือ targets ถูกกำหนด
- Testing environment representative ของ production
- Scope ของ review ชัดเจน

## 3.2 Prepare

- รวบรวม performance requirements และ SLAs
- เตรียม profiling tools (Lighthouse, Chrome DevTools, etc.)
- กำหนด test scenarios และ load patterns
- เตรียม monitoring และ measurement setup

## 3.3 Execute

1. รวบรวม baseline metrics

   - ใช้ `run_command` รัน load tests (k6, artillery, etc.)
   - ใช้ `run_command` รัน profiling tools
   - ใช้ `browser_preview` และ `mcp5_*` รัน Lighthouse สำหรับ web
   - ใช้ `read_file` อ่าน performance logs
   - บันทึก current performance metrics

2. Identify bottlenecks

   - ใช้ `code_search` หา potential bottlenecks (N+1 queries, loops, etc.)
   - ใช้ `grep_search` หา inefficient patterns
   - ใช้ `read_file` อ่าน critical paths และ hot spots
   - ใช้ `run_command` รัน profiling เพื่อ find slow functions
   - ใช้ `search_web` หา performance best practices สำหรับ tech stack

3. Optimize และ improve

   - ใช้ `edit` หรือ `multi_edit` apply optimizations
   - Optimize database queries, algorithms, data structures
   - Implement caching ถ้าเหมาะสม
   - ใช้ `run_command` ทดสอบแต่ละ optimization
   - ใช้ `read_file` ตรวจสอบ optimized code

4. Validate improvements

   - ใช้ `run_command` รัน performance tests อีกครั้ง
   - Compare metrics กับ baseline
   - ใช้ `browser_preview` ทดสอบ user experience
   - ใช้ `mcp5_*` รัน automated performance checks
   - Document improvements และ trade-offs

## 3.4 Validate

- [ ] Performance targets achieved (response time, throughput)
- [ ] Bottlenecks ถูก eliminate หรือ reduce
- [ ] No functionality broken จาก optimizations
- [ ] Resource usage (CPU, memory) อยู่ใน acceptable limits
- [ ] Scalability tested ถ้า applicable

## 3.5 Verify

- [ ] ยืนยันว่า improvements measurable และ sustainable
- [ ] ตรวจสอบว่า optimizations ไม่ introduce complexity ที่มากเกินไป
- [ ] ยืนยันว่า stakeholders ยอมรับ performance
- [ ] ตรวจสอบว่า monitoring ตั้งค่าสำหรับ track performance ใน production
- [ ] ยืนยันว่าพร้อมสำหรับ production
