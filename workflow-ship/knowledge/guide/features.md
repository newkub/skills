# Features

## ฟีเจอร์หลักของ Workflow-Ship

### 1. Sequential Execution

การทำงานตามลำดับที่เคร่งครัด:

- **Ship-code** ต้องทำก่อนเสมอ
- **Run-verify** ต้องทำหลังจาก ship-code
- **Run-dev** ต้องทำหลังจาก verify
- ห้ามข้ามขั้นตอนใดๆ

### 2. Mandatory Ship-Code

บังคับให้ทำ ship-code ทุกครั้ง:

- ต้องทำทุกครั้งที่มีการ ship code
- ห้ามใช้คำสั่งอื่นแทน
- ต้องผ่านทุก steps ก่อนดำเนินการต่อ

### 3. Quality Assurance

ทดสอบคุณภาพโค้ดอย่างครบถ้วน:

- **Typecheck** - ตรวจสอบ type safety
- **Lint** - ตรวจสอบ code quality
- **Test** - รัน test suite
- **Dev Server** - ตรวจสอบการทำงานจริง

### 4. Loop Until Complete

วนซ้ำจนกว่าจะผ่าน:

- ใช้ `/loop-until-complete` สำหรับ verify และ dev
- แก้ไข errors อัตโนมัติ
- ทำงานอัตโนมัติโดยไม่หยุดถาม

### 5. Error Resolution

แก้ไขปัญหาอย่างเป็นระบบ:

- ใช้ `/resolve-errors` เมื่อพบ error
- วิเคราะห์ root cause
- แก้ไขและทดสอบซ้ำ

### 6. Automated Testing

การทดสอบอัตโนมัติ:

- Typecheck อัตโนมัติ
- Lint อัตโนมัติ
- Test อัตโนมัติ
- Dev server monitoring อัตโนมัติ

### 7. Clear Separation

แยก responsibilities ชัดเจน:

- **Ship-code**: Planning → Build (ไม่มี testing)
- **Run-verify**: Testing เท่านั้น
- **Run-dev**: Development server

### 8. Continuous Monitoring

ตรวจสอบอย่างต่อเนื่อง:

- Monitor build status
- Monitor test results
- Monitor dev server health
- Monitor error logs

### 9. Minimal Changes

แก้ไขแบบ minimal:

- แก้ไข root cause เท่านั้น
- ไม่ over-engineer
- ใช้ single-line changes เมื่อเป็นไปได้
- หลีกเลี่ยง downstream workarounds

### 10. Verification Tools

ใช้เครื่องมือ verification ที่มีอยู่:

- Playwright สำหรับ E2E tests
- Unit tests สำหรับ unit testing
- Linting tools สำหรับ code quality
- Type checkers สำหรับ type safety

## Feature Matrix

| Feature | Ship-Code | Run-Verify | Run-Dev |
|---------|-----------|-----------|---------|
| Planning | ✅ | ❌ | ❌ |
| Build | ✅ | ❌ | ❌ |
| Typecheck | ❌ | ✅ | ❌ |
| Lint | ❌ | ✅ | ❌ |
| Test | ❌ | ✅ | ❌ |
| Dev Server | ❌ | ❌ | ✅ |
| Error Resolution | ✅ | ✅ | ✅ |
| Loop Until Complete | ❌ | ✅ | ✅ |
