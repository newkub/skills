# Frontmatter Standards

## มาตรฐาน Frontmatter สำหรับ Skills

### โครงสร้างพื้นฐาน

```yaml
---
title: Skill Name
description: คำอธิบายสั้นๆ ชัดเจน
type: skill
version: 1.0.0
auto_execution_mode: 3
file-patterns: ["SKILL.md", "*.md"]
follow:
  skills: ["@write-workflows", "@write-markdown"]
  workflows: ["/write-workflows", "/validate"]
  files: []
  mcp: []
---
```

### Required Fields

| Field | Type | Required | คำอธิบาย | ตัวอย่าง |
|-------|-------|----------|-------------|-------------|
| `title` | string | ✅ | ชื่อ skill ที่ชัดเจน | `Write Skills` |
| `description` | string | ✅ | คำอธิบายแบบย่อ | `กำหนดมาตรฐานการสร้าง skill files` |
| `type` | string | ✅ | ต้องเป็น "skill" | `skill` |
| `version` | string | ✅ | Semantic version | `1.0.0` |
| `auto_execution_mode` | number | ✅ | ต้องเป็น 3 สำหรับ skills | `3` |
| `file-patterns` | array | ✅ | File patterns ที่ skill ใช้ | `["*.md"]` |
| `follow` | object | ✅ | Dependencies ที่เกี่ยวข้อง | ดูด้านล่าง |

### Follow Object Structure

```yaml
follow:
  skills:        # Skills ที่ต้องการ
    - "@write-workflows"
    - "@write-markdown"
  workflows:      # Workflows ที่ต้องการ
    - "/write-workflows"
    - "/validate"
  files:          # Files ที่ต้องการ
    - "guidelines/file.md"
  mcp:            # MCP servers ที่ต้องการ
    - "mcp-server-name"
```

### Version Management

ใช้ **Semantic Versioning**: `MAJOR.MINOR.PATCH`

- **MAJOR**: เปลี่ยนแปลงโครงสร้างที่ไม่เข้ากัน
- **MINOR**: เพิ่ม features ใหม่ แต่ยังเข้ากัน
- **PATCH**: แก้ไข bugs ที่ไม่กระทบ breaking changes

### Best Practices

1. **Descriptive Title** - ชื่อต้องบอกหน้าที่ที่ skill ทำ
2. **Concise Description** - คำอธิบายไม่เกิน 2 บรรทัด
3. **Correct Type** - ต้องเป็น "skill" เสมอ
4. **Complete Dependencies** - ระบุทุก dependencies ที่จำเป็น
5. **Version Updates** - อัพเดท version เมื่อมีการเปลี่ยนแปลง
