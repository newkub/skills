# File Naming Conventions

## Purpose

กำหนดสูตรมาตรฐานสำหรับการตั้งชื่อไฟล์ workflow ให้สอดคล้อง ค้นหาได้ง่าย และเข้าใจภายใน 5 วินาที

## Scope

- ไฟล์ workflow ทั้งหมดใน `workflows/`
- ไฟล์ rules ใน `execute/1-rules/`
- ไฟล์ templates ใน `execute/2-templates/`
- ไฟล์ examples ใน `execute/3-examples/`
- ไฟล์ skills ทั้งหมดในโปรเจกต์

## Rules

### 1. Workflow Files (workflows/)

ใช้สูตร: `<prefix>-<domain>-<topic>.md`

| ส่วน | รูปแบบ | ความยาว | ตัวอย่าง | คำอธิบาย |
|------|--------|----------|----------|-----------|
| **prefix** | 6 prefixes ที่อนุญาต | - | `improve-` | ดู [Prefix Definitions](#21-prefix-definitions) |
| **domain** | โดเมนหลัก | 2-10 chars | `code` | หมวดหมู่ใหญ่ |
| **topic** | หัวข้อเฉพาะ | 2-15 chars | `quality` | รายละเอียดย่อย |

#### 1.1 Prefix Definitions

| Prefix | ประเภท | ใช้เมื่อ | ตัวอย่าง |
|--------|--------|----------|----------|
| `improve-` | ปรับปรุง | พัฒนาคุณภาพ/ฟีเจอร์ | `improve-code-quality.md` |
| `review-` | ตรวจสอบ | ตรวจสอบคุณภาพ/มาตรฐาน | `review-workflows.md` |
| `validate-` | ยืนยัน | ตรวจสอบความถูกต้องตาม rules | `validate-structure.md` |
| `verify-` | ทดสอบ | ยืนยันการทำงานจริง | `verify-functionality.md` |
| `write-` | เขียน | สร้าง/เขียนใหม่ | `write-documentation.md` |
| `test-` | ทดสอบ | ทดสอบ/วัดผล | `test-performance.md` |

### 2. Rules Files (execute/1-rules/)

ใช้สูตร: `<number>-<topic>.md`

| รูปแบบ | ตัวอย่าง | คำอธิบาย |
|--------|----------|-----------|
| `1-document-structure.md` | โครงสร้างเอกสาร | Document structure rules |
| `2-file-naming.md` | การตั้งชื่อไฟล์ | File naming conventions |
| `3-front-matter.md` | Front matter | YAML front matter format |
| `4-language.md` | ภาษา | Language usage standards |
| `5-references.md` | อ้างอิง | Reference and link standards |
| `6-workflow-naming.md` | ตั้งชื่อ workflow | Workflow naming rules |
| `7-workflow-steps.md` | ขั้นตอน workflow | Workflow step standards |

### 3. Templates Files (execute/2-templates/)

ใช้สูตร: `<category>-<type>.md`

| รูปแบบ | ตัวอย่าง | คำอธิบาย |
|--------|----------|-----------|
| `global-workflows.md` | Global template | Template สำหรับ workflows ทั่วไป |
| `local-workflows.md` | Local template | Template สำหรับ workflows ภายในโปรเจกต์ |
| `skill-templates.md` | Skill template | Template สำหรับ skills |

### 4. Examples Files (execute/3-examples/)

ใช้สูตร: `<number>-<workflow>.md`

| รูปแบบ | ตัวอย่าง | คำอธิบาย |
|--------|----------|-----------|
| `1-validate-workflows.md` | Validate example | ตัวอย่างการตรวจสอบ |
| `2-improve-code-quality.md` | Improve example | ตัวอย่างการปรับปรุงโค้ด |
| `3-test-performance.md` | Test example | ตัวอย่างการทดสอบ |
| `4-review-architecture.md` | Review example | ตัวอย่างการตรวจสอบสถาปัตยกรรม |
| `5-write-documentation.md` | Write example | ตัวอย่างการเขียนเอกสาร |

### 5. Skills Files (root/)

ใช้สูตร: `<category>-<technology>.md`

| รูปแบบ | ตัวอย่าง | คำอธิบาย |
|--------|----------|-----------|
| `lang-typescript.md` | Language skill | TypeScript best practices |
| `frontend-react.md` | Frontend skill | React development |
| `database-drizzle.md` | Database skill | Drizzle ORM |
| `test-vitest.md` | Test skill | Vitest testing |

### 6. Universal Naming Constraints

| Rule | Requirement | Validation | ตัวอย่าง |
|------|-------------|-------------|----------|
| **Case** | kebab-case เท่านั้น | `/^[a-z0-9-]+$/` | `file-name.md` |
| **Separator** | hyphen (`-`) | Single hyphen | `file-name` |
| **Extension** | `.md` เท่านั้น | Check extension | `file.md` |
| **Max Length** | 50 ตัวอักษร | `len <= 50` | `short-name.md` |
| **Language** | ภาษาอังกฤษเท่านั้น | `/^[a-z-]+$/` | `english-name.md` |
| **No Numbers Start** | ห้ามขึ้นต้นด้วยตัวเลข | `/^[a-z]/` | `name.md` |
| **No Special Chars** | ห้ามใช้อักขระพิเศษ | `/^[a-z0-9-]+$/` | `simple-name.md` |

### 7. Forbidden Patterns

| Pattern | เหตุผล | แก้ไขเป็น |
|---------|--------|-----------|
| `ภาษาไทย` | ไม่ support ในทุก OS | `english-name` |
| `snake_case` | ไม่สอดคล้องกับมาตรฐาน | `kebab-case` |
| `PascalCase` | ใช้สำหรับ components เท่านั้น | `kebab-case` |
| `UPPERCASE` | ใช้สำหรับ constants เท่านั้น | `lowercase` |
| `camelCase` | ใช้สำหรับ variables เท่านั้น | `kebab-case` |
| `1-start-number` | ใช้สำหรับ numbered files เท่านั้น | `start-with-letter` |
| `very-long-file-name-that-exceeds-limits.md` | ยาวเกิน 50 chars | `short-name.md` |
| `file-with spaces.md` | spaces มีปัญหาใน CLI | `file-with-dashes.md` |
| `file.with.dots.md` | dots สับสน | `file-with-dashes.md` |

## Template

### Workflow File

```markdown
<prefix>-<domain>-<topic>.md
```

### Rules File

```markdown
<number>-<topic>.md
```

### Template File

```markdown
<category>-<type>.md
```

### Example File

```markdown
<number>-<workflow>.md
```

### Skill File

```markdown
<category>-<technology>.md
```

## Example

### Valid Names

| ไฟล์ | ประเภท | สูตร | คำอธิบาย |
|------|--------|------|----------|
| `improve-code-quality.md` | Workflow | `<prefix>-<domain>-<topic>` | ปรับปรุงคุณภาพโค้ด |
| `review-workflows.md` | Workflow | `<prefix>-<domain>` | ตรวจสอบ workflows |
| `validate-structure.md` | Workflow | `<prefix>-<topic>` | ตรวจสอบโครงสร้าง |
| `1-document-structure.md` | Rules | `<number>-<topic>` | กฎโครงสร้างเอกสาร |
| `2-file-naming.md` | Rules | `<number>-<topic>` | กฎการตั้งชื่อไฟล์ |
| `global-workflows.md` | Template | `<category>-<type>` | Template ทั่วไป |
| `1-validate-workflows.md` | Example | `<number>-<workflow>` | ตัวอย่าง validation |
| `lang-typescript.md` | Skill | `<category>-<technology>` | TypeScript skill |
| `commit.md` | Example | `<topic>` | ตัวอย่างพิเศษ |

### Invalid Names and Fixes

| ไฟล์ | ปัญหา | แก้ไข | เหตุผล |
|------|--------|--------|---------|
| `CreateWorkflow.md` | PascalCase | `write-workflows.md` | ใช้ kebab-case |
| `check_quality.md` | snake_case | `review-quality.md` | ใช้ hyphen และ prefix ที่ถูกต้อง |
| `fileNaming.md` | camelCase | `file-naming.md` | ใช้ kebab-case |
| `สร้าง-workflow.md` | ภาษาไทย | `write-workflows.md` | ใช้ภาษาอังกฤษ |
| `fix-bug-now-immediately.md` | ยาวเกิน | `fix-bug.md` | จำกัด 50 ตัวอักษร |
| `1-start-with-number.md` | เริ่มด้วยตัวเลข | `start-with-number.md` | ใช้ rules files เท่านั้น |
| `file with spaces.md` | มี spaces | `file-with-spaces.md` | spaces มีปัญหาใน CLI |

### Validation Script

```bash
#!/bin/bash

# ตรวจสอบชื่อไฟล์ตาม rules
validate_filename() {
    local filename="$1"
    local basename=$(basename "$filename")
    
    # ตรวจสอบ constraints
    if [[ ! "$basename" =~ ^[a-z0-9-]+\.md$ ]]; then
        echo "❌ Invalid: $basename (invalid characters)"
        return 1
    fi
    
    if [[ ${#basename} -gt 50 ]]; then
        echo "❌ Invalid: $basename (too long)"
        return 1
    fi
    
    if [[ "$basename" =~ ^[0-9] ]] && [[ ! "$filename" =~ */1-rules/ ]]; then
        echo "❌ Invalid: $basename (starts with number outside rules)"
        return 1
    fi
    
    echo "✅ Valid: $basename"
    return 0
}

# ตรวจสอบทุกไฟล์
find . -name "*.md" -type f | while read file; do
    validate_filename "$file"
done
```
