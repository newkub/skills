---
description: แนวทางการเขียน Skills ตามมาตรฐานที่กำหนด
---

# Write Skills Guidelines

## Part 1: Structure Requirements

### 1.1 Folder Structure
ทุก skill ต้องมีโครงสร้างดังนี้:

```
skill-name/
├── SKILL.md              # Entry point หลัก
├── rules/                # กฎและแนวทางการปฏิบัติ
│   ├── 1-setup.md
│   ├── 2-configuration.md
│   └── 3-usage.md
├── knowledge/            # ความรู้พื้นฐานที่เตรียมไว้
│   ├── core-concept.md
│   ├── all-eatures.md
│   └── best-practices/   # Best practices เป็น folder
└── reference/            # ลิงก์ต้นฉบับ (ถ้าจำเป็น)
```

### 1.2 SKILL.md Format
ไฟล์ `SKILL.md` ต้องมี:
- **Frontmatter:** name, description, goal, outcome (จำเป็นทุกอย่าง)
- **When to Use:** บอกเงื่อนไขการใช้งาน (ต้องชัดเจนและเฉพาะเจาะจง)
- **Quick Start:** 3-5 ขั้นตอนเริ่มต้น (ต้องสามารถทำได้จริง)
- **Rules:** ลิงก์ไปยัง rules ที่เกี่ยวข้อง (ต้องลิงก์ไปยังไฟล์ที่มีอยู่จริง)
- **Knowledge:** ลิงก์ไปยัง knowledge ที่เกี่ยวข้อง (ต้องลิงก์ไปยังไฟล์ที่มีอยู่จริง)

**Strict Rules:**
- ต้องมีทุก section ที่ระบุ
- ลิงก์ต้องชี้ไปยังไฟล์ที่มีอยู่จริง
- Quick Start ต้องทำได้จริงโดยไม่ต้องถามเพิ่ม
- When to Use ต้องเฉพาะเจาะจงและไม่คลุมเกินไป

### 1.3 Language Standards
- **Headings:** ภาษาอังกฤษเท่านั้น
- **Content:** ภาษาไทย (ยกเว้นคำเทคนิค)
- **Technical Terms:** ภาษาอังกฤษ
- **Code:** ภาษาอังกฤษเท่านั้น

**Forbidden:** ผสมภาษาใน heading, แปลคำเทคนิค, ใช้ภาษาไทยใน code blocks

### 1.4 Section Ordering
1. Structure/Setup
2. Configuration
3. Usage/Implementation
4. Verification/Testing
5. Examples (ถ้ามี)

**Rules:**
- ต้องเรียงลำดับ section ตามที่กำหนด

## Part 2: Writing Standards

### 2.1 Sentence Structure
- **Length:** สูงสุด 20 คำต่อประโยค
- **Voice:** Active voice เท่านั้น
- **Tone:** Direct, imperative, actionable
- **Clarity:** ประโยคต้องมี subject + verb + object ชัดเจน

### 2.2 Connectors
ใช้เฉพาะคำเชื่อมที่ระบุ:
`ถ้า`, `แล้ว`, `ก็ต่อเมื่อ`, `หลังจาก`, `เช่น`, `และ`, `หรือ`, `จากนั้น`, `เพื่อ`, `โดย`

**Forbidden:** คำเชื่อมแบบภาษาพูด, คำที่ไม่ชัดเจน

### 2.3 Flexibility Rules
**ห้ามใช้ค่าคงที่ที่ไม่ยืดหยุ่น:** ระบุว่าสามารถปรับได้
**ต้องระบุทางเลือก:** ให้หลายวิธีทำได้

## Part 3: Quality Standards

### 3.1 Rules Format
ไฟล์ใน `rules/` ต้องมี:
- **Title:** บอกหัวข้อของ rule
- **Description:** อธิบาย rule ใน 1-2 ประโยค
- **Examples:** อย่างน้อย 1 ตัวอย่าง
- **Anti-patterns:** บอกสิ่งที่ไม่ควรทำ (ถ้าจำเป็น)

**Rules:**
- Title ต้องชัดเจนและกระชับ
- Description ต้องอธิบาย rule ใน 1-2 ประโยค
- Examples ต้องมีอย่างน้อย 1 ตัวอย่าง
- Anti-patterns ต้องบอกสิ่งที่ไม่ควรทำอย่างชัดเจน

### 3.2 Knowledge Format
ไฟล์ใน `knowledge/` ต้องมี:
- **Concepts:** อธิบายแนวคิดพื้นฐาน
- **Best Practices:** อย่างน้อย 3 ข้อ
- **Examples:** อย่างน้อย 1 ตัวอย่าง

**Rules:**
- Concepts ต้องอธิบายแนวคิดอย่างชัดเจน
- Best Practices ต้องมีอย่างน้อย 3 ข้อ
- Examples ต้องมีอย่างน้อย 1 ตัวอย่าง

### 3.3 Naming Conventions
- ใช้ kebab-case สำหรับชื่อไฟล์
- ใช้ตัวเลขนำหน้าถ้ามีลำดับความสำคัญ (1-9)
- ชื่อไฟล์ต้องสะท้อนเนื้อหาอย่างชัดเจน

**Rules:**
- ชื่อไฟล์ต้องเป็น kebab-case เท่านั้น
- ตัวเลขนำหน้าต้องใช้ 1-9 เท่านั้น
- ห้ามใช้ spaces หรือ special characters ในชื่อไฟล์
- ชื่อไฟล์ต้องสะท้อนเนื้อหาอย่างชัดเจน

## Part 4: Content Quality

### 4.1 Verification Requirements
จบไฟล์ต้องมี verification step:
```markdown
## Verification
1. ตรวจสอบว่า [goal] บรรลุ
2. ทดสอบด้วย [method]
3. ตรวจสอบ [outcome]
```

**Rules:** มี verification step, ตรวจสอบ goal, มีวิธีทดสอบชัดเจน

### 4.2 Anti-Patterns
❌ Vague: "ติดตั้ง dependencies" → ✅ Specific: "ติดตั้ง dependencies ด้วย `npm install`"
❌ No context: "แก้ไข config" → ✅ With context: "แก้ไข `package.json` ใน `dependencies`"
❌ Unordered: "ติดตั้ง, ตั้งค่า, ทดสอบ" → ✅ Ordered: "ติดตั้ง => ตั้งค่า => ทดสอบ"
❌ Hardcoded: "port 3000" → ✅ Flexible: "port 3000 (ปรับได้ใน config)"
❌ No verify: "ติดตั้ง" → ✅ With verify: "ติดตั้ง => ตรวจสอบ version"
❌ Incomplete: "ดูตัวอย่างใน docs" → ✅ Complete: "ดูตัวอย่างใน `examples/basic-usage.md`"
❌ Missing deps: "ติดตั้ง plugin" → ✅ With deps: "ติดตั้ง plugin ด้วย `npm install plugin-name`"

## Part 5: Usage

### 5.1 Creating New Skill
ทำตามขั้นตอนนี้เมื่อสร้าง skill ใหม่:

1. สร้าง folder ตามชื่อ skill
2. สร้างไฟล์ `SKILL.md` พร้อม frontmatter
3. สร้าง folder `rules/` และเขียน rules
4. สร้าง folder `knowledge/` และเขียน knowledge
5. เชื่อมโยงทุกอย่างใน `SKILL.md`

**Rules:**
- ต้องสร้าง folder ตามชื่อ skill ก่อน
- ต้องสร้าง `SKILL.md` ก่อนสร้าง rules/knowledge
- Rules ต้องมี title, description, examples
- Knowledge ต้องมี concepts, best practices, examples
- ต้องเชื่อมโยงทุกไฟล์ใน `SKILL.md`

### 5.2 Updating Existing Skill
เมื่ออัพเดท skill ที่มีอยู่:

1. ตรวจสอบโครงสร้างปัจจุบัน
2. เปรียบเทียบกับมาตรฐานที่กำหนด
3. แก้ไขหรือเพิ่มไฟล์ที่ขาดหาย
4. อัพเดทเนื้อหาให้เป็นไปตามมาตรฐาน
5. ตรวจสอบลิงก์ทั้งหมด

**Rules:**
- ต้องตรวจสอบโครงสร้างก่อนแก้ไข
- ต้องเปรียบเทียบกับมาตรฐาน
- ต้องแก้ไขขาดตกบกพร่อง
- ต้องตรวจสอบลิงก์ทั้งหมด

### 5.3 Quality Assurance
ตรวจสอบคุณภาพก่อนเสร็จสิ้น:

1. ตรวจสอบโครงสร้างโฟลเดอร์
2. ตรวจสอบ frontmatter ใน SKILL.md
3. ตรวจสอบลิงก์ทั้งหมด
4. ตรวจสอบภาษาและ grammar
5. ตรวจสอบ verification steps

**Rules:**
- ต้องมีการตรวจสอบคุณภาพทุกครั้ง
- ต้องตรวจสอบโครงสร้างครบถ้วน
- ต้องตรวจสอบลิงก์ให้ทำงานได้
- ต้องตรวจสอบภาษาตามมาตรฐาน

## Verification
1. ตรวจสอบว่า workflow file สร้างสำเร็จใน `.windsurf/workflows/`
2. ทดสอบด้วยการอ้างอิง `@[/write-skills]` ใน chat
3. ตรวจสอบว่าเนื้อหาตรงตามมาตรฐานที่กำหนด
