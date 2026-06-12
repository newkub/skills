---
title: Agents Rules
description: กฎและแนวทางการพัฒนาโปรเจกต์ทั่วไปสำหรับทุก workspace
auto_execution_mode: 3
---

## Goal

ทำตามกฎเหล่านี้ในทุก workspace เพื่อให้การทำงานสม่ำเสมอ

## Scope

ใช้สำหรับทุก workspace ในการพัฒนาโปรเจกต์

## Execute

### 1. Prepare

1. ทำ `/ship-run` เพื่อ ship code ครบวงจร ทดสอบคุณภาพ และรัน development server
2. ตั้งค่า workspace ด้วย `/setup-tasks`
3. ดู reference ก่อน setup ด้วย `/follow-windsurf-global-workflows`
4. ดู tech stack ด้วย `/follow-my-tech-stack`
5. เปลี่ยน config หรือใช้ workflows `run-` ด้วย `/follow-config`
6. File operation ใดๆ ต้องทำ `/edit-relative`
7. `"."` = `/continue` หรือ `/try-again`

### 2. Analyze

1. ทำ `/analyze-project` ด้วย `/use-scripts`
2. เมื่อได้รับ error ทำตาม `/error`
3. ถ้า error มาจากคำสั่งที่ผู้ใช้รันเอง แก้ไขเฉพาะ error นั้น
4. ถ้าแค่ส่ง errors โดยไม่บอกอะไรเพิ่มเติม หรือไม่ได้เกิดจากการรัน workflows ให้ทำ `/only-fix-errors` เท่านั้น

### 3. Read Reference

1. เมื่อได้รับ user prompt อ่าน reference ก่อนเสมอ (workflows, skills, global rules)
2. ทำ `/read-related-workflows` เพื่ออ่านและสรุป workflows ที่เกี่ยวข้องแบบ recursive
3. วิเคราะห์และ planning ตาม reference
4. ลดเวลาโดยไม่ต้องค้นหาข้อมูลซ้ำ

### 4. Search Code

1. เมื่อต้องค้นหา code patterns, symbols, หรือ references ทำ `/search-code`
2. ใช้ `Grep` สำหรับ text search และ `find_by_name` สำหรับ file search
3. กำหนด scope ด้วย `type`, `glob`, หรือ `path`
4. วิเคราะห์และ verify ผลลัพธ์

### 5. Planning

1. แก้ไข workflows ด้วย `/follow-write-workflows`
2. แก้ไข skills ด้วย `/follow-write-skills`

### 6. Write

1. ก่อนเขียน code ทำ `/follow-principles-engineering`
2. แก้ไขอะไร ทำ `/follow-architecture`
3. แก้ไขไฟล์จำนวนมาก ทำ `/plan` ก่อน
4. Mock ให้ comment `// MOCK` และแยกไฟล์ไป `mock/`
5. ยังทำไม่เสร็จ comment `// TODO`
6. ไม่ mock หรือ TODO โดย default

### 7. Reflex

1. ทำ `/loop-until-complete` ทำซ้ำจน implement เสร็จ
2. กลับไป check planning เรื่อยๆ

### 8. Report

1. ทำตาม `/report`
2. เมื่อจบ task รัน `/suggest-next-action`
3. คุยกับผู้ใช้เป็นภาษาไทย
4. คำตอบกระชับ ตรงประเด็น

## Rules

### 1. Tool Selection

เลือก tools ที่เหมาะสมสำหรับ automation

- ใช้ `Bun shell` สำหรับ automation เสมอ
- ใช้ `bunx` แทน `npx` เสมอ

### 2. Workspace Standards

รักษามาตรฐานในทุก workspace

- ทุก workspace ต้องมี scripts มาตรฐาน
- Execute ต้องให้ผลลัพธ์เหมือนกันทุกครั้ง
- ระบุลำดับการทำงานชัดเจน
- ไม่ใช้คำสั่ง subjective หรือ ambiguous

### 3. File Sync

- Sync `write-skills/types` ↔ skill preview

### 4. Example Consistency

- `write-skills/examples` = file pattern ที่แตกต่าง
- สร้างไฟล์ใหม่ = สร้าง examples ก่อน

### 5. SKILL.md Structure

- ทุก folder มี `SKILL.md`
- Headings: `## When to use`, `## Skills Related`, `## References`
- `## References` = ตาราง 2 columns
- จัดกลุ่มตาม folder

### 6. Single Responsibility Files

- ไฟล์มีหน้าที่เดียว
- หลีกเลี่ยงรวมหลายหัวข้อ
- แยกไฟล์ตามความเฉพาะเจาะจง
- ชื่อไฟล์สะท้อนหน้าที่

### 7. Content Quality (/content-quality)

- Spacing, indentation, headings สม่ำเสมอ
- Headings = Title Case (EN), รายการ = TH
- เขียนชัดเจน เข้าใจง่าย
- คำศัพท์สม่ำเสมอ
- ข้อมูลถูกต้องตาม principle + references
- ตรวจสอบ content กับเว็บไซต์จริงด้วย `/deep-research`
- Grouping + hierarchy ชัดเจน
- Single source of truth

### 8. Update All Skills (write-skills)

- ทำตามโครงสร้าง + มาตรฐาน
- อัปเดต SKILL.md ให้ตรง structure ใหม่
- ปรับปรุง content ให้สอดคล้องกับ standards
- ลบไฟล์ที่ไม่จำเป็น

### 9. Correctness Verification (/check-correctness)

- Skills ที่อ้างอิงมีอยู่จริง
- References ถูกต้อง
- สอดคล้องกับ user requirements
- ไม่มี conflicts ระหว่าง skills

## Expected Outcome

- การทำงานสม่ำเสมอทุก workspace
- Code quality สูงและเป็นไปตามมาตรฐาน
- ไม่มี mock หรือ TODO ที่ไม่จำเป็น
- Workflows ทำงานได้อย่างมีประสิทธิภาพ
- การสื่อสารชัดเจนและกระชับ