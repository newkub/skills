# Markdown API Reference

## Basic Syntax API

### Headers

```markdown
# H1
## H2
### H3
#### H4
##### H5
###### H6
```

### Emphasis

```markdown
**bold**
*italic*
~~strikethrough~~
```

### Lists

```markdown
- Unordered item
1. Ordered item
- [ ] Task item
- [x] Completed task
```

### Links

```markdown
[Link text](url)
[Link text][reference-id]
<url>
```

### Images

```markdown
![Alt text](url)
```

### Code

```markdown
`inline code`
```
language
code block
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

## Extended Syntax API

### Tables

```markdown
| Header 1 | Header 2 |
|----------|----------|
| Cell 1   | Cell 2   |
```

### Footnotes

```markdown
Text[^1]

[^1]: Footnote text
```

### Definition Lists

```markdown
Term
: Definition
```

### Task Lists

```markdown
- [ ] Task
- [x] Completed
```

## GFM API

### Autolinks

```markdown
https://example.com
user@example.com
```

### Strikethrough

```markdown
~~strikethrough~~
```

### Task Lists

```markdown
- [x] Completed
```

## Frontmatter API

### YAML Frontmatter

```yaml
---
title: Title
description: Description
author: Author
date: 2024-01-01
tags:
  - tag1
  - tag2
---
```

### Custom Fields

```yaml
---
customField: value
anotherField: another value
---
```

## Code Block API

### Basic Code Block

```markdown
```language
code
```
```

### Code Block with Filename

```markdown
```language filename="file.ext"
code
```
```

### Code Block with Line Numbers

```markdown
```language {1-3}
code
```
```

### Code Block with Highlighting

```markdown
```language {1,3-5}
code
```
```

## Table API

### Basic Table

```markdown
| Header 1 | Header 2 |
|----------|----------|
| Cell 1   | Cell 2   |
```

### Table with Alignment

```markdown
| Left | Center | Right |
|:-----|:------:|------:|
| L    | C      | R     |
```

### Table with Multiline Cells

```markdown
| Header 1 | Header 2 |
|----------|----------|
| Cell 1   | Cell 2   |
|          | with<br>break |
```

## Link API

### Inline Link

```markdown
[Text](url)
```

### Reference Link

```markdown
[Text][id]

[id]: url
```

### Title Attribute

```markdown
[Text](url "Title")
```

### Image Link

```markdown
![Alt](url)
![Alt](url "Title")
```

## Escaping API

### Escape Characters

```markdown
\*not italic\_
\_not italic\_
\`not code\`
```

### HTML Entities

```markdown
&amp; - &
&lt; - <
&gt; - >
```
