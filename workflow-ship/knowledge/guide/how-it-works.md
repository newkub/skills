# How It Works

## วิธีการทำงานของ Workflow-Ship

Workflow-Ship ทำงานตามลำดับขั้นตอนที่เป็นระบบ แบ่งเป็น 3 phases หลัก:

## Phase 1: Ship Code

### วัตถุประสงค์

Ship code ครบวงจรจาก planning ไปจนถึง build

### ขั้นตอน

1. **ทำ `/ship-code`**
   - Planning และ analysis
   - เขียน code ตาม plan
   - Build และ compilation
   - ไม่รวม testing ใน phase นี้

### Output

- Code ที่ถูกเขียนและ build เสร็จสมบูรณ์
- พร้อมสำหรับการ testing

## Phase 2: Run Verify

### วัตถุประสงค์

ทดสอบคุณภาพโค้ดด้วย typecheck, lint, และ test

### ขั้นตอน

1. **ทำ `/loop-until-complete`**
   - วนซ้ำจนกว่าจะผ่านทุก tests
2. **ภายใน loop ทำ `/run-verify`**
   - Typecheck: ตรวจสอบ type safety
   - Lint: ตรวจสอบ code quality
   - Test: รัน test suite
3. **เมื่อพบ error**
   - ทำ `/resolve-errors`
   - วิเคราะห์ root cause
   - แก้ไขและทดสอบซ้ำ

### Output

- Code ผ่าน typecheck
- Code ผ่าน linting
- Code ผ่าน test suite
- พร้อมสำหรับการรัน dev server

## Phase 3: Run Dev

### วัตถุประสงค์

รัน development server และตรวจสอบการทำงาน

### ขั้นตอน

1. **ทำ `/loop-until-complete`**
   - วนซ้ำจนกว่า dev server ทำงานได้
2. **ภายใน loop ทำ `/run-dev`**
   - เริ่ม development server
   - ตรวจสอบการทำงาน
   - ตรวจสอบ critical errors
3. **เมื่อพบ error**
   - ทำ `/resolve-errors`
   - แก้ไขปัญหา
   - รันซ้ำ

### Output

- Development server ทำงานได้
- ไม่มี critical errors
- Features หลักทำงานได้
- พร้อมสำหรับการ development ต่อ

## Flow Diagram

```text
Start
  ↓
[Ship Code]
  ↓ (Planning → Build)
[Run Verify]
  ↓ (Typecheck → Lint → Test)
[Run Dev]
  ↓ (Start Dev Server)
End
```

## Error Handling

เมื่อพบ error ในแต่ละ phase:

1. **ตรวจสอบ error type**
   - Type errors
   - Lint errors
   - Test failures
   - Runtime errors

2. **วิเคราะห์ root cause**
   - ดู error messages
   - ตรวจสอบ stack traces
   - วิเคราะห์ code context

3. **แก้ไข**
   - ใช้ `/resolve-errors`
   - แก้ไข root cause
   - ทำ minimal changes

4. **ทดสอบซ้ำ**
   - รัน verify ซ้ำ
   - รัน dev ซ้ำ
   - วน loop จนกว่าจะผ่าน

## Automation

Workflow-Ship ทำงานอัตโนมัติ:

- ไม่หยุดถามผู้ใช้
- แก้ไข errors อัตโนมัติ
- วน loop จนกว่าจะผ่าน
- ทำงานต่อเนื่องโดยไม่ขัดจังหวะ
