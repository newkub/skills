# Skill Architecture

## โครงสร้าง Directory

โครงสร้างโฟลเดอร์สำหรับ Devin Skills

```
skill-name/
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
    │   ├── glob/                # Files ที่ใช้ glob patterns
    │   └── model_decision/      # Template files สำหรับ model decision
    └── workflows/               # Workflow files สำหรับ task automation
```

## หมวดหมู่ไฟล์

### guide/

ไฟล์เนื้อหาแนะนำและ best practices สำหรับ skill



- `best-practices.md` - Best practices สำหรับการเขียน skills
- `architecture.md` - โครงสร้างของ skills
- `configuration.md` - การตั้งค่า skills

### references/

ไฟล์เอกสารอ้างอิง API และ documentation

- `api.md` - API documentation สำหรับ skill types
- `cli.md` - CLI commands และ usage
- `configuration.md` - Configuration options
- `sitemap.md` - Sitemap ของ documentation
- `website.md` - Link ไปยัง official website

### workflows/

ไฟล workflows สำหรับ automation tasks



- `write-skills.md` - สร้าง skill ใหม่
- `update-skills.md` - อัปเดต skill ที่มีอยู่
- `improve-skills.md` - ปรับปรุงคุณภาพ skill

### Skill Types

ระบุ skill type จาก prefix ชื่อ folder เพื่อกำหนด folder และ file ที่ต้องการ

- `guide-` - guides และ best practices
- `lang-` - programming languages
- `lib-` - libraries
- `framework-` - frameworks
- `runtime-` - runtime environments
- `cloud-` - cloud platforms และ services
- `create-` - สร้าง extensions สำหรับ platforms ต่างๆ
- `tool-` - development tools

### Folder Responsibilities

#### SKILL.md

Index file หลักของ skill

- อธิบาย when to use, skills related, และ references
- เป็นจุดเริ่มต้นสำหรับการใช้งาน skill

#### guide/

เนื้อหาแนะนำและ best practices

- ไฟล์เช่น: best-practices.md, architecture.md, configuration.md
- เป็นภาษาไทย

#### key-concepts/

แนวคิดสำคัญของ skill

- แยกแต่ละ concept ในไฟล์แยกกัน
- เป็นภาษาไทย

#### principles/

หลักการของ skill

- แยกแต่ละ principle ในไฟล์แยกกัน
- เป็นภาษาไทย

#### references/

เอกสารอ้างอิง API และ documentation

- ไฟล์เช่น: api.md, cli.md, sitemap.md, website.md
- เป็นภาษาอังกฤษ

#### workflows/

Workflows สำหรับ automation tasks

- ไฟล์เช่น: setup-<skill>.md, use-<skill>.md
- เป็นภาษาไทย

#### templates/

Templates สำหรับเริ่มต้น

- ใช้สำหรับ scaffolding หรือ boilerplate

#### scripts/

Scripts สำหรับ automation

- เขียนด้วย TypeScript

#### .devin/

Rules และ configurations สำหรับ AI agent

- มี structure files และ templates สำหรับ skill type นั้นๆ
- ใช้สำหรับ model decision และ automation
