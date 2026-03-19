---
description: แนวทางปฏิบัติที่ดีที่สุดสำหรับ basic skill
title: Best Practices Knowledge
tags: [knowledge, best-practices, basic-skill]
goals:
  - รวบรวม best practices ที่สำคัญ
  - ให้แนวทางการปรับปรุง
  - ทำให้มีประสิทธิภาพสูง
---

# Best Practices Knowledge

## Purpose

รวบรวมแนวทางปฏิบัติที่ดีที่สุดสำหรับการพัฒนาและใช้งาน basic skills

## Core Best Practices

### 1. Structure Best Practices

#### Directory Organization
```text
✅ RECOMMENDED:
basic-skill/
├── SKILL.md              # Main documentation
├── patterns/             # Reusable patterns
│   └── 01-basic-pattern.md
├── rules/                # Usage guidelines
│   ├── 1-setup.md
│   ├── 2-usage.md
│   └── 3-best-practices.md
└── knowledge/            # Core knowledge
    ├── core-concept.md
    └── best-practices.md

❌ AVOID:
basic-skill/
├── skill.md             # Inconsistent naming
├── stuff/               # Unclear purpose
├── files/               # Too generic
└── docs/                # Redundant with SKILL.md
```

**Key Principles**:
- ใช้ naming conventions ที่สม่ำเสมอ
- จัดกลุ่มตามวัตถุประสงค์
- หลีกเลี่ยงชื่อที่ไม่ชัดเจน

#### File Naming Standards
- **Directories**: kebab-case (basic-skill, my-cool-skill)
- **Rules files**: numeric prefix (1-setup.md, 2-usage.md)
- **Patterns**: descriptive names (01-basic-pattern.md)
- **Knowledge**: clear topics (core-concept.md)

### 2. Content Best Practices

#### Writing Style
```markdown
✅ GOOD:
## Purpose

ตัวอย่าง skill ขั้นพื้นฐานที่แสดงโครงสร้างที่เรียบง่าย:

- **Minimal structure** - มีเฉพาะสิ่งที่จำเป็น
- **Clear purpose** - ทำหนึ่งอย่างให้ดี
- **Easy to understand** - เหมาะสำหรับผู้เริ่มต้น

❌ AVOID:
## About This

This skill is like, you know, for beginners and stuff. It's pretty basic and simple and easy to understand for people who are just starting out with this kind of thing.
```

**Guidelines**:
- เขียนในภาษาที่เข้าใจง่าย
- ใช้ bullet points สำหรับ lists
- ใช้ bold สำหรับ emphasis
- หลีกเลี่ยง jargon ที่ไม่จำเป็น

#### Section Structure
```markdown
✅ OPTIMAL ORDER:
1. Purpose (ทำไม)
2. Scope (ทำอะไร)
3. โครงสร้าง Directory (โครงสร้าง)
4. หมวดหมู่ไฟล์ (การจัดหมวด)
5. Implementation (วิธีทำ)
6. Verification Checklist (ตรวจสอบ)
7. Related Skills (ที่เกี่ยวข้อง)
```

### 3. Quality Best Practices

#### Verification Standards
ทุก basic skill ต้องมี:

```markdown
## Verification Checklist

### Required Components
- [ ] Frontmatter ครบถ้วน
- [ ] Required sections มีครบ
- [ ] Directory structure ถูกต้อง
- [ ] File naming ตาม conventions

### Quality Checks
- [ ] Content ชัดเจนและกระชับ
- [ ] Examples ทำงานได้จริง
- [ ] Links ทำงานได้ทั้งหมด
- [ ] ไม่มี content ซ้ำซ้อน
```

#### Testing Guidelines
- **Manual Testing**: ทดสอบทุก steps ด้วยมือ
- **Peer Review**: ให้คนอื่นตรวจสอบ
- **User Testing**: ให้ผู้เริ่มต้นลองใช้
- **Iteration**: ปรับปรุงตาม feedback

## Development Best Practices

### 1. Starting New Skills

#### Template-Based Approach
```bash
# 1. Copy basic-skill as template
cp -r basic-skill my-new-skill

# 2. Customize frontmatter
vim my-new-skill/SKILL.md

# 3. Update content for domain
vim my-new-skill/patterns/01-basic-pattern.md

# 4. Verify structure
cd my-new-skill && find . -type f
```

#### Customization Guidelines
- **Preserve Structure**: ไม่เปลี่ยนโครงสร้างพื้นฐาน
- **Adapt Content**: ปรับ content ให้เหมาะกับ domain
- **Add Value**: เพิ่ม features ที่จำเป็นเท่านั้น
- **Maintain Quality**: รักษามาตรฐานคุณภาพ

### 2. Iterative Development

#### Phase-Based Development
```text
Phase 1: Foundation (1-2 days)
├── Create directory structure
├── Write basic frontmatter
└── Add required sections

Phase 2: Content (2-3 days)
├── Fill in all sections
├── Add examples
└── Create patterns

Phase 3: Quality (1-2 days)
├── Review content
├── Test examples
├── Verify structure
└── Get feedback

Phase 4: Refinement (1 day)
├── Address feedback
├── Polish content
└── Final verification
```

#### Continuous Improvement
- **Version Control**: ใช้ semantic versioning
- **Change Documentation**: บันทึกการเปลี่ยนแปลง
- **Regular Reviews**: ตรวจสอบอย่างสม่ำเสมอ
- **Community Feedback**: รับ feedback จาก users

## Maintenance Best Practices

### 1. Regular Maintenance

#### Monthly Checklist
- [ ] ตรวจสอบ links ทั้งหมด
- [ ] อัปเดต examples ให้ทันสมัย
- [ ] ตรวจสอบความสมบูรณ์ของ content
- [ ] ตรวจสอบความเข้ากันได้กับ standards ใหม่

#### Quarterly Reviews
- [ ] ประเมินความเกี่ยวข้อง
- [ ] อัปเดต dependencies
- [ ] ปรับปรุง best practices
- [ ] วางแผนการพัฒนาต่อไป

### 2. Version Management

#### Semantic Versioning
```text
1.0.0 - Initial release
1.1.0 - Add new features (backward compatible)
1.1.1 - Bug fixes
2.0.0 - Breaking changes
```

#### Release Process
1. **Update Version**: ปรับ version ใน frontmatter
2. **Document Changes**: เพิ่ม changelog
3. **Test Thoroughly**: ทดสอบอย่างละเอียด
4. **Tag Release**: สร้าง git tag
5. **Communicate**: แจ้งการเปลี่ยนแปลง

## Community Best Practices

### 1. Contribution Guidelines

#### For Contributors
- **Follow Standards**: ใช้มาตรฐานที่กำหนด
- **Provide Context**: อธิบายการเปลี่ยนแปลง
- **Test Changes**: ทดสอบการเปลี่ยนแปลง
- **Document**: เพิ่มเอกสารประกอบ

#### For Maintainers
- **Review Promptly**: ตรวจสอบอย่างรวดเร็ว
- **Provide Feedback**: ให้ feedback ที่สร้างสรรค์
- **Mentor Contributors**: ช่วยเหลือผู้มีส่วนร่วม
- **Recognize Contributions**: ยอมรับการมีส่วนร่วม

### 2. Knowledge Sharing

#### Documentation Standards
- **Clear Examples**: ให้ตัวอย่างที่ชัดเจน
- **Step-by-Step**: ให้ขั้นตอนที่ละเอียด
- **Troubleshooting**: ให้วิธีแก้ปัญหา
- **FAQ**: รวบรวมคำถามที่พบบ่อย

#### Communication Channels
- **Issues**: ใช้สำหรับ bug reports และ feature requests
- **Discussions**: ใช้สำหรับ general questions
- **Pull Requests**: ใช้สำหรับ contributions
- **Releases**: ใช้สำหรับ announcements

## Performance Best Practices

### 1. Content Performance

#### Readability
- **Short Sentences**: ใช้ประโยคสั้นๆ
- **Active Voice**: ใช้ active voice
- **Simple Language**: ใช้ภาษาที่เข้าใจง่าย
- **Visual Structure**: ใช้ headings และ lists

#### Navigation
- **Logical Flow**: จัดลำดับ content อย่างเป็นเหตุผล
- **Clear Headings**: ใช้ headings ที่บอกเนื้อหา
- **Cross-References**: อ้างอิงถึงส่วนที่เกี่ยวข้อง
- **Quick Access**: มี quick reference ที่จำเป็น

### 2. Technical Performance

#### File Organization
- **Logical Grouping**: จัดกลุ่มไฟล์ตามความเกี่ยวข้อง
- **Appropriate Size**: ไม่ให้ไฟล์ใหญ่เกินไป
- **Efficient Structure**: โครงสร้างที่เข้าถึงได้ง่าย
- **Minimal Dependencies**: ลด dependencies ที่ไม่จำเป็น

#### Link Management
- **Internal Links**: ตรวจสอบว่าทำงานได้
- **External Links**: ใช้ HTTPS เมื่อเป็นไปได้
- **Reference Format**: ใช้รูปแบบที่สม่ำเสมอ
- **Link Descriptions**: ให้คำอธิบายที่ชัดเจน

## Success Metrics

### Quality Metrics
- **Completion Rate**: % ของ skills ที่สมบูรณ์
- **Error Rate**: % ของ errors ที่พบ
- **User Satisfaction**: คะแนนความพึงพอใจ
- **Adoption Rate**: % ของการนำไปใช้

### Performance Metrics
- **Loading Time**: เวลาในการโหลด
- **Navigation Time**: เวลาในการค้นหา
- **Comprehension Rate**: % ของการเข้าใจ
- **Task Completion**: % ของการทำงานสำเร็จ

## Common Pitfalls and Solutions

### 1. Structure Pitfalls

#### Problem: Inconsistent Structure
**Solution**: ใช้ templates และ checklists

#### Problem: Missing Required Files
**Solution**: ใช้ automated validation

#### Problem: Poor File Organization
**Solution**: ทบทวน organization guidelines

### 2. Content Pitfalls

#### Problem: Unclear Purpose
**Solution**: เขียน purpose statement ที่ชัดเจน

#### Problem: Vague Scope
**Solution**: กำหนด boundaries ที่ชัดเจน

#### Problem: Missing Examples
**Solution**: เพิ่ม examples ที่ใช้งานได้จริง

### 3. Quality Pitfalls

#### Problem: Inconsistent Quality
**Solution**: ใช้ quality standards และ reviews

#### Problem: Outdated Content
**Solution**: ตั้งค่า maintenance schedule

#### Problem: Poor Documentation
**Solution**: ใช้ documentation standards

## Success Criteria

✅ **Consistent Structure**: โครงสร้างสม่ำเสมอทั้งหมด  
✅ **High-Quality Content**: เนื้อหาคุณภาพสูง  
✅ **Excellent User Experience**: ประสบการณ์ผู้ใช้ดีเยี่ยม  
✅ **Active Community**: Community ที่มีส่วนร่วม  
✅ **Continuous Improvement**: พัฒนาอย่างต่อเนื่อง  
✅ **Measurable Success**: วัดผลได้จริง
