# Markdown Syntax

## Basic Syntax

### Headers

Headers ใช้เครื่องหมาย `#` นำหน้า:

```markdown
# H1 - Main Title
## H2 - Section
### H3 - Subsection
#### H4 - Sub-subsection
##### H5 - Detail
###### H6 - Sub-detail
```

หรือใช้ underline:

```markdown
H1
===

H2
---
```

### Emphasis

**Bold**: `**text**` หรือ `__text__`

*Italic*: `*text*` หรือ `_text_`

~~Strikethrough~~: `~~text~~`

### Lists

**Unordered List**:
```markdown
- Item 1
- Item 2
  - Nested item
```

**Ordered List**:
```markdown
1. First item
2. Second item
   1. Nested item
```

**Task List**:
```markdown
- [ ] Incomplete task
- [x] Completed task
```

### Links

**Inline Link**:
```markdown
[Link text](https://example.com)
```

**Reference Link**:
```markdown
[Link text][id]

[id]: https://example.com
```

**Auto Link**:
```markdown
<https://example.com>
```

### Images

```markdown
![Alt text](image-url)
```

### Code

**Inline Code**:
```markdown
`code`
```

**Code Block**:
```markdown
```language
code here
```
```

### Blockquotes

```markdown
> Blockquote
>> Nested blockquote
```

### Horizontal Rule

```markdown
---
```

หรือ:
```markdown
***
```

หรือ:
```markdown
___
```

## Extended Syntax

### Tables

```markdown
| Header 1 | Header 2 |
|----------|----------|
| Cell 1   | Cell 2   |
```

**Alignment**:
```markdown
| Left | Center | Right |
|:-----|:------:|------:|
| L    | C      | R     |
```

### Footnotes

```markdown
Text with footnote[^1]

[^1]: Footnote text
```

### Definition Lists

```markdown
Term 1
: Definition 1

Term 2
: Definition 2
```

### Strikethrough

```markdown
~~strikethrough text~~
```

### Task Lists

```markdown
- [ ] Task 1
- [x] Task 2
```

## Escaping Characters

ใช้ backslash `\` เพื่อ escape characters:

```markdown
\*not italic\*
\_not italic\_
\`not code\`
```

## HTML

Markdown รองรับ HTML บางส่วน:

```markdown
<details>
<summary>Click to expand</summary>
Content here
</details>
```

## Comments

Markdown ไม่มี native comments แต่สามารถใช้ HTML:

```markdown
<!-- This is a comment -->
```
