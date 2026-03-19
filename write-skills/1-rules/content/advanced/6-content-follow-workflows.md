# Frontmatter Standards

## Purpose

กำหนดมาตรฐาน frontmatter สำหรับทุก SKILL.md

## Required Fields

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| `title` | string | ชื่อ skill ที่ชัดเจน | `"Write Skills"` |
| `description` | string | คำอธิบายสั้นๆ | `"กำหนดมาตรฐานการสร้าง skill files"` |
| `type` | string | ต้องเป็น `"skill"` หรือ `"workflow"` | `"skill"` |
| `version` | string | Semantic version | `"1.0.0"` |
| `auto_execution_mode` | number | ต้องเป็น `3` สำหรับ skills | `3` |
| `file-patterns` | array | Glob patterns ที่ skill ใช้ | `["SKILL.md", "*.md"]` |

## Optional Fields

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| `follow.skills` | array | Skills ที่เกี่ยวข้อง | `["@write-markdown"]` |
| `follow.workflows` | array | Workflows ที่เกี่ยวข้อง | `["/write-workflows"]` |
| `follow.files` | array | Files ที่เกี่ยวข้อง | `["package.json"]` |
| `follow.mcp` | array | MCP servers ที่เกี่ยวข้อง | `["context7"]` |

## Example Frontmatter

```yaml
---
title: Write Skills
description: กำหนดมาตรฐานการสร้าง skill files สำหรับ Windsurf workspace
type: skill
version: 1.0.0
auto_execution_mode: 3
file-patterns: ["SKILL.md", "*.md"]
follow:
  skills: []
  workflows: ["/write-workflows", "/write-markdown"]
  files: []
  mcp: []
---
```

## Validation Rules

1. **title** - ต้องไม่ว่าง และใช้ Title Case
2. **description** - ต้องไม่ว่าง และอธิบายได้ชัดเจน
3. **type** - ต้องเป็น `"skill"` หรือ `"workflow"` เท่านั้น
4. **version** - ต้องใช้ semantic version format
5. **auto_execution_mode** - ต้องเป็น `3` สำหรับ skills
6. **file-patterns** - ต้องเป็น array ว่างไม่ได้

## Common Mistakes

### ❌ Incorrect
```yaml
---
title: skill
description: เขียน skill
type: "Skill"
version: "1.0"
auto_execution_mode: 2
file-patterns: "*.md"
---
```

### ✅ Correct
```yaml
---
title: Write Skills
description: กำหนดมาตรฐานการสร้าง skill files
type: skill
version: 1.0.0
auto_execution_mode: 3
file-patterns: ["SKILL.md", "*.md"]
---
```

## Testing

ใช้ command ต่อไปนี้เพื่อตรวจสอบ frontmatter:

```bash
# ตรวจสอบว่ามี required fields ครบถ้วน
grep -E "^title:|^description:|^type:|^version:|^auto_execution_mode:|^file-patterns:" SKILL.md

# ตรวจสอบว่า type เป็น skill หรือ workflow
grep "^type:" SKILL.md | grep -E "(skill|workflow)"
```
ทำตาม @write-workflows