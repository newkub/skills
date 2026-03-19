# Validation Rules

## Purpose

กำหนดกระบวนการตรวจสอบความถูกต้องของ workflows และเนื้อหาก่อน publish

## Scope

- การตรวจสอบไฟล์ workflow ทั้งหมด
- การตรวจสอบไฟล์ rules และ templates
- การตรวจสอบ links และ references
- การตรวจสอบคุณภาพเนื้อหา

## Rules

### 1. Required Sections Validation

| Section | ตรวจสอบ | Error Message | Fix |
|---------|----------|--------------|-----|
| **Purpose** | มี 1-2 ประโยค | `Missing Purpose section` | เพิ่ม Purpose |
| **Scope** | มี 3-5 bullet points | `Scope too long/short` | ปรับ Scope |
| **Rules** | มี tables | `Rules missing tables` | เพิ่ม tables |
| **Template** | มี code blocks | `Template missing code` | เพิ่ม template |
| **Example** | มี complete examples | `Example incomplete` | เพิ่ม examples |

### 2. Content Quality Validation

| Metric | Target | Validation Method | Error Message |
|--------|--------|-------------------|---------------|
| **Readability** | 10 วินาที | สแกน sections | `Content not scannable` |
| **Completeness** | 100% | Check sections | `Missing sections` |
| **Consistency** | 100% | Compare template | `Inconsistent format` |
| **Accuracy** | 100% | Test links | `Broken links found` |

### 3. Link Validation

| ประเภท | ตรวจสอบ | Error Message | Fix |
|---------|----------|--------------|-----|
| **Internal** | File exists | `File not found: [path]` | สร้างไฟล์หรือแก้ path |
| **External** | URL accessible | `URL not accessible: [url]` | อัพเดท URL |
| **Anchor** | Section exists | `Anchor not found: [anchor]` | สร้าง section |
| **Email** | Valid format | `Invalid email: [email]` | แก้ email |

### 4. File Structure Validation

| Element | ตรวจสอบ | Error Message | Fix |
|---------|----------|--------------|-----|
| **Filename** | kebab-case | `Invalid filename format` | แก้ชื่อไฟล์ |
| **Extension** | `.md` | `Wrong file extension` | แก้ extension |
| **Length** | ≤ 50 chars | `Filename too long` | ย่อชื่อไฟล์ |
| **Path** | Valid structure | `Invalid file path` | ย้ายไฟล์ |

### 5. Front Matter Validation

| Field | สถานะ | Validation | Error Message |
|-------|--------|------------|---------------|
| `title` | Required | English only | `Missing/invalid title` |
| `description` | Required | Thai only | `Missing/invalid description` |
| `auto_execution_mode` | Required | 1, 2, 3 | `Invalid execution mode` |
| `file-patterns` | Required | Array format | `Invalid file patterns` |
| `follow` | Optional | Valid structure | `Invalid follow section` |

## Template

```markdown
# Validation Checklist

## Pre-Validation

- [ ] ตรวจสอบว่ามีทุก section ที่จำเป็น
- [ ] ตรวจสอบว่า headings ถูกต้อง
- [ ] ตรวจสอบว่า tables มีครบถ้วน
- [ ] ตรวจสอบว่า code blocks ระบุภาษา

## Content Validation

- [ ] Purpose กระชับ (1-2 ประโยค)
- [ ] Scope ไม่เกิน 5 รายการ
- [ ] Rules มี tables และ subsections
- [ ] Template มี code blocks
- [ ] Example สมบูรณ์

## Link Validation

- [ ] Internal links ใช้งานได้
- [ ] External links เข้าถึงได้
- [ ] Anchor links ชี้ถูก section
- [ ] No broken links

## Quality Validation

- [ ] ไม่มี typo หรือ grammar errors
- [ ] สอดคล้องกับไฟล์อื่น
- [ ] ใช้ภาษาถูกต้อง
- [ ] ไม่มี content ซ้ำซ้อน
```

## Example

```markdown
# Workflow Validation Report

## File: improve-code-quality.md

### ✅ Sections Validation
- Purpose: ✅ (2 sentences)
- Scope: ✅ (4 bullet points)
- Rules: ✅ (3 tables)
- Template: ✅ (TypeScript code block)
- Example: ✅ (Complete example)

### ✅ Content Quality
- Readability: ✅ (Scannable in 8 seconds)
- Completeness: ✅ (All sections present)
- Consistency: ✅ (Matches template)
- Accuracy: ✅ (Examples tested)

### ✅ Link Validation
- Internal: ✅ (5/5 links valid)
- External: ✅ (2/2 links accessible)
- Anchor: ✅ (3/3 anchors found)

### ✅ File Structure
- Filename: ✅ (kebab-case, 21 chars)
- Extension: ✅ (.md)
- Path: ✅ (valid structure)

### ✅ Front Matter
- title: ✅ ("Improve Code Quality")
- description: ✅ ("ปรับปรุงคุณภาพโค้ด...")
- auto_execution_mode: ✅ (3)
- file-patterns: ✅ (valid array)
- follow: ✅ (valid structure)

## Result: PASSED
```

## Validation Scripts

### 1. Section Validation

```bash
#!/bin/bash

validate_sections() {
    local file="$1"
    local errors=0
    
    # ตรวจสอบ sections
    local sections=("Purpose" "Scope" "Rules" "Template" "Example")
    
    for section in "${sections[@]}"; do
        if ! grep -q "^## $section" "$file"; then
            echo "❌ Missing section: $section"
            ((errors++))
        fi
    done
    
    # ตรวจสอบ Purpose length
    local purpose=$(sed -n '/^## Purpose/,/^##/p' "$file" | grep -v "^##" | tail -n +2 | head -n -1)
    local purpose_lines=$(echo "$purpose" | wc -l)
    
    if [[ $purpose_lines -gt 3 ]]; then
        echo "❌ Purpose too long ($purpose_lines lines)"
        ((errors++))
    fi
    
    # ตรวจสอบ Scope items
    local scope=$(sed -n '/^## Scope/,/^##/p' "$file" | grep -E "^- " | wc -l)
    if [[ $scope -gt 5 ]]; then
        echo "❌ Scope too many items ($scope items)"
        ((errors++))
    fi
    
    return $errors
}
```

### 2. Link Validation

```bash
#!/bin/bash

validate_links() {
    local file="$1"
    local errors=0
    
    # ตรวจสอบ internal links
    grep -oE '\[.*\]\([^)]*\.md\)' "$file" | while read link; do
        local path=$(echo "$link" | sed -E 's/\[.*\]\(([^)]*)\)/\1/')
        local full_path="$(dirname "$file")/$path"
        
        if [[ ! -f "$full_path" ]]; then
            echo "❌ Broken internal link: $path"
            ((errors++))
        fi
    done
    
    # ตรวจสอบ external links
    grep -oE '\[.*\]\(https?://[^)]*\)' "$file" | while read link; do
        local url=$(echo "$link" | sed -E 's/\[.*\]\(([^)]*)\)/\1/')
        
        if ! curl -s --head "$url" > /dev/null; then
            echo "❌ Broken external link: $url"
            ((errors++))
        fi
    done
    
    return $errors
}
```

### 3. Quality Validation

```bash
#!/bin/bash

validate_quality() {
    local file="$1"
    local errors=0
    
    # ตรวจสอบ tables ใน Rules
    if grep -q "^## Rules" "$file"; then
        if ! grep -q "|" "$file"; then
            echo "❌ Rules section missing tables"
            ((errors++))
        fi
    fi
    
    # ตรวจสอบ code blocks ใน Template
    if grep -q "^## Template" "$file"; then
        if ! grep -q "^\`\`\`" "$file"; then
            echo "❌ Template section missing code blocks"
            ((errors++))
        fi
    fi
    
    # ตรวจสอบ language specification
    local code_blocks=$(grep -c "^\`\`\`" "$file")
    local lang_specs=$(grep -c "^\`\`\`[a-z]" "$file")
    
    if [[ $code_blocks -gt $lang_specs ]]; then
        echo "❌ $(($code_blocks - $lang_specs)) code blocks missing language"
        ((errors++))
    fi
    
    return $errors
}
```

### 4. Complete Validation

```bash
#!/bin/bash

# Complete validation script
validate_workflow() {
    local file="$1"
    local total_errors=0
    
    echo "🔍 Validating: $file"
    echo "----------------------------------------"
    
    # Section validation
    validate_sections "$file"
    total_errors=$((total_errors + $?))
    
    # Link validation
    validate_links "$file"
    total_errors=$((total_errors + $?))
    
    # Quality validation
    validate_quality "$file"
    total_errors=$((total_errors + $?))
    
    echo "----------------------------------------"
    if [[ $total_errors -eq 0 ]]; then
        echo "✅ PASSED - No issues found"
    else
        echo "❌ FAILED - $total_errors issues found"
    fi
    
    return $total_errors
}

# ตรวจสอบทุกไฟล์
find . -name "*.md" -type f | while read file; do
    validate_workflow "$file"
done
```

## Validation Workflow

### Phase 1: Pre-Check
1. ตรวจสอบว่าไฟล์มี sections ครบถ้วน
2. ตรวจสอบว่ามี tables และ code blocks
3. ตรวจสอบว่า front matter ครบถ้วน

### Phase 2: Content Check
1. ตรวจสอบความยาวของ sections
2. ตรวจสอบความถูกต้องของ content
3. ตรวจสอบความสอดคล้องกับมาตรฐาน

### Phase 3: Link Check
1. ตรวจสอบ internal links
2. ตรวจสอบ external links
3. ตรวจสอบ anchor links

### Phase 4: Quality Check
1. ตรวจสอบ grammar และ spelling
2. ตรวจสอบ consistency
3. ตรวจสอบ accessibility

### Phase 5: Final Report
1. สรุปผลการตรวจสอบ
2. ระบุ issues ที่ต้องแก้ไข
3. ยืนยันว่าผ่านมาตรฐาน
