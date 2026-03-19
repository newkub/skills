---
description: Template สำหรับ Documentation
title: '{{DOCS_TITLE}}'
tags: [docs, '{{CATEGORY}}', '{{TAG_1}}']
goals:
  - '{{GOAL_1}}'
  - '{{GOAL_2}}'
---

## {{DOCS_TITLE}}

> 📚 **Documentation**

**{{ORG_NAME}}** / **{{CATEGORY}}** / `{{FILENAME}}`

## โครงสร้าง Documentation

```text
📦 {{PROJECT_NAME}}/
├── 📁 {{SECTION_1}}/
│   ├── {{FILE_1}}.md
│   ├── {{FILE_2}}.md
│   └── {{FILE_3}}.md
├── 📁 {{SECTION_2}}/
│   ├── {{FILE_4}}.md
│   └── {{FILE_5}}.md
├── 📁 {{SECTION_3}}/
│   └── {{FILE_6}}.md
└── 📜 README.md
```

## Rules

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

### Content Guidelines

- เริ่มด้วย H1 title
- ใช้ callouts สำหรับสรุปสำคัญ
- แบ่ง sections ด้วย H2
- ใส่ code examples ที่ runnable
- ต้องมี installation/usage instructions

### API Documentation Rules

| Element | Required | Format |
|---------|----------|--------|
| Endpoint | ✅ | `METHOD /path` |
| Parameters | ✅ | Table with types |
| Response | ✅ | JSON example |
| Errors | ❌ | Error codes table |

## Template

### Steps สร้าง Documentation

1️⃣ **สร้างโครงสร้าง**

```text
{{PROJECT_NAME}}/
├── {{FILE_A}}.md
├── {{FILE_B}}.md
└── {{FILE_C}}.md
```

2️⃣ **เขียน Content**

- {{CONTENT_ITEM_1}}
- {{CONTENT_ITEM_2}}
- {{CONTENT_ITEM_3}}

3️⃣ **เพิ่ม Navigation**

- {{NAV_ITEM_1}}
- {{NAV_ITEM_2}}
- {{NAV_ITEM_3}}

### Installation Steps

1. {{INSTALL_STEP_1}}

   ```bash
   {{INSTALL_COMMAND_1}}
   ```

2. {{INSTALL_STEP_2}}

   ```{{CONFIG_LANG}}
   {{CONFIG_CODE}}
   ```

3. {{INSTALL_STEP_3}}

   ```{{USAGE_LANG}}
   {{USAGE_CODE}}
   ```

### API Documentation

**Endpoint:**

```http
{{HTTP_METHOD}} {{API_ENDPOINT}}
```

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `{{PARAM_1}}` | {{TYPE_1}} | ✅ | {{PARAM_DESC_1}} |
| `{{PARAM_2}}` | {{TYPE_2}} | ❌ | {{PARAM_DESC_2}} |

**Response:**

```json
{
  "{{KEY_1}}": "{{VALUE_1}}",
  "{{KEY_2}}": "{{VALUE_2}}",
  "{{KEY_3}}": "{{VALUE_3}}"
}
```

### Status Badges

![Build](https://img.shields.io/badge/build-{{BUILD_STATUS}}-{{BUILD_COLOR}})
![Version](https://img.shields.io/badge/version-{{VERSION}}-{{VERSION_COLOR}})
![License](https://img.shields.io/badge/license-{{LICENSE}}-{{LICENSE_COLOR}})

### Callouts

> ℹ️ **{{NOTE_LABEL}}:** {{NOTE_TEXT}}
>
> ⚠️ **{{WARNING_LABEL}}:** {{WARNING_TEXT}}
>
> 🚫 **{{DEPRECATED_LABEL}}:** {{DEPRECATED_TEXT}}

### Keyboard Shortcuts

| {{ACTION_COL}} | {{SHORTCUT_COL}} |
|----------------|------------------|
| {{ACTION_1}} | `{{KEY_1}}` |
| {{ACTION_2}} | `{{KEY_2}}` |
| {{ACTION_3}} | `{{KEY_3}}` |

### Documentation Checklist

- ☐ {{CHECK_1}}
- ☐ {{CHECK_2}}
- ☐ {{CHECK_3}}
- ☐ {{CHECK_4}}
- ☐ {{CHECK_5}}
- ☑️ {{FINAL_CHECK}}

## Example

### Example: API Documentation

```markdown
---
description: 'REST API documentation for User service'
title: users-api
tags: [docs, api, users]
goals:
  - 'Document all endpoints'
  - 'Provide working examples'
---

## Users API

> 📚 **REST API สำหรับจัดการ users**

**newkub** / **docs** / `users-api.md`

### Base URL

```text
<https://api.example.com/v1>
```
```


```text

```text

## Endpoints

### GET /users

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `limit` | number | ❌ | จำนวน records (default: 10) |
| `offset` | number | ❌ | เริ่มจาก index |

**Response:**

```json
{
  "users": [
    { "id": 1, "name": "John" }
  ],
  "total": 100
}
```

### POST /users

**Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com"
}
```

### Example: File Structure

```text
📦 my-api-docs/
├── 📁 endpoints/
│ ├── users.md
│ ├── posts.md
│ └── auth.md
├── 📁 guides/
│ ├── getting-started.md
│ └── authentication.md
└── 📜 README.md
```
