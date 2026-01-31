---
name: skill-template
description: Template สำหรับสร้าง Skill ใหม่
---

# Skill Template (เทมเพลต Skill)

Template สำหรับสร้าง Skill ใหม่ที่ถูกต้องตาม Write Skills

## Frontmatter

````yaml
---
name: my-skill
description: คำอธิบาย skill ของคุณ
---
````

## Main Content

````markdown
# My Skill

เอกสารนี้เป็นแนวทางสำหรับ...

## Overview

My Skill เป็น...

### Key Features

- **Feature 1**: คำอธิบาย
- **Feature 2**: คำอธิบาย

## Quick Start

````bash
# คำสั่งเริ่มต้น
````

## Rules

| Priority | Impact | Reference | Name | Description | Prefix | Condition |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | CRITICAL | 1-skill-rule.md | Rule Name | คำอธิบาย | skill- | เงื่อนไข |

## Knowledge

| Reference | Name | Description | Prefix |
| :--- | :--- | :--- | :--- |
| skill-concept.md | Concept Name | คำอธิบาย | skill- |

## Guides

| Reference | Name | Description | Prefix |
| :--- | :--- | :--- | :--- |
| skill-guide.md | Guide Name | คำอธิบาย | skill- |

## Templates

| Reference | Name | Description | Prefix |
| :--- | :--- | :--- | :--- |
| skill-template.md | Template Name | คำอธิบาย | skill- |

## Additional Files

| File | Description |
| :--- | :--- |
| getting-started.md | คู่มือเริ่มต้น |
| features.md | รายการฟีเจอร์ |

## File Structure

```
my-skill/
├── rules/
│   └── 1-skill-rule.md
├── get-started/
│   ├── quick-start.md
│   ├── features.md
│   └── core-principle.md
├── templates/
│   └── skill-template.md
├── getting-started.md
├── features.md
└── SKILL.md
```

## Examples

### Example Title

คำอธิบายตัวอย่าง

````typescript
// Code example
````

## References

- [Documentation](url)
- [GitHub](url)
