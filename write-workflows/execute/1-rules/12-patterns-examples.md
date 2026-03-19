# Example Patterns

## Purpose

กำหนด patterns และมาตรฐานสำหรับไฟล์ examples ให้สอดคล้องกันและเป็นตัวอย่างที่ใช้งานได้จริง

## Scope

- ทุกไฟล์ example ใน `execute/3-examples/`
- การสร้าง example files ใหม่
- การใช้ examples สำหรับ workflows
- การรักษาความสอดคล้องของ example format

## Rules

### 1. Example Structure

| Section | จำเป็น? | คำอธิบาย | ความยาวสูงสุด |
|---------|----------|-----------|-------------|
| **Purpose** | ✅ | วัตถุประสงค์ของ example | 2 ประโยค |
| **Scope** | ✅ | ขอบเขตการใช้งาน | 3-5 bullet points |
| **Rules** | ✅ | กฎและข้อกำหนด | ไม่จำกัด |
| **Steps** | ✅ | ขั้นตอนการดำเนินการ | ไม่จำกัด |
| **Expected Outcome** | ✅ | ผลลัพธ์ที่คาดหวัง | ไม่จำกัด |
| **Reference** | ✅ | แหล่งข้อมูลเพิ่มเติม | ไม่จำกัด |

### 2. Example Naming

| รูปแบบ | ตัวอย่าง | คำอธิบาย |
|--------|----------|-----------|
| `<number>-<workflow>.md` | `1-validate-workflows.md` | Example สำหรับ workflow |
| `<number>-<topic>.md` | `2-code-quality.md` | Example สำหรับหัวข้อ |
| `<number>-<use-case>.md` | `3-api-integration.md` | Example สำหรับ use case |

### 3. Content Standards

| Element | มาตรฐาน | ตัวอย่าง |
|---------|----------|----------|
| **Front Matter** | ครบถ้วนตาม template | title, description, follow |
| **Real Data** | ใช้ข้อมูลจริง | `package.json` จริง |
| **Working Code** | ทดสอบแล้วว่าใช้ได้ | `npm install` ได้ |
| **Practical** | ใช้งานได้จริง | ไม่ใช่ mock data |

### 4. Example Quality

| Metric | Target | Validation |
|--------|--------|-------------|
| **Completeness** | มีทุก section ที่จำเป็น | Check sections |
| **Usability** | Copy-paste ได้ทันที | Test example |
| **Realism** | ใช้งานได้จริง | Run commands |
| **Consistency** | เหมือนกับ examples อื่น | Compare format |

### 5. Example Categories

| ประเภท | วัตถุประสงค์ | ตัวอย่างไฟล์ |
|---------|--------------|----------------|
| **Validation** | ตรวจสอบความถูกต้อง | `1-validate-workflows.md` |
| **Improvement** | ปรับปรุงคุณภาพ | `2-improve-code-quality.md` |
| **Testing** | การทดสอบ | `3-test-performance.md` |
| **Review** | การตรวจสอบ | `4-review-architecture.md` |
| **Documentation** | การเขียน docs | `5-write-documentation.md` |

## Template

```markdown
---
title: [Example Name]
description: [คำอธิบายสั้นๆ ชัดเจน]
auto_execution_mode: 3
file-patterns:
  - "[file-patterns]"
follow:
  skills:
    - "[skill-1]"
    - "[skill-2]"
  workflows:
    - "/[workflow-1]"
    - "/[workflow-2]"
  files:
    - "[file-1]"
    - "[file-2]"
---

## [Example Name]

## Purpose

[คำอธิบายวัตถุประสงค์ของ example นี้]

## Scope

- [ขอบเขตการใช้งานที่ 1]
- [ขอบเขตการใช้งานที่ 2]
- [ขอบเขตการใช้งานที่ 3]

## Rules

### 1. [Rule Category 1]

| รายการ | คำอธิบาย | ตัวอย่าง |
|--------|----------|----------|
| [item] | [description] | [example] |

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
| **[Outcome 1]** | [คำอธิบาย] | [วิธีวัดผล] |
| **[Outcome 2]** | [คำอธิบาย] | [วิธีวัดผล] |
| **[Outcome 3]** | [คำอธิบาย] | [วิธีวัดผล] |
| **[Outcome 4]** | [คำอธิบาย] | [วิธีวัดผล] |

## Reference

- [Reference Link 1](../1-rules/[rule-file].md)
- [Reference Link 2](../2-templates/[template-file].md)
- [External Link](https://example.com)
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
| มี sections ครบ (Purpose, Scope, Rules, Steps, Reference) | ✅ |
| ลำดับ sections ถูกต้อง | ✅ |
| Heading levels สอดคล้องกัน | ✅ |

### 2. Language Check

| Element | ภาษา |
|---------|------|
| Headings | อังกฤษ |
| Descriptions | ไทย |
| Technical terms | อังกฤษ |

### 3. Front Matter Validation

| Field | สถานะ |
|-------|--------|
| `title` | Required (อังกฤษ) |
| `description` | Required (ไทย) |
| `auto_execution_mode` | Required (1, 2, 3) |
| `file-patterns` | Required (Array) |
| `follow` | Recommended |

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
- [Front Matter Format](../1-rules/3-front-matter.md)
- [Language Standards](../1-rules/4-language.md)
- [Workflow Examples](../3-examples/)
- [Markdown Format Guidelines](https://www.markdownguide.org/)
```

## Example Validation Script

```bash
#!/bin/bash

# ตรวจสอบความถูกต้องของ example
validate_example() {
    local example="$1"
    local errors=0
    
    # ตรวจสอบ sections
    local required_sections=("Purpose" "Scope" "Rules" "Steps" "Expected Outcome" "Reference")
    
    for section in "${required_sections[@]}"; do
        if ! grep -q "^## $section" "$example"; then
            echo "❌ Missing section: $section"
            ((errors++))
        fi
    done
    
    # ตรวจสอบ front matter
    if ! grep -q "^---" "$example"; then
        echo "❌ Missing front matter"
        ((errors++))
    fi
    
    # ตรวจสอบ tables ใน Rules
    if grep -q "^## Rules" "$example" && ! grep -q "|" "$example"; then
        echo "❌ Rules section missing tables"
        ((errors++))
    fi
    
    # ตรวจสอบ Expected Outcome
    if ! grep -q "^## Expected Outcome" "$example"; then
        echo "❌ Missing Expected Outcome section"
        ((errors++))
    fi
    
    return $errors
}

# ตรวจสอบทุก example
find ../3-examples -name "*.md" -type f | while read example; do
    echo "🔍 Validating: $example"
    validate_example "$example"
done
```

## Best Practices

### 1. Example Design

- **Be Practical** - ใช้งานได้จริง
- **Be Complete** - มีทุกส่วนที่จำเป็น
- **Be Tested** - ตรวจสอบว่าใช้ได้จริง
- **Be Documented** - มีคำอธิบายครบถ้วน

### 2. Content Guidelines

| Element | แนวทาง | ตัวอย่าง |
|---------|----------|----------|
| **Real Data** | ใช้ข้อมูลจริง | `package.json` จริง |
| **Working Commands** | ทดสอบว่าใช้ได้ | `npm test` ผ่าน |
| **Actual Files** | ใช้ไฟล์จริง | `src/index.ts` จริง |
| **Practical Steps** | ทำได้จริง | ไม่ใช่ mock steps |

### 3. Front Matter Standards

| Field | ค่าที่แนะนำ | ตัวอย่าง |
|-------|--------------|----------|
| `title` | English, descriptive | `Validate Workflows` |
| `description` | Thai, concise | `ตรวจสอบความถูกต้อง` |
| `auto_execution_mode` | 3 (auto) | `3` |
| `file-patterns` | Relevant patterns | `"*.md"` |
| `follow.skills` | Related skills | `["@write-skills"]` |
| `follow.workflows` | Related workflows | `["/validate"]` |
| `follow.files` | Related files | `["package.json"]` |

### 4. Steps Guidelines

- **3 Phases Minimum** - มีอย่าง 3 phases
- **Action-Oriented** - ใช้คำกริยาชัดเจน
- **Measurable** - สามารถวัดผลได้
- **Sequential** - ทำตามลำดับ

### 5. Expected Outcome Standards

| Element | มาตรฐาน | ตัวอย่าง |
|---------|----------|----------|
| **Table Format** | 3 columns minimum | `| ผลลัพธ์ | คำอธิบาย | วิธีวัดผล |` |
| **Measurable** | สามารถวัดผลได้ | `Check validation report` |
| **Specific** | ชัดเจนไม่คลุมเคลือ | `All Files Validated` |
| **Relevant** | เกี่ยวข้องกับ workflow | `Links Working` |

### 6. Reference Guidelines

- **Internal Links** - ใช้ relative paths
- **External Links** - ใช้ full URLs
- **Rule References** - ชี้ไปยัง rules files
- **Template References** - ชี้ไปยัง templates

## Example Categories and Use Cases

### 1. Validation Examples
- **Purpose**: ตรวจสอบความถูกต้อง
- **Use Cases**: Pre-commit checks, CI/CD validation
- **Common Patterns**: Structure validation, content validation

### 2. Improvement Examples
- **Purpose**: ปรับปรุงคุณภาพ
- **Use Cases**: Code refactoring, performance optimization
- **Common Patterns**: Code analysis, best practices application

### 3. Testing Examples
- **Purpose**: การทดสอบ
- **Use Cases**: Unit tests, integration tests, performance tests
- **Common Patterns**: Test setup, test execution, result analysis

### 4. Review Examples
- **Purpose**: การตรวจสอบ
- **Use Cases**: Architecture review, code review
- **Common Patterns**: Analysis, recommendations, reporting

### 5. Documentation Examples
- **Purpose**: การเขียนเอกสาร
- **Use Cases**: API docs, user guides, README
- **Common Patterns**: Content creation, review, publishing
