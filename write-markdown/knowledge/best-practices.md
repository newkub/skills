---
description: แนวทานการปฏิบัติที่ดีที่สุดสำหรับการใช้ Markdown
title: best-practices
tags: [markdown, best-practices, patterns, guidelines]
goals:
  - รวบรวมแนวทานการปฏิบัติที่ดีที่สุด
  - ให้ patterns สำหรับการเขียน Markdown ที่มีประสิทธิภาพ
  - แนะนำ conventions ที่ควรปฏิบัติตาม
---

## Best Practices

### แนวทานการปฏิบัติที่ดีที่สุดสำหรับ Markdown

#### 1. การเขียนเนื้อหา

##### 1.1 หลักการพื้นฐาน

**Clarity First**
- เขียนให้กระชับและตรงประเด็น
- ใช้ภาษาที่เข้าใจง่าย
- หลีกเลี่ยงคำซับซ้อนและ jargon ที่ไม่จำเป็น

**Consistency**
- ใช้รูปแบบเดียวกันทั้งเอกสาร
- กำหนดมาตรฐานแล้วปฏิบัติตาม
- ใช้ terminology ที่สม่ำเสมอ

**Structure**
- แบ่งเนื้อหาเป็นส่วนๆ ที่เป็นลำดับ
- ใช้ headings ที่เหมาะสม
- สร้าง flow ที่เป็นเรื่องเป็นราว

##### 1.2 การเขียน Headings

```markdown
# หัวข้อหลัก - ใช้เพียงครั้งเดียว

## หัวข้อรอง - สำหรับ sections หลัก

### หัวข้อย่อย - สำหรับ subsections

#### รายละเอียด - สำหรับรายละเอียดเฉพาะ
```

**Best Practices:**
- ใช้ H1 เพียงครั้งเดียวต่อเอกสาร
- ข้ามระดับ heading ไม่ได้ (H1 → H3)
- ใช้ title case หรือ sentence style อย่างใดอย่างหนึ่งอย่างสม่ำเสมอ
- ทำให้ headings สื่อความหมายชัดเจน

#### 2. การจัดรูปแบบ

##### 2.1 Lists

**Unordered Lists**
```markdown
- ใช้ `-` สำหรับ unordered lists
- ใช้ indentation 2 spaces สำหรับ nested items
- รักษา consistency ของ markers

  - Nested item level 1
  - Another nested item

    - Deep nested item
    - Another deep item
```

**Ordered Lists**
```markdown
1. ใช้ `1.` สำหรับ ordered lists
2. ใช้ indentation 2 spaces สำหรับ nested items
3. รักษา numbering ที่ถูกต้อง

   1. Nested ordered item
   2. Another nested item
```

##### 2.2 Code Blocks

```javascript
// ใส่ comment อธิบายเมื่อจำเป็น
function example() {
  return "Hello World";
}
```

**Best Practices:**
- ระบุภาษาเสมอ
- ใช้ syntax highlighting
- เพิ่ม comment เมื่อจำเป็น
- จำกัดความยาวของ code blocks

##### 2.3 Tables

```markdown
| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |
```

**Alignment Tables**
```markdown
| Left | Center | Right |
|:-----|:------:|------:|
| Text | Text   | Text  |
| Data | Data   | Data  |
```

#### 3. การใช้ Links และ Images

##### 3.1 Links

```markdown
[ข้อความที่สื่อความหมาย](https://example.com)
[อ่านเพิ่มเติม](./more-info.md)
[API Reference](#api-reference)
[Email Me](mailto:user@example.com)
```

**Best Practices:**
- ใช้ข้อความที่สื่อความหมายชัดเจน
- ตรวจสอบว่า links ทำงานได้จริง
- ใช้ relative links สำหรับ internal links
- หลีกเลี่ยง URLs ที่ยาวเกินไปในข้อความ

##### 3.2 Images

```markdown
![Alt text ที่บรรยายรูปภาพ](./image.jpg)
![Diagram showing system architecture](./architecture.png)
```

**Best Practices:**
- เสมอใส่ alt text
- ใช้ descriptive filenames
- จัดเก็บรูปภาพใน directory ที่เหมาะสม
- รักษาขนาดรูปภาพที่เหมาะสม

#### 4. การจัดการเอกสาร

##### 4.1 Frontmatter

```yaml
---
title: "Document Title"
description: "Brief description of the document"
tags: [tag1, tag2, tag3]
date: "2024-01-01"
author: "Author Name"
last_updated: "2024-01-15"
version: "1.0"
---
```

**Best Practices:**
- ใช้ quotes สำหรับ values ที่มี spaces
- ใช้ consistent date format (ISO 8601)
- เพิ่ม metadata ที่จำเป็นเท่านั้น
- อัพเดท last_updated เมื่อมีการเปลี่ยนแปลง

##### 4.2 การจัดรูปแบบเอกสาร

**Standard Structure**
```markdown
# Document Title

## Overview
Brief description of what this document covers

## Prerequisites
What readers need to know beforehand

## Main Content
The main sections of the document

## Examples
Practical examples and use cases

## References
Links to additional resources
```

#### 5. การทำงานร่วมกับ Tools

##### 5.1 Version Control

**Git Best Practices**
- เก็บ Markdown files ใน Git
- ใช้ meaningful commit messages
- ทำ review ก่อน merge
- ใช้ branches สำหรับ features ใหญ่ๆ

**Commit Message Format**
```
docs: update API documentation
fix: correct broken link in README
feat: add new installation guide
```

##### 5.2 Linting และ Validation

**markdownlint Configuration**
```json
{
  "default": true,
  "MD013": false,
  "MD033": false,
  "MD041": false,
  "MD007": {
    "indent": 2
  }
}
```

**Validation Commands**
```bash
# ตรวจสอบความถูกต้อง
markdownlint *.md

# ตรวจสอบ links
markdown-link-check *.md

# แปลงเป็น HTML เพื่อทดสอบ
pandoc input.md -o output.html
```

#### 6. การเขียนสำหรับ Audience ต่างๆ

##### 6.1 Technical Documentation

- ใช้ precise terminology
- เพิ่ม code examples
- ใส่ API references
- เพิ่ม troubleshooting sections

##### 6.2 User Guides

- ใช้ภาษาที่ง่ายต่อการเข้าใจ
- เพิ่ม screenshots หรือ diagrams
- ใส่ step-by-step instructions
- เพิ่ม FAQ sections

##### 6.3 API Documentation

- ใช้ consistent format สำหรับ endpoints
- เพิ่ม request/response examples
- ใส่ error codes และ handling
- เพิ่ม authentication information

#### 7. การบำรุงรักษา

##### 7.1 Regular Updates

- อัพเดทเมื่อมีการเปลี่ยนแปลง
- ตรวจสอบความถูกต้องเป็นประจำ
- เก็บ changelog สำหรับการเปลี่ยนแปลงสำคัญ
- Review และ revise content เป็นประจำ

##### 7.2 Quality Assurance

**Checklist**
- [ ] ตรวจสอบ spelling และ grammar
- [ ] ตรวจสอบ links ทั้งหมด
- [ ] ทดสอบ code examples
- [ ] ตรวจสอบ consistency
- [ ] ทดสอบ rendering ในหลาย platforms

#### 8. Common Pitfalls ที่ควรหลีกเลี่ยง

1. **ข้ามระดับ headings** (H1 → H3)
2. **ไม่ใส่ alt text สำหรับรูปภาพ**
3. **ใช้ inconsistent formatting**
4. **ลืมตรวจสอบ links**
5. **เขียน paragraphs ที่ยาวเกินไป**
6. **ใช้ tables ที่ซับซ้อนเกินความจำเป็น**
7. **ไม่อัพเดท documentation**
8. **ใช้ jargon โดยไม่อธิบาย**

#### 9. Performance Considerations

##### 9.1 File Size
- แบ่ง large documents ออกเป็นหลายไฟล์
- ใช้ includes สำหรับ content ที่ซ้ำกัน
- จัดเก็บรูปภาพใน directory แยก

##### 9.2 Loading Time
- จำกัดขนาดรูปภาพ
- ใช้ lazy loading สำหรับ images
- จัดเก็บ assets ใน CDN

### สรุป

การเขียน Markdown ที่ดีต้องคำนึงถึง:
- **Clarity**: เขียนให้เข้าใจง่าย
- **Consistency**: ใช้รูปแบบที่สม่ำเสมอ
- **Structure**: จัดรูปแบบเอกสารให้เป็นระเบียบ
- **Quality**: ตรวจสอบความถูกต้องเสมอ
- **Maintenance**: อัพเดทและบำรุงรักษาอย่างสม่ำเสมอ

การปฏิบัติตาม best practices เหล่านี้จะช่วยให้เอกสาร Markdown มีคุณภาพสูงและมีประโยชน์สูงสุด
