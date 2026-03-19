---
description: Template สำหรับ Blog writing
title: '{{BLOG_TITLE}}'
tags: [blog, '{{CATEGORY}}', '{{TAG_1}}']
goals:
  - '{{GOAL_1}}'
  - '{{GOAL_2}}'
date: '{{PUBLISH_DATE}}'
author: '{{AUTHOR_NAME}}'
---

## {{BLOG_TITLE}}

> 📝 **Blog Post**

**{{ORG_NAME}}** / **{{CATEGORY}}** / `{{FILENAME}}`

## โครงสร้าง Blog Post

```text
📄 {{SLUG}}/
├── 🖼️ {{COVER_IMAGE}}
├── 📜 index.md
└── 📁 assets/
    └── {{ASSET_IMAGE}}
```

## Rules

### Frontmatter Requirements

```yaml
---
title: "{{TITLE}}"        # required
date: {{DATE}}            # required
author: "{{AUTHOR}}"      # required
tags: [{{TAGS}}]          # required
---
```

### Content Structure

- ใช้ H1 สำหรับ title เท่านั้น
- ใช้ H2 สำหรับ main sections
- ใช้ H3 สำหรับ subsections
- ความยาว: 500-2000 words
- ต้องมี introduction และ conclusion

### File Naming

| Type | Format | Example |
|------|--------|---------|
| Blog post | `YYYY-MM-DD-slug.md` | `2024-01-15-hello-world.md` |
| Assets | `descriptive-name.ext` | `diagram.png` |

### Writing Style

- ใช้ภาษาที่เข้าใจง่าย
- หลีกเลี่ยง jargon ที่ไม่จำเป็น
- ใช้ active voice
- ย่อยหัวข้อให้ชัดเจน

## Template

### Steps สำหรับเขียน Blog

1️⃣ **วางโครงสร้าง**

```markdown
---
title: "{{TITLE}}"
date: {{DATE}}
author: "{{AUTHOR}}"
tags: [{{TAGS}}]
---

## {{HEADING_1}}

### {{HEADING_2}}

### {{HEADING_3}}
```

2️⃣ **เพิ่ม Visual Elements**

- {{ELEMENT_1}}
- {{ELEMENT_2}}
- {{ELEMENT_3}}

3️⃣ **Optimize for Reading**

- {{OPTIMIZE_1}}
- {{OPTIMIZE_2}}
- {{OPTIMIZE_3}}

### Typography

**{{BOLD_TEXT}}** {{BOLD_DESC}}
*{{ITALIC_TEXT}}* {{ITALIC_DESC}}
`{{CODE_TEXT}}` {{CODE_DESC}}

### Lists

**Ordered List:**

1. {{STEP_1}}
2. {{STEP_2}}
3. {{STEP_3}}

**Unordered List:**

- {{ITEM_1}}
- {{ITEM_2}}
- {{ITEM_3}}

### Quotes

> "{{QUOTE_TEXT}}"
> — {{QUOTE_AUTHOR}}

### Code Blocks

**{{CODE_TITLE}}:**

```{{LANGUAGE}}
{{CODE_EXAMPLE}}
```

### Tables

| {{COL_1}} | {{COL_2}} | {{COL_3}} |
|-----------|-----------|-----------|
| {{DATA_1}} | {{DATA_2}} | {{DATA_3}} |

### Alerts

> ℹ️ **Info:** {{INFO_TEXT}}
>
> ⚠️ **Warning:** {{WARNING_TEXT}}
>
> ✅ **Success:** {{SUCCESS_TEXT}}

### Timeline

```text
[{{PHASE_1}}] → [{{PHASE_2}}] → [{{PHASE_3}}] → [{{PHASE_4}}]
   {{EMOJI_1}}        {{EMOJI_2}}         {{EMOJI_3}}        {{EMOJI_4}}
```

### Progress

**{{PROGRESS_TITLE}}:**
{{PROGRESS_BAR}} {{PERCENTAGE}}%

### Spoilers

<details>
<summary>{{SPOILER_TITLE}}</summary>

{{SPOILER_CONTENT}}

</details>

### Embeds

**Link Preview:**
[{{LINK_TITLE}}]({{LINK_URL}})
*{{LINK_DESC}}*

## Example

### Example: Tech Tutorial Post

```markdown
---
title: "Getting Started with TypeScript"
date: 2024-01-15
author: "John Doe"
tags: [typescript, tutorial, javascript]
---

## Getting Started with TypeScript

> 📝 **Note:** แนะนำ TypeScript พื้นฐานสำหรับผู้เริ่มต้น

**newkub** / **blog** / `2024-01-15-getting-started-typescript.md`

### Introduction

TypeScript คือ superset ของ JavaScript...

### Installation

1. ติดตั้ง Node.js
2. รัน `npm install -g typescript`
3. สร้างไฟล์ `tsconfig.json`

### Basic Types

| Type | Description | Example |
|------|-------------|---------|
| string | ข้อความ | `let name: string` |
| number | ตัวเลข | `let age: number` |
| boolean | จริง/เท็จ | `let active: boolean` |

### Conclusion

TypeScript ช่วยให้โค้ดมีคุณภาพดีขึ้น...
```

### Example: Project Structure

```text
📄 2024-01-15-getting-started-typescript/
├── 🖼️ cover.png
├── 📜 index.md
└── 📁 assets/
    └── typescript-logo.png
```
