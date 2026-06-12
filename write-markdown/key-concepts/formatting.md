# Markdown Formatting

## Spacing Rules

### Line Breaks

- Single line break ไม่สร้าง paragraph ใหม่
- ใช้ double line break สำหรับ paragraph ใหม่
- ใช้ `<br>` สำหรับ forced line break

### Paragraph Spacing

```markdown
Paragraph 1

Paragraph 2
```

### List Spacing

```markdown
- Item 1
- Item 2

- Item 3 (new list)
```

## Indentation

### Code Indentation

```markdown
    Indented code block (4 spaces)
```

### List Indentation

```markdown
- Item 1
  - Nested item (2 spaces)
    - Deeply nested (4 spaces)
```

## Alignment

### Table Alignment

```markdown
| Left | Center | Right |
|:-----|:------:|------:|
| L    | C      | R     |
```

### Code Alignment

ใช้ spaces สำหรับ alignment ภายใน code blocks

## Character Encoding

- ใช้ UTF-8 encoding
- รองรับ Unicode characters
- ใช้ HTML entities สำหรับ special characters หากจำเป็น

## Whitespace

### Trailing Whitespace

- หลีกเลี่ยง trailing spaces
- ใช้ trim trailing whitespace
- ตรวจสอบด้วย linters

### Leading Whitespace

- ใช้ leading spaces สำหรับ indentation
- ใช้ tabs หรือ spaces อย่างใดอย่างหนึ่งอย่างสม่ำเสมอ
- หลีกเลี่ยง mixed tabs และ spaces

## Line Length

- แนะนำ line length ไม่เกิน 80-100 characters
- ใช้ soft wrap สำหรับ long lines
- หลีกเลี่ยง hard breaks ในกลาง sentences

## Case Conventions

### Headers

- Title Case สำหรับ English headers
- Sentence case สำหรับ English subheaders
- ภาษาไทย ตามที่เหมาะสม

### Code

- Case-sensitive สำหรับ code
- ตาม language conventions
- ใช้ proper casing สำหรับ identifiers

## Punctuation

### Lists

- ใช้ periods สำหรับ complete sentences
- ไม่ใช้ periods สำหรับ fragments
- สม่ำเสมอภายใน list เดียว

### Headers

- ไม่ใช้ periods ที่ท้าย headers
- ใช้ question marks สำหรับ questions
- ใช้ exclamation marks อย่างประหยัด

## Quotation

### Blockquotes

```markdown
> Quoted text
```

### Inline Quotes

ใช้ straight quotes `" "` หรือ `' '`

## Numbering

### Ordered Lists

```markdown
1. First
2. Second
3. Third
```

### Automatic Numbering

ใช้ `1.` สำหรับทุก items แล้วให้ parser จัดการ

## Special Characters

### Escape Sequences

```markdown
\* not italic
\_ not italic
\` not code
```

### HTML Entities

```markdown
&amp; - &
&lt; - <
&gt; - >
```
