---
description: แนวทางการเขียน Workflows สำหรับการอัปเดตกฎส่วนกลางตามมาตรฐานที่กำหนด
---

# Write Workflows for Global Rules Updates

## Part 1: Planning & Requirements

### 1. Define Requirements

### 1.1 Specify Requirements Clearly
- ระบุ rule ใหม่ที่ต้องเพิ่มใน global_rules.md
- กำหนดตำแหน่งที่จะเพิ่ม rule ใหม่อย่างชัดเจน
- ระบุว่า rule ใหม่ไม่ซ้ำกับ rule เดิม
- กำหนด acceptance criteria สำหรับ rule ใหม่

### 1.2 Create Test Cases
- ตรวจสอบว่า rule ใหม่เพิ่มเข้าไปในไฟล์ถูกต้อง
- ตรวจสอบว่าไม่ทับซ้อนกับ rule เดิม
- ตรวจสอบว่า formatting ถูกต้องตามมาตรฐาน
- ทดสอบว่า rule ใหม่มีประสิทธิภาพ

```
ระบุ requirements => สร้าง test cases => เขียน workflow
```

## Part 2: Testing Strategy

### 2. Write Tests First

### 2.1 Use Test-Driven Development
- เขียน test ที่ล้มเหลวก่อนสำหรับ rule ใหม่
- เขียน workflow ให้ผ่าน test ทั้งหมด
- refactor workflow ให้สะอาดและมีประสิทธิภาพ

**TDD สำหรับ workflow:**
- กำหนด test case สำหรับทุก step ใน workflow
- ทดสอบ workflow โดยทำตาม step ทั้งหมด
- ตรวจสอบว่า verification steps ทำงานได้
- ทดสอบ edge cases ที่เป็นไปได้
- ทดสอบ workflow บน platform ที่ระบุทั้งหมด

### 2.2 Run Tests Continuously
- รัน tests ทุกครั้งที่แก้ไข workflow
- ใช้ watch mode สำหรับ development
- fail fast เมื่อพบ error

```
แก้ไข workflow => รัน tests => ตรวจสอบผลลัพธ์
```

## Part 3: Writing Guidelines

### 3. Writing Standards

### 3.1 Section Ordering
- **Length:** สูงสุด 20 คำต่อประโยค
- **Voice:** Active voice เท่านั้น
- **Tone:** Direct, imperative, actionable
- **Clarity:** ประโยคต้องมี subject + verb + object ชัดเจน
- **Spacing:** เว้นว่าง 1 บรรทัดด้านล่าง heading
- **Ordering:** AI ต้องปฏิบัติตามลำดับที่ระบุอย่างเคร่งครัด

### 3.2 Sentence Structure
ใช้เฉพาะคำเชื่อมที่ระบุ:
`ถ้า`, `แล้ว`, `ก็ต่อเมื่อ`, `หลังจาก`, `เช่น`, `และ`, `หรือ`, `จากนั้น`, `เพื่อ`, `โดย`

**Forbidden:** คำเชื่อมแบบภาษาพูด, คำที่ไม่ชัดเจน

### 3.3 Workflow References
**ใช้ markdown link สำหรับเชื่อมโยง workflows:**
- ใช้ `[workflow-name](workflow-name.md)` แทน `@[/workflow-name]`
- ห้ามใช้ `@[/...]` โดยเด็ดขาด
- ระบุชื่อไฟลที่ถูกต้องทุกตัวอักษร
- ห้ามใช้ absolute paths ใน references

## Part 4: Write Robust Workflows

### 4.1 Handle Errors Properly
- ระบุ error types ที่เป็นไปได้ใน workflow
- ให้วิธีจัดการ error ที่ชัดเจน
- ระบุ rollback plans สำหรับแต่ละ error
- ให้ error messages ที่เข้าใจง่าย
- ระบุวิธีการ recover จาก error

### 4.2 Input Validation
- ตรวจสอบทุก input ที่เข้ามาใน workflow
- ระบุ type และ format ที่ต้องการ
- ให้ error messages ที่ชัดเจนสำหรับ invalid inputs
- ตรวจสอบว่า inputs ไม่เป็นอันตราย

### 4.3 Error Recovery
- ระบุวิธีการ recover จาก errors ที่เป็นไปได้
- ให้ rollback mechanisms สำหรับ critical operations
- ตรวจสอบว่า workflow สามารถดำเนินการต่อได้
- บันทึก state สำหรับการ recover

## Part 5: Global Rules Update Workflow

### 5.1 Pre-Update Validation
1. อ่านไฟล์ global_rules.md ปัจจุบัน
2. ตรวจสอบว่า rule ใหม่ไม่มีอยู่แล้ว
3. หาตำแหน่งที่เหมาะสมสำหรับ rule ใหม่
4. ตรวจสอบว่า rule ใหม่สอดคล้องกับ existing rules

### 5.2 Update Process
1. สร้าง backup ของไฟล์ปัจจุบัน
2. เพิ่ม rule ใหม่ตามรูปแบบที่กำหนด
3. ตรวจสอบว่า formatting ถูกต้อง
4. บันทึกการเปลี่ยนแปลง

### 5.3 Post-Update Verification
1. ตรวจสอบว่า rule ใหม่ถูกเพิ่มอย่างถูกต้อง
2. ตรวจสอบว่าไม่มี rule ซ้ำกัน
3. ตรวจสอบว่าไฟล์ยังคงสมบูรณ์
4. ทดสอบว่า rule ใหม่ทำงานตามที่คาดหวัง

## Part 6: Error Handling

### 6.1 Common Errors
- **File not found:** ไฟล์ global_rules.md ไม่พบ
- **Permission denied:** ไม่มีสิทธิ์แก้ไขไฟล์
- **Invalid format:** rule ใหม่ไม่ตรงตามรูปแบบ
- **Duplicate rule:** rule ใหม่ซ้ำกับ rule เดิม

### 6.2 Recovery Strategies
- กู้คืนไฟล์จาก backup ถ้าเกิด error
- แก้ไข format ของ rule ใหม่
- หาตำแหน่งที่เหมาะสมสำหรับ rule ใหม่
- รวม rule ที่ซ้ำกันถ้าจำเป็น

## Part 7: Quality Assurance

### 7.1 Testing Requirements
- ทุก workflow ต้องผ่าน automated tests
- ทุก edge case ต้องมี test
- Test coverage ต้องไม่ต่ำกว่า 90%
- ทุก test ต้องมี description ที่ชัดเจน

### 7.2 Code Quality
- ทุก function ต้องมี type annotations
- ห้ามใช้ `any` types โดยเด็ดขาด
- ทุก critical operation ต้องมี error handling
- ห้ามใช้ hardcoded values โดยไม่ระบุว่าสามารถปรับได้

## Verification
1. ตรวจสอบว่า workflow file สร้างสำเร็จใน `.windsurf/workflows/`
2. ทดสอบด้วยการอ้างอิง `[write-workflows](write-workflows.md)` ใน chat
3. ตรวจสอบว่า workflow ทำงานตามที่คาดหวัง
4. ตรวจสอบว่าทุก test ผ่าน
5. ตรวจสอบว่า error handling ทำงานได้
