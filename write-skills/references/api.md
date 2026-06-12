# Write Skills API

## Skill Types API

### Determine Skill Type

ระบุ skill type จาก prefix ชื่อ folder เพื่อกำหนด folder และ file ที่ต้องการ

| Prefix | Type | Description |
|--------|------|-------------|
| `guide-` | Guide | Guides และ best practices |
| `lang-` | Language | Programming languages |
| `lib-` | Library | Libraries |
| `framework-` | Framework | Frameworks |
| `runtime-` | Runtime | Runtime environments |
| `cloud-` | Cloud | Cloud platforms และ services |
| `create-` | Create | สร้าง extensions สำหรับ platforms ต่างๆ |
| `tool-` | Tool | Development tools |

## Folder Structure API

### Required Folders

Folders ที่ต้องมีเสมอในทุก skill:

- `SKILL.md` - Index file หลัก
- `guide/` - เนื้อหาแนะนำและ best practices
- `references/` - เอกสารอ้างอิง
- `workflows/` - Workflows สำหรับ automation
- `.devin/` - Rules และ configurations

### Optional Folders

Folders ที่เลือกใช้ได้:

- `key-concepts/` - แนวคิดสำคัญ
- `principles/` - หลักการ
- `templates/` - Templates สำหรับเริ่มต้น
- `scripts/` - Scripts สำหรับ automation (TypeScript)

## .devin Configuration API

### Rules Structure

```
.devin/
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

### Structure Files

ไฟล์ structure ที่ต้องมีเสมอใน `rules/always-on/`:

- `structure-guide.md` - สำหรับ guide- skills
- `structure-lang.md` - สำหรับ lang- skills
- `structure-lib.md` - สำหรับ lib- skills
- `structure-framework.md` - สำหรับ framework- skills
- `structure-runtime.md` - สำหรับ runtime- skills
- `structure-cloud.md` - สำหรับ cloud- skills
- `structure-create.md` - สำหรับ create- skills
- `structure-tool.md` - สำหรับ tool- skills

### Template Files

ไฟล์ template สำหรับ model decision ใน `rules/model_decision/`:

- `template-guide.md` - สำหรับ guide content
- `template-lang.md` - สำหรับ language features
- `template-lib.md` - สำหรับ library API
- `template-framework.md` - สำหรับ framework components
- `template-runtime.md` - สำหรับ runtime features
- `template-cloud.md` - สำหรับ cloud services
- `template-create.md` - สำหรับ extension creation
- `template-tool.md` - สำหรับ tool usage
- `template-api.md` - สำหรับ API documentation
- `template-cli.md` - สำหรับ CLI commands
- `template-config.md` - สำหรับ configuration
- `template-component.md` - สำหรับ component patterns
- `template-web.md` - สำหรับ web applications

### Configuration Files

ไฟล์ configuration ที่ต้องมีใน `.devin/`:

- `goal.md` - เป้าหมายของ skill
- `scope.md` - Scope และ execute steps
- `execute.md` - Execute steps ทั้งหมด
- `expected.md` - Expected outcome
