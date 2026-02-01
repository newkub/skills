# Planning & Requirements Rules

## Strict Rules
- ห้ามเริ่มเขียน workflow โดยไม่มี requirements ที่ชัดเจน
- ทุก requirement ต้องมี test case ที่ครอบคลุม
- ห้ามข้ามขั้นตอน planning โดยตรงไปเขียน
- ทุก requirement ต้องวัดผลได้ (measurable)
- ห้ามเขียน requirements ที่คลุมเกินไป (scope creep)
- ทุก requirement ต้องมี acceptance criteria ชัดเจน
- ทุก requirement ต้องมี priority และ dependency ที่ชัดเจน

## Define Requirements Clearly
- ระบุ behavior ที่คาดหวังจาก workflow
- กำหนด edge cases ที่เป็นไปได้
- ระบุ constraints ที่ต้องปฏิบัติตาม

## Create Test Cases
- เขียน test สำหรับทุก requirement
- ครอบคลุมทุก edge case
- รวม negative tests

```
ระบุ requirements => สร้าง test cases => เขียน workflow
```

## Verification
- ตรวจสอบว่าทุก requirement มี test case ครบถ้วน
- ยืนยันว่า requirements วัดผลได้
- ตรวจสอบว่าไม่มี scope creep
- ยืนยันว่ามี acceptance criteria สำหรับทุก requirement
