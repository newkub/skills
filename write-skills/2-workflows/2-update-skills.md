---
description: Workflow สำหรับการอัพเดท skills ที่มีอยู่แล้ว
title: update-skills
tags: [workflow, skills, update, maintenance]
goals:
  - แนะนำขั้นตอนการอัพเดท skills ให้เป็นมาตรฐาน
  - ให้แนวทางการปรับปรุงคุณภาพ
  - ทำให้การอัพเดทเป็นไปอย่างเป็นระบบ
---

# Update Skills Workflow

## Purpose

Workflow สำหรับการอัพเดท skills ที่มีอยู่แล้ว:

- **Standardization** - ทำให้ skills เข้ากับมาตรฐานใหม่
- **Quality Improvement** - ปรับปรุงคุณภาพเนื้อหา
- **Structure Updates** - อัพเดทโครงสร้างตามที่กำหนด
- **Dependency Management** - จัดการ dependencies และ references

## When to Use

ใช้ workflow นี้เมื่อ:
- มีการเปลี่ยนมาตรฐานโครงสร้าง
- ต้องการปรับปรุงคุณภาพ skills
- มี dependencies ใหม่ที่ต้องอัพเดท
- พบปัญหาหรือ inconsistencies ใน skills

## Prerequisites

ก่อนเริ่ม workflow:
- [ ] อ่านมาตรฐานล่าสุดของ `@write-skills`
- [ ] สำรองข้อมูล skills ที่จะอัพเดท
- [ ] ระบุสิ่งที่ต้องเปลี่ยนแปลง
- [ ] วางแผนการอัพเดท

## Steps

### Phase 1: Assessment

#### 1.1 Current State Analysis
- ตรวจสอบโครงสร้างปัจจุบัน
- ระบุสิ่งที่ไม่ตรงมาตรฐาน
- ตรวจสอบความสมบูรณ์ของเนื้อหา
- รวบรวม dependencies ที่ใช้

#### 1.2 Gap Analysis
```bash
# ตรวจสอบโครงสร้าง
find . -name "*.md" -type f
tree . -I node_modules

# เปรียบเทียบกับมาตรฐาน
diff -r current/ standard/
```

#### 1.3 Impact Assessment
- ระบุ skills ที่ได้รับผลกระทบ
- ตรวจสอบ breaking changes
- วางแผน migration หากจำเป็น
- ประเมินความเสี่ยง

### Phase 2: Planning

#### 2.1 Update Strategy
- **Incremental**: อัพเดททีละส่วน
- **Batch**: อัพเดทหลาย skills พร้อมกัน
- **Rolling**: อัพเดทแบบค่อยๆ
- **Big Bang**: อัพเดททั้งหมดพร้อมกัน

#### 2.2 Priority Matrix
| Skill | Impact | Urgency | Priority |
|-------|--------|----------|----------|
| Core skills | High | High | 1 |
| Popular skills | Medium | Medium | 2 |
| Niche skills | Low | Low | 3 |

#### 2.3 Resource Planning
- กำหนดเวลาที่ต้องการ
- จัดลำดับความสำคัญ
- เตรียม resources ที่จำเป็น
- กำหนด success criteria

### Phase 3: Structure Updates

#### 3.1 Directory Structure
```bash
# อัพเดทโครงสร้างตามมาตรฐานใหม่
mkdir -p rules knowledge reference
mv old-files/ appropriate-directories/
```

#### 3.2 File Renaming
- เปลี่ยนชื่อไฟล์ตาม conventions
- ใช้ kebab-case สำหรับ file names
- เพิ่ม prefixes ตามที่กำหนด (update-*)
- จัดเรียงตามลำดับความสำคัญ

#### 3.3 Content Migration
- ย้ายเนื้อหาไปยังโครงสร้างใหม่
- ปรับปรุง formatting ตามมาตรฐาน
- อัพเดท internal links
- ตรวจสอบความถูกต้อง

### Phase 4: Content Updates

#### 4.1 Frontmatter Updates
```yaml
---
title: Updated Skill Title
description: Updated description
version: 2.0.0
auto_execution_mode: 3
file-patterns: ["*.md", "*.ts", "*.js"]
follow:
  skills: ["@updated-skill"]
  workflows: ["/write-workflows", "/update-workflows"]
  files: []
  mcp: []
---
```

#### 4.2 Structure Section Updates
```markdown
## โครงสร้าง Directory

```text
skill-name/
├── SKILL.md              # เอกสารหลักของ skill
├── rules/
│   ├── 1-setup.md
│   ├── 2-usage.md
│   └── 3-best-practices.md
├── knowledge/
│   ├── core-concept.md
│   └── best-practices.md
├── reference/
│   ├── examples.md
│   └── external-links.md
└── templates/             # templates สำหรับใช้งาน
```

## หมวดหมู่ไฟล์

| หมวดหมู่ | ตัวอย่าง | ใช้สำหรับ |
|---------|---------|----------|
| Core | `SKILL.md` | เอกสารหลักของ skill |
| Rules | `rules/*.md` | กฎและแนวทางการใช้งาน |
| Knowledge | `knowledge/*.md` | ความรู้และแนวคิด |
| Reference | `reference/*.md` | ตัวอย่างและแหล่งอ้างอิง |
```

#### 4.3 Content Quality Improvements
- ปรับปรุงความชัดเจนของเนื้อหา
- เพิ่ม examples และ templates
- อัพเดท best practices
- แก้ไข inconsistencies

### Phase 5: Integration Updates

#### 5.1 Dependencies Update
- อัพเดท `follow` references
- แก้ไข broken links
- เพิ่ม dependencies ใหม่
- ทดสอบ integrations

#### 5.2 Cross-Reference Updates
- อัพเดท links จาก skills อื่น
- แก้ไข references ใน documentation
- อัพเดท examples ที่เกี่ยวข้อง
- ทดสอบ workflows ที่เชื่อมโยง

### Phase 6: Validation

#### 6.1 Structure Validation
```bash
# ตรวจสอบโครงสร้าง
validate-structure.sh skill-name/

# ตรวจสอบ file patterns
check-file-patterns.sh skill-name/

# ตรวจสอบ links
check-links.sh skill-name/
```

#### 6.2 Content Validation
- [ ] โครงสร้างตรงมาตรฐาน
- [ ] เนื้อหาสมบูรณ์
- [ ] Links ทำงานได้
- [ ] Examples ถูกต้อง

#### 6.3 Integration Testing
- ทดสอบการใช้งานจริง
- ตรวจสอบกับ workflows อื่น
- ทดสอบ dependencies
- ตรวจสอบ performance

## Update Patterns

### Structure Migration Pattern
```bash
# 1. สำรองข้อมูล
cp -r skill-name skill-name.backup

# 2. สร้างโครงสร้างใหม่
mkdir -p skill-name/{rules,knowledge,reference}

# 3. ย้ายเนื้อหา
mv skill-name/old-files/* skill-name/appropriate-dir/

# 4. สร้างไฟล์ใหม่
touch skill-name/rules/{1-setup,2-usage,3-best-practices}.md
touch skill-name/knowledge/{core-concept,best-practices}.md
touch skill-name/reference/{examples,external-links}.md
```

### Content Update Pattern
```markdown
# อัพเดทหัวข้อเก่า
## Old Section Title

# เปลี่ยนเป็นหัวข้อใหม่
## New Section Title

# อัพเดทเนื้อหา
- เพิ่มรายละเอียดใหม่
- ปรับปรุงรายละเอียดเก่า
- เพิ่ม examples และ templates
```

### Reference Update Pattern
```markdown
## Reference

- `rules/1-setup.md` - การตั้งค่าและเตรียมความพร้อม
- `rules/2-usage.md` - วิธีการใช้งาน
- `rules/3-best-practices.md` - แนวทางปฏิบัติที่ดีที่สุด
- `knowledge/core-concept.md` - แนวคิดหลัก
- `knowledge/best-practices.md` - แนวทานการปฏิบัติที่ดี
- `reference/examples.md` - ตัวอย่างการใช้งาน
- `reference/external-links.md` - แหล่งข้อมูลภายนอก
- `examples/` - ตัวอย่างเพิ่มเติม
- `templates/` - templates สำหรับใช้งาน
```

## Quality Assurance

### Update Checklist
#### Structure Compliance
- [ ] มี `rules/`, `knowledge/`, `reference/` directories
- [ ] ชื่อไฟล์ตาม conventions
- [ ] โครงสร้างตรงมาตรฐาน
- [ ] ไม่มี empty directories

#### Content Quality
- [ ] เนื้อหาสมบูรณ์และถูกต้อง
- [ ] Examples ทำงานได้จริง
- [ ] Templates ใช้งานได้
- [ ] Best practices เป็นปัจจุบัน

#### Integration Readiness
- [ ] Follow references ถูกต้อง
- [ ] Dependencies อัพเดทแล้ว
- [ ] Links ทำงานได้ทั้งหมด
- [ ] File patterns ถูกต้อง

### Testing Procedures
```bash
# 1. ตรวจสอบโครงสร้าง
test-structure.sh

# 2. ตรวจสอบเนื้อหา
test-content.sh

# 3. ตรวจสอบ integrations
test-integrations.sh

# 4. ตรวจสอบ performance
test-performance.sh
```

## Rollback Procedures

### When to Rollback
- พบ critical bugs หลังอัพเดท
- Breaking changes กระทบกับ users
- Performance degradation อย่างมีนัยสำคัญ
- Dependencies conflicts

### Rollback Steps
```bash
# 1. หยุดการใช้งาน
disable-skill skill-name

# 2. คืนค่าจาก backup
rm -rf skill-name
mv skill-name.backup skill-name

# 3. ตรวจสอบการคืนค่า
verify-rollback.sh

# 4. แจ้ง users
notify-rollback.sh
```

## Related Workflows

- `@write-skills` - Main skill for writing skills
- `@add-skills` - For creating new skills
- `@write-workflows` - For creating workflows
- `@write-markdown` - For documentation

## Success Criteria

✅ **Structure Updated**: โครงสร้างตรงมาตรฐานใหม่
✅ **Content Improved**: เนื้อหามีคุณภาพดีขึ้น
✅ **Integration Working**: Dependencies และ references ทำงานได้
✅ **Quality Assured**: ผ่าน quality checks ทั้งหมด
✅ **Documentation Updated**: เอกสารอัพเดทครบถ้วน
