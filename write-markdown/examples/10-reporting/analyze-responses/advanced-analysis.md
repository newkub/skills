---
description: การวิเคราะห์ AI responses แบบละเอียดพร้อม metrics
title: response-analysis-advanced
tags: [markdown, reporting, analysis, metrics]
goals:
  - แสดงรูปแบบการวิเคราะห์เชิงลึก
  - สอนการใช้ metrics ในการรายงาน
---

## รายงานการวิเคราะห์ละเอียด

### Metrics Dashboard

````markdown
## 📊 Performance Metrics

| Metric | ค่า | เป้าหมาย | สถานะ |
|--------|-----|----------|--------|
| Response Time | 1.8s | < 2.0s | ✅ |
| Token Efficiency | 87% | > 80% | ✅ |
| Accuracy Score | 9.2/10 | > 8.5 | ✅ |
| Completeness | 95% | > 90% | ✅ |
| Coherence | 4.5/5 | > 4.0 | ✅ |

## 📈 Quality Breakdown

```text
ความถูกต้อง    ████████████████████ 95%
ความครบถ้วน    █████████████████░░░ 85%
ความชัดเจน     ███████████████████░ 92%
ความกระชับ     ███████████████░░░░░ 78%
ความสร้างสรรค์  █████████████████░░░ 88%
```
````

### การเปรียบเทียบหลายรอบ

````markdown
## Iteration Comparison

| รอบ | Response Time | Quality | Issues Fixed | New Issues |
|-----|---------------|---------|--------------|------------|
| 1 | 2.1s | 7.5/10 | - | 5 |
| 2 | 1.9s | 8.2/10 | 4 | 2 |
| 3 | 1.8s | 9.2/10 | 2 | 0 |
| 4 | 1.7s | 9.5/10 | 0 | 0 |

**พัฒนาขึ้น:** Response Time ↓ 19%, Quality ↑ 27%
````

### การวิเคราะห์ปัญหา

````markdown
## Issue Analysis

### 🔴 Critical Issues (0)

ไม่พบปัญหาระดับ critical

### 🟠 Warning Issues (2)

| Issue | Severity | แนวทางแก้ไข |
|-------|----------|-------------|
| ตัวอย่างซับซ้อนเกินไป | Medium | แยกเป็นขั้นตอนย่อย |
| ขาด error handling | Medium | เพิ่ม try-catch |

### 🟡 Suggestions (3)

- เพิ่ม comments อธิบายโค้ด
- ใช้ชื่อตัวแปรที่มีความหมายมากขึ้น
- แยกฟังก์ชันที่ยาวเกินไป
````
