# Markdown Standards

## มาตรฐานการเขียน Markdown สำหรับ Skills

### หลักการพื้นฐาน

1. **Thai Language** - ใช้ภาษาไทยสำหรับคำอธิบายหลัก
2. **Technical Terms** - ใช้คำศัพท์ภาษาอังกฤษสำหรับ technical terms
3. **Clear Structure** - ใช้ headings ที่ชัดเจน
4. **Consistent Formatting** - ใช้รูปแบบเดียวกันทั่วทั้งไฟล์

### Heading Structure

```markdown
# Skill Name                    (ไม่ใช้ - ใช้แค่ใน SKILL.md)
## Section Name                   (Main sections)
### Subsection Name              (Subsections)
#### Detail Name                 (Details)
```

### กฎการใช้งาน

#### Lists
- ใช้ hyphen `-` สำหรับ unordered lists
- ใช้ numbers `1.` `2.` สำหรับ ordered lists
- เว้นวรรคหลังหนึ่งบรรทัด

#### Tables
```markdown
| Column 1 | Column 2 | Column 3 |
|-----------|------------|-----------|
| Data 1    | Data 2     | Data 3    |
```

#### Code Blocks
```markdown
```yaml
# ใช้ language identifier
code here
```
```

#### Links
- **Skills**: `@skill-name`
- **Workflows**: `/workflow-name`
- **Files**: `path/to/file.md`
- **External**: `[Text](URL)`

### Content Guidelines

#### Language Usage
- **Thai** สำหรับคำอธิบาย: "กำหนดมาตรฐานการสร้าง"
- **English** สำหรับ technical terms: "frontmatter", "semantic versioning"
- **Mixed** ตามความเหมาะ: "TypeScript skills", "API endpoints"

#### Tone and Style
- **Active Voice**: "สร้างไฟล์" ไม่ใช่ "ไฟล์ถูกสร้าง"
- **Imperative Mood**: "ตรวจสอบ", "สร้าง", "อัพเดท"
- **Clear Instructions**: ใช้ขั้นตอนที่ชัดเจน
- **Concise** ไม่ยาวเกินไป

### Formatting Examples

#### ✅ Good Example
```markdown
## Purpose

กำหนดมาตรฐานการสร้าง skill files:

- **โครงสร้างสม่ำเสมอ** — ทุก skill ใช้รูปแบบเดียวกัน
- **ผลลัพธ์แน่นอน** — ทำซ้ำได้ ไม่ผิดพลาด
- **อ่านง่าย** — ใช้งานได้จริง ไม่งง
```

#### ❌ Bad Example
```markdown
## Purpose

Skill files creation standards.

- Consistent structure — all skills use same format
- Deterministic output — repeatable without errors
- Easy to read — practically usable, not confusing
```

### Validation Rules

1. **Thai First** - คำอธิบายหลักต้องเป็นภาษาไทย
2. **Technical Terms** - คำศัพท์ technical ใช้ภาษาอังกฤษ
3. **No Spaces in Headers** - ใช้ kebab-case ใช่ space case
4. **Consistent Lists** - ใช้รูปแบบเดียวกันทั่วทั้งไฟล์
5. **Proper Links** - ใช้รูปแบบ `@skill` และ `/workflow`

### Testing

ตรวจสอบ markdown quality:

```bash
# ตรวจสอบว่าใช้ภาษาไทยหรือไม่
grep -E "^[##].*" SKILL.md | head -5

# ตรวจสอบ heading structure
grep -E "^#{1,3}" SKILL.md

# ตรวจสอบ link format
grep -E "@[a-zA-Z-]+|/[a-zA-Z-]+" SKILL.md
```
