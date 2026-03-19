---
description: แนวทางปฏิบัติที่ดีที่สุดสำหรับการเขียน Markdown
title: 3-best-practices
tags: [markdown, best-practices, guidelines]
goals:
  - ให้แนวทานการเขียน Markdown ที่ดีที่สุด
  - รวบรวม tips และ tricks สำหรับการเขียน
  - แนะนำ patterns ที่ควรปฏิบัติตาม
---

## 3. Best Practices

### แนวทางปฏิบัติที่ดีที่สุดสำหรับการเขียน Markdown

#### 3.1 หลักการพื้นฐาน

##### ความสม่ำเสมอ (Consistency)
- ใช้รูปแบบเดียวกันทั้งเอกสาร
- เลือก heading style แล้วใช้ตลอด
- กำหนดมาตรฐานสำหรับ lists และ tables

##### ความชัดเจน (Clarity)
- ใช้ headings ที่สื่อความหมายชัดเจน
- เขียนให้กระชับและตรงประเด็น
- หลีกเลี่ยงคำซ้ำซ้อน

##### ความสามารถในการอ่าน (Readability)
- แบ่งย่อหน้าที่เหมาะสม
- ใช้ white space อย่างมีประสิทธิภาพ
- จัดรูปแบบ code ให้ง่ายต่อการอ่าน

#### 3.2 การจัดรูปแบบเอกสาร

##### Headings
```markdown
# หัวข้อหลัก (H1) - ใช้เพียงครั้งเดียวต่อเอกสาร

## หัวข้อรอง (H2) - สำหรับ sections หลัก

### หัวข้อย่อย (H3) - สำหรับ subsections

#### รายละเอียด (H4) - สำหรับรายละเอียดเฉพาะ
```

**Best Practices:**
- ใช้ H1 เพียงครั้งเดียวต่อเอกสาร
- ข้ามระดับ heading ไม่ได้ (H1 → H3 ไม่ได้)
- ใช้ title case หรือ sentence style อย่างใดอย่างหนึ่งอย่างสม่ำเสมอ

##### Lists
```markdown
- ใช้ `-` สำหรับ unordered lists
- ใช้ `1.` สำหรับ ordered lists
- ใช้ indentation 2 spaces สำหรับ nested items
```

##### Code Blocks
```markdown
```javascript
// ใส่ comment อธิบายเมื่อจำเป็น
function example() {
  return "Hello World";
}
```
```

**Best Practices:**
- ระบุภาษาเสมอ
- ใช้ syntax highlighting
- เพิ่ม comment เมื่อจำเป็น

#### 3.3 การเขียนเนื้อหา

##### ภาษาและสำนวน
- **ภาษาไทย**: สำหรับ headings และ descriptions
- **ภาษาอังกฤษ**: สำหรับ code และ technical terms
- **สำนวน**: กระชับ ตรงประเด็น ไม่ verbose

##### การใช้ Links
```markdown
[ข้อความที่ชัดเจน](https://example.com)
[อ่านเพิ่มเติม](./more-info.md)
[API Reference](#api-reference)
```

**Best Practices:**
- ใช้ข้อความที่สื่อความหมายชัดเจน
- ตรวจสอบว่า links ทำงานได้จริง
- ใช้ relative links สำหรับ internal links

##### การใช้ Images
```markdown
![Alt text ที่บรรยายรูปภาพ](./image.jpg)
![Diagram showing architecture](./architecture.png)
```

**Best Practices:**
- เสมอใส่ alt text
- ใช้ descriptive filenames
- จัดเก็บรูปภาพใน directory ที่เหมาะสม

#### 3.4 การจัดการ Tables

##### รูปแบบมาตรฐาน
```markdown
| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |
```

##### Alignment
```markdown
| Left | Center | Right |
|:-----|:------:|------:|
| Text | Text   | Text  |
| Data | Data   | Data  |
```

**Best Practices:**
- ใช้ header row เสมอ
- จัด alignment ให้สมเหตุสมผล
- หลีกเลี่ยง tables ที่ซับซ้อนเกินไป

#### 3.5 การทำงานกับ Frontmatter

```yaml
---
title: "Document Title"
description: "Brief description"
tags: [tag1, tag2]
date: "2024-01-01"
author: "Author Name"
---
```

**Best Practices:**
- ใช้ quotes สำหรับ values ที่มี spaces
- ใช้ consistent date format
- เพิ่ม metadata ที่จำเป็นเท่านั้น

#### 3.6 การทดสอบและตรวจสอบ

##### ตรวจสอบความถูกต้อง
- ใช้ markdown linting tools
- ตรวจสอบ links ทั้งหมด
- ทดสอบ rendering ในหลาย platforms

##### การ review
- อ่านทวนเนื้อหาทั้งหมด
- ตรวจสอบ spelling และ grammar
- ยืนยันว่า formatting สม่ำเสมอ

#### 3.7 การบำรุงรักษา

##### Version Control
- เก็บ Markdown files ใน Git
- ใช้ meaningful commit messages
- ทำ review ก่อน merge

##### Documentation Updates
- อัพเดทเมื่อมีการเปลี่ยนแปลง
- ตรวจสอบความถูกต้องเป็นประจำ
- เก็บ changelog สำหรับการเปลี่ยนแปลงสำคัญ

### Common Pitfalls ที่ควรหลีกเลี่ยง

1. **ข้ามระดับ headings** (H1 → H3)
2. **ไม่ใส่ alt text สำหรับรูปภาพ**
3. **ใช้ inconsistent formatting**
4. **ลืมตรวจสอบ links**
5. **เขียน paragraphs ที่ยาวเกินไป**
6. **ใช้ tables ที่ซับซ้อนเกินความจำเป็น**

### Resources สำหรับศึกษาเพิ่มเติม

- `../reference/external-links.md` - แหล่งข้อมูลภายนอก
- `../examples/` - ตัวอย่างการใช้งานจริง
- CommonMark Specification - https://commonmark.org/
- GitHub Flavored Markdown - https://github.github.com/gfm/
