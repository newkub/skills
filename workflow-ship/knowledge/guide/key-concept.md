# Key Concept

## แนวคิดหลักของ Workflow-Ship

Workflow-Ship เป็น workflow ที่ออกแบบมาเพื่อ ship code ครบวงจรตั้งแต่ planning ไปจนถึง build และการรัน development server โดยมีแนวคิดหลักดังนี้:

### 1. Sequential Execution

การทำงานตามลำดับขั้นตอนที่ชัดเจนและเคร่งครัด:

- **Ship-code** ต้องทำก่อนเสมอ
- **Run-verify** ต้องทำหลังจาก ship-code เสร็จ
- **Run-dev** ต้องทำหลังจาก verify เสร็จ
- ห้ามข้ามขั้นตอนใดๆ

### 2. Mandatory Ship-Code

Ship-code เป็นขั้นตอนที่บังคับและห้ามข้าม:

- ต้องทำทุกครั้งที่มีการ ship code
- ห้ามใช้คำสั่งอื่นแทน
- ต้องผ่านทุก steps ก่อนดำเนินการต่อ

### 3. Quality Assurance

การทดสอบคุณภาพโค้ดอย่างเป็นระบบ:

- Typecheck ตรวจสอบ type safety
- Lint ตรวจสอบ code quality
- Test ตรวจสอบ functionality
- Development server ตรวจสอบการทำงานจริง

### 4. Loop Until Complete

การทำงานแบบวนซ้ำจนกว่าจะผ่าน:

- ใช้ `/loop-until-complete` สำหรับ verify และ dev
- แก้ไข errors อัตโนมัติ
- ทำงานอัตโนมัติโดยไม่หยุดถาม

### 5. Error Resolution

การแก้ไขปัญหาอย่างเป็นระบบ:

- ใช้ `/resolve-errors` เมื่อพบ error
- วิเคราะห์ root cause
- แก้ไขและทดสอบซ้ำ

## Scope ของ Workflow

Workflow-Ship ครอบคลุม 3 ขั้นตอนหลัก:

1. **Ship Code** - Planning → Build (ไม่มี testing)
2. **Run Verify** - Testing เท่านั้น (typecheck, lint, test)
3. **Run Dev** - Development server

## Expected Outcome

- Code ผ่านการ ship ครบวงจร
- Code ผ่านการ verify ทุกด้าน
- Build สำเร็จ
- Development server ทำงานได้
- ไม่มี critical errors
- Features หลักทำงานได้
