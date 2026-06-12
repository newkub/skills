# Markdown Document Structure

## Document Hierarchy

### Standard Hierarchy

```
H1 (Main Title)
├── H2 (Major Sections)
│   ├── H3 (Subsections)
│   │   ├── H4 (Details)
│   │   │   ├── H5 (Sub-details)
│   │   │   │   └── H6 (Micro-details)
```

### Hierarchy Rules

- ใช้ H1 เพียงครั้งเดียว
- อย่าข้ามระดับ (H1 → H3)
- ใช้ hierarchy ที่สม่ำเสมอ
- จำกัดความลึกไม่เกิน 6 ระดับ

## Section Organization

### Frontmatter

```markdown
---
title: Document Title
description: Brief description
date: 2024-01-01
---
```

### Introduction

```markdown
# Title

## Overview
Brief overview of the document

## Purpose
Why this document exists

## Scope
What this document covers
```

### Main Content

```markdown
## Section 1
Content for section 1

### Subsection 1.1
Content for subsection

## Section 2
Content for section 2
```

### Conclusion

```markdown
## Summary
Key takeaways

## Next Steps
What to do next

## References
Links to related resources
```

## Content Blocks

### Paragraphs

```markdown
Paragraph 1 with content.

Paragraph 2 with content.
```

### Lists

```markdown
- Item 1
- Item 2
  - Nested item
```

### Code Blocks

```markdown
```language
code here
```
```

### Blockquotes

```markdown
> Quoted text
```

### Tables

```markdown
| Header 1 | Header 2 |
|----------|----------|
| Cell 1   | Cell 2   |
```

## File Organization

### Single File

- ใช้สำหรับ documents ขนาดเล็ก-กลาง
- ง่ายต่อการ maintain
- เหมาะสำหรับ standalone docs

### Multi-File

- ใช้สำหรับ large documentation
- แบ่งเป็น logical sections
- ใช้ index สำหรับ navigation

## Navigation Structure

### Table of Contents

```markdown
## Table of Contents

- [Section 1](#section-1)
- [Section 2](#section-2)
  - [Subsection 2.1](#subsection-21)
```

### Backlinks

```markdown
See also: [Related Document](./related.md)
```

### Cross-References

```markdown
See [Section 2](#section-2) for details.
```

## Metadata Structure

### YAML Frontmatter

```markdown
---
title: Title
description: Description
author: Author
date: Date
tags:
  - tag1
  - tag2
---
```

### Custom Metadata

```markdown
---
customField: value
anotherField: another value
---
```

## Template Structure

### Standard Template

```markdown
---
title: Template Title
description: Template description
---

# Title

## Introduction
...

## Main Content
...

## Conclusion
...
```

### Component Template

```markdown
---
component: ComponentName
---

## Component Description
...

## Usage
...

## Props
...

## Examples
...
```

## Versioning Structure

### Changelog

```markdown
# Changelog

## [1.0.0] - 2024-01-01

### Added
- New feature

### Changed
- Updated feature

### Fixed
- Fixed bug
```

### Version Notes

```markdown
## Version 1.0.0

Release notes for version 1.0.0
```
