---
title: Update Workflows
description: การอัพเดทเนื้อหาและโครงสร้างของไฟล์ workflow ให้เป็นปัจจุบันและสอดคล้องกับมาตรฐาน
auto_execution_mode: 3
file-patterns:
  - ".windsurf/workflows/*.md"
  - "global_workflows/*.md"
  - "write-workflows/workflows/*.md"
follow:
  skills:
    - "@write-markdown"
  workflows:
    - "/write-workflows"
    - "/validate-workflows"
    - "/improve-content-quality"
  files:
    - "write-workflows/rules/document-structure.md"
    - "write-workflows/rules/language-standards.md"
    - "write-workflows/rules/workflow-steps.md"
---

## Update Workflows

## Purpose

อัพเดทเนื้อหาและโครงสร้างของไฟล์ workflow ให้เป็นปัจจุบันและสอดคล้องกับมาตรฐานที่กำหนด

## Scope

- การอัพเดทเนื้อหาในไฟล์ workflow ที่มีอยู่
- การปรับปรุงโครงสร้างตามมาตรฐานใหม่
- การอัพเดท references และ dependencies
- การเพิ่ม features หรือ improvements ใหม่

## Rules

### 1. Update Requirements

- ต้องรักษาความสอดคล้องกับมาตรฐานปัจจุบัน
- ต้องอัพเดท references ที่เกี่ยวข้องทั้งหมด
- ต้องตรวจสอบความถูกต้องหลังการอัพเดท
- ต้องบันทึกการเปลี่ยนแปลงทั้งหมด

### 2. Content Standards

- เนื้อหาต้องเป็นปัจจุบันและถูกต้อง
- ต้องสอดคล้องกับ language standards
- ต้องมี structure ที่สมบูรณ์
- ต้องมี references ที่เกี่ยวข้อง

### 3. Validation Criteria

- ทุก sections ต้องครบถ้วน
- Language ต้องสอดคล้องกับมาตรฐาน
- Links และ references ต้องใช้งานได้
- Content ต้องเป็นปัจจุบัน

## Steps

### Phase 1: Assessment

1. **Current State Analysis**
   - ตรวจสอบไฟล์ workflow ทั้งหมด
   - ระบุไฟล์ที่ต้องการอัพเดท
   - ตรวจสอบความสอดคล้องกับมาตรฐานปัจจุบัน
   - สร้างรายการสิ่งที่ต้องปรับปรุง

2. **Standards Review**
   - ทบทวนมาตรฐานปัจจุบัน
   - ตรวจสอบการเปลี่ยนแปลงใน standards
   - ระบุสิ่งที่ต้องอัพเดทใน workflows
   - สร้าง update plan

3. **Dependencies Check**
   - ตรวจสอบ dependencies ที่เกี่ยวข้อง
   - ระบุ references ที่ต้องอัพเดท
   - ตรวจสอบ integration points
   - ประเมินผลกระทบของการอัพเดท

### Phase 2: Content Updates

1. **Structure Updates**
   - อัพเดท sections ให้สอดคล้องกับมาตรฐาน
   - เพิ่ม sections ที่ขาดหาย
   - จัดระเบียบ sections ให้ถูกต้อง
   - ตรวจสอบ heading levels

2. **Language Updates**
   - อัพเดท headings ให้เป็นภาษาอังกฤษ
   - อัพเดท content ให้เป็นภาษาไทย
   - อัพเดท technical terms ให้เป็นภาษาอังกฤษ
   - ตรวจสอบความสอดคล้องของภาษา

3. **Content Improvements**
   - อัพเดทข้อมูลให้เป็นปัจจุบัน
   - เพิ่ม examples ที่เกี่ยวข้อง
   - ปรับปรุงความชัดเจนของเนื้อหา
   - เพิ่ม best practices ใหม่

### Phase 3: Front Matter Updates

1. **Required Fields Check**
   - ตรวจสอบว่ามี required fields ครบถ้วน
   - อัพเดท title และ description
   - อัพเดท file-patterns ให้ถูกต้อง
   - อัพเดท auto_execution_mode

2. **Follow References Update**
   - อัพเดท skill references
   - อัพเดท workflow references
   - อัพเดท file references
   - ตรวจสอบว่า references มีอยู่จริง

3. **YAML Validation**
   - ตรวจสอบ YAML syntax
   - ตรวจสอบ indentation
   - ตรวจสอบ data types
   - แก้ไข errors ที่พบ

### Phase 4: Reference Updates

1. **Internal References**
   - อัพเดท links ภายใน project
   - อัพเดท cross-references ระหว่าง workflows
   - อัพเดท skill references
   - ตรวจสอบว่า links ใช้งานได้

2. **External References**
   - ตรวจสอบ external links ว่ายังใช้งานได้
   - อัพเดท documentation links
   - เพิ่ม references ใหม่ที่เกี่ยวข้อง
   - ลบ references ที่ไม่ใช้แล้ว

3. **File References**
   - อัพเดท file paths ที่เปลี่ยนแปลง
   - ตรวจสอบว่า referenced files มีอยู่
   - อัพเดท template references
   - ตรวจสอบ example references

### Phase 5: Quality Assurance

1. **Content Validation**
   - ตรวจสอบความสมบูรณ์ของเนื้อหา
   - ตรวจสอบความถูกต้องของข้อมูล
   - ตรวจสอบความสอดคล้องกับ standards
   - ตรวจสอบความเข้าใจง่าย

2. **Structure Validation**
   - ตรวจสอบว่ามี sections ครบถ้วน
   - ตรวจสอบลำดับ sections ว่าถูกต้อง
   - ตรวจสอบ heading levels ว่าสอดคล้อง
   - ตรวจสอบ formatting consistency

3. **Link Validation**
   - ทดสอบทุก links ว่าใช้งานได้
   - ตรวจสอบ internal links
   - ตรวจสอบ external links
   - แก้ไข links ที่เสีย

### Phase 6: Testing

1. **Functional Testing**
   - ทดสอบ workflows ที่อัพเดท
   - ตรวจสอบว่าทำงานตามที่กำหนด
   - ทดสอบ integration กับ workflows อื่น
   - ตรวจสอบ dependencies

2. **Integration Testing**
   - ทดสอบการทำงานร่วมกับ skills
   - ทดสอบการทำงานร่วมกับ tools
   - ตรวจสอบ cross-workflow dependencies
   - ทดสอบ end-to-end flows

3. **Regression Testing**
   - ตรวจสอบว่า features เก่ายังทำงานได้
   - ทดสอบ edge cases
   - ตรวจสอบ performance
   - ตรวจสอบ error handling

### Phase 7: Documentation

1. **Update Change Logs**
   - บันทึกการเปลี่ยนแปลงทั้งหมด
   - ระบุ version และ date
   - อธิบายการเปลี่ยนแปลงที่สำคัญ
   - บันทึก breaking changes

2. **Update Documentation**
   - อัพเดท SKILL.md files
   - อัพเดท README files
   - อัพเดท reference documents
   - อัพเดท examples

3. **Create Migration Notes**
   - สร้างเอกสารสำหรับการ migrate
   - อธิบาย changes ที่ส่งผลกระทบ
   - ให้คำแนะนำสำหรับการอัพเดท
   - ระบุ deprecated features

### Phase 8: Final Review

1. **Comprehensive Review**
   - ทบทวนการเปลี่ยนแปลงทั้งหมด
   - ตรวจสอบความสมบูรณ์ของการอัพเดท
   - ยืนยันว่าทุกอย่างทำงานได้
   - อนุมัติการ deploy

2. **Cleanup**
   - ลบ temporary files
   - ทำความสะอาด workspace
   - ล้าง cache ที่ไม่จำเป็น
   - จัดระเบียบ files

3. **Deployment**
   - deploy changes ไปยัง production
   - ตรวจสอบว่าทำงานได้ใน production
   - แจ้งทีมเกี่ยวกับการอัพเดท
   - บันทึกสถานะสุดท้าย

## Reference

- [Document Structure Rules](../execute/1-rules/document-structure.md)
- [Rename Workflows](./rename-workflows.md)
- Related workflows: `/write-workflows`, `/validate-workflows`, `/improve-content-quality`