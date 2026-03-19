# Create Plan

## Description

Workflow สำหรับสร้างแผนการ refactor ที่ละเอียดและปลอดภัย

## When to Use

- หลังจากวิเคราะห์ code แล้ว
- ต้องการกำหนดขั้นตอนการ refactor
- ต้องการประเมินเวลาและความเสี่ยง

## Steps

### 1. กำหนดเป้าหมายที่ชัดเจน

เขียนเป้าหมายแบบ SMART:

```markdown
## Refactoring Goals

- **Specific**: ลดขนาด OrderForm.tsx จาก 350 บรรทัดเหลือ <200 บรรทัด
- **Measurable**: Test coverage ต้องไม่ต่ำกว่า 65%
- **Achievable**: แบ่งทำใน 3 รอบ
- **Relevant**: ทำให้ maintain order form ง่ายขึ้น
- **Time-bound**: เสร็จภายใน 2 วัน
```

### 2. แบ่งเป็น Small Steps

แต่ละ step ควร:

- ใช้เวลาไม่เกิน 30-60 นาที
- มี tests ครอบคลุม
- สามารถ commit ได้
- ไม่ทำให้ระบบพัง

```markdown
## Refactoring Steps

### Phase 1: Preparation (Day 1 Morning)

- [ ] Step 1.1: เขียน integration tests สำหรับ OrderForm
- [ ] Step 1.2: สร้าง snapshot tests
- [ ] Step 1.3: รัน tests ให้ผ่านทั้งหมด

### Phase 2: Extract Validation (Day 1 Afternoon)

- [ ] Step 2.1: Extract validateOrder เป็น function แยก
- [ ] Step 2.2: Extract validateProduct เป็น function แยก
- [ ] Step 2.3: ย้าย validation functions ไป validation.ts
- [ ] Step 2.4: รัน tests ให้ผ่าน

### Phase 3: Split Methods (Day 2 Morning)

- [ ] Step 3.1: Extract processOrderHeader จาก processOrder
- [ ] Step 3.2: Extract processOrderItems จาก processOrder
- [ ] Step 3.3: Extract processOrderFooter จาก processOrder
- [ ] Step 3.4: รัน tests ให้ผ่าน

### Phase 4: Cleanup (Day 2 Afternoon)

- [ ] Step 4.1: ลบ unused imports
- [ ] Step 4.2: ปรับปรุง naming
- [ ] Step 4.3: Final review และ merge
```

### 3. กำหนด Rollback Points

ระบุจุดที่สามารถย้อนกลับได้:

```markdown
## Rollback Points

- **RP1**: หลัง Step 1.3 (ถ้า tests มีปัญหา)
- **RP2**: หลัง Step 2.4 (ถ้า validation มีปัญหา)
- **RP3**: หลัง Step 3.4 (ถ้า logic ผิด)

## Recovery Plan

ถ้ามีปัญหาที่แต่ละ RP:

1. Revert กลับไป RP ก่อนหน้า
2. แก้ไขปัญหา
3. เริ่มต้นใหม่จากจุดนั้น
```

### 4. เตรียม Safety Nets

```markdown
## Safety Measures

- [ ] สร้าง branch `refactor/order-form`
- [ ] ตั้งค่า CI ให้รัน tests ทุก commit
- [ ] เตรียม staging environment สำหรับทดสอบ
- [ ] แจ้งทีมให้รู้ว่ามีการ refactor อยู่
- [ ] Schedule code review หลังแต่ละ phase
```

### 5. กำหนด Definition of Done

```markdown
## Definition of Done

- [ ] ทุก tests ผ่าน (unit + integration + e2e)
- [ ] Code coverage >= 65%
- [ ] ไม่มี lint errors
- [ ] Type check ผ่าน
- [ ] Performance ไม่ตก (เทียบกับ baseline)
- [ ] Code review ผ่าน
- [ ] QA ทดสอบผ่าน staging
```

### 6. ประเมิน Effort

| Phase | Estimated Time | Buffer | Risk Level |
|:---|:---|:---|:---|
| Phase 1 | 4 hours | +1 hour | Low |
| Phase 2 | 4 hours | +2 hours | Medium |
| Phase 3 | 4 hours | +2 hours | Medium |
| Phase 4 | 2 hours | +1 hour | Low |
| **Total** | **14 hours** | **+6 hours** | - |

## Plan Template

```markdown
# Refactoring Plan: [Feature/Component Name]

## Overview

- **Target**: OrderForm.tsx, validation.ts
- **Goal**: ลด complexity, แยก concerns
- **Timeline**: 2 วัน
- **Owner**: [Your Name]

## Current State

- OrderForm.tsx: 350 lines, 65% coverage
- Duplicated validation logic
- processOrder(): 65 lines

## Target State

- OrderForm.tsx: <200 lines, >70% coverage
- Validation logic รวมกัน
- Methods: <20 lines ต่อ method

## Steps

[ใส่ steps ตามข้างต้น]

## Risks

1. Order form เป็น business critical
2. Validation logic ซับซ้อน
3. ทีมอื่นกำลังทำงานกับส่วนนี้

## Mitigations

1. เขียน tests เพิ่มก่อน refactor
2. แบ่งเป็น small steps
3. ประสานงานกับทีมอื่น

## Communication Plan

- Day 1: แจ้งทีมเริ่ม refactor
- Day 2: Update progress
- End: Demo ผลลัพธ์
```

## Validation

ก่อนเริ่ม refactor ตรวจสอบ:

- [ ] Plan ครอบคลุมทุก code smells ที่พบ
- [ ] Steps แบ่งย่อยพอที่จะทำทีละ step
- [ ] มี rollback points เพียงพอ
- [ ] ทีมรับรู้และเห็นด้วยกับ plan
- [ ] Definition of Done ชัดเจน

## Next Steps

หลังจากสร้าง plan เสร็จ:

→ ไปที่ [execute-refactor.md](./execute-refactor.md) เพื่อดำเนินการ refactor
