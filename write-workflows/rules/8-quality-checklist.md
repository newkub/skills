# Quality Checklist Rules

## Review & Self-Check Checklist

### Frontmatter & Structure
- [ ] Frontmatter ครบถ้วน (name, description, goal, outcome)
- [ ] Name ตรงกับชื่อไฟล์ทุกตัวอักษร (kebab-case)
- [ ] Headings ใช้ภาษาอังกฤษเท่านั้น, Content ใช้ภาษาไทย
- [ ] Technical terms ใช้ภาษาอังกฤษเท่านั้น

### Writing Standards
- [ ] ประโยคสั้นไม่เกิน 20 คำ และใช้ active voice
- [ ] ใช้คำเชื่อมที่ระบุเท่านั้น (ถ้า, แล้ว, ก็ต่อเมื่อ, หลังจาก, เช่น, และ, หรือ, จากนั้น, เพื่อ, โดย)
- [ ] ไม่มีค่าคงที่ที่ไม่ยืดหยุ่น หรือระบุว่าสามารถปรับได้

### Verification & Quality
- [ ] มี verification step ที่ชัดเจนสำหรับทุกส่วนสำคัญ
- [ ] ทุก section เชื่อมโยงกันไม่ขัดแย้ง, terminology สอดคล้อง
- [ ] goal เชื่อมโยงกับ outcome, ทุก step สนับสนุน goal
- [ ] workflow สอดคล้องกับ workflows อื่น, ระบุ dependencies ชัดเจน
- [ ] ความยาวไม่เกิน 300 บรรทัด, จำนวน steps ไม่เกิน 15
- [ ] มีตัวอย่างที่สอดคล้อง, ระบุวิธีจัดการ error และ rollback plans
- [ ] ทำตาม workflow ได้จริงโดยไม่มีข้อสงสัย

## Quality Gate

Workflow สมบูรณ์เมื่อ:

- ผ่าน review checklist ทุกข้อ
- ทำตาม workflow ได้จริงโดยไม่มีข้อสงสัย
- มี verification ชัดเจนสำหรับทุก step สำคัญ
- ไม่มีความขัดแย้งภายในหรือภายนอก workflow
- มีตัวอย่างที่สอดคล้องและทดสอบได้จริง
- ระบุ dependencies และ references ชัดเจน
- ผ่านการทดสอบโดยทำตาม step ทั้งหมดได้สำเร็จ
- มี approval จาก reviewer ที่เกี่ยวข้อง

## Verification Process
- ตรวจสอบทุกข้อใน checklist
- ยืนยันว่า workflow ผ่าน quality gate
- ทดสอบ workflow โดยทำตาม steps ทั้งหมด
- ตรวจสอบว่าไม่มี critical issues
- ยืนยันว่ามี approval จาก reviewer
