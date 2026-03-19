# Content Quality Standards

## Purpose

กำหนดมาตรฐานคุณภาพเนื้อหาให้ workflow มีประสิทธิภาพ ชัดเจน และเข้าถึงได้ง่าย

## Scope

- เนื้อหาทั้งหมดในไฟล์ workflow
- เนื้อหาในไฟล์ documentation
- เนื้อหาในไฟล์ skills
- เนื้อหาใน README และ guides

## Rules

### 1. Writing Principles

| หลักการ | คำอธิบาย | ตัวอย่าง |
|----------|-----------|----------|
| **Clarity > Cleverness** | เขียนให้เข้าใจง่ายกว่าฉลาด | `validate input` แทน `perform input sanitization` |
| **Concise > Verbose** | กระชับแต่ครบถ้วน | 2-3 ประโยคต่อ section |
| **Action-oriented** | ใช้คำกริยาที่ชัดเจน | `ตรวจสอบ`, `ปรับปรุง`, `สร้าง` |
| **Consistent** | ใช้คำศัพท์เหมือนกัน | `validate` ไม่ใช่ `check`/`verify` |

### 2. Language Standards

| Element | ภาษา | ตัวอย่าง | หมายเหตุ |
|---------|------|----------|----------|
| **Headings** | อังกฤษ | `## Purpose` | ใช้ Title Case |
| **Descriptions** | ไทย | `วัตถุประสงค์ของ workflow` | ใช้ประโยคสั้น |
| **Technical Terms** | อังกฤษ | `function`, `async`, `API` | ไม่แปลเป็นไทย |
| **Code** | อังกฤษ | `const user = {}` | คงรูปแบบเดิม |

### 3. Content Structure

| Section | ความยาว | รูปแบบ | ห้าม |
|---------|----------|--------|------|
| **Purpose** | 1-2 ประโยค | กระชับ ชัดเจน | ยาวเกิน 3 ประโยค |
| **Scope** | 3-5 bullet points | รายการสั้น | ยาวเกิน 7 รายการ |
| **Rules** | ไม่จำกัด | Tables + Subsections | ไม่มีตาราง |
| **Template** | ไม่จำกัด | Code blocks | ไม่ระบุภาษา |
| **Example** | ไม่จำกัด | Complete examples | ไม่สมบูรณ์ |

### 4. Table Standards

| Rule | Requirement | ตัวอย่าง |
|------|-------------|----------|
| **Headers** | ชัดเจน กระชับ | `| รายการ | คำอธิบาย |` |
| **Alignment** | Left-aligned | `|---------|----------|` |
| **Content** | ไม่ซ้ำซ้อน | ใช้ `**bold**` เน้นสำคัญ |
| **Width** | พอดีหน้าจอ | ไม่เกิน 100 chars/line |

### 5. Code Block Standards

| Element | มาตรฐาน | ตัวอย่าง |
|---------|----------|----------|
| **Language** | ระบุเสมอ | ````typescript` |
| **Syntax** | ถูกต้อง | `const user: User = {}` |
| **Comments** | มีเมื่อจำเป็น | `// Validate input` |
| **Length** | ไม่เกิน 20 lines | แบ่งเป็นหลาย blocks ถ้ายาว |

### 6. Link Standards

| ประเภท | รูปแบบ | ตัวอย่าง |
|---------|--------|----------|
| **Internal** | Relative path | `[Document Structure](./1-document-structure.md)` |
| **External** | Full URL | `[Markdown Guide](https://www.markdownguide.org/)` |
| **Anchor** | Section link | `[See Rules](#rules)` |
| **Email** | Mailto | `[Contact](mailto:team@example.com)` |

### 7. Quality Metrics

| Metric | Target | Validation |
|--------|--------|-------------|
| **Readability** | อ่านเข้าใจภายใน 10 วินาที | สแกน sections และ tables |
| **Scannability** | หาข้อมูลได้ใน 5 วินาที | มี headings และ bold text |
| **Completeness** | มีทุก section ที่จำเป็น | Check ตาม template |
| **Accuracy** | ข้อมูลถูกต้อง | Test examples และ links |
| **Consistency** | รูปแบบเหมือนกัน | Compare กับไฟล์อื่น |

## Template

```markdown
# [Title]

## Purpose

[คำอธิบาย 1-2 ประโยค กระชับ ชัดเจน]

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
# Code Quality Standards

## Purpose

กำหนดมาตรฐานคุณภาพโค้ดให้สอดคล้องกับ best practices

## Scope

- ทุกไฟล์ TypeScript/JavaScript
- การ review code และ refactoring
- การเขียน tests

## Rules

### 1. Code Organization

| รายการ | คำอธิบาย | ตัวอย่าง |
|--------|----------|----------|
| **Functions** | Single responsibility | `validateEmail()` |
| **Variables** | Descriptive names | `const userEmail = ""` |
| **Imports** | Grouped by type | External, internal, relative |

### 2. Type Safety

| Rule | Requirement | Example |
|------|-------------|---------|
| **No any** | ใช้ types เสมอ | `const user: User = {}` |
| **Interfaces** | กำหนด types ชัดเจน | `interface User { id: string }` |
| **Generics** | ใช้เมื่อจำเป็น | `Promise<User>` |

## Template

```typescript
/**
 * [Function description]
 * @param param - Parameter description
 * @returns Return value description
 */
export const functionName = (
  param: Type
): ReturnType => {
  // Implementation
  return result
}
```

## Example

```typescript
/**
 * ตรวจสอบความถูกต้องของ email
 * @param email - Email address ที่ต้องการตรวจสอบ
 * @returns true ถ้า email ถูกต้อง
 */
export const validateEmail = (
  email: string
): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}
```
```

## Quality Checklist

### Before Publishing

- [ ] Purpose กระชับ ชัดเจน (1-2 ประโยค)
- [ ] Scope มีไม่เกิน 5 รายการ
- [ ] Rules มี tables และ subsections
- [ ] Template มี code blocks พร้อมภาษา
- [ ] Example สมบูรณ์และใช้งานได้
- [ ] Links ทั้งหมดใช้งานได้
- [ ] ไม่มี typo หรือ grammar errors
- [ ] สอดคล้องกับไฟล์อื่นในโปรเจกต์

### Validation Script

```bash
#!/bin/bash

# ตรวจสอบคุณภาพเนื้อหา
check_content_quality() {
    local file="$1"
    
    # ตรวจสอบ sections
    if ! grep -q "^## Purpose" "$file"; then
        echo "❌ Missing Purpose section"
        return 1
    fi
    
    if ! grep -q "^## Scope" "$file"; then
        echo "❌ Missing Scope section"
        return 1
    fi
    
    # ตรวจสอบ tables
    if grep -q "^## Rules" "$file" && ! grep -q "|" "$file"; then
        echo "❌ Rules section missing tables"
        return 1
    fi
    
    # ตรวจสอบ code blocks
    if grep -q "^## Template" "$file" && ! grep -q "^\`\`\`" "$file"; then
        echo "❌ Template section missing code blocks"
        return 1
    fi
    
    echo "✅ Content quality OK"
    return 0
}

# ตรวจสอบทุกไฟล์
find . -name "*.md" -type f | while read file; do
    check_content_quality "$file"
done
```
