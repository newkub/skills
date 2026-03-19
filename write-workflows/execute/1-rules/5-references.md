# References

## Purpose

รวบรวมแหล่งข้อมูลอ้างอิงสำหรับการเขียนไฟล์ workflow

## Scope

- เอกสารภายในโปรเจกต์
- External resources
- Templates และ examples

## Rules

### 1. Internal References

| ประเภท | Format | ตัวอย่าง |
|--------|--------|----------|
| **Skills** | `@skill-name` | `@write-skills` |
| **Workflows** | `/workflow-name` | `/validate` |
| **Files** | `path/to/file.md` | `rules/document-structure.md` |

### 2. External References

| ประเภท | Format | ตัวอย่าง |
|--------|--------|----------|
| **URLs** | HTTPS URLs | `https://example.com` |
| **Documentation** | Official docs | `https://yaml.org/spec/` |

### 3. File Pattern Examples

#### Workflow Files

```yaml
file-patterns:
  - ".windsurf/workflows/*.md"
  - "global_workflows/*.md"
  - "workflows/**/*.md"
```

#### Skill Files

```yaml
file-patterns:
  - "*/SKILL.md"
  - "skills/**/*.md"
  - "**/skill.md"
```

### 4. Reference Validation

| ประเภท | ตรวจสอบ |
|--------|----------|
| **Internal** | ไฟล์มีอยู่จริง, path ถูกต้อง |
| **External** | Links ใช้งานได้, เนื้อหาเป็นปัจจุบัน |

## Template

### Internal Reference

```markdown
- Skill: `@skill-name`
- Workflow: `/workflow-name`
- File: `path/to/file.md`
```

### External Reference

```markdown
- [Title](https://example.com)
- Documentation: https://yaml.org/spec/
```

### File Patterns

```yaml
file-patterns:
  - "pattern1"
  - "pattern2"
```

## Example

```markdown
# Front Matter with References

---
title: Write Workflows
description: แนวทางการเขียน workflow
auto_execution_mode: 3
file-patterns:
  - ".windsurf/workflows/*.md"
follow:
  skills:
    - "@write-skills"
    - "@write-markdown"
  workflows:
    - "/validate"
    - "/review-workflows"
  files:
    - "rules/document-structure.md"
---

## Reference

### Internal
- @write-skills
- /validate
- rules/document-structure.md

### External
- [YAML Spec](https://yaml.org/spec/)
- [CommonMark](https://commonmark.org/)
```
