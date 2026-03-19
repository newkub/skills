---
description: ตารางสำหรับตัดสินใจและเลือกทางเลือก
title: decision-matrices
tags: [markdown, reporting, decision, matrix]
goals:
  - แสดงรูปแบบการสร้าง decision matrix
  - สอนการประเมินทางเลือกต่างๆ
---

## Decision Matrix แบบ Weighted

````markdown
## การตัดสินใจเลือก Technology Stack

### Criteria Definition

| Criteria | Weight | Description |
|----------|--------|-------------|
| Learning Curve | 15% | ความง่ายในการเรียนรู้ |
| Performance | 25% | ความเร็วและประสิทธิภาพ |
| Ecosystem | 20% | ความสมบูรณ์ของ ecosystem |
| Community | 15% | ขนาดและความกระตือรือร้นของ community |
| Hiring | 15% | ความง่ายในการหาคน |
| Cost | 10% | ค่าใช้จ่ายทั้งหมด |

### Scoring Matrix

| Framework | Learning | Perf | Eco | Comm | Hiring | Cost | Total |
|-----------|----------|------|-----|------|--------|------|-------|
| **React** | 8×0.15=1.2 | 8×0.25=2.0 | 10×0.2=2.0 | 10×0.15=1.5 | 10×0.15=1.5 | 8×0.1=0.8 | **8.0** |
| **Vue** | 9×0.15=1.35 | 7×0.25=1.75 | 7×0.2=1.4 | 7×0.15=1.05 | 6×0.15=0.9 | 9×0.1=0.9 | **7.35** |
| **Svelte** | 9×0.15=1.35 | 9×0.25=2.25 | 5×0.2=1.0 | 6×0.15=0.9 | 4×0.15=0.6 | 9×0.1=0.9 | **7.0** |
| **Angular** | 6×0.15=0.9 | 7×0.25=1.75 | 8×0.2=1.6 | 8×0.15=1.2 | 8×0.15=1.2 | 7×0.1=0.7 | **7.35** |

### ✅ Decision: React

- คะแนนสูงสุด (8.0/10)
- สมดุลทุกด้าน
- ง่ายต่อการหาทีมพัฒนา
````

## Go/No-Go Decision

````markdown
## การตัดสินใจ Go/No-Go

### Checklist

| Criteria | Requirement | Status | Pass |
|----------|-------------|--------|------|
| Test Coverage | ≥ 80% | 85% | ✅ |
| Security Audit | No critical issues | 0 critical | ✅ |
| Performance | < 2s load time | 1.5s | ✅ |
| Documentation | Complete | 100% | ✅ |
| Budget | ≤ $10,000 | $8,500 | ✅ |
| Timeline | ≤ 4 weeks | 3.5 weeks | ✅ |

### 🟢 Go Decision

**เหตุผล:**

- ผ่านเกณฑ์ทั้งหมด 6/6
- ต่ำกว่างบประมาณ 15%
- เร็วกว่ากำหนด 12.5%

**เงื่อนไข:**

- Monitor performance สัปดาห์แรก
- มี rollback plan พร้อม
````

## Risk Assessment Matrix

````markdown
## การประเมินความเสี่ยง

### Risk Matrix

```text
Impact
  H |   R4    |   R2    |   R1    |
  M |   R5    |   R3    |         |
  L |         |         |   R6    |
       L         M         H
              Probability
```

### Risk Register

| ID | Risk | Probability | Impact | Score | Mitigation |
|----|------|-------------|--------|-------|------------|
| R1 | Database failure | High | High | 🔴 | Backup + failover |
| R2 | API rate limit | Medium | High | 🟠 | Caching strategy |
| R3 | Third-party downtime | Medium | Medium | 🟡 | Fallback provider |
| R4 | Security breach | Low | High | 🟡 | Penetration testing |
| R5 | Scope creep | Low | Medium | 🟢 | Change control |
| R6 | Minor bugs | High | Low | 🟢 | QA process |

**สี:** 🔴 สูง | 🟠 ปานกลาง-สูง | 🟡 ปานกลาง | 🟢 ต่ำ
````
