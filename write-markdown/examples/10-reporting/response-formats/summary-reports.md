---
description: รูปแบบรายงานสรุปผลลัพธ์แบบต่างๆ
title: summary-reports
tags: [markdown, reporting, summary]
goals:
  - แสดงรูปแบบการสร้างรายงานสรุป
  - สอนการจัดโครงสร้างข้อมูลสรุป
---

## Executive Summary

````markdown
# Executive Summary

## สรุปผลการดำเนินงาน

**ระยะเวลา:** 15 มี.ค. - 20 มี.ค. 2024  
**จำนวน Tasks:** 25  
**เสร็จสมบูรณ์:** 23 (92%)  
**คงเหลือ:** 2 (8%)

## Key Highlights

| หัวข้อ | ผลลัพธ์ | สถานะ |
|--------|---------|--------|
| Feature A | พัฒนาเสร็จสมบูรณ์ | ✅ |
| Feature B | ทดสอบผ่านทั้งหมด | ✅ |
| Bug Fixes | แก้ไข 15 รายการ | ✅ |
| Documentation | อัพเดทครบถ้วน | ✅ |

## Action Items

- [ ] ติดตามปัญหาที่ค้างอยู่ #234
- [ ] วางแผน sprint ถัดไป
- [ ] Review code รอบสุดท้าย
````

## Progress Report

````markdown
## รายงานความคืบหน้า

### 🎯 Sprint Progress

```text
Sprint 12  ████████████████████░░  85% (17/20)
```

### 📋 Task Breakdown

| ประเภท | ทั้งหมด | เสร็จแล้ว | กำลังทำ | ค้าง |
|--------|---------|-----------|----------|------|
| Features | 8 | 6 | 2 | 0 |
| Bugs | 12 | 11 | 1 | 0 |
| Tasks | 5 | 5 | 0 | 0 |

### 📈 Burn Down Chart (Text)

```text
20 |                                 
   |                            ██  
15 |                        ██  ██  
   |                    ██  ██  ██  
10 |                ██  ██  ██  ██  
   |            ██  ██  ██  ██  ██  
 5 |        ██  ██  ██  ██  ██  ██  
   |    ██  ██  ██  ██  ██  ██  ██  
 0 |________________________________
    Day 1  2   3   4   5   6   7   
    Ideal  ██████████████████████  
    Actual ████████████████░░░░░░░░  
```
````

## Status Report

````markdown
## รายงานสถานะปัจจุบัน

### 🚦 Overall Status: 🟢 On Track

| Component | Status | Progress | Notes |
|-----------|--------|----------|-------|
| Backend API | 🟢 Good | 95% | Ready for staging |
| Frontend | 🟡 Caution | 80% | Some UI pending |
| Database | 🟢 Good | 100% | Complete |
| Tests | 🟢 Good | 90% | All passing |
| Docs | 🟡 Caution | 75% | Need updates |

### ⚠️ Risk Summary

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| Delay in UI | High | Medium | Add resources |
| Integration issues | Medium | Low | Early testing |
````
