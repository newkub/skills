---
title: Update Skills
description: อัปเดต skill ที่มีอยู่ให้ตรงกับมาตรฐานใหม่
auto_execution_mode: 3
---

## Goal

อัปเดต skill ที่มีอยู่ให้ตรงกับมาตรฐาน write-windsurf-skills ทั้งหมด

## Scope

ใช้สำหรับอัปเดต skill ที่มีอยู่ใน skills/ folder

## Execute

### 1. Analyze Current Skill Structure

ตรวจสอบ structure ปัจจุบันของ skill เพื่อดูว่าต้องอัปเดตอะไรบ้าง

1. ตรวจสอบ folder structure ปัจจุบัน
2. เปรียบเทียบกับมาตรฐานใหม่:
   - ไม่มี `knowledge/` folder
   - มี `guide/`, `key-concepts/`, `principles/` อยู่ระดับ root
3. ตรวจสอบ SKILL.md ว่ามี structure ครบถ้วนหรือไม่

### 2. Update Folder Structure

ตรวจสอบและปรับปรุง folder structure ให้ตรงมาตรฐาน

1. ตรวจสอบว่ามี folder ที่จำเป็นครบถ้วน:
   - `guide/` - REQUIRED
   - `key-concepts/` - OPTIONAL
   - `principles/` - OPTIONAL
   - `references/` - REQUIRED
   - `workflows/` - REQUIRED
   - `.devin/` - REQUIRED
2. เพิ่ม folder ที่ขาดหาย
3. ลบ folder ที่ไม่จำเป็น

### 3. Update SKILL.md

อัปเดต SKILL.md ให้ตรงกับมาตรฐาน

1. ตรวจสอบว่ามีทุก section ที่จำเป็น:
   - frontmatter (`title`, `description`, `auto_execution_mode`)
   - `## When to use`
   - `## Skills Related`
   - `## References`
2. ตรวจสอบว่า `## References` มี `### <folder>` และตารางไฟล์
3. ตรวจสอบว่าตารางมี columns: No, File, Description
4. จัดกลุ่มตาม folder
5. ย้าย `## โครงสร้าง Directory` ไว้ด้านบนก่อน `## หมวดหมู่ไฟล์` (ถ้ามี)

### 4. Verify Changes

ตรวจสอบว่าการอัปเดตถูกต้อง

1. ตรวจสอบว่า folder structure ตรงกับมาตรฐาน
2. ตรวจสอบ SKILL.md structure ครบถ้วน
3. ตรวจสอบ references ถูกต้อง
4. ตรวจสอบว่า content ในไฟล์ยังถูกต้อง
5. ตรวจสอบว่าไม่มี conflicts ระหว่าง skills

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
- ย้าย `## โครงสร้าง Directory` ไว้ด้านบนก่อน `## หมวดหมู่ไฟล์` (ถ้ามี)
- ปรับชื่อไฟล์ให้ขึ้นต้นด้วย `update-` สำหรับไฟล์ที่เป็นการอัปเดต
- ตรวจสอบว่ามี folder ที่จำเป็นครบถ้วน (guide/, references/, workflows/)

## Expected Outcome

- Skill ที่อัปเดตมี structure ตรงตามมาตรฐานใหม่
- Content อัปเดทล่าสุดและถูกต้อง
- SKILL.md structure ครบถ้วนและถูกต้อง
- References ถูกต้องและอัปเดทล่าสุด
- ไม่มี conflicts ระหว่าง skills