---
trigger: always_on
---

## โครงสร้าง Directory

โครงสร้างโฟลเดอร์สำหรับ Programming Language Skills

```
lang-<language>/
├── SKILL.md                      # ไฟล์ index หลัก
├── guide/                        # เนื้อหาแนะนำและ best practices
├── key-concepts/                 # แนวคิดสำคัญของภาษา (optional)
├── principles/                   # หลักการของภาษา (optional)
├── references/                   # เอกสารอ้างอิง
├── workflows/                    # Workflows สำหรับ automation
├── templates/                    # Templates สำหรับเริ่มต้น (optional)
├── scripts/                      # Scripts สำหรับ automation (optional)
└── .devin/                       # Rules และ configurations
    ├── goal.md                  # เป้าหมายของ skill
    ├── scope.md                 # Scope และ execute steps
    ├── execute.md               # Execute steps ทั้งหมด
    ├── expected.md              # Expected outcome
    ├── rules/
    │   ├── always-on/           # Structure files ที่ต้องมีเสมอ
    │   │   └── structure-lang.md
    │   └── glob/                # File pattern templates สำหรับเขียนไฟล์
    └── workflows/               # Workflow files สำหรับ task automation
```

## หมวดหมู่ไฟล์

### guide/
ไฟล์เนื้อหาแนะนำสำหรับภาษา

- `architecture.md` - Architecture ของภาษา
- `best-practices.md` - Best practices สำหรับการเขียน
- `configuration.md` - การตั้งค่าและ configuration
- `patterns.md` - Design patterns สำหรับภาษา
- `tooling.md` - Tools และ tooling สำหรับภาษา

### key-concepts/
แนวคิดสำคัญของภาษา (optional)

- แยกแต่ละ concept ในไฟล์แยกกัน
- เป็นภาษาไทย

### principles/
หลักการของภาษา (optional)

- แยกแต่ละ principle ในไฟล์แยกกัน
- เป็นภาษาไทย

### references/

ไฟล์เอกสารอ้างอิง API และ documentation

- `api.md` - API documentation
- `cli.md` - CLI commands และ usage
- `sitemap.md` - Sitemap ของ documentation
- `website.md` - Link ไปยัง official website

### workflows/

ไฟล์ workflows สำหรับ automation tasks

- `setup-<lang>-project.md` - Setup project สำหรับภาษา
- `write-<lang>-code.md` - Write code สำหรับภาษา

