---
description: Template สำหรับ AGENTs documentation
title: '{{AGENT_NAME}}'
tags: [agents, '{{CATEGORY}}']
goals:
  - '{{GOAL_1}}'
  - '{{GOAL_2}}'
---

## {{AGENT_NAME}} AGENTs

> ℹ️ **Info:** {{DESCRIPTION}}

**{{ORG_NAME}}** / **{{CATEGORY}}** / `{{FILENAME}}`

## โครงสร้าง Directory

```text
{{AGENT_NAME}}/
├── commands/
│   └── {{COMMAND_NAME}}.md
├── workflows/
│   └── {{WORKFLOW_NAME}}.md
└── SKILL.md
```

## หมวดหมู่ไฟล์

| ไฟล์ | รายละเอียด |
|------|-----------|
| `commands/*.md` | คำสั่งที่รันได้ |
| `workflows/*.md` | ขั้นตอนการทำงาน |
| `SKILL.md` | ความสามารถรวม |

## Rules

### Naming Conventions

| Item | Format | Example |
|------|--------|---------|
| AGENT Name | kebab-case | `my-agent` |
| Commands | kebab-case | `my-command.md` |
| Workflows | kebab-case | `my-workflow.md` |
| Files | kebab-case | `file-name.md` |

### Required Frontmatter Fields

```yaml
---
description: '{{DESCRIPTION}}'  # required
title: {{TITLE}}               # required
tags: [{{TAG_1}}, {{TAG_2}}]   # required
goals:                         # required
  - '{{GOAL_1}}'
  - '{{GOAL_2}}'
---
```

### Content Rules

- ใช้ H1 (`#`) ได้แค่ 1 ครั้งต่อไฟล์
- ชื่อไฟล์ต้องตรงกับ `title` ใน frontmatter
- ใช้ kebab-case สำหรับชื่อไฟล์ทั้งหมด
- Commands ต้องอยู่ใน `commands/` directory
- Workflows ต้องอยู่ใน `workflows/` directory
- ต้องมี `SKILL.md` อยู่ใน root

## Template

### Breadcrumbs Navigation

**{{ORG_NAME}}** / **{{CATEGORY}}** / **{{AGENT_NAME}}** / `{{FILENAME}}`

### Steps สำหรับสร้าง AGENTs

1️⃣ **สร้างโครงสร้างไฟล์**

```text
{{AGENT_NAME}}/
├── commands/
├── workflows/
└── SKILL.md
```

2️⃣ **เขียน SKILL.md**

- Frontmatter: `description`, `title`, `tags`, `goals`
- อธิบายความสามารถ
- ตัวอย่างการใช้งาน

3️⃣ **สร้าง Commands**

```markdown
---
description: '{{COMMAND_DESCRIPTION}}'
title: {{COMMAND_NAME}}
tags: [command, '{{ACTION_TYPE}}']
---
```

### Comparison Table

| Feature | Command | Workflow | Skill |
|---------|---------|----------|-------|
| รันได้ | ✅ | ❌ | ❌ |
| มีขั้นตอน | ❌ | ✅ | ❌ |
| รวมความสามารถ | ❌ | ❌ | ✅ |

### Status Indicators

| สถานะ | ไอคอน | ความหมาย |
|--------|-------|----------|
| Ready | 🟢 | {{STATUS_READY}} |
| Draft | 🟡 | {{STATUS_DRAFT}} |
| Deprecated | 🔴 | {{STATUS_DEPRECATED}} |

## Example

### Example: Code Assistant Agent

```markdown
---
description: 'AI agent สำหรับช่วยเขียนโค้ด'
title: code-assistant
tags: [agents, coding]
goals:
  - 'ช่วยเขียนโค้ดที่มีคุณภาพ'
  - 'ให้คำแนะนำ best practices'
---

## code-assistant AGENTs

> ℹ️ **Info:** AI agent สำหรับช่วยเขียนโค้ดและ review code

**newkub** / **skills** / **code-assistant** / `SKILL.md`

### Commands

- `review`: Review code changes
- `refactor`: ปรับปรุงโค้ดให้ดีขึ้น
- `generate`: สร้างโค้ดจาก requirements

### Workflows

- `setup.md`: ขั้นตอนการ setup agent
- `usage.md`: วิธีการใช้งานต่างๆ
```

### Example: File Structure

```text
📦 code-assistant/
├── 📁 commands/
│   ├── 📝 review.md
│   ├── 📝 refactor.md
│   └── 📝 generate.md
├── 📁 workflows/
│   ├── 📝 setup.md
│   └── 📝 usage.md
└── 📜 SKILL.md
```

### Example: Command File

```markdown
---
description: 'Review code changes and provide feedback'
title: review
tags: [command, code-review]
---

## review Command

> ℹ️ **Info:** Review code changes ให้ feedback

### Usage

```bash
@code-assistant review
```
```


```text


```text

### Steps

1. อ่าน changed files
2. วิเคราะห์ code quality
3. ให้ suggestions
4. สรุปผล

```text
