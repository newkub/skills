---
description: แนวทางการอัปเดตกฎส่วนกลางใน global_rules.md ตามมาตรฐาน
---

# Update Global Rules Workflow

## Part 1: Planning & Requirements

### 1. Define Requirements

### 1.1 Specify Requirements Clearly
- ระบุ rule ใหม่ที่ต้องเพิ่มใน global_rules.md
- กำหนดตำแหน่งที่จะเพิ่ม rule ใหม่
- ระบุว่า rule ใหม่ไม่ซ้ำกับ rule เดิม

### 1.2 Create Test Cases
- ตรวจสอบว่า rule ใหม่เพิ่มเข้าไปในไฟล์ถูกต้อง
- ตรวจสอบว่าไม่ทับซ้อนกับ rule เดิม
- ตรวจสอบว่า formatting ถูกต้องตามมาตรฐาน

```
ระบุ requirements => สร้าง test cases => อัปเดต global rules
```

## Part 2: Testing Strategy

### 2.1 Write Tests First

### 2.2 Use Test-Driven Development
- อ่านไฟล์ global_rules.md ปัจจุบัน
- ตรวจสอบตำแหน่งที่จะเพิ่ม rule ใหม่
- เพิ่ม rule ใหม่ตามรูปแบบที่กำหนด
- ตรวจสอบว่า rule ใหม่ถูกเพิ่มอย่างถูกต้อง

**TDD สำหรับ update global rules:**
- กำหนด test case สำหรับการเพิ่ม rule
- ทดสอบการอ่านไฟล์ก่อนแก้ไข
- ทดสอบการเพิ่ม rule ใหม่
- ตรวจสอบว่า formatting ถูกต้อง
- ทดสอบว่าไม่มี rule ซ้ำ

### 2.3 Run Tests Continuously
- ตรวจสอบไฟล์หลังการแก้ไขทุกครั้ง
- ตรวจสอบความสมบูรณ์ของไฟล์
- fail fast เมื่อพบ error

```
แก้ไข global rules => ตรวจสอบไฟล์ => ยืนยันการเปลี่ยนแปลง
```

## Part 3: Writing Guidelines

### 3.1 Writing Standards

### 3.2 Section Ordering
- **Length:** สูงสุด 20 คำต่อประโยค
- **Voice:** Active voice เท่านั้น
- **Tone:** Direct, imperative, actionable
- **Clarity:** ประโยคต้องมี subject + verb + object ชัดเจน
- **Spacing:** เว้นว่าง 1 บรรทัดด้านล่าง heading
- **Ordering:** AI ต้องปฏิบัติตามลำดับที่ระบุอย่างเคร่งครัด

### 3.3 Sentence Structure
ใช้เฉพาะคำเชื่อมที่ระบุ:
`ถ้า`, `แล้ว`, `ก็ต่อเมื่อ`, `หลังจาก`, `เช่น`, `และ`, `หรือ`, `จากนั้น`, `เพื่อ`, `โดย`

**Forbidden:** คำเชื่อมแบบภาษาพูด, คำที่ไม่ชัดเจน

### 3.4 Rule Format
ทุก rule ต้องมี:
- **Title:** ขึ้นต้นด้วย ** และกระชับ
- **Description:** อธิบาย rule ใน 1-2 ประโยค
- **Placement:** อยู่ใน section ที่เหมาะสม

## Part 4: Update Global Rules

### 4.1 Handle Rules Properly
- ระบุ rule ใหม่ที่ต้องเพิ่มอย่างชัดเจน
- ให้เหตุผลที่ต้องเพิ่ม rule ใหม่
- ระบุตำแหน่งที่เหมาะสมสำหรับ rule ใหม่
- ให้ตัวอย่างการใช้ rule ใหม่
- ตรวจสอบว่า rule ใหม่ไม่ซ้ำกับ rule เดิม

### 4.2 Add New Rules
1. อ่านไฟล์ global_rules.md ปัจจุบัน
2. ตรวจสอบว่า rule ใหม่ไม่มีอยู่แล้ว
3. หาตำแหน่งที่เหมาะสมสำหรับเพิ่ม rule ใหม่
4. เพิ่ม rule ใหม่ตามรูปแบบที่กำหนด
5. ตรวจสอบว่า formatting ถูกต้อง

### 4.3 Verify Changes
1. ตรวจสอบว่า rule ใหม่ถูกเพิ่มอย่างถูกต้อง
2. ตรวจสอบว่าไม่มี rule ซ้ำกัน
3. ตรวจสอบว่า formatting ถูกต้องตามมาตรฐาน
4. ตรวจสอบว่าไฟล์ยังคงสมบูรณ์

## Part 5: Usage

### 5.1 Adding New Rules
ทำตามขั้นตอนนี้เมื่อเพิ่ม rule ใหม่:

1. ระบุ rule ใหม่ที่ต้องการเพิ่ม
2. อ่านไฟล์ global_rules.md ปัจจุบัน
3. ตรวจสอบว่า rule ใหม่ไม่ซ้ำกับ rule เดิม
4. หาตำแหน่งที่เหมาะสมสำหรับ rule ใหม่
5. เพิ่ม rule ใหม่ตามรูปแบบที่กำหนด
6. ตรวจสอบการเปลี่ยนแปลง

**Rules:**
- ต้องระบุ rule ใหม่อย่างชัดเจน
- ต้องอ่านไฟล์ปัจจุบันก่อนแก้ไข
- ต้องตรวจสอบว่าไม่ซ้ำกับ rule เดิม
- ต้องเพิ่ม rule ใหม่ตามรูปแบบที่กำหนด
- ต้องตรวจสอบการเปลี่ยนแปลง

### 5.2 Quality Assurance
ตรวจสอบคุณภาพก่อนเสร็จสิ้น:

1. ตรวจสอบว่า rule ใหม่เพิ่มถูกต้อง
2. ตรวจสอบว่า formatting ถูกต้อง
3. ตรวจสอบว่าไม่มี rule ซ้ำกัน
4. ตรวจสอบว่าไฟล์ยังคงสมบูรณ์
5. ตรวจสอบว่า rule ใหม่มีประโยชน์

**Rules:**
- ต้องมีการตรวจสอบคุณภาพทุกครั้ง
- ต้องตรวจสอบว่า rule ใหม่เพิ่มถูกต้อง
- ต้องตรวจสอบว่า formatting ถูกต้อง
- ต้องตรวจสอบว่าไม่มี rule ซ้ำกัน
- ต้องตรวจสอบว่า rule ใหม่มีประโยชน์

## Verification
1. ตรวจสอบว่า rule ใหม่ถูกเพิ่มใน global_rules.md
2. ทดสอบด้วยการอ้างอิง `@[global_rules.md]` ใน chat
3. ตรวจสอบว่า rule ใหม่ทำงานตามที่คาดหวัง
