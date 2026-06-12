---
trigger: always_on
---

## โครงสร้าง Directory

โครงสร้างโฟลเดอร์สำหรับ Guide Skills

```
guide-<topic>/
├── SKILL.md                      # ไฟล์ index หลัก
├── guide/                        # เนื้อหาแนะนำและ best practices
├── key-concepts/                 # แนวคิดสำคัญ (optional)
├── principles/                   # หลักการ (optional)
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
    │   │   └── structure-guide.md
    │   └── glob/                # File pattern templates สำหรับเขียนไฟล์
    └── workflows/               # Workflow files สำหรับ task automation
```

## หมวดหมู่ไฟล์

### guide/

ไฟล์เนื้อหาแนะนำสำหรับ topic นั้นๆ

- `best-practices.md` - Best practices สำหรับ topic
- `configuration.md` - การตั้งค่าและ configuration
- `features.md` - คุณสมบัติและฟีเจอร์ต่างๆ
- `implementation.md` - วิธีการ implement
- `patterns.md` - Patterns และ best practices

### key-concepts/

แนวคิดสำคัญ (optional)

- แยกแต่ละ concept ในไฟล์แยกกัน
- เป็นภาษาไทย

### principles/

หลักการ (optional)

- แยกแต่ละ principle ในไฟล์แยกกัน
- เป็นภาษาไทย

### references/

ไฟล์เอกสารอ้างอิง

- `api.md` - API documentation
- `cli.md` - CLI commands และ usage
- `sitemap.md` - Sitemap ของ documentation
- `website.md` - Link ไปยัง official website

### workflows/

ไฟล์ workflows สำหรับ automation tasks

- `study-<topic>.md` - Study workflow สำหรับ topic
- `apply-<topic>.md` - Apply workflow สำหรับ topic

