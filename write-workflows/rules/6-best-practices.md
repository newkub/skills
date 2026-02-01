# Best Practices Rules

## Strict Rules
- workflow ไม่ควรเกิน 300 บรรทัด และ 15 steps
- ถ้าเกินเกณฑ์ ต้อง refactor โดยใช้ [refactor-workflows](refactor-workflows.md)
- ทุก workflow ต้อง self-contained และอธิบายตัวเองได้ครบถ้วน
- ห้ามใช้คำที่สับสนหรือมีหลายความหมาย
- ห้ามใช้ magic numbers หรือ magic strings
- ห้ามใช้ hardcoded paths หรือ URLs
- ทุก example ต้องทำงานได้จริง
- ทุก section ต้องมี purpose ที่ชัดเจน
- ทุก step ต้องมี expected outcome ที่วัดได้

## Best Practices Summary

### Naming & Structure
- Workflow Name: kebab-case (เช่น `setup-nuxt`, `deploy-vite`)
- Section Names: ภาษาอังกฤษ ชัดเจน กระชับ
- File Names: ตรงกับ frontmatter `name` ทุกตัวอักษร

### Design Principles
- Single Responsibility: แต่ละ workflow ทำอย่างเดียวอย่างดี
- Step Granularity: แต่ละ step ทำได้ใน 5-10 นาที
- Dependency Management: เรียงลำดับ step ตาม dependency ที่ถูกต้อง
- Error Handling: ระบุวิธีจัดการ error ในแต่ละ step

### Writing Standards
- Clarity First: เขียนให้ผู้เริ่มต้นเข้าใจได้ทันที
- Minimal Context: ให้เพียงพอแต่ไม่เกินไป
- Action-Oriented: แต่ละประโยคต้องบอกวิธีทำชัดเจน
- No Ambiguity: ห้ามใช้คำที่สับสนหรือหลายความหมาย

### Documentation Standards
- Self-Contained: workflow ต้องอธิบายตัวเองได้ครบถ้วน
- External References: ใช้เฉพาะเมื่อจำเป็นและระบุชัดเจน
- Version Awareness: ระบุ version ของ tools ที่ใช้
- Platform Specific: ระบุ platform ถ้าจำเป็น (Windows, macOS, Linux)

### Maintenance
- อัปเดต workflow เมื่อมีการเปลี่ยนแปลง
- ระบุถ้า workflow เลิกใช้แล้ว
- บันทึกการเปลี่ยนแปลงสำคัญ
- รับ feedback และปรับปรุงอย่างต่อเนื่อง

## Anti-Patterns

❌ "แก้ไขไฟล์ config" → ✅ "แก้ไขไฟล์ `package.json` ใน section `dependencies`"

❌ "ติดตั้ง, ตั้งค่า, ทดสอบ, ติดตั้ง" → ✅ "ติดตั้ง => ตั้งค่า => ทดสอบ"

❌ "ใช้ port 3000" → ✅ "ใช้ port 3000 (สามารถปรับได้ใน config)"

❌ "ติดตั้ง dependencies" → ✅ "ติดตั้ง dependencies => ตรวจสอบ version"

## Verification
- ตรวจสอบความยาว workflow <= 300 บรรทัด
- ยืนยันจำนวน steps <= 15
- ตรวจสอบว่า workflow self-contained
- ยืนยันว่าทุก example ทำงานได้จริง
- ตรวจสอบว่าไม่มี magic numbers/strings
