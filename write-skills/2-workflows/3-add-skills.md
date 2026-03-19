---
description: Workflow สำหรับการเพิ่ม skills ใหม่
title: add-skills
tags: [workflow, skills, creation, add]
goals:
  - แนะนำขั้นตอนการสร้าง skills ใหม่
  - ให้ template และ checklist สำหรับการสร้าง
  - ทำให้การสร้าง skills เป็นไปอย่างมาตรฐาน
---

# Add Skills Workflow

## Purpose

Workflow สำหรับการเพิ่ม skills ใหม่ลงในระบบ:

- **Standardized Creation** - สร้าง skills ตามมาตรฐาน
- **Quality Assurance** - ตรวจสอบคุณภาพก่อนเพิ่ม
- **Template Usage** - ใช้ templates ที่เหมาะสม
- **Documentation** - สร้างเอกสารครบถ้วน

## When to Use

ใช้ workflow นี้เมื่อ:
- ต้องการสร้าง skill ใหม่
- มีความเชี่ยวชาญด้านใดก็ตาม
- ต้องการเพิ่มความสามารถใหม่
- ต้องการสร้าง reusable patterns

## Prerequisites

ก่อนเริ่ม workflow:
- [ ] อ่าน `@write-skills` ครบถ้วน
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
- `basic-skill` - สำหรับ functionalities ทั่วไป
- `cli-skill` - สำหรับ CLI tools
- `lib-skill` - สำหรับ libraries
- `framework-skill` - สำหรับ frameworks
- `language-skill` - สำหรับ programming languages

#### 1.3 Research Existing Skills
- ตรวจสอบว่ามี skill ที่คล้ายกันหรือไม่
- ศึกษา best practices จาก skills ที่มีอยู่
- ระบุ dependencies และ integrations ที่จำเป็น

### Phase 2: Structure Creation

#### 2.1 Create Directory Structure
```bash
# สร้างโครงสร้างพื้นฐาน
mkdir skill-name
cd skill-name
mkdir patterns rules templates
touch SKILL.md
```

#### 2.2 Copy Template
```bash
# คัดลอก template ที่เหมาะสม
cp write-skills/examples/[skill-type]/SKILL.md ./SKILL.md
cp -r write-skills/examples/[skill-type]/patterns ./
cp -r write-skills/examples/[skill-type]/rules ./
```

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
- **Verification**: เพิ่ม checklist

#### 3.2 Create Patterns
- สร้าง pattern files ใน `patterns/`
- เขียน examples และ templates
- เพิ่ม best practices
- ทำให้ reusable ได้

#### 3.3 Create Rules
- สร้าง rule files ใน `rules/`
- กำหนด standards และ conventions
- เพิ่ม validation rules
- ทำให้ enforceable ได้

### Phase 4: Quality Assurance

#### 4.1 Content Review
- [ ] Content สมบูรณ์และถูกต้อง
- [ ] Examples ทำงานได้จริง
- [ ] Templates ใช้งานได้
- [ ] Rules ชัดเจนและเป็นประโยชน์

#### 4.2 Structure Validation
```bash
# ตรวจสอบโครงสร้าง
find . -name "*.md" -exec echo {} \;
tree . -I node_modules
```

#### 4.3 Link Verification
- [ ] Internal links ทำงานได้
- [ ] External references ถูกต้อง
- [ ] Follow references ถูกต้อง
- [ ] File patterns ถูกต้อง

### Phase 5: Integration

#### 5.1 Update Documentation
- อัพเดท `examples/` index
- เพิ่ม skill ลงใน documentation
- อัพเดท related skills
- สร้าง changelog entry

#### 5.2 Test Integration
- ทดสอบการใช้งานจริง
- ตรวจสอบกับ workflows อื่น
- ทดสอบ dependencies
- ตรวจสอบ compatibility

## Templates

### Basic Skill Template
```markdown
---
title: Skill Name
description: Brief description
type: skill
version: 1.0.0
auto_execution_mode: 3
file-patterns: ["*.md", "*.txt"]
follow:
  skills: []
  workflows: ["/write-workflows"]
  files: []
  mcp: []
---

# Skill Name

## Purpose

[Describe the purpose]

## Scope

[Define the scope]

## Implementation

[Implementation details]

## Verification Checklist

- [ ] Item 1
- [ ] Item 2

## Related Skills

- `@related-skill`
```

### Directory Structure Template
```
skill-name/
├── SKILL.md
├── patterns/
│   └── 01-basic-pattern.md
├── rules/
│   └── 01-basic-rule.md
└── templates/
    └── template.md
```

## Quality Checklist

### Content Quality
- [ ] Purpose ชัดเจนและกระชับ
- [ ] Scope ถูกกำหนดดี
- [ ] Examples เป็นประโยชน์
- [ ] Rules เป็นทางการ
- [ ] Templates ใช้งานได้

### Structure Compliance
- [ ] มี SKILL.md ที่ถูกต้อง
- [ ] มี patterns/ directory
- [ ] มี rules/ directory
- [ ] โครงสร้างตรงมาตรฐาน
- [ ] File names ตาม conventions

### Integration Readiness
- [ ] Follow references ถูกต้อง
- [ ] Dependencies ถูกกำหนด
- [ ] File patterns ถูกต้อง
- [ ] Documentation ครบถ้วน

## Common Pitfalls

### หลีกเลี่ยง:
- ไม่ศึกษา skills ที่มีอยู่ก่อน
- สร้าง skill ที่ซ้ำซ้อนกับที่มี
- ไม่ทำตามมาตรฐานโครงสร้าง
- ลืมเพิ่ม verification checklist

### แก้ไข:
- ค้นคว้า skills ที่มีอยู่ก่อน
- ศึกษา examples ที่เกี่ยวข้อง
- ทำตาม templates และ patterns
- ทดสอบอย่างละเอียด

## Related Workflows

- `@write-skills` - Main skill for writing skills
- `@write-markdown` - For documentation
- `@update-skills` - For updating existing skills
- `@write-workflows` - For creating workflows

## Success Criteria

✅ **Skill Created**: Skill ถูกสร้างตามมาตรฐาน
✅ **Quality Assured**: Content ผ่าน quality checks
✅ **Integrated**: Skill ทำงานร่วมกับระบบ
✅ **Documented**: Documentation ครบถ้วน
✅ **Tested**: Skill ทดสอบแล้วว่าทำงานได้
