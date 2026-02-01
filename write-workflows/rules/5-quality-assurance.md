# Quality Assurance Rules

## Strict Rules
- ห้ามบันทึก workflow ที่ไม่ผ่าน review checklist
- ทุก workflow ต้องทดสอบได้จริงโดยทำตาม step ทั้งหมด
- ห้ามมี lint errors หรือ formatting issues
- test coverage ต้องไม่ต่ำกว่า 90%
- ห้ามบันทึก workflow ที่มี critical issues
- ทุก dependency ต้องมี version ที่ระบุชัดเจน
- ห้ามบันทึก workflow โดยไม่มี peer review

## Review Process
- ตรวจสอบ workflow quality และ test coverage
- verify ว่าทุก step สามารถทำได้จริง
- ตรวจสอบว่า workflow ทำตาม best practices ทั้งหมด

## Automated Tools
รัน tools เหล่านี้เพื่อตรวจสอบคุณภาพ:
- Linters และ formatters
- Static analysis tools
- Test coverage (เป้าหมาย > 80%)

### Quality Metrics
- ไม่มี lint errors หรือ warnings
- Code coverage ตรง threshold ที่กำหนด (> 90%)
- ไม่มี security vulnerabilities
- ไม่มี performance bottlenecks

## Documentation Standards

### Consistency Rules
- ทุก section ต้องเชื่อมโยงกัน ไม่ขัดแย้ง
- terminology ต้องสอดคล้องทั้งไฟล์
- step ต้องไหลตาม logic และ dependency
- ค่าตัวแปร/ตัวอย่างต้องสอดคล้องกัน

### Coherence Requirements
- goal ต้องเชื่อมโยงกับ outcome โดยตรง
- ทุก step ต้องสนับสนุนการบรรลุ goal
- verification ต้องตรวจสอบ outcome ที่ระบุ
- ตัวอย่างต้องสอดคล้องกับ use case
- workflow ต้องสอดคล้องกับ workflows อื่น
- ระบุ dependency กับ workflows อื่นชัดเจน

## Verification & Testing

### Test Verification
- ทุก automated tests ผ่านสำเร็จ
- test coverage ตรง threshold ที่กำหนด (เช่น > 90%)
- ทดสอบ edge cases ทั้งหมด
- ทดสอบ negative test cases ทั้งหมด
- ผ่าน security testing ทั้งหมด
- ผ่าน performance testing ทั้งหมด

### Workflow Verification
- ทดสอบ workflow โดยทำตาม step ทั้งหมด
- ตรวจสอบว่าไม่มี step ที่ขัดแย้งกัน
- ตรวจสอบว่าทุก dependency ถูกระบุชัดเจน
- ตรวจสอบว่า workflow ทำงานได้บน platform ที่ระบุ
