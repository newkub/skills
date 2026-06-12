---
title: Improve Skills
description: ปรับปรุงคุณภาพ skill ที่มีอยู่ให้ดีขึ้นตามมาตรฐาน
auto_execution_mode: 3
---

## Goal

ปรับปรุงคุณภาพ skill ที่มีอยู่ให้ตรงตามมาตรฐาน write-windsurf-skills ทั้งหมด

## Scope

ใช้สำหรับปรับปรุง skill ที่มีอยู่ใน skills/ folder

## Execute

### 1. Analyze Current Skill Quality

วิเคราะห์คุณภาพของ skill ปัจจุบันเพื่อระบุสิ่งที่ต้องปรับปรุง

1. ตรวจสอบ content quality ตาม `/follow-content-quality`
2. ตรวจสอบความสมบูรณ์ของ SKILL.md
3. ตรวจสอบความถูกต้องของ references
4. ตรวจสอบความสอดคล้องกับ user requirements
5. ตรวจสอบว่าไม่มี conflicts ระหว่าง skills

### 2. Improve Content Quality

ปรับปรุง content ให้มีคุณภาพสูงขึ้น

1. ปรับปรุง spacing, indentation, headings ให้สม่ำเสมอ
2. ปรับปรุง headings เป็น Title Case (EN) และรายการเป็น TH
3. ปรับปรุงความชัดเจนและความเข้าใจง่าย
4. ปรับปรุงคำศัพท์ให้สม่ำเสมอ
5. ตรวจสอบความถูกต้องของข้อมูลตาม principle + references
6. ปรับปรุง grouping + hierarchy ให้ชัดเจน
7. ตรวจสอบ content กับเว็บไซต์จริงด้วย `/deep-research`

### 3. Update SKILL.md Structure

ปรับปรุงโครงสร้าง SKILL.md ให้ตรงมาตรฐาน

1. ตรวจสอบว่ามีทุก section ที่จำเป็น:
   - frontmatter (`title`, `description`, `auto_execution_mode`)
   - `## When to use`
   - `## Skills Related`
   - `## References`
2. ตรวจสอบว่า `## References` มี `### <folder>` และตารางไฟล์
3. ตรวจสอบว่าตารางมี columns: No, File, Description
4. จัดกลุ่มตาม folder
5. ย้าย `## โครงสร้าง Directory` ไว้ด้านบนก่อน `## หมวดหมู่ไฟล์` (ถ้ามี)

### 4. Update File Naming

ปรับปรุงชื่อไฟล์ให้สอดคล้องกับมาตรฐาน

1. ตรวจสอบชื่อไฟล์ในตาราง References
2. ปรับชื่อไฟล์ให้ขึ้นต้นด้วย `update-` สำหรับไฟล์ที่เป็นการอัปเดต
3. ตรวจสอบว่าชื่อไฟล์สะท้อนหน้าที่ของไฟล์

### 5. Add Missing Files

เพิ่มไฟล์ที่ขาดหาย

1. ตรวจสอบว่ามี folder ที่จำเป็นครบถ้วน:
   - `guide/` - REQUIRED
   - `references/` - REQUIRED
   - `workflows/` - REQUIRED
2. เพิ่ม folder ที่ขาดหาย
3. เพิ่ม content ที่จำเป็นในแต่ละ folder

### 6. Remove Unnecessary Files

ลบไฟล์ที่ไม่จำเป็น ไม่ได้ใช้ และซ้ำซ้อน

1. ตรวจสอบไฟล์ที่ไม่ได้ใช้ (unused files)
2. ตรวจสอบไฟล์ที่ซ้ำซ้อน (redundant files)
3. ตรวจสอบไฟล์ที่ไม่เกี่ยวข้องกับ skill (irrelevant files)
4. ตรวจสอบไฟล์ที่ไม่จำเป็น (unnecessary files)
5. ตรวจสอบ content ที่ซ้ำซ้อนภายในไฟล์เดียวกัน
6. ตรวจสอบ sections ที่ไม่จำเป็นในไฟล์
7. ลบไฟล์ที่ระบุไว้ข้างต้น
8. อัปเดท references ใน SKILL.md หลังจากลบไฟล์

### 7. Verify Improvements

ตรวจสอบว่าการปรับปรุงถูกต้อง

1. ตรวจสอบ content quality ตามมาตรฐาน
2. ตรวจสอบ SKILL.md structure ครบถ้วน
3. ตรวจสอบ references ถูกต้อง
4. ตรวจสอบว่าไม่มี conflicts ระหว่าง skills

## Error Handling

### Common Errors

- **Content quality issues**: spacing, indentation, headings ไม่สม่ำเสมอ
- **SKILL.md incomplete**: ขาด section ที่จำเป็น
- **References invalid**: ไฟล์ที่อ้างอิงไม่มีอยู่จริง
- **File naming inconsistent**: ชื่อไฟล์ไม่สอดคล้องกับมาตรฐาน
- **Unnecessary files**: ไฟล์ที่ไม่ได้ใช้หรือซ้ำซ้อน

### Recovery Strategies

- ถ้า content quality ไม่ดี → ทำ `/follow-content-quality`
- ถ้า SKILL.md ไม่ครบถ้วน → เพิ่ม section ที่ขาดหาย
- ถ้า references ไม่ถูกต้อง → อัปเดตตารางไฟล์
- ถ้า file naming ไม่สอดคล้อง → เปลี่ยนชื่อไฟล์ตามมาตรฐาน
- ถ้ามีไฟล์ที่ไม่จำเป็น → ลบไฟล์ที่ระบุไว้

## Rules

ทำตามมาตรฐาน write-windsurf-skills ทั้งหมด

- ใช้ภาษาไทยสำหรับ guide/, key-concepts/, principles/, workflows/
- ใช้ภาษาอังกฤษสำหรับ references/
- ปรับปรุง spacing, indentation, headings ให้สม่ำเสมอ
- ปรับปรุง headings เป็น Title Case (EN) และรายการเป็น TH
- ตรวจสอบความถูกต้องของข้อมูลตาม principle + references
- ย้าย `## โครงสร้าง Directory` ไว้ด้านบนก่อน `## หมวดหมู่ไฟล์` (ถ้ามี)
- ปรับชื่อไฟล์ให้ขึ้นต้นด้วย `update-` สำหรับไฟล์ที่เป็นการอัปเดต
- ตรวจสอบว่ามี folder ที่จำเป็นครบถ้วน (guide/, references/, workflows/)
- ลบไฟล์ที่ไม่จำเป็น ไม่ได้ใช้ และซ้ำซ้อน

## Expected Outcome

- Skill ที่ปรับปรุงมีคุณภาพสูงตามมาตรฐาน
- Content อ่านง่าย เข้าใจง่าย และสอดคล้องกัน
- SKILL.md structure ครบถ้วนและถูกต้อง
- References ถูกต้องและอัปเดทล่าสุด
- ไม่มี conflicts ระหว่าง skills