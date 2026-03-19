---
description: Template สำหรับ Rules และ Conventions
title: '{{RULES_TITLE}}'
tags: [rules, '{{CATEGORY}}', '{{TAG_1}}']
goals:
  - '{{GOAL_1}}'
  - '{{GOAL_2}}'
---

## {{RULES_TITLE}}

> 📋 **Coding Standards & Conventions**

**{{ORG_NAME}}** / **{{CATEGORY}}** / `{{FILENAME}}`

## โครงสร้าง Rules

```text
📦 {{PROJECT_NAME}}/
├── 📁 {{DIR_1}}/
│   └── {{FILE_1}}.md
├── 📁 {{DIR_2}}/
│   └── {{FILE_2}}.md
├── 📁 {{DIR_3}}/
│   └── {{FILE_3}}.md
└── 📜 {{MAIN_FILE}}
```

## Rules

### Naming Conventions

| Item | Format | Example |
|------|--------|---------|
| Files | {{FILE_FORMAT}} | `{{FILE_EXAMPLE}}` |
| Folders | {{FOLDER_FORMAT}} | `{{FOLDER_EXAMPLE}}` |
| Variables | {{VAR_FORMAT}} | `{{VAR_EXAMPLE}}` |
| Components | {{COMP_FORMAT}} | `{{COMP_EXAMPLE}}` |

### Required Frontmatter Fields

```yaml
---
description: {{DESCRIPTION_VALUE}}  # required
title: {{TITLE_VALUE}}             # required
tags: [{{TAGS_VALUE}}]             # required
goals:                             # required
  - {{GOAL_1_VALUE}}
  - {{GOAL_2_VALUE}}
---
```

### Optional Fields

```yaml
---
author: "{{AUTHOR}}"
date: {{DATE}}
version: "{{VERSION}}"
status: "{{STATUS}}"
---
```

### Content Rules

- ใช้ H1 ได้แค่ 1 ครั้งต่อไฟล์
- ชื่อไฟล์ต้องตรงกับ `title` ใน frontmatter
- ใช้ kebab-case สำหรับชื่อไฟล์
- Code blocks ต้องระบุ language

### Quality Checklist

- ☐ {{CHECK_1}}
- ☐ {{CHECK_2}}
- ☐ {{CHECK_3}}
- ☐ {{CHECK_4}}
- ☐ {{CHECK_5}}
- ☑️ {{FINAL_CHECK}}

### Common Mistakes

| ❌ {{WRONG_LABEL}} | ✅ {{RIGHT_LABEL}} |
|-------------------|-------------------|
| `{{WRONG_1}}` | `{{RIGHT_1}}` |
| `{{WRONG_2}}` | `{{RIGHT_2}}` |
| `{{WRONG_3}}` | `{{RIGHT_3}}` |

## Template

### Headings

```markdown
# {{H1_TEXT}}

## {{H2_TEXT}}

### {{H3_TEXT}}

#### {{H4_TEXT}}
```

> ⚠️ **Warning:** {{HEADING_WARNING}}

### Lists

**Ordered (Steps):**

```markdown
1. {{ORDERED_1}}
2. {{ORDERED_2}}
3. {{ORDERED_3}}
```

**Unordered (Items):**

```markdown
- {{UNORDERED_1}}
- {{UNORDERED_2}}
- {{UNORDERED_3}}
```

### Code Blocks

**With language:**

```{{LANG}}
{{CODE_SNIPPET}}
```

**File name:**

```{{LANG}}
// {{FILE_PATH}}
{{FILE_CODE}}
```

### Tables

```markdown
| {{HEADER_1}} | {{HEADER_2}} | {{HEADER_3}} |
|------------|------------|------------|
| {{DATA_1}} | {{DATA_2}} | {{DATA_3}} |
```

### Links

**Internal:**

```markdown
[{{LINK_TEXT}}]({{RELATIVE_PATH}})
```

**External:**

```markdown
[{{LINK_TEXT}}]({{EXTERNAL_URL}})
```

### Style Guide

#### Typography

- **{{BOLD_EXAMPLE}}** {{BOLD_RULE}}
- *{{ITALIC_EXAMPLE}}* {{ITALIC_RULE}}
- `{{CODE_EXAMPLE}}` {{CODE_RULE}}

#### Emojis

| {{CONTEXT_COL}} | {{EMOJI_COL}} |
|----------------|---------------|
| {{CONTEXT_1}} | {{EMOJI_1}} |
| {{CONTEXT_2}} | {{EMOJI_2}} |
| {{CONTEXT_3}} | {{EMOJI_3}} |
| {{CONTEXT_4}} | {{EMOJI_4}} |
| {{CONTEXT_5}} | {{EMOJI_5}} |

#### Status Indicators

```text
{{STATUS_1_ICON}} {{STATUS_1_LABEL}}
{{STATUS_2_ICON}} {{STATUS_2_LABEL}}
{{STATUS_3_ICON}} {{STATUS_3_LABEL}}
{{STATUS_4_ICON}} {{STATUS_4_LABEL}}
```

## Example

### Example: Project Rules

```markdown
---
description: 'Coding standards for the project'
title: coding-standards
tags: [rules, coding, standards]
goals:
  - 'Maintain code quality'
  - 'Ensure consistency'
---

## Coding Standards

> 📋 **Note:** กฎการเขียนโค้ดสำหรับทีม

**newkub** / **rules** / `coding-standards.md`

### Naming Conventions

| Item | Format | Example |
|------|--------|---------|
| Variables | camelCase | `userName` |
| Functions | camelCase | `getUser()` |
| Classes | PascalCase | `UserService` |
| Constants | UPPER_SNAKE | `MAX_COUNT` |

### Code Style

- ใช้ 2 spaces สำหรับ indentation
- ใช้ single quotes สำหรับ strings
- ต้องมี semicolon
- ความยาวบรรทัดไม่เกิน 80 ตัวอักษร

### Common Mistakes

| ❌ Wrong | ✅ Right |
|----------|----------|
| `var x = 1` | `const x = 1` |
| `function(){}` | `() => {}` |
| `==` | `===` |
```

---

## References

- [{{REF_1}}]({{REF_1_LINK}})
- [{{REF_2}}]({{REF_2_LINK}})
- [{{REF_3}}]({{REF_3_LINK}})
