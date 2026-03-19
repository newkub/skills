# Workflow Guide

> แนวทางการใช้และสร้าง Workflows ใน Windsurf

---

## 📋 อะไรคือ Workflow?

Workflow = ชุดคำสั่งอัตโนมัติที่ช่วยให้ทำงานเป็นระบบ มี 2 ประเภท:

1. **Global Workflows** - ใช้ได้ทุก project ผ่าน `/command`
2. **Skill Workflows** - เฉพาะ skill ใช้ผ่าน `@skill-name` + workflow path

---

## 🚀 Global Workflows

### วิธีใช้

พิมพ์ `/` ตามด้วยชื่อ workflow:

```text
/commit          # สร้าง conventional commit
/run-dev         # รัน dev server
/follow-nuxt     # ตั้งค่า Nuxt project
/analyze-project # วิเคราะห์โครงสร้าง project
```

### ตำแหน่งไฟล์

```text
global_workflows/
├── commit.md
├── run-dev.md
├── follow-nuxt.md
└── ...
```

---

## 📁 Skill Workflows

### วิธีใช้

เรียกผ่าน skill ที่โหลด:

```text
@framework-nuxt
/analyze-project
```

### ตำแหน่งไฟล์

```text
skills/
├── framework-nuxt/
│   ├── SKILL.md
│   └── workflows/
│       ├── analyze-project.md
│       └── setup-configuration.md
```

---

## 🏗️ โครงสร้าง Workflow

### Frontmatter (ส่วนหัว)

```yaml
---
description: คำอธิบายสั้นๆ ว่าทำอะไร
title: workflow-name          # ชื่อใช้เรียก
auto_execution_mode: 3        # 0=manual, 1=semi, 2=auto, 3=full-auto
file-patterns:               # สำหรับ auto-load (optional)
  - "**/*.vue"
  - "**/*.ts"
---
```

### เนื้อหา (Content)

```markdown
## 1. Phase Name

ขั้นตอนที่ 1...
// turbo ← ถ้าต้องการ auto-run step นี้

## 2. Phase Name

ขั้นตอนที่ 2...
```

---

## 📝 Naming Convention

### หมวดหมู่ตามเลข

| Prefix | หมวดหมู่ | ตัวอย่าง |
|--------|----------|----------|
| `00-meta/` | Meta workflows | 00-index.md, 01-naming-convention.md |
| `01-[name]` | Prepare | 01-setup.md, 01-init.md |
| `02-[name]` | Analyze | 02-analyze.md, 02-review.md |
| `03-[name]` | Execute | 03-execute.md, 03-implement.md |
| `04-[name]` | Validate | 04-validate.md, 04-test.md |
| `05-[name]` | Verify | 05-verify.md, 05-check.md |
| `06-[name]` | Finish | 06-finish.md, 06-report.md |
| `07-[name]` | Special | 07-deploy.md, 07-emergency.md |

### การสร้าง Subfolder

ใช้เมื่อมี workflows ย่อยที่เกี่ยวข้องกัน:

```text
02-analyze.md              # overview
02-analyze/
  01-code-analysis.md      # sub-workflow 1
  02-dependency-check.md   # sub-workflow 2
```

---

## ⚙️ Auto-Execution Modes

| Mode | ชื่อ | ลักษณะ | เหมาะกับ |
|------|------|--------|----------|
| 0 | Manual | ต้อง approve ทุก step | งานสำคัญ/ซับซ้อน |
| 1 | Semi-auto | บาง tool auto-run | งานทั่วไป |
| 2 | Auto | auto-run ถ้า safe | routine tasks |
| 3 | Full Auto | auto-run ทั้งหมด | งานที่ทำบ่อยมาก |

### การใช้ `// turbo`

เพิ่ม comment `// turbo` บนบรรทัดก่อนคำสั่งที่ต้องการ auto-run:

```markdown
1. สร้าง folder
// turbo
2. รัน install
// turbo
3. รัน dev server
```

---

## 🛠️ สร้าง Workflow ใหม่

### ขั้นตอน

1. **สร้างไฟล์** ตาม naming convention
2. **เขียน frontmatter** ครบถ้วน
3. **เขียนเนื้อหา** เป็นขั้นตอน
4. **ทดสอบ** ก่อนใช้งานจริง

### ตัวอย่าง: Simple Workflow

```markdown
---
description: รัน lint และแก้ไข error
title: run-lint
auto_execution_mode: 2
---

## 1. Run Lint

รัน linter เพื่อหาปัญหา:
// turbo

```bash
bun run lint
```
```


```text

```text

```text

## 2. Fix Errors

แก้ไข error ที่พบ:

- ดู error message
- แก้ไขไฟล์ที่ผิด
- รัน lint อีกครั้ง

## 3. Verify

ยืนยันว่าไม่มี error:

```bash
bun run lint
```

```text

---

## 📚 Common Workflow Patterns

### 1. Analysis Pattern

```markdown
## 1. Gather Information
- อ่านไฟล์ที่เกี่ยวข้อง
- ค้นหา pattern ใน codebase

## 2. Analyze
- วิเคราะห์ปัญหา
- หา root cause

## 3. Report
- สรุปผล
- เสนอแนวทางแก้ไข
```

### 2. Execution Pattern

```markdown
## 1. Prepare

- ตรวจสอบ prerequisites
- สำรองข้อมูลถ้าจำเป็น

## 2. Execute

- ทำตามขั้นตอน
- ตรวจสอบผลลัพธ์

## 3. Validate

- ทดสอบว่าทำงานได้
- แก้ไขถ้ามีปัญหา
```

### 3. Loop Pattern

```markdown
## 1. Initialize

- ตั้งค่าเริ่มต้น

## 2. Loop

ทำซ้ำจนกว่าจะสำเร็จ:

- ทำงาน
- ตรวจสอบ
- ถ้ายังไม่สำเร็จ กลับไปทำใหม่
```

---

## 🔗 Integration กับ Skills

### เรียก Skill จาก Workflow

```markdown
## 1. Load Skill

โหลด skill ที่จำเป็น:
@framework-nuxt
@lib-drizzle

## 2. Execute

ทำงานตามที่ skill กำหนด...
```

### เรียก Workflow จาก Workflow

```markdown
## 1. Run Sub-workflow

เรียกใช้งาน workflow ย่อย:
/01-setup
/02-analyze
```

---

## ✅ Best Practices

- **ชื่อสั้น กระชับ** - ใช้คำสั่งง่ายๆ
- **ขั้นตอนชัดเจน** - อ่านแล้วเข้าใจทันที
- **ใช้ `// turbo` อย่างระมัดระวัง** - เฉพาะที่ safe จริงๆ
- **ทดสอบก่อนใช้** - ลองรันก่อน commit
- **เอกสารครบถ้วน** - frontmatter สมบูรณ์

---

## 📖 Related

- [Best Practices](./best-practices.md)
- [Troubleshooting](./troubleshooting.md)
- [Examples](./examples.md)
