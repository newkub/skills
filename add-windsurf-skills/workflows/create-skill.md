---
description: Workflow สำหรับสร้าง skill ใหม่ใน global skills directory
title: create-skill
tags: [workflow, skills, creation, create]
goals:
  - สร้าง skill ใหม่ตามมาตรฐาน
  - คัดลอก template ที่เหมาะสม
  - ตรวจสอบคุณภาพก่อนเพิ่ม
---

# Create Skill Workflow

## When to Use

ใช้ workflow นี้เมื่อต้องการสร้าง skill ใหม่ใน global skills directory

## Prerequisites

- [ ] อ่าน \@write-skills\ ครบถ้วน
- [ ] เข้าใจโครงสร้างมาตรฐาน
- [ ] เลือกประเภท skill ที่เหมาะสม
- [ ] ตรวจสอบว่า skill ยังไม่มีอยู่

## Steps

### Phase 1: Planning

#### 1.1 Define Skill Requirements
- **Purpose**: กำหนดวัตถุประสงค์ของ skill
- **Scope**: ระบุขอบเขตการทำงาน
- **Target Users**: กำหนดกลุ่มเป้าหมาย
- **Use Cases**: ระบุ use cases หลัก

#### 1.2 Choose Skill Type
เลือกประเภทตามความเหมาะสม:
- \asic-skill\ - สำหรับ functionalities ทั่วไป
- \cli-skill\ - สำหรับ CLI tools
- \lib-skill\ - สำหรับ libraries
- \ramework-skill\ - สำหรับ frameworks
- \language-skill\ - สำหรับ programming languages

### Phase 2: Structure Creation

#### 2.1 Create Directory
\\\ash
# Navigate to skills directory
cd ~/.codeium/windsurf/skills

# Create skill directory
mkdir skill-name
cd skill-name
\\\

#### 2.2 Copy Template
\\\ash
# Copy from write-skills examples
cp -r ~/../.codeium/windsurf/skills/write-skills/3-examples/[skill-type]/* ./
\\\

#### 2.3 Customize Structure
- ปรับ directory structure ตามความจำเป็น
- เพิ่ม directories ที่จำเป็น
- จัดระเบียบ files ตาม conventions

### Phase 3: Content Creation

#### 3.1 Write SKILL.md
- **Frontmatter**: กรอกข้อมูลครบถ้วน
- **Purpose**: เขียนวัตถุประสงค์ที่ชัดเจน
- **Scope**: ระบุขอบเขตการทำงาน
- **Implementation**: เพิ่มขั้นตอนการใช้งาน

#### 3.2 Create Content Files
- สร้าง guide/ rules/ patterns/ directories
- เขียน examples และ templates
- เพิ่ม best practices

### Phase 4: Validation

#### 4.1 Content Review
- [ ] Content สมบูรณ์และถูกต้อง
- [ ] Examples ทำงานได้จริง
- [ ] Templates ใช้งานได้

#### 4.2 Structure Validation
\\\ash
# ตรวจสอบโครงสร้าง
find . -name "*.md" -exec echo {} \;
\\\

## Quality Checklist

- [ ] มี SKILL.md ที่ถูกต้อง
- [ ] มี patterns/ directory
- [ ] มี rules/ directory
- [ ] โครงสร้างตรงมาตรฐาน
- [ ] File names ตาม conventions
- [ ] Frontmatter ครบถ้วน

## Expected Outcome

✅ Skill ถูกสร้างที่ \~/.codeium/windsurf/skills/<skill-name>/\
✅ มีโครงสร้างตาม template
✅ พร้อมใช้งานใน Windsurf
