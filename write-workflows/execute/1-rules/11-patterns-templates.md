# Template Patterns

## Purpose

กำหนด patterns และมาตรฐานสำหรับไฟล์ templates ให้สอดคล้องกันและใช้งานง่าย

## Scope

- ทุกไฟล์ template ใน `execute/2-templates/`
- การสร้าง template files ใหม่
- การใช้ templates สำหรับ workflows
- การรักษาความสอดคล้องของ template format

## Rules

### 1. Template Structure

| Section | จำเป็น? | คำอธิบาย | ความยาวสูงสุด |
|---------|----------|-----------|-------------|
| **Purpose** | ✅ | วัตถุประสงค์ของ template | 2 ประโยค |
| **When to Apply** | ✅ | วิธีการใช้ template | 4-6 bullet points |
| **Scope** | ✅ | ขอบเขตการใช้งาน | 3-5 bullet points |
| **Rules** | ✅ | กฎและข้อกำหนด | ไม่จำกัด |
| **Template** | ✅ | Template code block | ไม่จำกัด |
| **Example** | ✅ | ตัวอย่างการใช้ | ไม่จำกัด |

### 2. Template Naming

| รูปแบบ | ตัวอย่าง | คำอธิบาย |
|--------|----------|-----------|
| `<category>-<type>.md` | `global-workflows.md` | Template ทั่วไป |
| `<domain>-<type>.md` | `api-templates.md` | Template สำหรับ domain |
| `<purpose>-<type>.md` | `validation-templates.md` | Template สำหรับวัตถุประสงค์ |

### 3. Content Standards

| Element | มาตรฐาน | ตัวอย่าง |
|---------|----------|----------|
| **Placeholders** | ใช้ `[brackets]` | `[Workflow Name]` |
| **Code Blocks** | ระบุภาษาเสมอ | ````markdown` |
| **Comments** | ใช้ `#` ใน code blocks | `# Replace with actual value` |
| **Sections** | ใช้ `##` สำหรับ main sections | `## Purpose` |

### 4. Template Quality

| Metric | Target | Validation |
|--------|--------|-------------|
| **Completeness** | มีทุก section ที่จำเป็น | Check sections |
| **Usability** | Copy-paste ได้ทันที | Test template |
| **Clarity** | เข้าใจง่ายภายใน 10 วินาที | Readability test |
| **Consistency** | เหมือนกับ templates อื่น | Compare format |

### 5. Template Categories

| ประเภท | วัตถุประสงค์ | ตัวอย่างไฟล์ |
|---------|--------------|----------------|
| **Global** | ใช้ทั่วทั้งโปรเจกต์ | `global-workflows.md` |
| **Domain** | ใช้ใน domain เฉพาะ | `api-templates.md` |
| **Workflow** | สำหรับ workflow types | `validation-templates.md` |
| **Component** | สำหรับ components | `ui-templates.md` |

## Template

```markdown
# [Template Name]

## Purpose

[คำอธิบายวัตถุประสงค์ของ template นี้]

## When to Apply

ใช้ template นี้เมื่อต้องการ:

1. **[Use Case 1]** - [คำอธิบาย]
2. **[Use Case 2]** - [คำอธิบาย]
3. **[Use Case 3]** - [คำอธิบาย]

## Scope

- [ขอบเขตที่ 1]
- [ขอบเขตที่ 2]
- [ขอบเขตที่ 3]

## Rules

### 1. [Rule Category 1]

[รายละเอียดกฎในหมวดนี้]

### 2. [Rule Category 2]

[รายละเอียดกฎในหมวดนี้]

## Template

```[language]
# [Template content with placeholders]
[Section Name]

[Content with [placeholder]]

[More content]
```

## Example

```[language]
# [Actual example without placeholders]
[Section Name]

[Real content]

[More real content]
```
```

## Example

```markdown
# Workflow Template

## Purpose

Template สำหรับสร้างไฟล์ workflow ตามมาตรฐานโปรเจกต์

## When to Apply

ใช้ template นี้เมื่อต้องการ:

1. **สร้าง workflow ใหม่** - คัดลอกและแก้ไข template
2. **ตรวจสอบ structure** - ใช้เป็นตัวอย่างโครงสร้างที่ถูกต้อง
3. **เรียนรู้ format** - ศึกษา sections ที่จำเป็น
4. **ทำให้สอดคล้อง** - รักษาความสอดคล้องกับมาตรฐาน

## Scope

- การสร้าง workflow files ใหม่
- การใช้ template เป็นตัวอย่างสำหรับโครงสร้างที่ถูกต้อง
- การรักษาความสอดคล้องของ workflow format

## Rules

### 1. Template Usage

- คัดลอก template ทั้งหมด
- แก้ไข `[placeholders]` ทั้งหมด
- ตรวจสอบความถูกต้องตามมาตรฐาน

### 2. Required Sections

ต้องมี sections ต่อไปนี้ทั้งหมด:

- `## Purpose` - วัตถุประสงค์ของ workflow
- `## Scope` - ขอบเขตการใช้งาน
- `## Rules` - กฎและข้อกำหนด
- `## Steps` - ขั้นตอนการดำเนินการ
- `## Expected Outcome` - ผลลัพธ์ที่คาดหวัง
- `## Reference` - แหล่งข้อมูลเพิ่มเติม

## Template

```markdown
---
title: [Workflow Name]
description: [คำอธิบายสั้นๆ ชัดเจน]
auto_execution_mode: 3
file-patterns:
  - ".windsurf/workflows/*.md"
  - "global_workflows/*.md"
follow:
  skills:
    - "@write-skills"
    - "@write-markdown"
  workflows:
    - "/validate"
    - "/connect-workflows"
  files:
    - "guidelines/workflow-structure.md"
---

## [Workflow Name]

## Purpose

[คำอธิบายวัตถุประสงค์ของ workflow นี้ ใช้ภาษาไทย]

## Scope

- [ขอบเขตการใช้งานที่ 1]
- [ขอบเขตการใช้งานที่ 2]
- [ขอบเขตการใช้งานที่ 3]

## Rules

### 1. [Rule Category 1]

[รายละเอียดกฎในหมวดนี้]

### 2. [Rule Category 2]

[รายละเอียดกฎในหมวดนี้]

## Steps

### Phase 1: [Phase Name]

1. [ขั้นตอนที่ 1]
2. [ขั้นตอนที่ 2]
3. [ขั้นตอนที่ 3]

### Phase 2: [Phase Name]

1. [ขั้นตอนที่ 1]
2. [ขั้นตอนที่ 2]
3. [ขั้นตอนที่ 3]

### Phase 3: [Phase Name]

1. [ขั้นตอนที่ 1]
2. [ขั้นตอนที่ 2]
3. [ขั้นตอนที่ 3]

## Expected Outcome

| ผลลัพธ์ | คำอธิบาย | วิธีวัดผล |
|--------|----------|------------|
| **Files Created** | ไฟล์ workflow ที่สร้าง | ตรวจสอบใน directory |
| **Structure Validated** | โครงสร้างถูกต้อง | Run validation script |
| **References Updated** | Links ทำงานได้ | Test all links |
| **Integration Ready** | เชื่อมโยงได้ | Test with other workflows |

## Reference

- [Write Workflows Rules](../1-rules/1-document-structure.md)
- [File Naming Conventions](../1-rules/2-file-naming.md)
- [Markdown Format Guidelines](https://www.markdownguide.org/)
- [Examples Directory](../3-examples)
```

## Example

```markdown
---
title: Validate Workflows
description: ตรวจสอบความถูกต้องของ workflows ทั้งหมด
auto_execution_mode: 3
file-patterns:
  - ".windsurf/workflows/*.md"
  - "global_workflows/*.md"
follow:
  skills:
    - "@write-skills"
    - "@write-markdown"
  workflows:
    - "/validate"
    - "/connect-workflows"
  files:
    - "guidelines/workflow-structure.md"
---

## Validate Workflows

## Purpose

ตรวจสอบความถูกต้องของไฟล์ workflow ทั้งหมดตามมาตรฐานที่กำหนด

## Scope

- ทุกไฟล์ workflow ใน `.windsurf/workflows/`
- ทุกไฟล์ global workflow ใน `global_workflows/`
- การตรวจสอบ pre-commit และ CI/CD

## Rules

### 1. Structure Validation

| รายการ | สถานะ |
|--------|--------|
| มี sections ครบ | ✅ |
| ลำดับ sections ถูกต้อง | ✅ |
| Heading levels สอดคล้องกัน | ✅ |

## Steps

### Phase 1: Initial Check

1. ตรวจสอบว่าไฟล์มี front matter ครบถ้วน
2. ตรวจสอบว่ามี sections ครบตามโครงสร้าง
3. ตรวจสอบลำดับและ hierarchy ของ headings

### Phase 2: Content Validation

1. ตรวจสอบภาษาที่ใช้ใน headings และ descriptions
2. ตรวจสอบความสมบูรณ์ของ technical terms
3. ตรวจสอบความถูกต้องของ file patterns

### Phase 3: Integration Check

1. ตรวจสอบว่า follow references มีอยู่จริง
2. ตรวจสอบว่า internal links ใช้งานได้
3. ตรวจสอบว่า external links เข้าถึงได้

## Expected Outcome

| ผลลัพธ์ | คำอธิบาย | วิธีวัดผล |
|--------|----------|------------|
| **All Files Validated** | ทุกไฟล์ผ่าน validation | Check validation report |
| **Structure Compliant** | โครงสร้างถูกต้อง | Run structure check |
| **Links Working** | Links ทำงานได้ | Test all links |
| **Ready for Integration** | เชื่อมโยงได้ | Test with other workflows |

## Reference

- [Document Structure Rules](../1-rules/1-document-structure.md)
- [File Naming Conventions](../1-rules/2-file-naming.md)
- [Markdown Format Guidelines](https://www.markdownguide.org/)
- [Examples Directory](../3-examples)
```
```

## Template Validation Script

```bash
#!/bin/bash

# ตรวจสอบความถูกต้องของ template
validate_template() {
    local template="$1"
    local errors=0
    
    # ตรวจสอบ sections
    local required_sections=("Purpose" "When to Apply" "Scope" "Rules" "Template" "Example")
    
    for section in "${required_sections[@]}"; do
        if ! grep -q "^## $section" "$template"; then
            echo "❌ Missing section: $section"
            ((errors++))
        fi
    done
    
    # ตรวจสอบ placeholders
    local placeholders=$(grep -o '\[[^]]*\]' "$template" | wc -l)
    if [[ $placeholders -eq 0 ]]; then
        echo "❌ No placeholders found"
        ((errors++))
    fi
    
    # ตรวจสอบ code blocks
    local code_blocks=$(grep -c '```' "$template")
    if [[ $code_blocks -lt 4 ]]; then
        echo "❌ Not enough code blocks"
        ((errors++))
    fi
    
    return $errors
}

# ตรวจสอบทุก template
find ../2-templates -name "*.md" -type f | while read template; do
    echo "🔍 Validating: $template"
    validate_template "$template"
done
```

## Best Practices

### 1. Template Design

- **Keep it Simple** - ไม่ซับซ้อนเกินไป
- **Be Specific** - ระบุวัตถุประสงค์ชัดเจน
- **Provide Examples** - มีตัวอย่างจริงที่ใช้ได้
- **Document Well** - มีคำอธิบายครบถ้วน

### 2. Placeholder Usage

| Placeholder | ตำแหน่ง | ตัวอย่าง |
|------------|----------|----------|
| `[Workflow Name]` | Title, headings | `Validate Workflows` |
| `[description]` | Front matter | `ตรวจสอบความถูกต้อง` |
| `[Phase Name]` | Steps | `Initial Check` |
| `[Rule Category]` | Rules | `Structure Validation` |

### 3. Code Block Standards

- **Language Specification** - ระบุภาษาเสมอ
- **Syntax Highlighting** - ใช้ syntax ที่ถูกต้อง
- **Comments** - เพิ่มคำอธิบายใน code blocks
- **Indentation** - ใช้ consistent indentation

### 4. Example Guidelines

- **Real Usage** - ตัวอย่างจริงที่ใช้ได้
- **Complete** - สมบูรณ์และทำงานได้
- **Tested** - ตรวจสอบว่าใช้งานได้จริง
- **Documented** - มีคำอธิบายประกอบ
