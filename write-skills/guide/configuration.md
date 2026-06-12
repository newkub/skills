# Skill Configuration

## การตั้งค่า Devin Skills

### Frontmatter

ทุก SKILL.md ต้องมี frontmatter ที่ด้านบนสุด

```yaml
---
title: Skill Name
description: คำอธิบายสั้นๆ เกี่ยวกับ skill
auto_execution_mode: 3
---
```

- `title` - ชื่อ skill ในรูปแบบ Title Case
- `description` - คำอธิบายสั้นๆ เกี่ยวกับ skill (ภาษาไทย)
- `auto_execution_mode` - โหมดการ execute (default: 3)

### .devin Configuration

สร้าง .devin/ folder และคัดลอกไฟล์ structure และ templates ที่เกี่ยวข้อง

1. สร้าง `.devin/` folder ใน skill
2. สร้าง subfolders: `rules/always-on/`, `rules/model_decision/`, `rules/glob/`, `workflows/`
3. คัดลอก `structure-<skill-type>.md` จาก `skills/write-skills/.devin/rules/always-on/` ไปยัง skill .devin/rules/always-on/
4. คัดลอก `template-<type>.md` ที่จำเป็นจาก `skills/write-skills/.devin/rules/model_decision/` ไปยัง skill .devin/rules/model_decision/
5. คัดลอก workflows ที่จำเป็นจาก `skills/write-skills/workflows/` ไปยัง skill .devin/workflows/
6. อัปเดต SKILL.md ให้รวม `### .devin` section พร้อมตารางไฟล์

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

ไฟล์ configuration ที่เกี่ยวข้อง

- `goal.md` - เป้าหมายของ skill
- `scope.md` - Scope และ execute steps
- `execute.md` - Execute steps ทั้งหมด
- `expected.md` - Expected outcome
