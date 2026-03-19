# Language Standards

## Purpose

กำหนดมาตรฐานการใช้ภาษาในไฟล์ workflow

## Scope

- ทุกไฟล์ workflow ในโปรเจกต์
- เนื้อหาทั้งหมดในไฟล์ markdown

## Rules

### 1. Heading Language

| Element | ภาษา | Format |
|---------|------|--------|
| **Headings** | อังกฤษ | Title Case |
| **Hierarchy** | - | `#` → `##` → `###` |

### 2. Content Language

| Element | ภาษา | ใช้เมื่อ |
|---------|------|----------|
| **Descriptions** | ไทย | คำอธิบายหลัก |
| **Technical Terms** | English loanwords | คำเทคนิค |
| **Code** | อังกฤษ | Code blocks |

### 3. Technical Terms (English Loanwords)

ใช้ English loanwords สำหรับ:

| Category | ตัวอย่าง |
|----------|----------|
| **Programming** | `function`, `async`, `scope` |
| **Process** | `upstream`, `regression`, `workflow` |
| **Format** | `markdown`, `yaml`, `template` |
| **Quality** | `validation`, `integration`, `performance` |

### 4. Code Block Standards

| Rule | Requirement |
|------|-------------|
| **Language** | ระบุเสมอ |
| **Content** | ภาษาอังกฤษ |
| **Syntax** | Highlighting ที่เหมาะสม |

### 5. Formatting Standards

| Element | Syntax | ใช้สำหรับ |
|---------|--------|----------|
| **Bold** | `**คำ**` | เน้นคำสำคัญ |
| **Code** | `` `term` `` | Technical terms |
| **Lists** | `-` / `1.` | รายการ |
| **Tables** | `| |` | ข้อมูลเปรียบเทียบ |

## Template

```markdown
# [English Title]

## Purpose

[คำอธิบายวัตถุประสงค์เป็นภาษาไทย]

## Scope

- [ขอบเขตที่ 1]
- [ขอบเขตที่ 2]

## Rules

### 1. [กฎหลัก]

| รายการ | ค่า |
|--------|------|
| [item] | [value] |

## Template

```
[template content]
```

## Example

```
[example content]
```
```

## Example

### Good

```markdown
# Write Workflows

## Purpose

แนวทางการสร้างและจัดรูปแบบไฟล์ workflow

## Rules

### 1. Commit Format

| Type | ใช้เมื่อ |
|------|----------|
| `feat` | เพิ่ม feature |
| `fix` | แก้ไข bug |

## Template

```
feat(auth): add login
```

## Example

```
fix(api): resolve null error
```
```

### Bad

```markdown
# เขียนเวิร์คโฟลว์

## วัตถุประสงค์

วิธีการสร้างไฟล์เวิร์คโฟลว์

## กฎ

1. หัวข้อ: ใช้ภาษาไทย
2. คำอธิบาย: ใช้ภาษาอังกฤษ
```
