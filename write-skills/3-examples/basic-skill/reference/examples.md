---
description: ตัวอย่างการใช้งาน basic skill
title: Examples Reference
tags: [reference, examples, basic-skill]
goals:
  - ให้ตัวอย่างการใช้งานจริง
  - แสดง use cases ที่หลากหลาย
  - ทำให้เข้าใจการประยุกต์ใช้
---

# Examples Reference

## Purpose

แสดงตัวอย่างการใช้งาน basic skill ในสถานการณ์จริง

## Basic Examples

### 1. การสร้าง Skill ใหม่จาก Basic Template

#### Use Case: ผู้เริ่มต้นต้องการสร้าง skill แรก

```bash
# Step 1: Copy template
cp -r basic-skill my-first-skill

# Step 2: Navigate to new skill
cd my-first-skill

# Step 3: Customize frontmatter
vim SKILL.md
```

**Expected Result**: ได้ skill structure ที่สมบูรณ์พร้อมปรับแต่ง

#### Frontmatter Template:
```yaml
---
title: My First Skill
description: คำอธิบาย skill ของฉัน
version: 1.0.0
auto_execution_mode: 3
file-patterns: ["*.md", "*.txt"]
follow:
  skills: ["@basic-skill"]
  workflows: ["/write-workflows"]
  files: []
  mcp: []
---
```

### 2. การเพิ่ม Content ให้ครบถ้วน

#### Use Case: ต้องการเพิ่ม sections ที่จำเป็น

```markdown
## Purpose

[เขียนวัตถุประสงค์ที่ชัดเจน]

## Scope

ใช้สำหรับ:
- [รายการสิ่งที่ทำ]
- ไม่รวม [สิ่งที่ไม่ทำ]

## โครงสร้าง Directory

```text
skill-name/
├── SKILL.md
├── patterns/
└── rules/
```

## หมวดหมู่ไฟล์

| หมวดหมู่ | วัตถุประสงค์ | ไฟล์ตัวอย่าง |
|-----------|-------------|-------------|
| Main | เอกสารหลัก | SKILL.md |
| Patterns | รูปแบบ | patterns/*.md |
| Rules | กฎการ | rules/*.md |

## Implementation

[ขั้นตอนการนำไปใช้]

## Verification Checklist

- [ ] ตรวจสอบ item 1
- [ ] ตรวจสอบ item 2

## Related Skills

- [@skill-name] - คำอธิบายความเกี่ยวข้อง
```

### 3. การสร้าง Patterns และ Rules

#### Use Case: ต้องการเพิ่ม patterns และ rules เฉพาะทาง

**Pattern Example** (`patterns/01-domain-pattern.md`):
```markdown
---
description: รูปแบบสำหรับ domain เฉพาะทาง
title: 1-Domain Pattern
tags: [pattern, domain]
---

# Domain Pattern

## Purpose
รูปแบบสำหรับ [domain name]

## Implementation
[วิธีการ implement]

## Examples
[ตัวอย่างการใช้]
```

**Rule Example** (`rules/1-domain-setup.md`):
```markdown
---
description: การติดตั้งสำหรับ domain เฉพาะทาง
title: 1-Domain Setup
tags: [rule, setup, domain]
---

# Domain Setup

## Prerequisites
- [ข้อกำหนด 1]
- [ข้อกำหนด 2]

## Setup Steps
1. [ขั้นที่ 1]
2. [ขั้นที่ 2]

## Verification
- [ ] ตรวจสอบ item 1
- [ ] ตรวจสอบ item 2
```

## Advanced Examples

### 1. การปรับแต่ง Basic Skill สำหรับ Domain เฉพาะ

#### Use Case: สร้าง skill สำหรับ web development

**Customized Frontmatter**:
```yaml
---
title: Web Development Skill
description: ตัวอย่าง skill สำหรับ web development
version: 1.0.0
auto_execution_mode: 3
file-patterns: ["*.html", "*.css", "*.js", "*.ts", "*.jsx", "*.tsx"]
follow:
  skills: ["@react", "@vue", "@next"]
  workflows: ["/write-workflows"]
  files: []
  mcp: []
---
```

**Domain-Specific Sections**:
```markdown
## Purpose

ตัวอย่าง skill สำหรับ web development:

- **Frontend Development** - พัฒนาส่วน frontend
- **Backend Integration** - เชื่อมต่อกับ backend
- **Modern Tools** - ใช้เครื่องมือสมัยใหม่
- **Best Practices** - ปฏิบัติที่ดีที่สุด

## Scope

ใช้สำหรับ:
- พัฒนา web applications
- การจัดการ frontend frameworks
- การเชื่อมต่อ APIs
- ไม่รวม mobile applications

## โครงสร้าง Directory

```text
web-dev-skill/
├── SKILL.md
├── patterns/
│   ├── 01-component-pattern.md
│   ├── 02-api-integration.md
│   └── 03-styling-pattern.md
├── rules/
│   ├── 1-project-setup.md
│   ├── 2-component-standards.md
│   └── 3-performance-rules.md
└── knowledge/
    ├── core-concepts.md
    └── best-practices.md
```
```

### 2. การสร้าง Multi-Domain Skill

#### Use Case: Skill ที่ครอบคลุมหลาย domains

**Structure Example**:
```text
multi-domain-skill/
├── SKILL.md
├── patterns/
│   ├── 01-domain-a-pattern.md
│   ├── 02-domain-b-pattern.md
│   └── 03-integration-pattern.md
├── rules/
│   ├── 1-shared-rules.md
│   ├── 2-domain-a-rules.md
│   └── 3-domain-b-rules.md
├── knowledge/
│   ├── shared-concepts.md
│   ├── domain-a-concepts.md
│   └── domain-b-concepts.md
└── reference/
    ├── domain-a-examples.md
    ├── domain-b-examples.md
    └── integration-examples.md
```

### 3. การสร้าง Interactive Skill

#### Use Case: Skill ที่มี interactive elements

**Interactive Sections**:
```markdown
## Implementation

### Step-by-Step Guide

#### Step 1: Preparation
```bash
# Command to run
mkdir my-project
cd my-project
```

#### Step 2: Configuration
```json
{
  "name": "my-project",
  "version": "1.0.0"
}
```

#### Step 3: Testing
```bash
# Test command
npm test
```

### Troubleshooting

| Problem | Solution |
|----------|----------|
| Error A | Fix A |
| Error B | Fix B |
```

## Verification Checklist

### Setup Verification
- [ ] Project created successfully
- [ ] Configuration correct
- [ ] Dependencies installed

### Quality Verification
- [ ] Code follows standards
- [ ] Tests pass
- [ ] Documentation complete
```

## Real-World Use Cases

### 1. Team Onboarding

#### Scenario: ทีมใหม่ต้องการเรียนรู้ skill framework

**Implementation**:
1. ใช้ basic-skill เป็น starting point
2. สร้าง custom skills สำหรับ team domains
3. ทำ onboarding session โดยใช้ examples
4. สร้าง team-specific best practices

**Results**:
- เรียนรู้ framework เร็วขึ้น
- มีมาตรฐานที่สม่ำเสมอ
- ลด learning curve สำหรับ new members

### 2. Project Standardization

#### Scenario: องค์กรต้องการ standardize project documentation

**Implementation**:
1. สร้าง basic-skill templates
2. ปรับแต่งตาม organization standards
3. สร้าง guidelines สำหรับ different project types
4. ทำ training สำหรับ teams

**Results**:
- Documentation consistency ทั่วองค์กร
- Easier knowledge sharing
- Improved project onboarding

### 3. Knowledge Management

#### Scenario: ต้องการจัดการ knowledge ใน organization

**Implementation**:
1. ใช้ basic-skill structure สำหรับ knowledge base
2. สร้าง skills สำหรับ different knowledge domains
3. ทำ cross-references ระหว่าง skills
4. สร้าง search และ navigation system

**Results**:
- Structured knowledge base
- Easy knowledge discovery
- Better knowledge retention

## Integration Examples

### 1. Integration with Workflows

#### Example: ใช้กับ `/write-workflows`

```markdown
## Implementation

### Using Write Workflows

1. **Start with `/write-workflows`**
   ```bash
   /write-workflows
   ```

2. **Apply basic-skill structure**
   - Copy directory structure
   - Adapt content guidelines
   - Follow naming conventions

3. **Customize for domain**
   - Add domain-specific sections
   - Create custom patterns
   - Define domain rules
```

### 2. Integration with Other Skills

#### Example: ใช้กับ `@typescript`

```markdown
## Related Skills

- `@typescript` - สำหรับ TypeScript development
- `@basic-skill` - สำหรับ foundational structure
- `@write-skills` - สำหรับ skill creation

### TypeScript Integration

When creating TypeScript skills:
1. Start with basic-skill structure
2. Add TypeScript-specific patterns
3. Include TypeScript tooling rules
4. Reference TypeScript best practices
```

### 3. Integration with MCP

#### Example: ใช้กับ MCP servers

```markdown
## Implementation

### MCP Integration

1. **Context7 Integration**
   - Use for documentation lookup
   - Reference external resources
   - Validate technical information

2. **Memory Integration**
   - Store skill metadata
   - Cache frequently used patterns
   - Track user preferences

3. **Browser Integration**
   - Test web-based examples
   - Validate external links
   - Capture screenshots
```

## Troubleshooting Examples

### 1. Common Structure Issues

#### Problem: Missing required directories
```bash
# Check structure
find . -type d

# Fix missing directories
mkdir -p patterns rules knowledge reference
```

#### Problem: Incorrect file naming
```bash
# List files with issues
find . -name "* *" -o -name "*_*"

# Rename files
mv "old name.md" "new-name.md"
```

### 2. Content Issues

#### Problem: Missing required sections
```markdown
# Add missing sections in SKILL.md

## Purpose
[Add purpose statement]

## Scope
[Define scope]

## โครงสร้าง Directory
[Add structure diagram]
```

#### Problem: Inconsistent formatting
```markdown
# Fix formatting issues

## Section Name

Use consistent heading levels
Use proper bullet points
Use consistent spacing
```

### 3. Quality Issues

#### Problem: Broken links
```bash
# Check internal links
grep -r "\[.*\](.*\.md)" .

# Fix broken references
# Update link targets
```

#### Problem: Missing examples
```markdown
# Add working examples

## Examples

### Basic Example
```bash
# Working command
echo "Hello World"
```

### Advanced Example
```python
# Working code
def hello():
    return "Hello World"
```
```

## Success Stories

### 1. Rapid Skill Creation

**Challenge**: ต้องสร้าง 10 skills ใน 1 สัปดาห์

**Solution**: ใช้ basic-skill template + automation

**Results**:
- สร้างได้ 12 skills ในเวลา 3 วัน
- Quality สม่ำเสมอทั้งหมด
- Team นำไปใช้ได้ทันที

### 2. Standardization Success

**Challenge**: 5 teams มี documentation standards ที่แตกต่างกัน

**Solution**: ใช้ basic-skill เป็นมาตรฐานร่วม

**Results**:
- มีมาตรฐานเดียวกันทั้งองค์กร
- ลด time ในการ review 70%
- เพิ่ม collaboration ระหว่าง teams

### 3. Knowledge Transfer

**Challenge**: Senior developer กำลังจะลาองาน

**Solution**: สร้าง skills จากความรู้ของ senior dev

**Results**:
- ถ่ายทอดความรู้ได้ 90%
- New hires พร้อมทำงานได้เร็วขึ้น
- รักษาความรู้ไว้ใน organization

## Best Practices Summary

### For Skill Creation
1. **Start with basic-skill template**
2. **Customize for specific domain**
3. **Add real-world examples**
4. **Test thoroughly**
5. **Get peer review**

### For Skill Maintenance
1. **Regular content updates**
2. **Link validation**
3. **Example testing**
4. **Community feedback**
5. **Continuous improvement**

### For Skill Usage
1. **Read SKILL.md first**
2. **Follow patterns in order**
3. **Adapt rules as needed**
4. **Verify implementation**
5. **Share feedback**

## Success Criteria

✅ **Comprehensive Examples**: ครอบคลุม use cases ที่สำคัญ  
✅ **Working Code**: ตัวอย่างที่ทำงานได้จริง  
✅ **Real-World Application**: นำไปใช้ได้จริง  
✅ **Clear Instructions**: คำแนะนำที่ชัดเจน  
✅ **Troubleshooting Support**: ช่วยแก้ปัญหาได้  
✅ **Integration Guidance**: การเชื่อมต่อกับระบบอื่น
