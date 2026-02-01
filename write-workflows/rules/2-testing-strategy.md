# Testing Strategy Rules

## Strict Rules
- ห้ามเขียน workflow โดยไม่มี test
- ทุก step ต้องมี verification ที่ตรวจสอบได้จริง
- test ต้องผ่านก่อนจะถือว่า workflow เสร็จสมบูรณ์
- ห้าม commit code ที่ไม่ผ่าน test
- test coverage ต้องไม่ต่ำกว่า 90%
- ทุก edge case ต้องมี test

## Write Tests First

### Use Test-Driven Development
- เขียน test ที่ล้มเหลวก่อน
- เขียน workflow ให้ผ่าน test
- refactor workflow ให้สะอาด

### TDD สำหรับ workflow
- กำหนด test case สำหรับทุก step
- ทดสอบ workflow โดยทำตาม step ทั้งหมด
- ตรวจสอบว่า verification steps ทำงานได้
- ทดสอบ edge cases ที่เป็นไปได้
- ทดสอบ workflow บน platform ที่ระบุทั้งหมด

## Run Tests Continuously
- รัน tests ทุกครั้งที่แก้ไข workflow
- ใช้ watch mode สำหรับ development
- fail fast เมื่อพบ error

```
แก้ไข workflow => รัน tests => ตรวจสอบผลลัพธ์
```

## Verification
- ตรวจสอบว่าทุก step มี verification step
- ยืนยัน test coverage >= 90%
- ทดสอบ workflow โดยทำตาม steps ทั้งหมด
- ตรวจสอบว่า edge cases ถูกครอบคลุม
