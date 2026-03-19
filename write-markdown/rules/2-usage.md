---
description: วิธีการใช้งาน Markdown อย่างมีประสิทธิภาพ
title: 2-usage
tags: [markdown, usage, guide]
goals:
  - สอนวิธีการใช้งาน Markdown พื้นฐานถึงขั้นสูง
  - ให้ตัวอย่างการใช้งานจริง
  - แนะนำ best practices สำหรับการเขียน
---

## 2. Usage

### การใช้งาน Markdown อย่างมีประสิทธิภาพ

#### 2.1 พื้นฐาน Markdown

##### Headings
```markdown
# H1 - Main Title
## H2 - Section
### H3 - Subsection
#### H4 - Detail
##### H5 - Minor point
###### H6 - Fine print
```

##### Text Formatting
```markdown
*italic* or _italic_
**bold** or __bold__
***bold italic***
~~strikethrough~~
`inline code`
```

##### Lists
```markdown
- Unordered item 1
- Unordered item 2
  - Nested item
  - Nested item 2

1. Ordered item 1
2. Ordered item 2
   1. Nested ordered
   2. Nested ordered 2
```

#### 2.2 ขั้นสูง

##### Tables
```markdown
| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |
```

##### Code Blocks
```markdown
```javascript
function hello() {
  console.log("Hello World");
}
```
```

##### Links and Images
```markdown
[Link Text](https://example.com)
![Alt Text](image.jpg)
```

##### Blockquotes
```markdown
> This is a blockquote
> 
> It can span multiple lines
> 
> > And can be nested
```

#### 2.3 GitHub Flavored Markdown (GFM)

##### Task Lists
```markdown
- [x] Completed task
- [ ] Incomplete task
- [ ] Another task
```

##### Strikethrough
```markdown
~~This text is crossed out~~
```

##### Tables with Alignment
```markdown
| Left | Center | Right |
|------|--------|-------|
| Text | Text   | Text  |
| Data | Data   | Data  |
```

#### 2.4 การใช้งานร่วมกับ Tools

##### VS Code Shortcuts
- `Ctrl/Cmd + B`: Bold
- `Ctrl/Cmd + I`: Italic
- `Ctrl/Cmd + K`: Insert link
- `Ctrl/Cmd + Shift + \` : Toggle preview

##### การทำงานกับ Obsidian
- ใช้ `[[wikilinks]]` สำหรับ internal links
- ใช้ `#tags` สำหรับ categorization
- ใช้ `---` สำหรับ frontmatter

#### 2.5 Best Practices

1. **ใช้ headings ตามลำดับชั้นที่ถูกต้อง**
2. **เพิ่ม alt text สำหรับรูปภาพ**
3. **ใช้ semantic markup**
4. **ทดสอบ links ทั้งหมด**
5. **ใช้ consistent formatting**

#### 2.6 การตรวจสอบความถูกต้อง

```bash
# ตรวจสอบด้วย markdownlint
markdownlint *.md

# ตรวจสอบด้วย remark
remark *.md

# แปลงเป็น HTML เพื่อทดสอบ
pandoc input.md -o output.html
```

### ตัวอย่างการใช้งานจริง

ดูตัวอย่างเพิ่มเติมใน:
- `../examples/` - ตัวอย่าง 200+ รายการ
- `../templates/` - templates สำหรับใช้งาน
- `../reference/examples.md` - ตัวอย่างการใช้งานเฉพาะ
