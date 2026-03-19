# Rule Template Patterns

## Purpose

รวบรวม patterns และมาตรฐานสำหรับการสร้าง rule template จากไฟล์ rules ทั้งหมดให้สอดคล้องกันและใช้งานง่าย

## Scope

- ทุกไฟล์ rule ใน `execute/1-rules/`
- การสร้าง rule template ใหม่
- การใช้ rule template สำหรับ workflows
- การรักษาความสอดคล้องของ rule format

## Rules

### 1. Rule Template Structure

| Section | จำเป็น? | คำอธิบาย | ความยาวสูงสุด |
|---------|----------|-----------|-------------|
| **Purpose** | ✅ | วัตถุประสงค์ของ rule template | 2 ประโยค |
| **Scope** | ✅ | ขอบเขตการใช้งาน | 3-5 bullet points |
| **Rules** | ✅ | กฎและข้อกำหนด | ไม่จำกัด |
| **Template** | ✅ | Template code block | ไม่จำกัด |
| **Example** | ✅ | ตัวอย่างการใช้ | ไม่จำกัด |

### 2. Rule Template Naming

| รูปแบบ | ตัวอย่าง | คำอธิบาย |
|--------|----------|-----------|
| `<number>-<category>-<topic>.md` | `13-patterns-rules.md` | Rule template สำหรับ patterns |
| `<number>-<topic>.md` | `1-document-structure.md` | Rule สำหรับหัวข้อเดียว |

### 3. Content Standards

| Element | มาตรฐาน | ตัวอย่าง |
|---------|----------|----------|
| **Placeholders** | ใช้ `[brackets]` | `[Rule Name]` |
| **Code Blocks** | ระบุภาษาเสมอ | ````markdown` |
| **Comments** | ใช้ `#` ใน code blocks | `# Replace with actual value` |
| **Sections** | ใช้ `##` สำหรับ main sections | `## Purpose` |
| **Tables** | ใช้เมื่อมี >= 3 รายการ | `| รายการ | คำอธิบาย |` |

### 4. Rule Template Quality

| Metric | Target | Validation |
|--------|--------|-------------|
| **Completeness** | มีทุก section ที่จำเป็น | Check sections |
| **Usability** | Copy-paste ได้ทันที | Test template |
| **Clarity** | เข้าใจง่ายภายใน 10 วินาที | Readability test |
| **Consistency** | เหมือนกับ rule templates อื่น | Compare format |

### 5. Integration Patterns

| Pattern | วัตถุประสงค์ | ตัวอย่าง |
|---------|--------------|----------|
| **Structure → Naming** | โครงสร้างไปยังการตั้งชื่อ | `1-document-structure.md → 2-file-naming.md` |
| **Naming → Front Matter** | การตั้งชื่อไปยัง front matter | `2-file-naming.md → 3-front-matter.md` |
| **Language → Quality** | ภาษาไปยังคุณภาพ | `4-language.md → 8-content-quality.md` |
| **Validation → Integration** | การตรวจสอบไปยังการเชื่อมโยง | `9-validation.md → 10-integration.md` |

### 7. Workflow Naming Patterns

| Prefix | วัตถุประสงค์ | ตัวอย่าง | เงื่อนไข |
|--------|--------------|----------|----------|
| `write-` | สร้างและเขียน workflows ใหม่ | `write-workflows.md` | เฉพาะการสร้างใหม่ |
| `update-` | อัพเดทและปรับปรุง workflows ที่มีอยู่ | `update-workflows.md` | เฉพาะการอัพเดท |
| `improve-` | ปรับปรุงคุณภาพและประสิทธิภาพ | `improve-workflows.md` | เฉพาะการปรับปรุง |

**กฎสำคัญ:** ทุก workflows ต้องมี prefix write-, update-, improve- เท่านั้น ไม่รองรับ prefix อื่นๆ

| ประเภท | วัตถุประสงค์ | ตัวอย่างไฟล์ |
|---------|--------------|----------------|
| **Structure** | โครงสร้างพื้นฐาน | `1-document-structure.md` |
| **Naming** | การตั้งชื่อ | `2-file-naming.md` |
| **Metadata** | Front matter และ metadata | `3-front-matter.md` |
| **Language** | มาตรฐานภาษา | `4-language.md` |
| **References** | การอ้างอิง | `5-references.md` |
| **Quality** | คุณภาพเนื้อหา | `8-content-quality.md` |
| **Validation** | การตรวจสอบ | `9-validation.md` |
| **Integration** | การเชื่อมโยง | `10-integration.md` |
| **Patterns** | Templates และ Examples | `11-patterns-templates.md`, `12-patterns-examples.md` |

## Template

```markdown
# [Rule Template Name]

## Purpose

[คำอธิบายวัตถุประสงค์ของ rule template นี้]

## Scope

- [ขอบเขตที่ 1]
- [ขอบเขตที่ 2]
- [ขอบเขตที่ 3]

## Rules

### 1. [Rule Category 1]

| รายการ | คำอธิบาย | ตัวอย่าง |
|--------|----------|----------|
| [item] | [description] | [example] |

### 2. [Rule Category 2]

[รายละเอียดกฎในหมวดนี้]

### 3. [Rule Category 3]

| ประเภท | วิธีการ | ตัวอย่าง | หมายเหตุ |
|---------|----------|----------|----------|
| [type] | [method] | [example] | [note] |

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
# Document Structure Rule Template

## Purpose

กำหนดโครงสร้างมาตรฐานสำหรับไฟล์ workflow ให้มีความสม่ำเสมอและอ่านง่าย

## Scope

- ทุกไฟล์ workflow ใน `.windsurf/workflows/*.md`
- ทุกไฟล์ global workflow ใน `global_workflows/*.md`
- ไฟล์ documentation ทั้งหมดในโปรเจกต์

## Rules

### 1. Required Sections

| Section | ลำดับ | Purpose | ความยาวสูงสุด |
|---------|-------|---------|----------------|
| **Purpose** | 1 | วัตถุประสงค์ | 2 ประโยค |
| **Scope** | 2 | ขอบเขตการใช้งาน | 5 bullet points |
| **Rules** | 3 | กฎและข้อกำหนด | ไม่จำกัด |
| **Template** | 4 | เทมเพลตสำหรับใช้งาน | ไม่จำกัด |
| **Example** | 5 | ตัวอย่างการนำไปใช้ | ไม่จำกัด |

### 2. Section Content Standards

| Section | ภาษา | รูปแบบ | ห้าม |
|---------|------|--------|------|
| **Purpose** | ไทย | กระชับ ชัดเจน | ยาวเกิน 2 ประโยค |
| **Scope** | ไทย | Bullet points | ยาวเกิน 5 รายการ |
| **Rules** | ไทย | Tables + Subsections | ไม่มีตาราง |
| **Template** | - | Code blocks | ไม่ระบุภาษา |
| **Example** | - | Code blocks | ไม่สมบูรณ์ |

### 3. Heading Hierarchy

| Level | Syntax | ใช้สำหรับ | จำนวนสูงสุดต่อไฟล์ |
|-------|--------|----------|---------------------|
| `#` | `# Title` | Title ของไฟล์ | 1 |
| `##` | `## Section` | Main sections | 5 |
| `###` | `### Subsection` | Rule categories | 10 |
| `####` | `#### Detail` | รายละเอียดย่อย | 20 |
| `#####` | `##### Note` | หมายเหตุ | 5 |

## Template

```markdown
# [Title]

## Purpose

[คำอธิบายวัตถุประสงค์ 1-2 ประโยค กระชับ ชัดเจน]

## Scope

- [ขอบเขตที่ 1]
- [ขอบเขตที่ 2]
- [ขอบเขตที่ 3]

## Rules

### 1. [กฎหลักที่ 1]

| รายการ | คำอธิบาย | ตัวอย่าง |
|--------|----------|----------|
| [item] | [description] | [example] |

### 2. [กฎหลักที่ 2]

[รายละเอียดพร้อมตาราง]

## Template

```[language]
[code template ที่ใช้ได้จริง]
```

## Example

```[language]
[ตัวอย่างที่สมบูรณ์]
```
```

## Example

```markdown
# Commit Workflow

## Purpose

แนวทางการ commit โค้ดด้วย conventional commits format

## Scope

- ทุกการ commit ในโปรเจกต์
- การเขียน commit message
- การใช้งาน semantic versioning

## Rules

### 1. Commit Message Format

| Type | ใช้เมื่อ | ตัวอย่าง |
|------|----------|----------|
| `feat` | เพิ่ม feature ใหม่ | `feat(auth): add login` |
| `fix` | แก้ไข bug | `fix(api): resolve null` |
| `docs` | แก้ไขเอกสาร | `docs(readme): update setup` |

### 2. Message Structure

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

## Template

```
feat(auth): add login functionality

- Implement JWT authentication
- Add password validation
- Create session management

Closes #123
```

## Example

```
fix(api): resolve null pointer in user controller

The getUserById method was not checking for null
before accessing user properties. Added null check
and proper error handling.

Fixes #456
```
```
```

## Rule Template Validation Script

```bash
#!/bin/bash

# ตรวจสอบความถูกต้องของ rule template
validate_rule_template() {
    local template="$1"
    local errors=0
    
    # ตรวจสอบ sections
    local required_sections=("Purpose" "Scope" "Rules" "Template" "Example")
    
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
    
    # ตรวจสอบ tables
    local tables=$(grep -c '|' "$template")
    if [[ $tables -lt 2 ]]; then
        echo "❌ Not enough tables"
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

# ตรวจสอบทุก rule template
find . -name "*-patterns-*.md" -type f | while read template; do
    echo "🔍 Validating: $template"
    validate_rule_template "$template"
done
```

## Best Practices

### 1. Rule Template Design

- **Keep it Simple** - ไม่ซับซ้อนเกินไป
- **Be Specific** - ระบุวัตถุประสงค์ชัดเจน
- **Provide Examples** - มีตัวอย่างจริงที่ใช้ได้
- **Document Well** - มีคำอธิบายครบถ้วน

### 2. Placeholder Usage

| Placeholder | ตำแหน่ง | ตัวอย่าง |
|------------|----------|----------|
| `[Rule Template Name]` | Title, headings | `Document Structure Rule Template` |
| `[description]` | Purpose | `กำหนดโครงสร้างมาตรฐาน` |
| `[Rule Category]` | Rules | `Required Sections` |
| `[Section Name]` | Template | `## Purpose` |

### 3. Table Standards

- **Headers** - ชัดเจน กระชับ
- **Alignment** - Left-aligned
- **Content** - ไม่ซ้ำซ้อน
- **Width** - พอดีหน้าจอ

### 4. Code Block Standards

- **Language Specification** - ระบุภาษาเสมอ
- **Syntax Highlighting** - ใช้ syntax ที่ถูกต้อง
- **Comments** - เพิ่มคำอธิบายใน code blocks
- **Indentation** - ใช้ consistent indentation

### 5. Example Guidelines

- **Real Usage** - ตัวอย่างจริงที่ใช้ได้
- **Complete** - สมบูรณ์และทำงานได้
- **Tested** - ตรวจสอบว่าใช้งานได้จริง
- **Documented** - มีคำอธิบายประกอบ

## Integration with Other Rules

### 1. Document Structure Integration

- ใช้โครงสร้างจาก `1-document-structure.md`
- รักษาลำดับ sections ตามมาตรฐาน
- ใช้ heading hierarchy ที่กำหนด

### 2. File Naming Integration

- ตั้งชื่อตาม `2-file-naming.md`
- ใช้รูปแบบ `<number>-<category>-<topic>.md`
- รักษาความยาวไม่เกิน 50 ตัวอักษร

### 3. Front Matter Integration

- ใช้รูปแบบจาก `3-front-matter.md`
- ระบุ fields ที่จำเป็นครบถ้วน
- ใช้ภาษาที่กำหนดตาม field

### 4. Language Integration

- ใช้ภาษาอังกฤษสำหรับ headings
- ใช้ภาษาไทยสำหรับ descriptions
- ใช้ English loanwords สำหรับ technical terms

### 5. Quality Integration

- รักษามาตรฐานคุณภาพจาก `8-content-quality.md`
- ใช้ tables และ code blocks อย่างถูกต้อง
- ตรวจสอบ readability และ completeness

### 6. Validation Integration

- ผ่านการตรวจสอบจาก `9-validation.md`
- มีทุก section ที่จำเป็น
- ใช้รูปแบบที่สอดคล้องกัน

### 7. Integration Integration

- เชื่อมโยงกับ rules อื่นตาม `10-integration.md`
- ใช้ references ที่ถูกต้อง
- รักษาความสอดคล้องกับทั้งระบบ

## Template Categories and Use Cases

### 1. Structure Templates

- **Purpose**: โครงสร้างพื้นฐาน
- **Use Cases**: Document structure, file organization
- **Common Patterns**: Section hierarchy, content organization

### 2. Naming Templates

- **Purpose**: การตั้งชื่อ
- **Use Cases**: File naming, variable naming
- **Common Patterns**: Consistent naming conventions

### 3. Metadata Templates

- **Purpose**: Front matter และ metadata
- **Use Cases**: YAML configuration, file metadata
- **Common Patterns**: Required fields, validation rules

### 4. Language Templates

- **Purpose**: มาตรฐานภาษา
- **Use Cases**: Content language, technical terms
- **Common Patterns**: Language usage, terminology

### 5. Quality Templates

- **Purpose**: คุณภาพเนื้อหา
- **Use Cases**: Content standards, readability
- **Common Patterns**: Quality metrics, validation

### 6. Validation Templates

- **Purpose**: การตรวจสอบ
- **Use Cases**: Content validation, structure validation
- **Common Patterns**: Validation rules, error handling

### 7. Integration Templates

- **Purpose**: การเชื่อมโยง
- **Use Cases**: Cross-references, dependencies
- **Common Patterns**: Integration patterns, linking

### 8. Pattern Templates

- **Purpose**: Templates และ Examples
- **Use Cases**: Template design, example creation
- **Common Patterns**: Template structure, example format