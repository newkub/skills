---
title: Write Skills
description: สร้าง Devin Skills ใหม่ตามมาตรฐาน
auto_execution_mode: 3
---

## Goal

สร้าง Devin Skills ใหม่ตามมาตรฐาน write-windsurf-skills ทั้งหมด

## Scope

ใช้สำหรับสร้าง skill ใหม่ใน skills/ folder

## Execute

### 1. Determine Skill Type

ระบุ skill type จาก prefix ชื่อ folder เพื่อกำหนด folder และ file ที่ต้องการตาม requirements

- `guide-` - guides และ best practices
- `lang-` - programming languages
- `lib-` - libraries
- `framework-` - frameworks
- `runtime-` - runtime environments
- `cloud-` - cloud platforms และ services
- `create-` - สร้าง extensions สำหรับ platforms ต่างๆ
- `tool-` - development tools

### 2. Research Before Writing

วิจัยข้อมูลก่อนเขียนทุกครั้งเพื่อให้ content ถูกต้องและเป็นปัจจุบัน

1. ทำ `/deep-research` สำหรับค้นหาข้อมูล
2. ค้นหาใน package registries ตามภาษา
3. ใช้ DeepWiki สำหรับ GitHub repositories
4. ใช้ Context7 สำหรับ library documentation
5. ตรวจสอบ source reputation และ information freshness
6. สรุป findings ก่อนเขียน

### 3. Create Folder Structure

สร้าง folder ตามลำดับเพื่อให้ structure สม่ำเสมอและ deterministic

1. `SKILL.md` - REQUIRED
2. `guide/` - REQUIRED
3. `key-concepts/` - OPTIONAL
4. `principles/` - OPTIONAL
5. `references/` - REQUIRED
6. `workflows/` - REQUIRED
7. `templates/` - OPTIONAL
8. `scripts/` - OPTIONAL (TypeScript scripts)
9. `.devin/` - REQUIRED (structure และ templates สำหรับ skill type นั้นๆ)

### 4. Write SKILL.md Index

เขียน SKILL.md เป็น index file ที่ครบถ้วนและอ่านง่าย

1. เพิ่ม frontmatter (`title`, `description`, `auto_execution_mode`) ที่ด้านบนสุด
2. เพิ่ม `## When to use` เป็น bullet list อธิบาย use cases
3. เพิ่ม `## Skills Related` เป็น bullet list พร้อม backticks และ `/`
4. เพิ่ม `## References` พร้อม `### <folder>` และตารางไฟล์
5. ตารางมี columns: No, File, Description
6. เรียงลำดับตามการใช้งาน

### 5. Write Key Concepts and Principles (Optional)

เขียน key concepts และ principles ให้เข้าใจง่ายและ structured

ถ้ามี key-concepts/ หรือ principles/:
- ใช้แต่ละ concept/principle ในไฟล์แยกกัน
- ตั้งชื่อไฟล์ตาม concept/principle นั้นๆ
- เขียนเป็นภาษาไทย
- ถ้ามีน้อย (1-2 อัน) อาจรวมใน 1 file ได้

### 6. Write Content Files

เขียน content files ตามมาตรฐาน quality และ workflow

1. ทำตาม `/follow-content-quality` สำหรับทุกไฟล์ `.md`
2. ทำตาม `/write-windsurf-global-workflows` สำหรับการเขียนเนื้อหา
3. ใช้ `bun add` หรือ `bun add -D` แทน `npm install` เสมอ (เพื่อความเร็วและ consistency)

### 7. Setup .devin Configuration

สร้าง .devin/ folder และคัดลอกไฟล์ structure และ templates ที่เกี่ยวข้อง

1. สร้าง `.devin/` folder ใน skill
2. สร้าง subfolders: `rules/always-on/`, `rules/model_decision/`, `rules/glob/`, `workflows/`
3. คัดลอก `structure-<skill-type>.md` จาก `skills/write-skills/.devin/rules/always-on/` ไปยัง skill .devin/rules/always-on/
4. คัดลอก `template-<type>.md` ที่จำเป็นจาก `skills/write-skills/.devin/rules/model_decision/` ไปยัง skill .devin/rules/model_decision/
5. คัดลอก workflows ที่จำเป็นจาก `skills/write-skills/workflows/` ไปยัง skill .devin/workflows/
6. อัปเดต SKILL.md ให้รวม `### .devin` section พร้อมตารางไฟล์

### 8. Validate And Verify

ตรวจสอบและ validate

1. ตรวจสอบ folder structure ตรงกับมาตรฐาน
2. ตรวจสอบ SKILL.md structure ครบถ้วน
3. ตรวจสอบ references ถูกต้อง
4. ตรวจสอบว่าไม่มี conflicts ระหว่าง skills
5. ตรวจสอบว่า content ถูกต้องและเป็นปัจจุบัน

## Error Handling

### Common Errors

- **Folder structure mismatch**: ตรวจสอบว่ามี folder ที่จำเป็นครบถ้วน
- **SKILL.md incomplete**: ตรวจสอบว่ามีทุก section ที่จำเป็น
- **References invalid**: ตรวจสอบว่าไฟล์ที่อ้างอิงมีอยู่จริง
- **Content outdated**: ทำ `/deep-research` เพื่อตรวจสอบความถูกต้อง

### Recovery Strategies

- ถ้า folder structure ไม่ถูกต้อง → สร้าง folder ที่ขาดหาย
- ถ้า SKILL.md ไม่ครบถ้วน → เพิ่ม section ที่ขาดหาย
- ถ้า references ไม่ถูกต้อง → อัปเดตตารางไฟล์
- ถ้า content ไม่ถูกต้อง → วิจัยและอัปเดตข้อมูล

## Rules

ทำตามมาตรฐาน write-windsurf-skills ทั้งหมด

- ใช้ภาษาไทยสำหรับ guide/, key-concepts/, principles/, workflows/
- ใช้ภาษาอังกฤษสำหรับ references/
- ปรับปรุง spacing, indentation, headings ให้สม่ำเสมอ
- ปรับปรุง headings เป็น Title Case (EN) และรายการเป็น TH
- ตรวจสอบความถูกต้องของข้อมูลตาม principle + references
- วิจัยข้อมูลก่อนเขียนทุกครั้ง
- ใช้ `bun add` แทน `npm install` เสมอ
- ตรวจสอบว่ามี folder ที่จำเป็นครบถ้วน (guide/, references/, workflows/)

## Expected Outcome

- Skill ใหม่ที่สร้างมี structure ตรงตามมาตรฐาน
- Content ถูกต้องและเป็นปัจจุบัน
- SKILL.md structure ครบถ้วนและถูกต้อง
- References ถูกต้องและครบถ้วน
- ไม่มี conflicts ระหว่าง skills
