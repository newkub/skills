### 1. Choose Workflow

เลือก workflow ที่เหมาะสมกับงาน

- สร้าง skill ใหม่ → ทำตาม `workflows/write-skills.md`
- อัปเดต skill ที่มีอยู่ → ทำตาม `workflows/update-skills.md`
- ปรับปรุงคุณภาพ skill → ทำตาม `workflows/improve-skills.md`

### 2. Read Guide

อ่าน guide/ ก่อนเริ่มเพื่อเข้าใจ best practices

- `guide/best-practices.md` - Best practices สำหรับการเขียน skills
- `guide/architecture.md` - โครงสร้างของ skills
- `guide/configuration.md` - การตั้งค่า skills

### 3. Setup .devin Configuration

ตั้งค่า .devin/ folder สำหรับ AI agent

1. สร้าง `.devin/` folder ใน skill
2. สร้าง subfolders: `rules/always-on/`, `rules/model_decision/`, `rules/glob/`, `workflows/`
3. คัดลอก `structure-<skill-type>.md` จาก `skills/write-skills/.devin/rules/always-on/` ไปยัง skill .devin/rules/always-on/
4. คัดลอก `template-<type>.md` ที่จำเป็นจาก `skills/write-skills/.devin/rules/model_decision/` ไปยัง skill .devin/rules/model_decision/
5. คัดลอก workflows ที่จำเป็นจาก `skills/write-skills/workflows/` ไปยัง skill .devin/workflows/
6. อัปเดต SKILL.md ให้รวม `### .devin` section พร้อมตารางไฟล์

### 4. Write Content

เขียน content ตามมาตรฐาน quality

- ใช้ภาษาไทยสำหรับ guide/, key-concepts/, principles/, workflows/
- ใช้ภาษาอังกฤษสำหรับ references/
- ปรับปรุง spacing, indentation, headings ให้สม่ำเสมอ
- ปรับปรุง headings เป็น Title Case (EN) และรายการเป็น TH
- ตรวจสอบความถูกต้องของข้อมูลตาม principle + references

### 5. Validate And Verify

ตรวจสอบและ validate

- ตรวจสอบ folder structure ตรงกับมาตรฐาน
- ตรวจสอบ SKILL.md structure ครบถ้วน
- ตรวจสอบ references ถูกต้อง
- ตรวจสอบว่าไม่มี conflicts ระหว่าง skills
