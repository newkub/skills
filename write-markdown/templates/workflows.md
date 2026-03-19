---
description: Template สำหรับ Workflows
title: '{{WORKFLOW_TITLE}}'
tags: [workflow, '{{CATEGORY}}', '{{TAG_1}}']
goals:
  - '{{GOAL_1}}'
  - '{{GOAL_2}}'
---

## {{WORKFLOW_TITLE}}

> 🔄 **Workflow** | {{CATEGORY}}

**{{ORG_NAME}}** / **workflows** / `{{FILENAME}}`

## โครงสร้าง Workflow

```text
{{WORKFLOW_NAME}}/
├── 📁 01-{{STEP_1}}/
│   └── {{FILE_1}}.md
├── 📁 02-{{STEP_2}}/
│   └── {{FILE_2}}.md
├── � 03-{{STEP_3}}/
│   └── {{FILE_3}}.md
└── 📜 README.md
```

## Rules

### Workflow Structure

- ใช้ numbered prefix (01-, 02-, etc.)
- แต่ละ step มีไฟล์ .md ของตัวเอง
- ต้องมี README.md ใน root

### Required Frontmatter

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

### Naming Conventions

| Item | Format | Example |
|------|--------|---------|
| Workflow | kebab-case | `setup-project` |
| Step dirs | NN-name | `01-preparation` |
| Step files | NN-name.md | `01-preparation.md` |

### Content Rules

- ใช้ H1 (`#`) ได้แค่ 1 ครั้งต่อไฟล์
- ชื่อไฟล์ต้องตรงกับ `title` ใน frontmatter
- ต้องมี progress tracking

## Template

### Steps สำหรับสร้าง Workflows

1️⃣ **สร้างโครงสร้างไฟล์**

```text
{{WORKFLOW_NAME}}/
├── 01-{{STEP_1}}/
│   └── 01-{{STEP_1}}.md
├── 02-{{STEP_2}}/
│   └── 02-{{STEP_2}}.md
└── README.md
```

2️⃣ **เขียน README.md**

- อธิบาย workflow overview
- รายการ steps
- ตัวอย่างการใช้งาน

3️⃣ **เขียนแต่ละ Step**

```markdown
---
description: '{{STEP_DESCRIPTION}}'
title: {{STEP_NAME}}
tags: [workflow, '{{ACTION_TYPE}}']
goals:
  - '{{GOAL_1}}'
---

## {{STEP_NAME}}

### Objective

{{OBJECTIVE}}

### Commands

```bash
{{COMMAND_1}}
{{COMMAND_2}}
```
```


```text

```text

### Verification

- [ ] {{VERIFY_1}}
- [ ] {{VERIFY_2}}

### Next Step

→ [{{NEXT_STEP_NAME}}](../{{NEXT_STEP_DIR}}/{{NEXT_STEP_FILE}})

```text

### Progress Tracking

```text
{{WORKFLOW_NAME}} Progress
========================

[{{STEP_1_EMOJI}}] 01. {{STEP_1_NAME}}
[{{STEP_2_EMOJI}}] 02. {{STEP_2_NAME}}
[{{STEP_3_EMOJI}}] 03. {{STEP_3_NAME}}
[{{STEP_4_EMOJI}}] 04. {{STEP_4_NAME}}

Legend:
⬜ Not Started
🔄 In Progress
✅ Completed
⏭️ Skipped
```

### Status Indicators

| สถานะ | ไอคอน | ความหมาย |
|--------|-------|----------|
| Not Started | ⬜ | ยังไม่เริ่ม |
| In Progress | 🔄 | กำลังทำ |
| Completed | ✅ | เสร็จแล้ว |
| Skipped | ⏭️ | ข้าม |

## Example

### Example: Setup Workflow

```markdown
---
description: 'Complete setup workflow for new project'
title: setup-project
tags: [workflow, setup]
goals:
  - 'Setup complete development environment'
  - 'Configure all required tools'
---

## setup-project Workflow

> 🔄 **Workflow** | Development Setup

**newkub** / **workflows** / `setup-project`

### Workflow Structure

```text
setup-project/
├── 01-prerequisites/
│   └── 01-prerequisites.md
├── 02-installation/
│   └── 02-installation.md
├── 03-configuration/
│   └── 03-configuration.md
└── README.md
```
```


```text

```text

### Steps Overview

1. **01-prerequisites** - Check required tools
2. **02-installation** - Install dependencies
3. **03-configuration** - Configure environment

### Usage

```bash
# Run complete workflow
@setup-project

# Run specific step
@setup-project prerequisites
```

### Progress

```text
setup-project Progress
========================

[✅] 01. Prerequisites
[🔄] 02. Installation
[⬜] 03. Configuration
```


```text

### Example: Step File

```markdown
---
description: 'Install all dependencies'
title: installation
tags: [workflow, setup]
goals:
  - 'Install Node.js dependencies'
  - 'Setup database'
---

## 02. Installation

### Objective

Install all required dependencies for the project.

### Prerequisites

- Node.js 18+
- PostgreSQL 14+

### Commands

```bash
# Install Node dependencies
npm install

# Setup database
npm run db:setup

# Run migrations
npm run db:migrate
```

### Verification

- [ ] `node --version` returns v18+
- [ ] `npm list` shows all packages
- [ ] Database is accessible

### Troubleshooting

**Error: "Cannot find module"**

Run `npm install` again or clear cache:

```bash
rm -rf node_modules package-lock.json
npm install
```

### Next Step

→ [03. Configuration](../03-configuration/03-configuration.md)

```text
