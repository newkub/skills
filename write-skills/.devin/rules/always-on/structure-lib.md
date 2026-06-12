---
trigger: always_on
---

## โครงสร้าง Directory

โครงสร้างโฟลเดอร์สำหรับ Library Skills

```
lib-<name>/
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
    │   │   └── structure-lib.md
    │   └── glob/                # File pattern templates สำหรับเขียนไฟล์
    └── workflows/               # Workflow files สำหรับ task automation
```

## หมวดหมู่ไฟล์

### guide/

ไฟล์เนื้อหาแนะนำสำหรับ library

- `best-practices.md` - Best practices สำหรับการใช้งาน
- `configuration.md` - การตั้งค่าและ configuration
- `features.md` - คุณสมบัติและฟีเจอร์ต่างๆ
- `installation.md` - วิธีการติดตั้ง
- `usage.md` - วิธีการใช้งาน

### key-concepts/

แนวคิดสำคัญ (optional)

- แยกแต่ละ concept ในไฟล์แยกกัน
- เป็นภาษาไทย

### principles/

หลักการ (optional)

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

- `setup-<lib>.md` - Setup library
- `use-<lib>.md` - Use library
- `configure-<lib>.md` - Configure library

