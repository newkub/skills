---
description: อัพเดทไฟล์โครงสร้างและข้อมูลโปรเจกต์ใน .windsurf/
trigger: manual
instruction:
  - ตรวจสอบว่าเป็น monorepo หรือไม่
  - สร้างไฟล์โครงสร้างพื้นฐาน
  - วิเคราะห์โปรเจกต์และอัพเดทไฟล์
  - ทำ code review และอัพเดทไฟล์
condition:
  - ใช้เมื่อต้องการอัพเดทไฟล์โครงสร้างและข้อมูลโปรเจกต์ใน .windsurf/
  - ใช้เมื่อมีการเปลี่ยนแปลงโครงสร้างโปรเจกต์
---

# อัปเดตคอนฟิก .windsurf

## เมื่อใดควรใช้
ใช้ workflow นี้เมื่อคุณต้องการ:
- อัปเดต metadata ของโปรเจกต์ใน .windsurf directory
- แก้ไขการตั้งค่า workspace configuration
- เพิ่มหรืออัปเดต project descriptors
- ซิงโครไนซ์ข้อมูลโปรเจกต์ข้าม workspaces
- รักษาความสม่ำเสมอของ project structure documentation

## Quick Start
1. อ่านไฟล์คอนฟิก .windsurf ปัจจุบัน
2. อัปเดต metadata และ descriptors ของโปรเจกต์
3. ตรวจสอบความถูกต้องของข้อมูล workspace
4. ทดสอบการเปลี่ยนแปลงคอนฟิก
5. บันทึกการอัปเดตด้วย commit messages ที่เหมาะสม

## 0. Analyze Project (ใช้เสมอก่อนเริ่มทำอะไร)

### 0.0. การใช้งาน
- ใช้เสมอก่อนเริ่มทำอะไรใน workflow นี้
- ใช้เพื่อวิเคราะห์โปรเจกต์ก่อนดำเนินการ

### 0.1. การวิเคราะห์ก่อนเริ่ม
ก่อนทำอะไรใน workflow นี้ -> RUN /analyze-project เสมอ

**Verification:** ยืนยันว่าการวิเคราะห์โปรเจกต์เสร็จสมบูรณ์

## 1. Check Monorepo (ใช้เสมอ)

### 1.0. การใช้งาน
- ใช้เมื่อต้องการตรวจสอบว่าเป็น monorepo หรือไม่
- ใช้เพื่อกำหนดตำแหน่งที่จะสร้าง .windsurf

### 1.1. การตรวจสอบ monorepo
แก้ไขไฟล์ใน workspace -> ทำ /check-monorepo

**Verification:** ยืนยันว่าการตรวจสอบ monorepo เสร็จสมบูรณ์

### 1.2. การตัดสินใจ
เป็น monorepo -> CREATE .windsurf ใน workspace root
ไม่ใช่ monorepo -> CREATE .windsurf ใน root ของ project

**Verification:** ยืนยันว่าตำแหน่ง .windsurf ถูกต้อง

## 2. Setup Structure (ใช้เสมอ)

### 2.0. การใช้งาน
- ใช้เมื่อยังไม่มีไฟล์โครงสร้างพื้นฐานใน .windsurf/
- ใช้เพื่อสร้างไฟล์โครงสร้างเริ่มต้น

### 2.1. การสร้างโครงสร้าง
ยังไม่มีไฟล์เหล่านี้ -> CREATE (ถ้าสร้างอย่างเดียว ห้ามแก้ไข)

- .windsurf/rules/
- .windsurf/workflows/
- .windsurf/todo.md
- .windsurf/hooks.json
- .windsurf/architecture.excalidraw

**Verification:** ยืนยันว่าไฟล์โครงสร้างพื้นฐานถูกสร้างเรียบร้อย

## 3. Analyze Project (ใช้เสมอ)

### 3.0. การใช้งาน
- ใช้เมื่อต้องการวิเคราะห์โปรเจกต์
- ใช้เพื่ออัพเดทไฟล์ข้อมูลโปรเจกต์ใน .windsurf/project/

### 3.1. การวิเคราะห์
RUN /analyze-project -> UPDATE ไฟล์ใน .windsurf/project/

- .windsurf/project/goal.md
- .windsurf/project/design-principles.md
- .windsurf/project/architecture.md
- .windsurf/project/problems.md
- .windsurf/project/features.md
- .windsurf/project/usage.md
- .windsurf/project/next-idea-features.md

**Verification:** ยืนยันว่าไฟล์ข้อมูลโปรเจกต์ถูกอัปเดตเรียบร้อย

## 4. Review Code (ใช้เสมอ)

### 4.0. การใช้งาน
- ใช้เมื่อต้องการทำ code review
- ใช้เพื่ออัพเดทไฟล์ review ใน .windsurf/review/

### 4.1. การ review
RUN /review-code -> UPDATE ไฟล์ใน .windsurf/review/

**Verification:** ยืนยันว่าไฟล์ review ถูกอัปเดตเรียบร้อย

## 5. Notes (ใช้เสมอ)

### 5.0. การใช้งาน
- ใช้เมื่อต้องการทราบข้อมูลเพิ่มเติมเกี่ยวกับ workflow
- ใช้เพื่อทราบกฎเพิ่มเติมในการดำเนินงาน

### 5.1. การอัพเดทไฟล์
มีไฟล์เดิมอยู่แล้ว -> DELETE เนื้อหาเดิมและ WRITE ทับ

**Verification:** ยืนยันว่าไฟล์ถูกอัปเดตอย่างถูกต้อง

### 5.2. การตัดสินใจ monorepo
ไม่ชัดเจน -> CHECK ด้วย /check-file-structures หรือ ASK user เขียนตาม @[/write-workflows]

**Verification:** ยืนยันว่าการตัดสินใจ monorepo ถูกต้อง

## Expected Outcomes
- คอนฟิก .windsurf สะท้อนสถานะโปรเจกต์ปัจจุบัน
- workspace mappings ทั้งหมดถูกต้องและใช้งานได้
- metadata โปรเจกต์ถูกต้องและเป็นปัจจุบัน
- IDE integration ทำงานโดยไม่มี errors
- documentation อธิบายการเปลี่ยนแปลงทั้งหมดอย่างชัดเจน

## Error Handling
- ถ้าไฟล์คอนฟิกหายไป สร้าง default templates
- ถ้า workspace mappings เสีย กู้คืนจาก backup
- ถ้า IDE integration ล้มเหลว ตรวจสอบ file paths และ permissions
- ถ้า metadata conflicts เกิดขึ้น แก้ไขโดยให้ความสำคัญกับสถานะปัจจุบัน

## Best Practices
- สำรองคอนฟิกก่อนทำการเปลี่ยนแปลงเสมอ
- ทดสอบการเปลี่ยนแปลงใน development environment ก่อน
- ใช้ version control สำหรับการอัปเดตคอนฟิกทั้งหมด
- รักษาการซิงโครไนซ์ documentation กับการเปลี่ยนแปลง
- ตรวจสอบว่า paths และ references ทั้งหมดถูกต้อง