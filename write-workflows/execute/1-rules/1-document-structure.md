# Document Structure

## Purpose

กำหนดโครงสร้างมาตรฐานสำหรับไฟล์ workflow ให้มีความสม่ำเสมอ อ่านง่าย และเข้าถึงได้ภายใน 10 วินาที

## Scope

- ทุกไฟล์ workflow ใน `.windsurf/workflows/*.md`
- ทุกไฟล์ global workflow ใน `global_workflows/*.md`
- ไฟล์ documentation ทั้งหมดในโปรเจกต์

## Rules

### 1. Required Sections

ทุกไฟล์ workflow ต้องมี sections ต่อไปนี้ตามลำดับ:

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

### 4. Content Organization

#### 4.1 Tables Usage

- ใช้ tables เมื่อมี >= 3 รายการ
- Column headers ต้องชัดเจน
- ใช้ `**bold**` สำหรับ headers ที่สำคัญ

#### 4.2 Code Blocks

```markdown
# ระบุภาษาเสมอ
```typescript
const example = "code"
```

#### 4.3 Lists

```markdown
# Bullet points สำหรับรายการไม่มีลำดับ
- Item 1
- Item 2

# Numbered lists สำหรับขั้นตอน
1. Step 1
2. Step 2
```

### 5. Quality Standards

| Metric | Standard | Validation |
|--------|----------|-------------|
| **Readability** | อ่านเข้าใจภายใน 10 วินาที | สแกนดู sections |
| **Completeness** | มีทุก section ที่จำเป็น | Check ตามตาราง |
| **Consistency** | รูปแบบเหมือนกันทุกไฟล์ | Compare กับ template |
| **Accessibility** | Screen reader อ่านได้ | Test กับ markdown parser |

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
