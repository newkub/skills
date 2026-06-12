# Structure

## โครงสร้างและ Organization ของ Workflow-Ship

### Directory Structure

```text
workflow-ship/
├── SKILL.md
├── knowledge/
│   └── guide/
│       ├── key-concept.md
│       ├── how-it-works.md
│       ├── features.md
│       ├── configuration.md
│       ├── quick-start.md
│       ├── best-practices.md
│       ├── integration.md
│       ├── architecture.md
│       ├── structure.md
│       ├── performance.md
│       ├── security.md
│       ├── migration.md
│       ├── ecosystem.md
│       ├── testing.md
│       ├── patterns.md
│       └── troubleshooting.md
└── references/
    ├── website.md
    ├── sitemap.md
    ├── api.md
    ├── cli.md
    ├── tui-usage.md
    └── configuration.md
```

### File Organization

#### SKILL.md

**Purpose:** Index และ overview ของ skill

**Content:**
- Frontmatter (name, description)
- When to use
- Skills related
- Directory structure
- File categories

#### knowledge/guide/

**Purpose:** เอกสารแนะนำและคู่มือ

**Organization:**
- **key-concept.md** - แนวคิดหลัก
- **how-it-works.md** - วิธีการทำงาน
- **features.md** - ฟีเจอร์หลัก
- **configuration.md** - การตั้งค่า
- **quick-start.md** - เริ่มต้นใช้งาน
- **best-practices.md** - แนวทางปฏิบัติที่ดีที่สุด
- **integration.md** - การเชื่อมต่อ
- **architecture.md** - สถาปัตยกรรม
- **structure.md** - โครงสร้าง
- **performance.md** - ประสิทธิภาพ
- **security.md** - ความปลอดภัย
- **migration.md** - การย้าย
- **ecosystem.md** - ระบบนิเวศ
- **testing.md** - การทดสอบ
- **patterns.md** - Patterns
- **troubleshooting.md** - การแก้ปัญหา

#### references/

**Purpose:** เอกสารอ้างอิง

**Organization:**
- **website.md** - เว็บไซต์และเอกสาร
- **sitemap.md** - Sitemap
- **api.md** - API reference
- **cli.md** - CLI commands
- **tui-usage.md** - TUI usage
- **configuration.md** - Configuration options

### Phase Structure

Workflow-Ship แบ่งเป็น 3 phases:

#### Phase 1: Ship-Code

**Structure:**
```
Ship-Code
├── Planning
│   ├── Analysis
│   ├── Design
│   └── Implementation
├── Code Generation
│   ├── Write
│   ├── Refactor
│   └── Optimize
└── Build
    ├── Compile
    ├── Bundle
    └── Output
```

#### Phase 2: Run-Verify

**Structure:**
```
Run-Verify
├── Loop Until Complete
│   ├── Typecheck
│   ├── Lint
│   └── Test
└── Error Resolution
    ├── Analyze
    ├── Fix
    └── Retest
```

#### Phase 3: Run-Dev

**Structure:**
```
Run-Dev
├── Loop Until Complete
│   ├── Start Server
│   ├── Monitor
│   └── Check Errors
└── Error Resolution
    ├── Analyze
    ├── Fix
    └── Retest
```

### Component Structure

#### 1. Sequential Executor

**Responsibilities:**
- บังคับลำดับ
- ตรวจสอบ dependencies
- ป้องกันการข้าม steps

#### 2. Loop Controller

**Responsibilities:**
- วนซ้ำจนผ่าน
- ตรวจสอบ success
- จัดการ retries

#### 3. Error Resolver

**Responsibilities:**
- วิเคราะห์ root cause
- แก้ไข minimal
- ทดสอบซ้ำ

### Naming Conventions

#### Files

- ใช้ kebab-case: `key-concept.md`
- ใช้คำที่ชัดเจน: `best-practices.md`
- ใช้คำนาม: `architecture.md`

#### Directories

- ใช้ kebab-case: `knowledge/guide/`
- ใช้คำที่ชัดเจน: `references/`
- ใช้คำนามพหูพจน์: `workflows/`

#### Sections

- ใช้ Title Case: "## Key Concept"
- ใช้คำที่ชัดเจน: "## How It Works"
- ใช้คำนาม: "## Features"

### Content Structure

#### Markdown Files

1. **Title** - H1 header
2. **Introduction** - ภาพรวม
3. **Sections** - H2 headers
4. **Subsections** - H3 headers
5. **Code Blocks** - fenced code blocks
6. **Lists** - bullet lists
7. **Tables** - markdown tables
8. **Links** - markdown links

#### SKILL.md

1. **Frontmatter** - YAML frontmatter
2. **When to use** - bullet list
3. **Skills related** - bullet list
4. **Directory structure** - code block
5. **File categories** - tables

### Documentation Standards

#### Language

- ใช้ภาษาไทย
- ใช้คำศัพท์เทคนิคภาษาอังกฤษ
- อธิบายชัดเจน

#### Formatting

- ใช้ markdown เท่านั้น
- ใช้ proper indentation
- ใช้ consistent spacing

#### Links

- ใช้ relative links
- ใช้ descriptive text
- ตรวจสอบ validity

### Version Control

#### Git Structure

```text
.git/
├── hooks/
├── info/
├── logs/
└── refs/
```

#### Commit Messages

ใช้ conventional commits:

```
feat: add new feature
fix: fix bug
docs: update documentation
refactor: refactor code
```

### Next Steps

- อ่าน [Performance](performance.md) สำหรับประสิทธิภาพ
- อ่าน [Security](security.md) สำหรับความปลอดภัย
- อ่าน [Testing](testing.md) สำหรับการทดสอบ
