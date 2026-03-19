---
description: แนวทางปฏิบัติที่ดีที่สุดสำหรับ basic skill
title: 3-Best Practices
tags: [rules, best-practices, basic-skill]
goals:
  - ให้แนวทางปฏิบัติที่ดีที่สุด
  - ป้องกัน common mistakes
  - ทำให้มีคุณภาพสูง
---

# 3-Best Practices

## Purpose

แนวทางปฏิบัติที่ดีที่สุดสำหรับการพัฒนาและใช้งาน basic skills

## Core Principles

### 1. Simplicity First
- เริ่มจากที่ง่ายที่สุด
- ไม่เพิ่ม complexity ที่ไม่จำเป็น
- ใช้ structure พื้นฐานเสมอ

### 2. Clarity Over Complexity
- เขียนให้เข้าใจง่าย
- ใช้ภาษาที่ชัดเจน
- หลีกเลี่ยง jargon ที่ไม่จำเป็น

### 3. Consistency Matters
- ใช้ naming conventions อย่างสม่ำเสมอ
- รักษา structure ที่สม่ำเสมอ
- ใช้ formatting ที่สม่ำเสมอ

## Structure Best Practices

### Directory Organization
```text
✅ GOOD: basic-skill/
├── SKILL.md
├── patterns/
│   └── 01-basic-pattern.md
└── rules/
    ├── 1-setup.md
    ├── 2-usage.md
    └── 3-best-practices.md

❌ BAD: basic-skill/
├── skill.md
├── stuff/
└── things/
```

### File Naming
- ใช้ kebab-case สำหรับ directories
- ใช้ descriptive names
- ใช้ numeric prefixes สำหรับ rules

## Content Best Practices

### Writing Style
- เขียนในภาษาที่เข้าใจง่าย
- ใช้ประโยคสั้นๆ
- ใช้ headings ที่ชัดเจน

### Section Organization
```markdown
✅ GOOD:
## Purpose
[Clear, concise statement]

## Scope
[Specific boundaries]

❌ BAD:
## About This Thing
[Long, vague explanation]

## What It Does
[Overlapping with purpose]
```

### Examples and Templates
- ให้ตัวอย่างที่ใช้งานได้จริง
- ใช้ code blocks ที่สมบูรณ์
- อธิบายตัวอย่างอย่างชัดเจน

## Development Best Practices

### Starting New Skills
1. **Copy basic-skill** เป็น template
2. **Customize frontmatter** ตามความต้องการ
3. **Update content** ให้เหมาะสมกับ domain
4. **Verify structure** ก่อน publish

### Iterative Development
1. Start with minimal structure
2. Add content gradually
3. Test each addition
4. Refine based on feedback

### Quality Assurance
- ตรวจสอบ structure ก่อน content
- ใช้ verification checklist
- ทดสอบ examples ที่ให้ไว้
- ขอ review จาก peers

## Common Pitfalls to Avoid

### Structure Issues
- ❌ ไม่มี required directories
- ❌ ใช้ naming ที่ไม่สม่ำเสมอ
- ❌ มี empty directories

### Content Issues
- ❌ ขาด required sections
- ❌ เขียน content ซ้ำซ้อน
- ❌ ใช้ jargon ที่ไม่จำเป็น

### Quality Issues
- ❌ ไม่มี examples
- ❌ ไม่มี verification checklist
- ❌ ไม่มี related skills

## Maintenance Best Practices

### Regular Updates
- Review content ทุก 3 เดือน
- Update examples ให้ทันสมัย
- Check links ให้ทำงานได้

### Version Management
- ใช้ semantic versioning
- Document changes ใน changelog
- Tag releases อย่างสม่ำเสมอ

### Community Engagement
- Respond to feedback อย่างรวดเร็ว
- Contribute to improvements
- Share knowledge กับ community

## Success Metrics

### Quality Indicators
- ✅ Structure ถูกต้องครบถ้วน
- ✅ Content ชัดเจนและกระชับ
- ✅ Examples ทำงานได้จริง
- ✅ Documentation สมบูรณ์

### Usage Indicators
- ✅ ผู้ใช้สามารถเริ่มต้นได้ง่าย
- ✅ สามารถปรับแต่งได้
- ✅ สามารถขยายได้
- ✅ มีคุณค่าใช้งานจริง

## Continuous Improvement

### Learning Loop
1. **Observe** ผู้ใช้ใช้งานอย่างไร
2. **Analyze** ปัญหาและ pain points
3. **Improve** ปรับปรุงตามข้อมูล
4. **Measure** วัดผลการเปลี่ยนแปลง

### Feedback Integration
- รวบรวม feedback จากหลายแหล่ง
- จัดลำดับความสำคัญของ issues
- แก้ไขในลำดับที่เหมาะสม
- สื่อสารการเปลี่ยนแปลง

## Success Criteria

✅ **Simple Structure**: โครงสร้างง่าย ชัดเจน  
✅ **Clear Content**: เนื้อหาเข้าใจง่าย  
✅ **Working Examples**: ตัวอย่างที่ใช้ได้จริง  
✅ **Consistent Quality**: คุณภาพสม่ำเสมอ  
✅ **Easy Maintenance**: บำรุงรักษาง่าย  
✅ **Community Ready**: พร้อมสำหรับ community
