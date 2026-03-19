# Write Workflows

## Purpose

ทักษะในการสร้างและจัดการ workflows ตามมาตรฐานโปรเจกต์ รวมถึงการเขียน, ตรวจสอบ, ปรับปรุง และบำรุงรักษาไฟล์ workflow

## When to Apply

ใช้ทักษะนี้เมื่อต้องการ:

1. **สร้าง workflow ใหม่** - เมื่อต้องการสร้างขั้นตอนการทำงานใหม่
2. **ปรับปรุง workflow ที่มีอยู่** - เมื่อต้องการพัฒนาคุณภาพหรือเพิ่มฟีเจอร์
3. **ตรวจสอบคุณภาพ workflows** - เมื่อต้องการตรวจสอบมาตรฐานและความสอดคล้อง
4. **แก้ไขปัญหา workflows** - เมื่อพบปัญหาหรือข้อผิดพลาด
5. **จัดระเบียบ workflows** - เมื่อต้องการจัดระเบียบและ standardize

## Directory Structure

```text
write-workflows/
├── execute/                    # การดำเนินการ
│   ├── 1-rules/               # กฎและมาตรฐาน (12 files)
│   │   ├── 1-document-structure.md
│   │   ├── 2-file-naming.md
│   │   ├── 3-front-matter.md
│   │   ├── 4-language.md
│   │   ├── 5-references.md
│   │   ├── 6-workflow-naming.md
│   │   ├── 7-workflow-steps.md
│   │   ├── 8-content-quality.md
│   │   ├── 9-validation.md
│   │   ├── 10-integration.md
│   │   ├── 11-patterns-templates.md
│   │   └── 12-patterns-examples.md
│   ├── 2-templates/           # เทมเพลต
│   │   └── global-workflows.md
│   └── 3-examples/            # ตัวอย่าง (6 files)
│       ├── 1-validate-workflows.md
│       ├── 2-improve-code-quality.md
│       ├── 3-test-performance.md
│       ├── 4-review-architecture.md
│       ├── 5-write-documentation.md
│       └── commit.md
├── workflows/                 # ไฟล์ workflows (8 files)
│   ├── write-workflows.md
│   ├── review-workflows.md
│   ├── validate-workflows.md
│   ├── verify-workflows.md
│   ├── improve-workflows.md
│   ├── test-workflows.md
│   ├── rename-workflows.md
│   └── update-workflows.md
├── reference/                 # การอ้างอิง
│   ├── internal.md
│   └── external.md
└── SKILL.md                   # ไฟล์ skill นี้
```

## File Categories

### execute/1-rules/ - กฎและมาตรฐาน (12 files)

| ไฟล์ | คำอธิบาย | วัตถุประสงค์ |
|------|----------|-------------|
| `1-document-structure.md` | โครงสร้างเอกสารมาตรฐาน | กำหนด sections ที่จำเป็นใน workflow |
| `2-file-naming.md` | กฎการตั้งชื่อไฟล์ | สูตร `<prefix>-<domain>-<topic>.md` |
| `3-front-matter.md` | Front matter format | กำหนด metadata และ follow references |
| `4-language.md` | มาตรฐานภาษา | ภาษาไทย/อังกฤษา ใน sections ต่างๆ |
| `5-references.md` | การอ้างอิง | วิธีการสร้าง links และ references |
| `6-workflow-naming.md` | กฎการตั้งชื่อ workflows | prefixes ที่อนุญาตใน workflows/ |
| `7-workflow-steps.md` | ขั้นตอน workflow | โครงสร้างและรูปแบบขั้นตอน |
| `8-content-quality.md` | **NEW** - คุณภาพเนื้อหา | Writing principles, language standards |
| `9-validation.md` | **NEW** - การตรวจสอบ | Validation scripts และ quality checks |
| `10-integration.md` | **NEW** - การเชื่อมโยง | Workflow และ skill integration |
| `11-patterns-templates.md` | **NEW** - Template patterns | กฎสำหรับไฟล์ templates |
| `12-patterns-examples.md` | **NEW** - Example patterns | กฎสำหรับไฟล์ examples |

### execute/2-templates/ - เทมเพลต (1 file)

| ไฟล์ | คำอธิบาย | วัตถุประสงค์ |
|------|----------|-------------|
| `global-workflows.md` | **UPDATED** - Template มาตรฐาน | โครงสร้างพื้นฐานสำหรับสร้าง workflow ใหม่ |

### execute/3-examples/ - ตัวอย่าง (6 files)

| ไฟล์ | คำอธิบาย | วัตถุประสงค์ |
|------|----------|-------------|
| `1-validate-workflows.md` | **UPDATED** - ตัวอย่าง validation | ตรวจสอบความถูกต้องของ workflows |
| `2-improve-code-quality.md` | **UPDATED** - ตัวอย่าง improvement | ปรับปรุงคุณภาพโค้ด |
| `3-test-performance.md` | **UPDATED** - ตัวอย่าง testing | ทดสอบประสิทธิภาพ |
| `4-review-architecture.md` | **UPDATED** - ตัวอย่าง review | ตรวจสอบสถาปัตยกรรม |
| `5-write-documentation.md` | **UPDATED** - ตัวอย่าง documentation | เขียนเอกสาร |
| `commit.md` | **UPDATED** - ตัวอย่าง commit | Commit ด้วย conventional commits |

### workflows/ - ไฟล์ workflows หลัก (8 files)

| ไฟล์ | Prefix | คำอธิบาย | วัตถุประสงค์ |
|------|--------|----------|-------------|
| `write-workflows.md` | write- | **NEEDS UPDATE** - เขียน workflows | สร้างและจัดรูปแบบ workflows |
| `review-workflows.md` | improve- | **NEEDS UPDATE** - ตรวจสอบ workflows | ตรวจสอบคุณภาพและมาตรฐาน |
| `validate-workflows.md` | update- | **NEEDS UPDATE** - ตรวจสอบความถูกต้อง | ตรวจสอบตามมาตรฐานที่กำหนด |
| `verify-workflows.md` | verify- | **NEEDS UPDATE** - ยืนยันการทำงาน | ทดสอบ functionality จริง |
| `improve-workflows.md` | improve- | **NEEDS UPDATE** - ปรับปรุง workflows | พัฒนาคุณภาพและประสิทธิภาพ |
| `test-workflows.md` | test- | **NEEDS UPDATE** - ทดสอบ workflows | ทดสอบและวัดผล |
| `rename-workflows.md` | rename- | **NEEDS UPDATE** - เปลี่ยนชื่อ workflows | จัดการการเปลี่ยนชื่อไฟล์ |
| `update-workflows.md` | update- | **NEEDS UPDATE** - อัพเดท workflows | อัพเดทเนื้อหาและโครงสร้าง |

### reference/ - การอ้างอิง (2 files)

| ไฟล์ | คำอธิบาย | วัตถุประสงค์ |
|------|----------|-------------|
| `internal.md` | การอ้างอิงภายใน | links และ references ภายใน project |
| `external.md` | การอ้างอิงภายนอก | external resources และ documentation |

## Workflow Categories

### 1. Creation Workflows (write-)

- สร้างสิ่งใหม่
- เขียนเนื้อหา
- จัดรูปแบบเอกสาร

### 2. Quality Workflows (review-, validate-)

- ตรวจสอบคุณภาพ
- ตรวจสอบมาตรฐาน
- ค้นหาปัญหา

### 3. Testing Workflows (verify-, test-)

- ทดสอบการทำงานจริง
- วัดผลประสิทธิภาพ
- ตรวจสอบ integration

### 4. Improvement Workflows (improve-)

- พัฒนาคุณภาพ
- เพิ่มฟีเจอร์ใหม่
- ปรับปรุงประสิทธิภาพ

### 5. Management Workflows (rename-, update-)

- จัดการไฟล์
- อัพเดทเนื้อหา
- ศึกษาและเรียนรู้

## Best Practices

1. **เริ่มจาก rules** - อ่าน `execute/1-rules/` ก่อนเสมอ
2. **ใช้ templates** - ใช้ `execute/2-templates/global-workflows.md` เป็นพื้นฐาน
3. **ศึกษา examples** - ดู `execute/3-examples/` สำหรับแนวทาง
4. **ตั้งชื่อตาม rules** - ปฏิบัติตาม `2-file-naming.md`
5. **ตรวจสอบความถูกต้อง** - ใช้ validation workflows อย่างสม่ำเสมอ

## Integration

ทักษะนี้เชื่อมโยงกับ:

- **@write-markdown** - การเขียนเอกสาร Markdown
- **@write-skills** - การเขียนไฟล์ SKILL.md
- **@improve-content-quality** - การปรับปรุงคุณภาพเนื้อหา
- **@validate** - การตรวจสอบความถูกต้อง

## Recent Updates

### New Rules Files (5 files)
- `8-content-quality.md` - มาตรฐานคุณภาพเนื้อหา
- `9-validation.md` - การตรวจสอบ workflows
- `10-integration.md` - การเชื่อมโยง workflows และ skills
- `11-patterns-templates.md` - กฎสำหรับ templates
- `12-patterns-examples.md` - กฎสำหรับ examples

### Updated Template
- `global-workflows.md` - เพิ่ม Expected Outcome, Directory Structure, Config

### Updated Examples (6 files)
- ทุกไฟล์มี Expected Outcome section
- ทำตาม global-workflows template
- เพิ่ม Expected Outcome และปรับ Steps เป็น 3 phases